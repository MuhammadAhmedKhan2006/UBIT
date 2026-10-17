import { adminClient, authorize, corsHeaders, json, readJson } from '../_shared/http.ts'
import { audit, demoNowMs, loadConfig, resolveSimCase, runRecompute, runTick, setConfig } from '../_shared/core.ts'

// Demo control (coordinator only). POST { action, ...params }
//   snapshot                  save the current data as the reset point
//   reset                     restore the snapshot (takes one first if none exists)
//   seed        { count }     add synthetic households (default 20)
//   play_storm                heavy rain: more rain, shorter clock, evacuation stage
//   jump_time   { minutes }   move the demo clock forward and run a tick
//   simulate_silence { case_id?, minutes }  age the open check-in and run the escalation ladder
//   break_network { on }      mesh/network down toggle
//   close_road  { on }        road closure toggle (re-routes land vehicles)
//   boat_broken { on }        one boat out of service
//   set_mode    { mode }      'flood' | 'heatwave'

const FIRST = ['Ayesha', 'Imran', 'Saima', 'Kamran', 'Nazia', 'Rashid', 'Farzana', 'Javed', 'Shabana', 'Aslam', 'Rubina', 'Yousuf', 'Hina', 'Salman', 'Mehwish']
const LAST = ['Khan', 'Baloch', 'Shaikh', 'Memon', 'Ansari', 'Qureshi', 'Siddiqui', 'Mirza', 'Abbasi', 'Soomro']
const AREAS: Array<{ key: string; lat: number; lng: number; label: string; exposure: number }> = [
  { key: 'lyari', lat: 24.8615, lng: 66.9905, label: 'Lyari', exposure: 90 },
  { key: 'malir', lat: 24.893, lng: 67.195, label: 'Malir', exposure: 68 },
  { key: 'korangi', lat: 24.8376, lng: 67.1204, label: 'Korangi', exposure: 78 },
  { key: 'keamari', lat: 24.82, lng: 66.98, label: 'Keamari', exposure: 72 },
  { key: 'gulshan', lat: 24.92, lng: 67.08, label: 'Gulshan', exposure: 45 },
]
const FLAG_SETS: Array<{ flags: string[]; text: string; urdu: string }> = [
  { flags: ['elderly_solitary'], text: 'Elderly living alone', urdu: 'تنہا بزرگ' },
  { flags: ['bedridden', 'oxygen_dependent'], text: 'Bedridden / Oxygen', urdu: 'بستر پر / آکسیجن' },
  { flags: ['mobility_impaired'], text: 'Mobility impaired', urdu: 'حرکت میں رکاوٹ' },
  { flags: ['visually_impaired'], text: 'Visually impaired', urdu: 'بصارت سے محروم' },
  { flags: ['pregnant'], text: 'Pregnant', urdu: 'حاملہ' },
  { flags: ['diabetic', 'elderly'], text: 'Elderly / Diabetic', urdu: 'بزرگ / ذیابیطس' },
  { flags: ['woman_alone'], text: 'Woman alone', urdu: 'تنہا خاتون' },
  { flags: [], text: 'Household', urdu: 'گھرانہ' },
]
const pick = <T>(a: T[]) => a[Math.floor(Math.random() * a.length)]
const jitter = () => (Math.random() - 0.5) * 0.04

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  const sb = adminClient()
  const who = await authorize(req, sb, ['coordinator'])
  if (!who) return json({ error: 'Not authorised' }, 401)
  const body = await readJson(req)
  const action = String(body.action || '')

  try {
    const cfg = await loadConfig(sb)
    const sim = { ...(cfg.simulation_state || {}) }
    let detail: Record<string, unknown> = {}

    switch (action) {
      case 'snapshot':
        await sb.rpc('snapshot_demo_state', { force: true })
        break

      case 'reset':
        await sb.rpc('snapshot_demo_state', { force: false }) // no-op when a snapshot already exists
        { const { error } = await sb.rpc('restore_demo_state'); if (error) throw new Error(error.message) }
        return json({ ok: true, action })

      case 'seed': {
        const count = Math.max(1, Math.min(200, Number(body.count) || 20))
        const stamp = Date.now().toString(36).toUpperCase()
        const rows = Array.from({ length: count }, (_, i) => {
          const a = pick(AREAS), f = pick(FLAG_SETS)
          const first = pick(FIRST), last = pick(LAST)
          const unknown = Math.random() < 0.15
          const sensitive = f.flags.includes('woman_alone') || f.flags.includes('pregnant')
          const lat = a.lat + jitter(), lng = a.lng + jitter()
          return {
            id: `PK-KHI-S${stamp}${i}`, name: `${first} ${last}`, age: 25 + Math.floor(Math.random() * 60),
            gender: ['Ayesha', 'Saima', 'Nazia', 'Farzana', 'Shabana', 'Rubina', 'Hina', 'Mehwish'].includes(first) ? 'female' : 'male',
            location: `SRID=4326;POINT(${lng.toFixed(5)} ${lat.toFixed(5)})`,
            location_text: `${a.label}, Street ${1 + Math.floor(Math.random() * 20)}`, area: a.key,
            tier: 3, risk: 0, status: 'pending', vulnerability: f.text, vulnerability_urdu: f.urdu,
            vulnerability_flags: f.flags, unknown_data: unknown, household_size: 1 + Math.floor(Math.random() * 6),
            preferred_language: 'ur', phone_type: pick(['smartphone', 'basic', 'none']),
            exposure_score: a.exposure + Math.round((Math.random() - 0.5) * 12), confidence_score: unknown ? 55 : 75 + Math.round(Math.random() * 20),
            hide_exact_location: sensitive,
            last_contact_at: Math.random() < 0.5 ? new Date(Date.now() - Math.random() * 3 * 3600000).toISOString() : null,
          }
        })
        const { error } = await sb.from('cases').insert(rows)
        if (error) throw new Error(error.message)
        detail = { seeded: count }
        break
      }

      case 'play_storm':
        sim.rainMm = Math.max(Number(sim.rainMm || 0), 220)
        await setConfig(sb, 'simulation_state', sim)
        await setConfig(sb, 'hazard_countdown_seconds', 2400)
        await setConfig(sb, 'hazard_state', { ...(cfg.hazard_state || {}), eta_at: null })
        break

      case 'jump_time': {
        const minutes = Math.max(1, Math.min(1440, Number(body.minutes) || 30))
        const off = Number(cfg.demo_clock?.offset_seconds ?? 0) + minutes * 60
        await setConfig(sb, 'demo_clock', { offset_seconds: off })
        detail = { clock_offset_seconds: off }
        break
      }

      case 'simulate_silence': {
        // Make the target resident's open check-in look `minutes` old so the next tick climbs the ladder.
        const caseId = await resolveSimCase(sb, cfg, body.case_id)
        if (!caseId) throw new Error('No case to simulate')
        const minutes = Math.max(5, Math.min(120, Number(body.minutes) || 25))
        const now = demoNowMs(cfg)
        const { data: open } = await sb.from('checkins').select('id').eq('case_id', caseId).in('status', ['pending', 'escalated']).limit(1).maybeSingle()
        const sentAt = new Date(now - minutes * 60000).toISOString()
        if (open) await sb.from('checkins').update({ sent_at: sentAt }).eq('id', open.id)
        else await sb.from('checkins').insert({ case_id: caseId, channel: 'sms', prompt_text: 'Simulated check-in', sent_at: sentAt, due_at: sentAt })
        detail = { case_id: caseId, minutes }
        return json({ ok: true, action, ...detail, result: await runTick(sb) })
      }

      case 'break_network':
        sim.meshDown = body.on !== false
        await setConfig(sb, 'simulation_state', sim)
        break

      case 'close_road':
        sim.roadClosed = body.on !== false
        await setConfig(sb, 'simulation_state', sim)
        break

      case 'boat_broken':
        sim.boatBroken = body.on !== false
        await setConfig(sb, 'simulation_state', sim)
        break

      case 'set_mode': {
        const mode = body.mode === 'heatwave' ? 'heatwave' : 'flood'
        await setConfig(sb, 'hazard_state', { ...(cfg.hazard_state || {}), mode, hazard: mode })
        detail = { mode }
        break
      }

      default:
        return json({ error: `Unknown action "${action}"` }, 400)
    }

    await audit(sb, {
      action_type: 'sync', action_text: `Demo control: ${action}`, user_id: who.id, user_name: who.name,
      user_role: who.role === 'system' ? null : who.role, reason: JSON.stringify(detail),
    })
    // Pull the new state through the hazard clock, then re-score and re-match.
    const tick = ['jump_time', 'play_storm'].includes(action) ? await runTick(sb) : await runRecompute(sb)
    return json({ ok: true, action, ...detail, result: tick })
  } catch (e) {
    return json({ ok: false, error: String((e as Error).message || e) }, 500)
  }
})
