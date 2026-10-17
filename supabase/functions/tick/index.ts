import { adminClient, authorize, corsHeaders, json } from '../_shared/http.ts'
import { runTick } from '../_shared/core.ts'

// Heartbeat: hazard clock, staged alerts, silence check-ins and the escalation ladder
// (reminder -> voice call -> buddy volunteer -> dispatch), then a recompute.
// Schedule it every minute (pg_cron + pg_net) with the x-cron-secret header set to CRON_SECRET.
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  const sb = adminClient()
  const who = await authorize(req, sb, ['coordinator'])
  if (!who) return json({ error: 'Not authorised' }, 401)
  try {
    return json({ ok: true, ...(await runTick(sb)) })
  } catch (e) {
    return json({ ok: false, error: String((e as Error).message || e) }, 500)
  }
})
