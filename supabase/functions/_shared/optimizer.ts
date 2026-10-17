// Resource matching: Hungarian algorithm over (harm reduced - travel time).

export type OptCase = {
  id: string; name: string; tier: number; risk: number; flags: string[]
  lat: number; lng: number; rank: number; total: number; nameUrdu?: string | null
}
export type OptAsset = {
  id: string; name: string; type: 'boat' | 'ambulance' | 'team'
  lat: number; lng: number
}
export type Proposal = {
  caseId: string; caseName: string; assetId: string; assetType: string; assetLabel: string
  etaMin: number; rationale: string; rationaleUrdu: string; tradeOff: string
}

const SPEED_KMH = { boat: 15, ambulance: 35, team: 25 }
const TIER_WEIGHT: Record<number, number> = { 1: 100, 2: 50, 3: 20 }

export function haversineKm(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const R = 6371, rad = Math.PI / 180
  const dLat = (bLat - aLat) * rad, dLng = (bLng - aLng) * rad
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * rad) * Math.cos(bLat * rad) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(x))
}

/** Minimise total cost. Rows <= cols required; returns column index per row. */
function hungarianRect(cost: number[][]): number[] {
  const n = cost.length, m = cost[0]?.length ?? 0
  const INF = 1e12
  const u = new Array(n + 1).fill(0), v = new Array(m + 1).fill(0)
  const p = new Array(m + 1).fill(0), way = new Array(m + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    p[0] = i
    let j0 = 0
    const minv = new Array(m + 1).fill(INF), used = new Array(m + 1).fill(false)
    do {
      used[j0] = true
      const i0 = p[j0]
      let delta = INF, j1 = 0
      for (let j = 1; j <= m; j++) {
        if (used[j]) continue
        const cur = cost[i0 - 1][j - 1] - u[i0] - v[j]
        if (cur < minv[j]) { minv[j] = cur; way[j] = j0 }
        if (minv[j] < delta) { delta = minv[j]; j1 = j }
      }
      for (let j = 0; j <= m; j++) {
        if (used[j]) { u[p[j]] += delta; v[j] -= delta } else minv[j] -= delta
      }
      j0 = j1
    } while (p[j0] !== 0)
    do { const j1 = way[j0]; p[j0] = p[j1]; j0 = j1 } while (j0)
  }
  const res = new Array(n).fill(-1)
  for (let j = 1; j <= m; j++) if (p[j]) res[p[j] - 1] = j - 1
  return res
}

export function hungarian(cost: number[][]): number[] {
  const n = cost.length, m = cost[0]?.length ?? 0
  if (!n || !m) return new Array(n).fill(-1)
  if (n <= m) return hungarianRect(cost)
  const t = Array.from({ length: m }, (_, j) => Array.from({ length: n }, (_, i) => cost[i][j]))
  const colToRow = hungarianRect(t) // for each column, the row it takes
  const res = new Array(n).fill(-1)
  colToRow.forEach((row, col) => { if (row >= 0) res[row] = col })
  return res
}

function suitability(c: OptCase, a: OptAsset, floodArea: boolean): number {
  const f = c.flags
  const medical = f.some((x) => ['oxygen_dependent', 'dialysis', 'bedridden', 'pregnant'].includes(x))
  const mobility = f.some((x) => ['mobility_impaired', 'visually_impaired', 'elderly', 'elderly_solitary'].includes(x))
  if (a.type === 'ambulance') return medical ? 1.5 : 0.8
  if (a.type === 'boat') return floodArea ? 1.2 : 0.6
  return mobility ? 1.2 : 1
}

function reasonText(c: OptCase, a: OptAsset): { en: string; ur: string } {
  const f = c.flags
  const bits: string[] = [], bitsUr: string[] = []
  if (f.includes('oxygen_dependent')) { bits.push('oxygen-dependent'); bitsUr.push('آکسیجن پر منحصر') }
  if (f.includes('bedridden')) { bits.push('bedridden'); bitsUr.push('بستر پر') }
  if (f.some((x) => x.startsWith('mobility') || x === 'visually_impaired')) { bits.push('cannot self-evacuate'); bitsUr.push('خود نہیں نکل سکتا') }
  if (f.some((x) => x.startsWith('elderly'))) { bits.push('elderly'); bitsUr.push('بزرگ') }
  if (!bits.length) { bits.push(`Tier ${c.tier}, risk ${c.risk.toFixed(0)}`); bitsUr.push(`ٹیر ${c.tier}، خطرہ ${c.risk.toFixed(0)}`) }
  return {
    en: `${a.name} to ${c.name}: ${bits.join(', ')}, ranks ${c.rank} of ${c.total}.`,
    ur: `${a.name} → ${c.nameUrdu || c.name}: ${bitsUr.join('، ')}، ${c.total} میں سے ${c.rank} نمبر۔`,
  }
}

export function optimise(cases: OptCase[], assets: OptAsset[], opts: { roadClosed: boolean; floodArea: boolean }): Proposal[] {
  if (!cases.length || !assets.length) return []
  const k = Math.min(cases.length, Math.max(assets.length * 3, assets.length))
  const pool = cases.slice(0, k)

  const travel = (c: OptCase, a: OptAsset) => {
    const km = haversineKm(c.lat, c.lng, a.lat, a.lng)
    let min = (km / SPEED_KMH[a.type]) * 60 + 5
    if (opts.roadClosed && a.type !== 'boat') min *= 2.5
    return min
  }

  const cost = pool.map((c) =>
    assets.map((a) => {
      const harm = (TIER_WEIGHT[c.tier] ?? 20) * (c.risk / 100) * suitability(c, a, opts.floodArea)
      return -harm + 0.5 * travel(c, a)
    }),
  )
  const match = hungarian(cost)
  const assignedIdx = new Set<number>()
  match.forEach((j, i) => { if (j >= 0) assignedIdx.add(i) })

  const out: Proposal[] = []
  match.forEach((j, i) => {
    if (j < 0) return
    const c = pool[i], a = assets[j]
    const eta = Math.round(travel(c, a))
    const reason = reasonText(c, a)
    const delayed = pool.find((_, idx) => !assignedIdx.has(idx))
    const tradeOff = delayed
      ? `Sending ${a.name} here leaves ${delayed.name} (Tier ${delayed.tier}, risk ${delayed.risk.toFixed(0)}) waiting for the next free ${a.type}.`
      : `All pooled cases are covered; ${a.name} is the last available ${a.type}.`
    out.push({ caseId: c.id, caseName: c.name, assetId: a.id, assetType: a.type, assetLabel: a.name, etaMin: eta, rationale: reason.en, rationaleUrdu: reason.ur, tradeOff })
  })
  return out.sort((x, y) => x.etaMin - y.etaMin)
}
