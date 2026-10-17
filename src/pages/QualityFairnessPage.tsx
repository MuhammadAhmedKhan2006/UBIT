import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function QualityFairnessPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("QualityFairnessPage", nav)
  return (
    <div className={"bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen"} {...bind}>
{/*  Top Utility Contextual Breadcrumb & Live Mesh Status  */}
      <div className={"flex flex-wrap items-center justify-between gap-space-md mb-space-md"}>
      <div className={"flex items-center gap-space-sm text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <span className={"text-secondary flex items-center gap-1 font-semibold"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>verified_user</span>
      <span>AUDIT &amp; QUALITY</span>
      </span>
      <span>/</span>
      <span className={"text-on-surface font-medium"}>EQUITY_BIAS_ENGINE_V3.8</span>
      <span>/</span>
      <span className={"px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-telemetry-sm"}>KARACHI_FLOOD_NODE_S4</span>
      </div>
      <div className={"flex items-center gap-space-md"}>
      <div className={"flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"w-2 h-2 rounded-full bg-secondary animate-pulse"}></span>
      <span>Demographic Parity Index:</span>
      <span className={"text-secondary font-bold"} id={"dpi-value"}>0.61 (Severely Skewed)</span>
      </div>
      <div className={"flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-primary"}>history</span>
      <span>Last Audit Check: 2m ago</span>
      </div>
      </div>
      </div>
      {/*  Sub-Navigation Bar  */}
      <div className={"flex items-center justify-between border-b border-transparent bg-surface-container-low rounded-xl p-1.5 mb-space-lg shadow-sm"}>
      <nav className={"flex items-center gap-space-xs"}>
      <button className={"px-space-md py-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-headline-sm text-body-sm transition-all flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-body-md"}>analytics</span>
      <span>Data Quality</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant/70"}>ڈیٹا معیار</span>
      </button>
      <button className={"px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-semibold shadow-[0_0_16px_rgba(242,169,59,0.35)] flex items-center gap-space-xs transition-all"}>
      <span className={"material-symbols-outlined text-body-md"} style={{ fontVariationSettings: "'FILL' 1" }}>balance</span>
      <span>Algorithmic Fairness</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-primary-container/90"}>الگورتھمک انصاف</span>
      <span className={"w-2 h-2 rounded-full bg-on-primary-container ml-1"}></span>
      </button>
      <button className={"px-space-md py-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-headline-sm text-body-sm transition-all flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-body-md"}>fingerprint</span>
      <span>Immutable Audit Log</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant/70"}>ناقابلِ ترمیم لاگ</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary bg-surface-container-high px-1.5 py-0.2 rounded-full"}>HASH:27E9</span>
      </button>
      </nav>
      <div className={"hidden xl:flex items-center gap-space-sm pr-space-sm font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"material-symbols-outlined text-primary text-body-md"}>lock</span>
      <span>Ledger Sealed: SHA-256</span>
      </div>
      </div>
      {/*  Header Banner: Context & Digital Divide Safeguard Protocol  */}
      <div className={"relative overflow-hidden rounded-xl bg-surface-container p-space-lg mb-space-lg shadow-md"}>
      <div className={"absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"}></div>
      <div className={"absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-secondary/5 blur-2xl pointer-events-none"}></div>
      <div className={"relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg"}>
      <div className={"flex flex-col gap-space-xs max-w-4xl"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"px-space-sm py-0.5 rounded-full bg-primary/20 text-primary font-telemetry-sm text-telemetry-sm uppercase tracking-wider font-semibold"}>
                  Safeguard Protocol #84-ALPHA
                </span>
      <span className={"text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>| Target Vulnerability Compensator</span>
      </div>
      <h1 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
                Algorithmic Fairness &amp; Equity Bias Audit
              </h1>
      <p className={"font-urdu-headline text-headline-sm text-primary font-semibold -mt-1"}>
                الگورتھمک انصاف اور غیر جانبداری کا باضابطہ آڈٹ
              </p>
      <p className={"font-body-md text-body-md text-on-surface-variant max-w-3xl"}>
                Automated safeguards mitigate digital-divide distortions. In flood scenarios, smartphone-dense neighborhoods generate continuous repeat calls, which artificially elevate their prioritization. Our Bayesian equity model estimates silent populations in low-connectivity informal settlements to ensure unvoiced households receive equitable rescue dispatches.
              </p>
      </div>
      {/*  Quick Summary Metric Capsule  */}
      <div className={"flex flex-row lg:flex-col items-center lg:items-end gap-space-sm bg-surface-container-lowest/70 backdrop-blur-md p-space-md rounded-xl min-w-[240px]"}>
      <div className={"text-right"}>
      <div className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase"}>Protected Settlements</div>
      <div className={"font-telemetry-lg text-telemetry-lg text-secondary font-bold"}>11 Districts</div>
      </div>
      <div className={"text-right"}>
      <div className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase"}>Pre-Correction Silent Bias</div>
      <div className={"font-telemetry-md text-telemetry-md text-error font-semibold"}>+39.4% Delay Risk</div>
      </div>
      </div>
      </div>
      </div>
      {/*  Quiet-Area Gap Flag Card (Prominent Urgent Callout)  */}
      <div className={"relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg mb-space-lg shadow-xl shadow-error/5"}>
      <div className={"absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-error via-primary to-secondary"}></div>
      <div className={"flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md"}>
      <div className={"flex items-start gap-space-md"}>
      <div className={"w-12 h-12 rounded-xl bg-error-container/30 text-error flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(229,83,61,0.25)]"}>
      <span className={"material-symbols-outlined text-headline-md"} style={{ fontVariationSettings: "'FILL' 1" }}>cell_tower</span>
      </div>
      <div className={"flex flex-col gap-1"}>
      <div className={"flex flex-wrap items-center gap-space-xs"}>
      <span className={"px-2.5 py-0.5 rounded-full bg-error-container/40 text-error font-telemetry-sm text-telemetry-sm font-bold tracking-wide uppercase flex items-center gap-1"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span>
                    Quiet-Area Disparity Detected
                  </span>
      <span className={"text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>Telemetry Alert ID: QA-LY4-092</span>
      </div>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                  Lyari Sector 4 &amp; Malir River Basin: Severe Silent Signal Shadow
                </h2>
      <div className={"font-urdu-body text-body-sm text-on-surface-variant"}>
                  لیاری سیکٹر ۴ اور ملیر بیسن میں سگنلز غائب: خاموش آبادی کو ترجیحی ریسکیو کے بغیر شدید جان کا خطرہ لاحق ہے۔
                </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-3xl"}>
                  Cellular tower telemetry shows a <strong className={"text-error font-semibold"}>78% drop in cellular uplink traffic</strong> due to grid outage. 
                  Estimated <strong className={"text-primary font-semibold"}>34 highly vulnerable households</strong> (including 6 multi-generational elderly units) are in danger of falling to Queue Rank &gt; 40 unless Algorithmic Equity Compensation (1.45x) is applied.
                </p>
      </div>
      </div>
      <div className={"flex flex-row md:flex-col items-end gap-space-xs shrink-0 self-stretch md:self-auto justify-end"}>
      <button className={"w-full md:w-auto px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_0_rgba(0,0,0,0.2),0_0_20px_rgba(242,169,59,0.35)] hover:bg-primary-fixed hover:shadow-[0_0_24px_rgba(242,169,59,0.5)] active:translate-y-0.5 transition-all flex items-center justify-center gap-space-xs"} id={"open-correction-modal"}>
      <span className={"material-symbols-outlined text-body-lg"}>tune</span>
      <span>Apply Equity Correction</span>
      <span className={"font-urdu-body text-telemetry-sm"}>تصحیح نافذ کریں</span>
      </button>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant/80"}>Pending approval by Coordinator Zara</span>
      </div>
      </div>
      </div>
      {/*  Primary Interactive Analytics Grid: Scatter / Curve Comparison & Telemetry Docks  */}
      <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg"}>
      {/*  Left 8 Columns: Scatter Plot & Curve Chart  */}
      <div className={"lg:col-span-8 flex flex-col rounded-xl bg-surface-container p-space-lg shadow-md relative"}>
      <div className={"flex flex-wrap items-center justify-between gap-space-sm mb-space-md"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-space-xs"}>
      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                    Dispatch Priority Rank vs. Incoming Report Rate
                  </h3>
      <span className={"material-symbols-outlined text-on-surface-variant text-telemetry-md cursor-help"} title={"Correlating reported call velocity with rescue priority allocation."}>info</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>
                  رپورٹ کی رفتار بنام ترجیحی قطار - خاموش علاقوں کی ناہمواری
                </span>
      </div>
      {/*  Mode Toggle Controller  */}
      <div className={"flex items-center bg-surface-container-lowest p-1 rounded-xl shadow-inner gap-1"}>
      <button className={"px-space-sm py-1.5 rounded-lg font-telemetry-sm text-telemetry-sm transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1.5"} id={"btn-show-before"}>
      <span className={"w-2 h-2 rounded-full bg-error"}></span>
      <span>Raw Digital Stream (Biased)</span>
      </button>
      <button className={"px-space-sm py-1.5 rounded-lg font-telemetry-sm text-telemetry-sm transition-all bg-primary-container text-on-primary-container font-semibold shadow-[0_0_12px_rgba(242,169,59,0.3)] flex items-center gap-1.5"} id={"btn-show-after"}>
      <span className={"w-2 h-2 rounded-full bg-secondary"}></span>
      <span>Equity Compensated (Current Sim)</span>
      </button>
      </div>
      </div>
      {/*  Graph Scrim Canvas Container  */}
      <div className={"relative w-full h-[360px] bg-surface-container-lowest/80 rounded-xl p-space-md overflow-hidden flex flex-col justify-between"}>
      {/*  Background Grid Ticks (SVG)  */}
      <svg className={"absolute inset-0 w-full h-full text-surface-container-high pointer-events-none"} xmlns={"http://www.w3.org/2000/svg"}>
      <defs>
      <pattern height={"40"} id={"grid-pattern"} patternUnits={"userSpaceOnUse"} width={"60"}>
      <path d={"M 60 0 L 0 0 0 40"} fill={"none"} stroke={"currentColor"} strokeOpacity={"0.3"} strokeWidth={"0.5"}></path>
      </pattern>
      </defs>
      <rect fill={"url(#grid-pattern)"} height={"100%"} width={"100%"}></rect>
      </svg>
      {/*  Dynamic Visual Data Layer (Inline SVG Curve + Nodes)  */}
      <svg className={"absolute inset-0 w-full h-full pointer-events-auto"} id={"chart-svg"} preserveAspectRatio={"none"} viewBox={"0 0 800 360"}>
      <defs>
      {/*  Gradient for Fair Region  */}
      <linearGradient id={"fairZoneGrad"} x1={"0%"} x2={"0%"} y1={"0%"} y2={"100%"}>
      <stop offset={"0%"} stopColor={"#1da290"} stopOpacity={"0.25"}></stop>
      <stop offset={"100%"} stopColor={"#1da290"} stopOpacity={"0.0"}></stop>
      </linearGradient>
      {/*  Glow Filters  */}
      <filter height={"140%"} id={"glow-amber"} width={"140%"} x={"-20%"} y={"-20%"}>
      <feGaussianBlur result={"glow"} stdDeviation={"3"}></feGaussianBlur>
      <feMerge>
      <feMergeNode in={"glow"}></feMergeNode>
      <feMergeNode in={"SourceGraphic"}></feMergeNode>
      </feMerge>
      </filter>
      <filter height={"140%"} id={"glow-error"} width={"140%"} x={"-20%"} y={"-20%"}>
      <feGaussianBlur result={"glow"} stdDeviation={"4"}></feGaussianBlur>
      <feMerge>
      <feMergeNode in={"glow"}></feMergeNode>
      <feMergeNode in={"SourceGraphic"}></feMergeNode>
      </feMerge>
      </filter>
      </defs>
      {/*  Safe Baseline Corridor  */}
      <path d={"M 60 40 L 760 300 L 760 320 L 60 80 Z"} fill={"url(#fairZoneGrad)"}></path>
      {/*  Dynamic Raw Curve (Biased Line)  */}
      <path className={"opacity-80 transition-opacity duration-500"} d={"M 60 310 Q 250 280, 480 180 T 750 40"} fill={"none"} id={"curve-biased"} stroke={"#ffb4ab"} strokeDasharray={"6 4"} strokeWidth={"2.5"}></path>
      {/*  Dynamic Corrected Curve (Fairness Line)  */}
      <path className={"transition-all duration-700"} d={"M 60 110 C 220 120, 460 140, 750 60"} fill={"none"} filter={"url(#glow-amber)"} id={"curve-corrected"} stroke={"#65d9c5"} strokeWidth={"3"}></path>
      {/*  Quiet Bias Shaded Area Indicator (Callout on the left)  */}
      <g className={"transition-opacity duration-500"} id={"quiet-zone-highlight"}>
      <rect fill={"#93000a"} fillOpacity={"0.12"} height={"280"} rx={"8"} width={"220"} x={"60"} y={"35"}></rect>
      <text fill={"#ffb4ab"} fontFamily={"JetBrains Mono"} fontSize={"11"} fontWeight={"600"} x={"75"} y={"60"}>QUIET-AREA VULNERABILITY TRAP</text>
      <text fill={"#d6c3af"} fontFamily={"Inter"} fontSize={"10"} x={"75"} y={"78"}>Low smartphone penetration &amp; grid failure zone</text>
      </g>
      {/*  Scatter Points: Wealthy High-Volume Centers (Top Right)  */}
      <g id={"cluster-high-reporting"}>
      {/*  Clifton Sector 5  */}
      <circle className={"hover:r-9 transition-all cursor-pointer"} cx={"710"} cy={"55"} fill={"#f2a93b"} r={"7"}></circle>
      <text fill={"#d8e5ea"} fontFamily={"Inter"} fontSize={"11"} fontWeight={"600"} textAnchor={"end"} x={"705"} y={"40"}>Clifton Block 2 (240 Calls/hr)</text>
      {/*  PECHS Ext  */}
      <circle className={"hover:r-8 transition-all cursor-pointer"} cx={"670"} cy={"85"} fill={"#f2a93b"} r={"6"}></circle>
      <text fill={"#d8e5ea"} fontFamily={"Inter"} fontSize={"10"} textAnchor={"end"} x={"660"} y={"75"}>PECHS Blk 6 (188 Calls)</text>
      {/*  DHA Phase VI  */}
      <circle className={"cursor-pointer"} cx={"630"} cy={"100"} fill={"#f2a93b"} r={"6.5"}></circle>
      </g>
      {/*  Scatter Points: Middle Ground  */}
      <g id={"cluster-mid-reporting"}>
      <circle cx={"440"} cy={"150"} fill={"#65d9c5"} r={"5"}></circle>
      <text fill={"#d8e5ea"} fontFamily={"Inter"} fontSize={"10"} x={"445"} y={"145"}>Gulshan Town</text>
      <circle cx={"390"} cy={"170"} fill={"#65d9c5"} r={"5.5"}></circle>
      <text fill={"#d8e5ea"} fontFamily={"Inter"} fontSize={"10"} x={"395"} y={"165"}>Nazimabad Central</text>
      </g>
      {/*  Scatter Points: Lyari & Machar Colony (Dynamic Position: Biased vs Corrected)  */}
      {/*  Point 1: Lyari Sector 4  */}
      <g className={"transition-transform duration-700"} id={"node-lyari"}>
      <circle className={"cursor-pointer animate-pulse"} cx={"130"} cy={"115"} fill={"#ffb956"} filter={"url(#glow-amber)"} id={"dot-lyari"} r={"9"} stroke={"#f2a93b"} strokeWidth={"2"}></circle>
      <path d={"M 130 290 L 130 130"} id={"vector-lyari"} stroke={"#f2a93b"} strokeDasharray={"3 3"} strokeWidth={"1.5"}></path>
      <text fill={"#ffca85"} fontFamily={"JetBrains Mono"} fontSize={"11"} fontWeight={"700"} id={"label-lyari"} x={"145"} y={"120"}>
                    Lyari Sec 4 [Elevated: Rank #3]
                  </text>
      <text className={"opacity-60"} fill={"#ffb4ab"} fontFamily={"JetBrains Mono"} fontSize={"10"} id={"old-label-lyari"} x={"145"} y={"295"}>
                    Biased Rank: #38 (Severe omission)
                  </text>
      </g>
      {/*  Point 2: Machar Colony Creek  */}
      <g className={"transition-transform duration-700"} id={"node-machar"}>
      <circle className={"cursor-pointer"} cx={"210"} cy={"135"} fill={"#65d9c5"} id={"dot-machar"} r={"7.5"} stroke={"#1da290"} strokeWidth={"2"}></circle>
      <path d={"M 210 270 L 210 150"} id={"vector-machar"} stroke={"#65d9c5"} strokeDasharray={"3 3"} strokeWidth={"1.5"}></path>
      <text fill={"#83f6e1"} fontFamily={"JetBrains Mono"} fontSize={"11"} fontWeight={"600"} id={"label-machar"} x={"225"} y={"140"}>
                    Machar Colony [Boosted: Rank #7]
                  </text>
      </g>
      </svg>
      {/*  Chart Axes Labels  */}
      <div className={"relative z-10 flex items-center justify-between text-on-surface-variant font-telemetry-sm text-telemetry-sm pt-2"}>
      <div className={"flex items-center gap-1 text-error font-medium"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>volume_off</span>
      <span>0-5 Reports/hr (Silent Informal Belts)</span>
      </div>
      <span className={"font-telemetry-sm text-on-surface-variant"}>Incoming Reporting Volume (Calls &amp; WhatsApp / hr) →</span>
      <div className={"flex items-center gap-1 text-primary font-medium"}>
      <span>250+ Reports/hr (High Density 4G)</span>
      <span className={"material-symbols-outlined text-telemetry-sm"}>volume_up</span>
      </div>
      </div>
      <div className={"absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-on-surface-variant font-telemetry-sm text-telemetry-sm pointer-events-none flex items-center gap-2"}>
      <span>← HIGH PRIORITY (Rank #1)</span>
      <span className={"text-outline-variant"}>|</span>
      <span>LOW PRIORITY →</span>
      </div>
      </div>
      {/*  Graph Footnote & Real-Time Parameter Toggles  */}
      <div className={"flex flex-wrap items-center justify-between gap-space-md mt-space-md pt-space-sm border-t border-surface-container-high/40"}>
      <div className={"flex items-center gap-space-md font-telemetry-sm text-telemetry-sm"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"w-3 h-0.5 bg-error border border-error"}></span>
      <span className={"text-on-surface-variant"}>Raw Demand Curve (Caller-Vol Driven)</span>
      </div>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"w-3 h-1 bg-secondary rounded-full shadow-[0_0_8px_rgba(101,217,197,0.5)]"}></span>
      <span className={"text-secondary font-semibold"}>Parity Calibrated Curve (1.45x Proxy Boost)</span>
      </div>
      </div>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Model Confidence:</span>
      <span className={"px-2 py-0.5 rounded bg-surface-container-high text-primary font-telemetry-sm text-telemetry-sm font-bold"}>94.8% Bayesian</span>
      </div>
      </div>
      </div>
      {/*  Right 4 Columns: Sector Fairness Breakdown & Audit Metrics  */}
      <div className={"lg:col-span-4 flex flex-col gap-space-md"}>
      {/*  Fairness Audit Gauge Card  */}
      <div className={"rounded-xl bg-surface-container p-space-md shadow-md flex flex-col"}>
      <div className={"flex items-center justify-between mb-space-sm"}>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"}>Equity Index Telemetry</span>
      <span className={"px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-telemetry-sm text-telemetry-sm font-semibold"}>
                  ISO-24029 VALIDATED
                </span>
      </div>
      {/*  Gauge Visual  */}
      <div className={"flex items-center justify-between bg-surface-container-lowest p-space-sm rounded-lg mb-space-sm"}>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>GINI DISPATCH EQUALITY</span>
      <div className={"flex items-baseline gap-1 mt-0.5"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary font-black"} id={"gini-score"}>0.24</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-semibold"}>(-0.19 FAIR)</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant/80"}>بہترین مساوی ترسیل</span>
      </div>
      {/*  Circular Metric Progress SVG  */}
      <div className={"relative w-16 h-16 shrink-0 flex items-center justify-center"}>
      <svg className={"w-full h-full -rotate-90"} viewBox={"0 0 36 36"}>
      <path className={"text-surface-container-high"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} fill={"none"} stroke={"currentColor"} strokeWidth={"3.5"}></path>
      <path className={"text-primary transition-all duration-700 ease-out"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} fill={"none"} stroke={"currentColor"} strokeDasharray={"82, 100"} strokeLinecap={"round"} strokeWidth={"3.5"}></path>
      </svg>
      <span className={"absolute font-telemetry-sm text-telemetry-sm font-bold text-on-surface"}>82%</span>
      </div>
      </div>
      {/*  Sector Disparity Mini-Table  */}
      <div className={"flex flex-col gap-space-xs mt-1"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>Settlement Bias Analysis</span>
      {/*  Lyari Sector 4 Row  */}
      <div className={"flex items-center justify-between p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors"}>
      <div className={"flex flex-col"}>
      <span className={"font-body-sm text-body-sm font-semibold text-on-surface"}>Lyari Sector 4</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error"}>Grid Silence (-78% pings)</span>
      </div>
      <div className={"text-right"}>
      <div className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>+1.45x Boost</div>
      <div className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Queue: #38 → <span className={"text-secondary font-bold"}>#3</span></div>
      </div>
      </div>
      {/*  Machar Colony Row  */}
      <div className={"flex items-center justify-between p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors"}>
      <div className={"flex flex-col"}>
      <span className={"font-body-sm text-body-sm font-semibold text-on-surface"}>Machar Colony Creek</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error"}>Unregistered Informal Settle.</span>
      </div>
      <div className={"text-right"}>
      <div className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>+1.32x Boost</div>
      <div className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Queue: #41 → <span className={"text-secondary font-bold"}>#7</span></div>
      </div>
      </div>
      {/*  DHA Phase VI (Caller-heavy)  */}
      <div className={"flex items-center justify-between p-2 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors opacity-90"}>
      <div className={"flex flex-col"}>
      <span className={"font-body-sm text-body-sm font-semibold text-on-surface"}>DHA Phase VI</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Repeat Calls Saturation</span>
      </div>
      <div className={"text-right"}>
      <div className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant font-medium"}>0.82x Normalization</div>
      <div className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Queue: #2 → <span className={"text-on-surface font-semibold"}>#5</span></div>
      </div>
      </div>
      </div>
      </div>
      {/*  Live Action Controller Card  */}
      <div className={"rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between flex-1"}>
      <div className={"flex flex-col gap-1 mb-space-sm"}>
      <div className={"flex items-center gap-space-xs text-primary font-headline-sm text-body-sm font-semibold"}>
      <span className={"material-symbols-outlined text-body-md"}>balance</span>
      <span>Manual Override &amp; Calibration</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                  Coordinators hold discretionary authority to recalibrate algorithmic weights based on aerial drone reconnaissance or direct Ham radio dispatches.
                </p>
      </div>
      <div className={"flex flex-col gap-space-xs"}>
      <button className={"w-full py-space-sm px-space-md rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_0_rgba(0,0,0,0.2),0_0_16px_rgba(242,169,59,0.35)] hover:bg-primary-fixed hover:shadow-[0_0_24px_rgba(242,169,59,0.5)] transition-all flex items-center justify-center gap-space-xs"} id={"trigger-apply-btn"}>
      <span className={"material-symbols-outlined text-body-md"}>lock_open</span>
      <span>Apply Equity Correction</span>
      <span className={"font-urdu-body text-telemetry-sm"}>تصحیح نافذ کریں</span>
      </button>
      <button className={"w-full py-space-sm px-space-md rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-body-sm hover:bg-surface-container-highest transition-all flex items-center justify-center gap-space-xs"} id={"btn-undo-correction"}>
      <span className={"material-symbols-outlined text-body-md text-on-surface-variant"}>undo</span>
      <span>Undo Correction / سابقہ حالت پر لائیں</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      {/*  Re-ordered Dispatch Queue Table Preview  */}
      <div className={"rounded-xl bg-surface-container p-space-lg shadow-md mb-space-lg"}>
      <div className={"flex flex-wrap items-center justify-between gap-space-sm mb-space-md"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-space-sm"}>
      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                  Impacted Dispatch Queue: Real-Time Recalibration State
                </h3>
      <span className={"px-2 py-0.5 rounded-full bg-primary/20 text-primary font-telemetry-sm text-telemetry-sm font-bold"}>14 Positions Shifted</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>
                نئے الگورتھم کے تحت ریسکیو ترجیحات کی فہرست
              </span>
      </div>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Simulated Batch: #882-B</span>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high text-secondary hover:text-on-surface font-telemetry-sm text-telemetry-sm flex items-center gap-1 transition-colors"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>download</span>
      <span>Audit Export (CSV)</span>
      </button>
      </div>
      </div>
      {/*  Table Container  */}
      <div className={"overflow-x-auto w-full"}>
      <table className={"w-full text-left font-body-sm text-body-sm"}>
      <thead>
      <tr className={"bg-surface-container-lowest/70 text-on-surface-variant font-telemetry-sm text-telemetry-sm uppercase"}>
      <th className={"py-space-sm px-space-md rounded-l-lg"}>New Priority</th>
      <th className={"py-space-sm px-space-md"}>Target Household / Location</th>
      <th className={"py-space-sm px-space-md"}>Urdu Label</th>
      <th className={"py-space-sm px-space-md"}>Vulnerability Vector</th>
      <th className={"py-space-sm px-space-md"}>Raw Call Vol</th>
      <th className={"py-space-sm px-space-md"}>Correction Factor</th>
      <th className={"py-space-sm px-space-md rounded-r-lg"}>Assigned Unit</th>
      </tr>
      </thead>
      <tbody className={"divide-y divide-surface-container-high/40"}>
      {/*  Row 1: Lyari Rescued from Silence  */}
      <tr className={"bg-primary/5 hover:bg-primary/10 transition-colors"}>
      <td className={"py-space-sm px-space-md"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"w-6 h-6 rounded-full bg-primary text-on-primary font-telemetry-sm text-telemetry-sm font-bold flex items-center justify-center"}>#3</span>
      <span className={"text-secondary font-telemetry-sm text-telemetry-sm font-semibold"}>↑ +35</span>
      </div>
      </td>
      <td className={"py-space-sm px-space-md font-semibold text-on-surface"}>
                    Lyari Sec 4, St 12 (Elderly 6-Person Unit)
                  </td>
      <td className={"py-space-sm px-space-md font-urdu-body text-telemetry-md text-primary font-medium"}>
                    لیاری سیکٹر ۴، گلی ۱۲ (بزرگ افراد)
                  </td>
      <td className={"py-space-sm px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm font-semibold flex items-center gap-1 w-max"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>warning</span>
                      Submerged Ground + Zero Connectivity
                    </span>
      </td>
      <td className={"py-space-sm px-space-md font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
                    1 SMS via Mesh (0 Voice)
                  </td>
      <td className={"py-space-sm px-space-md"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>+1.45x Equity Weight</span>
      </td>
      <td className={"py-space-sm px-space-md"}>
      <span className={"px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-telemetry-sm text-telemetry-sm font-medium"}>Boat Team #09 (Lyari)</span>
      </td>
      </tr>
      {/*  Row 2: Machar Colony  */}
      <tr className={"bg-secondary/5 hover:bg-secondary/10 transition-colors"}>
      <td className={"py-space-sm px-space-md"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container font-telemetry-sm text-telemetry-sm font-bold flex items-center justify-center"}>#7</span>
      <span className={"text-secondary font-telemetry-sm text-telemetry-sm font-semibold"}>↑ +34</span>
      </div>
      </td>
      <td className={"py-space-sm px-space-md font-semibold text-on-surface"}>
                    Machar Creek Bund (Fisherfolk Shanty)
                  </td>
      <td className={"py-space-sm px-space-md font-urdu-body text-telemetry-md text-secondary font-medium"}>
                    ماچھر کالونی کریک بند
                  </td>
      <td className={"py-space-sm px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-tertiary-container/30 text-on-surface font-telemetry-sm text-telemetry-sm font-semibold flex items-center gap-1 w-max"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>child_care</span>
                      Infants stranded + Tidal surge
                    </span>
      </td>
      <td className={"py-space-sm px-space-md font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
                    Proxy Est. (Historical GIS)
                  </td>
      <td className={"py-space-sm px-space-md"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-bold"}>+1.32x Equity Weight</span>
      </td>
      <td className={"py-space-sm px-space-md"}>
      <span className={"px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-telemetry-sm text-telemetry-sm font-medium"}>Zodiac Raft #02</span>
      </td>
      </tr>
      {/*  Row 3: Normalized Smartphone Caller  */}
      <tr className={"hover:bg-surface-container-high/40 transition-colors"}>
      <td className={"py-space-sm px-space-md"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"w-6 h-6 rounded-full bg-surface-container-highest text-on-surface font-telemetry-sm text-telemetry-sm font-bold flex items-center justify-center"}>#12</span>
      <span className={"text-on-surface-variant font-telemetry-sm text-telemetry-sm font-medium"}>↓ -8</span>
      </div>
      </td>
      <td className={"py-space-sm px-space-md text-on-surface"}>
                    Clifton Khayaban-e-Shamsheer, Apt 4B
                  </td>
      <td className={"py-space-sm px-space-md font-urdu-body text-telemetry-md text-on-surface-variant"}>
                    کلفٹن خیابانِ شمشیر
                  </td>
      <td className={"py-space-sm px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-telemetry-sm text-telemetry-sm font-medium"}>
                      2nd Floor Safe / Water at Ground
                    </span>
      </td>
      <td className={"py-space-sm px-space-md font-telemetry-sm text-telemetry-sm text-primary"}>
                    18 Calls (De-duplicated)
                  </td>
      <td className={"py-space-sm px-space-md"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>0.82x Call-Cap Factor</span>
      </td>
      <td className={"py-space-sm px-space-md"}>
      <span className={"px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>Standby Fleet #14</span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/*  Confirmation Modal (Overlaid Frosted Glass Modal)  */}
      <div className={"fixed inset-0 z-50 flex items-center justify-center p-space-md bg-surface-dim/80 backdrop-blur-md transition-opacity duration-300"} id={"fairness-modal"}>
      <div className={"relative w-full max-w-2xl rounded-2xl bg-surface-container-low/95 p-space-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8),0_0_32px_rgba(242,169,59,0.2)] backdrop-blur-2xl flex flex-col gap-space-md"}>
      {/*  Top Amber Rim Highlight Accent  */}
      <div className={"absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-primary-container via-primary to-secondary"}></div>
      {/*  Modal Header  */}
      <div className={"flex items-start justify-between gap-space-md"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(242,169,59,0.3)]"}>
      <span className={"material-symbols-outlined text-headline-sm"} style={{ fontVariationSettings: "'FILL' 1" }}>balance</span>
      </div>
      <div className={"flex flex-col"}>
      <h3 className={"font-headline-md text-headline-sm text-on-surface font-bold"}>
                    Confirm Algorithmic Equity Redistribution
                  </h3>
      <span className={"font-urdu-headline text-body-sm text-primary font-semibold"}>
                    الگورتھمک برابری کی تصحیح کی تصدیق
                  </span>
      </div>
      </div>
      <button className={"w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"} id={"close-modal-x"}>
      <span className={"material-symbols-outlined text-body-lg"}>close</span>
      </button>
      </div>
      {/*  Modal Body Explanatory Content  */}
      <div className={"flex flex-col gap-space-sm bg-surface-container-lowest/80 p-space-md rounded-xl"}>
      <div className={"flex items-center gap-space-xs text-primary font-telemetry-sm text-telemetry-sm font-semibold uppercase"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>shield_with_heart</span>
      <span>Equity Safeguard Protocol Override Active</span>
      </div>
      <p className={"font-body-md text-body-sm text-on-surface leading-relaxed"}>
                Applying the <strong className={"text-primary font-bold"}>1.45x equity boost</strong> will adjust for severe cellular blackouts in informal settlements. This recalibration will immediately:
              </p>
      <ul className={"flex flex-col gap-2 my-1 text-on-surface-variant font-body-sm text-body-sm"}>
      <li className={"flex items-start gap-space-xs"}>
      <span className={"material-symbols-outlined text-secondary text-body-md shrink-0"}>check_circle</span>
      <span><strong className={"text-on-surface"}>Reorder 14 queue positions</strong> across South Karachi Hub dispatches.</span>
      </li>
      <li className={"flex items-start gap-space-xs"}>
      <span className={"material-symbols-outlined text-secondary text-body-md shrink-0"}>check_circle</span>
      <span>Prioritize <strong className={"text-secondary font-semibold"}>6 silent multi-generational elderly households</strong> lacking 4G signals ahead of continuous smartphone repeat-callers.</span>
      </li>
      <li className={"flex items-start gap-space-xs"}>
      <span className={"material-symbols-outlined text-secondary text-body-md shrink-0"}>check_circle</span>
      <span>Write an immutable cryptographically stamped event into the Disaster Response Log (Hash ID: 0x98A...F4).</span>
      </li>
      </ul>
      <div className={"p-2.5 rounded bg-surface-container-high/80 text-on-surface-variant font-urdu-body text-telemetry-sm leading-relaxed text-right"}>
                یہ عمل ڈیجیٹل تفریق کو ختم کر کے ان ۶ خاموش خاندانوں کو ترجیح دے گا جن کے پاس بجلی یا موبائل سگنل موجود نہیں۔ کیا آپ اس کی تصدیق کرتے ہیں؟
              </div>
      </div>
      {/*  Live Coordinator Audit Meta  */}
      <div className={"flex items-center justify-between text-on-surface-variant font-telemetry-sm text-telemetry-sm px-1"}>
      <span>Coordinator: <strong className={"text-on-surface"}>Zara Khan (Authorized ID #KHI-901)</strong></span>
      <span>Override Level: Tier 1 Operational</span>
      </div>
      {/*  Action Buttons  */}
      <div className={"flex items-center justify-end gap-space-sm pt-space-xs"}>
      <button className={"px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-headline-sm text-body-sm transition-all flex items-center gap-1"} id={"modal-cancel-btn"}>
      <span>Cancel</span>
      <span className={"text-on-surface-variant/70"}>/ منسوخ</span>
      </button>
      <button className={"px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_0_rgba(0,0,0,0.2),0_0_20px_rgba(242,169,59,0.4)] hover:bg-primary-fixed hover:shadow-[0_0_28px_rgba(242,169,59,0.6)] active:translate-y-0.5 transition-all flex items-center gap-space-xs"} id={"modal-confirm-btn"}>
      <span className={"material-symbols-outlined text-body-md"}>verified</span>
      <span>Confirm &amp; Recalibrate Queue</span>
      <span className={"font-urdu-body text-telemetry-sm"}>تصدیق اور نافذ کریں</span>
      </button>
      </div>
      </div>
      </div>
      </div>
  )
}
