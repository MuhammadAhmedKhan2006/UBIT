import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function QualityDataPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("QualityDataPage", nav)
  return (
    <div className={"bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen"} {...bind}>
{/*  Sub-Navigation Bar & Action Controls  */}
      <div className={"flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-low/90 backdrop-blur-xl p-space-sm rounded-xl shadow-xl"}>
      {/*  Sub Tabs  */}
      <div className={"flex items-center gap-space-xs p-1 bg-surface-container-lowest/80 rounded-lg max-w-full overflow-x-auto"}>
      <button className={"flex items-center gap-space-xs px-space-md py-space-xs rounded-md bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-[0_0_16px_rgba(242,169,59,0.35)] transition-all"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>dataset</span>
      <span>Data Quality</span>
      <span className={"font-urdu-body text-telemetry-sm opacity-80"}>ڈیٹا معیار</span>
      </button>
      <button className={"flex items-center gap-space-xs px-space-md py-space-xs rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-headline-sm text-body-sm font-semibold"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>balance</span>
      <span>Algorithmic Fairness</span>
      <span className={"font-urdu-body text-telemetry-sm opacity-70"}>انصاف کا نظام</span>
      </button>
      <button className={"flex items-center gap-space-xs px-space-md py-space-xs rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-headline-sm text-body-sm font-semibold"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>lock_clock</span>
      <span>Immutable Audit Log</span>
      <span className={"font-urdu-body text-telemetry-sm opacity-70"}>آڈٹ لاگ</span>
      </button>
      </div>
      {/*  Right Controls: CTA & Export  */}
      <div className={"flex flex-wrap items-center gap-space-sm"}>
      <div className={"flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <span className={"w-2 h-2 rounded-full bg-secondary animate-pulse"}></span>
      <span>Inference Engine: <strong className={"text-secondary font-semibold"}>v3.9 Active</strong></span>
      </div>
      <button className={"flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-high/60 backdrop-blur-md hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm font-medium shadow-md transition-all active:scale-95"} id={"exportCsvBtn"}>
      <span className={"material-symbols-outlined text-telemetry-md text-secondary"}>file_download</span>
      <span>Export Top-20 (CSV)</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>فہرست برآمد کریں</span>
      </button>
      <button className={"flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-[0_0_24px_rgba(242,169,59,0.4)] hover:bg-primary-fixed-dim active:scale-95 transition-all"} id={"recalcBtn"}>
      <span className={"material-symbols-outlined text-telemetry-md animate-spin"} id={"recalcIcon"} style={{ animationPlayState: "paused" }}>sync</span>
      <span>Recalculate Inferred Scores</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-primary-fixed"}>تخمینہ شدہ اسکورز کا دوبارہ حساب</span>
      </button>
      </div>
      </div>
      {/*  Top Metric Cards (4 Bento KPIs)  */}
      <div className={"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md"}>
      {/*  KPI 1  */}
      <div className={"relative overflow-hidden rounded-xl bg-surface-container/70 backdrop-blur-xl p-space-md shadow-xl flex flex-col justify-between group"}>
      <div className={"flex items-start justify-between"}>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm text-on-surface-variant flex items-center gap-1"}>
                  Total Inferred Scores
                  <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>کل تخمینی اسکور</span>
      </span>
      <div className={"flex items-baseline gap-space-xs mt-space-xs"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-on-surface"}>1,842</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-semibold"}>Total Pool</span>
      </div>
      </div>
      <div className={"w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary"}>
      <span className={"material-symbols-outlined text-headline-sm"}>neurology</span>
      </div>
      </div>
      <div className={"mt-space-md pt-space-xs bg-surface-container-lowest/60 rounded-lg p-space-xs flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Geospatial / Demo Proxy:</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold px-2 py-0.5 rounded bg-primary-container/20"}>428 (23.2%)</span>
      </div>
      </div>
      {/*  KPI 2  */}
      <div className={"relative overflow-hidden rounded-xl bg-surface-container/70 backdrop-blur-xl p-space-md shadow-xl flex flex-col justify-between group"}>
      <div className={"flex items-start justify-between"}>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm text-on-surface-variant flex items-center gap-1"}>
                  Average Confidence Level
                  <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>اوسط اعتمادی شرح</span>
      </span>
      <div className={"flex items-baseline gap-space-xs mt-space-xs"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-secondary"}>74.2%</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary/80"}>±3.8%</span>
      </div>
      </div>
      <div className={"w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary"}>
      <span className={"material-symbols-outlined text-headline-sm"}>query_stats</span>
      </div>
      </div>
      <div className={"mt-space-md flex flex-col gap-1"}>
      <div className={"flex justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span>Active Basin Reliability</span>
      <span className={"text-secondary font-medium"}>Nominal Range</span>
      </div>
      <div className={"w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden"}>
      <div className={"bg-secondary h-full rounded-full"} style={{ width: "74.2%" }}></div>
      </div>
      </div>
      </div>
      {/*  KPI 3: High Exposure Unknown Welfare  */}
      <div className={"relative overflow-hidden rounded-xl bg-surface-container/70 backdrop-blur-xl p-space-md shadow-[0_0_20px_rgba(229,83,61,0.15)] flex flex-col justify-between"}>
      <div className={"flex items-start justify-between"}>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm text-error flex items-center gap-1"}>
                  High-Exposure Unknowns
                  <span className={"font-urdu-body text-telemetry-sm text-error"}>نامعلوم انتہائی خطرہ</span>
      </span>
      <div className={"flex items-baseline gap-space-xs mt-space-xs"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-error"}>29</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error/80 uppercase font-semibold tracking-wider"}>Unreached</span>
      </div>
      </div>
      <div className={"w-10 h-10 rounded-lg bg-error-container/40 flex items-center justify-center text-error animate-pulse"}>
      <span className={"material-symbols-outlined text-headline-sm"}>warning</span>
      </div>
      </div>
      <div className={"mt-space-md pt-space-xs bg-error-container/20 rounded-lg p-space-xs flex items-center justify-between text-error font-telemetry-sm text-telemetry-sm"}>
      <span className={"flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>priority_high</span>
                Pessimistic bias forced
              </span>
      <span className={"font-bold underline"}>Tier-1 Rescue</span>
      </div>
      </div>
      {/*  KPI 4  */}
      <div className={"relative overflow-hidden rounded-xl bg-surface-container/70 backdrop-blur-xl p-space-md shadow-xl flex flex-col justify-between group"}>
      <div className={"flex items-start justify-between"}>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm text-on-surface-variant flex items-center gap-1"}>
                  Model Calibration Drift
                  <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>ماڈل کالیبریشن خامی</span>
      </span>
      <div className={"flex items-baseline gap-space-xs mt-space-xs"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-on-surface"}>0.04</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-medium"}>Δ (Stable)</span>
      </div>
      </div>
      <div className={"w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant"}>
      <span className={"material-symbols-outlined text-headline-sm"}>tune</span>
      </div>
      </div>
      <div className={"mt-space-md pt-space-xs bg-surface-container-lowest/60 rounded-lg p-space-xs flex items-center justify-between font-telemetry-sm text-telemetry-sm"}>
      <span className={"text-on-surface-variant"}>Threshold Ceiling:</span>
      <span className={"text-secondary font-semibold font-telemetry-sm"}>0.08 Max Allowable</span>
      </div>
      </div>
      </div>
      {/*  Sector Filtering & Telemetry Strip  */}
      <div className={"flex flex-wrap items-center justify-between gap-space-sm bg-surface-container/50 backdrop-blur-md px-space-md py-space-sm rounded-xl shadow-md"}>
      <div className={"flex items-center gap-space-xs flex-wrap"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider mr-space-xs"}>Basin Sector Filter:</span>
      <button className={"filter-chip px-space-sm py-1 rounded-full bg-primary-container text-on-primary-container font-headline-sm text-telemetry-sm font-semibold shadow-sm transition-all"} data-sector={"all"}>
              All Sectors / تمام سیکٹرز (1,842)
            </button>
      <button className={"filter-chip px-space-sm py-1 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface font-headline-sm text-telemetry-sm transition-all"} data-sector={"lyari"}>
              Lyari River Basin (542)
            </button>
      <button className={"filter-chip px-space-sm py-1 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface font-headline-sm text-telemetry-sm transition-all"} data-sector={"malir"}>
              Malir Riverbed Zone (718)
            </button>
      <button className={"filter-chip px-space-sm py-1 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface font-headline-sm text-telemetry-sm transition-all"} data-sector={"korangi"}>
              Korangi Creek Coastal (582)
            </button>
      </div>
      <div className={"flex items-center gap-space-md font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <div className={"flex items-center gap-1.5"}>
      <span className={"w-2.5 h-2.5 rounded-full bg-error"}></span>
      <span>High Uncertainty</span>
      </div>
      <div className={"flex items-center gap-1.5"}>
      <span className={"w-2.5 h-2.5 rounded-full bg-primary"}></span>
      <span>Medium Proxy</span>
      </div>
      <div className={"flex items-center gap-1.5"}>
      <span className={"w-2.5 h-2.5 rounded-full bg-secondary"}></span>
      <span>Direct Sensor</span>
      </div>
      </div>
      </div>
      {/*  Main View Split (Left: Spatial Telemetry / Right: Pessimistic Top-20 Queue)  */}
      <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start"}>
      {/*  LEFT: Confidence Map & Spatial Telemetry in 3D Tilted View (7 Cols)  */}
      <div className={"lg:col-span-7 flex flex-col gap-space-md"}>
      <div className={"bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md relative overflow-hidden"}>
      {/*  Header & View Switcher  */}
      <div className={"flex flex-wrap items-center justify-between gap-space-sm z-10"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-primary text-headline-sm"}>radar</span>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight"}>Confidence Surface &amp; Exposure Grid</h2>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant mt-0.5"}>اعتمادی نقشہ اور خطرے کے زونز کی تفصیلی تصویر</span>
      </div>
      <div className={"flex items-center p-1 bg-surface-container-lowest/80 rounded-lg"}>
      <button className={"flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container-high text-primary font-headline-sm text-telemetry-sm font-semibold shadow-sm transition-all"} id={"view3dBtn"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>view_in_ar</span>
      <span>3D Tilted</span>
      </button>
      <button className={"flex items-center gap-1 px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-headline-sm text-telemetry-sm font-medium transition-all"} id={"viewGridBtn"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>grid_on</span>
      <span>Flat Grid</span>
      </button>
      </div>
      </div>
      {/*  Strict Operational Rule Legend (Bold Banner)  */}
      <div className={"z-10 p-space-sm rounded-xl bg-error-container/30 backdrop-blur-md flex items-center justify-between gap-space-sm shadow-inner"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-8 h-8 rounded-lg bg-error text-on-error flex items-center justify-center font-bold"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>report</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-bold text-error tracking-wide"}>
                      OPERATIONAL PRINCIPLE: Unknown = High Exposure, Never Safe
                    </span>
      <span className={"font-urdu-body text-telemetry-sm text-error/90 leading-tight"}>
                      نامعلوم = انتہائی خطرہ، کبھی محفوظ نہیں — عدم رابطہ کو محفوظ تصور نہ کریں
                    </span>
      </div>
      </div>
      <span className={"hidden sm:inline-flex px-2 py-1 rounded bg-error/20 font-telemetry-sm text-telemetry-sm text-error font-bold uppercase"}>
                  Fail-Safe Protocol
                </span>
      </div>
      {/*  3D Map Canvas Stage Container  */}
      <div className={"relative w-full h-[480px] bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl flex items-center justify-center [perspective:1000px]"}>
      {/*  Tactical Grid Background Pattern  */}
      <div className={"absolute inset-0 opacity-20 pointer-events-none"} style={{ backgroundImage: "radial-gradient(rgba(101, 217, 197, 0.4) 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
      {/*  The 3D Tilted Map Plane  */}
      <div className={"relative w-[92%] h-[88%] rounded-xl transition-all duration-700 ease-out origin-center"} id={"mapPlane"} style={{ transform: "rotateX(28deg) rotateZ(-4deg) translateY(-8px)" }}>
      {/*  Map Layer Underlay with Real Karachi Flood Basin  */}
      <div className={"absolute inset-0 w-full h-full bg-cover bg-center rounded-xl opacity-40 shadow-inner"} data-location={"Lyari River Basin, Karachi, Pakistan"} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOESLY1N5EWRzlx9y8iZ4cYWlESHrju_kEt62xGRiS6iS33vwDlL67bs36_J7_kdJz6-PDNWdk0dXLzd2EhsDpVs7loEjH7DO8v9vTTtBaPfzaCI3OCq_8eEurKFd4Lqy-WmRrmssBDsjTKsIEUDQxcZfwoLefpYZvWuFnuwGXwhDShIvfSz80_scSiD7VakwfICmGA1Esnh5VE5gQHtpuN4ez2kCYz3rjHsLZRkSogfJ_0ZIxbdSuTw')" }}></div>
      {/*  Gradient Scrim for Contrast  */}
      <div className={"absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-low/60 to-transparent rounded-xl"}></div>
      {/*  SVG Spatial Telemetry Vector Polygons & Water Inundation Contours  */}
      <svg className={"absolute inset-0 w-full h-full pointer-events-none"} fill={"none"} viewBox={"0 0 600 400"} xmlns={"http://www.w3.org/2000/svg"}>
      <defs>
      {/*  Diagonal Slate Crosshatch Pattern (#5F7A8C) for Unknown Welfare  */}
      <pattern height={"12"} id={"unknownHatch"} patternTransform={"rotate(45 0 0)"} patternUnits={"userSpaceOnUse"} width={"12"}>
      <line stroke={"#5F7A8C"} strokeOpacity={"0.8"} strokeWidth={"3"} x1={"0"} x2={"0"} y1={"0"} y2={"12"}></line>
      <rect fill={"#1B2830"} fillOpacity={"0.55"} height={"12"} width={"12"}></rect>
      </pattern>
      {/*  Water surge glow filter  */}
      <filter height={"140%"} id={"surgeGlow"} width={"140%"} x={"-20%"} y={"-20%"}>
      <feGaussianBlur result={"blur"} stdDeviation={"8"}></feGaussianBlur>
      <feComposite in={"SourceGraphic"} in2={"blur"} operator={"over"}></feComposite>
      </filter>
      </defs>
      {/*  Inundation Vector Wave (Projected Surge)  */}
      <path d={"M-10,320 Q120,290 260,330 T580,310 L610,410 L-10,410 Z"} fill={"#1da290"} fillOpacity={"0.25"} filter={"url(#surgeGlow)"}></path>
      <path d={"M-10,320 Q120,290 260,330 T580,310"} stroke={"#65d9c5"} strokeDasharray={"6 4"} strokeWidth={"2.5"}></path>
      {/*  High Confidence Assessed Zone (Green/Teal)  */}
      <polygon fill={"#65d9c5"} fillOpacity={"0.18"} points={"40,60 160,40 210,120 120,180 30,130"} stroke={"#65d9c5"} strokeWidth={"1.5"}></polygon>
      <text className={"font-telemetry-sm text-[11px] font-bold"} fill={"#65d9c5"} letterSpacing={"1"} x={"75"} y={"110"}>SECTOR 1-A [VERIFIED 88%]</text>
      {/*  Moderate Inference Zone (Amber)  */}
      <polygon fill={"#f2a93b"} fillOpacity={"0.2"} points={"230,80 380,50 440,150 320,190 210,130"} stroke={"#f2a93b"} strokeWidth={"1.5"}></polygon>
      <text className={"font-telemetry-sm text-[11px] font-bold"} fill={"#ffca85"} letterSpacing={"1"} x={"260"} y={"125"}>SECTOR 2-C [PROXIED 68%]</text>
      {/*  CRITICAL UNKNOWN ZONE 1: Lyari Gulbahar Lowlands (Pattern HATCHED)  */}
      <polygon fill={"url(#unknownHatch)"} points={"110,210 280,180 340,300 240,360 80,310"} stroke={"#ffb4ab"} strokeWidth={"2"}></polygon>
      {/*  CRITICAL UNKNOWN ZONE 2: Keamari Deep Creek (Pattern HATCHED)  */}
      <polygon fill={"url(#unknownHatch)"} points={"360,200 550,170 580,290 440,320"} stroke={"#ffb4ab"} strokeWidth={"2"}></polygon>
      </svg>
      {/*  Floating Interactive Hotspot Markers  */}
      {/*  Marker 1: Mrs. Khan (Lyari Sector 4-B)  */}
      <div className={"absolute top-[52%] left-[34%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"} data-action="highlightResident" data-args={"[\"res-1\"]"}>
      <span className={"relative flex h-5 w-5"}>
      <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"}></span>
      <span className={"relative inline-flex rounded-full h-5 w-5 bg-error text-on-error items-center justify-center font-telemetry-sm text-[9px] font-bold shadow-lg"}>!</span>
      </span>
      {/*  Tooltip Card  */}
      <div className={"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col bg-surface-container-high/95 backdrop-blur-md p-2 rounded-lg shadow-2xl min-w-[190px] z-30 pointer-events-none"}>
      <div className={"flex items-center justify-between text-error font-telemetry-sm text-telemetry-sm font-bold"}>
      <span>Mrs. Khan (Cluster 4-B)</span>
      <span>91.4 SCORE</span>
      </div>
      <span className={"text-on-surface-variant font-telemetry-sm text-[11px]"}>Unknown Welfare • Deep Surge Inundation</span>
      </div>
      </div>
      {/*  Marker 2: Paraplegic Elder Keamari  */}
      <div className={"absolute top-[60%] left-[78%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"} data-action="highlightResident" data-args={"[\"res-2\"]"}>
      <span className={"relative flex h-5 w-5"}>
      <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"}></span>
      <span className={"relative inline-flex rounded-full h-5 w-5 bg-error text-on-error items-center justify-center font-telemetry-sm text-[9px] font-bold shadow-lg"}>!</span>
      </span>
      <div className={"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col bg-surface-container-high/95 backdrop-blur-md p-2 rounded-lg shadow-2xl min-w-[190px] z-30 pointer-events-none"}>
      <div className={"flex items-center justify-between text-error font-telemetry-sm text-telemetry-sm font-bold"}>
      <span>Keamari Compound #12</span>
      <span>88.7 SCORE</span>
      </div>
      <span className={"text-on-surface-variant font-telemetry-sm text-[11px]"}>Cell Tower Blackout • Mobility Impaired</span>
      </div>
      </div>
      {/*  Marker 3: Verified safe zone marker  */}
      <div className={"absolute top-[22%] left-[20%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"}>
      <div className={"h-3.5 w-3.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(101,217,197,0.8)]"}></div>
      </div>
      {/*  Spatial Compass HUD Overlay  */}
      <div className={"absolute top-3 right-3 p-space-xs rounded bg-surface-container-lowest/80 backdrop-blur-md flex flex-col items-center font-telemetry-sm text-telemetry-sm text-on-surface-variant font-bold pointer-events-none"}>
      <span className={"text-primary"}>N</span>
      <span className={"material-symbols-outlined text-telemetry-md text-primary"}>navigation</span>
      <span className={"text-[10px]"}>342°</span>
      </div>
      </div>
      {/*  Bottom Floating Legend for Map  */}
      <div className={"absolute bottom-3 left-3 right-3 p-space-xs rounded-lg bg-surface-container-low/90 backdrop-blur-xl flex flex-wrap items-center justify-between gap-space-xs text-on-surface-variant font-telemetry-sm text-telemetry-sm shadow-lg z-20"}>
      <div className={"flex items-center gap-space-sm flex-wrap"}>
      <div className={"flex items-center gap-1.5"}>
      <span className={"w-3.5 h-3.5 rounded border border-error bg-[#1B2830]"} style={{ backgroundImage: "repeating-linear-gradient(45deg, #5F7A8C 0, #5F7A8C 2px, transparent 0, transparent 6px)" }}></span>
      <span className={"text-on-surface font-semibold"}>Crosshatch: Zero Contact / High Exposure (Pessimistic)</span>
      </div>
      <div className={"flex items-center gap-1.5"}>
      <span className={"w-3 h-3 rounded bg-primary-container"}></span>
      <span>Demographic Proxy Inferred</span>
      </div>
      </div>
      <span className={"text-secondary font-telemetry-sm"}>Updated 42s ago • Mesh Node 86.4MHz</span>
      </div>
      </div>
      {/*  Explanatory Calibration Telemetry Footnote  */}
      <div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest/50 text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-secondary text-telemetry-md"}>model_training</span>
      <span>Calibration: Isotonic Regression on historical 2022 Sindh Monsoon outcomes.</span>
      </div>
      <div className={"flex items-center gap-space-xs text-primary"}>
      <span>Brier Score Loss: <strong className={"text-on-surface"}>0.082</strong></span>
      <span className={"text-outline-variant"}>|</span>
      <span>ECE: <strong className={"text-on-surface"}>1.4%</strong></span>
      </div>
      </div>
      </div>
      </div>
      {/*  RIGHT: "Pessimistic Top-20" Priority Queue List (5 Cols)  */}
      <div className={"lg:col-span-5 flex flex-col gap-space-md"}>
      <div className={"bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md"}>
      {/*  Queue Header  */}
      <div className={"flex items-center justify-between"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-error text-headline-sm"}>format_list_numbered</span>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight"}>Pessimistic Top-20 Priority</h2>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-error leading-tight mt-0.5"}>ترجیحی فہرست برائے فوری کارروائی (بدترین مفروضہ)</span>
      </div>
      <div className={"flex items-center gap-1 px-space-xs py-1 rounded bg-error-container/40 text-error font-telemetry-sm text-telemetry-sm font-bold"}>
      <span className={"animate-pulse"}>●</span>
      <span>20 Critical</span>
      </div>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant -mt-1"}>
                Residents who have <strong>not reported</strong>, but whose demographic risk, dwelling elevation, and nearby tower dropouts indicate severe imminent life danger.
              </p>
      {/*  Dynamic List Container (Scrollable)  */}
      <div className={"flex flex-col gap-space-sm max-h-[580px] overflow-y-auto pr-1"} id={"priorityQueue"}>
      {/*  Item 1: Mrs. Khan  */}
      <div className={"resident-item p-space-md rounded-xl bg-surface-container-high/70 backdrop-blur-md hover:bg-surface-container-highest transition-all duration-200 flex flex-col gap-space-xs shadow-md group"} id={"res-1"}>
      <div className={"flex items-start justify-between gap-space-sm"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"px-1.5 py-0.5 rounded bg-error/20 text-error font-telemetry-sm text-[11px] font-bold"}>RANK #01</span>
      <h3 className={"font-headline-sm text-body-lg text-on-surface font-bold truncate"}>Mrs. Razia Khan (74y)</h3>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>رضیہ خان • اولڈ ایج کلسٹر، لیاری سیکٹر 4-B</span>
      </div>
      <div className={"flex flex-col items-end"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-error font-extrabold leading-none"}>91.4</span>
      <span className={"font-telemetry-sm text-[10px] text-on-surface-variant uppercase"}>Inferred Risk</span>
      </div>
      </div>
      <div className={"grid grid-cols-2 gap-space-xs mt-1 bg-surface-container-lowest/60 p-space-xs rounded-lg text-on-surface-variant font-telemetry-sm text-[11px]"}>
      <div>
      <span className={"text-outline"}>Proxy Factors:</span>
      <p className={"text-on-surface font-medium"}>Single elder + Ground floor mud structure</p>
      </div>
      <div>
      <span className={"text-outline"}>Confidence Int.:</span>
      <p className={"text-secondary font-bold font-telemetry-sm"}>62% — 78% (CI: 95%)</p>
      </div>
      </div>
      <div className={"flex items-center justify-between gap-space-xs pt-space-xs mt-1"}>
      <span className={"flex items-center gap-1 font-telemetry-sm text-telemetry-sm text-error"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>signal_cellular_connected_no_internet_4_bar</span>
                      Cell Silent 4h 12m
                    </span>
      <button className={"px-space-md py-1.5 rounded-lg bg-error text-on-error font-headline-sm text-telemetry-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"} data-action="dispatchDirect" data-args={"[\"Mrs. Razia Khan\"]"}>
                      Dispatch Boat #03
                    </button>
      </div>
      </div>
      {/*  Item 2: Paraplegic Elder Keamari  */}
      <div className={"resident-item p-space-md rounded-xl bg-surface-container-high/70 backdrop-blur-md hover:bg-surface-container-highest transition-all duration-200 flex flex-col gap-space-xs shadow-md group"} id={"res-2"}>
      <div className={"flex items-start justify-between gap-space-sm"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"px-1.5 py-0.5 rounded bg-error/20 text-error font-telemetry-sm text-[11px] font-bold"}>RANK #02</span>
      <h3 className={"font-headline-sm text-body-lg text-on-surface font-bold truncate"}>Ghulam Rasool (68y, Paraplegic)</h3>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>غلام رسول • ماہی گیر بستی کیماڑی</span>
      </div>
      <div className={"flex flex-col items-end"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-error font-extrabold leading-none"}>88.7</span>
      <span className={"font-telemetry-sm text-[10px] text-on-surface-variant uppercase"}>Inferred Risk</span>
      </div>
      </div>
      <div className={"grid grid-cols-2 gap-space-xs mt-1 bg-surface-container-lowest/60 p-space-xs rounded-lg text-on-surface-variant font-telemetry-sm text-[11px]"}>
      <div>
      <span className={"text-outline"}>Proxy Factors:</span>
      <p className={"text-on-surface font-medium"}>Bedridden proxy + Inundation path 0.8m</p>
      </div>
      <div>
      <span className={"text-outline"}>Confidence Int.:</span>
      <p className={"text-secondary font-bold font-telemetry-sm"}>58% — 74% (CI: 95%)</p>
      </div>
      </div>
      <div className={"flex items-center justify-between gap-space-xs pt-space-xs mt-1"}>
      <span className={"flex items-center gap-1 font-telemetry-sm text-telemetry-sm text-primary"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>accessible</span>
                      High Mobility Need
                    </span>
      <button className={"px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-telemetry-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"} data-action="dispatchDirect" data-args={"[\"Ghulam Rasool\"]"}>
                      Queue Amphibious
                    </button>
      </div>
      </div>
      {/*  Item 3: Maternity Shelter Cluster  */}
      <div className={"resident-item p-space-md rounded-xl bg-surface-container-high/70 backdrop-blur-md hover:bg-surface-container-highest transition-all duration-200 flex flex-col gap-space-xs shadow-md group"}>
      <div className={"flex items-start justify-between gap-space-sm"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"px-1.5 py-0.5 rounded bg-error/20 text-error font-telemetry-sm text-[11px] font-bold"}>RANK #03</span>
      <h3 className={"font-headline-sm text-body-lg text-on-surface font-bold truncate"}>Malir Riverbed Cluster 8 (Infants)</h3>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>ملیر ندی کلسٹر ۸ • 4 شیرخوار بچے اور مائیں</span>
      </div>
      <div className={"flex flex-col items-end"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-error font-extrabold leading-none"}>86.2</span>
      <span className={"font-telemetry-sm text-[10px] text-on-surface-variant uppercase"}>Inferred Risk</span>
      </div>
      </div>
      <div className={"grid grid-cols-2 gap-space-xs mt-1 bg-surface-container-lowest/60 p-space-xs rounded-lg text-on-surface-variant font-telemetry-sm text-[11px]"}>
      <div>
      <span className={"text-outline"}>Proxy Factors:</span>
      <p className={"text-on-surface font-medium"}>Riverbed flash crest within 3h</p>
      </div>
      <div>
      <span className={"text-outline"}>Confidence Int.:</span>
      <p className={"text-secondary font-bold font-telemetry-sm"}>70% — 82% (CI: 95%)</p>
      </div>
      </div>
      <div className={"flex items-center justify-between gap-space-xs pt-space-xs mt-1"}>
      <span className={"flex items-center gap-1 font-telemetry-sm text-telemetry-sm text-error"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>child_friendly</span>
                      4 Vulnerable Minors
                    </span>
      <button className={"px-space-md py-1.5 rounded-lg bg-error text-on-error font-headline-sm text-telemetry-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"} data-action="dispatchDirect" data-args={"[\"Malir Cluster 8\"]"}>
                      Dispatch Rescue
                    </button>
      </div>
      </div>
      {/*  Item 4: Korangi Creek Fisherfolk Compound  */}
      <div className={"resident-item p-space-md rounded-xl bg-surface-container-high/70 backdrop-blur-md hover:bg-surface-container-highest transition-all duration-200 flex flex-col gap-space-xs shadow-md group"}>
      <div className={"flex items-start justify-between gap-space-sm"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-telemetry-sm text-[11px] font-bold"}>RANK #04</span>
      <h3 className={"font-headline-sm text-body-lg text-on-surface font-bold truncate"}>Ibrahim Hyderi Settlement 3-A</h3>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>ابراہیم حیدری ماہی گیر جھگی • غیر مصدقہ</span>
      </div>
      <div className={"flex flex-col items-end"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary font-extrabold leading-none"}>83.5</span>
      <span className={"font-telemetry-sm text-[10px] text-on-surface-variant uppercase"}>Inferred Risk</span>
      </div>
      </div>
      <div className={"grid grid-cols-2 gap-space-xs mt-1 bg-surface-container-lowest/60 p-space-xs rounded-lg text-on-surface-variant font-telemetry-sm text-[11px]"}>
      <div>
      <span className={"text-outline"}>Proxy Factors:</span>
      <p className={"text-on-surface font-medium"}>Tidal surge barrier breach probability</p>
      </div>
      <div>
      <span className={"text-outline"}>Confidence Int.:</span>
      <p className={"text-secondary font-bold font-telemetry-sm"}>65% — 79% (CI: 95%)</p>
      </div>
      </div>
      <div className={"flex items-center justify-between gap-space-xs pt-space-xs mt-1"}>
      <span className={"flex items-center gap-1 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>tsunami</span>
                      Surge Zone 2
                    </span>
      <button className={"px-space-md py-1.5 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface font-headline-sm text-telemetry-sm font-semibold transition-all"} data-action="dispatchDirect" data-args={"[\"Ibrahim Hyderi\"]"}>
                      Send Aerial Drone
                    </button>
      </div>
      </div>
      {/*  Item 5: Machar Colony Dialysis Patient  */}
      <div className={"resident-item p-space-md rounded-xl bg-surface-container-high/70 backdrop-blur-md hover:bg-surface-container-highest transition-all duration-200 flex flex-col gap-space-xs shadow-md group"}>
      <div className={"flex items-start justify-between gap-space-sm"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-telemetry-sm text-[11px] font-bold"}>RANK #05</span>
      <h3 className={"font-headline-sm text-body-lg text-on-surface font-bold truncate"}>Bashir Ahmed (Dialysis Patient)</h3>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>بشیر احمد • مچھر کالونی، لیاری نالہ</span>
      </div>
      <div className={"flex flex-col items-end"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary font-extrabold leading-none"}>81.9</span>
      <span className={"font-telemetry-sm text-[10px] text-on-surface-variant uppercase"}>Inferred Risk</span>
      </div>
      </div>
      <div className={"grid grid-cols-2 gap-space-xs mt-1 bg-surface-container-lowest/60 p-space-xs rounded-lg text-on-surface-variant font-telemetry-sm text-[11px]"}>
      <div>
      <span className={"text-outline"}>Proxy Factors:</span>
      <p className={"text-on-surface font-medium"}>Power grid offline 6h + Dialysis cycle</p>
      </div>
      <div>
      <span className={"text-outline"}>Confidence Int.:</span>
      <p className={"text-secondary font-bold font-telemetry-sm"}>74% — 86% (CI: 95%)</p>
      </div>
      </div>
      <div className={"flex items-center justify-between gap-space-xs pt-space-xs mt-1"}>
      <span className={"flex items-center gap-1 font-telemetry-sm text-telemetry-sm text-error"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>medical_services</span>
                      Medical Urgency
                    </span>
      <button className={"px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-telemetry-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"} data-action="dispatchDirect" data-args={"[\"Bashir Ahmed\"]"}>
                      Queue Medic Evac
                    </button>
      </div>
      </div>
      </div>
      {/*  Pessimistic Queue Footer Summary  */}
      <div className={"pt-space-xs flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span>Showing 5 of 20 prioritised rows</span>
      <a className={"text-primary hover:underline font-bold flex items-center gap-1"} href={"#"}>
      <span>View All 20 Unreached</span>
      <span className={"material-symbols-outlined text-telemetry-sm"}>arrow_forward</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      {/*  Notification Toast (Hidden by default, triggered via JS)  */}
      <div className={"fixed bottom-12 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 bg-surface-container-high/95 backdrop-blur-2xl px-space-lg py-space-md rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.6)] flex items-center gap-space-md"} id={"toast"}>
      <div className={"w-8 h-8 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center"}>
      <span className={"material-symbols-outlined text-headline-sm"} id={"toastIcon"}>check_circle</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"} id={"toastTitle"}>Notification Title</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"} id={"toastDesc"}>Details here</span>
      </div>
      </div>
      </div>
  )
}
