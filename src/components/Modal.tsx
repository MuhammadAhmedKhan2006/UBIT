import { useEffect } from 'react'
import { useStore } from '../store'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  titleUrdu?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, titleUrdu, children, footer }: ModalProps) {
  const language = useStore((s) => s.language)
  
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])
  if (!isOpen) return null

  const displayTitle = language === 'ur' && titleUrdu ? titleUrdu : title

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md" onClick={onClose}>
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-surface-container-low/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-surface-variant/20" onClick={(e) => e.stopPropagation()}>
        <div className="h-1 w-full bg-gradient-to-r from-primary-container via-primary-container/50 to-secondary/40" />
        <div className="flex items-center justify-between p-space-md">
          <div>
            <h3 className={`font-headline-sm text-headline-sm text-on-surface font-bold ${language === 'ur' ? 'font-urdu-headline' : ''}`}>{displayTitle}</h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="px-space-md pb-space-md">{children}</div>
        {footer && <div className="px-space-md pb-space-md flex justify-end gap-space-sm">{footer}</div>}
      </div>
    </div>
  )
}
