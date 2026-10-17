import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function BuddyPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("BuddyPage", nav)
  return (
    <div className={"bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen"} {...bind}>
      <header className={"fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.55)]"}><aside className={"h-6 px-margin flex items-center justify-between bg-surface-container-high/90 text-on-surface-variant font-telemetry-sm text-telemetry-sm select-none"}><div className={"flex items-center gap-space-xs"}><span className={"w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"}></span><span className={"tracking-wider uppercase"}>Synthetic demo data</span><span className={"opacity-40"}>/</span><span className={"font-urdu-body text-[11px] leading-tight"}>مصنوعی ڈیمو ڈیٹا</span></div><span className={"font-telemetry-sm text-[11px] text-secondary"}>MONSOON-SYS 2.4</span></aside><div className={"h-24 px-margin flex flex-col justify-center gap-1.5"}><div className={"flex items-center justify-between gap-space-sm"}><div className={"flex items-center gap-space-sm min-w-0"}><div className={"relative flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-low shrink-0 shadow-[0_0_14px_rgba(242,169,59,0.25)]"}><svg className={"w-6 h-6 text-primary"} fill={"currentColor"} viewBox={"0 0 24 24"}><path d={"M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 19c0 .55.45 1 1 1s1-.45 1-1v-1h-2v1zm1-17c2.76 0 5 2.24 5 5 0 1.63-.8 3.06-2 3.96V15h-6v-2.04C7.8 12.06 7 10.63 7 9c0-2.76 2.24-5 5-5z"}></path></svg><span className={"absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"}></span></div><div className={"flex flex-col min-w-0"}><h1 className={"font-headline-sm text-headline-sm text-on-surface truncate leading-tight tracking-tight"}>Nobody Left Behind</h1><div className={"flex items-center gap-1.5 text-on-surface-variant"}><span className={"font-body-sm text-body-sm text-primary font-medium truncate"}>Field Volunteer</span><span className={"opacity-40 text-xs"}>•</span><span className={"font-urdu-body text-xs text-primary truncate"}>فیلڈ رضا کار</span></div></div></div><div className={"flex items-center gap-space-xs shrink-0"}><button aria-label={"Switch Language"} className={"min-w-[44px] min-h-[44px] px-2 py-1 flex items-center justify-center rounded-lg bg-surface-container/70 text-on-surface font-telemetry-sm text-telemetry-sm active:scale-95 transition-transform"} type={"button"}><span className={"text-primary font-bold"}>EN</span><span className={"opacity-30 mx-1"}>|</span><span className={"font-urdu-body text-xs opacity-80"}>اردو</span></button><div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(242,169,59,0.35)] shrink-0"}><span className={"material-symbols-outlined text-on-primary text-[18px]"}>person</span></div></div></div><div className={"flex items-center justify-between gap-2"}><div className={"flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low/90"}><span className={"material-symbols-outlined text-secondary text-[14px]"}>water_drop</span><span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Water in</span><span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold tracking-tight"}>03:42:10</span></div><div className={"flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low/90"}><span className={"w-2 h-2 rounded-full bg-secondary-container animate-pulse"}></span><span className={"font-telemetry-sm text-[11px] text-secondary font-medium"}>Online</span><span className={"opacity-40 text-[10px]"}>/</span><span className={"font-urdu-body text-[11px] text-secondary leading-none"}>آن لائن</span></div><div className={"flex items-center gap-1 text-on-surface-variant/80 font-body-sm text-body-sm truncate"}><span className={"material-symbols-outlined text-[16px] text-primary"}>explore</span><span className={"truncate max-w-[90px]"}>Buddy Check In</span></div></div></div></header><main className={"flex flex-col relative w-full pt-30 pb-24 min-h-screen bg-surface"}><div className={"flex flex-col w-full px-margin space-y-space-md"}>
      {/*  Overview & Atmospheric Lantern Banner  */}
      <div className={"relative overflow-hidden rounded-xl bg-surface-container-high p-space-md shadow-xl"}>
      <div className={"absolute -top-10 -right-10 w-36 h-36 rounded-full bg-primary/10 blur-2xl pointer-events-none"}></div>
      <div className={"relative flex flex-col space-y-space-sm"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-primary text-[20px]"} style={{ fontVariationSettings: "'FILL' 1" }}>roofing</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary uppercase tracking-wider"}>No-Phone Grid</span>
      </div>
      <div className={"flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest text-secondary font-telemetry-sm text-telemetry-sm"}>
      <span className={"w-2 h-2 rounded-full bg-secondary animate-pulse"}></span>
      <span>4 / 7 Verified</span>
      </div>
      </div>
      <div className={"flex flex-col space-y-1"}>
      <h2 className={"font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight"}>Community Buddy Check-Ins</h2>
      <p className={"font-urdu-headline text-urdu-headline text-primary-container leading-none"}>محلہ بڈی سسٹم</p>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
              Vulnerable residents with no mobile phones, unregistered elders, or severed telecom towers. Physically verify each neighbor before monsoon water crests.
            </p>
      {/*  Progress Meter  */}
      <div className={"pt-1 flex flex-col space-y-1.5"}>
      <div className={"flex items-center justify-between font-telemetry-sm text-telemetry-sm"}>
      <span className={"text-on-surface"}>4 of 7 Checked • 3 Remaining</span>
      <span className={"font-urdu-body text-xs text-primary"}>4 کی تصدیق مکمل</span>
      </div>
      <div className={"w-full h-2.5 rounded-full bg-surface-container-lowest overflow-hidden flex p-0.5"}>
      <div className={"h-full rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-500"} style={{ width: "57.14%" }}></div>
      </div>
      </div>
      </div>
      </div>
      {/*  Micro-stat chips carousel  */}
      <div className={"flex items-center gap-2 overflow-x-auto pb-1 -mx-margin px-margin"}>
      <div className={"flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-low shrink-0 shadow-sm"}>
      <div className={"w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-secondary"}>
      <span className={"material-symbols-outlined text-[16px]"}>hearing_disabled</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Hearing / Sight</span>
      <span className={"font-body-sm text-body-sm text-on-surface font-semibold"}>2 Elders</span>
      </div>
      </div>
      <div className={"flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-low shrink-0 shadow-sm"}>
      <div className={"w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-tertiary"}>
      <span className={"material-symbols-outlined text-[16px]"}>child_care</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Infants &amp; Postnatal</span>
      <span className={"font-body-sm text-body-sm text-on-surface font-semibold"}>1 Family</span>
      </div>
      </div>
      <div className={"flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-low shrink-0 shadow-sm"}>
      <div className={"w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-primary"}>
      <span className={"material-symbols-outlined text-[16px]"}>timer</span>
      </div>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Next Sweep Cutoff</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>16:30 PKT</span>
      </div>
      </div>
      </div>
      {/*  Resident Cards List  */}
      <div className={"flex flex-col space-y-space-md"}>
      {/*  Card 1: Chacha Rustam (Safe / Moss Green)  */}
      <div className={"relative rounded-xl bg-surface-container p-space-md shadow-lg flex flex-col space-y-space-sm"} id={"resident-card-1"}>
      <div className={"flex items-start justify-between gap-space-xs"}>
      <div className={"flex items-start gap-space-sm min-w-0"}>
      <div className={"w-11 h-11 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary shrink-0 shadow-inner"}>
      <span className={"material-symbols-outlined text-[24px]"}>elderly</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-1.5 flex-wrap"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface font-bold leading-tight"}>Chacha Rustam</span>
      <span className={"font-urdu-body text-urdu-body text-primary leading-tight"}>چاچا رستم</span>
      </div>
      <div className={"flex items-center gap-2 mt-0.5 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span>Age 82</span>
      <span>•</span>
      <span className={"flex items-center gap-1 text-secondary"}>
      <span className={"material-symbols-outlined text-[14px]"}>hearing_disabled</span>
                      Deaf / Hard of Hearing
                    </span>
      </div>
      </div>
      </div>
      <span className={"px-2.5 py-1 rounded-full bg-surface-container-highest text-secondary font-telemetry-sm text-telemetry-sm shrink-0"}>
                SEC 04
              </span>
      </div>
      {/*  Address & Situation  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col space-y-1"}>
      <div className={"flex items-start gap-1.5 text-on-surface"}>
      <span className={"material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5"}>pin_drop</span>
      <span className={"font-body-sm text-body-sm font-medium"}>House 14, Gali 3, Lyari Sector 4 (Yellow gate)</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant pl-6"}>
                Lives alone, ground floor room susceptible to drain overflow. High water threshold: +0.6m.
              </p>
      </div>
      {/*  Neighbor Hotline CTA  */}
      <a className={"min-h-[44px] w-full flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-high text-on-surface active:scale-[0.98] transition-all"} href={"tel:+923005550182"}>
      <div className={"flex items-center gap-2"}>
      <div className={"w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center"}>
      <span className={"material-symbols-outlined text-[16px]"}>call</span>
      </div>
      <span className={"font-body-sm text-body-sm font-medium"}>Call Guardian / Neighbor</span>
      </div>
      <span className={"font-urdu-body text-xs text-secondary leading-none"}>پڑوسی کو فون</span>
      </a>
      {/*  3-Way Outcome Selector (Active: Safe)  */}
      <div className={"flex flex-col space-y-1.5 pt-1"}>
      <label className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>Physical Doorstep Status / تصدیق نتیجہ</label>
      <div className={"grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-surface-container-lowest"}>
      <button className={"status-btn min-h-[44px] px-2 py-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all bg-secondary-container text-on-secondary-container shadow-md"} data-status={"safe"} data-target={"1"} type={"button"}>
      <div className={"flex items-center gap-1 font-body-sm text-body-sm font-bold"}>
      <span className={"material-symbols-outlined text-[15px]"} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
      <span>Safe</span>
      </div>
      <span className={"font-urdu-body text-[11px] leading-tight"}>محفوظ</span>
      </button>
      <button className={"status-btn min-h-[44px] px-2 py-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all text-on-surface-variant hover:text-on-surface active:scale-95"} data-status={"needs-help"} data-target={"1"} type={"button"}>
      <span className={"font-body-sm text-body-sm font-medium"}>Needs Help</span>
      <span className={"font-urdu-body text-[11px] leading-tight"}>مدد درکار</span>
      </button>
      <button className={"status-btn min-h-[44px] px-2 py-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all text-on-surface-variant hover:text-on-surface active:scale-95"} data-status={"no-answer"} data-target={"1"} type={"button"}>
      <span className={"font-body-sm text-body-sm font-medium"}>No Answer</span>
      <span className={"font-urdu-body text-[11px] leading-tight"}>کوئی جواب نہیں</span>
      </button>
      </div>
      </div>
      {/*  Verification stamp  */}
      <div className={"flex items-center justify-between text-on-surface-variant font-telemetry-sm text-telemetry-sm pt-1"}>
      <div className={"flex items-center gap-1 text-secondary"}>
      <span className={"material-symbols-outlined text-[15px]"} style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
      <span>Verified 12m ago by Tariq (Squad 04)</span>
      </div>
      <span className={"opacity-60"}>BATTERY OK</span>
      </div>
      </div>
      {/*  Card 2: Zubaida Begum & Infant (Needs Help / Vermilion Alert)  */}
      <div className={"relative rounded-xl bg-surface-container p-space-md shadow-lg flex flex-col space-y-space-sm"} id={"resident-card-2"}>
      <div className={"flex items-start justify-between gap-space-xs"}>
      <div className={"flex items-start gap-space-sm min-w-0"}>
      <div className={"w-11 h-11 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary-container shrink-0 shadow-inner"}>
      <span className={"material-symbols-outlined text-[24px]"}>baby_changing_station</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-1.5 flex-wrap"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface font-bold leading-tight"}>Zubaida Begum &amp; Infant</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-primary leading-tight"}>زبیدہ بیگم اور بچہ</span>
      <div className={"flex items-center gap-2 mt-0.5 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"text-tertiary-fixed font-bold"}>Postnatal Care</span>
      <span>•</span>
      <span>Newborn 4 Days</span>
      </div>
      </div>
      </div>
      <span className={"px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1 shrink-0"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span>
                URGENT
              </span>
      </div>
      {/*  Address & Urgent Note  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col space-y-1"}>
      <div className={"flex items-start gap-1.5 text-on-surface"}>
      <span className={"material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5"}>location_city</span>
      <span className={"font-body-sm text-body-sm font-medium"}>Flat 2B, Qasim Compound, Lyari</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface pl-6"}>
                Newborn (4 days old), zero potable drinking water reported; municipal pump contaminated.
              </p>
      </div>
      {/*  Midwife Hotline CTA  */}
      <a className={"min-h-[44px] w-full flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-high text-on-surface active:scale-[0.98] transition-all"} href={"tel:+923215550992"}>
      <div className={"flex items-center gap-2"}>
      <div className={"w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold"}>
      <span className={"material-symbols-outlined text-[16px]"}>medical_services</span>
      </div>
      <span className={"font-body-sm text-body-sm font-medium"}>Call Local Midwife / Lady Health Worker</span>
      </div>
      <span className={"font-urdu-body text-xs text-primary leading-none"}>دائی کو کال</span>
      </a>
      {/*  3-Way Outcome Selector (Active: Needs Help)  */}
      <div className={"flex flex-col space-y-1.5 pt-1"}>
      <label className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>Physical Doorstep Status / تصدیق نتیجہ</label>
      <div className={"grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-surface-container-lowest"}>
      <button className={"status-btn min-h-[44px] px-2 py-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all text-on-surface-variant hover:text-on-surface active:scale-95"} data-status={"safe"} data-target={"2"} type={"button"}>
      <span className={"font-body-sm text-body-sm font-medium"}>Safe</span>
      <span className={"font-urdu-body text-[11px] leading-tight"}>محفوظ</span>
      </button>
      <button className={"status-btn min-h-[44px] px-2 py-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all bg-error-container text-on-error-container shadow-md"} data-status={"needs-help"} data-target={"2"} type={"button"}>
      <div className={"flex items-center gap-1 font-body-sm text-body-sm font-bold"}>
      <span className={"material-symbols-outlined text-[15px]"} style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
      <span>Needs Help</span>
      </div>
      <span className={"font-urdu-body text-[11px] leading-tight"}>مدد درکار</span>
      </button>
      <button className={"status-btn min-h-[44px] px-2 py-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all text-on-surface-variant hover:text-on-surface active:scale-95"} data-status={"no-answer"} data-target={"2"} type={"button"}>
      <span className={"font-body-sm text-body-sm font-medium"}>No Answer</span>
      <span className={"font-urdu-body text-[11px] leading-tight"}>کوئی جواب نہیں</span>
      </button>
      </div>
      </div>
      {/*  Triggered Action Banner  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-highest flex items-start gap-2 shadow-inner"}>
      <span className={"material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"}>local_shipping</span>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>Action Dispatched:</span>
      <span className={"font-body-sm text-body-sm text-on-surface"}>ORS + Clean Infant Formula pack via Volunteer Squad 09 (ETA 18 min).</span>
      </div>
      </div>
      </div>
      {/*  Card 3: Master Ghulam Rasool (No Answer / Hatched Slate Unknown)  */}
      <div className={"relative rounded-xl bg-surface-container p-space-md shadow-lg flex flex-col space-y-space-sm"} id={"resident-card-3"}>
      <div className={"flex items-start justify-between gap-space-xs"}>
      <div className={"flex items-start gap-space-sm min-w-0"}>
      <div className={"w-11 h-11 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant shrink-0 shadow-inner"}>
      <span className={"material-symbols-outlined text-[24px]"}>visibility_off</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-1.5 flex-wrap"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface font-bold leading-tight"}>Master Ghulam Rasool</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-primary leading-tight"}>ماسٹر غلام رسول</span>
      <div className={"flex items-center gap-2 mt-0.5 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span>Age 74</span>
      <span>•</span>
      <span className={"flex items-center gap-1 text-on-surface"}>
      <span className={"material-symbols-outlined text-[14px]"}>blind</span>
                      Visually Impaired
                    </span>
      </div>
      </div>
      </div>
      <span className={"px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant font-telemetry-sm text-telemetry-sm shrink-0"}>
                MALIR
              </span>
      </div>
      {/*  Address & Situation  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col space-y-1"}>
      <div className={"flex items-start gap-1.5 text-on-surface"}>
      <span className={"material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5"}>home</span>
      <span className={"font-body-sm text-body-sm font-medium"}>Near Jamia Masjid Noor, Malir Riverbank</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant pl-6"}>
                Has battery AM radio, no mobile phone. High river overflow vulnerability corridor.
              </p>
      </div>
      {/*  Call Imam Masjid  */}
      <a className={"min-h-[44px] w-full flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-high text-on-surface active:scale-[0.98] transition-all"} href={"tel:+923125550411"}>
      <div className={"flex items-center gap-2"}>
      <div className={"w-7 h-7 rounded-full bg-surface-variant text-secondary flex items-center justify-center"}>
      <span className={"material-symbols-outlined text-[16px]"}>mosque</span>
      </div>
      <span className={"font-body-sm text-body-sm font-medium"}>Call Imam Masjid Noor</span>
      </div>
      <span className={"font-urdu-body text-xs text-primary leading-none"}>امام مسجد کو کال</span>
      </a>
      {/*  3-Way Outcome Selector (Active: No Answer / Diagonal Hatched)  */}
      <div className={"flex flex-col space-y-1.5 pt-1"}>
      <label className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>Physical Doorstep Status / تصدیق نتیجہ</label>
      <div className={"grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-surface-container-lowest"}>
      <button className={"status-btn min-h-[44px] px-2 py-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all text-on-surface-variant hover:text-on-surface active:scale-95"} data-status={"safe"} data-target={"3"} type={"button"}>
      <span className={"font-body-sm text-body-sm font-medium"}>Safe</span>
      <span className={"font-urdu-body text-[11px] leading-tight"}>محفوظ</span>
      </button>
      <button className={"status-btn min-h-[44px] px-2 py-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all text-on-surface-variant hover:text-on-surface active:scale-95"} data-status={"needs-help"} data-target={"3"} type={"button"}>
      <span className={"font-body-sm text-body-sm font-medium"}>Needs Help</span>
      <span className={"font-urdu-body text-[11px] leading-tight"}>مدد درکار</span>
      </button>
      <button className={"status-btn min-h-[44px] px-2 py-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all relative overflow-hidden bg-surface-container-highest text-on-surface shadow-md"} data-status={"no-answer"} data-target={"3"} type={"button"}>
      <div className={"absolute inset-0 opacity-15 pointer-events-none"} style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 3px, transparent 0, transparent 6px)" }}></div>
      <div className={"relative flex items-center gap-1 font-body-sm text-body-sm font-bold"}>
      <span className={"material-symbols-outlined text-[15px]"}>help</span>
      <span>No Answer</span>
      </div>
      <span className={"relative font-urdu-body text-[11px] leading-tight"}>کوئی جواب نہیں</span>
      </button>
      </div>
      </div>
      {/*  Warning Follow-up Stamp  */}
      <div className={"p-space-sm rounded-lg bg-surface-container-low flex items-center gap-2 text-on-surface"}>
      <span className={"material-symbols-outlined text-primary text-[20px] shrink-0"}>doorbell</span>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>⚠️ Doorstep Alert:</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>Re-assigned for physical doorstep knock by 16:30 PKT by Area Runner.</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Register New Unconnected Resident CTA (Tactile Amber Button)  */}
      <div className={"pt-2 pb-4"}>
      <button className={"w-full min-h-[52px] px-space-md py-3 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold flex items-center justify-between shadow-[0_4px_20px_rgba(242,169,59,0.35)] active:scale-[0.98] transition-transform"} id={"open-register-modal"} type={"button"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-8 h-8 rounded-full bg-on-primary-container/15 flex items-center justify-center"}>
      <span className={"material-symbols-outlined text-[20px] text-on-primary-container font-bold"}>person_add</span>
      </div>
      <span className={"tracking-tight"}>Register New Resident</span>
      </div>
      <span className={"font-urdu-body text-urdu-body leading-none"}>نیا شہری درج کریں</span>
      </button>
      </div>
      {/*  Interactive Modal Bottom-Sheet for Adding Unconnected Resident (Client-side interactive)  */}
      <div className={"hidden fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md flex flex-col justify-end p-0"} id={"register-modal"}>
      <div className={"relative w-full rounded-t-2xl bg-surface-container-high p-space-md flex flex-col space-y-space-md shadow-2xl max-h-[85vh] overflow-y-auto"}>
      <div className={"w-12 h-1.5 rounded-full bg-surface-container-highest mx-auto"}></div>
      <div className={"flex items-center justify-between"}>
      <div className={"flex flex-col"}>
      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Add Unconnected Neighbor</h3>
      <span className={"font-urdu-body text-xs text-primary leading-tight"}>بغیر فون کے پڑوسی کا اندراج</span>
      </div>
      <button className={"min-w-[40px] min-h-[40px] rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant active:scale-95"} id={"close-register-modal"} type={"button"}>
      <span className={"material-symbols-outlined text-[20px]"}>close</span>
      </button>
      </div>
      <div className={"space-y-space-sm"}>
      <div className={"flex flex-col space-y-1"}>
      <label className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>FULL NAME / پورا نام</label>
      <input className={"w-full min-h-[44px] px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40"} placeholder={"e.g. Mai Jannat Bibi"} type={"text"} />
      </div>
      <div className={"grid grid-cols-2 gap-space-sm"}>
      <div className={"flex flex-col space-y-1"}>
      <label className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>APPROX AGE / عمر</label>
      <input className={"w-full min-h-[44px] px-3 rounded-lg bg-surface-container-lowest text-on-surface font-telemetry-md text-telemetry-md focus:outline-none focus:ring-1 focus:ring-primary"} placeholder={"70"} type={"number"} />
      </div>
      <div className={"flex flex-col space-y-1"}>
      <label className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>VULNERABILITY</label>
      <select className={"w-full min-h-[44px] px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary"}>
      <option>Elderly Living Alone</option>
      <option>Bedridden / Mobility</option>
      <option>Deaf / Hard of Hearing</option>
      <option>Infant / Postnatal</option>
      <option>Visually Impaired</option>
      </select>
      </div>
      </div>
      <div className={"flex flex-col space-y-1"}>
      <label className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>EXACT DOORSTEP LOCATION / پتہ اور گلی</label>
      <input className={"w-full min-h-[44px] px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40"} placeholder={"House number, landmark or paint color"} type={"text"} />
      </div>
      <div className={"flex flex-col space-y-1"}>
      <label className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>CONTACT PERSON (SHOPKEEPER / IMAM)</label>
      <input className={"w-full min-h-[44px] px-3 rounded-lg bg-surface-container-lowest text-on-surface font-telemetry-md text-telemetry-md focus:outline-none focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40"} placeholder={"+92 300 0000000"} type={"tel"} />
      </div>
      </div>
      <div className={"pt-2 flex items-center gap-space-sm"}>
      <button className={"flex-1 min-h-[48px] rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98]"} id={"save-resident-btn"} type={"button"}>
      <span className={"material-symbols-outlined text-[20px]"}>save</span>
      <span>Save &amp; Queue Verification</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </main><nav className={"fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"} data-active-classes={"text-primary font-bold scale-105"}><div className={"h-20 px-space-xs flex items-center justify-around"}><Link to={"/tasks"} className={"flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl text-on-surface-variant transition-all"} data-path="volunteer-tasks"><span className={"material-symbols-outlined text-[24px]"}>checklist</span><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Tasks</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>ٹاسکس</span></Link><a className={"flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl text-on-surface-variant transition-all"} data-path="task-map-detail" href={"#"}><span className={"material-symbols-outlined text-[24px]"}>near_me</span><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Detail</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>تفصیل</span></a><a aria-current={"page"} className={"flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl transition-all text-primary font-bold scale-105"} data-path="buddy-check-in" href={"#"}><span className={"material-symbols-outlined text-[24px]"}>volunteer_activism</span><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Buddy</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>بڈی چیک ان</span></a><a className={"relative flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 py-1 rounded-xl text-on-surface-variant transition-all"} data-path="mesh-sync" href={"#"}><div className={"relative"}><span className={"material-symbols-outlined text-[24px]"}>sync</span><span className={"absolute -top-1 -right-2.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-container text-on-primary font-telemetry-sm text-[10px] font-bold flex items-center justify-center shadow-[0_0_8px_rgba(242,169,59,0.6)]"}>3</span></div><span className={"font-body-sm text-body-sm mt-0.5 leading-none"}>Sync</span><span className={"font-urdu-body text-[11px] opacity-80 leading-tight"}>سنک</span></a></div></nav>
    </div>
  )
}
