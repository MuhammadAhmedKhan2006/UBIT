import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function IntakePage() {
  const nav = useNavigate()
  const bind = usePageInteractions("IntakePage", nav)
  return (
    <div className={"bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen"} {...bind}>
{/*  Top Intake Telemetry Header  */}
      <section className={"flex flex-col gap-space-md"}>
      <div className={"flex flex-col xl:flex-row xl:items-end justify-between gap-space-md pb-space-xs"}>
      <div className={"flex flex-col gap-1"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm uppercase tracking-wider flex items-center gap-1.5"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"}></span>
                  NLP Ingestion Node 02
                </span>
      <span className={"text-on-surface-variant/50 font-telemetry-sm text-telemetry-sm"}>/</span>
      <span className={"text-primary font-telemetry-sm text-telemetry-sm"}>Urdu + Roman Urdu NER Engine v3.1</span>
      </div>
      <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight flex items-baseline gap-space-sm flex-wrap"}>
      <span>Intelligent Citizen Intake &amp; NLP Triage</span>
      <span className={"font-urdu-headline text-urdu-headline text-primary-container font-bold -mb-1"}>شہریوں کی اطلاعات اور خودکار تجزیہ</span>
      </h1>
      <p className={"font-body-md text-body-md text-on-surface-variant max-w-4xl"}>
                Multilingual Urdu/Roman-Urdu speech-to-text, SMS, WhatsApp &amp; volunteer voice intake with automated vulnerability extraction.
                <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant/80 ml-2"}>کثیر لسانی خودکار انٹیک اور فوری ترجیحی تخمینہ</span>
      </p>
      </div>
      <div className={"flex items-center gap-space-sm self-start xl:self-auto flex-wrap"}>
      <div className={"px-space-md py-space-xs rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-space-sm shadow-sm"}>
      <span className={"material-symbols-outlined text-primary text-headline-sm"}>pending_actions</span>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>Queue Status</span>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>19 Pending Review <span className={"font-urdu-body text-telemetry-sm text-primary/70"}>| ۱۹ زیرِ تصدیق</span></span>
      </div>
      </div>
      <div className={"px-space-md py-space-xs rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-space-sm shadow-sm"}>
      <span className={"material-symbols-outlined text-secondary text-headline-sm"}>verified_user</span>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>Auto-Threshold</span>
      <span className={"font-telemetry-md text-telemetry-md text-secondary font-bold"}>85% Minimum</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Realtime Protocol Ticker  */}
      <div className={"grid grid-cols-2 md:grid-cols-4 gap-space-sm"}>
      <div className={"p-space-sm rounded-lg bg-surface-container-low/90 backdrop-blur-md flex items-center justify-between shadow-sm"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-secondary text-telemetry-md"}>sms</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>SMS Gateway</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm font-semibold text-secondary"}>184 msg/m</span>
      </div>
      <div className={"p-space-sm rounded-lg bg-surface-container-low/90 backdrop-blur-md flex items-center justify-between shadow-sm"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-primary text-telemetry-md"}>chat</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>WhatsApp Bot</span>
      </div>
      <span className={"inline-flex items-center gap-1 font-telemetry-sm text-telemetry-sm text-primary"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-primary animate-ping"}></span> Active
              </span>
      </div>
      <div className={"p-space-sm rounded-lg bg-surface-container-low/90 backdrop-blur-md flex items-center justify-between shadow-sm"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-secondary text-telemetry-md"}>hub</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>1129 PDMA Bridge</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm font-semibold text-secondary"}>Synced</span>
      </div>
      <div className={"p-space-sm rounded-lg bg-surface-container-low/90 backdrop-blur-md flex items-center justify-between shadow-sm"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-primary-fixed-dim text-telemetry-md"}>sensors</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Mesh Voice Nodes</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm font-semibold text-primary-fixed-dim"}>8 Online</span>
      </div>
      </div>
      </section>
      {/*  50/50 Dual Workstation Grid  */}
      <section className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start"}>
      {/*  LEFT PANEL: Raw Citizen Stream & Acoustic Voice Triage (Col 6)  */}
      <div className={"lg:col-span-6 flex flex-col gap-space-md"}>
      <div className={"flex items-center justify-between px-space-xs"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-primary text-headline-sm"}>inbox</span>
      <h2 className={"font-headline-md text-headline-md text-on-surface"}>Raw Citizen Stream</h2>
      </div>
      <span className={"font-urdu-body text-body-md text-on-surface-variant"}>موصولہ اصل پیغام</span>
      </div>
      {/*  Active Inspection Card  */}
      <div className={"p-space-lg rounded-xl bg-surface-container/85 backdrop-blur-xl shadow-xl flex flex-col gap-space-md relative overflow-hidden"}>
      {/*  Lantern warm gradient accent  */}
      <div className={"absolute -top-16 -right-16 w-44 h-44 rounded-full bg-primary/10 blur-3xl pointer-events-none"}></div>
      <div className={"flex items-start justify-between gap-space-sm flex-wrap"}>
      <div className={"flex flex-col gap-1"}>
      <div className={"flex items-center gap-space-xs flex-wrap"}>
      <span className={"px-space-xs py-0.5 rounded-full bg-primary-container text-on-primary-container font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1 shadow-sm"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>bolt</span> ACTIVE REVIEW
                    </span>
      <span className={"px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
                      Cell-Mesh #PK-SMS-9941
                    </span>
      <span className={"text-on-surface-variant/50 font-telemetry-sm text-telemetry-sm"}>• 15:42 PKT</span>
      </div>
      <div className={"flex items-center gap-1.5 mt-1"}>
      <span className={"material-symbols-outlined text-secondary text-telemetry-md"}>phone_in_talk</span>
      <span className={"font-telemetry-md text-telemetry-md text-on-surface font-semibold tracking-wide"}>+92 321 8294104</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>(Neighbor's Handset / ہمسیہ کا فون)</span>
      </div>
      </div>
      <div className={"px-2.5 py-1 rounded-full bg-error-container/20 text-error flex items-center gap-1.5 shadow-[0_0_12px_rgba(229,83,61,0.2)]"}>
      <span className={"w-2 h-2 rounded-full bg-error animate-ping"}></span>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold tracking-wider uppercase"}>High Distress</span>
      </div>
      </div>
      {/*  Audio Waveform Visualizer & Player  */}
      <div className={"p-space-md rounded-lg bg-surface-container-lowest/90 flex flex-col gap-space-xs"}>
      <div className={"flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-primary text-telemetry-md"}>mic</span>
      <span>Voice Note Audio Stream (0:18s)</span>
      </div>
      <span className={"text-tertiary-container font-semibold"}>Urdu Stress Level: HIGH (88%)</span>
      </div>
      {/*  Playback controls + Dynamic SVG Waveform  */}
      <div className={"flex items-center gap-space-md pt-space-xs"}>
      <button aria-label={"Play emergency voice recording"} className={"w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-primary transition-all shadow-[0_0_14px_rgba(242,169,59,0.35)] shrink-0"} id={"playback-btn"}>
      <span className={"material-symbols-outlined text-headline-sm"}>play_arrow</span>
      </button>
      <div className={"flex-1 flex flex-col gap-1"}>
      {/*  Waveform bars representation using vector graphic  */}
      <div className={"h-9 w-full flex items-center gap-1 px-1"}>
      <span className={"w-1 h-3 rounded-full bg-secondary/40"}></span>
      <span className={"w-1 h-4 rounded-full bg-secondary/60"}></span>
      <span className={"w-1 h-6 rounded-full bg-secondary/80"}></span>
      <span className={"w-1 h-8 rounded-full bg-primary animate-pulse"}></span>
      <span className={"w-1 h-5 rounded-full bg-primary"}></span>
      <span className={"w-1 h-7 rounded-full bg-primary"}></span>
      <span className={"w-1 h-9 rounded-full bg-error"}></span>
      <span className={"w-1 h-8 rounded-full bg-error"}></span>
      <span className={"w-1 h-6 rounded-full bg-tertiary-container"}></span>
      <span className={"w-1 h-7 rounded-full bg-primary"}></span>
      <span className={"w-1 h-4 rounded-full bg-secondary/80"}></span>
      <span className={"w-1 h-5 rounded-full bg-secondary/60"}></span>
      <span className={"w-1 h-8 rounded-full bg-primary"}></span>
      <span className={"w-1 h-7 rounded-full bg-error animate-pulse"}></span>
      <span className={"w-1 h-5 rounded-full bg-tertiary"}></span>
      <span className={"w-1 h-6 rounded-full bg-secondary"}></span>
      <span className={"w-1 h-3 rounded-full bg-secondary/50"}></span>
      <span className={"w-1 h-2 rounded-full bg-secondary/30"}></span>
      <span className={"w-1 h-4 rounded-full bg-secondary/40"}></span>
      <span className={"w-1 h-7 rounded-full bg-primary/70"}></span>
      <span className={"w-1 h-5 rounded-full bg-secondary/50"}></span>
      <span className={"w-1 h-3 rounded-full bg-secondary/30"}></span>
      </div>
      <div className={"flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant/70 px-1"}>
      <span>00:07</span>
      <span>00:18</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Raw Transcriptions (Roman Urdu & Urdu)  */}
      <div className={"flex flex-col gap-space-sm"}>
      <div className={"flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container-high/60"}>
      <div className={"flex items-center justify-between text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <span className={"uppercase tracking-wider"}>Raw Roman Urdu Verbatim (Input)</span>
      <span className={"text-primary font-mono text-telemetry-sm"}>Latin-PK</span>
      </div>
      <p className={"font-body-md text-body-md text-on-surface font-medium leading-relaxed select-all"}>
                    “Lyari mein pani ghar mein aa gaya, buzurg ammi akeli hain, unki saans ki dawai aur oxygen khatam ho rahi hai. Main road block hai koi madad bhejo foran!”
                  </p>
      </div>
      <div className={"flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container-high/60 text-right"}>
      <div className={"flex items-center justify-between text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <span className={"text-secondary font-mono text-telemetry-sm"}>STT-UR-Naskh</span>
      <span className={"uppercase tracking-wider"}>اصل اردو متن (ترجمہ و تصحیح)</span>
      </div>
      <p className={"font-urdu-headline text-urdu-headline text-primary-fixed leading-loose tracking-wide select-all"} dir={"rtl"}>
                    ”لیاری میں پانی گھر میں آ گیا، بزرگ امی اکیلی ہیں، ان کی سانس کی دوائی اور آکسیجن ختم ہو رہی ہے۔ مین روڈ بلاک ہے کوئی مدد بھیجو فوراً!“
                  </p>
      </div>
      </div>
      </div>
      {/*  Pending Incoming Stream Queue  */}
      <div className={"flex flex-col gap-space-xs mt-space-xs"}>
      <div className={"flex items-center justify-between px-space-xs"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>Incoming Queue Stream (Next in Line)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Auto-sorting by Urgency</span>
      </div>
      {/*  Queue Item 1  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer flex items-center justify-between gap-space-sm shadow-sm group"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-8 h-8 rounded-lg bg-error-container/20 text-error flex items-center justify-center shrink-0"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>flood</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-headline-sm text-body-sm text-on-surface font-semibold truncate"}>Malir Nadi pul doob gaya hai, 4 bachay chat par...</span>
      <span className={"px-1.5 py-0.2 rounded bg-error/20 text-error font-telemetry-sm text-telemetry-sm shrink-0"}>96.8 Risk</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>WhatsApp • +92 300 2489110 • 2m ago</span>
      </div>
      </div>
      <span className={"material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-headline-sm"}>chevron_right</span>
      </div>
      {/*  Queue Item 2  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer flex items-center justify-between gap-space-sm shadow-sm group"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-8 h-8 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>medical_services</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-headline-sm text-body-sm text-on-surface font-semibold truncate"}>Korangi Sector 2: Dialysis patient water entered 2 feet...</span>
      <span className={"px-1.5 py-0.2 rounded bg-primary-container/20 text-primary font-telemetry-sm text-telemetry-sm shrink-0"}>91.2 Risk</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Mesh Voice Note • Node #03 • 4m ago</span>
      </div>
      </div>
      <span className={"material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-headline-sm"}>chevron_right</span>
      </div>
      {/*  Queue Item 3  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer flex items-center justify-between gap-space-sm shadow-sm group"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-8 h-8 rounded-lg bg-error-container/20 text-error flex items-center justify-center shrink-0"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>sailing</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-headline-sm text-body-sm text-on-surface font-semibold truncate"}>Keamari: Boat required for pregnant lady in labor...</span>
      <span className={"px-1.5 py-0.2 rounded bg-error/20 text-error font-telemetry-sm text-telemetry-sm shrink-0"}>99.1 Risk</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>1129 PDMA Bridge • Call ID #4819 • 6m ago</span>
      </div>
      </div>
      <span className={"material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-headline-sm"}>chevron_right</span>
      </div>
      {/*  Queue Item 4  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer flex items-center justify-between gap-space-sm shadow-sm group"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-8 h-8 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>inventory_2</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-headline-sm text-body-sm text-on-surface font-semibold truncate"}>Gulshan block 13: Solar power backup working, need food packs</span>
      <span className={"px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant font-telemetry-sm text-telemetry-sm shrink-0"}>48.0 Safe</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>SMS Cell-Mesh • +92 333 9128033 • 9m ago</span>
      </div>
      </div>
      <span className={"material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-headline-sm"}>chevron_right</span>
      </div>
      </div>
      </div>
      {/*  RIGHT PANEL: Algorithmic Entity Extraction & Action Triage (Col 6)  */}
      <div className={"lg:col-span-6 flex flex-col gap-space-md"}>
      <div className={"flex items-center justify-between px-space-xs"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-secondary text-headline-sm"}>neurology</span>
      <h2 className={"font-headline-md text-headline-md text-on-surface"}>Algorithmic Entity Extraction &amp; Triage</h2>
      </div>
      <span className={"font-urdu-body text-body-md text-on-surface-variant"}>اخذ کردہ تفصیلات</span>
      </div>
      {/*  Extracted Fields Glass Panel  */}
      <div className={"p-space-lg rounded-xl bg-surface-container/85 backdrop-blur-xl shadow-xl flex flex-col gap-space-md"}>
      {/*  Composite Urgency Score Ribbon  */}
      <div className={"p-space-md rounded-lg bg-error-container/25 text-on-error-container flex items-center justify-between shadow-[0_0_16px_rgba(229,83,61,0.2)]"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"material-symbols-outlined text-error text-headline-md animate-pulse"}>crisis_alert</span>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-headline-sm text-headline-sm text-error font-bold"}>TIER 1: LIFE THREAT</span>
      <span className={"font-urdu-headline text-body-sm text-error font-bold"}>فوری ترجیح</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-error/90"}>Elderly solitary citizen, rapid water level escalation &amp; oxygen deficiency</span>
      </div>
      </div>
      <div className={"flex flex-col items-end"}>
      <span className={"font-telemetry-lg text-telemetry-lg font-black text-error"}>98.4</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error/80 uppercase"}>Risk Index</span>
      </div>
      </div>
      {/*  Entity Extraction Grid  */}
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-sm"}>
      {/*  Person/Subject  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-high/70 flex flex-col justify-between gap-1"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-secondary"}>person</span> Subject / فرد
                    </span>
      <span className={"px-1.5 py-0.2 rounded bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm"}>94% Conf</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>Fatima Bibi (Elderly Mother)</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>بزرگ والدہ (شناخت میچ)</span>
      </div>
      </div>
      {/*  Basin & Geolocation  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-high/70 flex flex-col justify-between gap-1"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-primary"}>pin_drop</span> Geolocation / علاقہ
                    </span>
      <span className={"px-1.5 py-0.2 rounded bg-primary-container/20 text-primary font-telemetry-sm text-telemetry-sm"}>89% Geo-Coded</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>Lyari Sector 4-B (Gul Mohd Lane)</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>لیاری سیکٹر 4-B، گل محمد لین</span>
      </div>
      </div>
      {/*  Core Medical Need  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-high/70 flex flex-col justify-between gap-1 md:col-span-2"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-error"}>oxygen_saturation</span> Primary Need / فوری ضرورت
                    </span>
      <span className={"px-1.5 py-0.2 rounded bg-error-container/20 text-error font-telemetry-sm text-telemetry-sm"}>97% Critical</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-error"}>Respiratory Distress + O2 Cylinder Depleted + Evac Boat</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>سانس کی تکلیف، آکسیجن سلنڈر کا خاتمہ اور ہنگامی انخلاء</span>
      </div>
      </div>
      {/*  Inundation Depth  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-high/70 flex flex-col justify-between gap-1"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-secondary"}>water</span> Water Depth / پانی کی سطح
                    </span>
      <span className={"px-1.5 py-0.2 rounded bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm"}>82% Est</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>+1.2m Rising (Ground Flooded)</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>۱.۲ میٹر چڑھتا ہوا پانی، گراؤنڈ فلور زیرِ آب</span>
      </div>
      </div>
      {/*  Mobility Profile  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-high/70 flex flex-col justify-between gap-1"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-tertiary-container"}>accessible</span> Mobility / نقل و حرکت
                    </span>
      <span className={"px-1.5 py-0.2 rounded bg-primary-container/20 text-primary font-telemetry-sm text-telemetry-sm"}>95% Conf</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>Bedridden / Living Alone</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>معذور یا بیڈریڈن / تنہا رہائش پذیر</span>
      </div>
      </div>
      </div>
      {/*  Smart AI Safety & Contradiction Audits  */}
      <div className={"flex flex-col gap-space-xs"}>
      {/*  Duplicate Match Flag  */}
      <div className={"p-space-sm rounded-lg bg-primary-container/15 text-primary flex items-start gap-space-sm shadow-sm"}>
      <span className={"material-symbols-outlined text-primary text-headline-sm shrink-0 mt-0.5"}>warning</span>
      <div className={"flex flex-col gap-0.5"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-headline-sm text-body-sm font-bold text-primary"}>Potential Duplicate Detected (89% Match)</span>
      <span className={"font-urdu-body text-telemetry-sm text-primary/80"}>ڈپلیکیٹ رپورٹ شناخت</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface"}>
                      Linked to active record <span className={"font-telemetry-sm text-telemetry-sm font-bold text-primary"}>#PK-KHI-7821</span> logged 35m ago by Field Volunteer <strong className={"text-on-surface"}>Tariq Baloch</strong> for identical GPS coordinates.
                    </p>
      </div>
      </div>
      {/*  Contradiction Resolved Flag  */}
      <div className={"p-space-sm rounded-lg bg-secondary-container/15 text-secondary flex items-start gap-space-sm shadow-sm"}>
      <span className={"material-symbols-outlined text-secondary text-headline-sm shrink-0 mt-0.5"}>auto_fix_high</span>
      <div className={"flex flex-col gap-0.5"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-headline-sm text-body-sm font-bold text-secondary"}>Contradiction Autonomously Resolved</span>
      <span className={"font-urdu-body text-telemetry-sm text-secondary/80"}>تنازع کا تصفیہ</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface"}>
                      Caller states “main road completely blocked”. Mesh satellite drone telemetry indicates Gul Muhammad Lane alleyway is accessible via inflatable rubber rescue boat 04.
                    </p>
      </div>
      </div>
      </div>
      {/*  Coordinator Human-in-the-Loop Action Bar  */}
      <div className={"flex flex-col gap-space-xs pt-space-xs"}>
      <div className={"flex items-center justify-between text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <span className={"uppercase tracking-wider"}>Operational Dispatch Decisions</span>
      <span>Human-in-the-Loop Safeguard</span>
      </div>
      {/*  Primary Actions  */}
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-sm"}>
      {/*  Merge duplicate action (Hero CTA)  */}
      <button className={"px-space-md py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,169,59,0.35)] hover:bg-primary transition-all active:scale-[0.98]"}>
      <span className={"material-symbols-outlined text-headline-sm"}>call_merge</span>
      <span>Merge with Case #PK-KHI-7821</span>
      <span className={"font-urdu-body text-telemetry-sm font-normal"}>/ کیس میں ضم کریں</span>
      </button>
      {/*  Approve as fresh standalone case  */}
      <button className={"px-space-md py-space-sm rounded-xl bg-surface-container-high text-secondary hover:bg-surface-bright transition-all font-headline-sm text-body-sm font-semibold flex items-center justify-center gap-2 shadow-sm"}>
      <span className={"material-symbols-outlined text-headline-sm"}>add_task</span>
      <span>Approve as New Case</span>
      <span className={"font-urdu-body text-telemetry-sm font-normal"}>/ نیا کیس بنائیں</span>
      </button>
      </div>
      {/*  Secondary Actions Row  */}
      <div className={"flex items-center gap-space-xs flex-wrap pt-1"}>
      <button className={"px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-all font-headline-sm text-body-sm flex items-center gap-1.5"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>edit_note</span>
      <span>Edit Fields / ترمیم</span>
      </button>
      <button className={"px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-secondary-fixed transition-all font-headline-sm text-body-sm flex items-center gap-1.5"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>support_agent</span>
      <span>Send Field Verifier / تصدیق</span>
      </button>
      <button className={"px-space-sm py-1.5 rounded-lg bg-error-container/20 text-error hover:bg-error-container/30 transition-all font-headline-sm text-body-sm flex items-center gap-1.5 ml-auto"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>block</span>
      <span>Spam / False Alarm</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/*  Ground-Truth Realtime Intake Telemetry & Historical Trends  */}
      <section className={"grid grid-cols-1 md:grid-cols-3 gap-space-md"}>
      {/*  Visual Channel Distribution Card  */}
      <div className={"p-space-md rounded-xl bg-surface-container-low/90 backdrop-blur-md flex flex-col gap-space-sm shadow-sm"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>Intake Sources (Past 60m)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>648 Total</span>
      </div>
      {/*  Custom Inline SVG Donut / Segment Chart  */}
      <div className={"flex items-center gap-space-md py-1"}>
      <svg className={"w-20 h-20 -rotate-90 shrink-0"} viewBox={"0 0 36 36"}>
      {/*  Background Track  */}
      <path className={"text-surface-container-high"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} fill={"none"} stroke={"currentColor"} strokeWidth={"3.5"}></path>
      {/*  SMS Segment (45%)  */}
      <path className={"text-primary"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} fill={"none"} stroke={"currentColor"} strokeDasharray={"45, 100"} strokeLinecap={"round"} strokeWidth={"3.5"}></path>
      {/*  WhatsApp Segment (35%)  */}
      <path className={"text-secondary"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} fill={"none"} stroke={"currentColor"} strokeDasharray={"35, 100"} strokeDashoffset={"-45"} strokeLinecap={"round"} strokeWidth={"3.5"}></path>
      {/*  Mesh & 1129 Segment (20%)  */}
      <path className={"text-tertiary-container"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} fill={"none"} stroke={"currentColor"} strokeDasharray={"20, 100"} strokeDashoffset={"-80"} strokeLinecap={"round"} strokeWidth={"3.5"}></path>
      </svg>
      <div className={"flex flex-col gap-1 w-full font-telemetry-sm text-telemetry-sm"}>
      <div className={"flex items-center justify-between text-on-surface"}>
      <span className={"flex items-center gap-1.5"}><span className={"w-2 h-2 rounded-full bg-primary"}></span> SMS Gateway</span>
      <span className={"font-bold"}>45% (291)</span>
      </div>
      <div className={"flex items-center justify-between text-on-surface"}>
      <span className={"flex items-center gap-1.5"}><span className={"w-2 h-2 rounded-full bg-secondary"}></span> WhatsApp Bot</span>
      <span className={"font-bold"}>35% (227)</span>
      </div>
      <div className={"flex items-center justify-between text-on-surface"}>
      <span className={"flex items-center gap-1.5"}><span className={"w-2 h-2 rounded-full bg-tertiary-container"}></span> PDMA 1129 / Voice</span>
      <span className={"font-bold"}>20% (130)</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Acoustic Dialect Identification  */}
      <div className={"p-space-md rounded-xl bg-surface-container-low/90 backdrop-blur-md flex flex-col justify-between gap-space-sm shadow-sm"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>Dialect &amp; NLP Accuracy</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>زبان کا توازن</span>
      </div>
      <div className={"flex flex-col gap-2"}>
      <div className={"flex flex-col gap-1"}>
      <div className={"flex justify-between font-telemetry-sm text-telemetry-sm"}>
      <span className={"text-on-surface"}>Karachi Urban Urdu (اردو)</span>
      <span className={"text-secondary font-bold"}>96.2% Precision</span>
      </div>
      <div className={"w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden"}>
      <div className={"bg-secondary h-full rounded-full"} style={{ width: "96.2%" }}></div>
      </div>
      </div>
      <div className={"flex flex-col gap-1"}>
      <div className={"flex justify-between font-telemetry-sm text-telemetry-sm"}>
      <span className={"text-on-surface"}>Roman Urdu Phonetic Transcripts</span>
      <span className={"text-primary font-bold"}>91.8% Precision</span>
      </div>
      <div className={"w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden"}>
      <div className={"bg-primary h-full rounded-full"} style={{ width: "91.8%" }}></div>
      </div>
      </div>
      <div className={"flex justify-between items-center pt-1 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span>Active Vocabulary: 34,200 lemmas</span>
      <span className={"text-secondary"}>Low Latency Mode</span>
      </div>
      </div>
      </div>
      {/*  Rapid Dispatch Link Indicator  */}
      <div className={"p-space-md rounded-xl bg-surface-container-low/90 backdrop-blur-md flex flex-col justify-between gap-space-sm shadow-sm"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>Assigned Quick-Fleet</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary"}>LYARI ZONE 04</span>
      </div>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0"}>
      <span className={"material-symbols-outlined text-primary text-headline-md"}>directions_boat</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-bold text-on-surface"}>Rescue Boat Unit Alpha-4</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Captain: Saeed Ullah (Cell-Mesh #08)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-semibold"}>ETA to Lyari Sec 4-B: 00:08:14</span>
      </div>
      </div>
      <div className={"flex items-center justify-between pt-1 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span>O2 Equipment: Installed</span>
      <span className={"text-primary-fixed-dim"}>Standby for Human Confirmation</span>
      </div>
      </div>
      </section>
      {/*  Interactive Audio Mock Script  */}

      </div>
  )
}
