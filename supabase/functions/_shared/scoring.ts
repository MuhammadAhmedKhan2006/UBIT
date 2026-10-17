// Risk = exposure x vulnerability x time pressure, with a confidence value.
// Missing data is never "safe": unknown => high exposure + welfare check.

export type Rules = {
  lead_time_base_min: number
  lead_time_extra_min: Record<string, number>
  power_dependent_flags: string[]
  life_threat_flags: string[]
  weights: Record<string, { exposure: number; vulnerability: number; time: number }>
}

export const DEFAULT_RULES: Rules = {
  lead_time_base_min: 120,
  lead_time_extra_min: { elderly: 60, bedridden: 120, oxygen_dependent: 120, mobility_impaired: 90, visually_impaired: 60, no_phone: 60, pregnant: 60, child_alone: 60, woman_alone: 30 },
  power_dependent_flags: ['oxygen_dependent', 'dialysis'],
  life_threat_flags: ['oxygen_dependent', 'bedridden', 'dialysis', 'child_alone'],
  weights: { flood: { exposure: 1, vulnerability: 1, time: 1 }, heatwave: { exposure: 0.7, vulnerability: 1.3, time: 1 } },
}

const VULN_POINTS: Record<string, number> = {
  oxygen_dependent: 45, dialysis: 40, bedridden: 40, child_alone: 40,
  elderly_solitary: 30, mobility_impaired: 30, visually_impaired: 25, pregnant: 25,
  elderly: 20, diabetic: 15, woman_alone: 15,
}

const clamp = (n: number, lo = 0, hi = 100) => Math.min(hi, Math.max(lo, n))

export type ScoreInput = {
  flags: string[]
  age?: number | null
  phoneType?: string | null
  exposure?: number | null
  unknown?: boolean
  confidence?: number | null
  silentMinutes?: number | null
  countdownMinutes: number
  mode: string
  rules: Rules
  silenceMin: number
}

export type ScoreResult = {
  exposure: number; vulnerability: number; time: number
  risk: number; confidence: number; tier: 1 | 2 | 3; leadMinutes: number; lifeThreat: boolean
}

export function leadTimeMinutes(flags: string[], phoneType: string | null | undefined, rules: Rules): number {
  let lead = rules.lead_time_base_min
  const extra = rules.lead_time_extra_min
  const seen = new Set<string>()
  for (const f of flags) {
    const key = f === 'elderly_solitary' ? 'elderly' : f
    if (extra[key] && !seen.has(key)) { lead += extra[key]; seen.add(key) }
  }
  if (phoneType === 'none' && extra.no_phone) lead += extra.no_phone
  return lead
}

export function score(i: ScoreInput): ScoreResult {
  const flags = i.flags || []
  const w = i.rules.weights[i.mode] || i.rules.weights.flood

  // Exposure: stored value, but unknown location/household data is treated as high exposure.
  let exposure = i.exposure ?? 50
  if (i.unknown) exposure = Math.max(exposure, 75)

  let vuln = 10
  for (const f of flags) vuln += VULN_POINTS[f] ?? 0
  if ((i.age ?? 0) >= 65 && !flags.includes('elderly') && !flags.includes('elderly_solitary')) vuln += 20
  if (i.phoneType === 'none') vuln += 15
  else if (i.phoneType === 'basic') vuln += 5
  vuln = clamp(vuln)

  // Time pressure: how far inside this person's own lead time the hazard already is.
  const lead = leadTimeMinutes(flags, i.phoneType, i.rules)
  const cd = Math.max(i.countdownMinutes, 1)
  let time = cd <= lead ? 100 : clamp((lead / cd) * 100)
  if (i.silentMinutes != null) time = clamp(time + Math.min(i.silentMinutes / Math.max(i.silenceMin, 1), 1) * 10)
  else time = clamp(time + 10) // never contacted: treat as silent

  let risk = clamp(
    100 * Math.pow(exposure / 100, w.exposure) * Math.pow(vuln / 100, w.vulnerability) * Math.pow(time / 100, w.time),
  )
  // Unknown is never "safe": it is high exposure and needs a welfare check (at least Tier 2).
  if (i.unknown) risk = Math.max(risk, 56)

  let confidence = i.confidence ?? 85
  if (i.unknown) confidence = Math.min(confidence, 60)
  if (i.silentMinutes == null) confidence = Math.min(confidence, 70)
  confidence = clamp(confidence)

  const lifeThreat = flags.some((f) => i.rules.life_threat_flags.includes(f))
  // Tiers: life threat first, never outranked by a high score elsewhere.
  let tier: 1 | 2 | 3 = 3
  if ((lifeThreat && (exposure >= 60 || i.unknown)) || risk >= 80) tier = 1
  else if (risk >= 55) tier = 2

  const r2 = (n: number) => Math.round(n * 100) / 100
  return { exposure: r2(exposure), vulnerability: r2(vuln), time: r2(time), risk: r2(risk), confidence: r2(confidence), tier, leadMinutes: lead, lifeThreat }
}
