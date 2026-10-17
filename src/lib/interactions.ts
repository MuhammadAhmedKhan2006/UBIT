import { useEffect, type FormEvent, type MouseEvent, type ChangeEvent } from 'react'
import type { NavigateFunction } from 'react-router-dom'
import { useStore, type Role } from '../store'

const ROLE_USERS: Record<string, { name: string; nameUrdu: string; email: string; role: Role; roleLabel: string; home: string }> = {
  coordinator: {
    name: 'Zara Khan',
    nameUrdu: 'زارا خان',
    email: 'zara.khan@emergency.sindh.gov.pk',
    role: 'coordinator',
    roleLabel: 'Coordinator / کوآرڈینیٹر',
    home: '/command',
  },
  volunteer: {
    name: 'Bilal Ahmed',
    nameUrdu: 'بلال احمد',
    email: 'bilal.field@volunteer.sindh.org',
    role: 'volunteer',
    roleLabel: 'Field Volunteer / فیلڈ رضاکار',
    home: '/tasks',
  },
  registrar: {
    name: 'Amina Baloch',
    nameUrdu: 'آمنہ بلوچ',
    email: 'amina.b@community.sindh.gov.pk',
    role: 'registrar',
    roleLabel: 'Registrar / رجسٹرار',
    home: '/register',
  },
  shelter: {
    name: 'Tariq Mansoor',
    nameUrdu: 'طارق منصور',
    email: 'tariq.shelter@relief.sindh.gov.pk',
    role: 'shelter',
    roleLabel: 'Shelter Manager / شیلٹر مینیجر',
    home: '/shelter',
  },
  viewer: {
    name: 'Dr. Farooq Malik',
    nameUrdu: 'ڈاکٹر فاروق ملک',
    email: 'f.malik@audit.un-relief.org',
    role: 'viewer',
    roleLabel: 'Viewer / غیر جانبدار مبصر',
    home: '/quality/audit',
  },
}

function textOf(el: Element | null) {
  return (el?.textContent || '').replace(/\s+/g, ' ').trim()
}

function showToast(msg: string, ur: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') {
  useStore.getState().showToast(msg, ur, type)
  window.setTimeout(() => useStore.getState().hideToast(), 2800)
}

function toggleHidden(el: Element | null, show?: boolean) {
  if (!el) return
  const hidden = el.classList.contains('hidden') || el.classList.contains('opacity-0')
  const shouldShow = show ?? hidden
  el.classList.toggle('hidden', !shouldShow)
  el.classList.toggle('opacity-0', !shouldShow)
  el.classList.toggle('translate-y-20', !shouldShow)
  el.classList.toggle('translate-y-32', !shouldShow)
  if (shouldShow) el.classList.add('flex')
}

function exportCsv(filename: string, rows: string[][]) {
  const csv = rows.map((r) => r.map((c) => `"${c.replace(/"/g, '""')}"`).join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  a.click()
}

function formatClock(total: number) {
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':')
}

function toUrduDigits(s: string) {
  const map = '۰۱۲۳۴۵۶۷۸۹'
  return s.replace(/\d/g, (d) => map[Number(d)])
}

export function usePageInteractions(_page: string, nav: NavigateFunction) {
  const tickCountdown = useStore((s) => s.tickCountdown)

  useEffect(() => {
    const id = window.setInterval(() => tickCountdown(), 1000)
    return () => window.clearInterval(id)
  }, [tickCountdown])

  useEffect(() => {
    const unsub = useStore.subscribe((s) => {
      const clock = formatClock(s.hazardCountdown)
      document.querySelectorAll('[data-hazard-clock], .hazard-clock').forEach((el) => {
        el.textContent = clock
      })
      document.querySelectorAll('span').forEach((el) => {
        const t = el.textContent || ''
        if (t.includes('Water arrives in')) {
          el.textContent = `⚠️ Water arrives in ${clock}`
        }
        if (t.includes('پانی پہنچنے میں') && t.includes('۰')) {
          el.textContent = `پانی پہنچنے میں ${toUrduDigits(clock)}`
        }
        if (t.includes('T-MINUS') && /\d{2}:\d{2}:\d{2}/.test(t)) {
          el.textContent = `T-MINUS ${clock}`
        }
      })
    })
    return () => unsub()
  }, [])

  const runAction = (action: string, args: unknown[], target: HTMLElement) => {
    const store = useStore.getState()
    const arg0 = args[0]

    const actions: Record<string, () => void> = {
      togglePasswordVisibility: () => {
        const input = document.getElementById('authToken') as HTMLInputElement | null
        const icon = document.getElementById('pwdEyeIcon')
        if (!input) return
        input.type = input.type === 'password' ? 'text' : 'password'
        if (icon) icon.textContent = input.type === 'password' ? 'visibility' : 'visibility_off'
      },
      simulateLogin: () => {
        const btn = document.getElementById('submitBtn')
        if (btn) {
          btn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[20px]">sync</span><span>Authenticating Mesh... / تصدیق جاری ہے</span>`
        }
        window.setTimeout(() => {
          store.login(ROLE_USERS.coordinator)
          nav('/command')
        }, 900)
      },
      selectRole: () => {
        const email = String(args[1] ?? arg0 ?? '')
        const match =
          Object.values(ROLE_USERS).find((u) => u.email === email) ||
          Object.values(ROLE_USERS).find((u) => textOf(target).toLowerCase().includes(u.role))
        const user = match || ROLE_USERS.coordinator
        store.login(user)
        showToast(`${user.roleLabel} session started`, 'رول لاگ ان ہو گیا')
        nav(user.home)
      },
      switchChannel: () => {
        const id = String(arg0)
        document.querySelectorAll('[id^="panel-"], [id^="channel-"]').forEach((p) => {
          const show = p.id.includes(id)
          p.classList.toggle('hidden', !show)
        })
        document.querySelectorAll('.channel-tab').forEach((tab) => {
          const active = tab.id === `tab-${id}` || textOf(tab).toLowerCase().includes(id)
          tab.classList.toggle('bg-primary-container', active)
          tab.classList.toggle('text-on-primary-container', active)
        })
        showToast(`Channel: ${id}`, 'چینل تبدیل')
      },
      setSimSpeed: () => {
        document.querySelectorAll('.speed-btn').forEach((b) => {
          b.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-bold')
          b.classList.add('text-on-surface-variant')
        })
        target.classList.add('bg-primary-container', 'text-on-primary-container', 'font-bold')
        target.classList.remove('text-on-surface-variant')
        showToast(`Simulation speed ${arg0}`, 'سمولیشن رفتار')
      },
      toggleStorm: () => {
        target.classList.toggle('brightness-110')
        showToast('Storm surge toggled', 'طوفان بدل گیا', 'warning')
      },
      toggleClockPause: () => showToast('Clock paused/resumed', 'گھڑی'),
      resyncSensors: () => showToast('Sensors resynced', 'سینسر سنک', 'info'),
      injectCohort: () => showToast('Synthetic cohort injected', 'کوہورٹ شامل'),
      toggleCellTower: () => {
        target.classList.toggle('bg-error')
        showToast('Cell tower outage toggled', 'ٹاور')
      },
      toggleRoadClosure: () => showToast('Road closure toggled', 'سڑک بند'),
      toggleBoatFailure: () => showToast('Boat failure toggled', 'کشتی'),
      toggleHeatwave: () => showToast('Heatwave overlay toggled', 'گرمی'),
      toggleSmsModal: () => {
        const modal = document.getElementById('sms-modal') || document.querySelector('[id*="sms"]')
        toggleHidden(modal, arg0 === true || arg0 === 'true')
      },
      broadcastSmsSim: () => {
        showToast('SMS broadcast queued', 'ایس ایم ایس نشر')
        toggleHidden(document.getElementById('sms-modal'), false)
      },
      triggerPrintExport: () => {
        exportCsv('nlb-demo-export.csv', [['metric', 'value'], ['tracked', '1842'], ['tier1', '14']])
        showToast('CSV exported', 'برآمد')
      },
      openResetModal: () => toggleHidden(document.getElementById('reset-modal') || document.querySelector('[id*="reset"]'), true),
      closeResetModal: () => toggleHidden(document.getElementById('reset-modal') || document.querySelector('[id*="reset"]'), false),
      executeSystemReset: () => {
        showToast('Demo state reset', 'ری سیٹ', 'warning')
        toggleHidden(document.getElementById('reset-modal'), false)
      },
      switchAuditTab: () => {
        const tab = String(args[1] ?? arg0)
        if (tab.includes('data')) nav('/quality')
        else if (tab.includes('fair')) nav('/quality/fairness')
        else nav('/quality/audit')
      },
      filterAuditRows: () => showToast('Audit filter applied', 'فلٹر'),
      toggleRowVerifyModal: () => {
        const modal = document.getElementById('verify-modal') || document.querySelector('[id*="verify"], [id*="modal"]')
        toggleHidden(modal)
        if (arg0) showToast(`Seal ${arg0}`, 'کرپٹو مہر', 'info')
      },
      dispatchDirect: () => {
        showToast(`Dispatch queued for ${arg0}`, 'روانگی')
        store.addAuditEntry({ action: `Dispatch ${arg0}`, user: store.user?.name || 'Operator', caseId: 'PK-KHI-7821', type: 'dispatch' })
      },
      highlightResident: () => showToast(`Resident ${arg0} highlighted`, 'رہائشی'),
      submit: () => showToast('Form submitted', 'جمع'),
    }

    if (actions[action]) actions[action]()
    else showToast(action.replace(/([A-Z])/g, ' $1'), 'عمل مکمل')
  }

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const store = useStore.getState()
    const t = e.target as HTMLElement
    const a = t.closest('a')
    if (a && a.getAttribute('href') === '#') e.preventDefault()

    const actionable = t.closest('[data-action]') as HTMLElement | null
    if (actionable && actionable.tagName !== 'FORM') {
      const action = actionable.getAttribute('data-action') || ''
      let args: unknown[] = []
      try {
        const raw = actionable.getAttribute('data-args')
        if (raw) args = JSON.parse(raw)
      } catch {
        args = []
      }
      if (actionable.dataset.args) {
        /* data-args is a react prop array stored as object — read from dataset json if string */
      }
      const maybe = (actionable as HTMLElement & { getAttribute: (n: string) => string | null })
      const argsAttr = maybe.getAttribute('data-args')
      if (!argsAttr) {
        runAction(action, args, actionable)
      } else {
        try { args = JSON.parse(argsAttr) } catch { /* react serialized */ }
        runAction(action, args, actionable)
      }
    }

    const btn = t.closest('button')
    if (!btn) {
      const beacon = t.closest('.cursor-pointer, article')
      if (beacon && textOf(beacon).includes('Fatima')) store.openCaseDrawer('PK-KHI-7821')
      return
    }
    const label = textOf(btn)

    if (label === 'EN' || label.startsWith('EN ')) store.setLanguage('en')
    if (label === 'اردو' || label.includes('اردو (RTL)') || label === 'English (LTR)') {
      store.setLanguage(store.language === 'ur' ? 'en' : 'ur')
      const langLabel = document.getElementById('currentLangLabel')
      if (langLabel) langLabel.textContent = store.language === 'ur' ? 'English (LTR)' : 'اردو (RTL)'
    }
    if (btn.getAttribute('title') === 'Toggle Theme') {
      document.documentElement.classList.toggle('dark')
      document.documentElement.classList.toggle('light')
      const icon = btn.querySelector('.material-symbols-outlined')
      if (icon) icon.textContent = document.documentElement.classList.contains('dark') ? 'dark_mode' : 'light_mode'
      showToast('Theme toggled', 'تھیم')
    }
    if (label.includes('Online') || label.includes('Offline') || label.includes('آن لائن')) {
      store.toggleOnline()
    }
    if (label.includes('Open Case') || label.includes('کیس کھولیں')) {
      store.openCaseDrawer('PK-KHI-7821')
      nav('/command')
      window.setTimeout(() => useStore.getState().openCaseDrawer('PK-KHI-7821'), 50)
    }
    if (label.includes('Dispatch Scout') || label.includes('Assign Evac') || label.includes('انخلاء')) {
      showToast('Assignment queued', 'تفویض')
      nav('/dispatch')
    }
    if (label.includes('Broadcast Staged Alert') || label.includes('الرٹ نشر')) {
      store.advanceAlertLevel()
      showToast('Staged alert broadcast', 'الرٹ نشر ہو گیا', 'warning')
    }
    if (label.includes('Manage Reserves')) nav('/dispatch')
    if (label.includes('HELP') || label.includes('مدد')) showToast('Call 1129 PDMA Sindh', '1129 پر کال کریں', 'info')
    if (label.includes('Coordinator') && label.includes('کوآرڈینیٹر')) {
      store.login(ROLE_USERS.coordinator)
      nav('/command')
    } else if (label.includes('Field Volunteer') || label.includes('فیلڈ رضاکار')) {
      store.login(ROLE_USERS.volunteer)
      nav('/tasks')
    } else if (label.includes('Registrar') || label.includes('رجسٹرار')) {
      store.login(ROLE_USERS.registrar)
      nav('/register')
    } else if (label.includes('Shelter Manager') || label.includes('شیلٹر مینیجر')) {
      store.login(ROLE_USERS.shelter)
      nav('/shelter')
    } else if (label.includes('Viewer') || label.includes('مبصر')) {
      store.login(ROLE_USERS.viewer)
      nav('/quality/audit')
    }
    if (label.includes('Accept') || label.includes('قبول')) {
      store.addAuditEntry({ action: 'Accepted recommendation', user: store.user?.name || 'Zara Khan', caseId: store.selectedCaseId || 'PK-KHI-7821', type: 'accept' })
      showToast('Recommendation accepted', 'سفارش قبول')
    }
    if (label.includes('Override') || label.includes('اوور رائیڈ')) {
      const reason = window.prompt('Override reason / وجہ', 'Resource constraints') || 'Unspecified'
      store.addAuditEntry({ action: 'Override', user: store.user?.name || 'Zara Khan', caseId: store.selectedCaseId || 'PK-KHI-7821', reason, type: 'override' })
      showToast('Override recorded', 'اوور رائیڈ')
    }
    if (label.includes('Mark Safe') || label.includes('محفوظ')) {
      store.markCaseSafe(store.selectedCaseId || 'PK-KHI-7821')
      store.addAuditEntry({ action: 'Marked safe', user: store.user?.name || 'Bilal Ahmed', caseId: store.selectedCaseId || 'PK-KHI-7821', type: 'safe' })
      showToast('Resident marked safe', 'محفوظ')
    }
    if (label.includes('Reached') || label.includes('Found Safe')) {
      store.markCaseSafe('PK-KHI-7821')
      showToast('Reached & found safe', 'پہنچا اور محفوظ')
    }
    if (label.includes("Can't Reach") || label.includes('Blocked') || label.includes('نہیں پہنچ')) {
      showToast('Cannot reach / blocked', 'راستہ بند', 'warning')
    }
    if (label.includes('Backup') || label.includes('مدد چاہیے')) {
      showToast('Backup requested', 'بیک اپ', 'error')
    }
    if (label.includes('Sync Now') || label.includes('ابھی سنک') || label.includes('sync')) {
      if (/sync/i.test(label) && (label.includes('Now') || label.includes('سنک') || label.includes('Retry'))) {
        store.syncOutbox()
        showToast('Outbox sync started', 'سنک شروع')
      }
    }
    if (label.includes('Register Resident') || label.includes('Check-In') || label.includes('چیک ان') || label.includes('اندراج')) {
      showToast('Record saved', 'محفوظ')
    }
    if (label.includes('Approve All') || label.includes('منظور')) {
      showToast('All items approved', 'منظور')
    }
    if (label.includes('Recompute') || label.includes('حساب')) {
      showToast('Scores recomputed', 'دوبارہ حساب')
    }
    if (label.includes('Export CSV') || label.includes('CSV')) {
      exportCsv('nlb-export.csv', [['id', 'action'], ...store.auditLog.map((a) => [a.id, a.action])])
      showToast('CSV downloaded', 'برآمد')
    }
    if (label.includes('Run Scenario') || label.includes('منظر')) {
      showToast('Scenario running', 'منظر نامہ')
    }
    if (label.includes('Reset') || label.includes('ری سیٹ')) {
      showToast('Scenario reset', 'ری سیٹ', 'warning')
    }
    if (label.includes('Compare') || label.includes('موازنہ')) {
      showToast('Comparison view', 'موازنہ')
    }
    if (btn.getAttribute('title') === 'Previous Case' || btn.getAttribute('title') === 'Next Case') {
      showToast('Paging cases', 'کیس')
    }
    if (label.includes('close') || btn.getAttribute('title')?.toLowerCase().includes('close') || btn.getAttribute('title')?.toLowerCase().includes('dismiss') || label === '×') {
      store.closeCaseDrawer()
    }
    if (textOf(btn.querySelector('.material-symbols-outlined')!) === 'close') store.closeCaseDrawer()
    if (label.includes('Assign Volunteer') || label.includes('رضاکار تفویض')) {
      showToast('Volunteer assigned', 'رضاکار تفویض')
      nav('/dispatch')
    }
    if (label.includes('notifications') || btn.querySelector('.material-symbols-outlined')?.textContent === 'notifications') {
      const unread = store.notifications.filter((n) => !n.read).length
      store.markAllNotificationsRead()
      showToast(`${unread || store.notifications.length} alerts opened`, 'اطلاعات', 'info')
    }
    if (t.closest('img[alt="Profile"]') || label.includes('Zara Khan')) {
      if (e.detail === 2) {
        store.logout()
        nav('/')
      }
    }

    const tabLike = /Tier 1|Tier 2|Unknown|All \(/.test(label)
    if (tabLike) {
      btn.parentElement?.querySelectorAll('button').forEach((b) => {
        b.classList.remove('bg-surface-container-high', 'bg-error-container/30', 'font-semibold')
      })
      btn.classList.add('bg-surface-container-high')
      showToast(`Filter: ${label}`, 'فلٹر')
    }
  }

  const onSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    const store = useStore.getState()
    const form = e.target as HTMLFormElement
    if (form.id === 'loginForm') {
      const btn = document.getElementById('submitBtn')
      if (btn) btn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[20px]">sync</span><span>Authenticating Mesh... / تصدیق جاری ہے</span>`
      window.setTimeout(() => {
        store.login(ROLE_USERS.coordinator)
        nav('/command')
      }, 900)
      return
    }
    showToast('Submitted', 'جمع')
  }

  const onChange = (e: ChangeEvent<HTMLDivElement>) => {
    const el = e.target as HTMLInputElement
    if (el.type === 'range') {
      const label = document.getElementById('scrubber-label')
      if (label) label.textContent = el.value
    }
  }

  return { onClick, onSubmit, onChange }
}
