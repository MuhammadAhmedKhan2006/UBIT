import type { SupabaseClient } from 'npm:@supabase/supabase-js@2'

// Heuristic parser for messy Urdu / Roman Urdu / English reports. Low confidence goes to a human.

const AREAS: Array<{ key: string; re: RegExp; label: string }> = [
  { key: 'lyari', re: /lyari|لیاری|liyari/i, label: 'Lyari' },
  { key: 'malir', re: /malir|ملیر/i, label: 'Malir' },
  { key: 'korangi', re: /korangi|کورنگی|qoorangi/i, label: 'Korangi' },
  { key: 'keamari', re: /keamari|kemari|کیماڑی/i, label: 'Keamari' },
  { key: 'gulshan', re: /gulshan|گلشن/i, label: 'Gulshan' },
]

const NEEDS: Array<{ flag: string; re: RegExp }> = [
  { flag: 'oxygen_dependent', re: /oxygen|oxigen|aksijan|آکسیجن|سانس|saans/i },
  { flag: 'bedridden', re: /bedridden|bistar|بستر|lait(a|i)|لیٹ|chal nahi|چل نہیں|chal nahin/i },
  { flag: 'elderly', re: /buzurg|بزرگ|boorh|بوڑھ|elderly|old (man|woman|lady)|dadi|دادی|nani|نانی|dada|nana\b/i },
  { flag: 'pregnant', re: /pregnant|hamila|حاملہ|hamal/i },
  { flag: 'child_alone', re: /bachay|bache|بچے|child|baby|infant|بچہ/i },
  { flag: 'mobility_impaired', re: /wheelchair|maazoor|معذور|apahij|disab|lang(r|d)a|لنگڑ/i },
  { flag: 'visually_impaired', re: /andha|اندھ|blind|nabina|نابینا/i },
  { flag: 'diabetic', re: /sugar|diabet|ذیابیطس/i },
  { flag: 'woman_alone', re: /akeli|اکیلی|woman alone|single woman/i },
]
const WATER = /pani|paani|پانی|water|doob|ڈوب|flood|sailab|سیلاب|barish|بارش/i
const SAFE = /theek hain|theek hai|safe|محفوظ|ٹھیک ہیں|sab theek/i
const HELP = /help|madad|مدد|bachao|بچاؤ|emergency|urgent|jaldi|جلدی/i

export type Parsed = {
  name: string | null
  area: string | null
  location: string | null
  flags: string[]
  water: boolean
  contradiction: boolean
  confidence: number
  risk: number
  tier: 1 | 2 | 3
}

export function parseReport(raw: string, phone?: string | null): Parsed {
  const text = raw.normalize('NFKC')
  const area = AREAS.find((a) => a.re.test(text))
  const detail = text.match(/(sector|block|street|gali|lane|road|سیکٹر|بلاک|گلی)\s*[-#:]?\s*([A-Za-z0-9\u0600-\u06FF]+)/i)
  const location = area ? (detail ? `${area.label} ${detail[1]} ${detail[2]}` : area.label) : detail ? `${detail[1]} ${detail[2]}` : null

  const nameMatch = text.match(/(?:my name is|mera naam|naam|میرا نام|نام)\s*[:\-]?\s*([A-Za-z\u0600-\u06FF]+(?:\s+[A-Za-z\u0600-\u06FF]+)?)/i)
  const name = nameMatch
    ? nameMatch[1].trim().replace(/\s+(hai|hain|hoon|hun|ha|here|from|aur|and|mein|me|ka|ki|ko|se)$/i, '').trim() || null
    : null

  const flags = NEEDS.filter((n) => n.re.test(text)).map((n) => n.flag)
  const water = WATER.test(text)
  const contradiction = SAFE.test(text) && (HELP.test(text) || water || flags.length > 0)

  let confidence = 30
  if (area) confidence += 20
  if (detail) confidence += 10
  if (name) confidence += 15
  if (flags.length || water) confidence += 15
  if (phone) confidence += 10
  if (contradiction) confidence -= 25
  confidence = Math.max(5, Math.min(98, confidence))

  let risk = 20
  if (flags.includes('oxygen_dependent')) risk += 28
  if (flags.includes('bedridden')) risk += 22
  if (flags.includes('elderly')) risk += 12
  if (flags.includes('pregnant')) risk += 15
  if (flags.includes('child_alone')) risk += 10
  if (flags.includes('mobility_impaired') || flags.includes('visually_impaired')) risk += 12
  if (water) risk += 22
  if (HELP.test(text)) risk += 8
  risk = Math.min(99, risk)
  const tier: 1 | 2 | 3 = flags.includes('oxygen_dependent') || flags.includes('bedridden') || risk >= 80 ? 1 : risk >= 55 ? 2 : 3

  return { name, area: area?.key ?? null, location, flags, water, contradiction, confidence, risk, tier }
}

const tokens = (s: string) => new Set(s.toLowerCase().split(/[^a-z0-9\u0600-\u06FF]+/).filter((w) => w.length > 2))
function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0
  let inter = 0
  a.forEach((x) => { if (b.has(x)) inter++ })
  return inter / (a.size + b.size - inter)
}

export type Ingested = { id: string; parsed: Parsed; duplicateOf: string | null; needsHuman: boolean }

export async function ingestReport(
  sb: SupabaseClient,
  r: { raw: string; channel: string; phone?: string | null; messageId?: string | null },
): Promise<Ingested> {
  const parsed = parseReport(r.raw, r.phone)

  // Deduplicate against recent reports (same phone, or same area with similar wording).
  const since = new Date(Date.now() - 6 * 3600 * 1000).toISOString()
  const { data: recent } = await sb.from('intake_queue').select('id, phone_number, raw_message, extracted_location').gte('created_at', since).limit(200)
  const mine = tokens(r.raw)
  let duplicateOf: string | null = null
  for (const q of recent || []) {
    const samePhone = r.phone && q.phone_number === r.phone
    const sameArea = parsed.location && q.extracted_location && q.extracted_location === parsed.location
    if (samePhone || (sameArea && jaccard(mine, tokens(q.raw_message || '')) >= 0.6)) { duplicateOf = q.id; break }
  }

  const id = `IN-${Date.now().toString(36).toUpperCase()}${Math.floor(Math.random() * 90 + 10)}`
  const channelLabel = { sms: 'SMS', telegram: 'Telegram', whatsapp: 'WhatsApp', voice: 'Voice', mesh: 'Mesh', pdma_1129: 'PDMA 1129' }[r.channel] || r.channel
  const { error } = await sb.from('intake_queue').insert({
    id, channel: r.channel, channel_label: channelLabel, phone_number: r.phone ?? null, message_id: r.messageId ?? null,
    raw_message: r.raw, snippet: r.raw.slice(0, 90),
    extracted_name: parsed.name, extracted_location: parsed.location,
    extracted_needs: { flags: parsed.flags, water: parsed.water, contradiction: parsed.contradiction, area: parsed.area },
    extraction_confidence: parsed.confidence, risk: parsed.risk, priority_tier: parsed.tier,
    duplicate_of: duplicateOf, processed: false,
  })
  if (error) throw new Error(error.message)

  // Always a human decision for low confidence, duplicates and contradictions.
  const needsHuman = parsed.confidence < 70 || !!duplicateOf || parsed.contradiction
  return { id, parsed, duplicateOf, needsHuman }
}
