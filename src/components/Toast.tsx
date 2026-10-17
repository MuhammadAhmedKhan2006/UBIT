import { useStore } from '../store'

export default function Toast() {
  const toast = useStore((s) => s.toast)
  const language = useStore((s) => s.language)
  if (!toast.visible) return null

  const bg =
    toast.type === 'error' ? 'bg-error text-on-error' :
    toast.type === 'warning' ? 'bg-primary-container text-on-primary-container' :
    toast.type === 'success' ? 'bg-secondary-container text-on-secondary-container' :
    'bg-surface-container-highest text-on-surface'
  const icon =
    toast.type === 'error' ? 'error' :
    toast.type === 'warning' ? 'warning' :
    toast.type === 'success' ? 'check_circle' :
    'info'

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] ${bg} px-4 py-2.5 rounded-lg shadow-2xl flex items-center gap-2 backdrop-blur-xl transition-all animate-fade-in`}>
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
      <span className="font-body-sm text-body-sm">
        {language === 'ur' && toast.messageUrdu ? toast.messageUrdu : toast.message}
      </span>
    </div>
  )
}
