import { fetchProfile, fetchSnapshot } from './db'
import { supabase, supabaseConfigured } from './supabase'
import { useStore } from '../store'

export async function hydrateFromSupabase() {
  if (!supabaseConfigured) return
  const { data: { session } } = await supabase.auth.getSession()
  const uid = session?.user?.id || null
  useStore.getState().setAuthUserId(uid)
  if (uid) {
    const profile = await fetchProfile(uid)
    if (profile) useStore.getState().login(profile)
  }
  const snap = await fetchSnapshot()
  if (snap) useStore.getState().applySnapshot(snap)
}

export function subscribeLiveData() {
  if (!supabaseConfigured) return () => undefined
  const channel = supabase
    .channel('nlb-live')
    .on('postgres_changes', { event: '*', schema: 'public' }, () => {
      void fetchSnapshot().then((snap) => {
        if (snap) useStore.getState().applySnapshot(snap)
      })
    })
    .subscribe()
  return () => {
    void supabase.removeChannel(channel)
  }
}
