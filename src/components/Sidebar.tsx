import { Link, useLocation } from 'react-router-dom'
import { useStore, type Role } from '../store'
import { t } from '../i18n'

interface NavItem {
  key: string
  path: string
  icon: string
  badge?: string
}

const ROLE_NAV: Record<Role, NavItem[]> = {
  coordinator: [
    { key: 'command', path: '/command', icon: 'grid_view' },
    { key: 'dispatch', path: '/dispatch', icon: 'local_shipping', badge: '14' },
    { key: 'simulate', path: '/simulate', icon: 'water_damage' },
    { key: 'quality', path: '/quality/data', icon: 'verified_user' },
    { key: 'intake', path: '/intake', icon: 'record_voice_over', badge: 'LIVE' },
    { key: 'residentSim', path: '/resident-sim', icon: 'contact_emergency' },
    { key: 'communityShelters', path: '/community-shelters', icon: 'volunteer_activism' },
    { key: 'adminDemo', path: '/admin', icon: 'tune' },
  ],
  volunteer: [],
  registrar: [],
  shelter: [],
  viewer: [
    { key: 'command', path: '/command', icon: 'grid_view' },
    { key: 'qualityAudit', path: '/quality/audit', icon: 'verified_user' },
    { key: 'communityShelters', path: '/community-shelters', icon: 'volunteer_activism' },
  ],
}

export default function Sidebar() {
  const user = useStore((s) => s.user)
  const language = useStore((s) => s.language)
  const loc = useLocation()
  if (!user) return null
  const items = ROLE_NAV[user.role] || []

  return (
    <aside className="hidden lg:flex fixed left-0 rtl:left-auto rtl:right-0 top-0 h-full w-64 bg-surface-container-low/95 backdrop-blur-2xl z-50 flex-col justify-between py-space-md shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col gap-space-md">
        <div className="px-space-md flex items-center gap-space-sm">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(242,169,59,0.7)]" />
          <span className="font-telemetry-sm text-telemetry-sm text-primary uppercase tracking-widest">{t('opsControl', language)}</span>
        </div>
        <nav className="flex flex-col gap-space-xs px-space-sm">
          {items.map((item) => {
            const active = loc.pathname === item.path || (item.path === '/quality/data' && loc.pathname.startsWith('/quality'))
            return (
              <Link key={item.path} to={item.path}
                className={`flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${active
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-[0_0_16px_rgba(242,169,59,0.35)]'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-headline-sm">{item.icon}</span>
                  <span className={`font-headline-sm text-body-sm font-semibold ${language === 'ur' ? 'font-urdu-body' : ''}`}>
                    {t(item.key as any, language)}
                  </span>
                </div>
                {item.badge && <span className="font-telemetry-sm text-telemetry-sm text-tertiary-container">{item.badge}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="px-space-md flex flex-col gap-space-xs">
        <div className="p-space-sm rounded-lg bg-surface-container-high/60 backdrop-blur-md flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">{t('telemetry', language)}</span>
            <span className="font-telemetry-sm text-telemetry-sm text-secondary">42ms</span>
          </div>
          <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
            <div className="bg-secondary h-full w-4/5 rounded-full" />
          </div>
          <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant/80">Karachi South Node #04</span>
        </div>
      </div>
    </aside>
  )
}
