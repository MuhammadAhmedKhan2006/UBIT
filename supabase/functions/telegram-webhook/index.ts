import { adminClient, corsHeaders, json } from '../_shared/http.ts'
import { digitFromText, telegramSend, TEXT } from '../_shared/messaging.ts'
import { ingestReport } from '../_shared/intake.ts'
import { applyReply } from '../_shared/core.ts'

// Telegram bot webhook. Set it with:
//   https://api.telegram.org/bot<TOKEN>/setWebhook?url=<FUNCTION_URL>&secret_token=<TELEGRAM_WEBHOOK_SECRET>
// Residents never log in: /start <registered phone> links the chat, then they reply 1 / 2 / 3.
// Anything else is parsed as a report and lands in the intake review queue.

const reply = (chatId: number, lang: 'en' | 'ur', m: { en: string; ur: string }) => telegramSend(chatId, lang === 'en' ? m.en : m.ur)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  const secret = Deno.env.get('TELEGRAM_WEBHOOK_SECRET')
  if (!secret) return json({ error: 'TELEGRAM_WEBHOOK_SECRET is not configured' }, 500)
  if (req.headers.get('X-Telegram-Bot-Api-Secret-Token') !== secret) return json({ error: 'Forbidden' }, 403)

  const update = await req.json().catch(() => null)
  const msg = update?.message
  if (!msg?.chat?.id || typeof msg.text !== 'string') return json({ ok: true }) // ignore non-text updates
  const chatId = Number(msg.chat.id)
  const text: string = msg.text.trim().slice(0, 2000)
  const sb = adminClient()

  const { data: link } = await sb.from('telegram_links').select('chat_id, case_id, phone, language').eq('chat_id', chatId).maybeSingle()
  const lang = (link?.language || 'ur') as 'en' | 'ur'

  // ---- /start <case id | phone>
  if (text.startsWith('/start')) {
    const key = text.replace('/start', '').trim()
    if (!key) {
      await reply(chatId, lang, {
        en: 'Welcome. Send /start followed by your registered phone number to link this chat.',
        ur: 'خوش آمدید۔ اس چیٹ کو جوڑنے کے لیے /start کے بعد اپنا رجسٹرڈ فون نمبر لکھیں۔',
      })
      return json({ ok: true })
    }
    // Link by phone number only: case IDs are guessable, so they must not be enough to hijack a chat.
    const digits = key.replace(/\D/g, '')
    const tail = digits.slice(-9)
    const matches = tail.length === 9
      ? (await sb.from('cases').select('id, phone, preferred_language').not('phone', 'is', null).ilike('phone', `%${tail.slice(0, 3)}%`)).data || []
      : []
    const c = matches.find((m: any) => String(m.phone).replace(/\D/g, '').endsWith(tail))
    if (!c) {
      await reply(chatId, lang, { en: 'We could not find that number. Ask your registrar or volunteer.', ur: 'یہ نمبر نہیں ملا۔ اپنے رجسٹرار یا رضاکار سے رابطہ کریں۔' })
      return json({ ok: true })
    }
    await sb.from('telegram_links').upsert({ chat_id: chatId, case_id: c.id, phone: key, language: c.preferred_language || 'ur' })
    await sb.from('communication_log').insert({ case_id: c.id, channel: 'telegram', direction: 'inbound', message_text: '/start (linked)', delivered: true })
    await reply(chatId, (c.preferred_language || 'ur') as 'en' | 'ur', { en: 'Linked. You will get flood alerts here. Reply 1 if safe, 2 for help, 3 to leave now.', ur: 'منسلک ہو گیا۔ سیلاب کی اطلاعات یہیں ملیں گی۔ محفوظ ہوں تو 1، مدد کے لیے 2، نکلنے کے لیے 3 لکھیں۔' })
    return json({ ok: true })
  }

  // ---- two-way check-in: 1 / 2 / 3
  const code = digitFromText(text)
  if (code && link?.case_id) {
    await applyReply(sb, link.case_id, code as 1 | 2 | 3, 'telegram', text)
    await reply(chatId, lang, TEXT.ack[code])
    return json({ ok: true })
  }

  // ---- free text => report intake (parsed, deduplicated, reviewed by a human)
  try {
    const r = await ingestReport(sb, { raw: text, channel: 'telegram', phone: link?.phone ?? `tg:${chatId}`, messageId: String(msg.message_id ?? '') })
    if (link?.case_id) await sb.from('communication_log').insert({ case_id: link.case_id, channel: 'telegram', direction: 'inbound', message_text: text, delivered: true })
    await reply(chatId, lang, {
      en: r.needsHuman ? 'Report received. A coordinator will review it shortly.' : 'Report received and prioritised.',
      ur: r.needsHuman ? 'رپورٹ موصول ہوئی۔ کوآرڈینیٹر جلد جائزہ لے گا۔' : 'رپورٹ موصول ہوئی اور ترجیح دی گئی۔',
    })
  } catch (_e) {
    await reply(chatId, lang, { en: 'Sorry, something went wrong. Please try again.', ur: 'معذرت، کچھ غلط ہو گیا۔ دوبارہ کوشش کریں۔' })
  }
  return json({ ok: true })
})
