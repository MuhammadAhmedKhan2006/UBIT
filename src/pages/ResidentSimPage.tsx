import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function ResidentSimPage() {
  const nav = useNavigate()
  const bind = usePageInteractions("ResidentSimPage", nav)
  return (
    <div className={"bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen"} {...bind}>
{/*  Top Banner & Simulation Header  */}
      <div className={"relative w-full mb-space-lg"}>
      <div className={"flex flex-col lg:flex-row lg:items-end lg:justify-between gap-space-md"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-space-xs mb-1"}>
      <span className={"px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm flex items-center gap-1.5"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"}></span>
                  SIM-ENGINE ACTIVE // NODE 04
                </span>
      <span className={"text-outline-variant font-telemetry-sm text-telemetry-sm"}>•</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>GSM &amp; IP Gateway Latency: 18ms</span>
      </div>
      <h1 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
                Resident Multi-Channel Simulation &amp; Channel Routing
              </h1>
      <div className={"flex items-center gap-space-sm mt-0.5"}>
      <span className={"font-urdu-headline text-urdu-headline text-primary-container leading-none"}>
                  شہری کثیر جہتی مواصلاتی سمولیشن اور خودکار راستہ بندی
                </span>
      </div>
      <p className={"font-body-md text-body-md text-on-surface-variant max-w-4xl mt-1"}>
                Test how emergency warnings penetrate vulnerable citizen devices across SMS, WhatsApp/Telegram, and synthetic Urdu IVR voice synthesis. Audit the strict 60-minute silence escalation ladder designed to avoid life loss during blackout conditions.
              </p>
      </div>
      {/*  Quick Session Telemetry Badge  */}
      <div className={"flex items-center gap-space-sm bg-surface-container-high/60 backdrop-blur-md p-space-sm rounded-xl"}>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>ACTIVE TARGET RESIDENT</span>
      <span className={"font-headline-sm text-body-md text-primary font-semibold"}>Rashid Somroo (خاندان: 6 افراد)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Lyari Sector 4-B • +92 300 8492011</span>
      </div>
      <div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary"}>
      <span className={"material-symbols-outlined text-headline-md"}>person_pin_circle</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Main Split Layout (Desktop 1440px / 12-col bento grid)  */}
      <div className={"grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start"}>
      {/*  LEFT COLUMN: Resident Device Simulation (Phone Mockup)  */}
      <div className={"xl:col-span-5 flex flex-col items-center"}>
      {/*  Channel Switcher Tabs  */}
      <div className={"w-full max-w-md bg-surface-container-low p-1 rounded-xl flex items-center justify-between mb-space-md shadow-md"}>
      <button className={"channel-tab flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-on-surface-variant font-telemetry-sm text-telemetry-sm transition-all hover:text-on-surface"} id={"tab-whatsapp"} data-action="switchChannel" data-args={"[\"whatsapp\"]"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>chat</span>
      <span>Rich IP</span>
      </button>
      <button className={"channel-tab flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-primary-container text-on-primary-container font-semibold font-telemetry-sm text-telemetry-sm shadow-md transition-all"} id={"tab-sms"} data-action="switchChannel" data-args={"[\"sms\"]"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>sms</span>
      <span>SMS Fallback</span>
      </button>
      <button className={"channel-tab flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-on-surface-variant font-telemetry-sm text-telemetry-sm transition-all hover:text-on-surface"} id={"tab-ivr"} data-action="switchChannel" data-args={"[\"ivr\"]"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>call</span>
      <span>Urdu IVR</span>
      </button>
      </div>
      {/*  Smartphone Physical Frame  */}
      <div className={"w-full max-w-md relative bg-surface-container-lowest rounded-[2.5rem] p-3 shadow-2xl"}>
      {/*  Ambient Back Glow from Amber Lantern  */}
      <div className={"absolute -inset-1 bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent rounded-[2.8rem] -z-10 blur-xl opacity-70"}></div>
      {/*  Inner Bezel  */}
      <div className={"relative bg-surface-container-low rounded-[2rem] overflow-hidden flex flex-col h-[700px]"}>
      {/*  Top Speaker & Dynamic Island  */}
      <div className={"w-full pt-3 pb-2 px-6 flex items-center justify-between bg-surface-container-low/95 z-20"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>03:42</span>
      <div className={"w-20 h-4 bg-surface-container-lowest rounded-full flex items-center justify-center"}>
      <div className={"w-2.5 h-2.5 rounded-full bg-surface-container-highest mr-2"}></div>
      <div className={"w-8 h-1 bg-surface-container-highest rounded-full"}></div>
      </div>
      <div className={"flex items-center gap-1 text-on-surface-variant"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>signal_cellular_alt</span>
      <span className={"material-symbols-outlined text-telemetry-sm"}>wifi</span>
      <span className={"material-symbols-outlined text-telemetry-sm"}>battery_5_bar</span>
      </div>
      </div>
      {/*  Channel View: SMS Gateway (Default View)  */}
      <div className={"flex-1 flex flex-col justify-between p-4 overflow-y-auto"} id={"view-sms"}>
      {/*  SMS Header  */}
      <div className={"flex flex-col items-center pb-3 mb-2 bg-surface-container/40 p-2.5 rounded-xl"}>
      <div className={"w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-1"}>
      <span className={"material-symbols-outlined text-headline-sm"}>crisis_alert</span>
      </div>
      <span className={"font-telemetry-md text-telemetry-sm font-bold text-on-surface tracking-wide"}>1129-PDMA // سندھ ریلیف</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Verified Emergency Broadcast • USSD Gateway</span>
      </div>
      {/*  SMS Message Stream  */}
      <div className={"flex flex-col gap-3 flex-1 overflow-y-auto pr-1"}>
      <div className={"text-center my-1"}>
      <span className={"font-telemetry-sm text-telemetry-sm px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant"}>Today 03:38 AM</span>
      </div>
      {/*  Inbound Alert Message Bubble  */}
      <div className={"flex flex-col bg-surface-container-high/90 text-on-surface p-3.5 rounded-2xl rounded-tl-sm shadow-md max-w-[95%]"}>
      <div className={"flex items-center gap-1.5 text-error font-telemetry-sm text-telemetry-sm font-semibold mb-1"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>warning</span>
      <span>LIFESAVING EVACUATION ORDER</span>
      </div>
      {/*  Urdu Body  */}
      <p className={"font-urdu-body text-urdu-body text-on-surface text-right leading-relaxed mb-2"} dir={"rtl"}>
                        محترم شہری، لیاری ندی میں اونچے درجے کا سیلاب آ رہا ہے۔ پانی ۳ گھنٹے میں آپ کے علاقے میں داخل ہو سکتا ہے۔ برائے مہربانی فوری جواب دیں:
                      </p>
      {/*  Roman Urdu & Quick Codes  */}
      <div className={"bg-surface-container-lowest/80 p-2.5 rounded-lg mb-2 flex flex-col gap-1 font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span className={"text-primary font-semibold"}>Roman Urdu instructions:</span>
      <span>'Mohtaram shehri, Lyari Nadi mein unche darjay ka sailaab aa raha hai. Barah-e-karam foran jawab dein:'</span>
      <div className={"mt-1 flex flex-col gap-0.5 pl-1 text-on-surface"}>
      <span className={"text-secondary font-semibold"}>Reply 1 : Agar aap mehfooz hain (Safe)</span>
      <span className={"text-primary font-semibold"}>Reply 2 : Agar madad darkar hai (Need Help)</span>
      <span className={"text-error font-semibold"}>Reply 3 : Agar foran rescue kashti chahiye (Evacuate)</span>
      </div>
      </div>
      {/*  English  */}
      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-snug"}>
                        English: High flash flood surge imminent in Lyari Basin. Reply 1 (Safe), 2 (Need Help), or 3 (Immediate Evacuation Boat).
                      </p>
      <div className={"flex items-center justify-end gap-1 mt-2 text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <span>Delivered</span>
      <span className={"material-symbols-outlined text-telemetry-sm text-secondary"}>done_all</span>
      </div>
      </div>
      {/*  Simulated Outbound Bubble (Dynamic upon action)  */}
      <div className={"hidden flex-col items-end self-end max-w-[85%]"} id={"simulated-reply-bubble"}>
      <div className={"bg-primary text-on-primary font-headline-sm text-body-md py-2 px-3.5 rounded-2xl rounded-tr-sm shadow-md"} id={"reply-bubble-content"}>
                        2 (Madad Darkar Hai)
                      </div>
      <div className={"flex items-center gap-1 mt-1 text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
      <span id={"reply-time"}>03:42 AM</span>
      <span className={"material-symbols-outlined text-telemetry-sm text-primary"}>done</span>
      </div>
      </div>
      </div>
      {/*  In-Phone Quick Actions & Input Dock  */}
      <div className={"pt-2"}>
      <div className={"text-center font-telemetry-sm text-telemetry-sm text-on-surface-variant/80 mb-2"}>
                      Simulated Keypad One-Tap Triggers:
                    </div>
      <div className={"grid grid-cols-3 gap-2"}>
      <button className={"flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-transform active:scale-95 shadow-sm text-on-surface"} data-action="handleResidentReply" data-args={"[1,\"1 (Mehfooz / Safe)\"]"}>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-secondary"}>1</span>
      <span className={"font-headline-sm text-body-sm font-semibold"}>Safe</span>
      <span className={"font-urdu-body text-telemetry-sm text-secondary"}>محفوظ</span>
      </button>
      <button className={"flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-transform active:scale-95 shadow-sm text-on-surface"} data-action="handleResidentReply" data-args={"[2,\"2 (Madad Darkar / Help)\"]"}>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-primary"}>2</span>
      <span className={"font-headline-sm text-body-sm font-semibold"}>Help</span>
      <span className={"font-urdu-body text-telemetry-sm text-primary"}>مدد چاہیے</span>
      </button>
      <button className={"flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-transform active:scale-95 shadow-sm text-on-surface"} data-action="handleResidentReply" data-args={"[3,\"3 (Rescue Kashti / Evac)\"]"}>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-error"}>3</span>
      <span className={"font-headline-sm text-body-sm font-semibold"}>Evac</span>
      <span className={"font-urdu-body text-telemetry-sm text-error"}>فوری انخلاء</span>
      </button>
      </div>
      {/*  Fake Phone Text Bar  */}
      <div className={"mt-3 flex items-center gap-2 bg-surface-container-lowest p-2 rounded-xl"}>
      <span className={"material-symbols-outlined text-on-surface-variant"}>sentiment_satisfied</span>
      <input className={"w-full bg-transparent text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none"} id={"phone-sms-input"} placeholder={"Type 1, 2, or 3..."} type={"text"} />
      <button className={"w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center"} data-action="handleCustomSend" data-args={"[]"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>arrow_upward</span>
      </button>
      </div>
      </div>
      </div>
      {/*  Channel View: WhatsApp / Rich IP (Toggled)  */}
      <div className={"hidden flex-1 flex-col justify-between p-4 overflow-y-auto"} id={"view-whatsapp"}>
      <div className={"flex items-center gap-2 pb-3 mb-2 bg-secondary-container/10 p-2.5 rounded-xl"}>
      <div className={"w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold"}>
                      WA
                    </div>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-md font-semibold text-on-surface"}>Sindh Disaster Management Bot</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Verified Green Badge • Rich Media Push</span>
      </div>
      </div>
      <div className={"bg-surface-container-high/90 p-3.5 rounded-2xl rounded-tl-sm shadow-md"}>
      <div className={"w-full h-32 rounded-lg bg-surface-container-lowest mb-2 overflow-hidden relative"}>
      {/*  Static Flood Risk Map Snippet  */}
      <div className={"w-full h-full bg-cover bg-center flex items-end p-2"} data-alt={"Dark satellite flood radar map of Lyari river basin Karachi at night with surging cyan water flood contours overlay and amber emergency evacuation shelter zones marked clearly"} data-location={"Lyari Karachi Flooding Zone"} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzX3eWZihymrmw1UiYOupHT9dsH2Z_MsMjLFiQrOqLc__RyzRNm4U8ODMLcUAlwGKTSAAsvjHRfPy0gXZ4uMuyqpDcL1e2BcQRM3Z5-IIE17D8S6mYCAH6OlQZ05pL1V5ydaLpDOY5S0_cwaJfMQhIXT__ESz8pdOo2PxU3G9a0y5BacjUxeZJKpamAucutku9jfOfV6UBffeMUNzJF--5Cxz4nxHFehpLfbOr5JjK5hbhuQUS6sZ5kQ')" }}>
      <span className={"font-telemetry-sm text-telemetry-sm px-2 py-0.5 rounded bg-error text-on-error font-semibold"}>SURGE CONTOUR: +1.8M</span>
      </div>
      </div>
      <h4 className={"font-headline-sm text-body-md font-bold text-primary mb-1"}>Lyari River Flash Flood Evacuation Notice</h4>
      <p className={"font-urdu-body text-urdu-body text-right mb-2 leading-relaxed"} dir={"rtl"}>
                      آپ کے رقبے میں اونچی لہر کا خدشہ ہے۔ براہ کرم نیچے دیے گئے بٹنوں سے اپنی خیریت کی تصدیق کریں۔
                    </p>
      <div className={"flex flex-col gap-1.5 mt-3"}>
      <button className={"w-full py-2 px-3 rounded-lg bg-surface-container text-secondary font-headline-sm text-body-sm font-semibold flex items-center justify-center gap-2 hover:bg-surface-container-highest"} data-action="handleResidentReply" data-args={"[1,\"Green Status Confirmed\"]"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>check_circle</span>
      <span>I Am Safe / میں محفوظ ہوں</span>
      </button>
      <button className={"w-full py-2 px-3 rounded-lg bg-surface-container text-primary font-headline-sm text-body-sm font-semibold flex items-center justify-center gap-2 hover:bg-surface-container-highest"} data-action="handleResidentReply" data-args={"[2,\"Trapped Elderly &amp; Kids\"]"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>help_center</span>
      <span>Need Assistance / مدد چاہیے</span>
      </button>
      <button className={"w-full py-2 px-3 rounded-lg bg-error-container text-on-error-container font-headline-sm text-body-sm font-semibold flex items-center justify-center gap-2 hover:bg-error-container/80"} data-action="handleResidentReply" data-args={"[3,\"Rooftop Trapped Evacuate\"]"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>emergency_home</span>
      <span>Emergency Evacuate / فوری بچاؤ</span>
      </button>
      </div>
      </div>
      <div className={"p-2 text-center text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>Rich data channel enabled for 4G/WiFi devices.</div>
      </div>
      {/*  Channel View: Synthetic Urdu IVR Voice (Toggled)  */}
      <div className={"hidden flex-1 flex-col justify-between p-4 overflow-y-auto"} id={"view-ivr"}>
      <div className={"flex flex-col items-center text-center my-auto"}>
      <div className={"relative w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4"}>
      <span className={"material-symbols-outlined text-display-lg text-primary animate-pulse"}>ring_volume</span>
      <div className={"absolute inset-0 rounded-full border-2 border-primary/40 animate-ping"}></div>
      </div>
      <span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>PDMA Automated Dispatch IVR</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary mt-1"}>Calling: +92 300 8492011 (Voice synthesized)</span>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary font-bold mt-2"} id={"call-timer"}>00:18</span>
      {/*  Real-time Urdu Speech-to-Text & Synthesizer Waveform  */}
      <div className={"w-full bg-surface-container p-3 rounded-xl mt-6"}>
      <div className={"flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant mb-2"}>
      <span>Urdu Neural TTS Stream</span>
      <span className={"text-secondary"}>Pak-Urdu-Neural-Wavenet</span>
      </div>
      {/*  Synthetic Waveform visualization  */}
      <div className={"flex items-center justify-center gap-1 h-12 w-full px-2 py-1 bg-surface-container-lowest rounded-lg mb-3"}>
      <span className={"w-1 bg-primary h-4 rounded-full animate-pulse"}></span>
      <span className={"w-1 bg-primary h-8 rounded-full animate-pulse delay-75"}></span>
      <span className={"w-1 bg-primary h-12 rounded-full animate-pulse delay-150"}></span>
      <span className={"w-1 bg-primary h-6 rounded-full animate-pulse delay-100"}></span>
      <span className={"w-1 bg-primary h-10 rounded-full animate-pulse delay-200"}></span>
      <span className={"w-1 bg-secondary h-7 rounded-full animate-pulse"}></span>
      <span className={"w-1 bg-secondary h-11 rounded-full animate-pulse delay-100"}></span>
      <span className={"w-1 bg-primary h-5 rounded-full animate-pulse"}></span>
      <span className={"w-1 bg-primary h-9 rounded-full animate-pulse delay-75"}></span>
      <span className={"w-1 bg-primary h-3 rounded-full animate-pulse delay-200"}></span>
      </div>
      <div className={"bg-surface-container-high/60 p-2.5 rounded-lg text-right"} dir={"rtl"}>
      <span className={"font-urdu-body text-urdu-body text-primary-container font-semibold"}>
                          "یہ حکومتِ سندھ کا خودکار ایمرجنسی کال ہے۔ اگر آپ خیریت سے ہیں تو فون پر 1 دبائیں، اگر کشتی درکار ہے تو 2 دبائیں۔"
                        </span>
      </div>
      </div>
      </div>
      {/*  In-Call keypad controls  */}
      <div className={"grid grid-cols-3 gap-2 pt-2"}>
      <button className={"py-2.5 rounded-xl bg-surface-container text-on-surface font-headline-sm font-bold flex flex-col items-center"} data-action="handleResidentReply" data-args={"[1,\"DTMF: 1 Pressed (Safe)\"]"}>
      <span className={"text-secondary text-headline-sm"}>1</span>
      <span className={"font-urdu-body text-telemetry-sm"}>محفوظ</span>
      </button>
      <button className={"py-2.5 rounded-xl bg-surface-container text-on-surface font-headline-sm font-bold flex flex-col items-center"} data-action="handleResidentReply" data-args={"[2,\"DTMF: 2 Pressed (Help)\"]"}>
      <span className={"text-primary text-headline-sm"}>2</span>
      <span className={"font-urdu-body text-telemetry-sm"}>مدد</span>
      </button>
      <button className={"py-2.5 rounded-xl bg-surface-container text-on-surface font-headline-sm font-bold flex flex-col items-center"} data-action="handleResidentReply" data-args={"[3,\"DTMF: 3 Pressed (Evac)\"]"}>
      <span className={"text-error text-headline-sm"}>3</span>
      <span className={"font-urdu-body text-telemetry-sm"}>کشتی</span>
      </button>
      </div>
      </div>
      {/*  Bottom Home Indicator Bar  */}
      <div className={"w-full py-2 flex justify-center bg-surface-container-low"}>
      <div className={"w-32 h-1 bg-surface-container-highest rounded-full"}></div>
      </div>
      </div>
      </div>
      </div>
      {/*  RIGHT COLUMN: Channel Decision Engine & Silence Escalation Ladder  */}
      <div className={"xl:col-span-7 flex flex-col gap-space-lg"}>
      {/*  1. Channel Routing Decision Engine  */}
      <div className={"bg-surface-container-low/90 backdrop-blur-xl p-space-lg rounded-2xl shadow-xl flex flex-col"}>
      <div className={"flex items-center justify-between pb-space-sm mb-space-md"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-primary text-headline-md"}>alt_route</span>
      <div>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Channel Routing Decision Engine</h2>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>ڈیوائس کی صلاحیت کے مطابق رابطہ راستے کا خودکار انتخاب</span>
      </div>
      </div>
      <span className={"px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm font-semibold"}>
                  DYNAMIC HEURISTICS
                </span>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md"}>
      {/*  Heuristic Rule 1  */}
      <div className={"bg-surface-container p-space-md rounded-xl flex flex-col justify-between"}>
      <div className={"flex items-start justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold"}>IP</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>Smartphone (4G/WiFi)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>High Bandwidth</span>
      </div>
      </div>
      <span className={"material-symbols-outlined text-secondary"}>arrow_forward</span>
      </div>
      <div className={"mt-3 bg-surface-container-lowest/80 p-2.5 rounded-lg"}>
      <span className={"font-headline-sm text-body-sm text-secondary font-medium"}>Telegram / WhatsApp Rich Media</span>
      <p className={"font-body-sm text-telemetry-sm text-on-surface-variant mt-0.5"}>High visual clarity, dynamic map overlay, interactive 1-tap buttons.</p>
      </div>
      </div>
      {/*  Heuristic Rule 2: Active Target Match  */}
      <div className={"bg-surface-container-high p-space-md rounded-xl flex flex-col justify-between shadow-lg"}>
      <div className={"flex items-start justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold"}>2G</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-primary"}>Feature Phone (GSM)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-semibold"}>TARGET MATCH (Rashid)</span>
      </div>
      </div>
      <span className={"material-symbols-outlined text-primary"}>check_circle</span>
      </div>
      <div className={"mt-3 bg-surface-container-lowest/80 p-2.5 rounded-lg"}>
      <span className={"font-headline-sm text-body-sm text-primary font-medium"}>SMS Gateway + USSD Fastback</span>
      <p className={"font-body-sm text-telemetry-sm text-on-surface-variant mt-0.5"}>Operates through network congestion, 3-language compact text block.</p>
      </div>
      </div>
      {/*  Heuristic Rule 3  */}
      <div className={"bg-surface-container p-space-md rounded-xl flex flex-col justify-between"}>
      <div className={"flex items-start justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center font-bold"}>PSTN</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>Landline / Illiterate Citizen</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Voice Only</span>
      </div>
      </div>
      <span className={"material-symbols-outlined text-tertiary"}>arrow_forward</span>
      </div>
      <div className={"mt-3 bg-surface-container-lowest/80 p-2.5 rounded-lg"}>
      <span className={"font-headline-sm text-body-sm text-tertiary font-medium"}>Synthetic Urdu IVR Voice Call</span>
      <p className={"font-body-sm text-telemetry-sm text-on-surface-variant mt-0.5"}>High-volume outbound call blast, spoken Urdu with DTMF keypad tone detection.</p>
      </div>
      </div>
      {/*  Heuristic Rule 4  */}
      <div className={"bg-surface-container p-space-md rounded-xl flex flex-col justify-between"}>
      <div className={"flex items-start justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"w-8 h-8 rounded-lg bg-error-container text-on-error flex items-center justify-center font-bold"}>0G</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-sm font-semibold text-on-surface"}>No Phone / Powered Off</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error"}>Extreme Risk</span>
      </div>
      </div>
      <span className={"material-symbols-outlined text-error"}>arrow_forward</span>
      </div>
      <div className={"mt-3 bg-surface-container-lowest/80 p-2.5 rounded-lg"}>
      <span className={"font-headline-sm text-body-sm text-error font-medium"}>Community Buddy Doorstep Knock</span>
      <p className={"font-body-sm text-telemetry-sm text-on-surface-variant mt-0.5"}>Automated offline task push to nearest volunteer equipped with waterproof VHF mesh.</p>
      </div>
      </div>
      </div>
      </div>
      {/*  2. Silence Escalation Ladder (Interactive 4-Step Visual Timeline)  */}
      <div className={"bg-surface-container-low/90 backdrop-blur-xl p-space-lg rounded-2xl shadow-xl flex flex-col"}>
      <div className={"flex items-center justify-between pb-space-sm mb-space-md"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-primary text-headline-md"}>hourglass_bottom</span>
      <div>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Silence Escalation Ladder (60-Min Inversion)</h2>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>خاموشی کی صورت میں خودکار سیڑھی کا نفاذ</span>
      </div>
      </div>
      <div className={"flex items-center gap-2 font-telemetry-sm text-telemetry-sm"}>
      <span className={"text-on-surface-variant"}>LADDER STATUS:</span>
      <span className={"px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-bold"} id={"ladder-badge"}>STAGE 2 ACTIVE</span>
      </div>
      </div>
      {/*  4 Stages Timeline  */}
      <div className={"relative flex flex-col gap-space-md pl-4"}>
      {/*  Timeline Vertical Track  */}
      <div className={"absolute left-7 top-4 bottom-4 w-0.5 bg-surface-container-highest"}></div>
      {/*  Step 1: Completed  */}
      <div className={"relative flex items-start gap-space-md group"} id={"ladder-step-1"}>
      <div className={"w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-telemetry-sm text-telemetry-sm font-bold z-10 shadow-md"}>
      <span className={"material-symbols-outlined text-telemetry-md"}>check</span>
      </div>
      <div className={"flex-1 bg-surface-container/60 p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-bold"}>T+00m</span>
      <span className={"font-headline-sm text-body-md font-semibold text-on-surface"}>Automated SMS Broadcast</span>
      <span className={"px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-telemetry-sm text-telemetry-sm"}>DELIVERED</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>Multi-lingual SMS pushed to Lyari Cell Tower Cluster. Citizen delivered confirmation received.</p>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant whitespace-nowrap"}>Wait Window Expired</span>
      </div>
      </div>
      {/*  Step 2: Currently Active  */}
      <div className={"relative flex items-start gap-space-md group"} id={"ladder-step-2"}>
      <div className={"w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-telemetry-sm text-telemetry-sm font-bold z-10 shadow-lg ring-4 ring-primary/20 animate-pulse"}>
                    2
                  </div>
      <div className={"flex-1 bg-surface-container-high p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-sm shadow-md"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>T+20m</span>
      <span className={"font-headline-sm text-body-md font-semibold text-primary"}>Reminder SMS + IVR Voice Synthesis Blast</span>
      <span className={"px-2 py-0.5 rounded-full bg-primary/20 text-primary font-telemetry-sm text-telemetry-sm font-bold"}>ACTIVE RINGING</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface mt-1"}>No reply received after 20 mins. Automated high-priority dialer ringing terminal with simulated Urdu voice.</p>
      </div>
      <div className={"flex flex-col items-end"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Time to Stage 3</span>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary font-bold"} id={"stage-countdown"}>04:10</span>
      </div>
      </div>
      </div>
      {/*  Step 3: Pending  */}
      <div className={"relative flex items-start gap-space-md group"} id={"ladder-step-3"}>
      <div className={"w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-telemetry-sm text-telemetry-sm font-bold z-10"}>
                    3
                  </div>
      <div className={"flex-1 bg-surface-container/40 p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant font-bold"}>T+40m</span>
      <span className={"font-headline-sm text-body-md font-semibold text-on-surface-variant"}>Community Buddy Dispatch (Physical Knock)</span>
      <span className={"px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>QUEUED</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>Designates local volunteer (Tariq Baloch, 180m away) to execute rapid door-to-door physical status verification.</p>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-outline"}>Standby Trigger</span>
      </div>
      </div>
      {/*  Step 4: Contingency Priority Inversion  */}
      <div className={"relative flex items-start gap-space-md group"} id={"ladder-step-4"}>
      <div className={"w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-telemetry-sm text-telemetry-sm font-bold z-10"}>
                    4
                  </div>
      <div className={"flex-1 bg-surface-container/40 p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant font-bold"}>T+60m</span>
      <span className={"font-headline-sm text-body-md font-semibold text-on-surface-variant"}>Priority Inversion ➔ Tier 1 Critical Evac</span>
      <span className={"px-2 py-0.5 rounded-full bg-error-container/20 text-error font-telemetry-sm text-telemetry-sm"}>CONTINGENCY OVERRIDE</span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>Nobody Left Behind Core Rule: Silence is assumed trapped/unconscious. Evacuation Boat 04 auto-routed to coordinate.</p>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-outline"}>Auto-Dispatch</span>
      </div>
      </div>
      </div>
      </div>
      {/*  3. Interactive Simulation Controls Panel  */}
      <div className={"bg-surface-container-low/95 backdrop-blur-2xl p-space-lg rounded-2xl shadow-2xl flex flex-col"}>
      <div className={"flex items-center justify-between pb-space-sm mb-space-md"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-primary text-headline-md"}>tune</span>
      <div>
      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>Simulation Sandbox Controller</h2>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>ٹرگر سمولیشن اور ٹیسٹ ایکشنز</span>
      </div>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>REAL-TIME SANDBOX</span>
      </div>
      {/*  3D Tactile Action Buttons  */}
      <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md"}>
      {/*  Button 1: Send Alert  */}
      <button className={"p-3.5 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-body-md font-bold flex flex-col items-center justify-center text-center transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_0_rgba(0,0,0,0.2)] hover:bg-primary-fixed-dim hover:shadow-[0_0_16px_rgba(242,169,59,0.45)] active:translate-y-0.5"} data-action="triggerBroadcastAlert" data-args={"[]"}>
      <span className={"material-symbols-outlined text-headline-md mb-1"}>cell_tower</span>
      <span>📤 Send Alert</span>
      <span className={"font-urdu-body text-telemetry-sm"}>الرٹ بھیجیں</span>
      </button>
      {/*  Button 2: Simulate Reply '2'  */}
      <button className={"p-3.5 rounded-xl bg-secondary-container text-on-secondary-container font-headline-sm text-body-md font-bold flex flex-col items-center justify-center text-center transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.2)] hover:bg-secondary hover:text-on-secondary hover:shadow-[0_0_16px_rgba(101,217,197,0.35)] active:translate-y-0.5"} data-action="handleResidentReply" data-args={"[2,\"2: Madad Darkar Hai (Need Help)\"]"}>
      <span className={"material-symbols-outlined text-headline-md mb-1"}>bolt</span>
      <span>⚡ Reply '2' (Help)</span>
      <span className={"font-urdu-body text-telemetry-sm"}>مدد سمولیٹ کریں</span>
      </button>
      {/*  Button 3: Force Silence / Timeout  */}
      <button className={"p-3.5 rounded-xl bg-error-container/30 text-error font-headline-sm text-body-md font-bold flex flex-col items-center justify-center text-center transition-all hover:bg-error-container hover:text-on-error shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-2px_0_rgba(0,0,0,0.3)] active:translate-y-0.5"} data-action="triggerSilenceTimeout" data-args={"[]"}>
      <span className={"material-symbols-outlined text-headline-md mb-1"}>timer_off</span>
      <span>⏳ Fast-Forward Silence</span>
      <span className={"font-urdu-body text-telemetry-sm"}>خاموشی ٹائم آؤٹ</span>
      </button>
      {/*  Button 4: Reset Simulation  */}
      <button className={"p-3.5 rounded-xl bg-surface-container text-on-surface font-headline-sm text-body-md font-semibold flex flex-col items-center justify-center text-center transition-all hover:bg-surface-container-high active:translate-y-0.5"} data-action="resetSimulation" data-args={"[]"}>
      <span className={"material-symbols-outlined text-headline-md mb-1"}>restart_alt</span>
      <span>🔄 Reset Test</span>
      <span className={"font-urdu-body text-telemetry-sm"}>دوبارہ شروع کریں</span>
      </button>
      </div>
      {/*  Dynamic Live Feedback Console  */}
      <div className={"mt-space-md p-space-md rounded-xl bg-surface-container-lowest font-telemetry-sm text-telemetry-sm flex items-start gap-space-sm text-on-surface-variant"} id={"sim-feedback-console"}>
      <span className={"material-symbols-outlined text-primary text-telemetry-md mt-0.5"}>terminal</span>
      <div className={"flex-1 flex flex-col gap-0.5"}>
      <span className={"text-primary font-semibold"}>Active Session Log:</span>
      <span className={"text-on-surface"} id={"log-text"}>Target resident phone +92 300 8492011 pinged over USSD/SMS. Waiting for citizen keypress [1, 2, or 3] or voice pickup.</span>
      </div>
      <span className={"text-secondary font-telemetry-sm"}>OK 200</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Interactive JavaScript Behavior  */}

      </div>
  )
}
