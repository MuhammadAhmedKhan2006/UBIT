import { useState, useEffect, useRef } from 'react'
import { useStore } from '../store'
import Modal from './Modal'

function fmtCountdown(sec: number): string {
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const s = sec % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function TopBar() {
  const { language, setLanguage, theme, toggleTheme, user, logout, isOnline, showToast, hazardCountdown, tickCountdown, notifications, markAllNotificationsRead, updateUser } = useStore()
  const [showProfile, setShowProfile] = useState(false)
  const [showNotifs, setShowNotifs] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [editName, setEditName] = useState(user?.name || '')
  const [editPhone, setEditPhone] = useState(user?.phone || '')
  const [editRoleLabel, setEditRoleLabel] = useState(user?.roleLabel || '')
  const notifRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => tickCountdown(), 1000)
    return () => clearInterval(timer)
  }, [tickCountdown])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setShowNotifs(false)
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setShowProfile(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length
  const isMobile = user?.role === 'volunteer' || user?.role === 'registrar' || user?.role === 'shelter'

  const handleSave = () => {
    updateUser({ name: editName, phone: editPhone, roleLabel: editRoleLabel })
    showToast('Profile updated', 'پروفائل اپڈیٹ ہو گئی', 'success')
    setShowEdit(false)
  }

  // Mobile header (taller, different layout)
  if (isMobile) {
    return (
      <>
        <header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
          <aside className="h-6 px-margin flex items-center justify-between bg-surface-container-high/90 text-on-surface-variant font-telemetry-sm text-telemetry-sm select-none">
            <div className="flex items-center gap-space-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
              <span className="tracking-wider uppercase">Synthetic demo data</span>
              <span className="opacity-40">/</span>
              <span className="font-urdu-body text-[11px] leading-tight">مصنوعی ڈیمو ڈیٹا</span>
            </div>
            <span className="font-telemetry-sm text-[11px] text-secondary">MONSOON-SYS 2.4</span>
          </aside>
          <div className="h-24 px-margin flex flex-col justify-center gap-1.5">
            <div className="flex items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-low shrink-0 shadow-[0_0_14px_rgba(242,169,59,0.25)]">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" opacity="0.45" r="44" stroke="#3FB8A5" strokeWidth="2.5" />
                    <path d="M50 42 C44 54 41 62 45 68 C48 72 52 72 55 68 C59 62 56 54 50 42 Z" fill="#F2A93B" />
                    <circle cx="50" cy="56" fill="#FFF3D4" r="3.5" />
                  </svg>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight tracking-tight">Nobody Left Behind</h1>
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <span className="font-body-sm text-body-sm text-primary font-medium truncate">{user?.roleLabel.split(' / ')[0]}</span>
                    <span className="opacity-40 text-xs">•</span>
                    <span className="font-urdu-body text-xs text-primary truncate">{user?.roleLabel.split(' / ')[1]}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-space-xs shrink-0">
                <button onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')} aria-label="Switch Language" className="min-w-[44px] min-h-[44px] px-2 py-1 flex items-center justify-center rounded-lg bg-surface-container/70 text-on-surface font-telemetry-sm text-telemetry-sm active:scale-95 transition-transform" type="button">
                  <span className="text-primary font-bold">EN</span>
                  <span className="opacity-30 mx-1">|</span>
                  <span className="font-urdu-body text-xs opacity-80">اردو</span>
                </button>
                <button onClick={toggleTheme} className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px]">{theme === 'dark' ? 'dark_mode' : 'light_mode'}</span>
                </button>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(242,169,59,0.35)] shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low/90">
                <span className="material-symbols-outlined text-secondary text-[14px]">water_drop</span>
                <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">Water in</span>
                <span className="font-telemetry-sm text-telemetry-sm text-primary font-bold tracking-tight">{fmtCountdown(hazardCountdown)}</span>
              </div>
              <button onClick={() => useStore.getState().toggleOnline()} className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low/90">
                <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-secondary-container animate-pulse' : 'bg-error'}`} />
                <span className="font-telemetry-sm text-[11px] text-secondary font-medium">{isOnline ? 'Online' : 'Offline'}</span>
                <span className="opacity-40 text-[10px]">/</span>
                <span className="font-urdu-body text-[11px] text-secondary leading-none">{isOnline ? 'آن لائن' : 'آف لائن'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Edit Profile Modal */}
        <Modal isOpen={showEdit} onClose={() => setShowEdit(false)} title="Edit Profile" titleUrdu="پروفائل میں ترمیم">
          <div className="flex flex-col gap-space-md">
            <div>
              <label className="block font-body-sm text-body-sm font-semibold text-on-surface mb-space-xs">Name / نام</label>
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full px-space-sm py-2 bg-surface-container rounded-lg text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container" />
            </div>
            <div>
              <label className="block font-body-sm text-body-sm font-semibold text-on-surface mb-space-xs">Phone / فون</label>
              <input type="text" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} className="w-full px-space-sm py-2 bg-surface-container rounded-lg text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container" />
            </div>
            <div>
              <label className="block font-body-sm text-body-sm font-semibold text-on-surface mb-space-xs">Role Label / کردار</label>
              <input type="text" value={editRoleLabel} onChange={(e) => setEditRoleLabel(e.target.value)} className="w-full px-space-sm py-2 bg-surface-container rounded-lg text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container" />
            </div>
            <div className="flex justify-end gap-space-sm mt-space-md">
              <button onClick={() => setShowEdit(false)} className="px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-sm text-body-sm font-semibold transition-all" type="button">Cancel / منسوخ</button>
              <button onClick={handleSave} className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-body-sm text-body-sm font-semibold transition-all" type="button">Save / محفوظ کریں</button>
            </div>
          </div>
        </Modal>
      </>
    )
  }

  // Desktop header
  return (
    <>
      <header className="fixed top-0 left-0 lg:left-64 right-0 z-40 bg-surface-container-low/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.3)] rtl:left-0 rtl:right-auto rtl:lg:right-64">
        <div className="w-full px-space-md py-space-xs bg-surface-container-lowest/80 flex items-center justify-center gap-space-sm font-telemetry-sm text-telemetry-sm text-primary">
          <span className="material-symbols-outlined text-telemetry-md">bolt</span>
          <span className="tracking-wide">Synthetic demo data, weights are expert assumptions, not validated</span>
          <span className="text-outline-variant">|</span>
          <span className="font-urdu-body text-telemetry-sm">مصنوعی ڈیمو ڈیٹا، ماہرین کے فرضی تخمینے پر مبنی</span>
        </div>
        <div className="h-16 w-full px-space-lg flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-surface-container-high to-surface-container-lowest shadow-[0_0_35px_rgba(242,169,59,0.35)]">
                <svg className="w-5 h-5 text-primary-container" fill="none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" opacity="0.45" r="44" stroke="#3FB8A5" strokeWidth="2.5" />
                  <path d="M50 42 C44 54 41 62 45 68 C48 72 52 72 55 68 C59 62 56 54 50 42 Z" fill="#F2A93B" />
                  <circle cx="50" cy="56" fill="#FFF3D4" r="3.5" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">Nobody Left Behind</span>
                <span className="font-urdu-headline text-body-sm text-primary-container font-semibold -mt-1">کوئی پیچھے نہ رہے</span>
              </div>
            </div>
            {user && (
              <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary font-headline-sm text-telemetry-sm">
                <span className="material-symbols-outlined text-telemetry-md">shield_person</span>
                <span>{user.roleLabel.split(' / ')[0]}</span>
                <span className="text-secondary/60">/</span>
                <span className="font-urdu-body text-telemetry-sm">{user.roleLabel.split(' / ')[1]}</span>
              </div>
            )}
            <div className="flex items-center gap-space-sm px-space-sm py-1 rounded-full bg-error-container/25 text-error shadow-[0_0_12px_rgba(229,83,61,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-error" />
              </span>
              <span className="font-telemetry-sm text-telemetry-sm font-semibold tracking-wide">⚠️ Water arrives in {fmtCountdown(hazardCountdown)}</span>
              <span className="text-error/60">/</span>
              <span className="font-urdu-body text-telemetry-sm text-error">پانی پہنچنے میں {fmtCountdown(hazardCountdown)}</span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <div className="flex items-center bg-surface-container rounded-lg p-0.5 text-on-surface-variant">
              <button onClick={() => setLanguage('en')} className={`px-space-xs py-0.5 rounded font-telemetry-sm text-telemetry-sm transition-colors ${language === 'en' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}>EN</button>
              <button onClick={() => setLanguage('ur')} className={`px-space-xs py-0.5 rounded font-urdu-body text-telemetry-sm transition-colors ${language === 'ur' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}>اردو</button>
            </div>
            <button onClick={toggleTheme} className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Toggle Theme" type="button">
              <span className="material-symbols-outlined text-headline-sm">{theme === 'dark' ? 'dark_mode' : 'light_mode'}</span>
            </button>
            <button onClick={() => useStore.getState().toggleOnline()} className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-telemetry-sm text-telemetry-sm transition-colors hover:bg-surface-container-high" type="button">
              <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-secondary' : 'bg-error animate-pulse'}`} />
              <span>{isOnline ? 'Online' : 'Offline'}</span>
              <span className="text-outline-variant">/</span>
              <span className="font-urdu-body text-telemetry-sm">{isOnline ? 'آن لائن' : 'آف لائن'}</span>
            </button>
            <div className="relative" ref={notifRef}>
              <button onClick={() => setShowNotifs(!showNotifs)} className="relative w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button">
                <span className="material-symbols-outlined text-headline-sm">notifications</span>
                {unreadCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-error text-on-error font-telemetry-sm text-telemetry-sm font-bold flex items-center justify-center">{unreadCount}</span>}
              </button>
              {showNotifs && (
                <div className="absolute right-0 top-full mt-1 w-80 bg-surface-container-low rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="flex items-center justify-between p-space-sm border-b border-surface-variant/30">
                    <span className="font-headline-sm text-body-sm font-bold text-on-surface">Notifications / اطلاع</span>
                    <button onClick={() => { markAllNotificationsRead(); showToast('All notifications marked read', 'تمام اطلاعات پڑھ گئے', 'success') }} className="font-telemetry-sm text-telemetry-sm text-primary hover:underline" type="button">Mark all read</button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className={`px-space-sm py-2 border-b border-surface-variant/20 ${n.read ? 'opacity-60' : ''}`}>
                        <div className="flex items-center gap-2">
                          {!n.read && <span className="w-2 h-2 rounded-full bg-error shrink-0" />}
                          <span className="font-body-sm text-body-sm text-on-surface">{n.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative" ref={profileRef}>
              <div className="flex items-center gap-space-sm pl-space-xs ml-space-xs cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
                <div className="flex flex-col text-right leading-tight hidden md:flex">
                  <span className="font-headline-sm text-body-sm font-semibold text-on-surface">{user?.name}</span>
                  <span className="font-urdu-body text-telemetry-sm text-on-surface-variant">{user?.nameUrdu}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold ring-1 ring-primary/40">
                  {user?.name.charAt(0)}
                </div>
              </div>
              {showProfile && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-surface-container-low rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="p-space-sm border-b border-surface-variant/30">
                    <p className="font-headline-sm text-body-sm font-bold text-on-surface">{user?.name}</p>
                    <p className="font-body-sm text-sm text-on-surface-variant">{user?.roleLabel}</p>
                    <p className="font-telemetry-sm text-telemetry-sm text-on-surface-variant mt-1">{user?.email}</p>
                  </div>
                  <button onClick={() => { setShowProfile(false); setEditName(user?.name || ''); setEditPhone(user?.phone || ''); setEditRoleLabel(user?.roleLabel || ''); setShowEdit(true) }} className="w-full px-space-sm py-2 text-left font-body-sm text-body-sm text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2" type="button">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                    Edit profile / پروفائل میں ترمیم
                  </button>
                  <button onClick={() => { setShowProfile(false); logout() }} className="w-full px-space-sm py-2 text-left font-body-sm text-body-sm text-error hover:bg-error-container/20 transition-colors flex items-center gap-2" type="button">
                    <span className="material-symbols-outlined text-[18px]">logout</span>
                    Logout / لاگ آؤٹ
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Edit Profile Modal */}
      <Modal isOpen={showEdit} onClose={() => setShowEdit(false)} title="Edit Profile" titleUrdu="پروفائل میں ترمیم">
        <div className="flex flex-col gap-space-md">
          <div>
            <label className="block font-body-sm text-body-sm font-semibold text-on-surface mb-space-xs">Name / نام</label>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full px-space-sm py-2 bg-surface-container rounded-lg text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container" />
          </div>
          <div>
            <label className="block font-body-sm text-body-sm font-semibold text-on-surface mb-space-xs">Phone / فون</label>
            <input type="text" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} className="w-full px-space-sm py-2 bg-surface-container rounded-lg text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container" />
          </div>
          <div>
            <label className="block font-body-sm text-body-sm font-semibold text-on-surface mb-space-xs">Role Label / کردار</label>
            <input type="text" value={editRoleLabel} onChange={(e) => setEditRoleLabel(e.target.value)} className="w-full px-space-sm py-2 bg-surface-container rounded-lg text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container" />
          </div>
          <div className="flex justify-end gap-space-sm mt-space-md">
            <button onClick={() => setShowEdit(false)} className="px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-sm text-body-sm font-semibold transition-all" type="button">Cancel / منسوخ</button>
            <button onClick={handleSave} className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-body-sm text-body-sm font-semibold transition-all" type="button">Save / محفوظ کریں</button>
          </div>
        </div>
      </Modal>
    </>
  )
}
