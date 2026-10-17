import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore, type Role } from '../store'
import { t } from '../i18n'
import { signIn } from '../lib/db'
import { hydrateFromSupabase } from '../lib/session'
import { supabaseConfigured } from '../lib/supabase'

interface RoleCard {
  name: string
  nameUrdu: string
  email: string
  role: Role
  roleLabel: string
  icon: string
  iconColor: string
  badge: string
  badgeColor: string
  desc: string
  fullSpan?: boolean
}

const ROLE_CARDS: RoleCard[] = [
  { name: 'Zara Khan', nameUrdu: 'زارا خان', email: 'zara.khan@emergency.sindh.gov.pk', role: 'coordinator', roleLabel: 'Coordinator / کوآرڈینیٹر', icon: 'tune', iconColor: 'text-primary', badge: 'TRIAGE', badgeColor: 'text-secondary bg-secondary/10', desc: 'Human-in-the-loop triage, approve priority evacuations & allocate rescue teams.' },
  { name: 'Bilal Ahmed', nameUrdu: 'بلال احمد', email: 'bilal.field@volunteer.sindh.org', role: 'volunteer', roleLabel: 'Field Volunteer / فیلڈ رضاکار', icon: 'directions_boat', iconColor: 'text-secondary', badge: 'PWA SYNC', badgeColor: 'text-primary bg-primary/10', desc: 'Offline-capable mobile tasks, offline cache sync, resident buddy checks.' },
  { name: 'Amina Baloch', nameUrdu: 'آمنہ بلوچ', email: 'amina.b@community.sindh.gov.pk', role: 'registrar', roleLabel: 'Registrar / رجسٹرار', icon: 'app_registration', iconColor: 'text-primary', badge: 'INTAKE', badgeColor: 'text-secondary bg-secondary/10', desc: 'Door-to-door vulnerability registry, intake high-risk citizens & pregnant women.' },
  { name: 'Tariq Mansoor', nameUrdu: 'طارق منصور', email: 'tariq.shelter@relief.sindh.gov.pk', role: 'shelter', roleLabel: 'Shelter Manager / شیلٹر مینیجر', icon: 'night_shelter', iconColor: 'text-secondary', badge: 'SUPPLIES', badgeColor: 'text-primary bg-primary/10', desc: 'Real-time bed, ration, solar power and medical supply capacity tracking.' },
  { name: 'Dr. Farooq Malik', nameUrdu: 'ڈاکٹر فاروق ملک', email: 'f.malik@audit.un-relief.org', role: 'viewer', roleLabel: 'Viewer / غیر جانبدار مبصر', icon: 'visibility', iconColor: 'text-on-surface', badge: 'READ-ONLY AUDIT', badgeColor: 'text-on-surface-variant bg-surface-bright', desc: 'Read-only audit trail, unbiased response oversight and ethical metrics.', fullSpan: true },
]

const ROLE_HOMES: Record<Role, string> = {
  coordinator: '/command',
  volunteer: '/field/tasks',
  registrar: '/register',
  shelter: '/shelter',
  viewer: '/quality/audit',
}

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, language, setLanguage, showToast } = useStore()
  const [email, setEmail] = useState('zara.khan@emergency.sindh.gov.pk')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [authenticating, setAuthenticating] = useState(false)
  const [authUser, setAuthUser] = useState<string | null>(null)

  const finishLocal = (role: Role, name: string, nameUrdu: string, emailAddr: string, roleLabel: string) => {
    login({ name, nameUrdu, email: emailAddr, phone: emailAddr, role, roleLabel })
    showToast(t('accessGranted', 'en'), t('accessGranted', 'ur'), 'success')
    setAuthenticating(false)
    setAuthUser(null)
    navigate(ROLE_HOMES[role])
  }

  const doLogin = async (role: Role, name: string, nameUrdu: string, emailAddr: string, roleLabel: string, pwd: string) => {
    setAuthenticating(true)
    setAuthUser(name)
    if (supabaseConfigured && pwd.trim()) {
      const { error } = await signIn(emailAddr, pwd.trim())
      if (!error) {
        await hydrateFromSupabase()
        const live = useStore.getState().user
        showToast(t('accessGranted', 'en'), t('accessGranted', 'ur'), 'success')
        setAuthenticating(false)
        setAuthUser(null)
        navigate(ROLE_HOMES[live?.role || role])
        return
      }
      if (import.meta.env.VITE_ENABLE_DEMO_LOGINS !== 'true') {
        showToast(error.message, 'لاگ ان ناکام', 'error')
        setAuthenticating(false)
        setAuthUser(null)
        return
      }
      showToast('Auth failed — demo session. Use the Dashboard password for live RLS.', 'ڈیمو سیشن', 'warning')
    }
    finishLocal(role, name, nameUrdu, emailAddr, roleLabel)
    void hydrateFromSupabase()
  }

  const handleFormLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const card = ROLE_CARDS.find((c) => c.email === email) || ROLE_CARDS[0]
    void doLogin(card.role, card.name, card.nameUrdu, card.email, card.roleLabel, password)
  }

  const selectRole = (card: RoleCard) => {
    setEmail(card.email)
    showToast(`${card.roleLabel} loaded for ${card.name}`, `${card.roleLabel} - ${card.name}`, 'info')
    void doLogin(card.role, card.name, card.nameUrdu, card.email, card.roleLabel, password)
  }

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex items-center justify-center p-space-md antialiased">
      <main className="w-full max-w-xl bg-surface-container-low/90 backdrop-blur-2xl rounded-xl p-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col w-full relative">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-container/15 rounded-full blur-[110px] pointer-events-none -z-10" />
          <div className="absolute top-80 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[90px] pointer-events-none -z-10" />

          {/* Operational Status Bar */}
          <header className="w-full mb-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest/80 rounded-lg p-space-sm shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-space-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                </span>
                <span className={`font-telemetry-sm text-telemetry-sm text-secondary tracking-widest uppercase ${language === 'ur' ? 'font-urdu-body' : ''}`}>{t('sindhCommand', language)}</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <a className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container/40 text-error hover:bg-error-container/60 transition-colors" href="tel:1129">
                  <span className="material-symbols-outlined text-[16px]">emergency</span>
                  <span className="font-telemetry-sm text-telemetry-sm font-bold">1129 PDMA SINDH</span>
                </a>
                <button onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')} className="flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px] text-primary">translate</span>
                  <span className={`font-body-sm text-body-sm font-semibold ${language === 'ur' ? 'font-urdu-body' : ''}`}>{t(language === 'en' ? 'urdu' : 'english', language)}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Login Card */}
          <section className="w-full bg-surface-container/75 backdrop-blur-xl rounded-xl p-space-md sm:p-space-lg shadow-[0_20px_50px_rgba(5,16,20,0.85)] relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" />
            <div className="flex flex-col items-center text-center">
              <div className="relative group cursor-pointer mb-space-sm">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center bg-gradient-to-b from-surface-container-high to-surface-container-lowest shadow-[0_0_35px_rgba(242,169,59,0.35)] relative overflow-hidden">
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 text-primary-container drop-shadow-[0_0_12px_rgba(242,169,59,0.7)]" fill="none" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" opacity="0.45" r="44" stroke="#3FB8A5" strokeWidth="2.5" />
                    <path d="M48 14 H52 V22 H48 Z" fill="#F2A93B" />
                    <circle cx="50" cy="18" r="6" stroke="#F2A93B" strokeWidth="2" />
                    <path d="M36 28 C42 24 58 24 64 28 L60 36 C54 33 46 33 40 36 Z" fill="#3FB8A5" opacity="0.8" />
                    <path d="M38 38 C32 50 32 64 36 72 L64 72 C68 64 68 50 62 38 Z" fill="rgba(22,38,43,0.6)" stroke="#3FB8A5" strokeWidth="2" />
                    <path d="M50 42 C44 54 41 62 45 68 C48 72 52 72 55 68 C59 62 56 54 50 42 Z" fill="#F2A93B" />
                    <circle cx="50" cy="56" fill="#FFF3D4" r="3.5" />
                    <ellipse cx="50" cy="63" fill="#FFF3D4" rx="4.5" ry="3" />
                    <path d="M32 72 L68 72 L65 78 L35 78 Z" fill="#3FB8A5" />
                  </svg>
                </div>
              </div>
              <h1 className={`font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] ${language === 'ur' ? 'font-urdu-headline' : ''}`}>{t('appName', language)}</h1>
              <div className="relative mt-1 mb-2">
                <div className="w-32 h-[2px] mx-auto bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-60" />
              </div>
              <p className={`font-body-sm text-body-sm text-on-surface-variant max-w-md ${language === 'ur' ? 'font-urdu-body' : ''}`}>
                {language === 'en' ? 'Sindh Emergency Flood & Heatwave Response System' : t('sindhEmergency', 'ur')}
              </p>
            </div>

            {/* Form */}
            <form className="mt-space-lg flex flex-col gap-space-md" onSubmit={handleFormLogin}>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <div className="flex items-center justify-between">
                  <label className={`font-body-sm text-body-sm font-semibold text-on-surface flex items-center gap-1.5 ${language === 'ur' ? 'font-urdu-body' : ''}`} htmlFor="officialId">
                    <span className="material-symbols-outlined text-[16px] text-primary">badge</span>
                    <span>{t('officialId', language)}</span>
                  </label>
                  <span className="font-telemetry-sm text-telemetry-sm text-secondary">{t('secureSSO', language)}</span>
                </div>
                <div className="relative">
                  <input className="w-full bg-surface-container-lowest/80 text-on-surface rounded-lg p-3.5 pl-10 rtl:pl-3.5 rtl:pr-10 font-telemetry-md text-telemetry-md placeholder-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary-container focus:bg-surface-container-low transition-all" id="officialId" placeholder="name@emergency.sindh.gov.pk" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <span className="material-symbols-outlined absolute left-3 rtl:left-auto rtl:right-3 top-3.5 text-on-surface-variant/60 pointer-events-none">fingerprint</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <div className="flex items-center justify-between">
                  <label className={`font-body-sm text-body-sm font-semibold text-on-surface flex items-center gap-1.5 ${language === 'ur' ? 'font-urdu-body' : ''}`} htmlFor="authToken">
                    <span className="material-symbols-outlined text-[16px] text-primary">key</span>
                    <span>{t('authToken', language)}</span>
                  </label>
                  <button className={`font-telemetry-sm text-telemetry-sm text-primary hover:underline ${language === 'ur' ? 'font-urdu-body text-xs' : ''}`} type="button" onClick={() => showToast(t('contactAdmin', 'en'), t('contactAdmin', 'ur'), 'info')}>{t('help', language)}</button>
                </div>
                <div className="relative">
                  <input className="w-full bg-surface-container-lowest/80 text-on-surface rounded-lg p-3.5 pl-10 rtl:pl-3.5 rtl:pr-10 font-telemetry-md text-telemetry-md placeholder-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary-container focus:bg-surface-container-low transition-all" id="authToken" required type={showPwd ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password from Supabase Auth" />
                  <span className="material-symbols-outlined absolute left-3 rtl:left-auto rtl:right-3 top-3.5 text-on-surface-variant/60 pointer-events-none">shield_lock</span>
                  <button className="absolute right-3 rtl:right-auto rtl:left-3 top-3.5 text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => setShowPwd(!showPwd)} type="button">
                    <span className="material-symbols-outlined text-[20px]">{showPwd ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between py-1">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input checked readOnly className="w-4 h-4 rounded bg-surface-container-high border-none text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                  <span className={`font-body-sm text-body-sm text-on-surface-variant ${language === 'ur' ? 'font-urdu-body' : ''}`}>{t('cacheMapsOffline', language)}</span>
                </label>
              </div>
              <button className={`w-full py-3.5 px-space-md rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(242,169,59,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] hover:brightness-110 active:translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed ${language === 'ur' ? 'font-urdu-headline' : ''}`} type="submit" disabled={authenticating}>
                <span className="material-symbols-outlined font-bold">{authenticating ? <span className="animate-spin">sync</span> : 'radar'}</span>
                <span>{t(authenticating ? 'authenticating' : 'signInCommand', language)}</span>
              </button>
            </form>
          </section>

          {/* Role Cards */}
          <section className="w-full mt-space-lg flex flex-col gap-space-sm">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
                <h3 className={`font-body-sm text-body-sm uppercase tracking-widest text-on-surface-variant font-bold ${language === 'ur' ? 'font-urdu-body' : ''}`}>{t('demoRoles', language)}</h3>
              </div>
              <span className="font-telemetry-sm text-telemetry-sm text-primary">{t('selectAutorun', language)}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
              {ROLE_CARDS.map((card) => (
                <button key={card.email} className={`${card.fullSpan ? 'sm:col-span-2' : ''} group text-left rtl:text-right p-3.5 rounded-lg bg-surface-container/60 hover:bg-surface-container-high transition-all flex flex-col gap-1.5 shadow-sm active:scale-[0.99]`} onClick={() => selectRole(card)} type="button" disabled={authenticating}>
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 font-headline-sm text-[16px] font-bold ${language === 'ur' ? 'font-urdu-headline' : ''}`}>
                      <span className={`material-symbols-outlined text-[18px] ${card.iconColor} group-hover:rotate-12 transition-transform`}>{card.icon}</span>
                      <span className={card.iconColor}>{card.roleLabel.split(' / ')[language === 'en' ? 0 : 1]}</span>
                    </div>
                    <span className={`font-telemetry-sm text-telemetry-sm ${card.badgeColor} px-2 py-0.5 rounded-full`}>{card.badge}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">{card.desc}</p>
                  {authenticating && authUser === card.name && (
                    <p className={`font-telemetry-sm text-telemetry-sm text-primary animate-pulse ${language === 'ur' ? 'font-urdu-body' : ''}`}>{t('loggingIn', language)}</p>
                  )}
                </button>
              ))}
            </div>
          </section>

          <footer className="mt-space-lg pt-space-md text-center">
            <p className={`font-body-sm text-body-sm text-on-surface-variant/75 flex items-center justify-center gap-1.5 leading-relaxed ${language === 'ur' ? 'font-urdu-body' : ''}`}>
              <span>{t('syntheticDataFull', language)}</span>
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
