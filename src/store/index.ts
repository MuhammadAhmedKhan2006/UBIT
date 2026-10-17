import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Role = 'coordinator' | 'volunteer' | 'registrar' | 'shelter' | 'viewer'
export type Language = 'en' | 'ur'
export type Theme = 'light' | 'dark'

export interface User {
  name: string
  nameUrdu: string
  email: string
  phone: string
  role: Role
  roleLabel: string
}

export interface Case {
  id: string
  name: string
  nameUrdu: string
  tier: 1 | 2 | 3
  risk: number
  location: string
  locationUrdu: string
  age: number
  status: 'pending' | 'safe' | 'dispatched' | 'accepted' | 'overridden'
  vulnerability: string
  area: 'lyari' | 'malir' | 'korangi'
  unknown?: boolean
}

export interface Assignment {
  id: string
  caseId: string
  caseName: string
  asset: 'boat' | 'ambulance' | 'team'
  assetLabel: string
  status: 'queued' | 'approved' | 'dispatched'
  pinned: boolean
  etaMin: number
}

export interface SyncItem {
  id: string
  title: string
  description: string
  status: 'queued' | 'syncing' | 'synced'
  progress: number
  time: string
  priority: number
}

export interface AuditEntry {
  id: string
  action: string
  user: string
  caseId: string
  timestamp: string
  reason?: string
  type: 'accept' | 'override' | 'safe' | 'dispatch' | 'assign'
}

export interface TimelineEntry {
  id: string
  caseId: string
  text: string
  at: string
}

export interface ToastState {
  visible: boolean
  message: string
  messageUrdu: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export interface SimState {
  boatsDown: number
  trucksDown: number
  heatwave: boolean
  meshDown: boolean
  noise: boolean
  roadClosed: boolean
  boatBroken: boolean
  rainMm: number
  ran: boolean
  comparing: boolean
}

interface AppState {
  user: User | null
  language: Language
  theme: Theme
  isOnline: boolean
  hazardCountdown: number
  showCaseDrawer: boolean
  selectedCaseId: string | null
  toast: ToastState
  cases: Case[]
  assignments: Assignment[]
  syncItems: SyncItem[]
  auditLog: AuditEntry[]
  timeline: TimelineEntry[]
  notifications: { id: string; text: string; read: boolean }[]
  alertLevel: 'advisory' | 'warning' | 'evacuation'
  intakeIndex: number
  intakeQueue: { id: string; name: string; channel: string; snippet: string; risk: number }[]
  sim: SimState
  dispatchView: 'priority' | 'asset'
  selectedRoute: 'none' | 'maternity' | 'alternate'
  showTidal: boolean
  playback: { playing: boolean; progress: number }
  registrations: { id: string; name: string; age: number; area: string; time: string }[]
  resident: {
    name: string
    phone: string
    phoneType: 'smartphone' | 'basic' | 'none'
    language: Language
    flags: string[]
  }

  login: (user: User) => void
  logout: () => void
  updateUser: (partial: Partial<User>) => void
  setLanguage: (lang: Language) => void
  toggleTheme: () => void
  toggleOnline: () => void
  openCaseDrawer: (id: string) => void
  closeCaseDrawer: () => void
  showToast: (msg: string, msgUrdu: string, type: ToastState['type']) => void
  hideToast: () => void
  markCaseSafe: (id: string) => void
  dispatchCase: (id: string, asset?: 'boat' | 'ambulance' | 'team') => void
  acceptCase: (id: string) => void
  assignVolunteer: (id: string) => void
  addCase: (c: Case) => void
  advanceAlertLevel: () => void
  addAuditEntry: (entry: Omit<AuditEntry, 'id' | 'timestamp'>) => void
  addTimeline: (caseId: string, text: string) => void
  pinAssignment: (id: string) => void
  pinAllAssignments: () => void
  approveAssignment: (id: string) => void
  approveAllAssignments: () => void
  recomputeAssignments: () => void
  setDispatchView: (v: 'priority' | 'asset') => void
  setSelectedRoute: (v: 'none' | 'maternity' | 'alternate') => void
  setShowTidal: (v: boolean) => void
  setSim: (partial: Partial<SimState>) => void
  setResident: (partial: Partial<AppState['resident']>) => void
  advanceIntake: () => void
  setPlayback: (partial: Partial<AppState['playback']>) => void
  syncOutbox: () => void
  markAllNotificationsRead: () => void
  tickCountdown: () => void
  addRegistration: (r: { name: string; age: number; area: string }) => void
}

const INITIAL_CASES: Case[] = [
  { id: 'PK-KHI-7821', name: 'Fatima Bibi', nameUrdu: 'فاطمہ بی بی', tier: 1, risk: 98.4, location: 'Lyari Sector 4-B, Gul Muhammad Lane', locationUrdu: 'لیاری سیکٹر ۴-بی، گل محمد لین', age: 78, status: 'pending', vulnerability: 'Bedridden / Respiratory Support', area: 'lyari' },
  { id: 'PK-KHI-7822', name: 'Bilal Ahmed', nameUrdu: 'بلال احمد', tier: 1, risk: 82.1, location: 'Lyari Sector 5, Mirza Adam Khan Road', locationUrdu: 'لیاری سیکٹر ۵، مرزا آدم خان روڈ', age: 65, status: 'pending', vulnerability: 'Elderly / Diabetic', area: 'lyari' },
  { id: 'PK-KHI-7823', name: 'Mrs. Tahira Khan', nameUrdu: 'طاہرہ خان', tier: 2, risk: 71.3, location: 'Korangi Sector 31, Block C', locationUrdu: 'کورنگی سیکٹر ۳۱، بلاک سی', age: 54, status: 'pending', vulnerability: 'Mobility Impaired', area: 'korangi', unknown: true },
  { id: 'PK-KHI-7824', name: 'Zubair Hassan', nameUrdu: 'زبیر حسن', tier: 2, risk: 64.0, location: 'Malir Colony, Street 7', locationUrdu: 'ملیر کالونی، گلی ۷', age: 71, status: 'pending', vulnerability: 'Visually Impaired', area: 'malir' },
]

const INITIAL_ASSIGNMENTS: Assignment[] = [
  { id: 'asg-1', caseId: 'PK-KHI-7821', caseName: 'Fatima Bibi', asset: 'boat', assetLabel: 'Inflatable Heavy Boat 04', status: 'queued', pinned: false, etaMin: 12 },
  { id: 'asg-2', caseId: 'PK-KHI-7822', caseName: 'Bilal Ahmed', asset: 'ambulance', assetLabel: 'Edhi 4x4 Amb #12', status: 'queued', pinned: false, etaMin: 18 },
  { id: 'asg-3', caseId: 'PK-KHI-7823', caseName: 'Mrs. Tahira Khan', asset: 'team', assetLabel: 'Scout Squad D-2', status: 'queued', pinned: false, etaMin: 24 },
  { id: 'asg-4', caseId: 'PK-KHI-7824', caseName: 'Zubair Hassan', asset: 'boat', assetLabel: 'Rescue Inflatable 07', status: 'queued', pinned: false, etaMin: 21 },
  { id: 'asg-5', caseId: 'PK-KHI-7825', caseName: 'Khurram Javed', asset: 'team', assetLabel: 'Scout Squad E-1', status: 'queued', pinned: false, etaMin: 32 },
]

const INITIAL_SYNC: SyncItem[] = [
  { id: 's1', title: 'Status Update: Fatima Bibi', description: 'Volunteer reached doorstep; verified water level 1.1m; request boat stretcher urgently.', status: 'queued', progress: 0, time: '15:22 PKT', priority: 1 },
  { id: 's2', title: 'Buddy Check-in: Zubaida Begum', description: 'Marked: Needs Help (Infant ORS requested); Photo attached (340 KB).', status: 'syncing', progress: 64, time: '15:08 PKT', priority: 2 },
  { id: 's3', title: 'Road Closure: Gul Muhammad', description: 'Marked impassable due to live downed electric cable in flood water.', status: 'queued', progress: 0, time: '15:28 PKT', priority: 3 },
  { id: 's4', title: 'Check-in: Chacha Rustam', description: 'Marked: Safe / محفوظ', status: 'synced', progress: 100, time: '14:48 PKT', priority: 4 },
]

const INITIAL_AUDIT: AuditEntry[] = [
  { id: 'a1', action: 'Case accepted for dispatch', user: 'Zara Khan', caseId: 'PK-KHI-7820', timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), type: 'accept' },
  { id: 'a2', action: 'Override: Deprioritised due to resource constraints', user: 'Zara Khan', caseId: 'PK-KHI-7819', timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), reason: 'All boats deployed to Tier 1 emergencies', type: 'override' },
]

const INITIAL_INTAKE = [
  { id: 'in-1', name: 'Malir Nadi pul doob gaya hai, 4 bachay chat par...', channel: 'WhatsApp', snippet: 'Boat needed, 4 children on rooftop', risk: 96.8 },
  { id: 'in-2', name: 'Korangi Sector 2: Dialysis patient water entered 2 feet...', channel: 'Mesh Voice', snippet: 'Dialysis patient, water in house', risk: 91.2 },
  { id: 'in-3', name: 'Keamari: Boat required for pregnant lady in labor...', channel: '1129 PDMA', snippet: 'Pregnant lady in labor, boat needed', risk: 99.1 },
  { id: 'in-4', name: 'Gulshan block 13: Solar power backup working, need food packs', channel: 'SMS Cell-Mesh', snippet: 'Needs food, power OK', risk: 48.0 },
]

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      language: 'en',
      theme: 'dark',
      isOnline: true,
      hazardCountdown: 13330,
      showCaseDrawer: false,
      selectedCaseId: null,
      toast: { visible: false, message: '', messageUrdu: '', type: 'info' },
      cases: INITIAL_CASES,
      assignments: INITIAL_ASSIGNMENTS,
      syncItems: INITIAL_SYNC,
      auditLog: INITIAL_AUDIT,
      timeline: [],
      notifications: [
        { id: 'n1', text: 'Tier 1 alert: Fatima Bibi – no response 2h 45m', read: false },
        { id: 'n2', text: 'Water level +2.1m at Lyari Nadi sensor LK-91', read: false },
        { id: 'n3', text: 'Boat Unit 04 dispatched to Sector 4-B', read: false },
      ],
      alertLevel: 'warning',
      intakeIndex: 0,
      intakeQueue: INITIAL_INTAKE,
      sim: { boatsDown: 3, trucksDown: 1, heatwave: true, meshDown: true, noise: true, roadClosed: false, boatBroken: false, rainMm: 140, ran: false, comparing: false },
      dispatchView: 'priority',
      selectedRoute: 'none',
      showTidal: false,
      playback: { playing: false, progress: 0 },
      registrations: [],
      resident: { name: 'Rashid Ali', phone: '+92 300 8492011', phoneType: 'basic', language: 'ur', flags: ['Elderly household'] },

      login: (user) => set({ user: { phone: user.phone || user.email, ...user } }),
      logout: () => set({ user: null }),
      updateUser: (partial) => set((s) => ({ user: s.user ? { ...s.user, ...partial } : null })),
      setLanguage: (lang) => {
        set({ language: lang })
        document.documentElement.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr')
        document.documentElement.setAttribute('lang', lang === 'ur' ? 'ur' : 'en')
      },
      toggleTheme: () => {
        const nt = get().theme === 'dark' ? 'light' : 'dark'
        set({ theme: nt })
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(nt)
      },
      toggleOnline: () => set((s) => ({ isOnline: !s.isOnline })),
      openCaseDrawer: (id) => set({ showCaseDrawer: true, selectedCaseId: id }),
      closeCaseDrawer: () => set({ showCaseDrawer: false, selectedCaseId: null }),
      showToast: (msg, msgUrdu, type) => {
        set({ toast: { visible: true, message: msg, messageUrdu, type } })
        setTimeout(() => get().hideToast(), 2800)
      },
      hideToast: () => set((s) => ({ toast: { ...s.toast, visible: false } })),
      markCaseSafe: (id) => set((s) => ({
        cases: s.cases.map((c) => (c.id === id ? { ...c, status: 'safe' as const } : c)),
      })),
      dispatchCase: (id, asset) => set((s) => ({
        cases: s.cases.map((c) => (c.id === id ? { ...c, status: 'dispatched' as const } : c)),
        assignments: [
          { id: `asg-${Date.now()}`, caseId: id, caseName: c?.name || id, asset: asset || 'boat', assetLabel: asset === 'ambulance' ? 'Ambulance' : asset === 'team' ? 'Scout Team' : 'Boat Unit', status: 'dispatched', pinned: false, etaMin: Math.floor(Math.random() * 15 + 8) },
          ...s.assignments,
        ].map((a) => a.caseId === id ? a : a),
        auditLog: [{ id: `a${Date.now()}`, action: 'Case dispatched for rescue', user: s.user?.name || 'System', caseId: id, timestamp: new Date().toISOString(), type: 'dispatch' as const }, ...s.auditLog],
        timeline: [{ id: `t${Date.now()}`, caseId: id, text: 'Rescue team dispatched', at: new Date().toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' }) }, ...s.timeline],
      })),
      acceptCase: (id) => set((s) => ({
        cases: s.cases.map((c) => (c.id === id ? { ...c, status: 'accepted' as const } : c)),
        auditLog: [{ id: `a${Date.now()}`, action: 'Recommendation accepted', user: s.user?.name || 'System', caseId: id, timestamp: new Date().toISOString(), type: 'accept' as const }, ...s.auditLog],
      })),
      assignVolunteer: (id) => set((s) => ({
        auditLog: [{ id: `a${Date.now()}`, action: 'Volunteer assigned to case', user: s.user?.name || 'System', caseId: id, timestamp: new Date().toISOString(), type: 'assign' as const }, ...s.auditLog],
        timeline: [{ id: `t${Date.now()}`, caseId: id, text: 'Volunteer assigned (Squad 04)', at: new Date().toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' }) }, ...s.timeline],
      })),
      addCase: (c) => set((s) => ({ cases: [c, ...s.cases] })),
      advanceAlertLevel: () => set((s) => {
        const lv: AppState['alertLevel'][] = ['advisory', 'warning', 'evacuation']
        return { alertLevel: lv[Math.min(lv.indexOf(s.alertLevel) + 1, 2)] }
      }),
      addAuditEntry: (entry) => set((s) => ({ auditLog: [{ ...entry, id: `a${Date.now()}`, timestamp: new Date().toISOString() }, ...s.auditLog] })),
      addTimeline: (caseId, text) => set((s) => ({ timeline: [{ id: `t${Date.now()}`, caseId, text, at: new Date().toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' }) }, ...s.timeline] })),
      pinAssignment: (id) => set((s) => ({ assignments: s.assignments.map((a) => a.id === id ? { ...a, pinned: !a.pinned } : a) })),
      pinAllAssignments: () => set((s) => ({ assignments: s.assignments.map((a) => ({ ...a, pinned: true })) })),
      approveAssignment: (id) => set((s) => ({ assignments: s.assignments.map((a) => a.id === id ? { ...a, status: 'approved' as const } : a) })),
      approveAllAssignments: () => set((s) => ({ assignments: s.assignments.map((a) => ({ ...a, status: 'approved' as const })) })),
      recomputeAssignments: () => set((s) => ({ assignments: [...s.assignments].sort((a, b) => Math.random() - 0.5).map((a) => ({ ...a, etaMin: Math.floor(Math.random() * 20 + 5) })) })),
      setDispatchView: (v) => set({ dispatchView: v }),
      setSelectedRoute: (v) => set({ selectedRoute: v }),
      setShowTidal: (v) => set({ showTidal: v }),
      setSim: (partial) => set((s) => ({ sim: { ...s.sim, ...partial } })),
      setResident: (partial) => set((s) => ({ resident: { ...s.resident, ...partial } })),
      advanceIntake: () => set((s) => ({ intakeIndex: Math.min(s.intakeIndex + 1, s.intakeQueue.length - 1) })),
      setPlayback: (partial) => set((s) => ({ playback: { ...s.playback, ...partial } })),
      syncOutbox: () => {
        set((s) => ({ syncItems: s.syncItems.map((i) => i.status === 'queued' ? { ...i, status: 'syncing' as const, progress: 10 } : i) }))
        setTimeout(() => {
          set((s) => ({ syncItems: s.syncItems.map((i) => i.status === 'syncing' ? { ...i, progress: 50 } : i) }))
        }, 800)
        setTimeout(() => {
          set((s) => ({ syncItems: s.syncItems.map((i) => i.status === 'syncing' ? { ...i, status: 'synced' as const, progress: 100 } : i) }))
        }, 2000)
      },
      markAllNotificationsRead: () => set((s) => ({ notifications: s.notifications.map((n) => ({ ...n, read: true })) })),
      tickCountdown: () => set((s) => ({ hazardCountdown: Math.max(0, s.hazardCountdown - 1) })),
      addRegistration: (r) => set((s) => ({ registrations: [{ id: `reg-${Date.now()}`, ...r, time: new Date().toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' }) }, ...s.registrations] })),
    }),
    {
      name: 'nlb-app-state',
      partialize: (s) => ({
        user: s.user, language: s.language, theme: s.theme, isOnline: s.isOnline,
        alertLevel: s.alertLevel, cases: s.cases, auditLog: s.auditLog,
        syncItems: s.syncItems, notifications: s.notifications, hazardCountdown: s.hazardCountdown,
        assignments: s.assignments, registrations: s.registrations, resident: s.resident,
      }),
    }
  )
)
