import { adminClient, authorize, corsHeaders, json, readJson } from '../_shared/http.ts'
import { deliver, routeChannel, TEXT, type Channel } from '../_shared/messaging.ts'
import { loadConfig, demoNowMs, applyReply, resolveSimCase } from '../_shared/core.ts'

// POST { case_id | sim:true, kind: 'checkin' | 'alert' | 'custom' | 'simulate_reply' | 'broadcast_alert', text?, text_ur?, channel?, code? }
// Channel router: smartphone -> Telegram, basic phone -> SMS, no phone -> buddy volunteer.
// Telegram is real when TELEGRAM_BOT_TOKEN is set; SMS / voice are simulated behind the same call.
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  const sb = adminClient()
  const who = await authorize(req, sb, ['coordinator', 'volunteer'])
  if (!who) return json({ error: 'Not authorised' }, 401)

  const body = await readJson(req)
  const kind = String(body.kind || 'checkin')

  // Staged alert to everyone still at risk, each on the channel that reaches them.
  if (kind === 'broadcast_alert') {
    if (who.role === 'volunteer') return json({ error: 'Coordinators only' }, 403)
    const cfg0 = await loadConfig(sb)
    const lvl = typeof cfg0.alert_level === 'string' ? cfg0.alert_level : 'warning'
    const { data: targets } = await sb.from('cases')
      .select('id, phone, phone_type, preferred_language').in('status', ['pending', 'accepted', 'dispatched']).order('tier').order('risk', { ascending: false }).limit(150)
    const counts: Record<string, number> = {}
    for (const t of targets || []) {
      const r = await deliver(sb, t, TEXT.alert[lvl] || TEXT.alert.warning)
      counts[r.channel] = (counts[r.channel] || 0) + 1
    }
    return json({ ok: true, level: lvl, total: (targets || []).length, by_channel: counts })
  }

  // The resident simulator has no case id of its own: pass sim:true and the configured resident is used.
  const caseId = String((body.sim ? await resolveSimCase(sb, await loadConfig(sb), body.case_id) : body.case_id) || '')
  if (!caseId) return json({ error: 'case_id is required (or no open case to simulate)' }, 400)

  if (kind === 'simulate_reply') {
    const code = Number(body.code)
    if (![1, 2, 3].includes(code)) return json({ error: 'code must be 1, 2 or 3' }, 400)
    if (who.role === 'volunteer') return json({ error: 'Coordinators only' }, 403)
    const r = await applyReply(sb, caseId, code as 1 | 2 | 3, String(body.channel || 'sms'), String(body.text || code))
    return json({ ok: true, case_id: caseId, ...r })
  }

  // Service-role read, so the volunteer restriction is enforced explicitly below.
  const { data: c } = await sb.from('cases')
    .select('id, name, phone, phone_type, preferred_language, assigned_volunteer_id').eq('id', caseId).maybeSingle()
  if (!c) return json({ error: 'Case not found' }, 404)
  if (who.role === 'volunteer' && c.assigned_volunteer_id !== who.id) return json({ error: 'Case is not assigned to you' }, 403)

  const cfg = await loadConfig(sb)
  const level = typeof cfg.alert_level === 'string' ? cfg.alert_level : 'warning'
  let msg = TEXT.checkin
  if (kind === 'alert') msg = TEXT.alert[level] || TEXT.alert.warning
  if (kind === 'custom') {
    const en = String(body.text || '').slice(0, 500)
    if (!en) return json({ error: 'text is required for custom messages' }, 400)
    msg = { en, ur: String(body.text_ur || en).slice(0, 500) }
  }

  const forced = body.channel as Channel | 'buddy' | undefined
  const { data: link } = await sb.from('telegram_links').select('chat_id').eq('case_id', c.id).maybeSingle()
  const decision = forced ? { channel: forced, reason: 'Channel chosen by operator.' } : routeChannel(c, !!link)
  const result = await deliver(sb, c, msg, forced)

  let checkinId: string | null = null
  if (kind === 'checkin' || (kind === 'alert' && level !== 'advisory')) {
    const now = demoNowMs(cfg)
    const { data: ck } = await sb.from('checkins').insert({
      case_id: c.id, channel: result.channel === 'buddy' ? 'mesh' : result.channel, prompt_text: msg.en,
      sent_at: new Date(now).toISOString(), due_at: new Date(now + 10 * 60000).toISOString(),
    }).select('id').single()
    checkinId = ck?.id ?? null
  }

  await sb.from('timeline').insert({ case_id: c.id, event_text: `${kind} sent via ${result.channel}`, event_type: 'message', created_by: who.id })
  return json({ ok: true, decision, delivered: result.delivered, simulated: result.simulated, checkin_id: checkinId, message: msg })
})
