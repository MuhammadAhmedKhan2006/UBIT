import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function SyncPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("SyncPage", nav)
  return (
    <div className={"bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen"} {...bind}>
      <header className={"fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.55)]"}><aside className={"h-6 px-margin flex items-center justify-between bg-surface-container-high/90 text-on-surface-variant font-telemetry-sm text-telemetry-sm select-none"}><div className={"flex items-center gap-space-xs"}><span className={"w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"}></span><span className={"tracking-wider uppercase"}>Synthetic demo data</span><span className={"opacity-40"}>/</span><span className={"font-urdu-body text-[11px] leading-tight"}>مصنوعی ڈیمو ڈیٹا</span></div><span className={"font-telemetry-sm text-[11px] text-secondary"}>MONSOON-SYS 2.4</span></aside><div className={"h-24 px-margin flex flex-col justify-center gap-1.5"}><div className={"flex items-center justify-between gap-space-sm"}><div className={"flex items-center gap-space-sm min-w-0"}><div className={"relative flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-low shrink-0 shadow-[0_0_14px_rgba(242,169,59,0.25)]"}><svg className={"w-6 h-6 text-primary"} fill={"currentColor"} viewBox={"0 0 24 24"}><path d={"M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 19c0 .55.45 1 1 1s1-.45 1-1v-1h-2v1zm1-17c2.76 0 5 2.24 5 5 0 1.63-.8 3.06-2 3.96V15h-6v-2.04C7.8 12.06 7 10.63 7 9c0-2.76 2.24-5 5-5z"}></path></svg><span className={"absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"}></span></div><div className={"flex flex-col min-w-0"}><h1 className={"font-headline-sm text-headline-sm text-on-surface truncate leading-tight tracking-tight"}>Nobody Left Behind</h1><div className={"flex items-center gap-1.5 text-on-surface-variant"}><span className={"font-body-sm text-body-sm text-primary font-medium truncate"}>Field Volunteer</span><span className={"opacity-40 text-xs"}>•</span><span className={"font-urdu-body text-xs text-primary truncate"}>فیلڈ رضا کار</span></div></div></div><div className={"flex items-center gap-space-xs shrink-0"}><button aria-label={"Switch Language"} className={"min-w-[44px] min-h-[44px] px-2 py-1 flex items-center justify-center rounded-lg bg-surface-container/70 text-on-surface font-telemetry-sm text-telemetry-sm active:scale-95 transition-transform"} type={"button"}><span className={"text-primary font-bold"}>EN</span><span className={"opacity-30 mx-1"}>|</span><span className={"font-urdu-body text-xs opacity-80"}>اردو</span></button><div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(242,169,59,0.35)] shrink-0"}><span className={"material-symbols-outlined text-on-primary text-[18px]"}>person</span></div></div></div><div className={"flex items-center justify-between gap-2"}><div className={"flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low/90"}><span className={"material-symbols-outlined text-secondary text-[14px]"}>water_drop</span><span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Water in</span><span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold tracking-tight"}>03:42:10</span></div><div className={"flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low/90"}><span className={"w-2 h-2 rounded-full bg-secondary-container animate-pulse"}></span><span className={"font-telemetry-sm text-[11px] text-secondary font-medium"}>Online</span><span className={"opacity-40 text-[10px]"}>/</span><span className={"font-urdu-body text-[11px] text-secondary leading-none"}>آن لائن</span></div><div className={"flex items-center gap-1 text-on-surface-variant/80 font-body-sm text-body-sm truncate"}><span className={"material-symbols-outlined text-[16px] text-primary"}>explore</span><span className={"truncate max-w-[90px]"}>Mesh Sync</span></div></div></div></header><main className={"flex flex-col relative w-full pt-30 pb-24 min-h-screen bg-surface"}><div className={"flex flex-col w-full"}>
      {/*  Glowing Amber Offline Hero Banner  */}
      <div className={"px-margin pt-space-sm pb-space-xs"}>
      <div className={"relative overflow-hidden rounded-xl bg-surface-container-high p-space-md shadow-[0_0_28px_rgba(242,169,59,0.22)]"}>
      <div className={"absolute -right-12 -top-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl pointer-events-none"}></div>
      <div className={"flex items-start gap-space-sm relative z-10"}>
      <div className={"flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary shrink-0 shadow-[0_0_16px_rgba(242,169,59,0.45)]"}>
      <span className={"material-symbols-outlined text-[24px]"}>wifi_off</span>
      </div>
      <div className={"flex flex-col min-w-0 flex-1"}>
      <div className={"flex items-center justify-between gap-1"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold tracking-wider uppercase flex items-center gap-1.5"}>
      <span className={"w-2 h-2 rounded-full bg-primary animate-ping"}></span>
                    Offline Mode Active
                  </span>
      <span className={"px-2 py-0.5 rounded-full bg-primary/15 text-primary font-telemetry-sm text-[11px] font-semibold"}>
                    LoRa P2P
                  </span>
      </div>
      <p className={"font-urdu-body text-[14px] text-on-surface leading-snug mt-0.5"} dir={"rtl"}>
                  انٹرنیٹ بند ہے — آف لائن موڈ فعال ہے
                </p>
      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>
                  All records safely encrypted in local memory. Packets queued for next peer handshake.
                </p>
      </div>
      </div>
      {/*  Quick Mesh Node Indicator Strip  */}
      <div className={"mt-space-sm pt-space-xs flex items-center justify-between gap-2 bg-surface-container-lowest/80 px-2.5 py-1.5 rounded-lg"}>
      <div className={"flex items-center gap-1.5 min-w-0"}>
      <span className={"material-symbols-outlined text-secondary text-[16px]"}>sensors</span>
      <span className={"font-telemetry-sm text-[11px] text-on-surface truncate"}>LoRa 86.4 MHz</span>
      <span className={"text-on-surface-variant/40 text-[10px]"}>•</span>
      <span className={"font-telemetry-sm text-[11px] text-secondary font-semibold"}>2 Peers Near</span>
      </div>
      <div className={"flex items-center gap-1 shrink-0"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error"}></span>
      <span className={"font-telemetry-sm text-[11px] text-error font-medium"}>Cell Down</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Sync Engine Tactical Cockpit Card  */}
      <div className={"px-margin py-space-xs"}>
      <div className={"rounded-xl bg-surface-container p-space-md shadow-lg"}>
      <div className={"flex items-start justify-between gap-space-sm mb-space-sm"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-2"}>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface tracking-tight"}>Offline Outbox</h2>
      <span className={"px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-telemetry-sm text-[11px] font-bold"}>
                    3 Pending
                  </span>
      </div>
      <div className={"flex items-center gap-1 mt-0.5"}>
      <span className={"font-urdu-headline text-[15px] text-primary leading-none"} dir={"rtl"}>آؤٹ باکس اور سنک انجن</span>
      </div>
      </div>
      <div className={"w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-secondary"}>
      <span className={"material-symbols-outlined text-[20px]"}>cell_tower</span>
      </div>
      </div>
      {/*  Sync Telemetry Meta  */}
      <div className={"rounded-lg bg-surface-container-low p-2.5 mb-space-md space-y-1"}>
      <div className={"flex items-center justify-between text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <span className={"flex items-center gap-1.5"}>
      <span className={"material-symbols-outlined text-[14px] text-primary"}>history</span>
                  Last Handshake
                </span>
      <span className={"text-on-surface font-semibold"}>14:48 PKT</span>
      </div>
      <div className={"flex items-center justify-between text-on-surface-variant font-telemetry-sm text-[11px]"}>
      <span className={"truncate"}>Lyari Sub-station Mesh Node #04</span>
      <span className={"text-primary/90 shrink-0"}>42m ago</span>
      </div>
      </div>
      {/*  3D Hero Trigger Button  */}
      <button className={"w-full relative group overflow-hidden rounded-xl bg-primary-container text-on-primary py-3.5 px-space-md font-headline-sm text-headline-sm flex items-center justify-center gap-space-sm shadow-[0_4px_0_#9e6400,0_10px_20px_rgba(242,169,59,0.35)] active:translate-y-1 active:shadow-[0_1px_0_#9e6400,0_4px_10px_rgba(242,169,59,0.35)] transition-all select-none"} id={"manualSyncBtn"} type={"button"}>
      <span className={"material-symbols-outlined text-[24px] animate-spin"} id={"syncSpinIcon"}>sync</span>
      <div className={"flex items-baseline gap-2"}>
      <span className={"font-bold tracking-tight"}>Sync Now</span>
      <span className={"text-xs opacity-75 font-normal"}>/</span>
      <span className={"font-urdu-body text-[14px] font-semibold leading-none"}>اب سنک کریں</span>
      </div>
      <span className={"ml-1 px-2 py-0.5 rounded-full bg-on-primary text-primary font-telemetry-sm text-xs font-bold shadow-inner"}>
                3
              </span>
      </button>
      <div className={"mt-2.5 flex items-center justify-center gap-2 text-on-surface-variant font-telemetry-sm text-[11px]"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"}></span>
      <span>Auto-probing packet mesh every 90 seconds</span>
      </div>
      </div>
      </div>
      {/*  Outbox Queue Section  */}
      <div className={"px-margin pt-space-sm pb-space-xs"}>
      <div className={"flex items-center justify-between mb-space-sm"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-primary text-[20px]"}>queue_play_next</span>
      <h3 className={"font-headline-sm text-headline-sm text-on-surface"}>Transmission Queue</h3>
      </div>
      <span className={"font-urdu-body text-xs text-on-surface-variant"} dir={"rtl"}>ترسیلی قطار</span>
      </div>
      {/*  Items List  */}
      <div className={"space-y-space-sm"}>
      {/*  Queue Item 1: Critical Stretch Need  */}
      <div className={"rounded-xl bg-surface-container p-space-md shadow-md"}>
      <div className={"flex items-start justify-between gap-2 mb-1.5"}>
      <div className={"flex items-center gap-2 min-w-0"}>
      <span className={"w-2 h-2 rounded-full bg-primary-container shrink-0"}></span>
      <span className={"font-headline-sm text-[16px] text-on-surface truncate"}>Status Update: Fatima Bibi</span>
      </div>
      <span className={"shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-telemetry-sm text-[11px] font-bold"}>
      <span className={"material-symbols-outlined text-[13px]"}>schedule</span>
                  QUEUED / انتظار
                </span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                Volunteer reached doorstep; verified water level 1.1m; request boat stretcher urgently.
              </p>
      <div className={"mt-space-sm pt-2 flex items-center justify-between text-on-surface-variant font-telemetry-sm text-[11px] bg-surface-container-low px-2.5 py-1.5 rounded-lg"}>
      <span className={"text-primary font-semibold"}>Local ID: #OFF-891</span>
      <span>15:22 PKT • Priority 1</span>
      </div>
      </div>
      {/*  Queue Item 2: Syncing In Progress  */}
      <div className={"rounded-xl bg-surface-container p-space-md shadow-md relative overflow-hidden"}>
      <div className={"absolute top-0 left-0 h-1 bg-secondary w-2/3 animate-pulse"}></div>
      <div className={"flex items-start justify-between gap-2 mb-1.5"}>
      <div className={"flex items-center gap-2 min-w-0"}>
      <span className={"w-2 h-2 rounded-full bg-secondary shrink-0 animate-ping"}></span>
      <span className={"font-headline-sm text-[16px] text-on-surface truncate"}>Buddy Check-in: Zubaida Begum</span>
      </div>
      <span className={"shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-telemetry-sm text-[11px] font-bold"}>
      <span className={"material-symbols-outlined text-[13px] animate-spin"}>sync</span>
                  SYNCING 64%
                </span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                Marked: Needs Help (Infant ORS requested); Photo attached (340 KB compressed chunk).
              </p>
      {/*  Dynamic Progress Bar  */}
      <div className={"mt-space-sm space-y-1"}>
      <div className={"w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden"}>
      <div className={"h-full bg-secondary rounded-full"} style={{ width: "64%" }}></div>
      </div>
      <div className={"flex items-center justify-between text-on-surface-variant font-telemetry-sm text-[11px]"}>
      <span className={"text-secondary font-semibold"}>Local ID: #OFF-892</span>
      <span>Chunk 4 of 6 • LoRa Hop 1</span>
      </div>
      </div>
      </div>
      {/*  Queue Item 3: Hazard Alert  */}
      <div className={"rounded-xl bg-surface-container p-space-md shadow-md"}>
      <div className={"flex items-start justify-between gap-2 mb-1.5"}>
      <div className={"flex items-center gap-2 min-w-0"}>
      <span className={"w-2 h-2 rounded-full bg-primary-container shrink-0"}></span>
      <span className={"font-headline-sm text-[16px] text-on-surface truncate"}>Road Closure: Gul Muhammad</span>
      </div>
      <span className={"shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-telemetry-sm text-[11px] font-bold"}>
      <span className={"material-symbols-outlined text-[13px]"}>schedule</span>
                  QUEUED / انتظار
                </span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                Marked impassable due to live downed electric cable in flood water. Safety perimeter set.
              </p>
      <div className={"mt-space-sm pt-2 flex items-center justify-between text-on-surface-variant font-telemetry-sm text-[11px] bg-surface-container-low px-2.5 py-1.5 rounded-lg"}>
      <span className={"text-primary font-semibold"}>Local ID: #OFF-893</span>
      <span>15:28 PKT • Hazard Vector</span>
      </div>
      </div>
      {/*  Queue Item 4: Completed Sync Item  */}
      <div className={"rounded-xl bg-surface-container-low/70 p-space-md shadow-sm opacity-85"}>
      <div className={"flex items-start justify-between gap-2 mb-1"}>
      <div className={"flex items-center gap-2 min-w-0"}>
      <span className={"material-symbols-outlined text-secondary text-[18px]"}>verified</span>
      <span className={"font-headline-sm text-[15px] text-on-surface truncate line-through opacity-70"}>Check-in: Chacha Rustam</span>
      </div>
      <span className={"shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-[11px] font-bold"}>
                  SYNCED / مکمل
                </span>
      </div>
      <div className={"flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm"}>
      <span>Marked: Safe / محفوظ</span>
      <span className={"font-telemetry-sm text-[11px]"}>14:48 PKT</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Diagnostic & Mesh Telemetry Bento  */}
      <div className={"px-margin pt-space-xs pb-space-lg"}>
      <div className={"rounded-xl bg-surface-container-high p-space-md shadow-md space-y-space-md"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-secondary text-[20px]"}>hard_drive</span>
      <h4 className={"font-headline-sm text-[16px] text-on-surface"}>Storage &amp; Device Cache</h4>
      </div>
      <span className={"font-urdu-body text-xs text-on-surface-variant"} dir={"rtl"}>مقامی اسٹوریج</span>
      </div>
      {/*  Storage Bar & Metrics  */}
      <div>
      <div className={"flex items-center justify-between text-body-sm text-on-surface mb-1"}>
      <span>18.4 MB of 250 MB allocated</span>
      <span className={"font-telemetry-sm text-primary font-bold"}>7.3% used</span>
      </div>
      <div className={"w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden"}>
      <div className={"h-full bg-primary rounded-full"} style={{ width: "7.3%" }}></div>
      </div>
      <p className={"font-body-sm text-[12px] text-on-surface-variant mt-1.5 leading-snug"}>
                Includes Karachi South 3D offline topo maps, volunteer spatial tiles &amp; resident medical rosters.
              </p>
      </div>
      {/*  Mesh Forwarding Switch Status  */}
      <div className={"rounded-lg bg-surface-container-low p-space-sm flex items-start justify-between gap-space-sm"}>
      <div className={"flex items-start gap-2.5 min-w-0"}>
      <div className={"w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary shrink-0 mt-0.5"}>
      <span className={"material-symbols-outlined text-[18px]"}>hub</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <span className={"font-headline-sm text-[14px] text-on-surface"}>Automatic Mesh Forwarding</span>
      <span className={"font-urdu-body text-[11px] text-secondary leading-tight"} dir={"rtl"}>خودکار میش فارورڈنگ فعال ہے</span>
      <span className={"font-body-sm text-[11px] text-on-surface-variant mt-0.5"}>Packet store-and-forward relay via nearby volunteer phones</span>
      </div>
      </div>
      <span className={"shrink-0 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary font-telemetry-sm text-[10px] font-bold"}>
                ENABLED
              </span>
      </div>
      {/*  Radio Diagnostic Pills  */}
      <div className={"grid grid-cols-2 gap-2 font-telemetry-sm text-[11px]"}>
      <div className={"rounded-lg bg-surface-container-low p-2 flex flex-col gap-0.5"}>
      <span className={"text-on-surface-variant"}>RSSI Signal</span>
      <span className={"text-secondary font-bold"}>-84 dBm (Fair)</span>
      </div>
      <div className={"rounded-lg bg-surface-container-low p-2 flex flex-col gap-0.5"}>
      <span className={"text-on-surface-variant"}>Next Peer Check</span>
      <span className={"text-primary font-bold"}>00:00:38</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Persistent Delight Toast Notification (Local Cache Confirmation)  */}
      <div className={"fixed bottom-24 left-0 right-0 px-margin pointer-events-none z-40"}>
      <div className={"w-full max-w-[390px] mx-auto rounded-xl bg-surface-container-lowest/95 backdrop-blur-xl p-3 shadow-[0_12px_32px_rgba(0,0,0,0.8)] pointer-events-auto flex items-center gap-3"}>
      <div className={"w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0 shadow-[0_0_12px_rgba(101,217,197,0.45)]"}>
      <span className={"material-symbols-outlined text-[18px]"}>check</span>
      </div>
      <div className={"flex flex-col min-w-0 flex-1"}>
      <span className={"font-body-sm text-body-sm text-on-surface font-semibold truncate leading-tight"}>
                Saved locally to device cache
              </span>
      <span className={"font-urdu-body text-[11px] text-secondary leading-tight mt-0.5 truncate"} dir={"rtl"}>
                فون میں محفوظ ہو گیا، رابطہ بحال ہونے پر سنک ہوگا
              </span>
      </div>
      <button className={"shrink-0 p-1 text-on-surface-variant hover:text-on-surface active:scale-90 transition-transform"} data-action="this.parentElement.remove()" data-args={"[]"} type={"button"}>
      <span className={"material-symbols-outlined text-[18px]"}>close</span>
      </button>
      </div>
      </div>

      </div></main><nav className={"fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"} data-active-classes={"text-primary font-bold scale-105"}><div className={"h-20 px-space-xs flex items-center justify-around"}><Link to={"/tasks"} className={"flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl text-on-surface-variant transition-all"} data-path="volunteer-tasks"><span className={"material-symbols-outlined text-[24px]"}>checklist</span><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Tasks</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>ٹاسکس</span></Link><a className={"flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl text-on-surface-variant transition-all"} data-path="task-map-detail" href={"#"}><span className={"material-symbols-outlined text-[24px]"}>near_me</span><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Detail</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>تفصیل</span></a><a className={"flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl text-on-surface-variant transition-all"} data-path="buddy-check-in" href={"#"}><span className={"material-symbols-outlined text-[24px]"}>volunteer_activism</span><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Buddy</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>بڈی چیک ان</span></a><a aria-current={"page"} className={"relative flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl transition-all text-primary font-bold scale-105"} data-path="mesh-sync" href={"#"}><div className={"relative"}><span className={"material-symbols-outlined text-[24px]"}>sync</span><span className={"absolute -top-1 -right-2.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-container text-on-primary font-telemetry-sm text-[10px] font-bold flex items-center justify-center shadow-[0_0_8px_rgba(242,169,59,0.6)]"}>3</span></div><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Sync</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>سنک</span></a></div></nav>
    </div>
  )
}
