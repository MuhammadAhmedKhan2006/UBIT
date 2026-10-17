import { useMemo, useState } from 'react'
import { useStore } from '../store'
import Modal from '../components/Modal'
import { AMENITY_ICONS, HOST_TYPES, type Amenity, type CommunityShelter, type HostType } from '../data/communityShelters'

type Lang = 'en' | 'ur'
type Bi = { en: string; ur: string }

const DIG = '۰۱۲۳۴۵۶۷۸۹'
const num = (v: string | number, lang: Lang) => (lang === 'ur' ? String(v).replace(/\d/g, (d) => DIG[Number(d)]) : String(v))

const T = {
  eyebrow: { en: 'Community Shelters', ur: 'کمیونٹی پناہ گاہیں' },
  title: { en: 'Safe spaces offered by neighbours', ur: 'پڑوسیوں کی طرف سے پیش کردہ محفوظ جگہیں' },
  sub: { en: 'Mosques, schools and families open their doors. Find a place nearby or offer your own.', ur: 'مساجد، اسکول اور خاندان اپنے دروازے کھول رہے ہیں۔ قریب کوئی جگہ تلاش کریں یا اپنی پیش کریں۔' },
  offer: { en: 'Offer a space', ur: 'جگہ پیش کریں' },
  search: { en: 'Search by name or area', ur: 'نام یا علاقے سے تلاش کریں' },
  shelters: { en: 'Shelters', ur: 'پناہ گاہیں' },
  freeBeds: { en: 'Free places', ur: 'خالی جگہیں' },
  verifiedCount: { en: 'Verified hosts', ur: 'تصدیق شدہ میزبان' },
  all: { en: 'All', ur: 'سب' },
  open: { en: 'Has space', ur: 'جگہ موجود' },
  women: { en: 'Women-friendly', ur: 'خواتین کے لیے' },
  accessible: { en: 'Step-free', ur: 'بغیر سیڑھی' },
  verified: { en: 'Verified', ur: 'تصدیق شدہ' },
  unverified: { en: 'Awaiting check', ur: 'تصدیق باقی' },
  free: { en: 'free of', ur: 'خالی از' },
  full: { en: 'Full', ur: 'بھر چکا' },
  away: { en: 'km away', ur: 'کلومیٹر دور' },
  request: { en: 'Request space', ur: 'جگہ مانگیں' },
  call: { en: 'Call host', ur: 'میزبان کو کال کریں' },
  waitlist: { en: 'Join waiting list', ur: 'انتظار کی فہرست میں شامل ہوں' },
  none: { en: 'No shelters match. Try another filter.', ur: 'کوئی پناہ گاہ نہیں ملی۔ دوسرا فلٹر آزمائیں۔' },
  reqTitle: { en: 'Request space', ur: 'جگہ کی درخواست' },
  people: { en: 'How many people?', ur: 'کتنے افراد؟' },
  send: { en: 'Send request', ur: 'درخواست بھیجیں' },
  cancel: { en: 'Cancel', ur: 'منسوخ' },
  offerTitle: { en: 'Offer a space', ur: 'جگہ پیش کریں' },
  fName: { en: 'Place name', ur: 'جگہ کا نام' },
  fArea: { en: 'Area', ur: 'علاقہ' },
  fCap: { en: 'How many people can stay?', ur: 'کتنے لوگ ٹھہر سکتے ہیں؟' },
  fType: { en: 'Type of place', ur: 'جگہ کی قسم' },
  fAmen: { en: 'What can you provide?', ur: 'آپ کیا فراہم کر سکتے ہیں؟' },
  publish: { en: 'Publish', ur: 'شائع کریں' },
  needName: { en: 'Please add a name and area', ur: 'براہ کرم نام اور علاقہ لکھیں' },
  updated: { en: 'Updated', ur: 'تازہ کاری' },
  synthetic: { en: 'Synthetic demo data, weights are expert assumptions, not validated', ur: 'مصنوعی ڈیمو ڈیٹا، وزن ماہرین کے اندازے ہیں، تصدیق شدہ نہیں' },
} satisfies Record<string, Bi>

type Filter = 'all' | 'open' | 'women' | 'accessible'

export default function CommunitySheltersPage() {
  const lang = useStore((s) => s.language)
  const user = useStore((s) => s.user)
  const shelters = useStore((s) => s.communityShelters)
  const { addCommunityShelter, reserveCommunitySpace, showToast } = useStore.getState()

  const ur = lang === 'ur'
  const L = (b: Bi) => b[lang]
  const body = ur ? 'font-urdu-body !leading-8' : ''

  const [q, setQ] = useState('')
  const [filter, setFilter] = useState<Filter>('all')
  const [reqFor, setReqFor] = useState<CommunityShelter | null>(null)
  const [people, setPeople] = useState(2)
  const [offerOpen, setOfferOpen] = useState(false)
  const [form, setForm] = useState<{ name: string; area: string; cap: number; type: HostType; amen: Amenity[] }>({ name: '', area: '', cap: 10, type: 'home', amen: ['water'] })

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return shelters
      .filter((s) => {
        if (filter === 'open' && s.free === 0) return false
        if (filter === 'women' && !s.amenities.includes('women')) return false
        if (filter === 'accessible' && !s.amenities.includes('accessible')) return false
        if (!needle) return true
        return [s.name, s.nameUrdu, s.area, s.areaUrdu].some((x) => x.toLowerCase().includes(needle))
      })
      .sort((a, b) => a.distanceKm - b.distanceKm)
  }, [shelters, q, filter])

  const totalFree = shelters.reduce((n, s) => n + s.free, 0)
  const verified = shelters.filter((s) => s.verified).length

  const submitRequest = () => {
    if (!reqFor) return
    if (reqFor.free === 0) {
      showToast('Added to the waiting list', 'انتظار کی فہرست میں شامل کر لیا گیا', 'info')
    } else {
      reserveCommunitySpace(reqFor.id, people)
      showToast(`Space requested for ${people} at ${reqFor.name}`, `${reqFor.nameUrdu} میں ${num(people, 'ur')} افراد کے لیے جگہ مانگی گئی`, 'success')
    }
    setReqFor(null)
  }

  const publish = () => {
    if (!form.name.trim() || !form.area.trim()) return showToast(T.needName.en, T.needName.ur, 'warning')
    addCommunityShelter({
      id: `cs-${Date.now()}`, name: form.name.trim(), nameUrdu: form.name.trim(), host: user?.name || 'Neighbour', hostUrdu: user?.nameUrdu || 'پڑوسی',
      type: form.type, area: form.area.trim(), areaUrdu: form.area.trim(), capacity: form.cap, free: form.cap, distanceKm: 0.5,
      amenities: form.amen, verified: false, phone: user?.phone || '+92 300 0000000', updated: 'just now', updatedUrdu: 'ابھی', note: 'Newly offered, awaiting a coordinator check.', noteUrdu: 'نئی پیشکش، کوآرڈینیٹر کی تصدیق باقی ہے۔',
    })
    showToast('Space published, thank you', 'جگہ شائع ہو گئی، شکریہ', 'success')
    setOfferOpen(false)
    setForm({ name: '', area: '', cap: 10, type: 'home', amen: ['water'] })
  }

  const toggleAmen = (a: Amenity) => setForm((f) => ({ ...f, amen: f.amen.includes(a) ? f.amen.filter((x) => x !== a) : [...f.amen, a] }))

  const chips: { id: Filter; l: Bi }[] = [{ id: 'all', l: T.all }, { id: 'open', l: T.open }, { id: 'women', l: T.women }, { id: 'accessible', l: T.accessible }]
  const input = `w-full min-h-[48px] rounded-xl bg-surface-container px-4 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary-container/60 ${ur ? 'font-urdu-body' : ''}`

  return (
    <div className="mx-auto w-full max-w-[1100px] flex flex-col gap-space-xl pb-space-xl">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-space-lg">
        <div className="flex flex-col gap-space-md">
          <span className={`inline-flex w-fit items-center gap-space-sm px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-telemetry-sm font-telemetry-sm ${ur ? 'font-urdu-body' : 'uppercase tracking-wider'}`}>
            <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>{L(T.eyebrow)}
          </span>
          <h1 className={`text-headline-lg-mobile md:text-headline-lg font-headline-lg ${ur ? 'font-urdu-headline !leading-[1.9]' : ''}`}>{L(T.title)}</h1>
          <p className={`max-w-2xl text-body-md text-on-surface-variant ${body}`}>{L(T.sub)}</p>
        </div>
        <button type="button" onClick={() => setOfferOpen(true)} className={`min-h-[52px] px-6 rounded-xl bg-primary-container text-on-primary-container font-bold inline-flex items-center justify-center gap-space-sm hover:brightness-110 transition ${ur ? 'font-urdu-body' : ''}`}>
          <span className="material-symbols-outlined">add_home</span>{L(T.offer)}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-space-md">
        {[{ l: T.shelters, v: shelters.length, i: 'night_shelter' }, { l: T.freeBeds, v: totalFree, i: 'bed' }, { l: T.verifiedCount, v: verified, i: 'verified' }].map((s) => (
          <div key={s.l.en} className="rounded-2xl bg-surface-container-low p-space-md md:p-space-lg flex flex-col gap-space-sm">
            <span className="material-symbols-outlined text-primary">{s.i}</span>
            <span className="text-telemetry-lg font-telemetry-lg">{num(s.v, lang)}</span>
            <span className={`text-body-sm text-on-surface-variant ${body}`}>{L(s.l)}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-space-md">
        <div className="relative">
          <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 start-4 text-on-surface-variant">search</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={L(T.search)} className={`${input} ps-12`} />
        </div>
        <div className="flex flex-wrap gap-space-sm">
          {chips.map((c) => (
            <button key={c.id} type="button" onClick={() => setFilter(c.id)}
              className={`min-h-[40px] px-4 rounded-full text-body-sm font-semibold transition ${filter === c.id ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'} ${ur ? 'font-urdu-body' : ''}`}>
              {L(c.l)}
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 && <p className={`text-center py-space-xl text-on-surface-variant ${body}`}>{L(T.none)}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {list.map((s) => {
          const ht = HOST_TYPES[s.type]
          const full = s.free === 0
          const pct = Math.round(((s.capacity - s.free) / s.capacity) * 100)
          return (
            <article key={s.id} className="rounded-2xl bg-surface-container-low p-space-lg flex flex-col gap-space-md">
              <div className="flex items-start gap-space-md">
                <span className="w-12 h-12 shrink-0 rounded-xl bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">{ht.icon}</span>
                </span>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <h3 className={`text-headline-sm font-headline-sm leading-snug ${ur ? 'font-urdu-headline !text-[20px] !leading-[2.4rem]' : ''}`}>{ur ? s.nameUrdu : s.name}</h3>
                  <span className={`text-body-sm text-on-surface-variant ${body}`}>{ur ? ht.ur : ht.en} • {ur ? s.areaUrdu : s.area} • {num(s.distanceKm, lang)} {L(T.away)}</span>
                </div>
                <span className={`shrink-0 px-2.5 py-1 rounded-full text-[12px] font-semibold ${s.verified ? 'bg-secondary-container/25 text-secondary' : 'bg-surface-container-highest text-on-surface-variant'} ${ur ? 'font-urdu-body' : ''}`}>
                  {L(s.verified ? T.verified : T.unverified)}
                </span>
              </div>

              <div className="flex flex-col gap-space-sm">
                <div className="flex items-baseline justify-between">
                  <span className={`font-semibold ${full ? 'text-error' : 'text-secondary'} ${ur ? 'font-urdu-body' : ''}`}>
                    {full ? L(T.full) : `${num(s.free, lang)} ${L(T.free)} ${num(s.capacity, lang)}`}
                  </span>
                  <span className="text-telemetry-sm font-telemetry-sm text-on-surface-variant">{num(pct, lang)}%</span>
                </div>
                <div className="h-2 rounded-full bg-surface-container-highest overflow-hidden">
                  <div className={`h-full rounded-full ${pct > 90 ? 'bg-error' : pct > 70 ? 'bg-primary-container' : 'bg-secondary'}`} style={{ width: `${pct}%` }} />
                </div>
              </div>

              <div className="flex flex-wrap gap-space-sm">
                {s.amenities.map((a) => (
                  <span key={a} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-[12px] text-on-surface-variant ${ur ? 'font-urdu-body' : ''}`}>
                    <span className="material-symbols-outlined text-[16px] text-primary">{AMENITY_ICONS[a].icon}</span>{ur ? AMENITY_ICONS[a].ur : AMENITY_ICONS[a].en}
                  </span>
                ))}
              </div>

              <p className={`text-body-sm text-on-surface-variant ${body}`}>{ur ? s.noteUrdu : s.note}</p>
              <p className={`text-[12px] text-on-surface-variant/70 ${body}`}>{ur ? s.hostUrdu : s.host} • {L(T.updated)} {ur ? s.updatedUrdu : s.updated}</p>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                <a href={`tel:${s.phone.replace(/\s/g, '')}`} className={`min-h-[46px] rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold inline-flex items-center justify-center gap-space-sm transition ${ur ? 'font-urdu-body' : ''}`}>
                  <span className="material-symbols-outlined text-[20px]">call</span>{L(T.call)}
                </a>
                <button type="button" onClick={() => { setPeople(2); setReqFor(s) }} className={`min-h-[46px] rounded-xl font-bold transition ${full ? 'bg-surface-container-highest text-on-surface' : 'bg-primary-container text-on-primary-container hover:brightness-110'} ${ur ? 'font-urdu-body' : ''}`}>
                  {full ? L(T.waitlist) : L(T.request)}
                </button>
              </div>
            </article>
          )
        })}
      </div>

      <p className={`text-center text-telemetry-sm font-telemetry-sm text-on-surface-variant/70 ${ur ? 'font-urdu-body' : ''}`}>{L(T.synthetic)}</p>

      <Modal isOpen={!!reqFor} onClose={() => setReqFor(null)} title={T.reqTitle.en} titleUrdu={T.reqTitle.ur}
        footer={<>
          <button type="button" onClick={() => setReqFor(null)} className={`min-h-[44px] px-5 rounded-lg bg-surface-container ${ur ? 'font-urdu-body' : ''}`}>{L(T.cancel)}</button>
          <button type="button" onClick={submitRequest} className={`min-h-[44px] px-5 rounded-lg bg-primary-container text-on-primary-container font-bold ${ur ? 'font-urdu-body' : ''}`}>{L(T.send)}</button>
        </>}>
        {reqFor && (
          <div className="flex flex-col gap-space-md">
            <p className={`font-semibold ${ur ? 'font-urdu-body' : ''}`}>{ur ? reqFor.nameUrdu : reqFor.name}</p>
            <label className={`text-body-sm text-on-surface-variant ${body}`}>{L(T.people)}</label>
            <div className="flex items-center gap-space-md">
              <button type="button" onClick={() => setPeople(Math.max(1, people - 1))} className="w-11 h-11 rounded-full bg-surface-container text-xl">−</button>
              <span className="text-telemetry-lg font-telemetry-lg w-10 text-center">{num(people, lang)}</span>
              <button type="button" onClick={() => setPeople(Math.min(20, people + 1))} className="w-11 h-11 rounded-full bg-surface-container text-xl">+</button>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={offerOpen} onClose={() => setOfferOpen(false)} title={T.offerTitle.en} titleUrdu={T.offerTitle.ur}
        footer={<>
          <button type="button" onClick={() => setOfferOpen(false)} className={`min-h-[44px] px-5 rounded-lg bg-surface-container ${ur ? 'font-urdu-body' : ''}`}>{L(T.cancel)}</button>
          <button type="button" onClick={publish} className={`min-h-[44px] px-5 rounded-lg bg-primary-container text-on-primary-container font-bold ${ur ? 'font-urdu-body' : ''}`}>{L(T.publish)}</button>
        </>}>
        <div className="flex flex-col gap-space-md">
          <div className="flex flex-col gap-space-xs"><label className={`text-body-sm text-on-surface-variant ${body}`}>{L(T.fName)}</label>
            <input className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
          <div className="flex flex-col gap-space-xs"><label className={`text-body-sm text-on-surface-variant ${body}`}>{L(T.fArea)}</label>
            <input className={input} value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} /></div>
          <div className="flex flex-col gap-space-xs"><label className={`text-body-sm text-on-surface-variant ${body}`}>{L(T.fCap)}</label>
            <input type="number" min={1} max={500} className={input} value={form.cap} onChange={(e) => setForm({ ...form, cap: Math.max(1, Number(e.target.value) || 1) })} /></div>
          <div className="flex flex-col gap-space-sm"><span className={`text-body-sm text-on-surface-variant ${body}`}>{L(T.fType)}</span>
            <div className="flex flex-wrap gap-space-sm">
              {(Object.keys(HOST_TYPES) as HostType[]).map((k) => (
                <button key={k} type="button" onClick={() => setForm({ ...form, type: k })} className={`min-h-[40px] px-3 rounded-full text-body-sm ${form.type === k ? 'bg-primary-container text-on-primary-container font-semibold' : 'bg-surface-container text-on-surface-variant'} ${ur ? 'font-urdu-body' : ''}`}>{ur ? HOST_TYPES[k].ur : HOST_TYPES[k].en}</button>
              ))}
            </div></div>
          <div className="flex flex-col gap-space-sm"><span className={`text-body-sm text-on-surface-variant ${body}`}>{L(T.fAmen)}</span>
            <div className="flex flex-wrap gap-space-sm">
              {(Object.keys(AMENITY_ICONS) as Amenity[]).map((a) => (
                <button key={a} type="button" onClick={() => toggleAmen(a)} className={`min-h-[40px] px-3 rounded-full text-body-sm inline-flex items-center gap-1.5 ${form.amen.includes(a) ? 'bg-secondary-container/30 text-secondary font-semibold' : 'bg-surface-container text-on-surface-variant'} ${ur ? 'font-urdu-body' : ''}`}>
                  <span className="material-symbols-outlined text-[16px]">{AMENITY_ICONS[a].icon}</span>{ur ? AMENITY_ICONS[a].ur : AMENITY_ICONS[a].en}
                </button>
              ))}
            </div></div>
        </div>
      </Modal>
    </div>
  )
}
