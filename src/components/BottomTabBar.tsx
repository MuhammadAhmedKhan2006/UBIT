import { Link, useLocation } from 'react-router-dom'
import { useStore, type Role } from '../store'

interface TabItem { label: string; urdu: string; path: string; icon: string; badge?: number }

const ROLE_TABS: Record<Role, TabItem[]> = {
  coordinator: [],
  volunteer: [
    { label: 'Tasks', urdu: 'ٹاسکس', path: '/field/tasks', icon: 'checklist' },
    { label: 'Detail', urdu: 'تفصیل', path: '/field/task/PK-KHI-7821', icon: 'near_me' },
    { label: 'Buddy', urdu: 'بڈی چیک ان', path: '/field/buddy', icon: 'volunteer_activism' },
    { label: 'Sync', urdu: 'سنک', path: '/field/sync', icon: 'sync', badge: 3 },
  ],
  registrar: [
    { label: 'Register', urdu: 'اندراج', path: '/register', icon: 'app_registration' },
  ],
  shelter: [
    { label: 'Shelter', urdu: 'پناہ گاہ', path: '/shelter', icon: 'night_shelter' },
  ],
  viewer: [],
}

export default function BottomTabBar() {
  const user = useStore((s) => s.user)
  const loc = useLocation()
  if (!user) return null
  const items = ROLE_TABS[user.role] || []
  if (items.length === 0) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
      <div className="h-20 px-space-xs flex items-center justify-around">
        {items.map((item) => {
          const active = loc.pathname === item.path || (item.path === '/field/tasks' && loc.pathname.startsWith('/field/task') === false && loc.pathname === '/field/tasks')
          return (
            <Link key={item.label} to={item.path}
              className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl transition-all ${active ? 'text-primary font-bold scale-105' : 'text-on-surface-variant'}`}>
              <div className="relative">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                {item.badge && (
                  <span className="absolute -top-1 -right-2.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-container text-on-primary font-telemetry-sm text-[10px] font-bold flex items-center justify-center shadow-[0_0_8px_rgba(242,169,59,0.6)]">{item.badge}</span>
                )}
              </div>
              <span className="font-body-sm text-body-sm mt-0.5 leading-none">{item.label}</span>
              <span className="font-urdu-body text-[11px] opacity-80 leading-tight">{item.urdu}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
