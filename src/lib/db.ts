import type { Amenity, CommunityShelter, HostType } from '../data/communityShelters'
import type {
  Assignment,
  AuditEntry,
  Case,
  Language,
  Role,
  SyncItem,
  TimelineEntry,
  User,
} from '../store'
import { supabase, supabaseConfigured } from './supabase'

export type IntakeItem = { id: string; name: string; channel: string; snippet: string; risk: number }
export type RegistrationItem = { id: string; name: string; age: number; area: string; time: string }
export type NotifItem = { id: string; text: string; read: boolean }
export type OfficialShelter = {
  id: string
  name: string
  nameUrdu: string
  area: string
  capacity: number
  occupied: number
  free: number
  bedsCapacity: number
  bedsOccupied: number
  womenCapacity: number
  womenOccupied: number
  medicalCapacity: number
  medicalOccupied: number
  oxygenUnits: number
  elevationM: number
  zone: string
  facilityStatus: string
  phone: string
}
export type BuddyHousehold = {
  id: string
  name: string
  nameUrdu: string
  location: string
  locationUrdu: string
  notes: string
  outcome: string
  flags: string[]
}
export type FieldTask = {
  id: string
  caseId: string
  title: string
  status: string
  etaMinutes: number
}

const KARACHI: Case['area'][] = ['lyari', 'malir', 'korangi']

function areaOf(v: string | null | undefined): Case['area'] {
  if (v === 'lyari' || v === 'malir' || v === 'korangi') return v
  return 'lyari'
}

function relativeTime(iso: string | null | undefined): { en: string; ur: string } {
  if (!iso) return { en: 'just now', ur: 'ابھی' }
  const mins = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000))
  if (mins < 1) return { en: 'just now', ur: 'ابھی' }
  if (mins < 60) return { en: `${mins} min ago`, ur: `${mins} منٹ پہلے` }
  const h = Math.round(mins / 60)
  return { en: `${h} h ago`, ur: `${h} گھنٹے پہلے` }
}

export function mapCase(row: Record<string, unknown>): Case {
  const tier = Number(row.tier)
  const status = String(row.status || 'pending') as Case['status']
  const ok: Case['status'][] = ['pending', 'safe', 'dispatched', 'accepted', 'overridden']
  return {
    id: String(row.id),
    name: String(row.name),
    nameUrdu: String(row.name_urdu || ''),
    tier: (tier === 1 || tier === 2 || tier === 3 ? tier : 3) as 1 | 2 | 3,
    risk: Number(row.risk || 0),
    location: String(row.location_text || ''),
    locationUrdu: String(row.location_text_urdu || ''),
    age: Number(row.age || 0),
    status: ok.includes(status) ? status : 'pending',
    vulnerability: String(row.vulnerability || ''),
    area: areaOf(row.area as string),
    unknown: Boolean(row.unknown_data),
  }
}

export function mapAssignment(row: Record<string, unknown>): Assignment {
  const st = String(row.status || 'queued') as Assignment['status']
  const ok: Assignment['status'][] = ['queued', 'approved', 'dispatched']
  const asset = String(row.asset || 'boat') as Assignment['asset']
  return {
    id: String(row.id),
    caseId: String(row.case_id),
    caseName: String(row.case_name || ''),
    asset: asset === 'ambulance' || asset === 'team' ? asset : 'boat',
    assetLabel: String(row.asset_label || ''),
    status: ok.includes(st) ? st : 'queued',
    pinned: Boolean(row.pinned),
    etaMin: Number(row.eta_minutes || 0),
  }
}

export function mapShelter(row: Record<string, unknown>): CommunityShelter {
  const t = String(row.type || 'home') as HostType
  const rel = relativeTime(row.updated_at as string)
  const amenities = Array.isArray(row.amenities) ? (row.amenities as Amenity[]) : []
  return {
    id: String(row.id),
    name: String(row.name),
    nameUrdu: String(row.name_urdu || ''),
    host: String(row.host || ''),
    hostUrdu: String(row.host_urdu || ''),
    type: (['mosque', 'school', 'home', 'hall', 'madrassa'] as HostType[]).includes(t) ? t : 'home',
    area: String(row.area || ''),
    areaUrdu: String(row.area_urdu || ''),
    capacity: Number(row.capacity || 0),
    free: Number(row.free ?? 0),
    distanceKm: 0.8,
    amenities,
    verified: Boolean(row.verified),
    phone: String(row.phone || ''),
    updated: rel.en,
    updatedUrdu: rel.ur,
    note: String(row.note || ''),
    noteUrdu: String(row.note_urdu || ''),
  }
}

export function mapOfficial(row: Record<string, unknown>): OfficialShelter {
  return {
    id: String(row.id),
    name: String(row.name),
    nameUrdu: String(row.name_urdu || ''),
    area: String(row.area || ''),
    capacity: Number(row.capacity || 0),
    occupied: Number(row.occupied || 0),
    free: Number(row.free || 0),
    bedsCapacity: Number(row.beds_capacity || 0),
    bedsOccupied: Number(row.beds_occupied || 0),
    womenCapacity: Number(row.women_capacity || 0),
    womenOccupied: Number(row.women_occupied || 0),
    medicalCapacity: Number(row.medical_capacity || 0),
    medicalOccupied: Number(row.medical_occupied || 0),
    oxygenUnits: Number(row.oxygen_units || 0),
    elevationM: Number(row.elevation_m || 0),
    zone: String(row.zone || ''),
    facilityStatus: String(row.facility_status || 'active'),
    phone: String(row.phone || ''),
  }
}

export function mapProfile(row: Record<string, unknown>): User {
  return {
    name: String(row.name || ''),
    nameUrdu: String(row.name_urdu || ''),
    email: String(row.email || ''),
    phone: String(row.phone || ''),
    role: (row.role as Role) || 'viewer',
    roleLabel: String(row.role_label || row.role || 'Viewer'),
  }
}

export type Snapshot = {
  cases: Case[]
  assignments: Assignment[]
  syncItems: SyncItem[]
  auditLog: AuditEntry[]
  timeline: TimelineEntry[]
  notifications: NotifItem[]
  intakeQueue: IntakeItem[]
  registrations: RegistrationItem[]
  communityShelters: CommunityShelter[]
  officialShelter: OfficialShelter | null
  buddyHouseholds: BuddyHousehold[]
  fieldTasks: FieldTask[]
  alertLevel: 'advisory' | 'warning' | 'evacuation'
  hazardCountdown: number
  sim: Record<string, unknown> | null
  resident: {
    name: string
    phone: string
    phoneType: 'smartphone' | 'basic' | 'none'
    language: Language
    flags: string[]
  } | null
}

export async function fetchProfile(userId: string): Promise<User | null> {
  if (!supabaseConfigured) return null
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle()
  if (error || !data) return null
  return mapProfile(data as Record<string, unknown>)
}

export async function fetchSnapshot(): Promise<Snapshot | null> {
  if (!supabaseConfigured) return null

  // Viewers only ever see the anonymised, aggregated view (names, phones, exact locations are stripped in SQL).
  const { data: sess } = await supabase.auth.getSession()
  const me = sess.session?.user.id ? await fetchProfile(sess.session.user.id) : null
  const casesTable = me?.role === 'viewer' ? 'cases_anonymised' : 'cases'

  const [
    casesRes,
    asgRes,
    syncRes,
    auditRes,
    tlRes,
    notifRes,
    intakeRes,
    regRes,
    shelterRes,
    buddyRes,
    taskRes,
    cfgRes,
  ] = await Promise.all([
    supabase.from(casesTable).select('*').order('tier', { ascending: true }).order('risk', { ascending: false }),
    supabase.from('assignments').select('*').order('created_at', { ascending: false }),
    supabase.from('sync_queue').select('*').order('priority', { ascending: true }),
    supabase.from('audit_log').select('*').order('timestamp', { ascending: false }).limit(80),
    supabase.from('timeline').select('*').order('created_at', { ascending: false }).limit(80),
    supabase.from('notifications').select('*').order('created_at', { ascending: false }).limit(40),
    supabase.from('intake_queue').select('*').order('risk', { ascending: false }),
    supabase.from('registrations').select('*').order('created_at', { ascending: false }).limit(40),
    supabase.from('shelters').select('*').order('kind').order('name'),
    supabase.from('buddy_households').select('*'),
    supabase.from('field_tasks').select('*').order('sort_order'),
    supabase.from('system_config').select('*'),
  ])

  const cfg: Record<string, unknown> = {}
  for (const row of cfgRes.data || []) {
    const r = row as { key: string; value: unknown }
    cfg[r.key] = r.value
  }

  const shelterRows = (shelterRes.data || []) as Record<string, unknown>[]
  const community = shelterRows.filter((s) => s.kind === 'community').map(mapShelter)
  const officialRow = shelterRows.find((s) => s.id === 'sh-khi-04' || s.kind === 'official')

  const alert = cfg.alert_level
  const alertLevel = (typeof alert === 'string' ? alert.replace(/"/g, '') : 'warning') as Snapshot['alertLevel']

  const residentRaw = cfg.resident_sim as Record<string, unknown> | undefined
  const sim = (cfg.simulation_state as Record<string, unknown>) || null

  return {
    cases: (casesRes.data || []).map((r) => mapCase(r as Record<string, unknown>)),
    assignments: (asgRes.data || []).map((r) => mapAssignment(r as Record<string, unknown>)),
    syncItems: (syncRes.data || []).map((r) => {
      const row = r as Record<string, unknown>
      const st = String(row.status || 'queued') as SyncItem['status']
      return {
        id: String(row.id),
        title: String(row.title),
        description: String(row.description || ''),
        status: st === 'syncing' || st === 'synced' ? st : 'queued',
        progress: Number(row.progress || 0),
        time: String(row.local_time || ''),
        priority: Number(row.priority || 3),
      }
    }),
    auditLog: (auditRes.data || []).map((r) => {
      const row = r as Record<string, unknown>
      const type = String(row.action_type || 'assign') as AuditEntry['type']
      const ok: AuditEntry['type'][] = ['accept', 'override', 'safe', 'dispatch', 'assign']
      return {
        id: String(row.id),
        action: String(row.action_text),
        user: String(row.user_name),
        caseId: String(row.case_id || ''),
        timestamp: String(row.timestamp),
        reason: row.reason ? String(row.reason) : undefined,
        type: ok.includes(type) ? type : 'assign',
      }
    }),
    timeline: (tlRes.data || []).map((r) => {
      const row = r as Record<string, unknown>
      const at = row.created_at ? new Date(String(row.created_at)).toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' }) : ''
      return { id: String(row.id), caseId: String(row.case_id), text: String(row.event_text), at }
    }),
    notifications: (notifRes.data || []).map((r) => {
      const row = r as Record<string, unknown>
      return { id: String(row.id), text: String(row.text), read: Boolean(row.read) }
    }),
    intakeQueue: (intakeRes.data || []).map((r) => {
      const row = r as Record<string, unknown>
      return {
        id: String(row.id),
        name: String(row.raw_message),
        channel: String(row.channel_label || row.channel || ''),
        snippet: String(row.snippet || ''),
        risk: Number(row.risk || 0),
      }
    }),
    registrations: (regRes.data || []).map((r) => {
      const row = r as Record<string, unknown>
      const time = row.created_at ? new Date(String(row.created_at)).toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' }) : ''
      return { id: String(row.id), name: String(row.name), age: Number(row.age || 0), area: String(row.area || ''), time }
    }),
    communityShelters: community,
    officialShelter: officialRow ? mapOfficial(officialRow) : null,
    buddyHouseholds: (buddyRes.data || []).map((r) => {
      const row = r as Record<string, unknown>
      return {
        id: String(row.id),
        name: String(row.name),
        nameUrdu: String(row.name_urdu || ''),
        location: String(row.location_text || ''),
        locationUrdu: String(row.location_text_urdu || ''),
        notes: String(row.notes || ''),
        outcome: String(row.last_outcome || 'pending'),
        flags: Array.isArray(row.flags) ? (row.flags as string[]) : [],
      }
    }),
    fieldTasks: (taskRes.data || []).map((r) => {
      const row = r as Record<string, unknown>
      return {
        id: String(row.id),
        caseId: String(row.case_id || ''),
        title: String(row.title || ''),
        status: String(row.status || 'queued'),
        etaMinutes: Number(row.eta_minutes || 0),
      }
    }),
    alertLevel: ['advisory', 'warning', 'evacuation'].includes(alertLevel) ? alertLevel : 'warning',
    hazardCountdown: Number(cfg.hazard_countdown_seconds ?? 13330),
    sim,
    resident: residentRaw
      ? {
          name: String(residentRaw.name || 'Rashid Ali'),
          phone: String(residentRaw.phone || ''),
          phoneType: (residentRaw.phoneType as 'smartphone' | 'basic' | 'none') || 'basic',
          language: (residentRaw.language as Language) || 'ur',
          flags: Array.isArray(residentRaw.flags) ? (residentRaw.flags as string[]) : [],
        }
      : null,
  }
}

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password })
}

export async function signOut() {
  await supabase.auth.signOut()
}

export async function updateCase(id: string, patch: Record<string, unknown>) {
  if (!supabaseConfigured) return
  await supabase.from('cases').update(patch).eq('id', id)
}

export async function insertCase(c: Case) {
  if (!supabaseConfigured) return
  await supabase.from('cases').insert({
    id: c.id,
    name: c.name,
    name_urdu: c.nameUrdu,
    age: c.age,
    location_text: c.location,
    location_text_urdu: c.locationUrdu,
    area: KARACHI.includes(c.area) ? c.area : 'other',
    tier: c.tier,
    risk: c.risk,
    status: c.status,
    vulnerability: c.vulnerability,
    unknown_data: Boolean(c.unknown),
  })
}

export async function insertAssignment(a: Assignment) {
  if (!supabaseConfigured) return
  await supabase.from('assignments').insert({
    id: a.id,
    case_id: a.caseId,
    case_name: a.caseName,
    asset: a.asset,
    asset_label: a.assetLabel,
    status: a.status,
    pinned: a.pinned,
    eta_minutes: a.etaMin,
  })
}

export async function updateAssignment(id: string, patch: Record<string, unknown>) {
  if (!supabaseConfigured) return
  await supabase.from('assignments').update(patch).eq('id', id)
}

export async function insertAudit(entry: { action: string; user: string; caseId: string; type: string; reason?: string; role?: Role }) {
  if (!supabaseConfigured) return
  await supabase.from('audit_log').insert({
    action_type: entry.type,
    action_text: entry.action,
    user_name: entry.user,
    user_role: entry.role || null,
    case_id: entry.caseId,
    reason: entry.reason || null,
  })
}

export async function insertTimeline(caseId: string, text: string, userId?: string) {
  if (!supabaseConfigured) return
  await supabase.from('timeline').insert({
    case_id: caseId,
    event_text: text,
    created_by: userId || null,
  })
}

export async function insertRegistration(r: { name: string; age: number; area: string; phone?: string; registrarId?: string }) {
  if (!supabaseConfigured) return
  const { data } = await supabase
    .from('registrations')
    .insert({
      name: r.name,
      age: r.age,
      area: r.area,
      phone: r.phone || null,
      registrar_id: r.registrarId || null,
    })
    .select('id, name, age, area, created_at')
    .single()
  return data
}

export async function insertShelter(s: CommunityShelter, userId?: string) {
  if (!supabaseConfigured) return
  await supabase.from('shelters').insert({
    id: s.id,
    kind: 'community',
    name: s.name,
    name_urdu: s.nameUrdu,
    host: s.host,
    host_urdu: s.hostUrdu,
    type: s.type,
    area: s.area,
    area_urdu: s.areaUrdu,
    capacity: s.capacity,
    occupied: 0,
    amenities: s.amenities,
    verified: s.verified,
    phone: s.phone,
    note: s.note,
    note_urdu: s.noteUrdu,
    registered_by: userId || null,
  })
}

export async function reserveShelter(id: string, people: number, currentFree: number) {
  if (!supabaseConfigured) return
  const occupiedDelta = Math.min(people, currentFree)
  const { data } = await supabase.from('shelters').select('occupied, capacity').eq('id', id).single()
  if (!data) return
  const nextOcc = Math.min(Number(data.capacity), Number(data.occupied) + occupiedDelta)
  await supabase.from('shelters').update({ occupied: nextOcc }).eq('id', id)
}

export async function markNotificationsRead() {
  if (!supabaseConfigured) return
  await supabase.from('notifications').update({ read: true, read_at: new Date().toISOString() }).eq('read', false)
}

export async function setConfig(key: string, value: unknown) {
  if (!supabaseConfigured) return
  await supabase.from('system_config').upsert({ key, value })
}

export async function updateSyncItem(id: string, patch: Record<string, unknown>) {
  if (!supabaseConfigured) return
  await supabase.from('sync_queue').update(patch).eq('id', id)
}

export async function updateProfile(id: string, patch: Record<string, unknown>) {
  if (!supabaseConfigured) return
  await supabase.from('profiles').update(patch).eq('id', id)
}

export async function markIntakeProcessed(id: string) {
  if (!supabaseConfigured) return
  await supabase.from('intake_queue').update({ processed: true, processed_at: new Date().toISOString() }).eq('id', id)
}

export async function insertCommunication(caseId: string, channel: string, direction: string, text: string) {
  if (!supabaseConfigured) return
  await supabase.from('communication_log').insert({
    case_id: caseId,
    channel,
    direction,
    message_text: text,
  })
}
