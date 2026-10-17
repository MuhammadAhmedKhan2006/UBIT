import { useStore } from '../store'
import CaseDrawerPage from '../pages/CaseDrawerPage'

export default function CaseDrawer() {
  const show = useStore((s) => s.showCaseDrawer)
  if (!show) return null
  return <CaseDrawerPage />
}
