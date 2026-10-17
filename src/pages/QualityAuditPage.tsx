import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function QualityAuditPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("QualityAuditPage", nav)
  return (
    <div className={"bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen"} {...bind}>
{/*  Interactive & State Logic Scripts  */}

      {/*  Sub-Navigation Bar  */}
      <section className={"flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md pb-space-lg"}>
      <div className={"flex items-center gap-space-xs p-1 bg-surface-container-lowest rounded-xl shadow-md"}>
      <button className={"audit-tab-trigger px-space-md py-space-sm font-headline-sm text-body-md rounded-lg text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-space-sm"} data-action="switchAuditTab" data-args={"[\"__this__\",\"data-quality\"]"}>
      <span className={"material-symbols-outlined text-headline-sm"}>dataset</span>
      <span>Data Quality</span>
      <span className={"font-urdu-body text-telemetry-sm opacity-60"}>ڈیٹا کوالٹی</span>
      </button>
      <button className={"audit-tab-trigger px-space-md py-space-sm font-headline-sm text-body-md rounded-lg text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-space-sm"} data-action="switchAuditTab" data-args={"[\"__this__\",\"algorithmic-fairness\"]"}>
      <span className={"material-symbols-outlined text-headline-sm"}>balance</span>
      <span>Algorithmic Fairness</span>
      <span className={"font-urdu-body text-telemetry-sm opacity-60"}>الگورتھم مساوات</span>
      </button>
      <button className={"audit-tab-trigger px-space-md py-space-sm font-headline-sm text-body-md rounded-lg bg-surface-container-high text-primary font-semibold shadow-sm flex items-center gap-space-sm"} data-action="switchAuditTab" data-args={"[\"__this__\",\"audit-log\"]"}>
      <span className={"material-symbols-outlined text-headline-sm"}>history_edu</span>
      <span>Immutable Audit Log</span>
      <span className={"font-urdu-body text-telemetry-sm text-primary-fixed-dim"}>ناقابلِ ترمیم آڈٹ لاگ</span>
      <span className={"ml-1 w-2 h-2 rounded-full bg-secondary animate-pulse"}></span>
      </button>
      </div>
      {/*  Right Telemetry Strip  */}
      <div className={"flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm font-telemetry-sm text-telemetry-sm"}>
      <span className={"material-symbols-outlined text-secondary text-headline-sm"}>lock_clock</span>
      <span className={"text-on-surface-variant"}>Block Height:</span>
      <span className={"text-secondary font-bold"}>#48,912</span>
      <span className={"text-outline-variant"}>|</span>
      <span className={"text-on-surface-variant"}>Sync:</span>
      <span className={"text-primary font-semibold"}>100% Validated</span>
      </div>
      </section>
      {/*  Cryptographic Immutable Seal Banner  */}
      <section className={"relative overflow-hidden rounded-xl bg-surface-container-low p-space-md md:p-space-lg mb-space-lg shadow-xl"}>
      <div className={"absolute -right-16 -top-16 w-64 h-64 rounded-full bg-secondary/5 blur-3xl pointer-events-none"}></div>
      <div className={"absolute left-1/3 -bottom-16 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none"}></div>
      <div className={"relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg"}>
      {/*  Left: Header Details  */}
      <div className={"flex flex-col gap-space-xs"}>
      <div className={"flex items-center gap-space-sm flex-wrap"}>
      <span className={"px-space-xs py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm tracking-wider flex items-center gap-1"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-secondary"}></span>
                  COMPLIANCE PROTOCOL ISO-27001 / NDMA-V4
                </span>
      <span className={"text-outline-variant text-telemetry-sm"}>•</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Active Peer: Karachi-South-Relay-09</span>
      </div>
      <h1 className={"font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight"}>
                Insert-Only Coordinator Decision &amp; Override Audit
              </h1>
      <p className={"font-urdu-headline text-urdu-headline text-primary-fixed-dim leading-none mt-1"}>
                کوآرڈینیٹر کے فیصلوں اور ترامیم کا ناقابلِ ترمیم آڈٹ لاگ
              </p>
      <p className={"font-body-md text-body-md text-on-surface-variant max-w-4xl pt-1"}>
                Every coordinator priority elevation, vehicle swap, and triage disposition is appended to an immutable append-only ledger with automated SHA-256 integrity proofs. Zero retroactive alterations permitted.
              </p>
      </div>
      {/*  Right: Security Badge / Holographic Seal Box  */}
      <div className={"flex-shrink-0 flex items-center gap-space-md bg-surface-container-highest/60 backdrop-blur-md p-space-md rounded-xl shadow-md"}>
      <div className={"w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(242,169,59,0.25)]"}>
      <span className={"material-symbols-outlined text-headline-lg"} style={{ fontVariationSettings: "'FILL' 1" }}>enhanced_encryption</span>
      </div>
      <div className={"flex flex-col leading-tight"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"}>Cryptographically Verified Ledger</span>
      <span className={"material-symbols-outlined text-secondary text-body-sm"} title={"Cryptographically Sealed"}>verified</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary tracking-widest uppercase font-semibold"}>
                  SHA-256 Hashchain • Insert-Only
                </span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant mt-0.5"}>
                  محفوظ ترین ریکارڈ — کوئی تبدیلی ممکن نہیں
                </span>
      </div>
      </div>
      </div>
      </section>
      {/*  Filter & Global Query Bar  */}
      <section className={"bg-surface-container-low rounded-xl p-space-md shadow-md mb-space-lg flex flex-col gap-space-md"}>
      <div className={"grid grid-cols-1 md:grid-cols-12 gap-space-md items-center"}>
      {/*  Search Input  */}
      <div className={"md:col-span-5 relative"}>
      <span className={"material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant"}>search</span>
      <input className={"w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-on-surface-variant/50 pl-11 pr-space-md py-space-sm rounded-lg font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"} id={"audit-search-input"} data-action="filterAuditRows" data-args={"[]"} placeholder={"Search by Case ID, Resident Name, Coordinator, or Reason..."} type={"text"} />
      </div>
      {/*  Dropdown: Time Range  */}
      <div className={"md:col-span-2"}>
      <div className={"relative bg-surface-container-lowest/80 rounded-lg"}>
      <select className={"w-full bg-transparent text-on-surface pl-space-md pr-space-lg py-space-sm font-body-md text-body-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"}>
      <option className={"bg-surface-container-high text-on-surface"} value={"6h"}>Last 6 Hours (حالیہ ۶ گھنٹے)</option>
      <option className={"bg-surface-container-high text-on-surface"} selected={true} value={"24h"}>Last 24 Hours (۲۴ گھنٹے)</option>
      <option className={"bg-surface-container-high text-on-surface"} value={"lifetime"}>Incident Lifetime (مکمل مہم)</option>
      </select>
      <span className={"material-symbols-outlined absolute right-space-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-body-md"}>expand_more</span>
      </div>
      </div>
      {/*  Dropdown: User / Actor  */}
      <div className={"md:col-span-2"}>
      <div className={"relative bg-surface-container-lowest/80 rounded-lg"}>
      <select className={"w-full bg-transparent text-on-surface pl-space-md pr-space-lg py-space-sm font-body-md text-body-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"}>
      <option className={"bg-surface-container-high text-on-surface"} value={"all"}>All Coordinators (تمام)</option>
      <option className={"bg-surface-container-high text-on-surface"} value={"zara"}>Zara Khan (زارا خان)</option>
      <option className={"bg-surface-container-high text-on-surface"} value={"tariq"}>Tariq Baloch (طارق بلوچ)</option>
      <option className={"bg-surface-container-high text-on-surface"} value={"ai"}>Automated AI Engine (خودکار)</option>
      </select>
      <span className={"material-symbols-outlined absolute right-space-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-body-md"}>expand_more</span>
      </div>
      </div>
      {/*  Dropdown: Action Category  */}
      <div className={"md:col-span-3"}>
      <div className={"relative bg-surface-container-lowest/80 rounded-lg"}>
      <select className={"w-full bg-transparent text-on-surface pl-space-md pr-space-lg py-space-sm font-body-md text-body-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"}>
      <option className={"bg-surface-container-high text-on-surface"} value={"all"}>All Action Types (تمام کارروائیاں)</option>
      <option className={"bg-surface-container-high text-on-surface"} value={"override"}>Manual Override (دستی ترمیم)</option>
      <option className={"bg-surface-container-high text-on-surface"} value={"elevation"}>Priority Elevation (ترجیح میں اضافہ)</option>
      <option className={"bg-surface-container-high text-on-surface"} value={"reassignment"}>Resource Reassignment (وسائل کی تبدیلی)</option>
      <option className={"bg-surface-container-high text-on-surface"} value={"safe"}>Mark Safe Ground Check (محفوظ قرار)</option>
      </select>
      <span className={"material-symbols-outlined absolute right-space-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-body-md"}>expand_more</span>
      </div>
      </div>
      </div>
      {/*  Sub-row: Quick filters & Export CSV Ledger  */}
      <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
      <div className={"flex items-center gap-space-sm flex-wrap text-telemetry-sm font-telemetry-sm"}>
      <span className={"text-on-surface-variant"}>Active Quick Tags:</span>
      <button className={"px-space-xs py-0.5 rounded-full bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors"}>
                Tier 1 Overrides (18)
              </button>
      <button className={"px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"}>
                Oxygen Dispatches (6)
              </button>
      <button className={"px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"}>
                Lyari Basin (34)
              </button>
      <button className={"px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"}>
                Malir Corridor (21)
              </button>
      </div>
      <div className={"flex items-center gap-space-sm"}>
      {/*  Secondary Glass Button: Export CSV  */}
      <button className={"flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface transition-all shadow-md group"}>
      <span className={"material-symbols-outlined text-secondary group-hover:rotate-12 transition-transform text-headline-sm"}>download</span>
      <div className={"flex flex-col text-left leading-none"}>
      <span className={"font-headline-sm text-body-sm font-bold text-on-surface"}>Export CSV Ledger</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>آڈٹ لاگ برآمد کریں</span>
      </div>
      </button>
      {/*  Live Audit Sync Ping  */}
      <div className={"flex items-center gap-space-xs px-space-sm py-space-sm rounded-lg bg-surface-container-lowest font-telemetry-sm text-telemetry-sm text-secondary"}>
      <span className={"w-2 h-2 rounded-full bg-secondary"}></span>
      <span>Live Append: Armed</span>
      </div>
      </div>
      </div>
      </section>
      {/*  Comprehensive Immutable Audit Log Table  */}
      <section className={"bg-surface-container-low rounded-xl shadow-xl overflow-hidden mb-space-lg flex flex-col"}>
      {/*  Table Meta Bar  */}
      <div className={"px-space-lg py-space-md bg-surface-container-high/50 flex flex-wrap items-center justify-between gap-space-md"}>
      <div className={"flex items-center gap-space-md font-headline-sm text-body-md text-on-surface"}>
      <span className={"font-bold"}>Ledger Transactions</span>
      <span className={"px-space-xs py-0.5 rounded-full bg-primary/20 text-primary font-telemetry-sm text-telemetry-sm"}>
                Showing <span id={"visible-counter"}>4</span> of 284 Entries
              </span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>
                تمام اندراجات مستند اور محفوظ ہیں
              </span>
      </div>
      <div className={"flex items-center gap-space-md font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-secondary text-body-sm"}>shield</span> Merkle Root: 8c3e..9b14
              </span>
      <span className={"flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-primary text-body-sm"}>key</span> Key: RSA-4096-NDMA-OPS
              </span>
      </div>
      </div>
      {/*  Scrollable High Density Grid  */}
      <div className={"overflow-x-auto w-full"}>
      <table className={"w-full text-left border-collapse"}>
      <thead>
      <tr className={"bg-surface-container-lowest/90 font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>
      <th className={"py-space-md px-space-md"}>Timestamp (PKT)</th>
      <th className={"py-space-md px-space-md"}>Actor / Role</th>
      <th className={"py-space-md px-space-md"}>Case Reference &amp; Resident</th>
      <th className={"py-space-md px-space-md"}>Initial Recommendation</th>
      <th className={"py-space-md px-space-md"}>Coordinator Override Action</th>
      <th className={"py-space-md px-space-md w-1/4"}>Justification / Reason (Urdu &amp; EN)</th>
      <th className={"py-space-md px-space-md text-right"}>Integrity Stamp</th>
      </tr>
      </thead>
      <tbody className={"divide-y-0 font-body-md text-body-sm"}>
      {/*  Row 1: Fatima Bibi (Urgent O2 + Boat Swap)  */}
      <tr className={"audit-row bg-surface-container-low hover:bg-surface-container/70 transition-colors"}>
      {/*  Timestamp  */}
      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>15:44:19</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>28-Aug-2024 PKT</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary/80 mt-0.5"}>Tx: 0x9A48F..21</span>
      </div>
      </td>
      {/*  Coordinator Actor  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-8 h-8 rounded-full bg-primary-container text-on-primary-container font-headline-sm font-bold flex items-center justify-center text-body-sm"}>
                        ZK
                      </div>
      <div className={"flex flex-col leading-tight"}>
      <span className={"font-headline-sm font-semibold text-on-surface"}>Zara Khan</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>زارا خان (سپر کوآرڈینیٹر)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary-fixed"}>Coordinator Desk #1</span>
      </div>
      </div>
      </td>
      {/*  Case Reference  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex flex-col gap-0.5"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-telemetry-sm font-bold text-primary"}>#PK-KHI-7821</span>
      <span className={"px-1.5 py-0.2 rounded bg-error-container/40 text-error font-telemetry-sm text-telemetry-sm font-bold"}>Tier 1</span>
      </div>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"}>Fatima Bibi</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>فاطمہ بی بی (عمر: ۶۸ سال)</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-outline"}>location_on</span> Moosa Lane, Lyari
                      </span>
      </div>
      </td>
      {/*  Before (AI Rec)  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"p-space-xs rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>smart_toy</span> AI Dispatch Rec:
                      </span>
      <span className={"font-headline-sm font-medium text-on-surface"}>Inflatable Boat 02</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Standard evac / 2 crew</span>
      </div>
      </td>
      {/*  After (Override Action)  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"p-space-xs rounded-lg bg-primary-container/15 text-primary flex flex-col gap-1 shadow-sm"}>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold uppercase flex items-center gap-1 text-primary"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>upgrade</span> Manual Override:
                      </span>
      <span className={"font-headline-sm font-bold text-primary-fixed"}>Heavy Boat 04 + Portable O2</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-primary-fixed-variant"}>Paramedic + Oxygen Support Unit</span>
      </div>
      </td>
      {/*  Justification  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex flex-col gap-space-xs bg-surface-container-lowest/40 p-space-xs rounded-lg"}>
      <p className={"font-body-md text-body-sm text-on-surface leading-snug"}>
                        "Urgent O2 concentrator low battery verified via neighbor SMS; water rising rapidly in narrow Moosa Lane."
                      </p>
      <p className={"font-urdu-body text-telemetry-sm text-primary-fixed-dim leading-snug"}>
                        ہمسائے کے ایس ایم ایس سے تصدیق ہوئی کہ آکسیجن کنسنٹریٹر کی بیٹری ختم ہو رہی ہے؛ موسیٰ لین میں پانی تیزی سے بڑھ رہا ہے۔
                      </p>
      <div className={"flex items-center gap-space-xs text-telemetry-sm font-telemetry-sm text-outline-variant pt-0.5"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-secondary"}>verified_user</span>
      <span>Audio &amp; SMS Log Attached (#ATT-890)</span>
      </div>
      </div>
      </td>
      {/*  Verification Stamp  */}
      <td className={"py-space-md px-space-md align-top text-right whitespace-nowrap"}>
      <div className={"flex flex-col items-end gap-1"}>
      <button className={"px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary hover:bg-secondary-container/40 transition-colors flex items-center gap-1 shadow-sm"} data-action="toggleRowVerifyModal" data-args={"[\"PK-KHI-7821\",\"8f7a6021e90d23a41c59b348deca721019a84bce12746bc901a8f9024cba41e2\"]"} title={"View Cryptographic Seal"}>
      <span className={"material-symbols-outlined text-body-sm"} style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold"}>VERIFIED SEAL</span>
      </button>
      <span className={"font-telemetry-sm text-telemetry-sm text-outline font-mono"}>SHA: 8f7a6021...</span>
      <span className={"font-urdu-body text-telemetry-sm text-secondary/80"}>مصدقہ ریکارڈ</span>
      </div>
      </td>
      </tr>
      {/*  Row 2: Mrs. Tahira Khan (Elevation to Tier 1 Dialysis)  */}
      <tr className={"audit-row bg-surface-container-high/40 hover:bg-surface-container/70 transition-colors"}>
      {/*  Timestamp  */}
      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>15:32:04</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>28-Aug-2024 PKT</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary/80 mt-0.5"}>Tx: 0x48D10..FE</span>
      </div>
      </td>
      {/*  Actor  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-8 h-8 rounded-full bg-primary-container text-on-primary-container font-headline-sm font-bold flex items-center justify-center text-body-sm"}>
                        ZK
                      </div>
      <div className={"flex flex-col leading-tight"}>
      <span className={"font-headline-sm font-semibold text-on-surface"}>Zara Khan</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>زارا خان (سپر کوآرڈینیٹر)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary-fixed"}>Coordinator Desk #1</span>
      </div>
      </div>
      </td>
      {/*  Case Reference  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex flex-col gap-0.5"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-telemetry-sm font-bold text-primary"}>#PK-KHI-8240</span>
      <span className={"px-1.5 py-0.2 rounded bg-error-container/40 text-error font-telemetry-sm text-telemetry-sm font-bold"}>Tier 1 (Elevated)</span>
      </div>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"}>Mrs. Tahira Khan</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>طاہرہ خان (ڈائیلاسز مریضہ)</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-outline"}>location_on</span> Sector 7-A, Korangi
                      </span>
      </div>
      </td>
      {/*  Before (AI Rec)  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"p-space-xs rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>schedule</span> AI Dispatch Rec:
                      </span>
      <span className={"font-headline-sm font-medium text-on-surface"}>Scheduled Tier 2</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ETA Queue 45 mins</span>
      </div>
      </td>
      {/*  After (Override Action)  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"p-space-xs rounded-lg bg-error-container/20 text-error flex flex-col gap-1 shadow-sm"}>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold uppercase flex items-center gap-1 text-error"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>priority_high</span> Priority Elevate:
                      </span>
      <span className={"font-headline-sm font-bold text-tertiary"}>Tier 1 Immediate Evac</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Ambulance Boat 01 Diverted</span>
      </div>
      </td>
      {/*  Justification  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex flex-col gap-space-xs bg-surface-container-lowest/40 p-space-xs rounded-lg"}>
      <p className={"font-body-md text-body-sm text-on-surface leading-snug"}>
                        "Dialysis port breach and high water surge at Korangi Industrial corridor. Imminent septic and submersion risk."
                      </p>
      <p className={"font-urdu-body text-telemetry-sm text-primary-fixed-dim leading-snug"}>
                        کورنگی صنعتی کوریڈور میں پانی کے شدید ریلے اور ڈائیلاسز کینولہ انفیکشن کا فوری جان لیوا خطرہ۔
                      </p>
      <div className={"flex items-center gap-space-xs text-telemetry-sm font-telemetry-sm text-outline-variant pt-0.5"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-secondary"}>verified_user</span>
      <span>Direct Call Verification with Dr. Aslam (Indus Hosp)</span>
      </div>
      </div>
      </td>
      {/*  Verification Stamp  */}
      <td className={"py-space-md px-space-md align-top text-right whitespace-nowrap"}>
      <div className={"flex flex-col items-end gap-1"}>
      <button className={"px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary hover:bg-secondary-container/40 transition-colors flex items-center gap-1 shadow-sm"} data-action="toggleRowVerifyModal" data-args={"[\"PK-KHI-8240\",\"e4c5b1029348aef0192837465bcdeaa1290384756bcdea0192837465fbcda219\"]"} title={"View Cryptographic Seal"}>
      <span className={"material-symbols-outlined text-body-sm"} style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold"}>VERIFIED SEAL</span>
      </button>
      <span className={"font-telemetry-sm text-telemetry-sm text-outline font-mono"}>SHA: e4c5b102...</span>
      <span className={"font-urdu-body text-telemetry-sm text-secondary/80"}>مصدقہ ریکارڈ</span>
      </div>
      </td>
      </tr>
      {/*  Row 3: Chacha Rustam (Mark Safe Ground Verification)  */}
      <tr className={"audit-row bg-surface-container-low hover:bg-surface-container/70 transition-colors"}>
      {/*  Timestamp  */}
      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>15:18:50</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>28-Aug-2024 PKT</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary/80 mt-0.5"}>Tx: 0x33A0B..99</span>
      </div>
      </td>
      {/*  Actor  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm font-bold flex items-center justify-center text-body-sm"}>
                        TB
                      </div>
      <div className={"flex flex-col leading-tight"}>
      <span className={"font-headline-sm font-semibold text-on-surface"}>Tariq Baloch</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>طارق بلوچ (رضاکار لیڈ)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Field Mobile PWA</span>
      </div>
      </div>
      </td>
      {/*  Case Reference  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex flex-col gap-0.5"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-telemetry-sm font-bold text-primary"}>#PK-KHI-9941</span>
      <span className={"px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>Welfare Check</span>
      </div>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"}>Chacha Rustam</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>چاچا رستم (بزرگ شہری)</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-outline"}>location_on</span> Machar Colony, Kemari
                      </span>
      </div>
      </td>
      {/*  Before (AI Rec)  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"p-space-xs rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>pending_actions</span> AI Dispatch Rec:
                      </span>
      <span className={"font-headline-sm font-medium text-on-surface"}>Welfare Check (Unknown)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>No GPS sync / Pending</span>
      </div>
      </td>
      {/*  After (Override Action)  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"p-space-xs rounded-lg bg-secondary-container/20 text-secondary-fixed flex flex-col gap-1 shadow-sm"}>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold uppercase flex items-center gap-1 text-secondary"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>check_circle</span> Disposition Update:
                      </span>
      <span className={"font-headline-sm font-bold text-secondary"}>Marked Safe at Ground</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface"}>Relocated vertical (1st Floor)</span>
      </div>
      </td>
      {/*  Justification  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex flex-col gap-space-xs bg-surface-container-lowest/40 p-space-xs rounded-lg"}>
      <p className={"font-body-md text-body-sm text-on-surface leading-snug"}>
                        "Doorstep physical verification conducted; resident relocated to 1st floor neighbor with dry rations and battery lantern."
                      </p>
      <p className={"font-urdu-body text-telemetry-sm text-primary-fixed-dim leading-snug"}>
                        موقع پر تصدیق مکمل؛ رہائشی کو خشک راشن اور لیمپ کے ہمراہ پہلی منزل کے پڑوسی کے ہاں محفوظ منتقل کر دیا گیا۔
                      </p>
      <div className={"flex items-center gap-space-xs text-telemetry-sm font-telemetry-sm text-outline-variant pt-0.5"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-secondary"}>verified_user</span>
      <span>Geo-Tagged Photo ID + Timestamp Signed</span>
      </div>
      </div>
      </td>
      {/*  Verification Stamp  */}
      <td className={"py-space-md px-space-md align-top text-right whitespace-nowrap"}>
      <div className={"flex flex-col items-end gap-1"}>
      <button className={"px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary hover:bg-secondary-container/40 transition-colors flex items-center gap-1 shadow-sm"} data-action="toggleRowVerifyModal" data-args={"[\"PK-KHI-9941\",\"1b098ef473c091823746a5b6c7d8e9f0123456789abcdef0123456789abcdef0\"]"} title={"View Cryptographic Seal"}>
      <span className={"material-symbols-outlined text-body-sm"} style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold"}>VERIFIED SEAL</span>
      </button>
      <span className={"font-telemetry-sm text-telemetry-sm text-outline font-mono"}>SHA: 1b098ef4...</span>
      <span className={"font-urdu-body text-telemetry-sm text-secondary/80"}>مصدقہ ریکارڈ</span>
      </div>
      </td>
      </tr>
      {/*  Row 4: Bilal Ahmed (System Autonomous Engine Override)  */}
      <tr className={"audit-row bg-surface-container-high/40 hover:bg-surface-container/70 transition-colors"}>
      {/*  Timestamp  */}
      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-md text-telemetry-md text-primary font-bold"}>14:50:11</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>28-Aug-2024 PKT</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary/80 mt-0.5"}>Tx: 0xEE712..40</span>
      </div>
      </td>
      {/*  Actor  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-8 h-8 rounded-full bg-surface-variant text-primary font-headline-sm font-bold flex items-center justify-center text-body-sm"}>
      <span className={"material-symbols-outlined text-body-md"}>smart_toy</span>
      </div>
      <div className={"flex flex-col leading-tight"}>
      <span className={"font-headline-sm font-semibold text-on-surface"}>System Autonomous Engine</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>خودکار سسٹم انجن (پالیسی رولز)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary"}>Hydrology-Safety Daemon</span>
      </div>
      </div>
      </td>
      {/*  Case Reference  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex flex-col gap-0.5"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"font-telemetry-sm font-bold text-primary"}>#PK-ML-088</span>
      <span className={"px-1.5 py-0.2 rounded bg-error-container/40 text-error font-telemetry-sm text-telemetry-sm font-bold"}>Tier 1 Autonomous</span>
      </div>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"}>Bilal Ahmed</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>بلال احمد (معذور شہری)</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-outline"}>location_on</span> Old Thado Dam Reach, Malir
                      </span>
      </div>
      </td>
      {/*  Before (AI Rec)  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"p-space-xs rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>explore</span> Initial Assessment:
                      </span>
      <span className={"font-headline-sm font-medium text-on-surface"}>Tier 2 Standard Scout</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>General reconnaissance</span>
      </div>
      </td>
      {/*  After (Override Action)  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"p-space-xs rounded-lg bg-primary-container/15 text-primary flex flex-col gap-1 shadow-sm"}>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold uppercase flex items-center gap-1 text-primary"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>bolt</span> Auto Risk Elevation:
                      </span>
      <span className={"font-headline-sm font-bold text-primary-fixed"}>Tier 1 Tactical Stretcher</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-primary-fixed-variant"}>Rigid Inflatable Fleet + Spine Board</span>
      </div>
      </td>
      {/*  Justification  */}
      <td className={"py-space-md px-space-md align-top"}>
      <div className={"flex flex-col gap-space-xs bg-surface-container-lowest/40 p-space-xs rounded-lg"}>
      <p className={"font-body-md text-body-sm text-on-surface leading-snug"}>
                        "Compound risk trigger: Malir riverbank crest breach threshold exceeded + paraplegic mobility flag from CNIC vulnerability DB."
                      </p>
      <p className={"font-urdu-body text-telemetry-sm text-primary-fixed-dim leading-snug"}>
                        ملیر ندی کے پشتے کا بند ٹوٹنے کا ریڈ الرٹ اور نادرا معذوری ڈیٹا بیس کی بنیاد پر خودکار ہنگامی اقدام۔
                      </p>
      <div className={"flex items-center gap-space-xs text-telemetry-sm font-telemetry-sm text-outline-variant pt-0.5"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-secondary"}>verified_user</span>
      <span>Sensor Telemetry ID #MALIR-FLOW-18 (8.4m Crest)</span>
      </div>
      </div>
      </td>
      {/*  Verification Stamp  */}
      <td className={"py-space-md px-space-md align-top text-right whitespace-nowrap"}>
      <div className={"flex flex-col items-end gap-1"}>
      <button className={"px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary hover:bg-secondary-container/40 transition-colors flex items-center gap-1 shadow-sm"} data-action="toggleRowVerifyModal" data-args={"[\"PK-ML-088\",\"77a89b01c342fef889104829adba998012356ffaaabbbccc0001112223334445\"]"} title={"View Cryptographic Seal"}>
      <span className={"material-symbols-outlined text-body-sm"} style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold"}>VERIFIED SEAL</span>
      </button>
      <span className={"font-telemetry-sm text-telemetry-sm text-outline font-mono"}>SHA: 77a89b01...</span>
      <span className={"font-urdu-body text-telemetry-sm text-secondary/80"}>مصدقہ ریکارڈ</span>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/*  Paging Controls & Selection Footer  */}
      <div className={"px-space-lg py-space-md bg-surface-container-lowest flex flex-wrap items-center justify-between gap-space-md"}>
      {/*  Left: Selection Info  */}
      <div className={"flex items-center gap-space-md font-telemetry-sm text-telemetry-sm"}>
      <span className={"text-on-surface-variant"}>Page <strong className={"text-on-surface font-semibold"}>1</strong> of 71</span>
      <span className={"text-outline-variant"}>|</span>
      <span className={"text-on-surface-variant"}>Integrity Status: <span className={"text-secondary font-semibold"}>Zero Hash Collisions Detected</span></span>
      </div>
      {/*  Center: Urdu notice  */}
      <div className={"font-urdu-body text-telemetry-sm text-on-surface-variant hidden md:block"}>
              تمام کوآرڈینیٹر فیصلے شفافیت کے تحت خودکار ریکارڈ کیے جاتے ہیں
            </div>
      {/*  Right: Pagination Buttons  */}
      <div className={"flex items-center gap-space-xs font-telemetry-sm text-telemetry-sm"}>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors disabled:opacity-40"} disabled={true}>
      <span className={"material-symbols-outlined text-body-sm align-middle"}>chevron_left</span>
      <span>Previous</span>
      </button>
      <button className={"px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-bold shadow-sm"}>1</button>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"}>2</button>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"}>3</button>
      <span className={"px-space-xs text-outline-variant"}>...</span>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"}>71</button>
      <button className={"px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors flex items-center"}>
      <span>Next</span>
      <span className={"material-symbols-outlined text-body-sm align-middle"}>chevron_right</span>
      </button>
      </div>
      </div>
      </section>
      {/*  Technical Telemetry Footer Card Grid  */}
      <section className={"grid grid-cols-1 md:grid-cols-3 gap-space-md"}>
      {/*  Card 1: Append Only Guarantees  */}
      <div className={"bg-surface-container-low rounded-xl p-space-md shadow-md flex items-start gap-space-md"}>
      <div className={"p-space-sm rounded-lg bg-surface-container-high text-primary flex items-center justify-center"}>
      <span className={"material-symbols-outlined text-headline-sm"}>database</span>
      </div>
      <div className={"flex flex-col gap-0.5"}>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"}>Append-Only Immutability</span>
      <span className={"font-urdu-body text-telemetry-sm text-primary-fixed-dim"}>ناقابلِ تنسیخ ڈیٹا سٹوریج</span>
      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1"}>
                PostgreSQL Row-Level Security with WORM (Write Once Read Many) policy. Table schema forbids DELETE and UPDATE primitives at database kernel level.
              </p>
      </div>
      </div>
      {/*  Card 2: Field Operator Accountability  */}
      <div className={"bg-surface-container-low rounded-xl p-space-md shadow-md flex items-start gap-space-md"}>
      <div className={"p-space-sm rounded-lg bg-surface-container-high text-secondary flex items-center justify-center"}>
      <span className={"material-symbols-outlined text-headline-sm"}>fingerprint</span>
      </div>
      <div className={"flex flex-col gap-0.5"}>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"}>Dual-Factor Justification</span>
      <span className={"font-urdu-body text-telemetry-sm text-secondary-fixed"}>لازمی انسانی وضاحت</span>
      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1"}>
                Any downgrade or upgrade in priority requires mandatory bilingual justification text plus an uploaded audio, SMS, or medical attestation payload.
              </p>
      </div>
      </div>
      {/*  Card 3: Judicial & NDMA Inquiry Readiness  */}
      <div className={"bg-surface-container-low rounded-xl p-space-md shadow-md flex items-start gap-space-md"}>
      <div className={"p-space-sm rounded-lg bg-surface-container-high text-tertiary flex items-center justify-center"}>
      <span className={"material-symbols-outlined text-headline-sm"}>gavel</span>
      </div>
      <div className={"flex flex-col gap-0.5"}>
      <span className={"font-headline-sm text-body-md font-bold text-on-surface"}>Legal &amp; Inquiry Ready</span>
      <span className={"font-urdu-body text-telemetry-sm text-tertiary-fixed"}>عدالتی و تحقیقاتی ثبوت</span>
      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1"}>
                Every audit entry exports directly into standard PDF/A format compliant with High Court disaster inquiry commissions and NDMA post-monsoon reviews.
              </p>
      </div>
      </div>
      </section>
      {/*  Cryptographic Verification Inspection Modal  */}
      <div className={"fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md hidden items-center justify-center p-space-md"} id={"hash-verify-modal"}>
      <div className={"bg-surface-container-low rounded-xl max-w-xl w-full p-space-lg shadow-2xl flex flex-col gap-space-md"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary"}>
      <span className={"material-symbols-outlined text-headline-sm"}>security</span>
      </div>
      <div>
      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Cryptographic Ledger Proof</h3>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>محفوظ حسابی تصدیق نامہ</span>
      </div>
      </div>
      <button className={"w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface"} data-action="toggleRowVerifyModal" data-args={"[]"}>
      <span className={"material-symbols-outlined text-body-md"}>close</span>
      </button>
      </div>
      <div className={"p-space-md bg-surface-container-lowest rounded-lg flex flex-col gap-space-sm"}>
      <div className={"flex justify-between items-center text-telemetry-sm font-telemetry-sm"}>
      <span className={"text-on-surface-variant"}>Case Reference:</span>
      <span className={"text-primary font-bold"} id={"modal-case-display"}>#PK-KHI-7821</span>
      </div>
      <div className={"flex justify-between items-center text-telemetry-sm font-telemetry-sm"}>
      <span className={"text-on-surface-variant"}>Algorithm:</span>
      <span className={"text-secondary font-mono"}>SHA-256 with ECDSA Signature</span>
      </div>
      <div className={"flex flex-col gap-1 text-telemetry-sm font-telemetry-sm"}>
      <span className={"text-on-surface-variant"}>Transaction Hash (Merkle Leaf):</span>
      <span className={"font-mono text-secondary break-all bg-surface-container-high p-2 rounded text-telemetry-sm"} id={"modal-sha-display"}>
                  8f7a6021e90d23a41c59b348deca721019a84bce12746bc901a8f9024cba41e2
                </span>
      </div>
      </div>
      <div className={"flex items-center gap-space-sm font-telemetry-sm text-telemetry-sm text-secondary bg-secondary-container/20 p-space-sm rounded-lg"}>
      <span className={"material-symbols-outlined text-headline-sm"}>verified</span>
      <span>Node Signature verified valid against NDMA Master Hardware Security Module (HSM).</span>
      </div>
      <div className={"flex justify-end gap-space-sm pt-space-xs"}>
      <button className={"px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm font-semibold transition-colors"} data-action="toggleRowVerifyModal" data-args={"[]"}>
                Close Inspector
              </button>
      </div>
      </div>
      </div>
      </div>
  )
}
