import { Link, useLocation } from 'react-router-dom'
import { useStore, type Role } from '../store'

interface NavItem {
  label: string
  urdu: string
  path: string
  icon: string
  badge?: string
}

const ROLE_NAV: Record<Role, NavItem[]> = {
  coordinator: [
    { label: 'Command', urdu: 'کمانڈ سینٹر', path: '/command', icon: 'grid_view' },
    { label: 'Dispatch', urdu: 'روانگی', path: '/dispatch', icon: 'local_shipping', badge: '14' },
    { label: 'Simulate', urdu: 'نقلی مشق', path: '/simulate', icon: 'water_damage' },
    { label: 'Quality', urdu: 'معیار جائزہ', path: '/quality/data', icon: 'verified_user' },
    { label: 'Intake', urdu: 'اندازج', path: '/intake', icon: 'record_voice_over', badge: 'LIVE' },
    { label: 'Resident Sim', urdu: 'شہری سمولیشن', path: '/resident-sim', icon: 'contact_emergency' },
  ],
  volunteer: [],
  registrar: [],
  shelter: [],
  viewer: [
    { label: 'Command', urdu: 'کمانڈ سینٹر', path: '/command', icon: 'grid_view' },
    { label: 'Quality Audit', urdu: 'آڈٹ', path: '/quality/audit', icon: 'verified_user' },
  ],
}

export default function Sidebar() {
  const user = useStore((s) => s.user)
  const loc = useLocation()
  if (!user) return null
  const items = ROLE_NAV[user.role] || []

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-surface-container-low/95 backdrop-blur-2xl z-50 flex-col justify-between py-space-md shadow-[0_1px_8px_rgba(0,0,0,0.4)] rtl:left-auto rtl:right-0">
      <div className="flex flex-col gap-space-md">
        <div className="px-space-md flex items-center gap-space-sm">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(242,169,59,0.7)]" />
          <span className="font-telemetry-sm text-telemetry-sm text-primary uppercase tracking-widest">Ops Control Desk</span>
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
                  <div className="flex flex-col leading-tight">
                    <span className="font-headline-sm text-body-sm font-semibold">{item.label}</span>
                    <span className="font-urdu-body text-telemetry-sm text-on-surface-variant">{item.urdu}</span>
                  </div>
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
            <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">Telemetry Uplink</span>
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
