import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'
import LiveBoard from '../components/LiveBoard'

export default function DispatchPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("DispatchPage", nav)
  return (
    <div className={"bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen"} {...bind}>
      <LiveBoard variant="dispatch" />
{/*  TOP CONSOLE CONTROLS & KPI TELEMETRY  */}
      <section className={"flex flex-col gap-space-md"}>
      {/*  Header Block  */}
      <div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-md"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-space-xs font-telemetry-sm text-telemetry-sm text-secondary uppercase tracking-wider"}>
      <span className={"inline-block w-2 h-2 rounded-full bg-secondary animate-ping"}></span>
      <span>Adaptive Algorithmic Dispatch Engine</span>
      <span className={"text-outline-variant"}>•</span>
      <span className={"font-urdu-body text-telemetry-sm text-secondary"}>خودکار وسائل کی روانگی اور تعیناتی نظام</span>
      </div>
      <h1 className={"font-headline-lg text-headline-lg text-primary tracking-tight mt-1 flex flex-wrap items-baseline gap-x-space-sm"}>
      <span>Intelligent Resource Dispatch &amp; Assignment Console</span>
      <span className={"font-urdu-headline text-urdu-headline text-primary-container font-bold"}>وسائل کی ذہین تقسیم و منظوری</span>
      </h1>
      <p className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs mt-0.5"}>
      <span>Multi-variable harmonic routing with active human-in-the-loop audit</span>
      <span>•</span>
      <span className={"font-telemetry-sm text-primary"}>Next auto-recompute in 02:45</span>
      <span>•</span>
      <span className={"font-urdu-body text-body-sm text-on-surface-variant"}>الگورتھمک روٹنگ، مساوات پر مبنی تحفظ اور انسانی توثیق</span>
      </p>
      </div>
      {/*  Action Button Dock  */}
      <div className={"flex flex-wrap items-center gap-space-xs"}>
      <button className={"px-space-md py-space-xs rounded-lg bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm transition-all shadow-sm flex items-center gap-space-xs"} id={"btnPinAll"}>
      <span className={"material-symbols-outlined text-body-lg text-secondary"}>push_pin</span>
      <span>Pin All</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>سب پن کریں</span>
      </button>
      <button className={"px-space-md py-space-xs rounded-lg bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm transition-all shadow-sm flex items-center gap-space-xs"} id={"btnRecompute"}>
      <span className={"material-symbols-outlined text-body-lg text-primary"} id={"recomputeIcon"}>refresh</span>
      <span>Recompute</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>دوبارہ تخمینہ</span>
      </button>
      <button className={"px-space-md py-space-xs rounded-lg bg-error-container/30 hover:bg-error-container/50 text-error font-headline-sm text-body-sm transition-all shadow-sm flex items-center gap-space-xs"} data-action="document.getElementById('modalCloseRoad').classList.remove('hidden')" data-args={"[]"}>
      <span className={"material-symbols-outlined text-body-lg text-error"}>warning</span>
      <span>Close Road</span>
      <span className={"font-urdu-body text-telemetry-sm text-error"}>سڑک بند کریں</span>
      </button>
      <button className={"px-space-lg py-space-xs rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-[0_0_24px_rgba(242,169,59,0.35)] hover:shadow-[0_0_32px_rgba(242,169,59,0.55)] transition-all flex items-center gap-space-xs"} data-action="document.getElementById('modalApproveAll').classList.remove('hidden')" data-args={"[]"}>
      <span className={"material-symbols-outlined text-body-lg"} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
      <span>Approve All (5)</span>
      <span className={"font-urdu-body text-body-sm font-semibold"}>تمام منظور کریں</span>
      </button>
      </div>
      </div>
      {/*  Telemetry Strip (Key Operational Vectors)  */}
      <div className={"grid grid-cols-2 md:grid-cols-4 gap-space-sm"}>
      <div className={"p-space-md rounded-xl bg-surface-container/70 backdrop-blur-xl flex flex-col justify-between shadow-md"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase"}>Active Missions</span>
      <span className={"material-symbols-outlined text-secondary text-body-lg"}>local_shipping</span>
      </div>
      <div className={"flex items-baseline gap-space-xs mt-space-xs"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-on-surface"}>14</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>/ 18 fleet</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant mt-1"}>۱۴ فعال امدادی مشن جاری</span>
      </div>
      <div className={"p-space-md rounded-xl bg-surface-container/70 backdrop-blur-xl flex flex-col justify-between shadow-md"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase"}>Protected Lives</span>
      <span className={"material-symbols-outlined text-primary text-body-lg"}>shield_with_heart</span>
      </div>
      <div className={"flex items-baseline gap-space-xs mt-space-xs"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary"}>42</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>in current batch</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant mt-1"}>۴۲ شہری فوری تحفظ کے دائرے میں</span>
      </div>
      <div className={"p-space-md rounded-xl bg-surface-container/70 backdrop-blur-xl flex flex-col justify-between shadow-md"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase"}>Avg Harm Delta</span>
      <span className={"material-symbols-outlined text-secondary-fixed text-body-lg"}>trending_down</span>
      </div>
      <div className={"flex items-baseline gap-space-xs mt-space-xs"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-secondary-fixed"}>-78.2%</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Expected loss</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant mt-1"}>نقصان کے خدشے میں ۷۸٪ کمی</span>
      </div>
      <div className={"p-space-md rounded-xl bg-surface-container/70 backdrop-blur-xl flex flex-col justify-between shadow-md"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase"}>Net Delay Saved</span>
      <span className={"material-symbols-outlined text-primary-fixed text-body-lg"}>timer</span>
      </div>
      <div className={"flex items-baseline gap-space-xs mt-space-xs"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary-fixed"}>-18m</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>vs greedy route</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant mt-1"}>اوسط ۱۸ منٹ کی قابلِ قدر بچت</span>
      </div>
      </div>
      </section>
      {/*  MAIN OPERATIONAL WORKSPACE (TWO-COLUMN DESKTOP SPLIT)  */}
      <div className={"grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start"}>
      {/*  LEFT 8-COL: PROPOSED TRIAGE ASSIGNMENTS  */}
      <div className={"xl:col-span-8 flex flex-col gap-space-md"}>
      {/*  Table Header & Explainer Card  */}
      <div className={"p-space-md rounded-xl bg-surface-container-low/90 backdrop-blur-2xl shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary"}>
      <span className={"material-symbols-outlined text-headline-sm"}>hub</span>
      </div>
      <div>
      <h2 className={"font-headline-md text-headline-sm text-on-surface font-semibold flex items-center gap-space-xs"}>
      <span>Proposed Dispatch Schedule</span>
      <span className={"text-outline-variant"}>/</span>
      <span className={"font-urdu-headline text-body-md text-primary font-bold"}>تجویز کردہ روانگی کا شیڈول</span>
      </h2>
      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>Validated against water rise rate (+8cm/hr) and battery survivability constraints</p>
      </div>
      </div>
      <div className={"flex items-center gap-space-xs bg-surface-container-high/60 p-1 rounded-lg"}>
      <button className={"px-space-sm py-0.5 rounded font-telemetry-sm text-telemetry-sm bg-primary-container text-on-primary-container font-semibold"}>Priority View</button>
      <button className={"px-space-sm py-0.5 rounded font-telemetry-sm text-telemetry-sm text-on-surface-variant hover:text-on-surface transition-colors"}>By Asset Class</button>
      </div>
      </div>
      {/*  ASSIGNMENT ROW 1 (CRITICAL FATIMA BIBI)  */}
      <div className={"p-space-lg rounded-xl bg-surface-container-low/95 backdrop-blur-2xl shadow-md hover:shadow-xl transition-all flex flex-col gap-space-md"}>
      {/*  Top Metadata & Urgency Badges  */}
      <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"px-space-sm py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm font-semibold flex items-center gap-1"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span>
      <span>Tier 1 Critical</span>
      <span className={"text-error/60"}>/</span>
      <span className={"font-urdu-body text-telemetry-sm text-error"}>درجہ ۱: انتہائی نازک</span>
      </span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ID: #PK-LY-041</span>
      <span className={"text-outline-variant"}>•</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Ranks #1 of 41 cases</span>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ETA:</span>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>12 min</span>
      <span className={"px-space-xs py-0.5 rounded bg-surface-container-high text-secondary font-telemetry-sm text-telemetry-sm"}>Optimal Vector</span>
      </div>
      </div>
      {/*  Person, Needs & Fleet Assignment Matrix  */}
      <div className={"grid grid-cols-1 md:grid-cols-12 gap-space-md"}>
      <div className={"md:col-span-5 flex flex-col"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Fatima Bibi (فاطمہ بی بی)</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5"}>
      <span className={"material-symbols-outlined text-telemetry-md text-error"}>location_on</span>
      <span>Lyari Sector 4-B, Moosa Lane • Headcount: 4</span>
      </span>
      <div className={"flex items-center gap-space-xs mt-space-xs"}>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-telemetry-sm text-telemetry-sm"}>⚡ O2 Dependent</span>
      <span className={"px-2 py-0.5 rounded bg-error-container/40 text-error font-telemetry-sm text-telemetry-sm"}>Water +1.8m</span>
      </div>
      </div>
      <div className={"md:col-span-7 flex flex-col bg-surface-container/60 p-space-sm rounded-lg"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-semibold uppercase"}>Allocated Asset &amp; Payload</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Hull #IB-04</span>
      </div>
      <div className={"font-headline-sm text-body-lg text-primary font-semibold mt-0.5"}>
                    Inflatable Heavy Boat 04 + Portable O2 Generator
                  </div>
      <div className={"flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant mt-space-xs"}>
      <span>Crew: 3 Tactical Medics (Sindh Rescue 1122)</span>
      <span className={"text-secondary-fixed"}>Fuel: 84% • O2 Cap: 4h</span>
      </div>
      </div>
      </div>
      {/*  Rationale & Transparent Trade-off Box  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-lowest/80 flex flex-col gap-space-xs"}>
      <div className={"flex items-start gap-space-xs font-body-sm text-body-sm text-on-surface"}>
      <span className={"material-symbols-outlined text-primary text-body-lg mt-0.5"}>psychology</span>
      <div>
      <span className={"font-semibold text-primary"}>Algorithmic Rationale:</span>
      <span>Fatima Bibi cannot self-evacuate; primary oxygen concentrator depleted, surge +1.8m in narrow alleyway prevents vehicle access. Life-saving probability jumps from 14% to 92% if reached within 15 min.</span>
      <div className={"font-urdu-body text-body-sm text-on-surface-variant mt-1"} dir={"rtl"}>
                      فاطمہ بی بی خود محفوظ مقام تک نہیں جا سکتیں، آکسیجن بیٹریاں ختم ہونے کو ہیں اور گلی میں پانی ۱.۸ میٹر تک بلند ہو چکا ہے۔ فوری کشتی اور آکسیجن یونٹ کی لازمی ضرورت ہے۔
                    </div>
      </div>
      </div>
      <div className={"flex items-center gap-space-xs font-telemetry-sm text-telemetry-sm text-tertiary-container bg-on-tertiary/20 px-space-sm py-1 rounded"}>
      <span className={"material-symbols-outlined text-telemetry-md text-tertiary"}>balance</span>
      <span><strong>Trade-off Audit:</strong> This dispatch diverts IB-04, delaying 2 lower-tier safe shelter evacuations in Lyari by 8 minutes. Overall community harm reduced: <strong>98.4 → 14.2</strong>.</span>
      </div>
      </div>
      {/*  Row Bottom Actions  */}
      <div className={"flex items-center justify-between pt-space-xs"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"px-space-sm py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm font-semibold flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>push_pin</span>
      <span>Pinned Assignment</span>
      </span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>مستقل منتخب شدہ</span>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-telemetry-sm transition-colors"}>
                    Override Asset
                  </button>
      <button className={"px-space-sm py-1 rounded bg-secondary-container/30 hover:bg-secondary-container/50 text-secondary font-headline-sm text-telemetry-sm transition-colors flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>alt_route</span>
      <span>Telemetry Map</span>
      </button>
      </div>
      </div>
      </div>
      {/*  ASSIGNMENT ROW 2 (UNKNOWN EXPOSURE SLATE MRS. KHAN)  */}
      <div className={"p-space-lg rounded-xl bg-surface-container-low/95 backdrop-blur-2xl shadow-md hover:shadow-xl transition-all flex flex-col gap-space-md"}>
      <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"px-space-sm py-0.5 rounded-full bg-surface-variant text-on-surface-variant font-telemetry-sm text-telemetry-sm font-semibold flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-on-surface-variant"}>device_unknown</span>
      <span>Default High Exposure</span>
      <span className={"text-outline-variant"}>/</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>غیر مصدقہ ہنگامی کیفیت</span>
      </span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ID: #PK-KG-109</span>
      <span className={"text-outline-variant"}>•</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary"}>Unchecked Comorbidity Guard</span>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ETA:</span>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>24 min</span>
      </div>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-12 gap-space-md"}>
      <div className={"md:col-span-5 flex flex-col"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Mrs. Tahira Khan (طاہرہ خان)</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5"}>
      <span className={"material-symbols-outlined text-telemetry-md text-primary"}>location_on</span>
      <span>Korangi Industrial Edge, Sector 7-A • Age: 62</span>
      </span>
      <div className={"flex items-center gap-space-xs mt-space-xs"}>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-telemetry-sm text-telemetry-sm"}>Dialysis Missed (36h)</span>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>No Uplink: 3h 12m</span>
      </div>
      </div>
      <div className={"md:col-span-7 flex flex-col bg-surface-container/60 p-space-sm rounded-lg"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-semibold uppercase"}>Allocated Asset &amp; Payload</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Unit #SC-07</span>
      </div>
      <div className={"font-headline-sm text-body-lg text-primary font-semibold mt-0.5"}>
                    Scout 4x4 Amphibious Team 07 + Paramedic
                  </div>
      <div className={"flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant mt-space-xs"}>
      <span>Crew: 2 Rangers + 1 ER Nurse</span>
      <span className={"text-secondary-fixed"}>Winch Equip • Sat Uplink</span>
      </div>
      </div>
      </div>
      <div className={"p-space-sm rounded-lg bg-surface-container-lowest/80 flex flex-col gap-space-xs"}>
      <div className={"flex items-start gap-space-xs font-body-sm text-body-sm text-on-surface"}>
      <span className={"material-symbols-outlined text-primary text-body-lg mt-0.5"}>psychology</span>
      <div>
      <span className={"font-semibold text-primary"}>Algorithmic Rationale:</span>
      <span>Zero telemetry for 192 minutes. Under ethical dispatch protocols, silent medical vulnerable nodes are assigned Tier-1 parity to avoid catastrophic delayed discovery.</span>
      <div className={"font-urdu-body text-body-sm text-on-surface-variant mt-1"} dir={"rtl"}>
                      طاہرہ خان سے پچھلے ۳ گھنٹوں سے رابطہ منقطع ہے۔ ڈائیلاسز کا وقت گزر جانے کے سبب حفاظتی پالیسی کے تحت فوری ایمفیبین اسکواڈ روانہ کیا گیا ہے۔
                    </div>
      </div>
      </div>
      <div className={"flex items-center gap-space-xs font-telemetry-sm text-telemetry-sm text-secondary bg-surface-container px-space-sm py-1 rounded"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>alt_route</span>
      <span><strong>Trade-off Audit:</strong> Diverts SC-07 from general Korangi perimeter surveillance. Compensated via drone recon grid #DR-02.</span>
      </div>
      </div>
      <div className={"flex items-center justify-between pt-space-xs"}>
      <div className={"flex items-center gap-space-xs"}>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-telemetry-sm flex items-center gap-1 transition-colors"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>push_pin</span>
      <span>Pin Decision</span>
      </button>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>فیصلہ محفوظ کریں</span>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-telemetry-sm transition-colors"}>
                    Reassign Fleet
                  </button>
      <button className={"px-space-sm py-1 rounded bg-secondary-container/30 hover:bg-secondary-container/50 text-secondary font-headline-sm text-telemetry-sm transition-colors"}>
                    Verify Uplink
                  </button>
      </div>
      </div>
      </div>
      {/*  ASSIGNMENT ROW 3 (BILAL AHMED, MALIR RIVERBANK)  */}
      <div className={"p-space-lg rounded-xl bg-surface-container-low/95 backdrop-blur-2xl shadow-md hover:shadow-xl transition-all flex flex-col gap-space-md"}>
      <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"px-space-sm py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm font-semibold flex items-center gap-1"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span>
      <span>Tier 1 Critical</span>
      <span className={"text-error/60"}>/</span>
      <span className={"font-urdu-body text-telemetry-sm text-error"}>درجہ ۱: انتہائی نازک</span>
      </span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ID: #PK-ML-088</span>
      <span className={"text-outline-variant"}>•</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Zero Cross-Delay</span>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ETA:</span>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>16 min</span>
      </div>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-12 gap-space-md"}>
      <div className={"md:col-span-5 flex flex-col"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Bilal Ahmed (بلال احمد)</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5"}>
      <span className={"material-symbols-outlined text-telemetry-md text-error"}>location_on</span>
      <span>Malir Riverbank Lower Basti • 1st Floor Flat</span>
      </span>
      <div className={"flex items-center gap-space-xs mt-space-xs"}>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-telemetry-sm text-telemetry-sm"}>Paraplegic (Non-ambulatory)</span>
      <span className={"px-2 py-0.5 rounded bg-error-container/40 text-error font-telemetry-sm text-telemetry-sm"}>Doorway Water +1.2m</span>
      </div>
      </div>
      <div className={"md:col-span-7 flex flex-col bg-surface-container/60 p-space-sm rounded-lg"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-semibold uppercase"}>Allocated Asset &amp; Payload</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Unit #TB-02</span>
      </div>
      <div className={"font-headline-sm text-body-lg text-primary font-semibold mt-0.5"}>
                    Tactical Stretcher Boat 02 + Hydraulic Lift
                  </div>
      <div className={"flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant mt-space-xs"}>
      <span>Crew: 4 Water Rescue Specialists</span>
      <span className={"text-secondary-fixed"}>Spinal Board Ready</span>
      </div>
      </div>
      </div>
      <div className={"p-space-sm rounded-lg bg-surface-container-lowest/80 flex flex-col gap-space-xs"}>
      <div className={"flex items-start gap-space-xs font-body-sm text-body-sm text-on-surface"}>
      <span className={"material-symbols-outlined text-primary text-body-lg mt-0.5"}>psychology</span>
      <div>
      <span className={"font-semibold text-primary"}>Algorithmic Rationale:</span>
      <span>Caretaker unable to lift resident over rising threshold. Malir spillway velocity +2.4 knots prohibits normal rubber dinghies; TB-02 holds jet-propulsion clearance. Harm index drops 94.2 → 22.0.</span>
      </div>
      </div>
      </div>
      <div className={"flex items-center justify-between pt-space-xs"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"px-space-sm py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm font-semibold flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>check_circle</span>
      <span>Pre-Approved by Field Lead</span>
      </span>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <button className={"px-space-sm py-1 rounded bg-secondary-container/30 hover:bg-secondary-container/50 text-secondary font-headline-sm text-telemetry-sm transition-colors"}>
                    Dispatch Immediately
                  </button>
      </div>
      </div>
      </div>
      {/*  ASSIGNMENT ROW 4 (TARIQ MEHMOOD, GULSHAN)  */}
      <div className={"p-space-lg rounded-xl bg-surface-container-low/95 backdrop-blur-2xl shadow-md hover:shadow-xl transition-all flex flex-col gap-space-md"}>
      <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"px-space-sm py-0.5 rounded-full bg-primary-container/20 text-primary font-telemetry-sm text-telemetry-sm font-semibold flex items-center gap-1"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-primary"}></span>
      <span>Tier 2 Urgent</span>
      <span className={"text-primary/60"}>/</span>
      <span className={"font-urdu-body text-telemetry-sm text-primary"}>درجہ ۲: فوری ترجیح</span>
      </span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ID: #PK-GI-033</span>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ETA:</span>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>31 min</span>
      <span className={"text-tertiary font-telemetry-sm text-telemetry-sm"}>(+11m delay due to Hub bypass)</span>
      </div>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-12 gap-space-md"}>
      <div className={"md:col-span-5 flex flex-col"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Tariq Mehmood (طارق محمود)</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5"}>
      <span className={"material-symbols-outlined text-telemetry-md text-primary"}>location_on</span>
      <span>Gulshan-e-Iqbal Block 7 • Family of 6</span>
      </span>
      <div className={"flex items-center gap-space-xs mt-space-xs"}>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-telemetry-sm text-telemetry-sm"}>3rd Trimester Pregnancy</span>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>Ground Floor Submerged</span>
      </div>
      </div>
      <div className={"md:col-span-7 flex flex-col bg-surface-container/60 p-space-sm rounded-lg"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-semibold uppercase"}>Allocated Asset &amp; Payload</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Unit #RV-09</span>
      </div>
      <div className={"font-headline-sm text-body-lg text-primary font-semibold mt-0.5"}>
                    High-Clearance Rescue Van 09 + Evacuation Pod
                  </div>
      <div className={"flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant mt-space-xs"}>
      <span>Crew: 2 EMTs + Community Volunteer</span>
      <span className={"text-secondary-fixed"}>Maternity Kit Deployed</span>
      </div>
      </div>
      </div>
      <div className={"p-space-sm rounded-lg bg-surface-container-lowest/80 flex flex-col gap-space-xs"}>
      <div className={"flex items-start gap-space-xs font-body-sm text-body-sm text-on-surface"}>
      <span className={"material-symbols-outlined text-primary text-body-lg mt-0.5"}>psychology</span>
      <div>
      <span className={"font-semibold text-primary"}>Algorithmic Rationale:</span>
      <span>Family moved to interior stairs. Ground floor +0.9m. Spouse requires obstetric stabilization during transport. Routing redirected away from submerged underpass. Harm index reduced: 78.5 → 18.0.</span>
      </div>
      </div>
      </div>
      <div className={"flex items-center justify-between pt-space-xs"}>
      <div className={"flex items-center gap-space-xs"}>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-telemetry-sm flex items-center gap-1 transition-colors"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>push_pin</span>
      <span>Pin Assignment</span>
      </button>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-telemetry-sm transition-colors"}>
                    View Maternity Route
                  </button>
      </div>
      </div>
      </div>
      {/*  ASSIGNMENT ROW 5 (ZUBAIR HASSAN, KEAMARI)  */}
      <div className={"p-space-lg rounded-xl bg-surface-container-low/95 backdrop-blur-2xl shadow-md hover:shadow-xl transition-all flex flex-col gap-space-md"}>
      <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"px-space-sm py-0.5 rounded-full bg-primary-container/20 text-primary font-telemetry-sm text-telemetry-sm font-semibold flex items-center gap-1"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-primary"}></span>
      <span>Tier 2 Urgent</span>
      <span className={"text-primary/60"}>/</span>
      <span className={"font-urdu-body text-telemetry-sm text-primary"}>درجہ ۲: فوری ترجیح</span>
      </span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ID: #PK-KM-014</span>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ETA:</span>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>19 min</span>
      </div>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-12 gap-space-md"}>
      <div className={"md:col-span-5 flex flex-col"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Zubair Hassan (زبیر حسن)</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5"}>
      <span className={"material-symbols-outlined text-telemetry-md text-primary"}>location_on</span>
      <span>Keamari Creekside, Gate 4 • Elderly Couple (74 &amp; 71)</span>
      </span>
      <div className={"flex items-center gap-space-xs mt-space-xs"}>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-telemetry-sm text-telemetry-sm"}>Rooftop Stranded</span>
      <span className={"px-2 py-0.5 rounded bg-primary-container/30 text-primary font-telemetry-sm text-telemetry-sm"}>Tidal Surge at 03:00</span>
      </div>
      </div>
      <div className={"md:col-span-7 flex flex-col bg-surface-container/60 p-space-sm rounded-lg"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-semibold uppercase"}>Allocated Asset &amp; Payload</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Unit #EB-06</span>
      </div>
      <div className={"font-headline-sm text-body-lg text-primary font-semibold mt-0.5"}>
                    Coastal Engine Boat 06 + High-Power Searchlight
                  </div>
      <div className={"flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant mt-space-xs"}>
      <span>Crew: 3 Maritime Responders</span>
      <span className={"text-secondary-fixed"}>Thermal Optics Installed</span>
      </div>
      </div>
      </div>
      <div className={"p-space-sm rounded-lg bg-surface-container-lowest/80 flex flex-col gap-space-xs"}>
      <div className={"flex items-start gap-space-xs font-body-sm text-body-sm text-on-surface"}>
      <span className={"material-symbols-outlined text-primary text-body-lg mt-0.5"}>psychology</span>
      <div>
      <span className={"font-semibold text-primary"}>Algorithmic Rationale:</span>
      <span>Arabian Sea high tide window opens in 78 minutes. Rooftop elevation currently safe (+3.2m), but wind gusts reaching 42 knots require high-powered hull. Harm index reduced: 72.1 → 15.4.</span>
      </div>
      </div>
      </div>
      <div className={"flex items-center justify-between pt-space-xs"}>
      <div className={"flex items-center gap-space-xs"}>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-telemetry-sm flex items-center gap-1 transition-colors"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>push_pin</span>
      <span>Pin Assignment</span>
      </button>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-telemetry-sm transition-colors"}>
                    Tidal Chart Analysis
                  </button>
      </div>
      </div>
      </div>
      </div>
      {/*  RIGHT 4-COL: TACTICAL SIDE PANELS  */}
      <div className={"xl:col-span-4 flex flex-col gap-space-md"}>
      {/*  PANEL A: PRE-POSITIONING RECOMMENDATIONS  */}
      <div className={"p-space-lg rounded-xl bg-surface-container-low/95 backdrop-blur-2xl shadow-lg flex flex-col gap-space-md"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-primary text-headline-sm"}>forward</span>
      <div className={"flex flex-col"}>
      <h3 className={"font-headline-sm text-body-md text-on-surface font-bold"}>Pre-Positioning Directives</h3>
      <span className={"font-urdu-body text-telemetry-sm text-primary -mt-1"}>پیشگی تعیناتی کی تجاویز</span>
      </div>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-telemetry-sm text-telemetry-sm font-bold"}>Predictive AI</span>
      </div>
      {/*  Directive 1  */}
      <div className={"p-space-md rounded-lg bg-surface-container/80 flex flex-col gap-space-xs"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-headline-sm text-body-sm text-on-surface font-semibold"}>Move Inflatable Boat 05</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Save 22 min</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                  Shift from Clifton Depot forward to <strong>Malir Riverbank Staging Zone</strong> ahead of the 03:00 flood crest surge.
                </p>
      <div className={"font-urdu-body text-telemetry-sm text-on-surface-variant"} dir={"rtl"}>
                  کشتی نمبر ۰۵ کو کلفٹن ڈپو سے ملیر ندی کے قریب منتقل کریں تاکہ آنے والے سیلابی ریلے سے قبل ۲۲ منٹ بچائے جا سکیں۔
                </div>
      <button className={"mt-space-xs w-full py-2 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-telemetry-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>navigation</span>
      <span>Execute Re-Position (پیشگی روانہ کریں)</span>
      </button>
      </div>
      {/*  Directive 2  */}
      <div className={"p-space-md rounded-lg bg-surface-container/80 flex flex-col gap-space-xs"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-headline-sm text-body-sm text-on-surface font-semibold"}>Stage 3 Amphibious Ambulances</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error"}>Critical Window: 35m</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                  Position units on the north rim of Korangi Crossing before the causeway overflows at projected +1.4m crest.
                </p>
      <div className={"font-urdu-body text-telemetry-sm text-on-surface-variant"} dir={"rtl"}>
                  کورنگی کراسنگ پر کازوے زیر آب آنے سے قبل ۳ ایمفیبین ایمبولینسز شمالی کنارے پر تعینات کی جائیں۔
                </div>
      <button className={"mt-space-xs w-full py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-secondary font-headline-sm text-telemetry-sm font-semibold transition-all flex items-center justify-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>check</span>
      <span>Acknowledge Directive (توثیق کریں)</span>
      </button>
      </div>
      </div>
      {/*  PANEL B: DYNAMIC ROAD-GRAPH MINI MAP & ROUTE TELEMETRY  */}
      <div className={"p-space-lg rounded-xl bg-surface-container-low/95 backdrop-blur-2xl shadow-lg flex flex-col gap-space-md"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-secondary text-headline-sm"}>alt_route</span>
      <div className={"flex flex-col"}>
      <h3 className={"font-headline-sm text-body-md text-on-surface font-bold"}>Dynamic Road-Graph Telemetry</h3>
      <span className={"font-urdu-body text-telemetry-sm text-secondary -mt-1"}>لائیو راستوں کا نقشہ و بہاؤ</span>
      </div>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-error font-semibold"}>-42% Malir Flow</span>
      </div>
      {/*  Visual Road Network Vector Schematic (Custom SVG Map View)  */}
      <div className={"relative w-full h-64 rounded-xl bg-surface-container-lowest overflow-hidden flex items-center justify-center p-2"}>
      <svg className={"w-full h-full text-outline-variant"} fill={"none"} viewBox={"0 0 400 240"} xmlns={"http://www.w3.org/2000/svg"}>
      {/*  Gridlines  */}
      <path d={"M0 40H400M0 80H400M0 120H400M0 160H400M0 200H400"} stroke={"currentColor"} strokeDasharray={"4 4"} strokeOpacity={"0.1"}></path>
      <path d={"M40 0V240M80 0V240M120 0V240M160 0V240M200 0V240M240 0V240M280 0V240M320 0V240M360 0V240"} stroke={"currentColor"} strokeDasharray={"4 4"} strokeOpacity={"0.1"}></path>
      {/*  Arabian Sea Coastline Background Indicator  */}
      <path d={"M0 210 Q 120 180 220 220 T 400 210"} fill={"none"} stroke={"#1da290"} strokeOpacity={"0.3"} strokeWidth={"2"}></path>
      <text fill={"#65d9c5"} fontFamily={"JetBrains Mono"} fontSize={"10"} opacity={"0.6"} x={"290"} y={"230"}>ARABIAN SEA COAST</text>
      {/*  Major Arteries  */}
      {/*  Shahrah-e-Faisal (Green / Clear)  */}
      <path d={"M30 60 L 160 80 L 290 110 L 380 120"} stroke={"#65d9c5"} strokeLinecap={"round"} strokeWidth={"4"}></path>
      <text fill={"#65d9c5"} fontFamily={"JetBrains Mono"} fontSize={"9"} x={"50"} y={"52"}>Shahrah-e-Faisal [CLEAR]</text>
      {/*  Lyari Expressway (Amber / Restricted)  */}
      <path d={"M40 160 L 100 120 L 170 50 L 260 20"} stroke={"#ffca85"} strokeDasharray={"6 3"} strokeLinecap={"round"} strokeWidth={"3"}></path>
      <text fill={"#ffca85"} fontFamily={"JetBrains Mono"} fontSize={"9"} x={"180"} y={"32"}>Lyari Expy [RESTRICTED]</text>
      {/*  Korangi Causeway (Red / Submerged / Pulsing)  */}
      <path className={"animate-pulse"} d={"M220 150 L 310 180"} stroke={"#ffb4ab"} strokeLinecap={"round"} strokeWidth={"6"}></path>
      <circle cx={"265"} cy={"165"} fill={"#93000a"} fillOpacity={"0.8"} r={"9"}></circle>
      <text fill={"#ffdad6"} fontFamily={"JetBrains Mono"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"} x={"260"} y={"169"}>✕</text>
      <text fill={"#ffb4ab"} fontFamily={"JetBrains Mono"} fontSize={"9"} fontWeight={"bold"} x={"278"} y={"160"}>Korangi Causeway [CLOSED]</text>
      {/*  Hub River Road (Amber / Restricted)  */}
      <path d={"M20 200 L 70 140 L 90 90"} stroke={"#f2a93b"} strokeDasharray={"4 4"} strokeLinecap={"round"} strokeWidth={"3"}></path>
      <text fill={"#f2a93b"} fontFamily={"JetBrains Mono"} fontSize={"9"} x={"25"} y={"125"}>Hub River Rd</text>
      {/*  Active Fleet Node Positions  */}
      <circle className={"animate-ping"} cx={"100"} cy={"120"} fill={"#65d9c5"} opacity={"0.6"} r={"5"}></circle>
      <circle cx={"100"} cy={"120"} fill={"#83f6e1"} r={"4"}></circle>
      <text fill={"#83f6e1"} fontFamily={"JetBrains Mono"} fontSize={"9"} x={"110"} y={"123"}>IB-04 (12m)</text>
      <circle cx={"210"} cy={"100"} fill={"#ffddb5"} r={"4"}></circle>
      <text fill={"#ffddb5"} fontFamily={"JetBrains Mono"} fontSize={"9"} x={"218"} y={"98"}>RV-09</text>
      </svg>
      </div>
      {/*  Road Status Micro-Feed  */}
      <div className={"flex flex-col gap-space-xs font-telemetry-sm text-telemetry-sm"}>
      <div className={"flex items-center justify-between p-2 rounded bg-surface-container/60"}>
      <span className={"flex items-center gap-1 text-on-surface"}>
      <span className={"w-2 h-2 rounded-full bg-error animate-pulse"}></span>
      <span>Korangi Causeway (کازوے)</span>
      </span>
      <span className={"text-error font-semibold"}>Submerged +1.4m</span>
      </div>
      <div className={"flex items-center justify-between p-2 rounded bg-surface-container/60"}>
      <span className={"flex items-center gap-1 text-on-surface"}>
      <span className={"w-2 h-2 rounded-full bg-primary"}></span>
      <span>Hub River Access Road</span>
      </span>
      <span className={"text-primary font-semibold"}>One-Lane Mud Flow</span>
      </div>
      <div className={"flex items-center justify-between p-2 rounded bg-surface-container/60"}>
      <span className={"flex items-center gap-1 text-on-surface"}>
      <span className={"w-2 h-2 rounded-full bg-secondary"}></span>
      <span>Shahrah-e-Faisal Flyovers</span>
      </span>
      <span className={"text-secondary font-semibold"}>100% Operational</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/*  MODAL: APPROVE ALL DISPATCHES  */}
      <div className={"hidden fixed inset-0 z-50 flex items-center justify-center p-space-md bg-surface-container-lowest/80 backdrop-blur-md"} id={"modalApproveAll"}>
      <div className={"w-full max-w-lg p-space-lg rounded-2xl bg-surface-container-low/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-space-md border border-primary/20"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-space-xs text-primary"}>
      <span className={"material-symbols-outlined text-headline-md"} style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Confirm Bulk Fleet Dispatch</h2>
      </div>
      <button className={"w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-on-surface"} data-action="document.getElementById('modalApproveAll').classList.add('hidden')" data-args={"[]"}>
      <span className={"material-symbols-outlined text-body-lg"}>close</span>
      </button>
      </div>
      <div className={"font-urdu-headline text-urdu-headline text-primary-container font-bold text-right"} dir={"rtl"}>
              تمام ۵ ریسکیو ٹیموں کی حتمی منظوری اور روانگی
            </div>
      <p className={"font-body-md text-body-md text-on-surface-variant"}>
              Approving this proposal will instantly commit <strong>4 tactical boats</strong> and <strong>2 high-clearance 4x4 units</strong> across Lyari, Malir, and Korangi.
            </p>
      <div className={"p-space-md rounded-xl bg-surface-container/80 flex flex-col gap-space-xs font-telemetry-sm text-telemetry-sm"}>
      <div className={"flex items-center justify-between"}>
      <span className={"text-on-surface-variant"}>Total Lives Reached:</span>
      <span className={"text-primary font-bold text-telemetry-md"}>42 Citizens</span>
      </div>
      <div className={"flex items-center justify-between"}>
      <span className={"text-on-surface-variant"}>SMS Mesh Notification:</span>
      <span className={"text-secondary font-semibold"}>Ready (Roman Urdu + Voice)</span>
      </div>
      <div className={"flex items-center justify-between"}>
      <span className={"text-on-surface-variant"}>Fleet Lockout Duration:</span>
      <span className={"text-on-surface"}>90 minutes execution window</span>
      </div>
      </div>
      <div className={"flex items-center justify-end gap-space-sm pt-space-xs"}>
      <button className={"px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm transition-colors"} data-action="document.getElementById('modalApproveAll').classList.add('hidden')" data-args={"[]"}>
                Cancel (منسوخ کریں)
              </button>
      <button className={"px-space-lg py-space-xs rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-[0_0_24px_rgba(242,169,59,0.35)] hover:shadow-[0_0_32px_rgba(242,169,59,0.55)] transition-all flex items-center gap-space-xs"} data-action="executeDispatchApproval" data-args={"[]"}>
      <span className={"material-symbols-outlined text-body-lg"}>send</span>
      <span>Broadcast &amp; Dispatch (روانہ کریں)</span>
      </button>
      </div>
      </div>
      </div>
      {/*  MODAL: CLOSE ROAD / DYNAMIC RE-ROUTING  */}
      <div className={"hidden fixed inset-0 z-50 flex items-center justify-center p-space-md bg-surface-container-lowest/80 backdrop-blur-md"} id={"modalCloseRoad"}>
      <div className={"w-full max-w-lg p-space-lg rounded-2xl bg-surface-container-low/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-space-md border border-error/30"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-space-xs text-error"}>
      <span className={"material-symbols-outlined text-headline-md"}>block</span>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Inject Infrastructure Inundation</h2>
      </div>
      <button className={"w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-on-surface"} data-action="document.getElementById('modalCloseRoad').classList.add('hidden')" data-args={"[]"}>
      <span className={"material-symbols-outlined text-body-lg"}>close</span>
      </button>
      </div>
      <div className={"font-urdu-headline text-body-lg text-error font-bold text-right"} dir={"rtl"}>
              سیلابی پانی کے باعث سڑک کی ہنگامی بندش اور فوری متبادل راستہ
            </div>
      <div className={"flex flex-col gap-space-xs"}>
      <label className={"font-headline-sm text-body-sm text-on-surface"}>Select Affected Artery:</label>
      <select className={"w-full p-space-sm rounded-lg bg-surface-container-highest text-on-surface font-body-md focus:outline-none focus:ring-1 focus:ring-primary"}>
      <option selected={true}>Korangi Causeway (Overflown at +1.4m crest)</option>
      <option>Lyari Expressway (Chakiwara Ramp Submerged)</option>
      <option>Hub River Bypass (Landslide / Mud Accumulation)</option>
      <option>Malir Halt Underpass (Drainage Failure)</option>
      </select>
      </div>
      <div className={"p-space-md rounded-xl bg-surface-container/80 flex flex-col gap-space-xs font-telemetry-sm text-telemetry-sm"}>
      <span className={"text-primary font-semibold flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-body-sm"}>calculate</span>
      <span>Automatic Graph Recalculation Impact:</span>
      </span>
      <ul className={"list-disc list-inside text-on-surface-variant flex flex-col gap-1 mt-1"}>
      <li>Diverts 3 secondary ambulance shuttles to Shahrah-e-Faisal.</li>
      <li>Adds +9 minutes transit for Korangi Sector 7-A missions.</li>
      <li>Auto-flags Mrs. Khan for amphibious transport upgrade.</li>
      </ul>
      </div>
      <div className={"flex items-center justify-end gap-space-sm pt-space-xs"}>
      <button className={"px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm transition-colors"} data-action="document.getElementById('modalCloseRoad').classList.add('hidden')" data-args={"[]"}>
                Cancel (منسوخ)
              </button>
      <button className={"px-space-lg py-space-xs rounded-lg bg-error text-on-error font-headline-sm text-body-sm font-bold shadow-[0_0_20px_rgba(229,83,61,0.4)] transition-all flex items-center gap-space-xs"} data-action="document.getElementById('modalCloseRoad').classList.add('hidden'); triggerRecalculateNotification();" data-args={"[]"}>
      <span className={"material-symbols-outlined text-body-lg"}>lock</span>
      <span>Seal Road &amp; Recompute Graph</span>
      </button>
      </div>
      </div>
      </div>
      {/*  INTERACTIVITY SCRIPT  */}

      </div>
  )
}
