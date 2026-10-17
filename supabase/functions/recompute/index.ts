import { adminClient, authorize, corsHeaders, json } from '../_shared/http.ts'
import { runRecompute } from '../_shared/core.ts'

// Re-scores every active case (risk = exposure x vulnerability x time pressure + confidence),
// re-tiers them, and rebuilds the proposed resource assignments (Hungarian matching).
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  const sb = adminClient()
  const who = await authorize(req, sb, ['coordinator'])
  if (!who) return json({ error: 'Not authorised' }, 401)
  try {
    return json({ ok: true, ...(await runRecompute(sb)) })
  } catch (e) {
    return json({ ok: false, error: String((e as Error).message || e) }, 500)
  }
})
