import { useEffect } from 'react'
import { supabase, supabaseConfigured } from '../lib/supabase'
import { hydrateFromSupabase, subscribeLiveData } from '../lib/session'
import { useStore } from '../store'
import { backendReady, tick } from '../lib/functions'

export default function DataSync() {
  useEffect(() => {
    if (!supabaseConfigured) return
    void hydrateFromSupabase()
    const unsubLive = subscribeLiveData()
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      useStore.getState().setAuthUserId(session?.user?.id || null)
      void hydrateFromSupabase()
    })
    // Heartbeat fallback: a signed-in coordinator drives escalation/alerts once a minute (pg_cron does it too if scheduled).
    const beat = window.setInterval(() => {
      const s = useStore.getState()
      if (backendReady() && s.user?.role === 'coordinator' && document.visibilityState === 'visible') void tick().catch(() => undefined)
    }, 60_000)
    return () => {
      window.clearInterval(beat)
      unsubLive()
      data.subscription.unsubscribe()
    }
  }, [])
  return null
}
