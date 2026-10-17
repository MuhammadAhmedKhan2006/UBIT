import { Link } from 'react-router-dom'
import { useStore } from '../store'
import HeroVideo from '../components/HeroVideo'
import { INITIAL_COMMUNITY_SHELTERS } from '../data/communityShelters'

type Bi = { en: string; ur: string }
const DIG = '۰۱۲۳۴۵۶۷۸۹'
const HOMES: Record<string, string> = { coordinator: '/command', volunteer: '/field/tasks', registrar: '/register', shelter: '/shelter', viewer: '/quality/audit' }

const T = {
  brand: { en: 'Nobody Left Behind', ur: 'کوئی پیچھے نہ رہے' },
  navHow: { en: 'How it works', ur: 'طریقہ کار' },
  navRoles: { en: 'Who it serves', ur: 'کس کے لیے' },
  navShelters: { en: 'Community shelters', ur: 'کمیونٹی پناہ گاہیں' },
  signIn: { en: 'Sign in', ur: 'لاگ ان' },
  dash: { en: 'Open dashboard', ur: 'ڈیش بورڈ کھولیں' },
  eyebrow: { en: 'Sindh flood and heatwave response', ur: 'سندھ سیلاب اور ہیٹ ویو ریسپانس' },
  title: { en: 'Reach the people the phones never reach.', ur: 'ان لوگوں تک پہنچیں جن تک فون کبھی نہیں پہنچتے۔' },
  sub: {
    en: 'When water rises and the network drops, the most vulnerable go silent first. Nobody Left Behind gives coordinators, volunteers and neighbours one shared picture of who needs help, and what is already on its way.',
    ur: 'جب پانی چڑھتا ہے اور نیٹ ورک ٹوٹتا ہے تو سب سے کمزور لوگ سب سے پہلے خاموش ہو جاتے ہیں۔ "کوئی پیچھے نہ رہے" کوآرڈینیٹرز، رضاکاروں اور پڑوسیوں کو ایک مشترکہ تصویر دیتا ہے کہ کسے مدد چاہیے اور کیا پہلے سے راستے میں ہے۔',
  },
  cta: { en: 'Explore the demo', ur: 'ڈیمو دیکھیں' },
  cta2: { en: 'How it works', ur: 'طریقہ کار' },
  probTitle: { en: 'Silence is not safety.', ur: 'خاموشی کا مطلب خیریت نہیں۔' },
  probBody: {
    en: 'In the 2022 floods, many of the people who needed rescue most never called. They were elderly, alone, without a charged phone or without a signal. A system that waits for calls will always arrive late for them.',
    ur: '۲۰۲۲ کے سیلاب میں جنہیں سب سے زیادہ بچاؤ کی ضرورت تھی ان میں سے بہت سوں نے کبھی کال نہیں کی۔ وہ بزرگ تھے، اکیلے تھے، فون چارج نہیں تھا یا سگنل نہیں تھا۔ جو نظام کال کا انتظار کرتا ہے وہ ان کے لیے ہمیشہ دیر سے پہنچتا ہے۔',
  },
  probNote: { en: 'So this one treats “unknown” as high risk, never as safe.', ur: 'اس لیے یہ نظام "نامعلوم" کو زیادہ خطرہ مانتا ہے، کبھی محفوظ نہیں۔' },
  howTitle: { en: 'How it works', ur: 'یہ کیسے کام کرتا ہے' },
  rolesTitle: { en: 'Built for everyone in the response', ur: 'ہر ردعمل کرنے والے کے لیے' },
  rolesSub: { en: 'Each role gets its own screen, on the device it actually has.', ur: 'ہر کردار کی اپنی اسکرین ہے، اسی ڈیوائس پر جو اس کے پاس ہے۔' },
  quote: {
    en: '“Mosques and schools already know who lives on which lane. The tool just lets us say so, in one place, before the water gets there.”',
    ur: '“مساجد اور اسکولوں کو پہلے سے معلوم ہے کہ کس گلی میں کون رہتا ہے۔ یہ نظام بس پانی پہنچنے سے پہلے ہمیں ایک جگہ یہ بتانے دیتا ہے۔”',
  },
  quoteBy: { en: 'Shazia Memon, shelter host (demo persona)', ur: 'شازیہ میمن، پناہ گاہ کی میزبان (ڈیمو کردار)' },
  shTitle: { en: 'Neighbours opening their doors', ur: 'پڑوسی اپنے دروازے کھول رہے ہیں' },
  shBody: {
    en: 'Mosques, schools and families can list a safe room, with how many places are free and what they can provide. Anyone in the response can find one nearby.',
    ur: 'مساجد، اسکول اور خاندان محفوظ کمرہ درج کر سکتے ہیں، جس میں خالی جگہیں اور سہولتیں بتائی جاتی ہیں۔ ردعمل میں شامل ہر شخص قریب کوئی جگہ ڈھونڈ سکتا ہے۔',
  },
  shLink: { en: 'See all community shelters', ur: 'تمام کمیونٹی پناہ گاہیں دیکھیں' },
  places: { en: 'places free', ur: 'جگہیں خالی' },
  full: { en: 'Full', ur: 'بھر چکا' },
  ctaTitle: { en: 'See the whole response on one screen.', ur: 'پورا ردعمل ایک اسکرین پر دیکھیں۔' },
  ctaSub: { en: 'The demo uses synthetic data. No account is needed.', ur: 'ڈیمو مصنوعی ڈیٹا استعمال کرتا ہے۔ اکاؤنٹ کی ضرورت نہیں۔' },
  helpline: { en: 'PDMA Sindh helpline', ur: 'پی ڈی ایم اے سندھ ہیلپ لائن' },
  footer: { en: 'Synthetic demo data. Weights are expert assumptions, not validated.', ur: 'مصنوعی ڈیمو ڈیٹا۔ وزن ماہرین کے اندازے ہیں، تصدیق شدہ نہیں۔' },
} satisfies Record<string, Bi>

const STATS: { v: Bi; l: Bi }[] = [
  { v: { en: '3 min', ur: '۳ منٹ' }, l: { en: 'to first triage, down from 47', ur: 'پہلی درجہ بندی تک، پہلے ۴۷' } },
  { v: { en: '91%', ur: '۹۱٪' }, l: { en: 'of critical cases reached in 30 min', ur: 'نازک کیسز ۳۰ منٹ میں پہنچے' } },
  { v: { en: '67%', ur: '۶۷٪' }, l: { en: 'of silent residents located', ur: 'خاموش شہریوں کا سراغ ملا' } },
  { v: { en: '2', ur: '۲' }, l: { en: 'languages, English and Urdu', ur: 'زبانیں، انگریزی اور اردو' } },
]

const STEPS: { t: Bi; d: Bi }[] = [
  { t: { en: 'Listen on every channel', ur: 'ہر ذریعے پر سنیں' }, d: { en: 'SMS, WhatsApp, voice notes and the 1129 line arrive in Urdu and Roman Urdu. Each report is read, placed on the map and ranked by risk.', ur: 'ایس ایم ایس، واٹس ایپ، صوتی پیغام اور ۱۱۲۹ لائن اردو اور رومن اردو میں آتے ہیں۔ ہر اطلاع پڑھی جاتی ہے، نقشے پر رکھی جاتی ہے اور خطرے کے مطابق ترتیب دی جاتی ہے۔' } },
  { t: { en: 'Decide with the reasons in view', ur: 'وجوہات دیکھ کر فیصلہ کریں' }, d: { en: 'Coordinators approve every dispatch. They see why a boat or team was chosen, can override it, and every decision is logged.', ur: 'کوآرڈینیٹرز ہر روانگی منظور کرتے ہیں۔ وہ دیکھتے ہیں کہ کشتی یا ٹیم کیوں چنی گئی، اسے بدل سکتے ہیں، اور ہر فیصلہ درج ہوتا ہے۔' } },
  { t: { en: 'Reach, confirm, sync', ur: 'پہنچیں، تصدیق کریں، سنک کریں' }, d: { en: 'Volunteers keep working offline, check on neighbours door to door, and everything syncs the moment a signal returns.', ur: 'رضاکار آف لائن کام جاری رکھتے ہیں، گھر گھر پڑوسیوں کی خبر لیتے ہیں، اور سگنل آتے ہی سب کچھ سنک ہو جاتا ہے۔' } },
]

const ROLES: { n: Bi; d: Bi }[] = [
  { n: { en: 'Coordinators', ur: 'کوآرڈینیٹرز' }, d: { en: 'Triage, dispatch and scenario planning from one command view.', ur: 'ایک کمانڈ منظر سے درجہ بندی، روانگی اور منظر نامے کی منصوبہ بندی۔' } },
  { n: { en: 'Field volunteers', ur: 'فیلڈ رضاکار' }, d: { en: 'Offline tasks, safe routes and buddy check-ins on a phone.', ur: 'فون پر آف لائن ٹاسکس، محفوظ راستے اور بڈی چیک ان۔' } },
  { n: { en: 'Community registrars', ur: 'کمیونٹی رجسٹرار' }, d: { en: 'Door-to-door register of elderly, disabled and pregnant residents.', ur: 'بزرگ، معذور اور حاملہ رہائشیوں کا گھر گھر اندراج۔' } },
  { n: { en: 'Shelter managers', ur: 'شیلٹر مینیجرز' }, d: { en: 'Beds, rations, power and medical stock in real time.', ur: 'بستر، راشن، بجلی اور طبی سامان کی براہِ راست صورتحال۔' } },
  { n: { en: 'Auditors', ur: 'آڈیٹرز' }, d: { en: 'A read-only, tamper-evident record of every decision.', ur: 'ہر فیصلے کا صرف دیکھنے والا، چھیڑ چھاڑ سے محفوظ ریکارڈ۔' } },
]

export default function LandingPage() {
  const lang = useStore((s) => s.language)
  const setLanguage = useStore((s) => s.setLanguage)
  const user = useStore((s) => s.user)
  const ur = lang === 'ur'
  const L = (b: Bi) => b[lang]
  const n = (v: string | number) => (ur ? String(v).replace(/\d/g, (d) => DIG[Number(d)]) : String(v))
  const dest = user ? HOMES[user.role] : '/login'

  const body = ur ? 'font-urdu-body !leading-9' : ''
  const h = ur ? 'font-urdu-headline !leading-[1.8]' : 'font-headline-lg tracking-tight'
  const wrap = 'mx-auto w-full max-w-[1180px] px-margin lg:px-space-lg'
  const eyebrow = `text-[13px] text-on-surface-variant ${ur ? 'font-urdu-body' : 'uppercase tracking-[0.18em] font-telemetry-sm'}`
  const shelters = INITIAL_COMMUNITY_SHELTERS.filter((s) => s.verified).slice(0, 3)

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[100vh] flex flex-col">
        <HeroVideo className="-z-20 opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/55 to-background" />

        <header className={`${wrap} h-20 flex items-center justify-between`}>
          <span className={`text-[19px] font-bold tracking-tight ${ur ? 'font-urdu-headline' : 'font-headline-sm'}`}>{L(T.brand)}</span>
          <nav className="hidden md:flex items-center gap-space-lg text-[14px] text-on-surface-variant">
            <a href="#how" className={`hover:text-on-surface transition ${ur ? 'font-urdu-body' : ''}`}>{L(T.navHow)}</a>
            <a href="#roles" className={`hover:text-on-surface transition ${ur ? 'font-urdu-body' : ''}`}>{L(T.navRoles)}</a>
            <a href="#shelters" className={`hover:text-on-surface transition ${ur ? 'font-urdu-body' : ''}`}>{L(T.navShelters)}</a>
          </nav>
          <div className="flex items-center gap-space-md">
            <div role="group" aria-label="Language" dir="ltr" data-no-lang className="flex items-center p-0.5 rounded-md bg-surface-container/80 backdrop-blur border border-on-surface/15">
              {([['en', 'EN'], ['ur', 'اردو']] as const).map(([code, label]) => (
                <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={lang === code}
                  className={`min-h-[36px] px-3.5 rounded text-[14px] font-semibold transition ${code === 'ur' ? 'font-urdu-body' : ''} ${lang === code ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:text-on-surface'}`}>
                  {label}
                </button>
              ))}
            </div>
            <Link to={dest} className={`min-h-[40px] px-5 rounded-md border border-on-surface/30 hover:border-on-surface/70 text-[14px] font-semibold inline-flex items-center transition ${ur ? 'font-urdu-body' : ''}`}>{user ? L(T.dash) : L(T.signIn)}</Link>
          </div>
        </header>

        <div className={`${wrap} flex-1 flex flex-col justify-center py-space-xl`}>
          <p className={`${eyebrow} mb-space-lg`}>{L(T.eyebrow)}</p>
          <h1 className={`max-w-[880px] text-[44px] leading-[1.05] sm:text-[64px] lg:text-[80px] font-extrabold ${h}`}>{L(T.title)}</h1>
          <p className={`mt-space-lg max-w-[620px] text-[18px] leading-8 text-on-surface-variant ${body}`}>{L(T.sub)}</p>
          <div className="mt-space-xl flex flex-wrap items-center gap-x-space-lg gap-y-space-md">
            <Link to={dest} className={`min-h-[52px] px-8 rounded-md bg-primary-container text-on-primary-container font-bold inline-flex items-center hover:brightness-110 transition ${ur ? 'font-urdu-body' : ''}`}>{L(T.cta)}</Link>
            <a href="#how" className={`inline-flex items-center gap-2 text-on-surface font-semibold hover:text-primary transition ${ur ? 'font-urdu-body' : ''}`}>
              {L(T.cta2)}<span className="material-symbols-outlined text-[20px] rtl:rotate-180">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className={`${wrap} pb-space-xl`}>
          <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-on-surface/15">
            {STATS.map((s, i) => (
              <div key={s.l.en} className={`py-space-lg pe-space-md ${i > 0 ? 'lg:border-s border-on-surface/15 lg:ps-space-lg' : ''}`}>
                <dt className="text-[34px] leading-none font-bold font-headline-lg">{L(s.v)}</dt>
                <dd className={`mt-space-sm text-[13px] text-on-surface-variant ${ur ? 'font-urdu-body !leading-7' : ''}`}>{L(s.l)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Problem */}
      <section className={`${wrap} py-[104px] grid grid-cols-1 lg:grid-cols-12 gap-space-xl`}>
        <h2 className={`lg:col-span-5 text-[34px] leading-tight sm:text-[44px] font-bold ${h}`}>{L(T.probTitle)}</h2>
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <p className={`text-[19px] leading-8 text-on-surface-variant ${body}`}>{L(T.probBody)}</p>
          <p className={`text-[19px] leading-8 text-on-surface border-s-2 border-primary-container ps-space-md ${body}`}>{L(T.probNote)}</p>
        </div>
      </section>

      {/* How */}
      <section id="how" className="bg-surface-container-lowest/60">
        <div className={`${wrap} py-[104px]`}>
          <h2 className={`text-[34px] sm:text-[44px] font-bold mb-space-xl ${h}`}>{L(T.howTitle)}</h2>
          <ol>
            {STEPS.map((s, i) => (
              <li key={s.t.en} className="grid grid-cols-12 gap-space-md py-space-lg border-t border-on-surface/15">
                <span className="col-span-2 lg:col-span-1 text-[15px] font-telemetry-md text-primary pt-1">{n(`0${i + 1}`)}</span>
                <h3 className={`col-span-10 lg:col-span-4 text-[22px] font-semibold leading-snug ${ur ? 'font-urdu-headline !leading-[2.2rem]' : 'font-headline-sm'}`}>{L(s.t)}</h3>
                <p className={`col-span-12 lg:col-span-7 text-[16px] leading-7 text-on-surface-variant ${body}`}>{L(s.d)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className={`${wrap} py-[104px] grid grid-cols-1 lg:grid-cols-12 gap-space-xl`}>
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <h2 className={`text-[34px] sm:text-[44px] leading-tight font-bold ${h}`}>{L(T.rolesTitle)}</h2>
          <p className={`text-[16px] leading-7 text-on-surface-variant max-w-sm ${body}`}>{L(T.rolesSub)}</p>
        </div>
        <ul className="lg:col-span-7">
          {ROLES.map((r) => (
            <li key={r.n.en} className="py-space-md border-t border-on-surface/15 last:border-b grid grid-cols-1 sm:grid-cols-5 gap-space-xs sm:gap-space-md">
              <span className={`sm:col-span-2 font-semibold text-[17px] ${ur ? 'font-urdu-body' : ''}`}>{L(r.n)}</span>
              <span className={`sm:col-span-3 text-[15px] leading-7 text-on-surface-variant ${body}`}>{L(r.d)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quote */}
      <section className="border-y border-on-surface/10">
        <figure className={`${wrap} py-[96px] max-w-[980px]`}>
          <blockquote className={`text-[26px] sm:text-[34px] leading-[1.35] font-medium ${ur ? 'font-urdu-headline !leading-[2]' : 'font-headline-md'}`}>{L(T.quote)}</blockquote>
          <figcaption className={`mt-space-lg text-[14px] text-on-surface-variant ${ur ? 'font-urdu-body' : ''}`}>{L(T.quoteBy)}</figcaption>
        </figure>
      </section>

      {/* Shelters */}
      <section id="shelters" className={`${wrap} py-[104px] grid grid-cols-1 lg:grid-cols-12 gap-space-xl`}>
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <h2 className={`text-[34px] sm:text-[44px] leading-tight font-bold ${h}`}>{L(T.shTitle)}</h2>
          <p className={`text-[16px] leading-7 text-on-surface-variant ${body}`}>{L(T.shBody)}</p>
          <Link to={user ? '/community-shelters' : '/login'} className={`mt-space-sm inline-flex items-center gap-2 font-semibold text-primary hover:underline underline-offset-4 ${ur ? 'font-urdu-body' : ''}`}>
            {L(T.shLink)}<span className="material-symbols-outlined text-[20px] rtl:rotate-180">arrow_forward</span>
          </Link>
        </div>
        <ul className="lg:col-span-7">
          {shelters.map((s) => (
            <li key={s.id} className="py-space-md border-t border-on-surface/15 last:border-b flex items-baseline justify-between gap-space-md">
              <div className="flex flex-col gap-1">
                <span className={`font-semibold text-[17px] ${ur ? 'font-urdu-body' : ''}`}>{ur ? s.nameUrdu : s.name}</span>
                <span className={`text-[14px] text-on-surface-variant ${ur ? 'font-urdu-body' : ''}`}>{ur ? s.areaUrdu : s.area} • {n(s.distanceKm)} {ur ? 'کلومیٹر' : 'km'}</span>
              </div>
              <span className={`text-[14px] shrink-0 ${s.free ? 'text-secondary' : 'text-error'} ${ur ? 'font-urdu-body' : ''}`}>{s.free ? `${n(s.free)} ${L(T.places)}` : L(T.full)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-primary-container text-on-primary-container">
        <div className={`${wrap} py-[88px] flex flex-col md:flex-row md:items-center md:justify-between gap-space-lg`}>
          <div className="flex flex-col gap-space-sm">
            <h2 className={`text-[30px] sm:text-[40px] leading-tight font-bold ${h}`}>{L(T.ctaTitle)}</h2>
            <p className={`text-[16px] opacity-80 ${body}`}>{L(T.ctaSub)}</p>
          </div>
          <Link to={dest} className={`min-h-[52px] px-8 rounded-md bg-on-primary-container text-primary-container font-bold inline-flex items-center justify-center hover:opacity-90 transition ${ur ? 'font-urdu-body' : ''}`}>{L(T.cta)}</Link>
        </div>
      </section>

      <footer className={`${wrap} py-space-xl flex flex-col md:flex-row gap-space-sm md:items-center md:justify-between text-[13px] text-on-surface-variant`}>
        <span className={ur ? 'font-urdu-body' : ''}>{L(T.footer)}</span>
        <span className={ur ? 'font-urdu-body' : ''}>{L(T.helpline)} {n(1129)}</span>
      </footer>
    </div>
  )
}
