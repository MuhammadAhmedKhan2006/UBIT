import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function ShelterPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("ShelterPage", nav)
  return (
    <div className={"bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container flex flex-col min-h-screen"} {...bind}>
      <header className={"fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]"}><div className={"w-full bg-secondary-container/20 px-margin py-space-xs flex items-center justify-center gap-space-xs overflow-hidden"}><span className={"w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0"}></span><p className={"font-telemetry-sm text-telemetry-sm text-secondary truncate text-center"}>Synthetic demo data, weights are expert assumptions, not validated / مصنوعی ڈیمو ڈیٹا</p></div><div className={"h-28 px-margin flex flex-col justify-between py-space-xs"}><div className={"flex items-center justify-between gap-space-sm"}><div className={"flex items-center gap-space-sm min-w-0"}><div className={"w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] shrink-0"}><span className={"material-symbols-outlined text-primary-container text-[24px]"}>local_fire_department</span></div><div className={"flex flex-col min-w-0"}><div className={"flex items-center gap-space-xs"}><span className={"font-headline-sm text-headline-sm text-on-surface tracking-tight truncate leading-tight"}>Nobody Left Behind</span></div><div className={"flex items-center gap-space-xs"}><span className={"font-urdu-body text-urdu-body text-on-surface-variant leading-none"}>کوئی پیچھے نہ رہے</span><span className={"px-1.5 py-0.5 rounded-full bg-surface-container-highest text-secondary font-telemetry-sm text-telemetry-sm tracking-wide uppercase"}>Registrar</span></div></div></div><div className={"flex items-center gap-space-xs shrink-0"}><button aria-label={"Switch Language"} className={"h-9 px-space-sm rounded-full bg-surface-container-high active:scale-95 transition-transform flex items-center justify-center gap-1 text-on-surface-variant hover:text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.15)]"} data-action="document.documentElement.dir = document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl';" data-args={"[]"} type={"button"}><span className={"font-telemetry-sm text-telemetry-sm font-bold text-primary"}>EN</span><span className={"text-outline-variant font-telemetry-sm text-telemetry-sm"}>|</span><span className={"font-urdu-body text-urdu-body leading-none text-secondary"}>اردو</span></button><div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(242,169,59,0.35)]"}><span className={"material-symbols-outlined text-on-primary text-[18px]"}>person</span></div></div></div><div className={"flex items-center justify-between gap-space-sm pb-space-xs"}><div className={"flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-high/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"}><span className={"material-symbols-outlined text-secondary text-[16px] animate-pulse"}>water_drop</span><span className={"font-telemetry-sm text-telemetry-sm text-on-surface"}>Water in <strong className={"text-secondary font-bold"}>03:42:10</strong></span><span className={"text-outline-variant font-telemetry-sm text-telemetry-sm"}>•</span><span className={"font-urdu-body text-urdu-body text-secondary leading-none text-[12px]"}>پانی 03:42:10</span></div><div className={"flex items-center gap-1.5"}><span className={"w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#65d9c5]"}></span><span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>PWA Mesh</span></div></div></div></header><main className={"flex flex-col relative w-full px-margin pt-28 pb-28 bg-surface"}><div className={"flex flex-col w-full gap-space-md text-on-surface"}>
      {/*  Facility Hero Status Card  */}
      <div className={"relative w-full rounded-xl bg-surface-container-high p-space-md overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.45)]"}>
      <div className={"absolute -right-16 -top-16 w-44 h-44 rounded-full bg-primary/10 blur-3xl pointer-events-none"}></div>
      <div className={"absolute -left-12 -bottom-12 w-36 h-36 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"}></div>
      <div className={"flex items-start justify-between gap-space-sm mb-space-sm relative z-10"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs mb-1"}>
      <span className={"px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary font-telemetry-sm text-telemetry-sm tracking-wider"}>
                  #SH-KHI-04
                </span>
      <span className={"flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm"}>
      <span className={"material-symbols-outlined text-[14px]"}>terrain</span>
                  +5.8m Safe Ground
                </span>
      </div>
      <h1 className={"font-headline-md text-headline-md text-on-surface font-bold tracking-tight truncate"}>
                Govt Boys Degree College
              </h1>
      <p className={"font-urdu-headline text-urdu-headline text-primary-fixed leading-tight pt-1"}>
                گورنمنٹ ڈگری کالج، لیاری
              </p>
      </div>
      <div className={"shrink-0 flex flex-col items-end"}>
      <div className={"px-2.5 py-1.5 rounded-full bg-emerald-950/70 text-emerald-300 shadow-[inset_0_1px_0_rgba(127,191,122,0.4)] flex items-center gap-1.5"}>
      <span className={"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}></span>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold tracking-wide uppercase"}>Active</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-emerald-400 mt-0.5"}>فعال اور گنجائش موجود</span>
      </div>
      </div>
      {/*  Quick Location Bar  */}
      <div className={"flex items-center justify-between pt-space-xs relative z-10"}>
      <div className={"flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm"}>
      <span className={"material-symbols-outlined text-primary text-[18px]"}>location_on</span>
      <span>Lyari Sector 4, Karachi</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary bg-surface-container-lowest/80 px-2.5 py-0.5 rounded-md"}>
              Zone 03 Hub
            </span>
      </div>
      </div>
      {/*  3D Tactile Occupancy Gauge & Telemetry  */}
      <div className={"w-full rounded-xl bg-surface-container p-space-md shadow-[0_8px_24px_rgba(0,0,0,0.35)]"}>
      <div className={"flex items-center justify-between mb-space-xs"}>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm uppercase tracking-wider text-on-surface-variant"}>Live Total Occupancy</span>
      <span className={"font-urdu-body text-urdu-body text-[13px] text-on-surface-variant leading-none"}>مجموعی گنجائش و موجودی</span>
      </div>
      <div className={"flex items-baseline gap-1"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary font-bold"}>342</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>/ 400</span>
      </div>
      </div>
      {/*  3D Layered Meter  */}
      <div className={"relative w-full h-5 rounded-full bg-surface-container-lowest p-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] overflow-hidden my-space-xs"}>
      <div className={"h-full rounded-full bg-gradient-to-r from-secondary-container via-primary-container to-error shadow-[0_0_12px_rgba(242,169,59,0.5)] transition-all duration-700 ease-out flex items-center justify-end pr-1.5"} style={{ width: "85.5%" }}>
      <div className={"w-2 h-2 rounded-full bg-on-primary-container/80 animate-pulse"}></div>
      </div>
      </div>
      <div className={"flex items-center justify-between text-telemetry-sm font-telemetry-sm text-on-surface-variant pt-0.5 mb-space-md"}>
      <span className={"flex items-center gap-1 text-primary"}>
      <span className={"material-symbols-outlined text-[15px]"}>warning</span>
              85.5% Full (Warning Threshold)
            </span>
      <span className={"text-error font-bold"}>58 Slots Left</span>
      </div>
      {/*  Sector Breakdown Sub-Tiles  */}
      <div className={"grid grid-cols-3 gap-space-xs"}>
      {/*  Breakdown 1  */}
      <div className={"rounded-lg bg-surface-container-high/70 p-2.5 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"}>
      <div className={"flex items-center justify-between"}>
      <span className={"material-symbols-outlined text-primary text-[18px]"}>single_bed</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error font-bold"}>18 left</span>
      </div>
      <div className={"mt-2"}>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-on-surface leading-none block"}>310</span>
      <span className={"font-body-sm text-body-sm text-[11px] text-on-surface-variant leading-tight block"}>Bed Mats</span>
      <span className={"font-urdu-body text-urdu-body text-[10px] text-outline leading-tight block truncate"}>بستر و گدے</span>
      </div>
      </div>
      {/*  Breakdown 2  */}
      <div className={"rounded-lg bg-surface-container-high/70 p-2.5 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"}>
      <div className={"flex items-center justify-between"}>
      <span className={"material-symbols-outlined text-secondary text-[18px]"}>family_restroom</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error font-bold"}>93%</span>
      </div>
      <div className={"mt-2"}>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-on-surface leading-none block"}>140/150</span>
      <span className={"font-body-sm text-body-sm text-[11px] text-on-surface-variant leading-tight block truncate"}>Women/Kids</span>
      <span className={"font-urdu-body text-urdu-body text-[10px] text-outline leading-tight block truncate"}>خواتین و بچے</span>
      </div>
      </div>
      {/*  Breakdown 3  */}
      <div className={"rounded-lg bg-surface-container-high/70 p-2.5 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"}>
      <div className={"flex items-center justify-between"}>
      <span className={"material-symbols-outlined text-tertiary text-[18px]"}>medical_services</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>2 O₂</span>
      </div>
      <div className={"mt-2"}>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-on-surface leading-none block"}>14/16</span>
      <span className={"font-body-sm text-body-sm text-[11px] text-on-surface-variant leading-tight block truncate"}>Med Care</span>
      <span className={"font-urdu-body text-urdu-body text-[10px] text-outline leading-tight block truncate"}>طبی نگہداشت</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Overflow Alert Banner  */}
      <div className={"w-full rounded-xl bg-error-container/20 p-space-md shadow-[0_4px_20px_rgba(229,83,61,0.25)] flex flex-col gap-space-sm relative overflow-hidden"}>
      <div className={"absolute left-0 top-0 bottom-0 w-1.5 bg-error"}></div>
      <div className={"flex items-start gap-space-sm"}>
      <div className={"w-8 h-8 rounded-lg bg-error-container text-on-error flex items-center justify-center shrink-0 mt-0.5 shadow-md"}>
      <span className={"material-symbols-outlined text-[20px] animate-pulse"}>crisis_alert</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-headline-sm text-headline-sm text-error font-bold leading-tight"}>Critical Saturation Impending</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error bg-error-container/40 px-2 py-0.5 rounded-full font-bold"}>~48m ETA</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface mt-1 leading-snug"}>
                Malir River crest breach anticipated. Recommended action: divert next 40 inbound evacuees.
              </p>
      <p className={"font-urdu-body text-urdu-body text-tertiary-fixed-dim leading-snug pt-0.5"}>
                طغیانی کے پیش نظر اگلے 40 افراد کو قریبی شیلٹر منتقل کرنے کی سفارش
              </p>
      </div>
      </div>
      {/*  Suggested Route Box  */}
      <div className={"w-full rounded-lg bg-surface-container-lowest/80 p-2.5 flex items-center justify-between gap-space-sm"}>
      <div className={"flex items-center gap-2 min-w-0"}>
      <span className={"material-symbols-outlined text-secondary text-[20px] shrink-0"}>alt_route</span>
      <div className={"flex flex-col min-w-0"}>
      <span className={"font-body-sm text-body-sm font-semibold truncate text-on-surface"}>KMC Sports Complex (#SH-KHI-09)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant truncate"}>1.4 km West • 120 Empty Cots Available</span>
      </div>
      </div>
      <button className={"shrink-0 h-8 px-3 rounded-full bg-surface-container-high text-secondary hover:bg-surface-container-highest active:scale-95 transition-transform font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1 shadow-sm"} type={"button"}>
              Route
              <span className={"material-symbols-outlined text-[16px]"}>arrow_forward</span>
      </button>
      </div>
      </div>
      {/*  Primary Rapid Dispatch Actions  */}
      <div className={"w-full flex flex-col gap-space-xs"}>
      {/*  3D Amber Hero CTA Button  */}
      <button className={"w-full min-h-[52px] rounded-xl bg-primary-container text-on-primary-fixed font-headline-sm text-headline-sm font-bold shadow-[0_0_24px_rgba(242,169,59,0.4),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.3)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-between px-space-md"} type={"button"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"material-symbols-outlined text-[26px]"}>person_add</span>
      <span className={"leading-none text-left"}>Check-In New Arrival</span>
      </div>
      <span className={"font-urdu-body text-urdu-body font-bold text-on-primary-fixed leading-none"}>نئی آمد کا اندراج</span>
      </button>
      <div className={"grid grid-cols-2 gap-space-xs"}>
      {/*  Secondary Glass Button  */}
      <button className={"min-h-[46px] rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest active:scale-95 transition-all flex flex-col items-center justify-center p-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"} type={"button"}>
      <span className={"font-body-sm text-body-sm font-semibold leading-tight flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[16px] text-secondary"}>bed</span>
                Update Beds
              </span>
      <span className={"font-urdu-body text-urdu-body text-[11px] text-on-surface-variant leading-none mt-0.5"}>گنجائش تبدیل کریں</span>
      </button>
      {/*  Danger/Alert Vermilion Button  */}
      <button className={"min-h-[46px] rounded-xl bg-error text-on-error hover:brightness-110 active:scale-95 transition-all flex flex-col items-center justify-center p-2 text-center shadow-[0_4px_12px_rgba(229,83,61,0.3)]"} type={"button"}>
      <span className={"font-body-sm text-body-sm font-bold leading-tight flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[16px]"}>call_split</span>
                Request Diversion
              </span>
      <span className={"font-urdu-body text-urdu-body text-[11px] leading-none text-on-error/90 mt-0.5"}>ڈائیورژن مانگیں</span>
      </button>
      </div>
      </div>
      {/*  Facility Accessibility & Safety Flags  */}
      <div className={"w-full rounded-xl bg-surface-container p-space-md shadow-md"}>
      <div className={"flex items-center justify-between mb-space-sm"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-secondary text-[20px]"}>verified_user</span>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-semibold leading-tight"}>Facility Capabilities</h2>
      </div>
      <span className={"font-urdu-body text-urdu-body text-on-surface-variant text-[13px]"}>سہولیات و رسائی</span>
      </div>
      <div className={"grid grid-cols-1 gap-space-xs"}>
      {/*  Capability 1  */}
      <div className={"rounded-lg bg-surface-container-high/60 px-3 py-2 flex items-center justify-between"}>
      <div className={"flex items-center gap-2.5"}>
      <span className={"material-symbols-outlined text-emerald-400 text-[18px]"}>accessible</span>
      <span className={"font-body-sm text-body-sm font-medium"}>Wheelchair Incline Ramp Installed</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-emerald-400 shrink-0"}>ریمپ موجود</span>
      </div>
      {/*  Capability 2  */}
      <div className={"rounded-lg bg-surface-container-high/60 px-3 py-2 flex items-center justify-between"}>
      <div className={"flex items-center gap-2.5"}>
      <span className={"material-symbols-outlined text-emerald-400 text-[18px]"}>flip_camera_ios</span>
      <span className={"font-body-sm text-body-sm font-medium"}>Segregated Women &amp; Children Wing</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-emerald-400 shrink-0"}>خواتین کا علیحدہ حصہ</span>
      </div>
      {/*  Capability 3  */}
      <div className={"rounded-lg bg-surface-container-high/60 px-3 py-2 flex items-center justify-between"}>
      <div className={"flex items-center gap-2.5"}>
      <span className={"material-symbols-outlined text-emerald-400 text-[18px]"}>pregnant_woman</span>
      <span className={"font-body-sm text-body-sm font-medium"}>24/7 Lady Doctor &amp; Midwife on Duty</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-emerald-400 shrink-0"}>لیڈی ڈاکٹر حاضر</span>
      </div>
      {/*  Capability 4 (Warning)  */}
      <div className={"rounded-lg bg-amber-950/30 px-3 py-2 flex items-center justify-between"}>
      <div className={"flex items-center gap-2.5"}>
      <span className={"material-symbols-outlined text-primary text-[18px]"}>solar_power</span>
      <span className={"font-body-sm text-body-sm font-medium text-primary"}>Solar &amp; Gen Backup: 42% Fuel</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-primary shrink-0"}>سولر ایندھن 42%</span>
      </div>
      </div>
      </div>
      {/*  Emergency Supplies Inventory Grid  */}
      <div className={"w-full rounded-xl bg-surface-container p-space-md shadow-md"}>
      <div className={"flex items-center justify-between mb-space-sm"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-1.5"}>
      <span className={"material-symbols-outlined text-primary text-[20px]"}>inventory_2</span>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>Critical Stock</h2>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-on-surface-variant leading-none"}>ہنگامی سامان و رسد</span>
      </div>
      <button className={"h-7 px-2.5 rounded-full bg-surface-container-high text-primary font-telemetry-sm text-telemetry-sm flex items-center gap-1 active:scale-95"} type={"button"}>
      <span className={"material-symbols-outlined text-[14px]"}>refresh</span>
              Sync
            </button>
      </div>
      <div className={"grid grid-cols-2 gap-space-xs"}>
      {/*  Inventory Item 1: Water  */}
      <div className={"rounded-lg bg-surface-container-high/60 p-3 flex flex-col justify-between relative overflow-hidden shadow-sm"}>
      <div className={"flex items-start justify-between"}>
      <div className={"w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary"}>
      <span className={"material-symbols-outlined text-[18px]"}>water_bottle</span>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-amber-950/60 text-primary font-telemetry-sm text-telemetry-sm font-bold"}>
                  4.5h left
                </span>
      </div>
      <div className={"mt-3"}>
      <div className={"font-telemetry-lg text-telemetry-lg font-bold text-on-surface"}>180L</div>
      <div className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>Water Cans</div>
      <div className={"font-urdu-body text-urdu-body text-[11px] text-outline leading-tight"}>پینے کا صاف پانی</div>
      </div>
      </div>
      {/*  Inventory Item 2: Food & ORS  */}
      <div className={"rounded-lg bg-surface-container-high/60 p-3 flex flex-col justify-between relative overflow-hidden shadow-sm"}>
      <div className={"flex items-start justify-between"}>
      <div className={"w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-emerald-400"}>
      <span className={"material-symbols-outlined text-[18px]"}>lunch_dining</span>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 font-telemetry-sm text-telemetry-sm font-bold"}>
                  Optimal
                </span>
      </div>
      <div className={"mt-3"}>
      <div className={"font-telemetry-lg text-telemetry-lg font-bold text-on-surface"}>85 Packs</div>
      <div className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>Food &amp; Infant ORS</div>
      <div className={"font-urdu-body text-urdu-body text-[11px] text-outline leading-tight"}>خشک راشن اور او آر ایس</div>
      </div>
      </div>
      {/*  Inventory Item 3: Cots  */}
      <div className={"rounded-lg bg-surface-container-high/60 p-3 flex flex-col justify-between relative overflow-hidden shadow-sm"}>
      <div className={"flex items-start justify-between"}>
      <div className={"w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary"}>
      <span className={"material-symbols-outlined text-[18px]"}>bed</span>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-amber-950/60 text-primary font-telemetry-sm text-telemetry-sm font-bold"}>
                  Critical
                </span>
      </div>
      <div className={"mt-3"}>
      <div className={"font-telemetry-lg text-telemetry-lg font-bold text-on-surface"}>18 Left</div>
      <div className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>Foam Cots</div>
      <div className={"font-urdu-body text-urdu-body text-[11px] text-outline leading-tight"}>خالی چارپائی و گدے</div>
      </div>
      </div>
      {/*  Inventory Item 4: Oxygen  */}
      <div className={"rounded-lg bg-surface-container-high/60 p-3 flex flex-col justify-between relative overflow-hidden shadow-sm"}>
      <div className={"flex items-start justify-between"}>
      <div className={"w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary"}>
      <span className={"material-symbols-outlined text-[18px]"}>masks</span>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-surface-container-lowest text-secondary font-telemetry-sm text-telemetry-sm font-bold"}>
                  4 in Use
                </span>
      </div>
      <div className={"mt-3"}>
      <div className={"font-telemetry-lg text-telemetry-lg font-bold text-on-surface"}>2 Cylinders</div>
      <div className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>O₂ Available</div>
      <div className={"font-urdu-body text-urdu-body text-[11px] text-outline leading-tight"}>آکسیجن سلنڈر</div>
      </div>
      </div>
      </div>
      </div>
      {/*  Recent Arrivals Feed & Triage Queue  */}
      <div className={"w-full flex flex-col gap-space-sm mb-space-lg"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-1.5"}>
      <span className={"material-symbols-outlined text-secondary text-[20px]"}>groups</span>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>Recent Arrivals &amp; Queue</h2>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-on-surface-variant leading-none"}>تازہ آمد و داخلہ لائن</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary bg-secondary-container/20 px-2 py-0.5 rounded-full"}>
              3 Active Entries
            </span>
      </div>
      {/*  Arrival Card 1: Chacha Rustam  */}
      <div className={"w-full rounded-xl bg-surface-container p-space-md shadow-md flex flex-col gap-2"}>
      <div className={"flex items-start justify-between gap-space-xs"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-telemetry-md text-telemetry-md text-primary font-bold shrink-0"}>
                  CR
                </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-1.5"}>
      <span className={"font-headline-sm text-headline-sm font-semibold truncate text-on-surface"}>Chacha Rustam</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>(82 yrs)</span>
      </div>
      <span className={"font-body-sm text-body-sm text-on-surface-variant truncate"}>Sector 4 Evacuee</span>
      </div>
      </div>
      <div className={"flex flex-col items-end shrink-0"}>
      <span className={"px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 font-telemetry-sm text-telemetry-sm font-semibold"}>
                  Room B-12
                </span>
      <span className={"font-telemetry-sm text-telemetry-sm text-outline mt-0.5"}>12m ago</span>
      </div>
      </div>
      <div className={"flex items-center gap-1.5 flex-wrap pt-1"}>
      <span className={"px-2 py-0.5 rounded-md bg-surface-container-high text-primary font-telemetry-sm text-telemetry-sm flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[14px]"}>hearing_disabled</span>
                Deaf / Hard of Hearing
              </span>
      <span className={"px-2 py-0.5 rounded-md bg-surface-container-high text-secondary font-telemetry-sm text-telemetry-sm flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[14px]"}>bed</span>
                Ground Cot Assigned
              </span>
      </div>
      <div className={"flex items-center justify-between pt-1 font-urdu-body text-urdu-body text-[12px] text-on-surface-variant"}>
      <span>چاچا رستم • سماعت سے محروم</span>
      <span className={"text-emerald-400"}>اندراج مکمل • کمرہ بی-12</span>
      </div>
      </div>
      {/*  Arrival Card 2: Zubaida Begum  */}
      <div className={"w-full rounded-xl bg-surface-container p-space-md shadow-md flex flex-col gap-2"}>
      <div className={"flex items-start justify-between gap-space-xs"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center font-telemetry-md text-telemetry-md text-secondary font-bold shrink-0"}>
                  ZB
                </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-1.5"}>
      <span className={"font-headline-sm text-headline-sm font-semibold truncate text-on-surface"}>Zubaida Begum</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-bold"}>&amp; Infant (4d)</span>
      </div>
      <span className={"font-body-sm text-body-sm text-on-surface-variant truncate"}>Sector 3 Flood Surge</span>
      </div>
      </div>
      <div className={"flex flex-col items-end shrink-0"}>
      <span className={"px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 font-telemetry-sm text-telemetry-sm font-semibold"}>
                  Maternal Ward 01
                </span>
      <span className={"font-telemetry-sm text-telemetry-sm text-outline mt-0.5"}>28m ago</span>
      </div>
      </div>
      <div className={"flex items-center gap-1.5 flex-wrap pt-1"}>
      <span className={"px-2 py-0.5 rounded-md bg-surface-container-high text-secondary font-telemetry-sm text-telemetry-sm flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[14px]"}>water_drop</span>
                Boiled Water Needed
              </span>
      <span className={"px-2 py-0.5 rounded-md bg-surface-container-high text-tertiary font-telemetry-sm text-telemetry-sm flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[14px]"}>medication</span>
                LHW Visited
              </span>
      </div>
      <div className={"flex items-center justify-between pt-1 font-urdu-body text-urdu-body text-[12px] text-on-surface-variant"}>
      <span>زبیدہ بیگم اور نومولود بچہ</span>
      <span className={"text-emerald-400"}>مدر اینڈ چائلڈ وارڈ</span>
      </div>
      </div>
      {/*  Arrival Card 3: Inbound Bilal Ahmed  */}
      <div className={"w-full rounded-xl bg-amber-950/20 p-space-md shadow-md flex flex-col gap-2"}>
      <div className={"flex items-start justify-between gap-space-xs"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-telemetry-md text-telemetry-md text-primary font-bold shrink-0"}>
                  BA
                </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-1.5"}>
      <span className={"font-headline-sm text-headline-sm font-semibold truncate text-on-surface"}>Bilal Ahmed</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>(34 yrs)</span>
      </div>
      <span className={"font-body-sm text-body-sm text-primary font-medium flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[15px]"}>sailing</span>
                    Malir Inbound via Boat 02
                  </span>
      </div>
      </div>
      <div className={"flex flex-col items-end shrink-0"}>
      <span className={"px-2 py-0.5 rounded-full bg-primary/20 text-primary font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-primary animate-ping"}></span>
                  ETA 6m
                </span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary mt-0.5"}>راستے میں</span>
      </div>
      </div>
      <div className={"flex items-center gap-1.5 flex-wrap pt-1"}>
      <span className={"px-2 py-0.5 rounded-md bg-surface-container-high text-error font-telemetry-sm text-telemetry-sm flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[14px]"}>accessible_forward</span>
                Paraplegic (Ramp Cot Alert)
              </span>
      <span className={"px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
                Porter Assigned
              </span>
      </div>
      <div className={"flex items-center justify-between pt-1"}>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-tertiary-fixed-dim"}>بلال احمد • ویل چیئر / ریمپ کی فوری ضرورت</span>
      <button className={"h-6 px-2.5 rounded-full bg-primary text-on-primary font-telemetry-sm text-telemetry-sm font-bold active:scale-95"} type={"button"}>
                Prep Bed
              </button>
      </div>
      </div>
      </div>
      {/*  Real-time Offline Cache Sync Indicator  */}
      <div className={"w-full rounded-lg bg-surface-container-lowest/80 p-2.5 flex items-center justify-between text-telemetry-sm font-telemetry-sm text-on-surface-variant"}>
      <div className={"flex items-center gap-2"}>
      <span className={"w-2 h-2 rounded-full bg-secondary"}></span>
      <span>Mesh Node: Lyari-4G-Offline</span>
      </div>
      <span className={"text-secondary font-mono"}>Last Sync: 18s ago</span>
      </div>
      </div></main><nav className={"fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.5)]"} data-active-classes={"text-primary-container [&>div>span.material-symbols-outlined]:text-primary-container [&>div>span.material-symbols-outlined]:[font-variation-settings:'FILL'_1] [&>div>div]:bg-primary-container/20"}><div className={"h-20 px-space-xs flex items-center justify-around"}><Link to={"/register"} className={"group flex flex-col items-center justify-center min-w-[64px] min-h-[48px] py-1 text-on-surface-variant hover:text-on-surface transition-all active:scale-95"} data-path="register"><div className={"w-10 h-8 rounded-full flex items-center justify-center transition-colors mb-0.5"}><span className={"material-symbols-outlined text-[22px] transition-all"}>how_to_reg</span></div><span className={"font-body-sm text-body-sm leading-none font-medium"}>Register</span><span className={"font-urdu-body text-urdu-body text-[11px] leading-tight text-on-surface-variant/80 group-hover:text-on-surface"}>رجسٹر</span></Link><a className={"group flex flex-col items-center justify-center min-w-[64px] min-h-[48px] py-1 text-on-surface-variant hover:text-on-surface transition-all active:scale-95"} data-path="my-registrations" href={"#"}><div className={"w-10 h-8 rounded-full flex items-center justify-center transition-colors mb-0.5"}><span className={"material-symbols-outlined text-[22px] transition-all"}>assignment</span></div><span className={"font-body-sm text-body-sm leading-none font-medium"}>Records</span><span className={"font-urdu-body text-urdu-body text-[11px] leading-tight text-on-surface-variant/80 group-hover:text-on-surface"}>میرے اندراج</span></a><a className={"group flex flex-col items-center justify-center min-w-[64px] min-h-[48px] py-1 text-on-surface-variant hover:text-on-surface transition-all active:scale-95"} data-path="quick-sms" href={"#"}><div className={"w-10 h-8 rounded-full flex items-center justify-center transition-colors mb-0.5"}><span className={"material-symbols-outlined text-[22px] transition-all"}>sms</span></div><span className={"font-body-sm text-body-sm leading-none font-medium"}>Quick SMS</span><span className={"font-urdu-body text-urdu-body text-[11px] leading-tight text-on-surface-variant/80 group-hover:text-on-surface"}>فوری ایس ایم ایس</span></a><a aria-current={"page"} className={"group flex flex-col items-center justify-center min-w-[64px] min-h-[48px] py-1 transition-all active:scale-95 text-primary-container [&>div>span.material-symbols-outlined]:text-primary-container [&>div>span.material-symbols-outlined]:[font-variation-settings:'FILL'_1] [&>div>div]:bg-primary-container/20"} data-path="shelter-status" href={"#"}><div className={"w-10 h-8 rounded-full flex items-center justify-center transition-colors mb-0.5"}><span className={"material-symbols-outlined text-[22px] transition-all"}>holiday_village</span></div><span className={"font-body-sm text-body-sm leading-none font-medium"}>Shelter</span><span className={"font-urdu-body text-urdu-body text-[11px] leading-tight text-on-surface-variant/80 group-hover:text-on-surface"}>شیلٹر</span></a></div></nav>
    </div>
  )
}
