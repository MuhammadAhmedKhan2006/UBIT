import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore, type Case, type Role } from '../store'
import Modal from '../components/Modal'
import { backendReady, demoControl, type DemoAction } from '../lib/functions'
import { hydrateFromSupabase } from '../lib/session'

type Lang = 'en' | 'ur'
type Bi = { en: string; ur: string }

const URDU_DIGITS = '۰۱۲۳۴۵۶۷۸۹'
const num = (v: string | number, lang: Lang) =>
  lang === 'ur' ? String(v).replace(/\d/g, (d) => URDU_DIGITS[Number(d)]) : String(v)

const TXT = {
  eyebrow: { en: 'Demo Control Center', ur: 'ڈیمو کنٹرول سینٹر' },
  title: { en: 'Run the demo with confidence', ur: 'ڈیمو اعتماد کے ساتھ چلائیں' },
  subtitle: {
    en: 'Load a scenario, tune the hazard clock, jump between roles and reset everything in one click.',
    ur: 'منظر نامہ لوڈ کریں، خطرے کی گھڑی طے کریں، مختلف کرداروں میں جائیں اور ایک کلک میں سب کچھ ری سیٹ کریں۔',
  },
  scenarios: { en: 'Scenario presets', ur: 'تیار شدہ منظر نامے' },
  scenariosHint: { en: 'Pick a scenario to preload cases, alert level and the hazard countdown.', ur: 'کیسز، الرٹ لیول اور خطرے کی گھڑی پہلے سے لوڈ کرنے کے لیے منظر نامہ منتخب کریں۔' },
  load: { en: 'Load scenario', ur: 'منظر نامہ لوڈ کریں' },
  active: { en: 'Active', ur: 'فعال' },
  benchmarks: { en: 'Response benchmarks', ur: 'ردعمل کے معیارات' },
  benchmarksHint: { en: 'Manual process versus Nobody Left Behind on the same synthetic flood.', ur: 'اسی مصنوعی سیلاب پر دستی طریقہ بمقابلہ "کوئی پیچھے نہ رہے"۔' },
  metric: { en: 'Metric', ur: 'پیمانہ' },
  manual: { en: 'Manual', ur: 'دستی' },
  nlb: { en: 'With NLB', ur: 'نظام کے ساتھ' },
  gain: { en: 'Change', ur: 'تبدیلی' },
  controls: { en: 'Live controls', ur: 'براہِ راست کنٹرول' },
  alertLevel: { en: 'Alert level', ur: 'الرٹ کی سطح' },
  hazardClock: { en: 'Hazard clock (water arrival)', ur: 'خطرے کی گھڑی (پانی پہنچنے کا وقت)' },
  faults: { en: 'Fault injection', ur: 'خرابی کا مظاہرہ' },
  roles: { en: 'Jump to a role view', ur: 'کردار کے منظر پر جائیں' },
  rolesHint: { en: 'Signs you in as the demo user for that role.', ur: 'اس کردار کے ڈیمو صارف کے طور پر لاگ ان کرتا ہے۔' },
  data: { en: 'Demo data', ur: 'ڈیمو ڈیٹا' },
  dataHint: { en: 'Add extra synthetic residents or wipe the session back to its starting state.', ur: 'مزید مصنوعی رہائشی شامل کریں یا سیشن کو ابتدائی حالت پر لے جائیں۔' },
  seed: { en: 'Add 3 synthetic cases', ur: '۳ مصنوعی کیس شامل کریں' },
  reset: { en: 'Reset demo', ur: 'ڈیمو ری سیٹ کریں' },
  storm: { en: 'Play storm', ur: 'طوفان چلائیں' },
  jump: { en: 'Jump +30 min', ur: '۳۰ منٹ آگے' },
  resetTitle: { en: 'Reset the demo?', ur: 'ڈیمو ری سیٹ کریں؟' },
  resetBody: { en: 'Cases, dispatches, audit entries and the outbox return to their starting values. This cannot be undone.', ur: 'کیسز، روانگیاں، آڈٹ اندراجات اور آؤٹ باکس اپنی ابتدائی حالت پر آ جائیں گے۔ اسے واپس نہیں کیا جا سکتا۔' },
  cancel: { en: 'Cancel', ur: 'منسوخ' },
  confirm: { en: 'Yes, reset', ur: 'ہاں، ری سیٹ کریں' },
  activity: { en: 'Recent demo activity', ur: 'حالیہ ڈیمو سرگرمی' },
  noActivity: { en: 'Nothing yet. Load a scenario to begin.', ur: 'ابھی کچھ نہیں۔ شروع کرنے کے لیے منظر نامہ لوڈ کریں۔' },
  synthetic: { en: 'Synthetic demo data, weights are expert assumptions, not validated', ur: 'مصنوعی ڈیمو ڈیٹا، وزن ماہرین کے اندازے ہیں، تصدیق شدہ نہیں' },
  tracked: { en: 'Residents tracked', ur: 'زیرِ نگرانی شہری' },
  openCases: { en: 'Open cases', ur: 'کھلے کیسز' },
  dispatches: { en: 'Dispatches', ur: 'روانگیاں' },
  auditEntries: { en: 'Audit entries', ur: 'آڈٹ اندراجات' },
  hoursShort: { en: 'h', ur: 'گھنٹے' },
} satisfies Record<string, Bi>

const SCENARIOS: {
  id: string
  icon: string
  name: Bi
  place: Bi
  desc: Bi
  level: 'advisory' | 'warning' | 'evacuation'
  seconds: number
  cases: Case[]
}[] = [
  {
    id: 'karachi-flood',
    icon: 'flood',
    name: { en: 'Karachi monsoon flood', ur: 'کراچی مون سون سیلاب' },
    place: { en: 'Lyari, Malir, Korangi', ur: 'لیاری، ملیر، کورنگی' },
    desc: { en: 'Nadi overflow, power cuts and many elderly residents cut off.', ur: 'نالوں کا اوور فلو، بجلی بند اور بہت سے بزرگ شہری پھنسے ہوئے۔' },
    level: 'warning',
    seconds: 13330,
    cases: [],
  },
  {
    id: 'hyderabad-heat',
    icon: 'device_thermostat',
    name: { en: 'Hyderabad heatwave', ur: 'حیدرآباد ہیٹ ویو' },
    place: { en: 'Latifabad, Qasimabad', ur: 'لطیف آباد، قاسم آباد' },
    desc: { en: '47°C for three days. Dehydration risk for the elderly and infants.', ur: 'تین دن تک ۴۷ ڈگری۔ بزرگوں اور شیر خوار بچوں میں پانی کی کمی کا خطرہ۔' },
    level: 'advisory',
    seconds: 43200,
    cases: [
      { id: 'PK-HYD-1101', name: 'Ghulam Rasool', nameUrdu: 'غلام رسول', tier: 2, risk: 74.2, location: 'Latifabad Unit 7, House 112', locationUrdu: 'لطیف آباد یونٹ ۷، مکان ۱۱۲', age: 82, status: 'pending', vulnerability: 'Elderly / Heat exhaustion', area: 'malir' },
      { id: 'PK-HYD-1102', name: 'Sakina Mai', nameUrdu: 'سکینہ مائی', tier: 3, risk: 52.6, location: 'Qasimabad Phase 2, Lane 4', locationUrdu: 'قاسم آباد فیز ۲، گلی ۴', age: 69, status: 'pending', vulnerability: 'Lives alone', area: 'korangi' },
      { id: 'PK-HYD-1103', name: 'Baby of Nasreen', nameUrdu: 'نسرین کا بچہ', tier: 2, risk: 68.9, location: 'Hirabad, Block B', locationUrdu: 'ہیرآباد، بلاک بی', age: 1, status: 'pending', vulnerability: 'Infant / Dehydration', area: 'malir' },
    ],
  },
  {
    id: 'thatta-cyclone',
    icon: 'cyclone',
    name: { en: 'Thatta coastal cyclone', ur: 'ٹھٹھہ ساحلی طوفان' },
    place: { en: 'Keti Bandar, Shah Bandar', ur: 'کیٹی بندر، شاہ بندر' },
    desc: { en: 'Storm surge 3m. Fishing villages need evacuation within hours.', ur: '۳ میٹر طوفانی لہر۔ ماہی گیر بستیوں کو چند گھنٹوں میں نکالنا ہے۔' },
    level: 'evacuation',
    seconds: 7200,
    cases: [
      { id: 'PK-THT-2201', name: 'Haji Ismail', nameUrdu: 'حاجی اسماعیل', tier: 1, risk: 93.5, location: 'Keti Bandar, Jetty Road', locationUrdu: 'کیٹی بندر، جیٹی روڈ', age: 74, status: 'pending', vulnerability: 'Paralysed / Coastal', area: 'korangi' },
      { id: 'PK-THT-2202', name: 'Mehrunnisa', nameUrdu: 'مہر النساء', tier: 1, risk: 88.0, location: 'Shah Bandar, Village 3', locationUrdu: 'شاہ بندر، گاؤں ۳', age: 31, status: 'pending', vulnerability: 'Pregnant (8 months)', area: 'korangi' },
      { id: 'PK-THT-2203', name: 'Dilawar Mallah', nameUrdu: 'دلاور ملاح', tier: 2, risk: 70.4, location: 'Keti Bandar, Boat Basin', locationUrdu: 'کیٹی بندر، کشتی گھاٹ', age: 58, status: 'pending', vulnerability: 'Boat-dependent family', area: 'korangi' },
    ],
  },
]

const BENCH: { metric: Bi; manual: string; nlb: string; gain: Bi }[] = [
  { metric: { en: 'Time to first triage', ur: 'پہلی درجہ بندی کا وقت' }, manual: '47 min', nlb: '3 min', gain: { en: '−94%', ur: '−۹۴٪' } },
  { metric: { en: 'Tier 1 reached in 30 min', ur: '۳۰ منٹ میں درجہ اول تک رسائی' }, manual: '38%', nlb: '91%', gain: { en: '+53 pts', ur: '+۵۳ پوائنٹ' } },
  { metric: { en: 'Unknown residents found', ur: 'معلوم کیے گئے نامعلوم شہری' }, manual: '12%', nlb: '67%', gain: { en: '+55 pts', ur: '+۵۵ پوائنٹ' } },
  { metric: { en: 'Boat idle time', ur: 'کشتیوں کا فارغ وقت' }, manual: '31%', nlb: '9%', gain: { en: '−22 pts', ur: '−۲۲ پوائنٹ' } },
]

const FAULTS: { id: string; icon: string; label: Bi; hint: Bi }[] = [
  { id: 'mesh', icon: 'cell_tower', label: { en: 'Cell tower outage', ur: 'موبائل ٹاور بند' }, hint: { en: 'Switches field apps to offline mesh', ur: 'فیلڈ ایپس کو آف لائن میش پر لے جاتا ہے' } },
  { id: 'road', icon: 'edit_road', label: { en: 'Road closure', ur: 'سڑک بند' }, hint: { en: 'Forces routes to be recalculated', ur: 'راستوں کا دوبارہ حساب کراتا ہے' } },
  { id: 'boat', icon: 'sailing', label: { en: 'Boat breakdown', ur: 'کشتی خراب' }, hint: { en: 'Removes one boat from the fleet', ur: 'بیڑے سے ایک کشتی ہٹا دیتا ہے' } },
  { id: 'heat', icon: 'wb_sunny', label: { en: 'Heatwave overlay', ur: 'ہیٹ ویو اوورلے' }, hint: { en: 'Raises risk for elderly residents', ur: 'بزرگ شہریوں کا خطرہ بڑھاتا ہے' } },
]

const LEVELS: { id: 'advisory' | 'warning' | 'evacuation'; label: Bi; tone: string }[] = [
  { id: 'advisory', label: { en: 'Advisory', ur: 'ہدایت' }, tone: 'text-secondary' },
  { id: 'warning', label: { en: 'Warning', ur: 'انتباہ' }, tone: 'text-primary' },
  { id: 'evacuation', label: { en: 'Evacuate', ur: 'انخلاء' }, tone: 'text-error' },
]

const CLOCK_PRESETS = [
  { s: 7200, label: '2' },
  { s: 13330, label: '3.7' },
  { s: 21600, label: '6' },
  { s: 43200, label: '12' },
]

const ROLE_CARDS: { role: Role; icon: string; name: Bi; desc: Bi; home: string; user: { name: string; nameUrdu: string; email: string; phone: string; roleLabel: string } }[] = [
  { role: 'coordinator', icon: 'hub', name: { en: 'Coordinator', ur: 'کوآرڈینیٹر' }, desc: { en: 'Triage and dispatch', ur: 'درجہ بندی اور روانگی' }, home: '/command', user: { name: 'Zara Khan', nameUrdu: 'زارا خان', email: 'zara.khan@emergency.sindh.gov.pk', phone: '+92 300 1112233', roleLabel: 'Coordinator / کوآرڈینیٹر' } },
  { role: 'volunteer', icon: 'directions_run', name: { en: 'Field volunteer', ur: 'فیلڈ رضاکار' }, desc: { en: 'Tasks and check-ins', ur: 'ٹاسکس اور چیک ان' }, home: '/field/tasks', user: { name: 'Bilal Ahmed', nameUrdu: 'بلال احمد', email: 'bilal.field@volunteer.sindh.org', phone: '+92 321 4455667', roleLabel: 'Field Volunteer / فیلڈ رضاکار' } },
  { role: 'registrar', icon: 'how_to_reg', name: { en: 'Registrar', ur: 'رجسٹرار' }, desc: { en: 'Door-to-door register', ur: 'گھر گھر اندراج' }, home: '/register', user: { name: 'Amina Baloch', nameUrdu: 'آمنہ بلوچ', email: 'amina.b@community.sindh.gov.pk', phone: '+92 333 7788990', roleLabel: 'Registrar / رجسٹرار' } },
  { role: 'shelter', icon: 'night_shelter', name: { en: 'Shelter manager', ur: 'شیلٹر مینیجر' }, desc: { en: 'Beds and supplies', ur: 'بستر اور سامان' }, home: '/shelter', user: { name: 'Tariq Mansoor', nameUrdu: 'طارق منصور', email: 'tariq.shelter@relief.sindh.gov.pk', phone: '+92 345 2200114', roleLabel: 'Shelter Manager / شیلٹر مینیجر' } },
  { role: 'viewer', icon: 'visibility', name: { en: 'Auditor', ur: 'آڈیٹر' }, desc: { en: 'Read-only audit trail', ur: 'صرف دیکھنے والا آڈٹ ریکارڈ' }, home: '/quality/audit', user: { name: 'Dr. Farooq Malik', nameUrdu: 'ڈاکٹر فاروق ملک', email: 'f.malik@audit.un-relief.org', phone: '+92 301 5566778', roleLabel: 'Viewer / غیر جانبدار مبصر' } },
]

function Section({ title, hint, children, lang }: { title: string; hint?: string; children: React.ReactNode; lang: Lang }) {
  return (
    <section className="rounded-2xl bg-surface-container-low p-space-lg flex flex-col gap-space-lg">
      <header className="flex flex-col gap-space-xs">
        <h2 className={`text-headline-sm font-headline-sm text-on-surface ${lang === 'ur' ? 'font-urdu-headline !text-[22px] !leading-[2.2rem]' : ''}`}>{title}</h2>
        {hint && <p className={`text-body-sm text-on-surface-variant ${lang === 'ur' ? 'font-urdu-body !text-[15px] !leading-8' : ''}`}>{hint}</p>}
      </header>
      {children}
    </section>
  )
}

export default function AdminDemoPage() {
  const nav = useNavigate()
  const lang = useStore((s) => s.language)
  const alertLevel = useStore((s) => s.alertLevel)
  const countdown = useStore((s) => s.hazardCountdown)
  const cases = useStore((s) => s.cases)
  const assignments = useStore((s) => s.assignments)
  const auditLog = useStore((s) => s.auditLog)
  const { setAlertLevel, setHazardCountdown, seedCases, resetDemo, login, showToast, setSim } = useStore.getState()

  const [scenarioId, setScenarioId] = useState('karachi-flood')
  const [faults, setFaults] = useState<Record<string, boolean>>({ mesh: true })
  const [confirmReset, setConfirmReset] = useState(false)
  const [log, setLog] = useState<{ at: string; text: Bi }[]>([])

  const L = (b: Bi) => b[lang]
  const ur = lang === 'ur'
  const body = ur ? 'font-urdu-body !leading-8' : ''
  const stamp = () => num(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }), lang)
  const push = (text: Bi) => setLog((l) => [{ at: stamp(), text }, ...l].slice(0, 6))

  const loadScenario = (id: string) => {
    const sc = SCENARIOS.find((x) => x.id === id)!
    setScenarioId(id)
    setAlertLevel(sc.level)
    setHazardCountdown(sc.seconds)
    if (sc.cases.length) seedCases(sc.cases)
    push({ en: `Loaded “${sc.name.en}”`, ur: `“${sc.name.ur}” لوڈ ہوا` })
    showToast(`Scenario loaded: ${sc.name.en}`, `منظر نامہ لوڈ ہوا: ${sc.name.ur}`, 'success')
  }

  /** Mirror the action on Supabase (Edge Function) when signed in with a real account. */
  const backend = async (action: DemoAction, params: Record<string, unknown> = {}) => {
    if (!backendReady()) return
    try {
      await demoControl(action, params)
      await hydrateFromSupabase()
    } catch (e) {
      showToast(`Backend: ${(e as Error).message}`, 'بیک اینڈ میں خرابی', 'error')
    }
  }

  const playStorm = () => {
    setAlertLevel('evacuation')
    setHazardCountdown(2400)
    push({ en: 'Storm played: evacuation stage', ur: 'طوفان چلایا گیا: انخلا مرحلہ' })
    void backend('play_storm')
  }

  const jumpTime = () => {
    setHazardCountdown(Math.max(0, countdown - 1800))
    push({ en: 'Clock jumped +30 min', ur: 'گھڑی ۳۰ منٹ آگے' })
    void backend('jump_time', { minutes: 30 })
  }

  const toggleFault = (id: string) => {
    const next = !faults[id]
    if (id === 'mesh') void backend('break_network', { on: next })
    if (id === 'road') void backend('close_road', { on: next })
    if (id === 'boat') void backend('boat_broken', { on: next })
    setFaults({ ...faults, [id]: next })
    if (id === 'mesh') setSim({ meshDown: next })
    if (id === 'road') setSim({ roadClosed: next })
    if (id === 'boat') setSim({ boatBroken: next })
    if (id === 'heat') setSim({ heatwave: next })
    const f = FAULTS.find((x) => x.id === id)!
    push({ en: `${f.label.en} ${next ? 'on' : 'off'}`, ur: `${f.label.ur} ${next ? 'آن' : 'آف'}` })
  }

  const switchRole = (r: (typeof ROLE_CARDS)[number]) => {
    login({ ...r.user, role: r.role })
    showToast(`Signed in as ${r.name.en}`, `${r.name.ur} کے طور پر لاگ ان`, 'info')
    nav(r.home)
  }

  const doSeed = () => {
    seedCases(SCENARIOS[1].cases)
    void backend('seed', { count: 20 })
    push({ en: 'Added 3 synthetic cases', ur: '۳ مصنوعی کیس شامل کیے گئے' })
    showToast('3 synthetic cases added', '۳ مصنوعی کیس شامل ہو گئے', 'success')
  }

  const doReset = () => {
    resetDemo()
    void backend('reset')
    setScenarioId('karachi-flood')
    setFaults({ mesh: true })
    setLog([])
    setConfirmReset(false)
    showToast('Demo reset', 'ڈیمو ری سیٹ ہو گیا', 'warning')
  }

  const hours = (countdown / 3600).toFixed(1)
  const stats = [
    { label: TXT.tracked, value: 1842 + cases.length, icon: 'groups', tone: 'text-primary' },
    { label: TXT.openCases, value: cases.filter((c) => c.status === 'pending').length, icon: 'crisis_alert', tone: 'text-error' },
    { label: TXT.dispatches, value: assignments.length, icon: 'local_shipping', tone: 'text-secondary' },
    { label: TXT.auditEntries, value: auditLog.length, icon: 'fact_check', tone: 'text-on-surface' },
  ]

  return (
    <div className="mx-auto w-full max-w-[1180px] flex flex-col gap-space-xl pb-space-xl">
      {/* Header */}
      <div className="flex flex-col gap-space-md">
        <span className={`inline-flex w-fit items-center gap-space-sm px-3 py-1 rounded-full bg-primary-container/20 text-primary text-telemetry-sm font-telemetry-sm uppercase tracking-wider ${ur ? 'font-urdu-body !normal-case !tracking-normal' : ''}`}>
          <span className="material-symbols-outlined text-[16px]">tune</span>
          {L(TXT.eyebrow)}
        </span>
        <h1 className={`text-headline-lg font-headline-lg text-on-surface ${ur ? 'font-urdu-headline !text-[34px] !leading-[3.2rem]' : ''}`}>{L(TXT.title)}</h1>
        <p className={`max-w-2xl text-body-md text-on-surface-variant ${body}`}>{L(TXT.subtitle)}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">
        {stats.map((s) => (
          <div key={s.label.en} className="rounded-2xl bg-surface-container-low p-space-lg flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <span className={`text-body-sm text-on-surface-variant ${body}`}>{L(s.label)}</span>
              <span className={`material-symbols-outlined ${s.tone}`}>{s.icon}</span>
            </div>
            <span className="text-telemetry-lg font-telemetry-lg text-on-surface">{num(s.value.toLocaleString('en-US'), lang)}</span>
          </div>
        ))}
      </div>

      {/* Scenarios */}
      <Section lang={lang} title={L(TXT.scenarios)} hint={L(TXT.scenariosHint)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {SCENARIOS.map((sc) => {
            const on = sc.id === scenarioId
            return (
              <article key={sc.id} className={`rounded-xl p-space-lg flex flex-col gap-space-md transition-all ${on ? 'bg-primary-container/15 ring-1 ring-primary-container/60' : 'bg-surface-container hover:bg-surface-container-high'}`}>
                <div className="flex items-center justify-between">
                  <span className="w-11 h-11 rounded-xl bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{sc.icon}</span>
                  </span>
                  {on && <span className={`px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary text-telemetry-sm font-telemetry-sm ${ur ? 'font-urdu-body' : ''}`}>{L(TXT.active)}</span>}
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className={`text-headline-sm font-headline-sm text-on-surface ${ur ? 'font-urdu-headline !text-[20px] !leading-[2.4rem]' : ''}`}>{L(sc.name)}</h3>
                  <span className={`text-telemetry-sm font-telemetry-sm text-secondary ${ur ? 'font-urdu-body' : ''}`}>{L(sc.place)}</span>
                </div>
                <p className={`text-body-sm text-on-surface-variant flex-1 ${body}`}>{L(sc.desc)}</p>
                <button type="button" onClick={() => loadScenario(sc.id)} className={`min-h-[44px] rounded-lg font-semibold transition-all ${on ? 'bg-surface-container-highest text-on-surface' : 'bg-primary-container text-on-primary-container hover:brightness-110'} ${ur ? 'font-urdu-body' : ''}`}>
                  {L(TXT.load)}
                </button>
              </article>
            )
          })}
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-space-xl">
        {/* Controls */}
        <div className="lg:col-span-3 flex flex-col gap-space-xl">
          <Section lang={lang} title={L(TXT.controls)}>
            <div className="flex flex-col gap-space-md">
              <span className={`text-body-sm text-on-surface-variant ${body}`}>{L(TXT.alertLevel)}</span>
              <div className="grid grid-cols-3 gap-space-sm p-1 rounded-xl bg-surface-container">
                {LEVELS.map((lv) => (
                  <button key={lv.id} type="button" onClick={() => { setAlertLevel(lv.id); push({ en: `Alert level: ${lv.label.en}`, ur: `الرٹ سطح: ${lv.label.ur}` }) }}
                    className={`min-h-[44px] rounded-lg text-body-sm font-semibold transition-all ${alertLevel === lv.id ? `bg-surface-container-highest ${lv.tone}` : 'text-on-surface-variant hover:text-on-surface'} ${ur ? 'font-urdu-body' : ''}`}>
                    {L(lv.label)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className={`text-body-sm text-on-surface-variant ${body}`}>{L(TXT.hazardClock)}</span>
                <span className="text-telemetry-md font-telemetry-md text-primary">{num(hours, lang)} {L(TXT.hoursShort)}</span>
              </div>
              <div className="flex flex-wrap gap-space-sm">
                {CLOCK_PRESETS.map((p) => (
                  <button key={p.s} type="button" onClick={() => setHazardCountdown(p.s)}
                    className={`min-h-[40px] px-4 rounded-full text-telemetry-sm font-telemetry-sm transition-all ${countdown === p.s ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>
                    {num(p.label, lang)} {L(TXT.hoursShort)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-space-md">
              <span className={`text-body-sm text-on-surface-variant ${body}`}>{L(TXT.faults)}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                {FAULTS.map((f) => {
                  const on = !!faults[f.id]
                  return (
                    <button key={f.id} type="button" onClick={() => toggleFault(f.id)} className="text-start rounded-xl bg-surface-container hover:bg-surface-container-high p-space-md flex items-center gap-space-md transition-all">
                      <span className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${on ? 'bg-error-container/40 text-error' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                        <span className="material-symbols-outlined text-[22px]">{f.icon}</span>
                      </span>
                      <span className="flex-1 min-w-0 flex flex-col gap-1">
                        <span className={`text-body-sm font-semibold text-on-surface ${ur ? 'font-urdu-body' : ''}`}>{L(f.label)}</span>
                        <span className={`text-[12px] leading-4 text-on-surface-variant ${ur ? 'font-urdu-body !leading-6' : ''}`}>{L(f.hint)}</span>
                      </span>
                      <span className={`w-10 h-6 shrink-0 rounded-full p-0.5 transition-colors ${on ? 'bg-error' : 'bg-surface-container-highest'}`}>
                        <span className={`block w-5 h-5 rounded-full bg-on-surface transition-transform ${on ? (ur ? '-translate-x-4' : 'translate-x-4') : ''}`} />
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </Section>

          <Section lang={lang} title={L(TXT.benchmarks)} hint={L(TXT.benchmarksHint)}>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className={`text-on-surface-variant text-start ${ur ? 'font-urdu-body' : 'font-telemetry-sm text-telemetry-sm uppercase tracking-wider'}`}>
                    <th className="text-start font-medium pb-space-md">{L(TXT.metric)}</th>
                    <th className="text-start font-medium pb-space-md px-space-md">{L(TXT.manual)}</th>
                    <th className="text-start font-medium pb-space-md px-space-md">{L(TXT.nlb)}</th>
                    <th className="text-start font-medium pb-space-md">{L(TXT.gain)}</th>
                  </tr>
                </thead>
                <tbody>
                  {BENCH.map((r) => (
                    <tr key={r.metric.en} className="border-t border-outline-variant/30">
                      <td className={`py-space-md pe-space-md text-on-surface ${ur ? 'font-urdu-body' : ''}`}>{L(r.metric)}</td>
                      <td className="py-space-md px-space-md font-telemetry-sm text-on-surface-variant">{num(r.manual, lang)}</td>
                      <td className="py-space-md px-space-md font-telemetry-sm text-on-surface font-bold">{num(r.nlb, lang)}</td>
                      <td className="py-space-md font-telemetry-sm text-secondary font-bold" dir="ltr">{L(r.gain)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </div>

        {/* Side column */}
        <div className="lg:col-span-2 flex flex-col gap-space-xl">
          <Section lang={lang} title={L(TXT.roles)} hint={L(TXT.rolesHint)}>
            <div className="flex flex-col gap-space-sm">
              {ROLE_CARDS.map((r) => (
                <button key={r.role} type="button" onClick={() => switchRole(r)} className="text-start rounded-xl bg-surface-container hover:bg-surface-container-high p-space-md flex items-center gap-space-md transition-all group">
                  <span className="w-10 h-10 shrink-0 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[22px]">{r.icon}</span>
                  </span>
                  <span className="flex-1 flex flex-col gap-1">
                    <span className={`text-body-sm font-semibold text-on-surface ${ur ? 'font-urdu-body' : ''}`}>{L(r.name)}</span>
                    <span className={`text-[12px] text-on-surface-variant ${ur ? 'font-urdu-body !leading-6' : ''}`}>{L(r.desc)}</span>
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary rtl:rotate-180">arrow_forward</span>
                </button>
              ))}
            </div>
          </Section>

          <Section lang={lang} title={L(TXT.data)} hint={L(TXT.dataHint)}>
            <div className="flex flex-col gap-space-sm">
              <button type="button" onClick={doSeed} className={`min-h-[48px] rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold flex items-center justify-center gap-space-sm transition-all ${ur ? 'font-urdu-body' : ''}`}>
                <span className="material-symbols-outlined text-secondary">person_add</span>{L(TXT.seed)}
              </button>
              <button type="button" onClick={playStorm} className={`min-h-[48px] rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold flex items-center justify-center gap-space-sm transition-all ${ur ? 'font-urdu-body' : ''}`}>
                <span className="material-symbols-outlined text-tertiary">thunderstorm</span>{L(TXT.storm)}
              </button>
              <button type="button" onClick={jumpTime} className={`min-h-[48px] rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold flex items-center justify-center gap-space-sm transition-all ${ur ? 'font-urdu-body' : ''}`}>
                <span className="material-symbols-outlined text-primary">update</span>{L(TXT.jump)}
              </button>
              <button type="button" onClick={() => setConfirmReset(true)} className={`min-h-[48px] rounded-xl bg-error-container/30 hover:bg-error-container/50 text-error font-semibold flex items-center justify-center gap-space-sm transition-all ${ur ? 'font-urdu-body' : ''}`}>
                <span className="material-symbols-outlined">restart_alt</span>{L(TXT.reset)}
              </button>
            </div>
          </Section>

          <Section lang={lang} title={L(TXT.activity)}>
            {log.length === 0 ? (
              <p className={`text-body-sm text-on-surface-variant ${body}`}>{L(TXT.noActivity)}</p>
            ) : (
              <ul className="flex flex-col gap-space-md">
                {log.map((e, i) => (
                  <li key={i} className="flex items-start gap-space-md">
                    <span className="font-telemetry-sm text-telemetry-sm text-primary pt-0.5">{e.at}</span>
                    <span className={`text-body-sm text-on-surface ${body}`}>{L(e.text)}</span>
                  </li>
                ))}
              </ul>
            )}
          </Section>
        </div>
      </div>

      <p className={`text-center text-telemetry-sm font-telemetry-sm text-on-surface-variant/70 ${ur ? 'font-urdu-body' : ''}`}>{L(TXT.synthetic)}</p>

      <Modal isOpen={confirmReset} onClose={() => setConfirmReset(false)} title={TXT.resetTitle.en} titleUrdu={TXT.resetTitle.ur}
        footer={
          <>
            <button type="button" onClick={() => setConfirmReset(false)} className={`min-h-[44px] px-5 rounded-lg bg-surface-container text-on-surface ${ur ? 'font-urdu-body' : ''}`}>{L(TXT.cancel)}</button>
            <button type="button" onClick={doReset} className={`min-h-[44px] px-5 rounded-lg bg-error text-on-error font-semibold ${ur ? 'font-urdu-body' : ''}`}>{L(TXT.confirm)}</button>
          </>
        }>
        <p className={`text-body-md text-on-surface-variant ${body}`}>{L(TXT.resetBody)}</p>
      </Modal>
    </div>
  )
}
