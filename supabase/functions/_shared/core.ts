import type { SupabaseClient } from 'npm:@supabase/supabase-js@2'
import { DEFAULT_RULES, score, type Rules } from './scoring.ts'
import { optimise, type OptAsset, type OptCase } from './optimizer.ts'
import { deliver, TEXT } from './messaging.ts'

const AREA_CENTER: Record<string, [number, number]> = {
  lyari: [24.8615, 66.9905], malir: [24.893, 67.195], korangi: [24.8376, 67.1204],
  keamari: [24.82, 66.98], gulshan: [24.92, 67.08], other: [24.86, 67.01],
}
const ACTIVE = ['pending', 'accepted', 'overridden', 'dispatched']

export async function loadConfig(sb: SupabaseClient): Promise<Record<string, any>> {
  const { data } = await sb.from('system_config').select('key, value')
  const cfg: Record<string, any> = {}
  for (const r of data || []) cfg[(r as any).key] = (r as any).value
  return cfg
}

export async function setConfig(sb: SupabaseClient, key: string, value: unknown) {
  await sb.from('system_config').upsert({ key, value })
}

export const demoNowMs = (cfg: Record<string, any>) => Date.now() + Number(cfg.demo_clock?.offset_seconds ?? 0) * 1000

/** Accepts GeoJSON (PostgREST default) or falls back to the area centroid. Returns [lat, lng]. */
export function latLng(loc: any, area?: string | null): [number, number] {
  if (loc && typeof loc === 'object' && Array.isArray(loc.coordinates)) return [Number(loc.coordinates[1]), Number(loc.coordinates[0])]
  return AREA_CENTER[area || 'other'] || AREA_CENTER.other
}

export async function audit(sb: SupabaseClient, row: Record<string, unknown>) {
  await sb.from('audit_log').insert({ user_name: 'system', user_role: null, ...row })
}

const chunk = <T>(a: T[], n: number) => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, i * n + n))

// ------------------------------------------------------------------ recompute
export async function runRecompute(sb: SupabaseClient) {
  const cfg = await loadConfig(sb)
  const rules: Rules = { ...DEFAULT_RULES, ...(cfg.rules_config || {}) }
  const mode = cfg.hazard_state?.mode === 'heatwave' ? 'heatwave' : 'flood'
  const countdownMin = Number(cfg.hazard_countdown_seconds ?? 13330) / 60
  const silenceMin = Number(cfg.escalation_rules?.silence_min ?? 60)
  const sim = cfg.simulation_state || {}
  const now = demoNowMs(cfg)

  const { data: cases, error } = await sb
    .from('cases')
    .select('id, name, name_urdu, age, phone_type, vulnerability_flags, exposure_score, unknown_data, confidence_score, last_contact_at, tier, risk, status, location, area')
    .in('status', ACTIVE)
  if (error) throw new Error(error.message)

  type Row = any
  const scored = (cases || []).map((c: Row) => {
    const flags: string[] = Array.isArray(c.vulnerability_flags) ? c.vulnerability_flags : []
    const silent = c.last_contact_at ? Math.max(0, (now - new Date(c.last_contact_at).getTime()) / 60000) : null
    const s = score({
      flags, age: c.age, phoneType: c.phone_type, exposure: c.exposure_score, unknown: c.unknown_data,
      confidence: c.confidence_score, silentMinutes: silent, countdownMinutes: countdownMin, mode, rules, silenceMin,
    })
    return { c, flags, s }
  })

  // 1) write scores (human overrides keep their tier)
  const changed = scored.filter(({ c, s }) =>
    Math.abs(Number(c.risk) - s.risk) > 0.05 || (c.status !== 'overridden' && Number(c.tier) !== s.tier))
  for (const batch of chunk(changed, 20)) {
    await Promise.all(batch.map(async ({ c, s }) => {
      const patch: Record<string, unknown> = {
        risk: s.risk, exposure_score: s.exposure, vulnerability_score: s.vulnerability,
        time_urgency_score: s.time, confidence_score: s.confidence,
      }
      if (c.status !== 'overridden') patch.tier = s.tier
      await sb.from('cases').update(patch).eq('id', c.id)
      if (c.status !== 'overridden' && Number(c.tier) !== s.tier) {
        await audit(sb, {
          action_type: 'elevation', case_id: c.id, case_name: c.name,
          action_text: `Tier ${c.tier} -> ${s.tier} for ${c.name} (risk ${s.risk})`,
          before_state: { tier: c.tier, risk: Number(c.risk) }, after_state: { tier: s.tier, risk: s.risk },
          reason: `Recomputed: exposure ${s.exposure} x vulnerability ${s.vulnerability} x time ${s.time}, confidence ${s.confidence}`,
        })
      }
    }))
  }

  // 2) resource matching
  const { data: active } = await sb.from('assignments').select('id, case_id, asset_id, status, pinned').in('status', ['queued', 'approved', 'dispatched'])
  const busyCases = new Set<string>(), busyAssets = new Set<string>()
  for (const a of active || []) {
    if (a.status !== 'queued' || a.pinned) { busyCases.add(a.case_id); if (a.asset_id) busyAssets.add(a.asset_id) }
  }

  const ranked = scored
    .filter(({ c }) => ['pending', 'accepted', 'overridden'].includes(c.status) && !busyCases.has(c.id))
    .map(({ c, flags, s }) => ({ c, flags, tier: c.status === 'overridden' ? Number(c.tier) : s.tier, risk: s.risk }))
    .sort((a, b) => a.tier - b.tier || b.risk - a.risk)

  const optCases: OptCase[] = ranked.map((r, i) => {
    const [lat, lng] = latLng(r.c.location, r.c.area)
    return { id: r.c.id, name: r.c.name, nameUrdu: r.c.name_urdu, tier: r.tier, risk: r.risk, flags: r.flags, lat, lng, rank: i + 1, total: ranked.length }
  })

  const { data: assetRows } = await sb.from('assets').select('id, name, type, available, current_location').eq('available', true)
  let boatsBroken = sim.boatBroken ? 1 : 0
  const optAssets: OptAsset[] = (assetRows || [])
    .filter((a: Row) => !busyAssets.has(a.id))
    .filter((a: Row) => { if (a.type === 'boat' && boatsBroken > 0) { boatsBroken--; return false } return true })
    .map((a: Row) => {
      const [lat, lng] = latLng(a.current_location, 'other')
      return { id: a.id, name: a.name, type: a.type, lat, lng }
    })

  await sb.from('assignments').delete().eq('status', 'queued').eq('pinned', false)
  const proposals = optimise(optCases, optAssets, { roadClosed: !!sim.roadClosed, floodArea: mode === 'flood' })
  if (proposals.length) {
    const stamp = Date.now()
    await sb.from('assignments').insert(proposals.map((p, i) => ({
      id: `asg-${stamp}-${i}`, case_id: p.caseId, case_name: p.caseName, asset_id: p.assetId, asset: p.assetType,
      asset_label: p.assetLabel, status: 'queued', pinned: false, eta_minutes: p.etaMin,
      algorithm_rationale: p.rationale, algorithm_rationale_urdu: p.rationaleUrdu, trade_off_notes: p.tradeOff,
    })))
  }
  return { scored: scored.length, changed: changed.length, proposals: proposals.length }
}

// ------------------------------------------------------------------ two-way check-in reply
/** A resident answered 1 (safe) / 2 (need help) / 3 (leave now) on any channel. */
export async function applyReply(sb: SupabaseClient, caseId: string, code: 1 | 2 | 3, channel: string, text: string) {
  const cfg = await loadConfig(sb)
  const nowIso = new Date(demoNowMs(cfg)).toISOString()
  const { data: ck } = await sb.from('checkins').select('id').eq('case_id', caseId).in('status', ['pending', 'escalated'])
    .order('sent_at', { ascending: false }).limit(1).maybeSingle()
  if (ck) await sb.from('checkins').update({ reply_code: code, replied_at: nowIso, status: 'replied' }).eq('id', ck.id)

  const { data: c } = await sb.from('cases').select('id, name, name_urdu, tier, status').eq('id', caseId).maybeSingle()
  if (!c) return null
  await sb.from('cases').update({ last_contact_at: nowIso, last_contact_channel: channel }).eq('id', caseId)
  await sb.from('communication_log').insert({ case_id: caseId, channel, direction: 'inbound', message_text: text, response_code: String(code), delivered: true })
  await sb.from('timeline').insert({ case_id: caseId, event_type: 'checkin', event_text: `Resident replied ${code} on ${channel}` })

  let tier = c.tier
  if (code >= 2 && c.status !== 'overridden') {
    const newTier = code === 3 ? 1 : Math.min(c.tier, 2)
    if (newTier < c.tier) {
      tier = newTier
      await sb.from('cases').update({ tier: newTier }).eq('id', c.id)
      await audit(sb, {
        action_type: 'elevation', case_id: c.id, case_name: c.name, action_text: `Resident reply ${code}: ${c.name} raised to Tier ${newTier}`,
        before_state: { tier: c.tier }, after_state: { tier: newTier }, reason: 'Two-way check-in reply',
      })
    }
    await sb.from('notifications').insert({
      audience_role: 'coordinator', type: 'checkin', related_case_id: c.id,
      text: `${c.name} replied ${code} (${code === 3 ? 'must leave now' : 'needs help'})`, text_urdu: `${c.name_urdu || c.name} نے ${code} لکھا`,
    })
    await runRecompute(sb)
  }
  return { caseId: c.id, caseName: c.name, tier }
}

/** The resident simulator has no real case id: use the configured resident's phone, else the most urgent open case. */
export async function resolveSimCase(sb: SupabaseClient, cfg: Record<string, any>, explicit?: string | null): Promise<string | null> {
  if (explicit) return explicit
  const tail = String(cfg.resident_sim?.phone || '').replace(/\D/g, '').slice(-9)
  if (tail.length === 9) {
    const { data } = await sb.from('cases').select('id, phone').not('phone', 'is', null).ilike('phone', `%${tail.slice(0, 3)}%`)
    const hit = (data || []).find((r: any) => String(r.phone).replace(/\D/g, '').endsWith(tail))
    if (hit) return hit.id
  }
  const { data } = await sb.from('cases').select('id').in('status', ['pending', 'accepted']).order('tier').order('risk', { ascending: false }).limit(1).maybeSingle()
  return data?.id ?? null
}

// ------------------------------------------------------------------ tick
export async function runTick(sb: SupabaseClient) {
  const cfg = await loadConfig(sb)
  const now = demoNowMs(cfg)
  const out: Record<string, unknown> = {}

  // Hazard clock + staged alerts
  const hz = cfg.hazard_state || {}
  let etaMs = hz.eta_at ? new Date(hz.eta_at).getTime() : NaN
  if (!Number.isFinite(etaMs)) {
    etaMs = now + Number(cfg.hazard_countdown_seconds ?? 13330) * 1000
    await setConfig(sb, 'hazard_state', { ...hz, eta_at: new Date(etaMs).toISOString() })
  }
  const countdown = Math.max(0, Math.round((etaMs - now) / 1000))
  await setConfig(sb, 'hazard_countdown_seconds', countdown)
  cfg.hazard_countdown_seconds = countdown

  const th = cfg.alert_thresholds || { warning_seconds: 14400, evacuation_seconds: 3600 }
  const level = countdown <= th.evacuation_seconds ? 'evacuation' : countdown <= th.warning_seconds ? 'warning' : 'advisory'
  const prev = typeof cfg.alert_level === 'string' ? cfg.alert_level : 'warning'
  if (level !== prev) {
    await setConfig(sb, 'alert_level', level)
    cfg.alert_level = level
    await sb.from('notifications').insert([
      { audience_role: 'coordinator', type: 'alert', text: `Alert level is now ${level.toUpperCase()}`, text_urdu: `الرٹ لیول اب ${level} ہے` },
      { audience_role: 'volunteer', type: 'alert', text: TEXT.alert[level].en, text_urdu: TEXT.alert[level].ur },
    ])
    await audit(sb, { action_type: 'sync', action_text: `Staged alert ${prev} -> ${level}`, reason: `Hazard clock ${countdown}s` })
  }
  out.alertLevel = level; out.countdown = countdown

  // Silence => check-in, then the escalation ladder
  const rules = { reminder_min: 10, call_min: 20, buddy_min: 30, dispatch_min: 45, silence_min: 60, ...(cfg.escalation_rules || {}) }
  let created = 0, advanced = 0

  if (level !== 'advisory') {
    const { data: open } = await sb.from('checkins').select('case_id').in('status', ['pending', 'escalated'])
    const openSet = new Set((open || []).map((r: any) => r.case_id))
    const { data: cand } = await sb.from('cases')
      .select('id, name, name_urdu, phone, phone_type, preferred_language, last_contact_at')
      .in('status', ['pending', 'accepted']).order('tier').order('risk', { ascending: false }).limit(60)
    const silent = (cand || []).filter((c: any) => {
      if (openSet.has(c.id)) return false
      if (!c.last_contact_at) return true
      return (now - new Date(c.last_contact_at).getTime()) / 60000 >= rules.silence_min
    }).slice(0, 25)
    for (const c of silent) {
      const msg = level === 'evacuation' ? TEXT.alert.evacuation : TEXT.checkin
      const r = await deliver(sb, c, msg)
      await sb.from('checkins').insert({
        case_id: c.id, channel: r.channel === 'buddy' ? 'mesh' : r.channel, prompt_text: msg.en,
        sent_at: new Date(now).toISOString(), due_at: new Date(now + rules.reminder_min * 60000).toISOString(),
      })
      created++
    }
  }

  const { data: open2 } = await sb.from('checkins').select('*').in('status', ['pending', 'escalated']).lt('escalation_stage', 4)
  for (const ck of open2 || []) {
    const mins = (now - new Date(ck.sent_at).getTime()) / 60000
    const target = mins >= rules.dispatch_min ? 4 : mins >= rules.buddy_min ? 3 : mins >= rules.call_min ? 2 : mins >= rules.reminder_min ? 1 : 0
    if (target <= ck.escalation_stage) continue
    const { data: c } = await sb.from('cases')
      .select('id, name, name_urdu, phone, phone_type, preferred_language, assigned_volunteer_id, tier, status').eq('id', ck.case_id).maybeSingle()
    if (!c) continue

    for (let stage = ck.escalation_stage + 1; stage <= target; stage++) {
      if (stage === 1) await deliver(sb, c, TEXT.reminder)
      if (stage === 2) await deliver(sb, c, TEXT.call, 'voice')
      if (stage === 3) {
        await sb.from('notifications').insert({
          user_id: c.assigned_volunteer_id ?? null, audience_role: c.assigned_volunteer_id ? null : 'volunteer', type: 'buddy',
          text: `No reply from ${c.name} after ${rules.buddy_min} min. Please visit.`, text_urdu: `${c.name_urdu || c.name} نے جواب نہیں دیا۔ براہ کرم جا کر دیکھیں۔`,
          related_case_id: c.id,
        })
        if (c.assigned_volunteer_id) {
          await sb.from('field_tasks').insert({ volunteer_id: c.assigned_volunteer_id, case_id: c.id, title: `Check on ${c.name} (no reply)`, status: 'queued', sort_order: 0 })
        }
      }
      if (stage === 4) {
        if (c.status !== 'overridden' && c.tier > 1) {
          await sb.from('cases').update({ tier: 1 }).eq('id', c.id)
          await audit(sb, {
            action_type: 'elevation', case_id: c.id, case_name: c.name, action_text: `Silence escalation: ${c.name} raised to Tier 1`,
            before_state: { tier: c.tier }, after_state: { tier: 1 }, reason: `No reply for ${Math.round(mins)} minutes`,
          })
        }
        await sb.from('notifications').insert({
          audience_role: 'coordinator', type: 'escalation', related_case_id: c.id,
          text: `${c.name} has not replied for ${Math.round(mins)} min. Dispatch recommended.`, text_urdu: `${c.name_urdu || c.name} نے ${Math.round(mins)} منٹ سے جواب نہیں دیا۔ ڈسپیچ تجویز ہے۔`,
        })
      }
      const labels = ['', 'Reminder sent', 'Automated voice call', 'Buddy volunteer notified', 'Escalated to dispatch']
      await sb.from('timeline').insert({ case_id: c.id, event_text: `Silence ladder: ${labels[stage]}`, event_type: 'escalation' })
    }
    await sb.from('checkins').update({
      escalation_stage: target, status: target >= 4 ? 'escalated' : 'pending', last_escalated_at: new Date(now).toISOString(),
    }).eq('id', ck.id)
    advanced++
  }
  out.checkinsCreated = created; out.checkinsAdvanced = advanced

  out.recompute = await runRecompute(sb)
  return out
}
