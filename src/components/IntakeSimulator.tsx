import { useState } from 'react'
import { useStore } from '../store'
import { backendReady, parseIntake } from '../lib/functions'
import { hydrateFromSupabase } from '../lib/session'

type Parsed = { name: string | null; location: string | null; flags: string[]; water: string | null; contradiction: boolean; confidence: number; risk: number; tier: number }
type Result = { parsed: Parsed; id?: string; duplicate_of?: string | null; needs_human_review?: boolean }

const SAMPLES = [
  'Lyari gali 4 aslam bhai 6 log ammi bedridden koi phone nahi',
  'Malir sector 7 pani ghar mein aa gaya, bachay aur buzurg hain',
  'میرا نام نسرین، کورنگی بلاک 3، پانی کمر تک ہے، آکسیجن پر مریض',
]

/** Sends a raw SMS / chat message through the intake-parse Edge Function and shows the extracted fields. */
export default function IntakeSimulator() {
  const showToast = useStore((s) => s.showToast)
  const [raw, setRaw] = useState(SAMPLES[0])
  const [busy, setBusy] = useState(false)
  const [res, setRes] = useState<Result | null>(null)

  const run = async (save: boolean) => {
    if (!backendReady()) return showToast('Sign in with a Supabase account to use the parser', 'پارسر کے لیے سپابیس اکاؤنٹ سے لاگ ان کریں', 'warning')
    setBusy(true)
    try {
      const r = (await parseIntake(raw, { dry_run: !save, channel: 'sms' })) as unknown as Result
      setRes(r)
      if (save) {
        await hydrateFromSupabase()
        showToast(r.duplicate_of ? `Merged into existing report ${r.duplicate_of}` : 'Report queued for review', r.duplicate_of ? 'موجودہ رپورٹ میں شامل' : 'رپورٹ جائزے کے لیے قطار میں', 'success')
      }
    } catch (e) {
      showToast(`Parser: ${(e as Error).message}`, 'پارسر میں خرابی', 'error')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="rounded-2xl bg-surface-container-high/70 p-space-md flex flex-col gap-space-sm mb-space-md">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Simulate incoming SMS / chat report</h3>
        <span className="font-urdu-body text-urdu-body text-secondary text-[13px]">آنے والی رپورٹ کا تجربہ</span>
      </div>
      <textarea
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
        rows={3}
        className="w-full rounded-xl bg-surface-container-lowest text-on-surface p-3 font-body-md focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <div className="flex flex-wrap gap-2">
        {SAMPLES.map((s, i) => (
          <button key={i} type="button" onClick={() => setRaw(s)} className="px-2 py-1 rounded-lg bg-surface-container text-on-surface-variant text-[12px]">Sample {i + 1}</button>
        ))}
        <button type="button" disabled={busy || !raw.trim()} onClick={() => void run(false)} className="px-3 py-1.5 rounded-lg bg-surface-bright text-on-surface font-bold text-[13px] disabled:opacity-50">Preview parse</button>
        <button type="button" disabled={busy || !raw.trim()} onClick={() => void run(true)} className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-bold text-[13px] disabled:opacity-50">Submit to queue</button>
      </div>
      {res && (
        <div className="rounded-xl bg-surface-container-lowest p-3 grid grid-cols-2 gap-2 text-body-sm">
          <div><span className="text-outline text-[11px] block">NAME</span>{res.parsed.name || 'unknown'}</div>
          <div><span className="text-outline text-[11px] block">LOCATION</span>{res.parsed.location || 'unknown'}</div>
          <div><span className="text-outline text-[11px] block">FLAGS</span>{res.parsed.flags.join(', ') || 'none'}</div>
          <div><span className="text-outline text-[11px] block">WATER</span>{res.parsed.water || 'unknown'}</div>
          <div><span className="text-outline text-[11px] block">CONFIDENCE</span>{res.parsed.confidence}%</div>
          <div><span className="text-outline text-[11px] block">TIER / RISK</span>Tier {res.parsed.tier}, {res.parsed.risk}</div>
          {(res.parsed.contradiction || res.needs_human_review) && (
            <div className="col-span-2 text-error font-semibold">Needs human review{res.parsed.contradiction ? ' (contradictory details)' : ''}</div>
          )}
        </div>
      )}
    </section>
  )
}
