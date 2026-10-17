import { adminClient, authorize, corsHeaders, json, readJson } from '../_shared/http.ts'
import { ingestReport, parseReport } from '../_shared/intake.ts'

// POST { raw_message, channel?, phone?, dry_run? }
// Parses a messy Roman Urdu / Urdu / English report, deduplicates it, and puts it in the review queue.
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  const sb = adminClient()
  const who = await authorize(req, sb, ['coordinator', 'registrar'])
  if (!who) return json({ error: 'Not authorised' }, 401)

  const body = await readJson(req)
  const raw = String(body.raw_message || '').trim()
  if (!raw) return json({ error: 'raw_message is required' }, 400)
  if (raw.length > 2000) return json({ error: 'Message too long' }, 400)

  try {
    if (body.dry_run) return json({ ok: true, parsed: parseReport(raw, body.phone) })
    const r = await ingestReport(sb, { raw, channel: String(body.channel || 'sms'), phone: body.phone ?? null })
    return json({ ok: true, id: r.id, parsed: r.parsed, duplicate_of: r.duplicateOf, needs_human_review: r.needsHuman })
  } catch (e) {
    return json({ ok: false, error: String((e as Error).message || e) }, 500)
  }
})
