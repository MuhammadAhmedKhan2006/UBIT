import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore, type Role } from '../store'
import { t } from '../i18n'
import { signIn, signOut } from '../lib/db'
import { hydrateFromSupabase } from '../lib/session'
import { supabase, supabaseConfigured } from '../lib/supabase'

type Mode = 'signin' | 'signup'

interface RoleMeta {
  role: Role
  en: string
  ur: string
  icon: string
  desc: string
  descUr: string
  /** Role-specific extra field collected at sign-up */
  extra: { en: string; ur: string; placeholder: string }
  /** Needs an organisation invite code to create an account */
  restricted?: boolean
}

const ROLES: RoleMeta[] = [
  { role: 'coordinator', en: 'Coordinator', ur: 'کوآرڈینیٹر', icon: 'tune', restricted: true,
    desc: 'Triage, approve evacuations and allocate rescue teams.', descUr: 'ترجیحی فہرست، انخلا کی منظوری اور ٹیموں کی تقسیم۔',
    extra: { en: 'Department / District', ur: 'محکمہ / ضلع', placeholder: 'PDMA Sindh – Karachi South' } },
  { role: 'volunteer', en: 'Field Volunteer', ur: 'فیلڈ رضاکار', icon: 'directions_boat',
    desc: 'Offline mobile tasks, sync and resident buddy checks.', descUr: 'آف لائن ٹاسک، سنک اور رہائشیوں کی خیریت۔',
    extra: { en: 'Team / Zone', ur: 'ٹیم / علاقہ', placeholder: 'Boat Team 4 – Lyari' } },
  { role: 'registrar', en: 'Registrar', ur: 'رجسٹرار', icon: 'app_registration',
    desc: 'Door-to-door vulnerability registry and intake.', descUr: 'گھر گھر کمزور افراد کا اندراج۔',
    extra: { en: 'Union Council', ur: 'یونین کونسل', placeholder: 'UC-7 Kharadar' } },
  { role: 'shelter', en: 'Shelter Manager', ur: 'شیلٹر مینیجر', icon: 'night_shelter',
    desc: 'Beds, rations, power and medical supply tracking.', descUr: 'بستر، راشن، بجلی اور طبی سامان کی نگرانی۔',
    extra: { en: 'Shelter name', ur: 'شیلٹر کا نام', placeholder: 'Govt Girls School Camp' } },
  { role: 'viewer', en: 'Viewer / Auditor', ur: 'مبصر / آڈیٹر', icon: 'visibility', restricted: true,
    desc: 'Read-only audit trail and ethical oversight.', descUr: 'صرف پڑھنے کی رسائی، آڈٹ اور نگرانی۔',
    extra: { en: 'Organisation', ur: 'ادارہ', placeholder: 'UN OCHA Pakistan' } },
]

const DEMO: Record<Role, { name: string; nameUrdu: string; email: string }> = {
  coordinator: { name: 'Zara Khan', nameUrdu: 'زارا خان', email: 'zara.khan@emergency.sindh.gov.pk' },
  volunteer: { name: 'Bilal Ahmed', nameUrdu: 'بلال احمد', email: 'bilal.field@volunteer.sindh.org' },
  registrar: { name: 'Amina Baloch', nameUrdu: 'آمنہ بلوچ', email: 'amina.b@community.sindh.gov.pk' },
  shelter: { name: 'Tariq Mansoor', nameUrdu: 'طارق منصور', email: 'tariq.shelter@relief.sindh.gov.pk' },
  viewer: { name: 'Dr. Farooq Malik', nameUrdu: 'ڈاکٹر فاروق ملک', email: 'f.malik@audit.un-relief.org' },
}

const ROLE_HOMES: Record<Role, string> = {
  coordinator: '/command',
  volunteer: '/field/tasks',
  registrar: '/register',
  shelter: '/shelter',
  viewer: '/quality/audit',
}

const INVITE_CODE = (import.meta.env.VITE_STAFF_INVITE_CODE as string | undefined) || 'SINDH-2026'

const TX = {
  en: {
    iAm: 'I am a…', signIn: 'Sign in', signUp: 'Create account',
    signInAs: (r: string) => `Sign in as ${r}`, signUpAs: (r: string) => `Register as ${r}`,
    email: 'Email', password: 'Password', confirm: 'Confirm password', name: 'Full name', phone: 'Phone number',
    invite: 'Organisation invite code', inviteHint: 'Issued by your department. Required for this role.',
    noAccount: "Don't have an account?", haveAccount: 'Already registered?', demoTitle: 'Quick demo access',
    demoBtn: 'Enter demo as', wrongRole: (have: string, want: string) => `This account is registered as ${have}, not ${want}. Pick the correct role above.`,
    badCreds: 'Incorrect email or password for this role.', fill: 'Please fill in all fields.', short: 'Password must be at least 8 characters.',
    mismatch: 'Passwords do not match.', badInvite: 'Invalid invite code.', exists: 'An account with this email already exists. Sign in instead.',
    checkMail: 'Account created. Check your email to confirm, then sign in.', created: 'Account created. Welcome!',
    localNote: 'Supabase is not connected — accounts are stored on this device only.',
  },
  ur: {
    iAm: 'میں ہوں…', signIn: 'لاگ ان', signUp: 'اکاؤنٹ بنائیں',
    signInAs: (r: string) => `بطور ${r} لاگ ان`, signUpAs: (r: string) => `بطور ${r} رجسٹر کریں`,
    email: 'ای میل', password: 'پاس ورڈ', confirm: 'پاس ورڈ کی تصدیق', name: 'پورا نام', phone: 'فون نمبر',
    invite: 'ادارہ جاتی دعوتی کوڈ', inviteHint: 'آپ کے محکمے کی طرف سے جاری، اس کردار کے لیے ضروری۔',
    noAccount: 'اکاؤنٹ نہیں ہے؟', haveAccount: 'پہلے سے رجسٹرڈ ہیں؟', demoTitle: 'فوری ڈیمو رسائی',
    demoBtn: 'ڈیمو میں داخل ہوں بطور', wrongRole: (have: string, want: string) => `یہ اکاؤنٹ ${have} کا ہے، ${want} کا نہیں۔ اوپر درست کردار منتخب کریں۔`,
    badCreds: 'اس کردار کے لیے ای میل یا پاس ورڈ غلط ہے۔', fill: 'براہ کرم تمام خانے پُر کریں۔', short: 'پاس ورڈ کم از کم 8 حروف کا ہو۔',
    mismatch: 'پاس ورڈ مماثل نہیں۔', badInvite: 'دعوتی کوڈ غلط ہے۔', exists: 'اس ای میل سے اکاؤنٹ پہلے سے موجود ہے۔ لاگ ان کریں۔',
    checkMail: 'اکاؤنٹ بن گیا۔ ای میل کی تصدیق کریں، پھر لاگ ان کریں۔', created: 'اکاؤنٹ بن گیا۔ خوش آمدید!',
    localNote: 'سپابیس منسلک نہیں — اکاؤنٹ صرف اس ڈیوائس پر محفوظ ہیں۔',
  },
} as const

// ---- Device-local accounts (used only when Supabase is unavailable) ----
const LOCAL_KEY = 'nlb-local-accounts'
interface LocalAccount { email: string; hash: string; name: string; phone: string; role: Role; org: string }
const loadLocal = (): LocalAccount[] => { try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]') } catch { return [] } }
const saveLocal = (a: LocalAccount[]) => localStorage.setItem(LOCAL_KEY, JSON.stringify(a))
async function sha(text: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

const inputCls = 'w-full bg-surface-container-lowest/80 text-on-surface rounded-lg p-3.5 font-telemetry-md text-telemetry-md placeholder-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary-container focus:bg-surface-container-low transition-all'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, language, setLanguage, showToast } = useStore()
  const L = TX[language]
  const ur = language === 'ur'
  const uf = ur ? 'font-urdu-body' : ''

  const [role, setRole] = useState<Role>('coordinator')
  const [mode, setMode] = useState<Mode>('signin')
  const [busy, setBusy] = useState(false)
  const [showPwd, setShowPwd] = useState(false)
  const [f, setF] = useState({ name: '', email: '', phone: '', password: '', confirm: '', extra: '', invite: '' })
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF((p) => ({ ...p, [k]: e.target.value }))

  const meta = ROLES.find((r) => r.role === role)!
  const roleName = ur ? meta.ur : meta.en
  const roleLabel = `${meta.en} / ${meta.ur}`
  const err = (msg: string) => showToast(msg, msg, 'error')

  const enter = (r: Role, name: string, nameUrdu: string, email: string, phone = email) => {
    const m = ROLES.find((x) => x.role === r)!
    login({ name, nameUrdu, email, phone, role: r, roleLabel: `${m.en} / ${m.ur}` })
    showToast(t('accessGranted', 'en'), t('accessGranted', 'ur'), 'success')
    navigate(ROLE_HOMES[r])
  }

  const switchRole = (r: Role) => { setRole(r) }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    const email = f.email.trim().toLowerCase()
    if (!email || !f.password) return err(L.fill)
    setBusy(true)
    try {
      if (supabaseConfigured) {
        const { error } = await signIn(email, f.password)
        if (!error) {
          await hydrateFromSupabase()
          const live = useStore.getState().user
          if (live && live.role !== role) {
            await signOut()
            useStore.getState().logout()
            const have = ROLES.find((x) => x.role === live.role)
            return err(L.wrongRole((ur ? have?.ur : have?.en) || live.role, roleName))
          }
          showToast(t('accessGranted', 'en'), t('accessGranted', 'ur'), 'success')
          return navigate(ROLE_HOMES[live?.role || role])
        }
      }
      const hash = await sha(f.password)
      const acct = loadLocal().find((a) => a.email === email && a.hash === hash)
      if (acct) {
        if (acct.role !== role) {
          const have = ROLES.find((x) => x.role === acct.role)
          return err(L.wrongRole((ur ? have?.ur : have?.en) || acct.role, roleName))
        }
        return enter(acct.role, acct.name, '', acct.email, acct.phone)
      }
      err(L.badCreds)
    } finally { setBusy(false) }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const email = f.email.trim().toLowerCase()
    const name = f.name.trim()
    if (!name || !email || !f.phone.trim() || !f.password || !f.extra.trim()) return err(L.fill)
    if (f.password.length < 8) return err(L.short)
    if (f.password !== f.confirm) return err(L.mismatch)
    if (meta.restricted && f.invite.trim().toUpperCase() !== INVITE_CODE.toUpperCase()) return err(L.badInvite)
    setBusy(true)
    try {
      if (supabaseConfigured) {
        const { data, error } = await supabase.auth.signUp({
          email, password: f.password,
          options: { data: { name, phone: f.phone.trim(), role, role_label: roleLabel, organisation: f.extra.trim(), invite_code: f.invite.trim() } },
        })
        if (error) {
          if (/registered|exists/i.test(error.message)) return err(L.exists)
          return err(error.message)
        }
        if (data.session) {
          await hydrateFromSupabase()
          showToast(L.created, L.created, 'success')
          return navigate(ROLE_HOMES[role])
        }
        showToast(L.checkMail, L.checkMail, 'success')
        setMode('signin')
        return
      }
      const accts = loadLocal()
      if (accts.some((a) => a.email === email)) return err(L.exists)
      accts.push({ email, hash: await sha(f.password), name, phone: f.phone.trim(), role, org: f.extra.trim() })
      saveLocal(accts)
      showToast(L.created, L.created, 'success')
      enter(role, name, '', email, f.phone.trim())
    } finally { setBusy(false) }
  }

  const demo = (r: Role) => {
    const d = DEMO[r]
    enter(r, d.name, d.nameUrdu, d.email)
    void hydrateFromSupabase()
  }

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex items-center justify-center p-space-md antialiased">
      <main className="w-full max-w-xl bg-surface-container-low/90 backdrop-blur-2xl rounded-xl p-space-md sm:p-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col w-full relative">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-container/15 rounded-full blur-[110px] pointer-events-none -z-10" />

          {/* Status bar */}
          <header className="w-full mb-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest/80 rounded-lg p-space-sm shadow-sm">
              <div className="flex items-center gap-space-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                </span>
                <span className={`font-telemetry-sm text-telemetry-sm text-secondary tracking-widest uppercase ${uf}`}>{t('sindhCommand', language)}</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <a className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container/40 text-error hover:bg-error-container/60 transition-colors" href="tel:1129">
                  <span className="material-symbols-outlined text-[16px]">emergency</span>
                  <span className="font-telemetry-sm text-telemetry-sm font-bold">1129 PDMA SINDH</span>
                </a>
                <button onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')} className="flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px] text-primary">translate</span>
                  <span className={`font-body-sm text-body-sm font-semibold ${uf}`}>{t(language === 'en' ? 'urdu' : 'english', language)}</span>
                </button>
              </div>
            </div>
          </header>

          <section className="w-full bg-surface-container/75 backdrop-blur-xl rounded-xl p-space-md sm:p-space-lg shadow-[0_20px_50px_rgba(5,16,20,0.85)] relative overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <h1 className={`font-headline-lg text-headline-lg text-on-surface tracking-tight ${ur ? 'font-urdu-headline' : ''}`}>{t('appName', language)}</h1>
              <p className={`font-body-sm text-body-sm text-on-surface-variant mt-1 ${uf}`}>
                {ur ? t('sindhEmergency', 'ur') : 'Sindh Emergency Flood & Heatwave Response System'}
              </p>
            </div>

            {/* Role selector */}
            <div className="mt-space-md">
              <p className={`font-body-sm text-body-sm font-bold uppercase tracking-widest text-on-surface-variant mb-space-xs ${uf}`}>{L.iAm}</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-xs" role="tablist">
                {ROLES.map((r) => {
                  const on = r.role === role
                  return (
                    <button key={r.role} type="button" role="tab" aria-selected={on} onClick={() => switchRole(r.role)}
                      className={`flex flex-col items-center gap-1 px-2 py-3 rounded-lg text-center transition-all ${on ? 'bg-primary-container text-on-primary-container shadow-[0_0_16px_rgba(242,169,59,0.35)]' : 'bg-surface-container-high/60 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}>
                      <span className="material-symbols-outlined text-[22px]">{r.icon}</span>
                      <span className={`font-body-sm text-body-sm font-semibold leading-tight ${uf}`}>{ur ? r.ur : r.en}</span>
                    </button>
                  )
                })}
              </div>
              <p className={`mt-space-xs font-body-sm text-body-sm text-on-surface-variant ${uf}`}>{ur ? meta.descUr : meta.desc}</p>
            </div>

            {/* Mode tabs */}
            <div className="mt-space-md grid grid-cols-2 p-1 rounded-lg bg-surface-container-lowest/80">
              {(['signin', 'signup'] as Mode[]).map((m) => (
                <button key={m} type="button" onClick={() => setMode(m)}
                  className={`py-2.5 rounded-md font-headline-sm text-body-md font-semibold transition-all ${uf} ${mode === m ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
                  {m === 'signin' ? L.signIn : L.signUp}
                </button>
              ))}
            </div>

            <form key={mode + role} className="mt-space-md flex flex-col gap-space-sm" onSubmit={mode === 'signin' ? handleSignIn : handleSignUp} noValidate>
              {mode === 'signup' && (
                <Field label={L.name} cls={uf}><input className={inputCls} value={f.name} onChange={set('name')} autoComplete="name" /></Field>
              )}
              <Field label={L.email} cls={uf}>
                <input className={inputCls} type="email" value={f.email} onChange={set('email')} autoComplete="email" placeholder={DEMO[role].email} dir="ltr" />
              </Field>
              {mode === 'signup' && (
                <>
                  <Field label={L.phone} cls={uf}><input className={inputCls} type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="+92 3XX XXXXXXX" dir="ltr" /></Field>
                  <Field label={ur ? meta.extra.ur : meta.extra.en} cls={uf}><input className={inputCls} value={f.extra} onChange={set('extra')} placeholder={meta.extra.placeholder} /></Field>
                </>
              )}
              <Field label={L.password} cls={uf}>
                <div className="relative">
                  <input className={`${inputCls} pr-11 rtl:pr-3.5 rtl:pl-11`} type={showPwd ? 'text' : 'password'} value={f.password} onChange={set('password')} autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} dir="ltr" />
                  <button className="absolute right-3 rtl:right-auto rtl:left-3 top-3.5 text-on-surface-variant hover:text-on-surface" onClick={() => setShowPwd(!showPwd)} type="button" aria-label="Toggle password">
                    <span className="material-symbols-outlined text-[20px]">{showPwd ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </Field>
              {mode === 'signup' && (
                <Field label={L.confirm} cls={uf}><input className={inputCls} type={showPwd ? 'text' : 'password'} value={f.confirm} onChange={set('confirm')} autoComplete="new-password" dir="ltr" /></Field>
              )}
              {mode === 'signup' && meta.restricted && (
                <Field label={L.invite} cls={uf} hint={L.inviteHint}><input className={inputCls} value={f.invite} onChange={set('invite')} placeholder="XXXXX-0000" dir="ltr" /></Field>
              )}
              <button type="submit" disabled={busy}
                className={`mt-space-xs w-full py-3.5 px-space-md rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(242,169,59,0.35)] hover:brightness-110 active:translate-y-0.5 transition-all disabled:opacity-70 ${ur ? 'font-urdu-headline' : ''}`}>
                <span className="material-symbols-outlined">{busy ? 'sync' : mode === 'signin' ? 'login' : 'person_add'}</span>
                <span>{mode === 'signin' ? L.signInAs(roleName) : L.signUpAs(roleName)}</span>
              </button>
              <p className={`text-center font-body-sm text-body-sm text-on-surface-variant ${uf}`}>
                {mode === 'signin' ? L.noAccount : L.haveAccount}{' '}
                <button type="button" className="text-primary font-semibold hover:underline" onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>
                  {mode === 'signin' ? L.signUp : L.signIn}
                </button>
              </p>
              {!supabaseConfigured && <p className={`text-center font-telemetry-sm text-telemetry-sm text-tertiary ${uf}`}>{L.localNote}</p>}
            </form>
          </section>

          {/* Demo shortcut for the selected role */}
          <section className="w-full mt-space-md bg-surface-container/60 rounded-lg p-space-sm">
            <p className={`font-body-sm text-body-sm font-bold uppercase tracking-widest text-on-surface-variant mb-space-xs ${uf}`}>{L.demoTitle}</p>
            <div className="flex flex-wrap gap-space-xs">
              {ROLES.map((r) => (
                <button key={r.role} type="button" onClick={() => demo(r.role)} disabled={busy}
                  className={`flex items-center gap-1.5 px-space-sm py-2 rounded-lg bg-secondary-container/40 text-secondary hover:bg-secondary-container/60 font-body-sm text-body-sm font-semibold transition-all ${uf}`}>
                  <span className="material-symbols-outlined text-[18px]">{r.icon}</span>
                  {ur ? r.ur : r.en}
                </button>
              ))}
            </div>
          </section>

          <footer className="mt-space-md text-center">
            <p className={`font-body-sm text-body-sm text-on-surface-variant/75 ${uf}`}>{t('syntheticDataFull', language)}</p>
          </footer>
        </div>
      </main>
    </div>
  )
}

function Field({ label, hint, cls, children }: { label: string; hint?: string; cls?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1 text-left rtl:text-right">
      <span className={`font-body-sm text-body-sm font-semibold text-on-surface ${cls || ''}`}>{label}</span>
      {children}
      {hint && <span className={`font-telemetry-sm text-telemetry-sm text-on-surface-variant ${cls || ''}`}>{hint}</span>}
    </label>
  )
}
