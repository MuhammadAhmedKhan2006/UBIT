import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useStore, type Role } from './store'
import LoginPage from './pages/LoginPage'
import CommandPage from './pages/CommandPage'
import CaseDrawerPage from './pages/CaseDrawerPage'
import DispatchPage from './pages/DispatchPage'
import SimulatePage from './pages/SimulatePage'
import IntakePage from './pages/IntakePage'
import FieldTasksPage from './pages/FieldTasksPage'
import TaskDetailPage from './pages/TaskDetailPage'
import BuddyPage from './pages/BuddyPage'
import SyncPage from './pages/SyncPage'
import ResidentSimPage from './pages/ResidentSimPage'
import RegisterPage from './pages/RegisterPage'
import ShelterPage from './pages/ShelterPage'
import QualityDataPage from './pages/QualityDataPage'
import QualityFairnessPage from './pages/QualityFairnessPage'
import QualityAuditPage from './pages/QualityAuditPage'
import Toast from './components/Toast'
import CaseDrawer from './components/CaseDrawer'
import Sidebar from './components/Sidebar'
import BottomTabBar from './components/BottomTabBar'
import TopBar from './components/TopBar'

const ROLE_HOMES: Record<Role, string> = {
  coordinator: '/command',
  volunteer: '/field/tasks',
  registrar: '/register',
  shelter: '/shelter',
  viewer: '/quality/audit',
}

const ROLE_ALLOWED: Record<Role, string[]> = {
  coordinator: ['/command', '/command/case/:id', '/dispatch', '/simulate', '/intake', '/resident-sim', '/quality/data', '/quality/fairness', '/quality/audit'],
  volunteer: ['/field/tasks', '/field/task/:id', '/field/buddy', '/field/sync'],
  registrar: ['/register'],
  shelter: ['/shelter'],
  viewer: ['/command', '/quality/audit', '/quality/data', '/quality/fairness'],
}

function isAllowed(role: Role, pathname: string): boolean {
  const patterns = ROLE_ALLOWED[role] || []
  return patterns.some((p) => {
    const re = new RegExp('^' + p.replace(':id', '[^/]+').replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace('\\*', '.*') + '$')
    return re.test(pathname)
  })
}

function Guard({ children }: { children: React.ReactNode }) {
  const user = useStore((s) => s.user)
  const loc = useLocation()
  if (!user) {
    if (loc.pathname !== '/' && loc.pathname !== '/login') return <Navigate to="/login" replace />
    return <>{children}</>
  }
  if (loc.pathname === '/' || loc.pathname === '/login') return <Navigate to={ROLE_HOMES[user.role]} replace />
  if (!isAllowed(user.role, loc.pathname)) return <Navigate to={ROLE_HOMES[user.role]} replace />
  return <>{children}</>
}

function Boot() {
  const language = useStore((s) => s.language)
  const theme = useStore((s) => s.theme)
  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ur' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', language === 'ur' ? 'ur' : 'en')
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [language, theme])
  return null
}

export default function App() {
  const user = useStore((s) => s.user)
  const isMobile = user?.role === 'volunteer' || user?.role === 'registrar' || user?.role === 'shelter'

  return (
    <BrowserRouter>
      <Boot />
      <div className="flex min-h-screen bg-background text-on-surface font-body-md">
        {user && !isMobile && <Sidebar />}
        <div className={`flex-1 flex flex-col min-h-screen ${!isMobile ? 'lg:pl-64' : ''}`}>
          {user && <TopBar />}
          <main className={`flex-1 w-full ${isMobile ? 'pt-30 pb-24' : 'pt-24 pb-16'} px-margin lg:px-space-lg`}>
            <Guard>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/command" element={<CommandPage />} />
                <Route path="/command/case/:id" element={<CaseDrawerPage />} />
                <Route path="/dispatch" element={<DispatchPage />} />
                <Route path="/simulate" element={<SimulatePage />} />
                <Route path="/intake" element={<IntakePage />} />
                <Route path="/field/tasks" element={<FieldTasksPage />} />
                <Route path="/field/task/:id" element={<TaskDetailPage />} />
                <Route path="/field/buddy" element={<BuddyPage />} />
                <Route path="/field/sync" element={<SyncPage />} />
                <Route path="/resident-sim" element={<ResidentSimPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/shelter" element={<ShelterPage />} />
                <Route path="/quality/data" element={<QualityDataPage />} />
                <Route path="/quality/fairness" element={<QualityFairnessPage />} />
                <Route path="/quality/audit" element={<QualityAuditPage />} />
                <Route path="*" element={<div className="flex items-center justify-center min-h-[60vh] flex-col gap-4"><span className="material-symbols-outlined text-[64px] text-primary">error_404</span><h1 className="font-headline-lg text-headline-lg text-on-surface">404 — Page Not Found</h1><p className="font-urdu-body text-primary">صفحہ نہیں ملا</p><a href="/" className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-bold">Go Home / مرکزی صفحہ</a></div>} />
              </Routes>
            </Guard>
          </main>
          {user && isMobile && <BottomTabBar />}
        </div>
      </div>
      <CaseDrawer />
      <Toast />
    </BrowserRouter>
  )
}
