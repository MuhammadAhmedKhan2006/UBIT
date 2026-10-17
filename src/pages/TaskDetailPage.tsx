import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function TaskDetailPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("TaskDetailPage", nav)
  return (
    <div className={"bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen"} {...bind}>
      <header className={"fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.55)]"}><aside className={"h-6 px-margin flex items-center justify-between bg-surface-container-high/90 text-on-surface-variant font-telemetry-sm text-telemetry-sm select-none"}><div className={"flex items-center gap-space-xs"}><span className={"w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"}></span><span className={"tracking-wider uppercase"}>Synthetic demo data</span><span className={"opacity-40"}>/</span><span className={"font-urdu-body text-[11px] leading-tight"}>مصنوعی ڈیمو ڈیٹا</span></div><span className={"font-telemetry-sm text-[11px] text-secondary"}>MONSOON-SYS 2.4</span></aside><div className={"h-24 px-margin flex flex-col justify-center gap-1.5"}><div className={"flex items-center justify-between gap-space-sm"}><div className={"flex items-center gap-space-sm min-w-0"}><div className={"relative flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-low shrink-0 shadow-[0_0_14px_rgba(242,169,59,0.25)]"}><svg className={"w-6 h-6 text-primary"} fill={"currentColor"} viewBox={"0 0 24 24"}><path d={"M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 19c0 .55.45 1 1 1s1-.45 1-1v-1h-2v1zm1-17c2.76 0 5 2.24 5 5 0 1.63-.8 3.06-2 3.96V15h-6v-2.04C7.8 12.06 7 10.63 7 9c0-2.76 2.24-5 5-5z"}></path></svg><span className={"absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"}></span></div><div className={"flex flex-col min-w-0"}><h1 className={"font-headline-sm text-headline-sm text-on-surface truncate leading-tight tracking-tight"}>Nobody Left Behind</h1><div className={"flex items-center gap-1.5 text-on-surface-variant"}><span className={"font-body-sm text-body-sm text-primary font-medium truncate"}>Field Volunteer</span><span className={"opacity-40 text-xs"}>•</span><span className={"font-urdu-body text-xs text-primary truncate"}>فیلڈ رضا کار</span></div></div></div><div className={"flex items-center gap-space-xs shrink-0"}><button aria-label={"Switch Language"} className={"min-w-[44px] min-h-[44px] px-2 py-1 flex items-center justify-center rounded-lg bg-surface-container/70 text-on-surface font-telemetry-sm text-telemetry-sm active:scale-95 transition-transform"} type={"button"}><span className={"text-primary font-bold"}>EN</span><span className={"opacity-30 mx-1"}>|</span><span className={"font-urdu-body text-xs opacity-80"}>اردو</span></button><div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(242,169,59,0.35)] shrink-0"}><span className={"material-symbols-outlined text-on-primary text-[18px]"}>person</span></div></div></div><div className={"flex items-center justify-between gap-2"}><div className={"flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low/90"}><span className={"material-symbols-outlined text-secondary text-[14px]"}>water_drop</span><span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Water in</span><span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold tracking-tight"}>03:42:10</span></div><div className={"flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low/90"}><span className={"w-2 h-2 rounded-full bg-secondary-container animate-pulse"}></span><span className={"font-telemetry-sm text-[11px] text-secondary font-medium"}>Online</span><span className={"opacity-40 text-[10px]"}>/</span><span className={"font-urdu-body text-[11px] text-secondary leading-none"}>آن لائن</span></div><div className={"flex items-center gap-1 text-on-surface-variant/80 font-body-sm text-body-sm truncate"}><span className={"material-symbols-outlined text-[16px] text-primary"}>explore</span><span className={"truncate max-w-[90px]"}>Task Map Detail</span></div></div></div></header><main className={"flex flex-col relative w-full pt-30 pb-24 min-h-screen bg-surface"}><div className={"flex flex-col w-full px-margin pb-space-xl gap-space-md"}>
      {/*  1. Header Card (Triage & Identity)  */}
      <div className={"relative overflow-hidden rounded-xl bg-surface-container-high/90 backdrop-blur-xl p-space-md shadow-xl"}>
      {/*  Top Telemetry Row & TIER 1 Badge  */}
      <div className={"flex items-start justify-between gap-space-sm mb-space-sm"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-1.5 text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <span className={"material-symbols-outlined text-primary text-[15px]"}>tag</span>
      <span className={"tracking-wide"}>PK-KHI-7821</span>
      <span className={"opacity-40"}>•</span>
      <span className={"truncate text-on-surface"}>Lyari Sector 4-B</span>
      </div>
      <div className={"flex items-center gap-2 mt-1"}>
      <h2 className={"font-headline-md text-headline-md text-on-surface tracking-tight truncate"}>Fatima Bibi</h2>
      <span className={"font-urdu-headline text-urdu-headline text-primary leading-none"} dir={"rtl"}>فاطمہ بی بی</span>
      </div>
      </div>
      {/*  Tier 1 Critical Badge  */}
      <div className={"shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-on-error-container shadow-[0_0_12px_rgba(229,83,61,0.35)] animate-pulse"}>
      <span className={"w-2 h-2 rounded-full bg-error"}></span>
      <div className={"flex flex-col text-right"}>
      <span className={"font-telemetry-sm text-[10px] uppercase font-bold tracking-wider leading-none"}>Tier 1 Critical</span>
      <span className={"font-urdu-body text-[10px] leading-tight mt-0.5"} dir={"rtl"}>فوری خطرہ جان</span>
      </div>
      </div>
      </div>
      {/*  Demographics & Vulnerability Meta  */}
      <div className={"flex flex-wrap items-center gap-space-xs pt-space-xs"}>
      <div className={"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-lowest/80 text-on-surface"}>
      <span className={"material-symbols-outlined text-primary-container text-[16px]"}>elderly</span>
      <span className={"font-body-sm text-body-sm font-medium"}>78 Years</span>
      </div>
      <div className={"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-lowest/80 text-on-surface"}>
      <span className={"material-symbols-outlined text-tertiary text-[16px]"}>person_off</span>
      <span className={"font-body-sm text-body-sm"}>Solitary Elder</span>
      </div>
      <div className={"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-lowest/80 text-on-surface"}>
      <span className={"material-symbols-outlined text-secondary text-[16px]"}>water_ec</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-bold"}>+1.2m Crest</span>
      </div>
      </div>
      </div>
      {/*  2. Mini-Map with Tactical Evacuation Vector  */}
      <div className={"relative overflow-hidden rounded-xl bg-surface-container-low shadow-xl"}>
      {/*  Map Canvas Graphic Area  */}
      <div className={"relative w-full h-56 bg-surface-container-lowest overflow-hidden select-none"}>
      {/*  Embedded Tactical Map Vector  */}
      <svg className={"absolute inset-0 w-full h-full object-cover"} fill={"none"} viewBox={"0 0 360 224"} xmlns={"http://www.w3.org/2000/svg"}>
      <defs>
      <linearGradient gradientUnits={"userSpaceOnUse"} id={"waterFlow"} x1={"0"} x2={"360"} y1={"0"} y2={"224"}>
      <stop offset={"0%"} stopColor={"#003730"} stopOpacity={"0.35"}></stop>
      <stop offset={"70%"} stopColor={"#1da290"} stopOpacity={"0.5"}></stop>
      <stop offset={"100%"} stopColor={"#051014"} stopOpacity={"0.9"}></stop>
      </linearGradient>
      <radialGradient cx={"50%"} cy={"50%"} id={"targetGlow"} r={"50%"}>
      <stop offset={"0%"} stopColor={"#ffb956"} stopOpacity={"0.6"}></stop>
      <stop offset={"100%"} stopColor={"#ffb956"} stopOpacity={"0"}></stop>
      </radialGradient>
      <pattern height={"8"} id={"blockedHatch"} patternTransform={"rotate(45 0 0)"} patternUnits={"userSpaceOnUse"} width={"8"}>
      <line opacity={"0.65"} stroke={"#ffb4ab"} strokeWidth={"2.5"} x1={"0"} x2={"0"} y1={"0"} y2={"8"}></line>
      </pattern>
      </defs>
      {/*  Base Grid Lines  */}
      <path d={"M0 40 H360 M0 80 H360 M0 120 H360 M0 160 H360 M0 200 H360"} stroke={"#152125"} strokeWidth={"1"}></path>
      <path d={"M40 0 V224 M100 0 V224 M160 0 V224 M220 0 V224 M280 0 V224 M340 0 V224"} stroke={"#152125"} strokeWidth={"1"}></path>
      {/*  Submerged Zone Layer (+1.2m Rising Water)  */}
      <path d={"M0 110 Q90 145 180 125 T360 160 V224 H0 Z"} fill={"url(#waterFlow)"}></path>
      {/*  Roads & Street Mesh  */}
      <path d={"M20 220 L75 130 L190 115 L260 70 L340 50"} stroke={"#2b373b"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"14"}></path>
      {/*  Gul Muhammad Main Rd (Flooded / Blocked)  */}
      <path d={"M75 130 L110 50 L195 30"} stroke={"#2b373b"} strokeLinecap={"round"} strokeWidth={"12"}></path>
      <path d={"M75 130 L110 50 L195 30"} stroke={"url(#blockedHatch)"} strokeLinecap={"round"} strokeWidth={"10"}></path>
      {/*  Safe Foot/Dinghy Vector: Alleyway 04 (Glowing Amber Path)  */}
      <path d={"M30 200 Q65 175 90 140 T150 120 T215 90 T270 70"} id={"safeRoute"} stroke={"#ffca85"} strokeDasharray={"6 4"} strokeLinecap={"round"} strokeWidth={"3.5"}></path>
      {/*  Blocked Street Barricade Indicator  */}
      <g transform={"translate(100, 75)"}>
      <circle cx={"0"} cy={"0"} fill={"#93000a"} r={"10"}></circle>
      <path d={"M-5 -5 L5 5 M5 -5 L-5 5"} stroke={"#ffdad6"} strokeLinecap={"round"} strokeWidth={"2.5"}></path>
      </g>
      <text fill={"#ffb4ab"} fontFamily={"JetBrains Mono"} fontSize={"9"} fontWeight={"700"} x={"116"} y={"78"}>GUL MUHAMMAD RD BLOCKED</text>
      {/*  Volunteer Position Marker  */}
      <g transform={"translate(30, 200)"}>
      <circle className={"animate-ping"} cx={"0"} cy={"0"} fill={"#65d9c5"} fillOpacity={"0.25"} r={"14"}></circle>
      <circle cx={"0"} cy={"0"} fill={"#65d9c5"} r={"7"}></circle>
      <circle cx={"0"} cy={"0"} fill={"#003730"} r={"3"}></circle>
      </g>
      <text fill={"#65d9c5"} fontFamily={"Inter"} fontSize={"10"} fontWeight={"600"} x={"44"} y={"204"}>You (Field)</text>
      {/*  Boat Rendezvous Staging Point  */}
      <g transform={"translate(150, 120)"}>
      <rect fill={"#152125"} height={"24"} rx={"6"} width={"24"} x={"-12"} y={"-12"}></rect>
      <circle cx={"0"} cy={"0"} fill={"#003029"} r={"10"}></circle>
      <path d={"M-6 2 C-4 5, 4 5, 6 2 L5 -1 L-5 -1 Z M-1 -1 L-1 -5 L3 -3 Z"} fill={"#65d9c5"}></path>
      </g>
      <text fill={"#83f6e1"} fontFamily={"JetBrains Mono"} fontSize={"8"} textAnchor={"middle"} x={"140"} y={"142"}>Dinghy Dock</text>
      {/*  Resident Location Target Node  */}
      <g transform={"translate(270, 70)"}>
      <circle cx={"0"} cy={"0"} fill={"url(#targetGlow)"} r={"22"}></circle>
      <circle cx={"0"} cy={"0"} fill={"#f2a93b"} r={"9"}></circle>
      <circle cx={"0"} cy={"0"} fill={"#452b00"} r={"4"}></circle>
      <path d={"M0 -9 L0 -16"} stroke={"#f2a93b"} strokeWidth={"2"}></path>
      </g>
      <rect fill={"#152125"} fillOpacity={"0.9"} height={"18"} rx={"4"} width={"80"} x={"230"} y={"32"}></rect>
      <text fill={"#ffca85"} fontFamily={"Inter"} fontSize={"9"} fontWeight={"700"} textAnchor={"middle"} x={"270"} y={"44"}>Fatima's House</text>
      </svg>
      {/*  Floating Map Live Pill Indicators  */}
      <div className={"absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md"}>
      <span className={"w-2 h-2 rounded-full bg-secondary animate-pulse"}></span>
      <span className={"font-telemetry-sm text-[11px] text-secondary font-bold"}>TACTICAL VECTOR</span>
      </div>
      <div className={"absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md"}>
      <span className={"material-symbols-outlined text-primary text-[14px]"}>water</span>
      <span className={"font-telemetry-sm text-[11px] text-on-surface"}>Surge: <strong className={"text-primary"}>+1.2m</strong></span>
      </div>
      </div>
      {/*  Distance / ETA Tactical Overlay Strip  */}
      <div className={"p-space-sm bg-surface-container-high flex flex-col gap-1"}>
      <div className={"flex items-center justify-between text-on-surface"}>
      <div className={"flex items-center gap-1.5"}>
      <span className={"material-symbols-outlined text-primary text-[18px]"}>straighten</span>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-primary"}>320m</span>
      <span className={"text-on-surface-variant text-xs"}>• ETA ~4 min</span>
      </div>
      <div className={"flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-secondary font-telemetry-sm text-[11px]"}>
      <span className={"material-symbols-outlined text-[13px]"}>kayaking</span>
      <span>Foot / Dinghy</span>
      </div>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-secondary text-[14px]"}>alt_route</span>
      <span>Route: <strong>Via Alleyway 04</strong> • Shin-deep water (+0.4m)</span>
      </p>
      </div>
      </div>
      {/*  3. Critical Resident Vitals & Emergency Notes Card  */}
      <div className={"rounded-xl bg-surface-container p-space-md shadow-lg flex flex-col gap-space-sm"}>
      {/*  Header with Medical Badge  */}
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-2"}>
      <div className={"w-7 h-7 rounded-lg bg-error-container text-on-error-container flex items-center justify-center"}>
      <span className={"material-symbols-outlined text-[18px]"}>medical_services</span>
      </div>
      <span className={"font-headline-sm text-headline-sm text-on-surface"}>Urgent Resident Vitals</span>
      </div>
      <span className={"font-urdu-body text-xs text-primary font-medium"} dir={"rtl"}>طبی تفصیلات</span>
      </div>
      {/*  English Note  */}
      <div className={"rounded-lg bg-surface-container-low p-space-sm text-on-surface"}>
      <p className={"font-body-md text-body-md leading-relaxed"}>
      <strong className={"text-tertiary"}>Bedridden &amp; severe asthma.</strong> Daughter evacuated earlier; house entrance padlock reported broken by neighbor to allow quick entry.
            </p>
      </div>
      {/*  Urdu Note  */}
      <div className={"rounded-lg bg-surface-container-low p-space-sm text-right"} dir={"rtl"}>
      <p className={"font-urdu-body text-urdu-body text-primary leading-loose"}>
              بستر پر معذور، دمہ کی شدید مریضہ۔ بیٹی پہلے محفوظ مقام پر منتقل ہو چکی ہے۔ پڑوسی نے اطلاع دی کہ دروازے کا تالہ ہنگامی داخلے کے لیے توڑ دیا گیا ہے۔
            </p>
      </div>
      {/*  Verification Tag & Time  */}
      <div className={"flex items-center justify-between pt-1 text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <div className={"flex items-center gap-1 text-secondary"}>
      <span className={"material-symbols-outlined text-[15px]"}>verified</span>
      <span>Verified: PDMA Field SMS</span>
      </div>
      <div className={"flex items-center gap-1 text-on-surface-variant"}>
      <span className={"material-symbols-outlined text-[14px]"}>schedule</span>
      <span>15:20 PKT (22m ago)</span>
      </div>
      </div>
      </div>
      {/*  4. Big Emergency Contact Action  */}
      <a className={"group relative flex items-center justify-between w-full min-h-[52px] px-space-md py-space-sm rounded-xl bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(29,162,144,0.35)]"} href={"tel:+923218294104"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform"}>
      <span className={"material-symbols-outlined text-[24px]"}>call</span>
      </div>
      <div className={"flex flex-col min-w-0 text-left"}>
      <span className={"font-telemetry-md text-telemetry-md font-bold tracking-tight text-white"}>+92 321 8294104</span>
      <span className={"font-body-sm text-[12px] text-secondary-fixed opacity-90 truncate"}>Call Fatima / Handset on Site</span>
      </div>
      </div>
      <div className={"flex items-center gap-1 text-right shrink-0"}>
      <span className={"font-urdu-body text-sm font-bold text-white"} dir={"rtl"}>فون ملائیں</span>
      <span className={"material-symbols-outlined text-[20px] text-secondary-fixed"}>chevron_right</span>
      </div>
      </a>
      {/*  5. Three HUGE One-Tap Outcome Decision Buttons  */}
      <div className={"flex flex-col gap-space-sm"}>
      <div className={"flex items-center justify-between px-1"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider font-semibold"}>Immediate Field Action</span>
      <span className={"font-urdu-body text-xs text-on-surface-variant"} dir={"rtl"}>فوری فیصلہ ریکارڈ کریں</span>
      </div>
      {/*  Button 1: Reached & Safe (Moss Green / Secondary Container)  */}
      <button className={"relative flex items-center justify-between w-full min-h-[56px] px-space-md py-2.5 rounded-xl bg-secondary-container/90 active:bg-secondary-container text-on-secondary font-headline-sm text-headline-sm transition-transform active:scale-[0.98] shadow-lg"} data-action="handleRescueOutcome" data-args={"[\"safe\"]"} type={"button"}>
      <div className={"flex items-center gap-space-sm text-left"}>
      <div className={"w-9 h-9 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0"}>
      <span className={"material-symbols-outlined text-[22px]"}>check_circle</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-bold text-on-secondary-container text-[16px] leading-tight"}>Reached &amp; Found Safe</span>
      <span className={"font-body-sm text-[12px] text-on-secondary-container/80"}>Evacuation ready / In shelter</span>
      </div>
      </div>
      <span className={"font-urdu-headline text-[15px] text-on-secondary-container leading-none shrink-0"} dir={"rtl"}>پہنچ گئے، شہری محفوظ</span>
      </button>
      {/*  Button 2: Can't Reach / Blocked (Saffron / Primary Container)  */}
      <button className={"relative flex items-center justify-between w-full min-h-[56px] px-space-md py-2.5 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm transition-transform active:scale-[0.98] shadow-lg"} data-action="handleRescueOutcome" data-args={"[\"blocked\"]"} type={"button"}>
      <div className={"flex items-center gap-space-sm text-left"}>
      <div className={"w-9 h-9 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shrink-0"}>
      <span className={"material-symbols-outlined text-[22px]"}>warning</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-bold text-on-primary-container text-[16px] leading-tight"}>Can't Reach / Blocked</span>
      <span className={"font-body-sm text-[12px] text-on-primary-container/85"}>Water surge / Debris barrier</span>
      </div>
      </div>
      <span className={"font-urdu-headline text-[15px] text-on-primary-container leading-none shrink-0"} dir={"rtl"}>راستہ بند ہے</span>
      </button>
      {/*  Button 3: Need Immediate Backup (Critical Vermilion / Error Container)  */}
      <button className={"relative flex items-center justify-between w-full min-h-[56px] px-space-md py-2.5 rounded-xl bg-error text-on-error font-headline-sm text-headline-sm transition-transform active:scale-[0.98] shadow-[0_0_20px_rgba(229,83,61,0.4)]"} data-action="handleRescueOutcome" data-args={"[\"backup\"]"} type={"button"}>
      <div className={"flex items-center gap-space-sm text-left"}>
      <div className={"w-9 h-9 rounded-full bg-surface-container-lowest text-error flex items-center justify-center shrink-0 shadow-sm animate-pulse"}>
      <span className={"material-symbols-outlined text-[22px]"}>emergency_share</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-bold text-on-error text-[16px] leading-tight tracking-tight"}>Need Immediate Backup</span>
      <span className={"font-body-sm text-[12px] text-on-error/85"}>Medical boat / Stretcher crew</span>
      </div>
      </div>
      <span className={"font-urdu-headline text-[15px] text-on-error leading-none shrink-0"} dir={"rtl"}>فوری مدد درکار</span>
      </button>
      </div>
      {/*  6. Field Evidence / Notes & Photo Upload Section  */}
      <div className={"rounded-xl bg-surface-container-high/70 backdrop-blur-md p-space-md shadow-lg flex flex-col gap-space-md"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-primary text-[20px]"}>edit_note</span>
      <h3 className={"font-headline-sm text-headline-sm text-on-surface"}>Field Notes &amp; Proof</h3>
      </div>
      <span className={"font-urdu-body text-xs text-on-surface-variant"} dir={"rtl"}>موقع کے مشاہدات اور تصویر</span>
      </div>
      {/*  Observation Textarea  */}
      <div className={"flex flex-col gap-1.5"}>
      <label className={"font-body-sm text-body-sm text-on-surface-variant flex justify-between"} htmlFor={"field-notes"}>
      <span>Field Observation</span>
      <span className={"font-urdu-body text-xs"} dir={"rtl"}>مشاہدہ درج کریں</span>
      </label>
      <textarea className={"w-full rounded-xl bg-surface-container-lowest px-space-md py-space-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-0 font-body-md text-body-md resize-none shadow-inner"} id={"field-notes"} placeholder={"Add field observation (e.g. water height, stretcher needed)..."} rows={2}></textarea>
      </div>
      {/*  Photo Attach Module  */}
      <div className={"flex flex-col gap-2"}>
      <div className={"flex items-center justify-between"}>
      <label className={"cursor-pointer flex items-center justify-center gap-2 min-h-[48px] px-space-md rounded-xl bg-surface-container active:scale-95 transition-transform text-on-surface font-body-sm text-body-sm shadow"}>
      <input accept={"image/*"} capture={"environment"} className={"hidden"} data-action="togglePhotoPreview" data-args={"[\"__this__\"]"} type={"file"} />
      <span className={"material-symbols-outlined text-primary text-[20px]"}>photo_camera</span>
      <span className={"font-medium"}>Attach Photo</span>
      <span className={"opacity-40"}>•</span>
      <span className={"font-urdu-body text-xs text-primary"} dir={"rtl"}>کیمرہ</span>
      </label>
      {/*  Offline mesh safe chip  */}
      <div className={"flex items-center gap-1 text-secondary font-telemetry-sm text-[11px]"}>
      <span className={"material-symbols-outlined text-[14px]"}>cell_tower</span>
      <span>Mesh Cached</span>
      </div>
      </div>
      {/*  Preview Badge (Shown as attached)  */}
      <div className={"flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-on-surface"} id={"photo-preview-box"}>
      <div className={"flex items-center gap-2 min-w-0"}>
      <div className={"w-8 h-8 rounded bg-surface-variant flex items-center justify-center shrink-0"}>
      <span className={"material-symbols-outlined text-primary text-[18px]"}>image</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <span className={"font-telemetry-sm text-[12px] truncate text-primary font-bold"}>front_door_water.jpg</span>
      <span className={"font-telemetry-sm text-[10px] text-on-surface-variant"}>420 KB • Geo-tagged</span>
      </div>
      </div>
      <div className={"flex items-center gap-1.5 shrink-0"}>
      <span className={"material-symbols-outlined text-secondary text-[16px]"}>check_circle</span>
      <button aria-label={"Remove photo"} className={"text-on-surface-variant hover:text-error p-1"} data-action="clearPhotoPreview" data-args={"[]"} type={"button"}>
      <span className={"material-symbols-outlined text-[16px]"}>close</span>
      </button>
      </div>
      </div>
      </div>
      {/*  Submit Status CTA (Dual Language)  */}
      <button className={"relative flex items-center justify-center gap-2 min-h-[52px] w-full rounded-xl bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold shadow-[0_0_24px_rgba(242,169,59,0.3)] active:scale-[0.98] transition-transform"} data-action="submitStatusUpdate" data-args={"[]"} type={"button"}>
      <span className={"material-symbols-outlined text-[22px]"}>cloud_upload</span>
      <span>Submit Status</span>
      <span className={"opacity-40"}>/</span>
      <span className={"font-urdu-headline text-[16px] leading-none pt-0.5"} dir={"rtl"}>محفوظ کریں</span>
      </button>
      </div>
      {/*  Interactive Action Toast Notification  */}
      <div className={"fixed bottom-24 left-4 right-4 z-50 transform translate-y-32 opacity-0 pointer-events-none transition-all duration-300 rounded-xl p-space-md shadow-2xl flex items-center justify-between"} id={"action-toast"}>
      <div className={"flex items-center gap-space-sm text-left"}>
      <span className={"material-symbols-outlined text-[24px]"} id={"toast-icon"}>info</span>
      <div className={"flex flex-col min-w-0"}>
      <span className={"font-headline-sm text-[15px] font-bold leading-tight"} id={"toast-title"}></span>
      <span className={"font-urdu-body text-[12px] leading-tight mt-0.5"} dir={"rtl"} id={"toast-subtitle"}></span>
      </div>
      </div>
      <span className={"material-symbols-outlined text-[18px] opacity-75"}>done_all</span>
      </div>
      </div>
      </main><nav className={"fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"} data-active-classes={"text-primary font-bold scale-105"}><div className={"h-20 px-space-xs flex items-center justify-around"}><Link to={"/tasks"} className={"flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl text-on-surface-variant transition-all"} data-path="volunteer-tasks"><span className={"material-symbols-outlined text-[24px]"}>checklist</span><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Tasks</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>ٹاسکس</span></Link><a aria-current={"page"} className={"flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl transition-all text-primary font-bold scale-105"} data-path="task-map-detail" href={"#"}><span className={"material-symbols-outlined text-[24px]"}>near_me</span><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Detail</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>تفصیل</span></a><a className={"flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl text-on-surface-variant transition-all"} data-path="buddy-check-in" href={"#"}><span className={"material-symbols-outlined text-[24px]"}>volunteer_activism</span><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Buddy</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>بڈی چیک ان</span></a><a className={"relative flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl text-on-surface-variant transition-all"} data-path="mesh-sync" href={"#"}><div className={"relative"}><span className={"material-symbols-outlined text-[24px]"}>sync</span><span className={"absolute -top-1 -right-2.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-container text-on-primary font-telemetry-sm text-[10px] font-bold flex items-center justify-center shadow-[0_0_8px_rgba(242,169,59,0.6)]"}>3</span></div><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Sync</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>سنک</span></a></div></nav>
    </div>
  )
}
