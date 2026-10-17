import { useEffect } from 'react'
import { supabase, supabaseConfigured } from '../lib/supabase'
import { hydrateFromSupabase, subscribeLiveData } from '../lib/session'
import { useStore } from '../store'

export default function DataSync() {
  useEffect(() => {
    if (!supabaseConfigured) return
    void hydrateFromSupabase()
    const unsubLive = subscribeLiveData()
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      useStore.getState().setAuthUserId(session?.user?.id || null)
      void hydrateFromSupabase()
    })
    return () => {
      unsubLive()
      data.subscription.unsubscribe()
    }
  }, [])
  return null
}
