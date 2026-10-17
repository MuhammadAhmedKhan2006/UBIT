import { useStore } from '../store'

export default function LiveBoard({
  variant,
}: {
  variant: 'dispatch' | 'intake' | 'field' | 'sync' | 'audit' | 'buddy' | 'shelter' | 'register'
}) {
  const cases = useStore((s) => s.cases)
  const assignments = useStore((s) => s.assignments)
  const intake = useStore((s) => s.intakeQueue)
  const syncItems = useStore((s) => s.syncItems)
  const audit = useStore((s) => s.auditLog)
  const buddy = useStore((s) => s.buddyHouseholds)
  const shelter = useStore((s) => s.officialShelter)
  const regs = useStore((s) => s.registrations)
  const dbReady = useStore((s) => s.dbReady)
  const openCase = useStore((s) => s.openCaseDrawer)

  const label = dbReady ? 'Supabase live' : 'Local cache'

  return (
    <section className="mb-space-md rounded-xl bg-surface-container-low/90 p-space-md shadow-lg">
      <div className="flex items-center justify-between gap-space-sm mb-space-sm">
        <span className="font-headline-sm text-headline-sm text-on-surface">Live records</span>
        <span className="font-telemetry-sm text-telemetry-sm text-secondary">{label}</span>
      </div>

      {variant === 'dispatch' && (
        <div className="flex flex-col gap-2">
          {assignments.slice(0, 8).map((a) => (
            <button key={a.id} type="button" onClick={() => openCase(a.caseId)} className="text-left rounded-lg bg-surface-container px-3 py-2 flex items-center justify-between gap-2">
              <span className="font-body-sm text-on-surface">{a.caseName} · {a.assetLabel}</span>
              <span className="font-telemetry-sm text-primary">{a.status} · {a.etaMin}m</span>
            </button>
          ))}
        </div>
      )}

      {variant === 'intake' && (
        <div className="flex flex-col gap-2">
          {intake.map((i) => (
            <div key={i.id} className="rounded-lg bg-surface-container px-3 py-2">
              <div className="flex justify-between gap-2">
                <span className="font-telemetry-sm text-primary">{i.channel}</span>
                <span className="font-telemetry-sm text-error">{i.risk}</span>
              </div>
              <p className="font-body-sm text-on-surface mt-1">{i.snippet || i.name}</p>
            </div>
          ))}
        </div>
      )}

      {variant === 'field' && (
        <div className="flex flex-col gap-2">
          {cases.slice(0, 8).map((c) => (
            <button key={c.id} type="button" onClick={() => openCase(c.id)} className="text-left rounded-lg bg-surface-container px-3 py-2">
              <span className="font-headline-sm text-on-surface">{c.name}</span>
              <span className="font-telemetry-sm text-primary ml-2">T{c.tier} · {c.risk}</span>
              <p className="font-body-sm text-on-surface-variant">{c.location}</p>
            </button>
          ))}
        </div>
      )}

      {variant === 'sync' && (
        <div className="flex flex-col gap-2">
          {syncItems.map((i) => (
            <div key={i.id} className="rounded-lg bg-surface-container px-3 py-2">
              <div className="flex justify-between">
                <span className="font-body-sm text-on-surface">{i.title}</span>
                <span className="font-telemetry-sm text-secondary">{i.status} {i.progress}%</span>
              </div>
              <p className="font-body-sm text-on-surface-variant">{i.description}</p>
            </div>
          ))}
        </div>
      )}

      {variant === 'audit' && (
        <div className="flex flex-col gap-2 max-h-80 overflow-y-auto">
          {audit.slice(0, 20).map((a) => (
            <div key={a.id} className="rounded-lg bg-surface-container px-3 py-2">
              <span className="font-telemetry-sm text-primary">{a.type}</span>
              <p className="font-body-sm text-on-surface">{a.action}</p>
              <p className="font-telemetry-sm text-on-surface-variant">{a.user} · {a.caseId} · {new Date(a.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}

      {variant === 'buddy' && (
        <div className="flex flex-col gap-2">
          {buddy.map((b) => (
            <div key={b.id} className="rounded-lg bg-surface-container px-3 py-2 flex justify-between">
              <div>
                <p className="font-body-sm text-on-surface">{b.name} <span className="font-urdu-body">{b.nameUrdu}</span></p>
                <p className="font-telemetry-sm text-on-surface-variant">{b.location}</p>
              </div>
              <span className="font-telemetry-sm text-secondary">{b.outcome}</span>
            </div>
          ))}
        </div>
      )}

      {variant === 'shelter' && shelter && (
        <div className="grid grid-cols-2 gap-2">
          <p className="font-headline-sm text-on-surface col-span-2">{shelter.name}</p>
          <p className="font-telemetry-md text-primary">{shelter.occupied} / {shelter.capacity}</p>
          <p className="font-telemetry-sm text-on-surface-variant">{shelter.free} free · {shelter.zone}</p>
        </div>
      )}

      {variant === 'register' && (
        <div className="flex flex-col gap-2">
          {regs.length === 0 && <p className="font-body-sm text-on-surface-variant">No registrations yet.</p>}
          {regs.slice(0, 8).map((r) => (
            <div key={r.id} className="rounded-lg bg-surface-container px-3 py-2 flex justify-between">
              <span className="font-body-sm text-on-surface">{r.name} · {r.age}</span>
              <span className="font-telemetry-sm text-on-surface-variant">{r.area} · {r.time}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
