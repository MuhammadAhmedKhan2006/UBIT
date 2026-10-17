import { createClient, type SupabaseClient } from 'npm:@supabase/supabase-js@2'

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-cron-secret',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
}

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
}

/** Service-role client. Bypasses RLS, so every caller must be authorised first. */
export function adminClient(): SupabaseClient {
  return createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

export type Caller = { id: string | null; role: string; name: string }

/**
 * Accepts either a signed-in user with one of `roles`, or a scheduler/internal call that sends
 * `x-cron-secret` equal to the CRON_SECRET env var. Returns null when not authorised.
 */
export async function authorize(req: Request, sb: SupabaseClient, roles: string[]): Promise<Caller | null> {
  const secret = Deno.env.get('CRON_SECRET')
  if (secret && req.headers.get('x-cron-secret') === secret) return { id: null, role: 'system', name: 'system' }

  const auth = req.headers.get('Authorization') || ''
  const token = auth.replace(/^Bearer\s+/i, '')
  if (!token) return null
  const { data: u, error } = await sb.auth.getUser(token)
  if (error || !u.user) return null
  const { data: p } = await sb.from('profiles').select('id, role, name, active').eq('id', u.user.id).maybeSingle()
  if (!p || p.active === false || !roles.includes(p.role)) return null
  return { id: p.id, role: p.role, name: p.name }
}

export async function readJson(req: Request): Promise<Record<string, any>> {
  try { return await req.json() } catch { return {} }
}
