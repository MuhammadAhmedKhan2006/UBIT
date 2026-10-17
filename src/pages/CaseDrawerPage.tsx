import { useState } from 'react'
import { useStore } from '../store'
import { t } from '../i18n'
import Modal from '../components/Modal'
import { describeRoute, sendMessage, withBackend } from '../lib/functions'

export default function CaseDrawerPage() {
  const { selectedCaseId, cases, closeCaseDrawer, dispatchCase, markCaseSafe, acceptCase, assignVolunteer, addAuditEntry, addTimeline, showToast, timeline } = useStore()
  const [showSafeConfirm, setShowSafeConfirm] = useState(false)
  const [showOverride, setShowOverride] = useState(false)
  const [overrideReason, setOverrideReason] = useState('')
  const [showAssign, setShowAssign] = useState(false)
  const [assignVol, setAssignVol] = useState('Bilal Ahmed')
  const [messageText, setMessageText] = useState('')
  const [showSendMsg, setShowSendMsg] = useState(false)

  const selectedCase = cases.find((c) => c.id === selectedCaseId) || cases[0]
  if (!selectedCase) return null

  const caseTimeline = timeline.filter((t) => t.caseId === selectedCase.id)
  const allCases = cases.filter((c) => c.status === 'pending' || c.status === 'accepted')
  const currentIdx = allCases.findIndex((c) => c.id === selectedCase.id)
  const prevCase = currentIdx > 0 ? allCases[currentIdx - 1] : null
  const nextCase = currentIdx < allCases.length - 1 ? allCases[currentIdx + 1] : null

  const handleDispatch = () => {
    dispatchCase(selectedCase.id, 'boat')
    showToast(t('rescueDispatched', 'en'), t('rescueDispatched', 'ur'), 'success')
    closeCaseDrawer()
  }
  const handleMarkSafe = () => {
    markCaseSafe(selectedCase.id)
    addAuditEntry({ action: 'Case marked as safe', user: useStore.getState().user?.name || 'Coordinator', caseId: selectedCase.id, type: 'safe' })
    showToast(t('caseMarkedSafe', 'en'), t('caseMarkedSafe', 'ur'), 'success')
    closeCaseDrawer()
    setShowSafeConfirm(false)
  }
  const handleOverride = () => {
    if (!overrideReason.trim()) return
    addAuditEntry({ action: `Override: ${overrideReason}`, user: useStore.getState().user?.name || 'Coordinator', caseId: selectedCase.id, reason: overrideReason, type: 'override' })
    showToast(t('caseOverridden', 'en'), t('caseOverridden', 'ur'), 'warning')
    setShowOverride(false)
    setOverrideReason('')
    closeCaseDrawer()
  }
  const handleAccept = () => {
    acceptCase(selectedCase.id)
    showToast(t('recommendationAccepted', 'en'), t('recommendationAccepted', 'ur'), 'success')
  }
  const handleAssign = () => {
    assignVolunteer(selectedCase.id)
    showToast(`${t('volunteerAssigned', 'en')} ${assignVol}`, `${t('volunteerAssigned', 'ur')} ${assignVol}`, 'success')
    setShowAssign(false)
  }
  const handleSendMessage = () => {
    if (!messageText.trim()) return
    const text = messageText.trim()
    const sent = withBackend(() => sendMessage(selectedCase.id, 'custom', { text }), (r) => {
      showToast(`Sent via ${describeRoute(r as never) || 'router'}`, t('messageSent', 'ur'), 'success')
    })
    if (!sent) {
      addTimeline(selectedCase.id, `Message: "${text}"`)
      showToast(t('messageSent', 'en'), t('messageSent', 'ur'), 'success')
    }
    setMessageText('')
    setShowSendMsg(false)
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-surface-container-lowest/60 backdrop-blur-sm" onClick={closeCaseDrawer} />
      <div className="fixed top-16 bottom-0 right-0 w-full max-w-[940px] min-w-[320px] z-50 flex flex-col bg-surface-container-low/95 backdrop-blur-2xl shadow-[-16px_0_40px_rgba(0,0,0,0.8)] overflow-hidden rtl:right-auto rtl:left-0">
        <div className="h-1 w-full bg-gradient-to-r from-error/60 via-primary-container to-secondary/40" />

        {/* Header */}
        <div className="px-space-lg py-space-md bg-surface-container-lowest/80 flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <span className="font-telemetry-lg text-telemetry-lg text-primary tracking-tight font-bold">#{selectedCase.id}</span>
              <div className={`flex items-center gap-space-xs px-3 py-1 rounded-full ${selectedCase.tier === 1 ? 'bg-error-container/40 text-error shadow-[0_0_16px_rgba(229,83,61,0.35)]' : 'bg-primary-container/30 text-primary'}`}>
                <span className={`w-2 h-2 rounded-full ${selectedCase.tier === 1 ? 'bg-error animate-ping' : 'bg-primary-container'}`} />
                <span className="font-telemetry-sm text-telemetry-sm font-bold tracking-wide">TIER {selectedCase.tier} {selectedCase.tier === 1 ? 'CRITICAL' : 'URGENT'}</span>
                <span className="text-error/60">/</span>
                <span className="font-urdu-body text-telemetry-sm font-semibold">{selectedCase.tier === 1 ? 'پہلی ترجیح - فوری جان بچاؤ' : 'دوسری ترجیح'}</span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs">
              <button onClick={() => prevCase && useStore.getState().openCaseDrawer(prevCase.id)} disabled={!prevCase} className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors disabled:opacity-30" title="Previous Case" type="button">
                <span className="material-symbols-outlined text-headline-sm">chevron_left</span>
              </button>
              <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant px-1">{currentIdx + 1} / {allCases.length}</span>
              <button onClick={() => nextCase && useStore.getState().openCaseDrawer(nextCase.id)} disabled={!nextCase} className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors disabled:opacity-30" title="Next Case" type="button">
                <span className="material-symbols-outlined text-headline-sm">chevron_right</span>
              </button>
              <button onClick={closeCaseDrawer} className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-error-container hover:text-error transition-colors ml-space-xs" title="Close Case View" type="button">
                <span className="material-symbols-outlined text-headline-sm">close</span>
              </button>
            </div>
          </div>
          <div className="flex items-baseline justify-between mt-space-xs">
            <div className="flex items-baseline gap-space-md">
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">{selectedCase.name}</h2>
              <span className="font-urdu-headline text-urdu-headline text-primary-container leading-none">{selectedCase.nameUrdu}</span>
              <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm pl-space-xs">
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-telemetry-sm">{selectedCase.age} yrs</span>
                <span className="text-outline-variant">•</span>
                <span>Female</span>
                <span className="text-outline-variant">•</span>
                <span className="text-tertiary-container font-semibold">{selectedCase.vulnerability}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-space-xs px-space-sm rounded-lg bg-surface-container-high/60 mt-space-xs">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-primary text-telemetry-md">pin_drop</span>
              <span className="text-on-surface font-medium">{selectedCase.location}</span>
              <span className="text-outline-variant">|</span>
              <span className="font-urdu-body text-telemetry-sm">{selectedCase.locationUrdu}</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary">
                <span className="material-symbols-outlined text-telemetry-md text-primary">lock</span>
                <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">Geo-Locked (GDPR/NDMA Res-7)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-space-lg py-space-md flex flex-col gap-space-md">
          {/* Risk Score Engine */}
          <div className="p-space-md rounded-xl bg-surface-container/70 shadow-lg flex flex-col gap-space-sm relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-error-container/20 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-telemetry-sm text-telemetry-sm text-primary uppercase tracking-wider">Algorithmic Risk Engine v4.2</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm">96% Confident</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">Composite Survival Threat</h3>
                <span className="font-urdu-body text-telemetry-sm text-on-surface-variant">مرکب خطرے کا تخمینہ برائے فوری انخلاء</span>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest/90 shadow-[0_0_24px_rgba(229,83,61,0.25)]">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-surface-container-highest stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3.5" />
                    <path className="text-error stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray={`${selectedCase.risk}, 100`} strokeLinecap="round" strokeWidth="3.5" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="font-telemetry-lg text-headline-sm text-error font-extrabold leading-none">{selectedCase.risk}</span>
                  </div>
                </div>
                <div className="flex flex-col pr-space-xs">
                  <span className="font-telemetry-sm text-telemetry-sm text-error font-bold tracking-wider">MAX THREAT</span>
                  <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">Scale: 0 - 100</span>
                </div>
              </div>
            </div>
            {/* Factor Gauges */}
            <div className="grid grid-cols-3 gap-space-sm mt-space-xs">
              <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-body-sm font-semibold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-primary text-telemetry-md">tsunami</span> Exposure</span>
                  <span className="font-telemetry-md text-telemetry-md text-primary font-bold">94%</span>
                </div>
                <span className="font-urdu-body text-telemetry-sm text-on-surface-variant -mt-1">سیلابی خطرہ</span>
                <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden mt-1"><div className="bg-primary h-full w-[94%] rounded-full shadow-[0_0_8px_rgba(242,169,59,0.5)]" /></div>
                <p className="font-body-sm text-telemetry-sm text-on-surface-variant leading-tight mt-1">Water depth forecast <strong className="text-on-surface">+1.8m</strong> in 90m; ground floor single-room house.</p>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-body-sm font-semibold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-error text-telemetry-md">elderly</span> Vulnerability</span>
                  <span className="font-telemetry-md text-telemetry-md text-error font-bold">99%</span>
                </div>
                <span className="font-urdu-body text-telemetry-sm text-on-surface-variant -mt-1">کمزوری و محتاجی</span>
                <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden mt-1"><div className="bg-error h-full w-[99%] rounded-full shadow-[0_0_8px_rgba(229,83,61,0.6)]" /></div>
                <p className="font-body-sm text-telemetry-sm text-on-surface-variant leading-tight mt-1">78yo, bedridden, oxygen concentrator requires constant AC electrical power.</p>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-body-sm font-semibold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-tertiary-container text-telemetry-md">timer</span> Time Urgency</span>
                  <span className="font-telemetry-md text-telemetry-md text-tertiary-container font-bold">97%</span>
                </div>
                <span className="font-urdu-body text-telemetry-sm text-on-surface-variant -mt-1">وقت کا دباؤ</span>
                <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden mt-1"><div className="bg-tertiary-container h-full w-[97%] rounded-full shadow-[0_0_8px_rgba(255,158,141,0.5)]" /></div>
                <p className="font-body-sm text-telemetry-sm text-on-surface-variant leading-tight mt-1">UPS battery cutoff in <strong className="text-error font-bold">~38 minutes</strong>. Grid blacked out.</p>
              </div>
            </div>
            <div className="p-space-xs px-space-sm bg-surface-container-lowest rounded-lg flex items-center justify-between text-on-surface-variant font-telemetry-sm text-telemetry-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-telemetry-md">functions</span>
                <span className="text-on-surface font-semibold">Formula:</span>
                <code className="text-secondary font-telemetry-sm font-bold">Risk = (Exp:0.94 × Vuln:0.99 × Time:0.97) + GridLoss(+0.08)</code>
              </div>
              <span className="text-outline-variant font-telemetry-sm">Synced 30s ago</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="p-space-md rounded-xl bg-surface-container/70 shadow-lg flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Omni-Channel Contact Audit</h3>
                </div>
                <span className="font-urdu-body text-telemetry-sm text-on-surface-variant">رابطہ کی تفصیل اور فیلڈ تصدیقی ٹائم لائن</span>
              </div>
              <div className="px-2.5 py-1 rounded bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-telemetry-md">hourglass_empty</span>
                <span>SILENT FOR 2h 45m</span>
              </div>
            </div>
            <div className="relative pl-6 flex flex-col gap-space-md">
              <div className="absolute left-2.5 top-2 bottom-3 w-0.5 bg-surface-container-highest" />
              {[
                { icon: 'sms', time: '14:10', text: 'SMS sent: "Paani aa gaya..." (Auto-parsed: Tier 1, Urdu NER v3.1)' },
                { icon: 'call', time: '14:25', text: 'Call attempted — No answer (3 rings, voicemail not set up)' },
                { icon: 'person_pin', time: '15:02', text: 'Volunteer Tariq dispatched for physical doorstep check (Squad 04)' },
                ...caseTimeline.map((t) => ({ icon: 'forum', time: t.at, text: t.text })),
              ].map((entry, i) => (
                <div key={i} className="relative flex items-start gap-space-md">
                  <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shadow-sm">
                    <span className="material-symbols-outlined text-[12px]">{entry.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-telemetry-sm text-telemetry-sm text-secondary">{entry.time}</span>
                    <span className="font-body-sm text-body-sm text-on-surface">{entry.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex flex-wrap items-center gap-space-xs">
              <button onClick={handleAccept} className="px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-[0_10px_25px_rgba(242,169,59,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] hover:brightness-110 active:translate-y-0.5 transition-all flex items-center gap-2" type="button">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Accept Recommendation
              </button>
              <button onClick={() => setShowOverride(true)} className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm transition-all flex items-center gap-2" type="button">
                <span className="material-symbols-outlined text-[18px]">edit</span>
                Override
              </button>
              <button onClick={() => setShowSafeConfirm(true)} className="px-space-md py-2.5 rounded-lg bg-secondary-container/30 hover:bg-secondary-container/50 text-secondary font-headline-sm text-body-sm transition-all flex items-center gap-2" type="button">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Mark Safe
              </button>
              <button onClick={() => setShowAssign(true)} className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm transition-all flex items-center gap-2" type="button">
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                Assign Volunteer
              </button>
              <a href="tel:+923218294104" className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                Call
              </a>
              <button onClick={() => setShowSendMsg(true)} className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm transition-all flex items-center gap-2" type="button">
                <span className="material-symbols-outlined text-[18px]">send</span>
                Send Message
              </button>
              <button onClick={handleDispatch} className="px-space-md py-2.5 rounded-lg bg-error text-on-error font-headline-sm text-body-sm font-bold shadow-[0_0_20px_rgba(229,83,61,0.4)] active:scale-95 transition-all flex items-center gap-2" type="button">
                <span className="material-symbols-outlined text-[18px]">emergency</span>
                Dispatch Rescue
              </button>
            </div>
          </div>
        </div>

        {/* Modals */}
        <Modal isOpen={showSafeConfirm} onClose={() => setShowSafeConfirm(false)} title="Confirm: Mark as Safe" titleUrdu="محفوظ قرار دینے کی تصدیق">
          <p className="font-body-md text-body-md text-on-surface-variant">Are you sure you want to mark <strong className="text-on-surface">{selectedCase.name}</strong> as safe? This will remove them from the active queue.</p>
          <p className="font-urdu-body text-body-sm text-primary mt-2">کیا آپ واقعی {selectedCase.nameUrdu} کو محفوظ قرار دینا چاہتے ہیں؟</p>
          <div className="flex justify-end gap-space-sm mt-space-md">
            <button onClick={() => setShowSafeConfirm(false)} className="px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold" type="button">Cancel</button>
            <button onClick={handleMarkSafe} className="px-space-md py-2 rounded-lg bg-secondary-container text-on-secondary-container font-body-sm text-body-sm font-bold" type="button">Confirm Safe / تصدیق</button>
          </div>
        </Modal>

        <Modal isOpen={showOverride} onClose={() => setShowOverride(false)} title="Override Recommendation" titleUrdu="تجویز پر اعتراض">
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">You are overriding the algorithmic recommendation for <strong className="text-on-surface">{selectedCase.name}</strong>. A reason is required for the audit log.</p>
          <textarea value={overrideReason} onChange={(e) => setOverrideReason(e.target.value)} placeholder="Enter reason for override..." rows={3} className="w-full px-space-sm py-2 bg-surface-container rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary-container resize-none" />
          <div className="flex justify-end gap-space-sm mt-space-md">
            <button onClick={() => setShowOverride(false)} className="px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold" type="button">Cancel</button>
            <button onClick={handleOverride} disabled={!overrideReason.trim()} className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-body-sm text-body-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed" type="button">Submit Override / جمع کریں</button>
          </div>
        </Modal>

        <Modal isOpen={showAssign} onClose={() => setShowAssign(false)} title="Assign Volunteer" titleUrdu="رضاکار مقرر کریں">
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Select a volunteer to assign to this case:</p>
          <select value={assignVol} onChange={(e) => setAssignVol(e.target.value)} className="w-full px-space-sm py-2 bg-surface-container rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container">
            <option>Bilal Ahmed (Squad 04)</option>
            <option>Tariq Mansoor (Squad 09)</option>
            <option>Sana Sheikh (Squad 12)</option>
            <option>Imran Yousuf (Squad 03)</option>
          </select>
          <div className="flex justify-end gap-space-sm mt-space-md">
            <button onClick={() => setShowAssign(false)} className="px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold" type="button">Cancel</button>
            <button onClick={handleAssign} className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-body-sm text-body-sm font-bold" type="button">Assign / مقرر کریں</button>
          </div>
        </Modal>

        <Modal isOpen={showSendMsg} onClose={() => setShowSendMsg(false)} title="Send Message" titleUrdu="پیغام بھیجیں">
          <textarea value={messageText} onChange={(e) => setMessageText(e.target.value)} placeholder="Type a message to add to the case timeline..." rows={3} className="w-full px-space-sm py-2 bg-surface-container rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary-container resize-none" />
          <div className="flex justify-end gap-space-sm mt-space-md">
            <button onClick={() => setShowSendMsg(false)} className="px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold" type="button">Cancel</button>
            <button onClick={handleSendMessage} disabled={!messageText.trim()} className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-body-sm text-body-sm font-bold disabled:opacity-50" type="button">Send / بھیجیں</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}
