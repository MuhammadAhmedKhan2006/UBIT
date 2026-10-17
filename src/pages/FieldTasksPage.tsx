import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function FieldTasksPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("FieldTasksPage", nav)
  return (
    <div className={"bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen"} {...bind}>
      <div className={"flex flex-col relative w-full bg-surface"}><div className={"flex flex-col w-full px-margin space-y-space-md"}>
      {/*  1. Volunteer Identity & Operational Telemetry Pill  */}
      <section className={"flex flex-col gap-space-sm"}>
      <div className={"flex items-center justify-between gap-space-sm bg-surface-container-high/70 backdrop-blur-md rounded-xl p-3 shadow-md"}>
      <div className={"flex items-center gap-2.5 min-w-0"}>
      <div className={"relative shrink-0 w-11 h-11 rounded-full bg-surface-container flex items-center justify-center shadow-[0_0_12px_rgba(242,169,59,0.25)]"}>
      <img className={"w-11 h-11 rounded-full object-cover"} data-alt={"A gritty high-contrast portrait of a determined South Asian male volunteer wearing a monsoon rescue high-visibility jacket with rain droplets reflecting warm kerosene lantern amber light against a stormy dark night backdrop in Pakistan."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBtbAlrnL6l_Zvl1GUsyjfK4P0AlMkGh7mrqBrhEg5YkJygv7ykJB86t-8wO8XfEYuMrn6F6zQQj4oZRSe0k2ai7rhAoQWmueno5jucQwj8SPUZFqdX4iBO9YD8wOmSfqJYyYzljWZfosZIaXQJAQjQpZ7GdivIPXF7Kr18Mswl9OXHBlbbhKshz1NrzyDFDGqqP4SD3Yxi6auB65yeSfJNPBeYlgXI74qNw-pRSDOmdi9AoLJ8M25Shw"} />
      <span className={"absolute bottom-0 right-0 w-3 h-3 rounded-full bg-secondary-container"}></span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-baseline gap-1.5 flex-wrap"}>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface truncate leading-tight"}>Salam, Tariq</h2>
      <span className={"font-urdu-headline text-[15px] text-primary truncate leading-none"}>سلام، طارق بلوچ</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Volunteer #48 • Lyari Sector 4</span>
      </div>
      </div>
      {/*  Online / Offline Toggle Pill  */}
      <button className={"shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container/20 text-secondary active:scale-95 transition-all min-h-[44px]"} id={"mesh-toggle"} type={"button"}>
      <span className={"w-2 h-2 rounded-full bg-secondary animate-pulse"}></span>
      <div className={"flex flex-col items-start leading-none"}>
      <span className={"font-telemetry-sm text-[11px] font-bold"}>Mesh Live</span>
      <span className={"font-urdu-body text-[10px] text-secondary/90 leading-tight"}>آن لائن</span>
      </div>
      <span className={"material-symbols-outlined text-[16px] ml-0.5"}>wifi_tethering</span>
      </button>
      </div>
      {/*  Telemetry Strip  */}
      <div className={"flex items-center justify-between px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-telemetry-sm text-telemetry-sm shadow-sm"}>
      <div className={"flex items-center gap-1.5"}>
      <span className={"material-symbols-outlined text-secondary text-[16px]"}>battery_5_bar</span>
      <span className={"text-on-surface font-semibold"}>84%</span>
      </div>
      <div className={"flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-primary text-[15px]"}>fmd_good</span>
      <span>GPS Lock ±3m</span>
      </div>
      <div className={"flex items-center gap-1 text-secondary"}>
      <span className={"material-symbols-outlined text-[14px]"}>water</span>
      <span>Crest +1.4m</span>
      </div>
      </div>
      </section>
      {/*  2. Next Task Hero Card (The Midnight Lantern Hero)  */}
      <section className={"relative w-full rounded-2xl p-space-md bg-surface-container/80 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.55),0_0_28px_rgba(242,169,59,0.22)] overflow-hidden"}>
      {/*  Lantern Ambient Light Flare  */}
      <div className={"absolute -top-12 -right-12 w-44 h-44 rounded-full bg-primary-container/15 blur-3xl pointer-events-none"}></div>
      <div className={"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-container to-secondary opacity-80"}></div>
      <div className={"relative flex flex-col gap-3"}>
      {/*  Card Sub-header: Urgent Status & Crest Countdown  */}
      <div className={"flex items-center justify-between gap-2"}>
      <div className={"flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container/40 text-error"}>
      <span className={"w-2 h-2 rounded-full bg-error animate-ping"}></span>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold tracking-wide uppercase"}>Tier 1 Critical</span>
      <span className={"opacity-50"}>/</span>
      <span className={"font-urdu-body text-[12px] leading-none"}>فوری جان بچاؤ</span>
      </div>
      <div className={"flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary font-telemetry-sm text-telemetry-sm"}>
      <span className={"material-symbols-outlined text-[15px] animate-spin"}>cyclone</span>
      <span>ETA 08 min</span>
      </div>
      </div>
      {/*  Water Crest Warning Banner  */}
      <div className={"flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-surface-container-lowest/80 text-on-surface-variant font-telemetry-sm text-[11px]"}>
      <span className={"flex items-center gap-1 text-tertiary"}>
      <span className={"material-symbols-outlined text-[14px]"}>timer</span>
                T-Minus Water Crest:
              </span>
      <span className={"text-primary font-bold text-telemetry-sm tracking-tight"}>03:34:00</span>
      </div>
      {/*  Person Details with Urdu Calligraphy Accent  */}
      <div className={"flex items-start justify-between gap-2 pt-1"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-baseline gap-2"}>
      <h3 className={"font-headline-md text-headline-md text-on-surface font-bold tracking-tight"}>Fatima Bibi</h3>
      <span className={"font-telemetry-md text-telemetry-md text-secondary font-bold"}>78 yrs</span>
      </div>
      <p className={"font-urdu-headline text-[18px] text-primary/95 leading-snug"}>فاطمہ بی بی (عمر 78 سال)</p>
      </div>
      {/*  Mini Radar Pulse Target Pin  */}
      <div className={"shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-highest shadow-inner"}>
      <span className={"material-symbols-outlined text-primary text-[24px]"}>crisis_alert</span>
      </div>
      </div>
      {/*  Location Data  */}
      <div className={"flex items-start gap-2 text-on-surface-variant"}>
      <span className={"material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5"}>location_on</span>
      <div className={"flex flex-col text-body-sm font-body-sm"}>
      <span className={"text-on-surface font-medium leading-snug"}>Gul Muhammad Lane, Lyari Sector 4-B</span>
      <span className={"font-urdu-body text-xs text-on-surface-variant"}>گل محمد لین، لیاری سیکٹر 4-بی (پانی +1.2m بلند ہو رہا ہے)</span>
      </div>
      </div>
      {/*  Critical Need Glass Strip  */}
      <div className={"flex items-start gap-2 p-2.5 rounded-xl bg-surface-container-lowest/70 text-on-surface"}>
      <span className={"material-symbols-outlined text-tertiary text-[20px] shrink-0"}>medical_services</span>
      <div className={"flex flex-col"}>
      <span className={"font-body-sm text-body-sm font-semibold text-tertiary"}>Bedridden • Oxygen Concentrator Low</span>
      <span className={"font-urdu-body text-xs text-tertiary-fixed leading-tight"}>معذور خاتون، آکسیجن بیٹریاں تقریباً ختم، اکیلی رہائشی</span>
      </div>
      </div>
      {/*  Large 3D Lantern Amber CTA Action  */}
      <button className={"w-full mt-2 min-h-[54px] px-space-md py-3 rounded-xl bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(242,169,59,0.45),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.25)] active:scale-[0.98] active:translate-y-0.5 transition-all"} id={"hero-task-cta"} type={"button"}>
      <span className={"material-symbols-outlined text-[24px]"}>navigation</span>
      <div className={"flex items-center gap-2"}>
      <span>Start Task &amp; Open Nav</span>
      <span className={"opacity-50"}>/</span>
      <span className={"font-urdu-body text-sm leading-none"}>ٹاسک شروع کریں</span>
      </div>
      </button>
      </div>
      </section>
      {/*  3. Upcoming Tasks Queue  */}
      <section className={"flex flex-col gap-space-sm pt-1"}>
      <div className={"flex items-center justify-between px-1"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-secondary text-[20px]"}>format_list_bulleted</span>
      <h4 className={"font-headline-sm text-[18px] text-on-surface"}>Upcoming Priority Queue</h4>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>3 Queued</span>
      </div>
      {/*  Queue Card 1: Bilal Ahmed (Tier 1)  */}
      <div className={"group relative flex flex-col p-3 rounded-xl bg-surface-container-high/60 backdrop-blur-md shadow-sm transition-all active:scale-[0.99]"}>
      <div className={"flex items-start justify-between gap-2 mb-1.5"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-baseline gap-2"}>
      <span className={"font-body-lg text-body-lg font-bold text-on-surface truncate"}>Bilal Ahmed</span>
      <span className={"font-telemetry-sm text-[11px] text-on-surface-variant"}>Malir Riverbank</span>
      </div>
      <span className={"font-urdu-body text-xs text-primary leading-tight"}>بلال احمد (دریا کنارہ، مالیر)</span>
      </div>
      <span className={"shrink-0 px-2 py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-[10px] font-bold uppercase"}>
                Tier 1 Critical
              </span>
      </div>
      <div className={"flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant my-1"}>
      <span className={"material-symbols-outlined text-secondary text-[16px] shrink-0"}>accessible_forward</span>
      <span className={"truncate"}>Paraplegic • Wait for inflatable boat #04</span>
      </div>
      <div className={"flex items-center justify-between pt-2 mt-1 border-t-0 bg-surface-container-lowest/40 rounded-lg px-2.5 py-1.5"}>
      <div className={"flex items-center gap-2 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"text-primary font-bold"}>1.8 km</span>
      <span className={"opacity-40"}>•</span>
      <span>ETA 14m</span>
      </div>
      <button className={"flex items-center gap-1 font-telemetry-sm text-telemetry-sm text-secondary font-semibold min-h-[44px] min-w-[44px] justify-end"} type={"button"}>
      <span>Details</span>
      <span className={"material-symbols-outlined text-[16px]"}>arrow_forward</span>
      </button>
      </div>
      </div>
      {/*  Queue Card 2: Mrs. Tahira Khan (Tier 2)  */}
      <div className={"group relative flex flex-col p-3 rounded-xl bg-surface-container-high/60 backdrop-blur-md shadow-sm transition-all active:scale-[0.99]"}>
      <div className={"flex items-start justify-between gap-2 mb-1.5"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-baseline gap-2"}>
      <span className={"font-body-lg text-body-lg font-bold text-on-surface truncate"}>Mrs. Tahira Khan</span>
      <span className={"font-telemetry-sm text-[11px] text-on-surface-variant"}>Korangi Edge</span>
      </div>
      <span className={"font-urdu-body text-xs text-primary leading-tight"}>محترمہ طاہرہ خان (کورنگی انڈسٹریل)</span>
      </div>
      <span className={"shrink-0 px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-telemetry-sm text-[10px] font-bold uppercase"}>
                Tier 2 Urgent
              </span>
      </div>
      <div className={"flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant my-1"}>
      <span className={"material-symbols-outlined text-primary text-[16px] shrink-0"}>local_hospital</span>
      <span className={"truncate"}>Dialysis breached • 4x4 Scout #02 en route</span>
      </div>
      <div className={"flex items-center justify-between pt-2 mt-1 bg-surface-container-lowest/40 rounded-lg px-2.5 py-1.5"}>
      <div className={"flex items-center gap-2 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"text-primary font-bold"}>3.2 km</span>
      <span className={"opacity-40"}>•</span>
      <span>ETA 22m</span>
      </div>
      <button className={"flex items-center gap-1 font-telemetry-sm text-telemetry-sm text-secondary font-semibold min-h-[44px] min-w-[44px] justify-end"} type={"button"}>
      <span>Details</span>
      <span className={"material-symbols-outlined text-[16px]"}>arrow_forward</span>
      </button>
      </div>
      </div>
      {/*  Queue Card 3: Zubair Hassan (Tier 2)  */}
      <div className={"group relative flex flex-col p-3 rounded-xl bg-surface-container-high/60 backdrop-blur-md shadow-sm transition-all active:scale-[0.99]"}>
      <div className={"flex items-start justify-between gap-2 mb-1.5"}>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-baseline gap-2"}>
      <span className={"font-body-lg text-body-lg font-bold text-on-surface truncate"}>Zubair Hassan</span>
      <span className={"font-telemetry-sm text-[11px] text-on-surface-variant"}>Keamari Creek</span>
      </div>
      <span className={"font-urdu-body text-xs text-primary leading-tight"}>زبیر حسن (کیماڑی کریک)</span>
      </div>
      <span className={"shrink-0 px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-telemetry-sm text-[10px] font-bold uppercase"}>
                Tier 2 Urgent
              </span>
      </div>
      <div className={"flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant my-1"}>
      <span className={"material-symbols-outlined text-secondary text-[16px] shrink-0"}>roofing</span>
      <span className={"truncate"}>High tide surge • Rooftop shelter check</span>
      </div>
      <div className={"flex items-center justify-between pt-2 mt-1 bg-surface-container-lowest/40 rounded-lg px-2.5 py-1.5"}>
      <div className={"flex items-center gap-2 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"text-primary font-bold"}>4.7 km</span>
      <span className={"opacity-40"}>•</span>
      <span>ETA 35m</span>
      </div>
      <button className={"flex items-center gap-1 font-telemetry-sm text-telemetry-sm text-secondary font-semibold min-h-[44px] min-w-[44px] justify-end"} type={"button"}>
      <span>Details</span>
      <span className={"material-symbols-outlined text-[16px]"}>arrow_forward</span>
      </button>
      </div>
      </div>
      </section>
      {/*  4. Floating Shift Summary Cockpit Strip  */}
      <section className={"w-full pb-2"}>
      <div className={"flex items-center justify-between px-4 py-2.5 rounded-xl bg-surface-container-lowest/90 backdrop-blur-lg shadow-lg"}>
      <div className={"flex items-center gap-2"}>
      <span className={"flex items-center justify-center w-7 h-7 rounded-lg bg-secondary-container/20 text-secondary"}>
      <span className={"material-symbols-outlined text-[16px]"}>task_alt</span>
      </span>
      <div className={"flex flex-col leading-tight"}>
      <div className={"flex items-center gap-1"}>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-secondary"}>2</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>Done</span>
      </div>
      <span className={"font-urdu-body text-[10px] text-on-surface-variant leading-none"}>مکمل ۲</span>
      </div>
      </div>
      <div className={"w-px h-6 bg-surface-variant"}></div>
      <div className={"flex items-center gap-2"}>
      <span className={"flex items-center justify-center w-7 h-7 rounded-lg bg-primary-container/20 text-primary"}>
      <span className={"material-symbols-outlined text-[16px]"}>pending_actions</span>
      </span>
      <div className={"flex flex-col leading-tight"}>
      <div className={"flex items-center gap-1"}>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-primary"}>4</span>
      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>Rem</span>
      </div>
      <span className={"font-urdu-body text-[10px] text-on-surface-variant leading-none"}>باقی ۴</span>
      </div>
      </div>
      <div className={"w-px h-6 bg-surface-variant"}></div>
      <div className={"flex items-center gap-1.5"}>
      <span className={"material-symbols-outlined text-secondary text-[16px]"}>shield</span>
      <div className={"flex flex-col leading-tight"}>
      <span className={"font-telemetry-sm text-[11px] font-bold text-secondary"}>Ready</span>
      <span className={"font-urdu-body text-[10px] text-secondary leading-none"}>محفوظ</span>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
    </div>
  )
}
