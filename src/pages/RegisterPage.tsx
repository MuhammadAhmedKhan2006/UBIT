import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function RegisterPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("RegisterPage", nav)
  return (
    <div className={"bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container flex flex-col min-h-screen"} {...bind}>
      <header className={"fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]"}><div className={"w-full bg-secondary-container/20 px-margin py-space-xs flex items-center justify-center gap-space-xs overflow-hidden"}><span className={"w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0"}></span><p className={"font-telemetry-sm text-telemetry-sm text-secondary truncate text-center"}>Synthetic demo data, weights are expert assumptions, not validated / مصنوعی ڈیمو ڈیٹا</p></div><div className={"h-28 px-margin flex flex-col justify-between py-space-xs"}><div className={"flex items-center justify-between gap-space-sm"}><div className={"flex items-center gap-space-sm min-w-0"}><div className={"w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] shrink-0"}><span className={"material-symbols-outlined text-primary-container text-[24px]"}>local_fire_department</span></div><div className={"flex flex-col min-w-0"}><div className={"flex items-center gap-space-xs"}><span className={"font-headline-sm text-headline-sm text-on-surface tracking-tight truncate leading-tight"}>Nobody Left Behind</span></div><div className={"flex items-center gap-space-xs"}><span className={"font-urdu-body text-urdu-body text-on-surface-variant leading-none"}>کوئی پیچھے نہ رہے</span><span className={"px-1.5 py-0.5 rounded-full bg-surface-container-highest text-secondary font-telemetry-sm text-telemetry-sm tracking-wide uppercase"}>Registrar</span></div></div></div><div className={"flex items-center gap-space-xs shrink-0"}><button aria-label={"Switch Language"} className={"h-9 px-space-sm rounded-full bg-surface-container-high active:scale-95 transition-transform flex items-center justify-center gap-1 text-on-surface-variant hover:text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.15)]"} data-action="document.documentElement.dir = document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl';" data-args={"[]"} type={"button"}><span className={"font-telemetry-sm text-telemetry-sm font-bold text-primary"}>EN</span><span className={"text-outline-variant font-telemetry-sm text-telemetry-sm"}>|</span><span className={"font-urdu-body text-urdu-body leading-none text-secondary"}>اردو</span></button><div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(242,169,59,0.35)]"}><span className={"material-symbols-outlined text-on-primary text-[18px]"}>person</span></div></div></div><div className={"flex items-center justify-between gap-space-sm pb-space-xs"}><div className={"flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-high/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"}><span className={"material-symbols-outlined text-secondary text-[16px] animate-pulse"}>water_drop</span><span className={"font-telemetry-sm text-telemetry-sm text-on-surface"}>Water in <strong className={"text-secondary font-bold"}>03:42:10</strong></span><span className={"text-outline-variant font-telemetry-sm text-telemetry-sm"}>•</span><span className={"font-urdu-body text-urdu-body text-secondary leading-none text-[12px]"}>پانی 03:42:10</span></div><div className={"flex items-center gap-1.5"}><span className={"w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#65d9c5]"}></span><span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase tracking-wider"}>PWA Mesh</span></div></div></div></header><main className={"flex flex-col relative w-full px-margin pt-28 pb-28 bg-surface"}><div className={"flex flex-col w-full space-y-space-md text-on-surface"}>
      {/*  Success Offline Sync Toast  */}
      <div className={"relative overflow-hidden rounded-xl bg-secondary-container/20 p-space-md shadow-lg flex items-center justify-between gap-space-sm backdrop-blur-md"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center shrink-0 shadow-sm text-on-secondary-container"}>
      <span className={"material-symbols-outlined text-[20px]"} style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <div className={"flex items-center gap-1.5 flex-wrap"}>
      <span className={"font-telemetry-sm text-telemetry-sm font-bold text-secondary"}>#REG-4091</span>
      <span className={"font-body-sm text-body-sm font-medium text-on-surface truncate"}>Saved Offline to Local Cache</span>
      </div>
      <p className={"font-urdu-body text-urdu-body text-[13px] text-secondary leading-tight"}>اندراج کامیابی سے مقامی کیشے میں محفوظ ہو گیا</p>
      </div>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-telemetry-sm text-telemetry-sm shrink-0"}>LoRa Mesh</span>
      </div>
      {/*  Recent Registrar Status Card  */}
      <div className={"rounded-xl bg-surface-container-high/60 p-space-sm flex items-center justify-between gap-space-sm"}>
      <div className={"flex items-center gap-space-sm min-w-0"}>
      <div className={"w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0"}>
      <span className={"material-symbols-outlined text-[18px]"}>verified_user</span>
      </div>
      <div className={"min-w-0"}>
      <p className={"font-body-sm text-body-sm font-medium text-on-surface truncate"}>Last: Fatima Bibi (78 yrs)</p>
      <p className={"font-urdu-body text-urdu-body text-[12px] text-on-surface-variant leading-none"}>فاطمہ بی بی (78 سال) - موثق اندراج</p>
      </div>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary bg-primary-container/20 px-2 py-1 rounded-full shrink-0"}>Synced</span>
      </div>
      {/*  View Switcher Segmented Control  */}
      <div className={"rounded-xl bg-surface-container-lowest p-1 flex items-center gap-1 shadow-inner"}>
      <button className={"flex-1 py-2 px-1 rounded-lg bg-primary-container text-on-primary-container shadow-md flex flex-col items-center justify-center transition-all"} type={"button"}>
      <span className={"font-headline-sm text-[13px] leading-tight font-bold"}>New Registration</span>
      <span className={"font-urdu-body text-urdu-body text-[11px] leading-tight font-semibold"}>نیا اندراج</span>
      </button>
      <button className={"flex-1 py-2 px-1 rounded-lg text-on-surface-variant hover:text-on-surface flex flex-col items-center justify-center transition-all"} type={"button"}>
      <div className={"flex items-center gap-1"}>
      <span className={"font-body-sm text-body-sm font-medium"}>My Records</span>
      <span className={"px-1.5 py-0.2 rounded-full bg-surface-container-high text-secondary font-telemetry-sm text-[10px]"}>14</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[11px] leading-tight"}>میرے اندراج</span>
      </button>
      <button className={"flex-1 py-2 px-1 rounded-lg text-on-surface-variant hover:text-on-surface flex flex-col items-center justify-center transition-all"} type={"button"}>
      <div className={"flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[14px] text-primary"}>bolt</span>
      <span className={"font-body-sm text-body-sm font-medium"}>Quick SMS</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[11px] leading-tight"}>فوری پیغام</span>
      </button>
      </div>
      {/*  Registration Form Container  */}
      <div className={"rounded-2xl bg-surface-container/70 backdrop-blur-xl p-space-md shadow-xl flex flex-col space-y-space-md"}>
      {/*  Form Section Header  */}
      <div className={"flex items-center justify-between pb-space-xs"}>
      <div>
      <h2 className={"font-headline-md text-headline-md text-primary tracking-tight"}>Family Triage Dossier</h2>
      <p className={"font-urdu-headline text-urdu-headline text-primary-fixed leading-tight"}>خاندانی بچاؤ و امدادی فارم</p>
      </div>
      <div className={"w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-container shadow-[0_0_16px_rgba(242,169,59,0.25)]"}>
      <span className={"material-symbols-outlined text-[24px]"}>assignment_ind</span>
      </div>
      </div>
      {/*  Full Name Input  */}
      <div className={"flex flex-col space-y-1"}>
      <div className={"flex justify-between items-baseline"}>
      <label className={"font-body-sm text-body-sm font-semibold text-on-surface"} htmlFor={"fullName"}>Resident Full Name</label>
      <span className={"font-urdu-body text-urdu-body text-primary-fixed text-[13px]"}>شہری کا مکمل نام</span>
      </div>
      <div className={"relative flex items-center"}>
      <span className={"material-symbols-outlined absolute left-3 text-outline-variant text-[20px] pointer-events-none"}>badge</span>
      <input className={"w-full h-12 pl-10 pr-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"} id={"fullName"} placeholder={"Mohammad Aslam / محمد اسلم"} type={"text"} />
      </div>
      </div>
      {/*  Contact Phone Input  */}
      <div className={"flex flex-col space-y-1"}>
      <div className={"flex justify-between items-baseline"}>
      <label className={"font-body-sm text-body-sm font-semibold text-on-surface"} htmlFor={"contactPhone"}>Contact Phone (Optional)</label>
      <span className={"font-urdu-body text-urdu-body text-on-surface-variant text-[13px]"}>رابطہ نمبر (اختیاری)</span>
      </div>
      <div className={"relative flex items-center"}>
      <span className={"material-symbols-outlined absolute left-3 text-outline-variant text-[20px] pointer-events-none"}>call</span>
      <input className={"w-full h-12 pl-10 pr-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-telemetry-md text-telemetry-md focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"} id={"contactPhone"} placeholder={"0300 1234567"} type={"tel"} />
      </div>
      <p className={"font-urdu-body text-urdu-body text-[12px] text-on-surface-variant leading-relaxed"}>فون نہ ہونے کی صورت میں خالی چھوڑیں / Leave empty if no phone</p>
      </div>
      {/*  Location & Mini Map Section  */}
      <div className={"flex flex-col space-y-2"}>
      <div className={"flex justify-between items-baseline"}>
      <label className={"font-body-sm text-body-sm font-semibold text-on-surface"}>Area &amp; Exact Landmark</label>
      <span className={"font-urdu-body text-urdu-body text-primary-fixed text-[13px]"}>علاقہ و قریبی نشان</span>
      </div>
      {/*  Area Tag Bar  */}
      <div className={"p-2.5 rounded-xl bg-surface-container-lowest flex items-center justify-between gap-space-xs"}>
      <div className={"flex items-center gap-2 min-w-0"}>
      <span className={"material-symbols-outlined text-secondary text-[20px] shrink-0"}>pin_drop</span>
      <div className={"truncate"}>
      <span className={"font-body-sm text-body-sm text-on-surface font-medium truncate block"}>Lyari Sector 4-B, Moosa Lane</span>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-secondary leading-none block"}>گلی 4، موسیٰ لین، لیاری</span>
      </div>
      </div>
      <button className={"h-9 px-3 rounded-lg bg-surface-container-high text-primary hover:bg-surface-bright active:scale-95 transition-transform flex items-center gap-1 font-telemetry-sm text-telemetry-sm shrink-0"} type={"button"}>
      <span className={"material-symbols-outlined text-[16px] animate-pulse"}>my_location</span>
      <span>±3m GPS</span>
      </button>
      </div>
      {/*  Interactive Mini-Map Preview Pin Card  */}
      <div className={"w-full h-36 rounded-xl bg-cover bg-center relative overflow-hidden flex flex-col justify-between p-2 shadow-inner"} data-alt={"Dark monsoon night satellite thermal map of Lyari Karachi district with digital telemetry pins, glowing flood elevation contours in teal and amber rescue waypoints"} data-location={"Lyari Sector 4-B, Moosa Lane, Karachi"} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_s3DUAYyidKDqvXctiuQqER4mlLXq4tX1sJyvRCsU3r5dsyS1eoQ9LOUNhyiGZmKmLJBqPYS6v_nrPHPhUN9AwmLYDUIzm0UKHcDM1Bbo7BzgyC4ALlkx4JNcGL_biFc4CXJZYTQbgdWGB6IWaCxxWnaLi0Uz2PWLVxiq3kHgoLcnxUvxYH54HYGh3uY2y1K3gL7Pra3FxIY85hZTMPQPV3Eu9DzU5AbYmuUE7OIXDacPIeGRcQXDuQ')" }}>
      <div className={"flex justify-between items-start"}>
      <span className={"px-2 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-telemetry-sm text-telemetry-sm text-secondary"}>LAT 24.8615° N / LON 66.9905° E</span>
      <span className={"px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span> High Water Surge
                </span>
      </div>
      <div className={"flex items-center justify-center"}>
      <div className={"w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center animate-bounce"}>
      <span className={"material-symbols-outlined text-primary-container text-[28px]"} style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
      </div>
      </div>
      <div className={"px-2 py-1 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between"}>
      <span className={"font-body-sm text-body-sm text-on-surface"}>Target Zone: Sector 4B</span>
      <span className={"font-urdu-body text-urdu-body text-primary text-[12px]"}>مقام تصدیق شدہ</span>
      </div>
      </div>
      </div>
      {/*  Household Members Count Stepper  */}
      <div className={"p-space-md rounded-xl bg-surface-container-lowest flex flex-col space-y-2"}>
      <div className={"flex justify-between items-baseline"}>
      <span className={"font-body-sm text-body-sm font-semibold text-on-surface"}>Household Members Count</span>
      <span className={"font-urdu-body text-urdu-body text-primary-fixed text-[13px]"}>گھرانے کے کل افراد</span>
      </div>
      <div className={"flex items-center justify-between"}>
      <div className={"flex flex-col"}>
      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>Includes infants &amp; seniors</span>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-outline-variant"}>بچے اور بوڑھے شامل ہیں</span>
      </div>
      <div className={"flex items-center gap-space-sm bg-surface-container-high rounded-full p-1 shadow-inner"}>
      <button aria-label={"Decrease member count"} className={"w-10 h-10 rounded-full bg-surface-container-highest text-on-surface active:bg-primary-container active:text-on-primary-container flex items-center justify-center transition-transform active:scale-90"} type={"button"}>
      <span className={"material-symbols-outlined text-[20px]"}>remove</span>
      </button>
      <div className={"min-w-[80px] text-center"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary block leading-none"}>05</span>
      <span className={"font-urdu-body text-urdu-body text-[11px] text-secondary leading-none"}>افراد / Souls</span>
      </div>
      <button aria-label={"Increase member count"} className={"w-10 h-10 rounded-full bg-surface-container-highest text-on-surface active:bg-primary-container active:text-on-primary-container flex items-center justify-center transition-transform active:scale-90"} type={"button"}>
      <span className={"material-symbols-outlined text-[20px]"}>add</span>
      </button>
      </div>
      </div>
      </div>
      {/*  Vulnerability Assessment Checkboxes (High Priority Triage)  */}
      <div className={"flex flex-col space-y-2"}>
      <div className={"flex justify-between items-baseline"}>
      <span className={"font-body-sm text-body-sm font-semibold text-primary"}>Vulnerability Flags (Select all that apply)</span>
      <span className={"font-urdu-body text-urdu-body text-primary-fixed text-[13px]"}>حساس یا لاچار افراد</span>
      </div>
      <div className={"grid grid-cols-1 gap-2"}>
      {/*  Flag 1: Checked  */}
      <label className={"min-h-[48px] p-2.5 rounded-xl bg-surface-container-lowest flex items-center justify-between cursor-pointer select-none active:scale-[0.99] transition-transform"}>
      <div className={"flex items-center gap-3 min-w-0 pr-2"}>
      <div className={"w-6 h-6 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container shrink-0"}>
      <span className={"material-symbols-outlined text-[18px]"}>check</span>
      </div>
      <div className={"min-w-0"}>
      <span className={"font-body-sm text-body-sm font-medium text-on-surface block truncate"}>Solitary Elderly (70+ yrs)</span>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-on-surface-variant leading-none block"}>تنہا بزرگ (70 سال سے زائد)</span>
      </div>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm shrink-0"}>Priority A</span>
      </label>
      {/*  Flag 2: Checked  */}
      <label className={"min-h-[48px] p-2.5 rounded-xl bg-surface-container-lowest flex items-center justify-between cursor-pointer select-none active:scale-[0.99] transition-transform"}>
      <div className={"flex items-center gap-3 min-w-0 pr-2"}>
      <div className={"w-6 h-6 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container shrink-0"}>
      <span className={"material-symbols-outlined text-[18px]"}>check</span>
      </div>
      <div className={"min-w-0"}>
      <span className={"font-body-sm text-body-sm font-medium text-on-surface block truncate"}>Mobility Impaired / Bedridden</span>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-on-surface-variant leading-none block"}>معذور یا بستر پر موجود مریض</span>
      </div>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm shrink-0"}>Stretcher</span>
      </label>
      {/*  Flag 3: Unchecked  */}
      <label className={"min-h-[48px] p-2.5 rounded-xl bg-surface-container-high/40 flex items-center justify-between cursor-pointer select-none active:scale-[0.99] transition-transform"}>
      <div className={"flex items-center gap-3 min-w-0 pr-2"}>
      <div className={"w-6 h-6 rounded-lg bg-surface-container-highest shrink-0"}></div>
      <div className={"min-w-0"}>
      <span className={"font-body-sm text-body-sm font-medium text-on-surface-variant block truncate"}>Oxygen / Dialysis Dependent</span>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-outline-variant leading-none block"}>آکسیجن یا ڈائلیسس پر منحصر</span>
      </div>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-surface-container-highest text-outline font-telemetry-sm text-telemetry-sm shrink-0"}>Power Req</span>
      </label>
      {/*  Flag 4: Checked  */}
      <label className={"min-h-[48px] p-2.5 rounded-xl bg-surface-container-lowest flex items-center justify-between cursor-pointer select-none active:scale-[0.99] transition-transform"}>
      <div className={"flex items-center gap-3 min-w-0 pr-2"}>
      <div className={"w-6 h-6 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container shrink-0"}>
      <span className={"material-symbols-outlined text-[18px]"}>check</span>
      </div>
      <div className={"min-w-0"}>
      <span className={"font-body-sm text-body-sm font-medium text-on-surface block truncate"}>Female-Headed / Woman Alone</span>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-on-surface-variant leading-none block"}>اکیلی خاتون سربراہ / تنہا خاتون</span>
      </div>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-telemetry-sm text-telemetry-sm shrink-0"}>Safe Zone</span>
      </label>
      {/*  Flag 5: Unchecked  */}
      <label className={"min-h-[48px] p-2.5 rounded-xl bg-surface-container-high/40 flex items-center justify-between cursor-pointer select-none active:scale-[0.99] transition-transform"}>
      <div className={"flex items-center gap-3 min-w-0 pr-2"}>
      <div className={"w-6 h-6 rounded-lg bg-surface-container-highest shrink-0"}></div>
      <div className={"min-w-0"}>
      <span className={"font-body-sm text-body-sm font-medium text-on-surface-variant block truncate"}>Unaccompanied Minor</span>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-outline-variant leading-none block"}>تنہا یا لاوارث بچہ</span>
      </div>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-surface-container-highest text-outline font-telemetry-sm text-telemetry-sm shrink-0"}>Escort</span>
      </label>
      {/*  Flag 6: Checked  */}
      <label className={"min-h-[48px] p-2.5 rounded-xl bg-surface-container-lowest flex items-center justify-between cursor-pointer select-none active:scale-[0.99] transition-transform"}>
      <div className={"flex items-center gap-3 min-w-0 pr-2"}>
      <div className={"w-6 h-6 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container shrink-0"}>
      <span className={"material-symbols-outlined text-[18px]"}>check</span>
      </div>
      <div className={"min-w-0"}>
      <span className={"font-body-sm text-body-sm font-medium text-on-surface block truncate"}>Zero Mobile Phone / Offline Island</span>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-on-surface-variant leading-none block"}>موبائل یا سگنل موجود نہیں</span>
      </div>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-telemetry-sm text-telemetry-sm shrink-0"}>Runner</span>
      </label>
      </div>
      </div>
      {/*  Sensitive Location Privacy Toggle  */}
      <div className={"p-space-md rounded-xl bg-surface-container-lowest flex items-center justify-between gap-space-sm"}>
      <div className={"flex items-start gap-space-sm min-w-0"}>
      <div className={"w-8 h-8 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0 mt-0.5"}>
      <span className={"material-symbols-outlined text-[18px]"}>lock</span>
      </div>
      <div className={"flex flex-col min-w-0"}>
      <span className={"font-body-sm text-body-sm font-medium text-on-surface truncate"}>Hide Exact GPS from Mesh</span>
      <span className={"font-urdu-body text-urdu-body text-[12px] text-secondary leading-tight"}>حساس مقام: صرف کوآرڈینیٹر کو مکمل پتہ دکھائیں</span>
      </div>
      </div>
      {/*  Switch Toggle ON  */}
      <div className={"w-12 h-7 rounded-full bg-secondary-container p-0.5 flex items-center justify-end shrink-0 cursor-pointer shadow-md"}>
      <div className={"w-6 h-6 rounded-full bg-on-secondary shadow-sm"}></div>
      </div>
      </div>
      {/*  Preferred Language Selector  */}
      <div className={"flex flex-col space-y-1"}>
      <div className={"flex justify-between items-baseline"}>
      <label className={"font-body-sm text-body-sm font-semibold text-on-surface"}>Preferred Communication Language</label>
      <span className={"font-urdu-body text-urdu-body text-primary-fixed text-[13px]"}>رابطے کی ترجیحی زبان</span>
      </div>
      <div className={"grid grid-cols-4 gap-1.5 pt-1"}>
      <button className={"h-11 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-[13px] font-bold flex flex-col items-center justify-center shadow-md"} type={"button"}>
      <span>اردو</span>
      <span className={"font-telemetry-sm text-[10px] opacity-80"}>Urdu</span>
      </button>
      <button className={"h-11 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-headline-sm text-[13px] font-bold flex flex-col items-center justify-center"} type={"button"}>
      <span>سنڌي</span>
      <span className={"font-telemetry-sm text-[10px] text-on-surface-variant"}>Sindhi</span>
      </button>
      <button className={"h-11 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-headline-sm text-[13px] font-bold flex flex-col items-center justify-center"} type={"button"}>
      <span>بلۆچی</span>
      <span className={"font-telemetry-sm text-[10px] text-on-surface-variant"}>Balochi</span>
      </button>
      <button className={"h-11 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-headline-sm text-[13px] font-bold flex flex-col items-center justify-center"} type={"button"}>
      <span>پښتو</span>
      <span className={"font-telemetry-sm text-[10px] text-on-surface-variant"}>Pashto</span>
      </button>
      </div>
      </div>
      {/*  Large 3D Embossed Amber Submit Button  */}
      <div className={"pt-2"}>
      <button className={"w-full h-14 rounded-2xl bg-primary-container text-on-primary-container font-headline-md text-headline-md flex flex-col items-center justify-center shadow-[0_6px_20px_rgba(242,169,59,0.4),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.3)] active:translate-y-0.5 active:shadow-[0_2px_10px_rgba(242,169,59,0.3)] transition-all"} type={"button"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-[24px]"}>verified</span>
      <span className={"tracking-tight font-extrabold"}>Submit Registration</span>
      </div>
      <span className={"font-urdu-body text-urdu-body text-[14px] leading-none font-bold"}>اندراج محفوظ کریں</span>
      </button>
      <div className={"flex items-center justify-center gap-1.5 pt-2 text-outline"}>
      <span className={"material-symbols-outlined text-[14px]"}>cell_tower</span>
      <span className={"font-telemetry-sm text-telemetry-sm"}>Auto-queues to local SQLite if offline</span>
      </div>
      </div>
      </div>
      {/*  Quick SMS NLP Parser Drawer / Card  */}
      <div className={"rounded-2xl bg-surface-container-high/80 backdrop-blur-xl p-space-md shadow-lg flex flex-col space-y-space-sm"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-primary text-[20px]"}>mark_chat_read</span>
      <div>
      <h3 className={"font-headline-sm text-headline-sm text-on-surface"}>Quick SMS NLP Parser</h3>
      <p className={"font-urdu-body text-urdu-body text-[12px] text-secondary leading-none"}>فوری ایس ایم ایس خودکار تجزیہ</p>
      </div>
      </div>
      <span className={"px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm"}>Edge AI Active</span>
      </div>
      {/*  Raw SMS Box  */}
      <div className={"p-3 rounded-xl bg-surface-container-lowest flex flex-col space-y-1"}>
      <div className={"flex justify-between items-center text-outline text-[11px] font-telemetry-sm"}>
      <span>RAW INCOMING DISPATCH</span>
      <span>VIA CHAT BRIDGE</span>
      </div>
      <p className={"font-telemetry-md text-telemetry-md text-primary bg-surface-container-high/60 p-2 rounded-lg selection:bg-primary-container"}>
              "Lyari gali 4 aslam bhai 6 log ammi bedridden koi phone nahi"
            </p>
      </div>
      {/*  Parsed Live NLP Preview Breakdown Card  */}
      <div className={"p-3 rounded-xl bg-surface-container-lowest/90 flex flex-col space-y-2"}>
      <div className={"flex items-center justify-between pb-1"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-bold uppercase tracking-wider"}>NLP Extraction Result</span>
      <span className={"px-2 py-0.5 rounded-full bg-error text-on-error font-telemetry-sm text-telemetry-sm font-bold animate-pulse"}>Tier 1 Life Threat</span>
      </div>
      <div className={"grid grid-cols-2 gap-2 text-body-sm"}>
      <div className={"bg-surface-container-high/50 p-2 rounded-lg"}>
      <span className={"font-telemetry-sm text-[11px] text-outline block"}>EXTRACTED HEAD</span>
      <span className={"font-body-md font-semibold text-on-surface"}>Aslam Bhai</span>
      <span className={"font-urdu-body text-[11px] text-primary block leading-none"}>اسلم بھائی</span>
      </div>
      <div className={"bg-surface-container-high/50 p-2 rounded-lg"}>
      <span className={"font-telemetry-sm text-[11px] text-outline block"}>SOULS COUNT</span>
      <span className={"font-telemetry-md font-bold text-primary"}>06 Members</span>
      <span className={"font-urdu-body text-[11px] text-secondary block leading-none"}>6 افراد</span>
      </div>
      <div className={"bg-surface-container-high/50 p-2 rounded-lg col-span-2"}>
      <span className={"font-telemetry-sm text-[11px] text-outline block"}>TARGET LOCALITY</span>
      <span className={"font-body-sm text-on-surface"}>Lyari Street 4 (لیاری گلی نمبر 4)</span>
      </div>
      </div>
      {/*  Extracted Tags  */}
      <div className={"flex items-center gap-1.5 flex-wrap pt-1"}>
      <span className={"px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-telemetry-sm text-[11px] flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[13px]"}>bed</span> Bedridden Mother
              </span>
      <span className={"px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-telemetry-sm text-[11px] flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-[13px]"}>phonelink_off</span> Zero Mobile
              </span>
      <span className={"px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-[11px]"}>
                98% Match Confirmed
              </span>
      </div>
      <button className={"w-full mt-1 py-2 rounded-xl bg-surface-bright hover:bg-secondary-container hover:text-on-secondary-container text-on-surface font-headline-sm text-[13px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all"} type={"button"}>
      <span className={"material-symbols-outlined text-[16px]"}>input</span>
      <span>Populate &amp; Confirm Dossier / تفصیلات فارم میں بھریں</span>
      </button>
      </div>
      </div>
      {/*  Operational Community Registrar Footnote  */}
      <div className={"rounded-xl bg-surface-container-lowest/60 p-space-sm flex items-center justify-between text-outline"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-[18px] text-secondary"}>satellite_alt</span>
      <span className={"font-telemetry-sm text-telemetry-sm"}>Relay: Hub Karachi South #04</span>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary"}>PWA v2.4 Offline-First</span>
      </div>
      </div></main><nav className={"fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.5)]"} data-active-classes={"text-primary-container [&>div>span.material-symbols-outlined]:text-primary-container [&>div>span.material-symbols-outlined]:[font-variation-settings:'FILL'_1] [&>div>div]:bg-primary-container/20"}><div className={"h-20 px-space-xs flex items-center justify-around"}><Link to={"/register"} aria-current={"page"} className={"group flex flex-col items-center justify-center min-w-[64px] min-h-[48px] py-1 transition-all active:scale-95 text-primary-container [&>div>span.material-symbols-outlined]:text-primary-container [&>div>span.material-symbols-outlined]:[font-variation-settings:'FILL'_1] [&>div>div]:bg-primary-container/20"} data-path="register"><div className={"w-10 h-8 rounded-full flex items-center justify-center transition-colors mb-0.5"}><span className={"material-symbols-outlined text-[22px] transition-all"}>how_to_reg</span></div><span className={"font-body-sm text-body-sm leading-none font-medium"}>Register</span><span className={"font-urdu-body text-urdu-body text-[11px] leading-tight text-on-surface-variant/80 group-hover:text-on-surface"}>رجسٹر</span></Link><a className={"group flex flex-col items-center justify-center min-w-[64px] min-h-[48px] py-1 text-on-surface-variant hover:text-on-surface transition-all active:scale-95"} data-path="my-registrations" href={"#"}><div className={"w-10 h-8 rounded-full flex items-center justify-center transition-colors mb-0.5"}><span className={"material-symbols-outlined text-[22px] transition-all"}>assignment</span></div><span className={"font-body-sm text-body-sm leading-none font-medium"}>Records</span><span className={"font-urdu-body text-urdu-body text-[11px] leading-tight text-on-surface-variant/80 group-hover:text-on-surface"}>میرے اندراج</span></a><a className={"group flex flex-col items-center justify-center min-w-[64px] min-h-[48px] py-1 text-on-surface-variant hover:text-on-surface transition-all active:scale-95"} data-path="quick-sms" href={"#"}><div className={"w-10 h-8 rounded-full flex items-center justify-center transition-colors mb-0.5"}><span className={"material-symbols-outlined text-[22px] transition-all"}>sms</span></div><span className={"font-body-sm text-body-sm leading-none font-medium"}>Quick SMS</span><span className={"font-urdu-body text-urdu-body text-[11px] leading-tight text-on-surface-variant/80 group-hover:text-on-surface"}>فوری ایس ایم ایس</span></a><a className={"group flex flex-col items-center justify-center min-w-[64px] min-h-[48px] py-1 text-on-surface-variant hover:text-on-surface transition-all active:scale-95"} data-path="shelter-status" href={"#"}><div className={"w-10 h-8 rounded-full flex items-center justify-center transition-colors mb-0.5"}><span className={"material-symbols-outlined text-[22px] transition-all"}>holiday_village</span></div><span className={"font-body-sm text-body-sm leading-none font-medium"}>Shelter</span><span className={"font-urdu-body text-urdu-body text-[11px] leading-tight text-on-surface-variant/80 group-hover:text-on-surface"}>شیلٹر</span></a></div></nav>
    </div>
  )
}
