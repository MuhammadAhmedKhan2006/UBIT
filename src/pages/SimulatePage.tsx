import { Link, useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function SimulatePage() {
  const nav = useNavigate()
  const bind = usePageInteractions("SimulatePage", nav)
  return (
    <div className={"bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen"} {...bind}>
{/*  Top Context & Scenario Action Ribbon  */}
      <div className={"relative w-full mb-space-lg rounded-xl bg-surface-container-low/80 backdrop-blur-xl p-space-lg shadow-xl overflow-hidden"}>
      {/*  Atmospheric Ambient Glows  */}
      <div className={"absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"}></div>
      <div className={"absolute left-1/3 -bottom-24 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none"}></div>
      <div className={"relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg"}>
      {/*  Title & Mission Meta  */}
      <div className={"flex flex-col gap-space-xs max-w-3xl"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"px-space-sm py-0.5 rounded-full bg-primary/15 text-primary font-telemetry-sm text-telemetry-sm flex items-center gap-1.5 uppercase"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-primary animate-ping"}></span>
                  Stress Testing Lab // نقلی مشق لیب
                </span>
      <span className={"text-outline-variant font-telemetry-sm text-telemetry-sm"}>|</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm text-secondary"}>tune</span>
                  Deterministic Dynamic Forecast v3.4.1
                </span>
      </div>
      <div className={"flex flex-col"}>
      <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight flex items-baseline gap-space-sm flex-wrap"}>
      <span>Disaster Scenario Engine &amp; Stress Simulation</span>
      <span className={"font-urdu-headline text-urdu-headline text-primary-fixed-dim leading-none font-bold"}>آفات کا نقلی ماڈل اور سمیلیشن</span>
      </h1>
      <p className={"font-body-md text-body-md text-on-surface-variant mt-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-space-sm"}>
      <span>Simulate compound shocks, cascade grid failures, and forecast triage bottlenecks before water crests.</span>
      <span className={"text-outline hidden sm:inline"}>•</span>
      <span className={"font-urdu-body text-telemetry-md text-primary/80"}>امکانی بحرانوں اور بندشوں کا جامع پیشگی تجزیہ</span>
      </p>
      </div>
      </div>
      {/*  Action Panel & Preset Switcher  */}
      <div className={"flex flex-wrap items-center gap-space-sm"}>
      {/*  Preset Dropdown  */}
      <div className={"relative min-w-[240px]"}>
      <select className={"w-full bg-surface-container-high text-on-surface font-body-sm text-body-sm rounded-lg px-space-md py-2.5 appearance-none cursor-pointer focus:outline-none focus:bg-surface-container-highest shadow-sm"} id={"scenarioPresetSelect"}>
      <option value={"custom"}>⚡ Custom Stress Scenario / حسب ضرورت ماڈل</option>
      <option selected={true} value={"cloudburst"}>🌊 Extreme Cloudburst (200mm/h) / شدید بارش</option>
      <option value={"tidal"}>🌀 Keamari Tidal Surge + High Tide / سمندری طوفان</option>
      <option value={"blackout"}>⚡ Cascading Full Power Grid Outage / مکمل بلیک آؤٹ</option>
      <option value={"compound"}>🔥 Extreme Compound Heat-Flood / مشترکہ ہیٹ ویو سیلاب</option>
      </select>
      <span className={"material-symbols-outlined pointer-events-none absolute right-3 top-2.5 text-on-surface-variant"}>expand_more</span>
      </div>
      {/*  Glass Baseline Button  */}
      <button className={"px-space-md py-2.5 rounded-lg bg-surface-container-high/70 hover:bg-surface-container-highest text-on-surface text-body-sm font-headline-sm transition-all flex items-center gap-2 active:scale-95 shadow-sm"} id={"resetBaselineBtn"}>
      <span className={"material-symbols-outlined text-telemetry-md text-secondary"}>restart_alt</span>
      <span className={"flex items-center gap-1.5"}>
      <span>Reset Baseline</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>اصل حالت</span>
      </span>
      </button>
      {/*  Glass Compare Button  */}
      <button className={"px-space-md py-2.5 rounded-lg bg-surface-container-high/70 hover:bg-surface-container-highest text-on-surface text-body-sm font-headline-sm transition-all flex items-center gap-2 active:scale-95 shadow-sm"} id={"compareBtn"}>
      <span className={"material-symbols-outlined text-telemetry-md text-primary"}>difference</span>
      <span className={"flex items-center gap-1.5"}>
      <span>Compare Runs</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>موازنہ</span>
      </span>
      </button>
      {/*  3D Embossed Lantern CTA Button  */}
      <button className={"group relative px-space-lg py-2.5 rounded-lg bg-primary text-on-primary font-headline-sm text-body-md font-bold tracking-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_0_rgba(0,0,0,0.3),0_0_24px_rgba(242,169,59,0.45)] hover:bg-primary-fixed hover:shadow-[0_0_32px_rgba(242,169,59,0.7)] active:translate-y-0.5 transition-all flex items-center gap-space-sm cursor-pointer"} id={"runSimulationBtn"}>
      <span className={"material-symbols-outlined text-headline-sm group-hover:rotate-12 transition-transform duration-300"}>emergency</span>
      <div className={"flex items-baseline gap-1.5"}>
      <span>Run Stress Scenario</span>
      <span className={"font-urdu-headline text-telemetry-md text-on-primary font-bold"}>سمیلیشن چلائیں</span>
      </div>
      <span className={"w-2 h-2 rounded-full bg-on-primary animate-ping"}></span>
      </button>
      </div>
      </div>
      {/*  Active Run Status Bar  */}
      <div className={"mt-space-md pt-space-sm flex flex-wrap items-center justify-between gap-space-sm font-telemetry-sm text-telemetry-sm text-on-surface-variant bg-surface-container-lowest/60 rounded-lg px-space-md py-2"}>
      <div className={"flex items-center gap-space-md flex-wrap"}>
      <div className={"flex items-center gap-1.5 text-secondary"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>memory</span>
      <span>Monte Carlo Engine: 5,000 Iterations</span>
      </div>
      <span className={"text-outline-variant"}>•</span>
      <div className={"flex items-center gap-1.5 text-primary"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>water</span>
      <span>Hydrologic Mesh Infiltration: Active (Karachi South &amp; West)</span>
      </div>
      </div>
      <div className={"flex items-center gap-2"}>
      <span className={"w-2 h-2 rounded-full bg-secondary"}></span>
      <span>Synthetic Simulation Buffer Synced // ڈیٹا سنکرونائزڈ</span>
      </div>
      </div>
      </div>
      {/*  Main Grid Layout (Split Cockpit)  */}
      <div className={"grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start"}>
      {/*  LEFT COLUMN: Interactive 3D Scenario Control Panel (5 Cols)  */}
      <div className={"xl:col-span-5 flex flex-col gap-space-md"}>
      {/*  Panel Header & Master Status  */}
      <div className={"bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-space-md shadow-lg"}>
      <div className={"flex items-center justify-between mb-space-sm"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-headline-sm text-primary"}>tune</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface"}>Scenario Parameters</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant leading-none"}>نقلی ماڈل کے پیرامیٹرز اور کنٹرول پینل</span>
      </div>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container font-bold tracking-wider uppercase"}>
                  STRESS LAB
                </span>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                Adjust environmental vectors, communication drops, and infrastructure bottlenecks to test response resiliency.
              </p>
      </div>
      {/*  Controls Container  */}
      <div className={"bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-space-lg shadow-lg flex flex-col gap-space-lg"}>
      {/*  Parameter 1: Rainfall Intensity Slider  */}
      <div className={"flex flex-col gap-space-xs bg-surface-container/60 p-space-md rounded-lg"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-secondary text-headline-sm"}>rainy</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-md text-on-surface"}>Rainfall Intensity</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>بارش کی شدت</span>
      </div>
      </div>
      <div className={"text-right"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary font-bold"} id={"rainValDisplay"}>140</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>mm/hr</span>
      <div className={"font-telemetry-sm text-telemetry-sm text-outline"}>[Current: 65 mm/hr]</div>
      </div>
      </div>
      {/*  Custom Tactical Slider  */}
      <div className={"relative py-2"}>
      <input className={"w-full h-2.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"} id={"rainSlider"} max={"240"} min={"30"} type={"range"} defaultValue={"140"} />
      </div>
      {/*  Dynamic Visual Precipitation Meter  */}
      <div className={"flex items-center justify-between text-telemetry-sm font-telemetry-sm text-on-surface-variant px-1"}>
      <span>Moderate (30)</span>
      <span className={"text-primary font-bold flex items-center gap-1"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-primary animate-pulse"}></span>
                    Severe Cloudburst
                  </span>
      <span className={"text-error font-bold"}>Extreme Catastrophic (240)</span>
      </div>
      {/*  Live Water Crest Meter Bar  */}
      <div className={"mt-space-xs flex flex-col gap-1"}>
      <div className={"flex justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>
      <span>Expected Hydro Runoff Volume</span>
      <span className={"text-secondary font-semibold"} id={"runoffEstimate"}>1,820,000 m³/hr</span>
      </div>
      <div className={"w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden"}>
      <div className={"h-full bg-gradient-to-r from-secondary via-primary to-error rounded-full transition-all duration-300"} id={"runoffBar"} style={{ width: "72%" }}></div>
      </div>
      </div>
      </div>
      {/*  Master Switch: Compound Heat Shock  */}
      <div className={"p-space-md rounded-lg bg-surface-container/70 shadow-inner flex flex-col gap-space-xs"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-space-sm"}>
      <div className={"w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_16px_rgba(242,169,59,0.3)]"}>
      <span className={"material-symbols-outlined text-headline-sm"}>thermostat</span>
      </div>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-headline-sm text-body-md text-on-surface"}>Heatwave Compound Shock</span>
      <span className={"px-2 py-0.5 rounded-full bg-primary/20 text-primary font-telemetry-sm text-telemetry-sm font-bold"}>WET-BULB 36°C</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-primary"}>شدید ہیٹ ویو کا مشترکہ بحران (مریضوں کی تشویشناک حالت)</span>
      </div>
      </div>
      {/*  Tactile 3D Switch  */}
      <label className={"relative inline-flex items-center cursor-pointer"}>
      <input checked={true} className={"sr-only peer"} id={"heatShockToggle"} type={"checkbox"} />
      <div className={"w-14 h-8 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-primary after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary/30 peer-checked:shadow-[0_0_16px_rgba(242,169,59,0.4)]"}></div>
      </label>
      </div>
      <p className={"font-body-sm text-body-sm text-on-surface-variant/90 pl-12"}>
                  Accelerates dehydration &amp; heat exhaustion among stranded families on rooftops without potable water or shade.
                </p>
      </div>
      {/*  Toggle Switch 1: Cellular & Mesh Network Failure  */}
      <div className={"flex items-center justify-between bg-surface-container/50 p-space-md rounded-lg"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"material-symbols-outlined text-error text-headline-sm"}>portable_wifi_off</span>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-headline-sm text-body-md text-on-surface"}>Cellular &amp; Mesh Network Blackout</span>
      <span className={"px-1.5 py-0.5 rounded bg-error/20 text-error font-telemetry-sm text-telemetry-sm font-bold"}>68% SILENCE</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>موبائل نیٹ ورک اور ٹاورز کی بندش (لیاری و ملیر)</span>
      </div>
      </div>
      <label className={"relative inline-flex items-center cursor-pointer"}>
      <input checked={true} className={"sr-only peer"} id={"telecomFailureToggle"} type={"checkbox"} />
      <div className={"w-12 h-7 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-error after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-error/30 peer-checked:shadow-[0_0_12px_rgba(229,83,61,0.5)]"}></div>
      </label>
      </div>
      {/*  Toggle Switch 2: Unreliable / Conflicting Citizen Reports  */}
      <div className={"flex items-center justify-between bg-surface-container/50 p-space-md rounded-lg"}>
      <div className={"flex items-center gap-space-sm"}>
      <span className={"material-symbols-outlined text-primary text-headline-sm"}>emergency_share</span>
      <div className={"flex flex-col"}>
      <div className={"flex items-center gap-2"}>
      <span className={"font-headline-sm text-body-md text-on-surface"}>Conflicting Reports Noise Factor</span>
      <span className={"px-1.5 py-0.5 rounded bg-primary/20 text-primary font-telemetry-sm text-telemetry-sm font-bold"}>+35% NOISE</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>غلط اور غیر مصدقہ اطلاعات میں اضافہ</span>
      </div>
      </div>
      <label className={"relative inline-flex items-center cursor-pointer"}>
      <input checked={true} className={"sr-only peer"} id={"noiseFactorToggle"} type={"checkbox"} />
      <div className={"w-12 h-7 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-primary after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary/30"}></div>
      </label>
      </div>
      {/*  Slider 2: Major Road Closures  */}
      <div className={"flex flex-col gap-space-xs bg-surface-container/50 p-space-md rounded-lg"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-tertiary-container text-headline-sm"}>block</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-md text-on-surface"}>Flooded Arteries (Inaccessible Roads)</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>اہم شاہراہوں اور پلوں کی بندش</span>
      </div>
      </div>
      <div className={"text-right"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-tertiary-container font-bold"} id={"roadCountDisplay"}>4</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Critical Arteries</span>
      </div>
      </div>
      <input className={"w-full h-2.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-tertiary-container"} id={"roadSlider"} max={"8"} min={"0"} type={"range"} defaultValue={"4"} />
      <div className={"flex flex-wrap gap-1.5 mt-1 font-telemetry-sm text-telemetry-sm"}>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-tertiary"}>Lyari Expy (Submerged)</span>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-tertiary"}>Korangi Causeway (Breached)</span>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-tertiary"}>Sunset Blvd Flyover</span>
      <span className={"px-2 py-0.5 rounded bg-surface-container-highest text-tertiary"}>Mauripur Road</span>
      </div>
      </div>
      {/*  Stepper: Resource & Rescue Casualties  */}
      <div className={"flex flex-col gap-space-xs bg-surface-container/50 p-space-md rounded-lg"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-2"}>
      <span className={"material-symbols-outlined text-secondary text-headline-sm"}>directions_boat</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-md text-on-surface"}>Simulated Asset Depletions</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>ناکارہ ہونے والے امدادی وسائل</span>
      </div>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm px-2 py-0.5 rounded bg-error-container/30 text-error font-semibold"}>4 Units Down</span>
      </div>
      <div className={"grid grid-cols-2 gap-space-sm mt-1"}>
      <div className={"flex items-center justify-between bg-surface-container-highest/60 p-2.5 rounded-lg"}>
      <span className={"font-body-sm text-body-sm text-on-surface"}>Boats Down:</span>
      <div className={"flex items-center gap-2"}>
      <button className={"w-7 h-7 rounded bg-surface-container flex items-center justify-center text-on-surface font-telemetry-md font-bold hover:bg-surface-container-high"}>-</button>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-error"} id={"boatsDownVal"}>3</span>
      <button className={"w-7 h-7 rounded bg-surface-container flex items-center justify-center text-on-surface font-telemetry-md font-bold hover:bg-surface-container-high"}>+</button>
      </div>
      </div>
      <div className={"flex items-center justify-between bg-surface-container-highest/60 p-2.5 rounded-lg"}>
      <span className={"font-body-sm text-body-sm text-on-surface"}>4x4 Stuck:</span>
      <div className={"flex items-center gap-2"}>
      <button className={"w-7 h-7 rounded bg-surface-container flex items-center justify-center text-on-surface font-telemetry-md font-bold hover:bg-surface-container-high"}>-</button>
      <span className={"font-telemetry-md text-telemetry-md font-bold text-primary"} id={"trucksDownVal"}>1</span>
      <button className={"w-7 h-7 rounded bg-surface-container flex items-center justify-center text-on-surface font-telemetry-md font-bold hover:bg-surface-container-high"}>+</button>
      </div>
      </div>
      </div>
      </div>
      {/*  Algorithmic Sensitivity Weights  */}
      <div className={"pt-space-sm flex flex-col gap-space-sm"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm uppercase tracking-wider text-outline"}>Triage Algorithmic Weights // ترجیحی پیمانے</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Expert Mode</span>
      </div>
      {/*  Weight 1  */}
      <div className={"flex flex-col gap-1"}>
      <div className={"flex justify-between font-body-sm text-body-sm"}>
      <span className={"text-on-surface"}>Equity Bias Weight (Informal Settlements / کچی آبادیاں)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary font-bold"}>1.45x (High Priority)</span>
      </div>
      <input className={"w-full h-1.5 bg-surface-container-highest rounded appearance-none cursor-pointer accent-primary"} max={"2.0"} min={"1.0"} step={"0.05"} type={"range"} defaultValue={"1.45"} />
      </div>
      {/*  Weight 2  */}
      <div className={"flex flex-col gap-1"}>
      <div className={"flex justify-between font-body-sm text-body-sm"}>
      <span className={"text-on-surface"}>Time-to-Inundation Penalty (پانی بھرنے کی رفتار)</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary font-bold"}>2.10x (Severe Urgency)</span>
      </div>
      <input className={"w-full h-1.5 bg-surface-container-highest rounded appearance-none cursor-pointer accent-secondary"} max={"3.0"} min={"1.0"} step={"0.1"} type={"range"} defaultValue={"2.1"} />
      </div>
      </div>
      </div>
      </div>
      {/*  RIGHT COLUMN: Before vs. After Impact Comparison Panel (7 Cols)  */}
      <div className={"xl:col-span-7 flex flex-col gap-space-lg"}>
      {/*  Comparative Side-by-Side Bento Grid  */}
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md"}>
      {/*  BASELINE CARD (Current Live State)  */}
      <div className={"rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-lg relative overflow-hidden"}>
      <div className={"flex items-center justify-between pb-space-sm"}>
      <div className={"flex items-center gap-2"}>
      <span className={"w-2.5 h-2.5 rounded-full bg-secondary"}></span>
      <span className={"font-headline-sm text-body-lg text-on-surface font-semibold"}>Baseline Live State</span>
      </div>
      <span className={"px-2 py-0.5 rounded font-telemetry-sm text-telemetry-sm bg-surface-container text-on-surface-variant"}>حالیہ اصل صورتحال</span>
      </div>
      <div className={"flex flex-col gap-space-md my-space-md"}>
      {/*  Metric 1  */}
      <div className={"flex items-baseline justify-between"}>
      <span className={"font-body-md text-body-md text-on-surface-variant"}>Tier 1 Immediate Calls:</span>
      <div className={"text-right"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-on-surface font-bold"}>14</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Cases</span>
      </div>
      </div>
      {/*  Metric 2  */}
      <div className={"flex items-baseline justify-between"}>
      <span className={"font-body-md text-body-md text-on-surface-variant"}>Avg Response ETA:</span>
      <div className={"text-right"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-secondary font-bold"}>24</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>min</span>
      </div>
      </div>
      {/*  Metric 3  */}
      <div className={"flex items-baseline justify-between"}>
      <span className={"font-body-md text-body-md text-on-surface-variant"}>Unmet Critical Needs:</span>
      <div className={"text-right"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-secondary font-bold"}>0</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Criticals</span>
      </div>
      </div>
      {/*  Metric 4  */}
      <div className={"flex flex-col gap-1"}>
      <div className={"flex justify-between font-body-sm text-body-sm"}>
      <span className={"text-on-surface-variant"}>Fleet Saturation:</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface font-semibold"}>75% (18/24 Units)</span>
      </div>
      <div className={"w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden"}>
      <div className={"h-full bg-secondary rounded-full"} style={{ width: "75%" }}></div>
      </div>
      </div>
      {/*  Systemic Risk Gauge  */}
      <div className={"pt-space-sm flex items-center justify-between bg-surface-container/40 p-space-sm rounded-lg"}>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-outline uppercase tracking-wider"}>Systemic Risk Score</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>مجموعی خطرے کا اسکور</span>
      </div>
      <div className={"flex items-baseline gap-1"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary font-bold"}>64</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>/100</span>
      </div>
      </div>
      </div>
      <div className={"pt-space-xs text-center font-telemetry-sm text-telemetry-sm text-on-surface-variant/80"}>
                  Current manageable buffer window: ~3.2 hours
                </div>
      </div>
      {/*  SIMULATED COMPOUND SCENARIO (Right - Glowing Alert State)  */}
      <div className={"rounded-xl bg-surface-container-high/90 backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-[0_0_32px_rgba(229,83,61,0.25)] relative overflow-hidden"}>
      {/*  Crimson Glow Backing  */}
      <div className={"absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-error/15 blur-2xl pointer-events-none"}></div>
      <div className={"flex items-center justify-between pb-space-sm"}>
      <div className={"flex items-center gap-2"}>
      <span className={"relative flex h-3 w-3"}>
      <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"}></span>
      <span className={"relative inline-flex rounded-full h-3 w-3 bg-error"}></span>
      </span>
      <span className={"font-headline-sm text-body-lg text-error font-bold"}>Simulated Compound Impact</span>
      </div>
      <span className={"px-2 py-0.5 rounded font-telemetry-sm text-telemetry-sm bg-error-container/40 text-error font-bold animate-pulse"}>
                    پیشگوئی شدہ بحران
                  </span>
      </div>
      <div className={"flex flex-col gap-space-md my-space-md"}>
      {/*  Metric 1: Surge  */}
      <div className={"flex items-baseline justify-between"}>
      <div className={"flex flex-col"}>
      <span className={"font-body-md text-body-md text-on-surface font-semibold"}>Tier 1 Immediate Calls:</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error font-bold flex items-center gap-1"}>
      <span className={"material-symbols-outlined text-telemetry-sm"}>arrow_upward</span>
                        +250% SURGE SPIKE
                      </span>
      </div>
      <div className={"text-right"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-error font-bold"}>49</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error/80"}>Cases</span>
      </div>
      </div>
      {/*  Metric 2: Delayed ETA  */}
      <div className={"flex items-baseline justify-between"}>
      <div className={"flex flex-col"}>
      <span className={"font-body-md text-body-md text-on-surface"}>Avg Response ETA:</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-primary"}>+34 min operational drag</span>
      </div>
      <div className={"text-right"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-primary font-bold"}>58</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>min</span>
      </div>
      </div>
      {/*  Metric 3: Critical Deficit  */}
      <div className={"flex items-baseline justify-between"}>
      <div className={"flex flex-col"}>
      <span className={"font-body-md text-body-md text-on-surface font-semibold"}>Unmet Critical Needs:</span>
      <span className={"font-urdu-body text-telemetry-sm text-tertiary-container"}>۱۱ شدید کیسز بغیر امداد</span>
      </div>
      <div className={"text-right"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-tertiary-container font-bold"}>11</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-tertiary-container"}>Urgent</span>
      </div>
      </div>
      {/*  Metric 4: Fleet Overcapacity  */}
      <div className={"flex flex-col gap-1"}>
      <div className={"flex justify-between font-body-sm text-body-sm"}>
      <span className={"text-on-surface font-bold text-error"}>Fleet Saturation Deficit:</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error font-bold"}>118% (DEFICIT: -7 UNITS)</span>
      </div>
      <div className={"w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden"}>
      <div className={"h-full bg-error rounded-full"} style={{ width: "100%" }}></div>
      </div>
      </div>
      {/*  Risk Failure Threshold  */}
      <div className={"pt-space-sm flex items-center justify-between bg-error-container/20 p-space-sm rounded-lg shadow-sm"}>
      <div className={"flex flex-col"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-error font-bold uppercase tracking-wider"}>Systemic Risk Score</span>
      <span className={"font-urdu-body text-telemetry-sm text-error"}>انتہائی خطرناک حد تک نظام دباؤ میں</span>
      </div>
      <div className={"flex items-baseline gap-1"}>
      <span className={"font-telemetry-lg text-telemetry-lg text-error font-bold animate-pulse"}>91</span>
      <span className={"font-telemetry-sm text-telemetry-sm text-error"}>/100</span>
      </div>
      </div>
      </div>
      <div className={"pt-space-xs text-center font-telemetry-sm text-telemetry-sm text-error font-bold uppercase tracking-wide"}>
                  ⚠️ Cascade collapse triggers in 42 minutes without pre-deploy
                </div>
      </div>
      </div>
      {/*  Top 3 Induced Vulnerability Hotspots  */}
      <div className={"bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-space-lg shadow-lg flex flex-col gap-space-md"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-headline-sm text-tertiary-container"}>crisis_alert</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface"}>Top 3 Induced Vulnerability Hotspots</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant leading-none"}>اس سمیلیشن سے پیدا ہونے والے اہم ترین خطرے کے مراکز</span>
      </div>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Spatial Vector Analysis</span>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-md"}>
      {/*  Hotspot 1  */}
      <div className={"p-space-md rounded-lg bg-surface-container/70 flex flex-col justify-between gap-space-sm hover:bg-surface-container-high transition-all"}>
      <div className={"flex flex-col gap-1"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-headline-sm text-body-md text-error font-bold"}>1. Lyari Sector 4 &amp; 5</span>
      <span className={"w-2 h-2 rounded-full bg-error"}></span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>لیاری سیکٹر ۴ اور ۵ (ٹیلی کام منقطع)</span>
      <p className={"font-body-sm text-body-sm text-on-surface mt-1"}>
      <strong className={"text-error"}>+18 Silent Bedridden Patients</strong> stranded by sudden tower blackout. Zero inbound dispatch confirmation possible.
                    </p>
      </div>
      <div className={"mt-2 pt-2 bg-surface-container-lowest/60 p-2 rounded font-telemetry-sm text-telemetry-sm flex items-center justify-between text-on-surface-variant"}>
      <span>Required:</span>
      <span className={"text-primary font-semibold"}>Walkie-Talkie Foot Courier</span>
      </div>
      </div>
      {/*  Hotspot 2  */}
      <div className={"p-space-md rounded-lg bg-surface-container/70 flex flex-col justify-between gap-space-sm hover:bg-surface-container-high transition-all"}>
      <div className={"flex flex-col gap-1"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-headline-sm text-body-md text-tertiary-container font-bold"}>2. Malir Riverbank Cutoff</span>
      <span className={"w-2 h-2 rounded-full bg-tertiary-container"}></span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>ملیر ندی بندش (گاڑیاں بے اثر)</span>
      <p className={"font-body-sm text-body-sm text-on-surface mt-1"}>
                      Causeway submerged by 1.8m surge. All 4x4 overland rescue routes severed. <strong className={"text-tertiary-container"}>Boat-only extraction corridor.</strong>
      </p>
      </div>
      <div className={"mt-2 pt-2 bg-surface-container-lowest/60 p-2 rounded font-telemetry-sm text-telemetry-sm flex items-center justify-between text-on-surface-variant"}>
      <span>Required:</span>
      <span className={"text-secondary font-semibold"}>2 Shallow Inflatables</span>
      </div>
      </div>
      {/*  Hotspot 3  */}
      <div className={"p-space-md rounded-lg bg-surface-container/70 flex flex-col justify-between gap-space-sm hover:bg-surface-container-high transition-all"}>
      <div className={"flex flex-col gap-1"}>
      <div className={"flex items-center justify-between"}>
      <span className={"font-headline-sm text-body-md text-primary font-bold"}>3. Korangi Industrial Edge</span>
      <span className={"w-2 h-2 rounded-full bg-primary"}></span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>کورنگی صنعتی کنارہ (طبی فوری ضرورت)</span>
      <p className={"font-body-sm text-body-sm text-on-surface mt-1"}>
      <strong className={"text-primary"}>28 dialysis &amp; pregnant cases</strong> stranded. Rising toxic chemical runoff mingling with stormwater.
                    </p>
      </div>
      <div className={"mt-2 pt-2 bg-surface-container-lowest/60 p-2 rounded font-telemetry-sm text-telemetry-sm flex items-center justify-between text-on-surface-variant"}>
      <span>Required:</span>
      <span className={"text-error font-semibold"}>Air-Conditioned ALS Van</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Delta Triage Escalation Table  */}
      <div className={"bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-space-lg shadow-lg flex flex-col gap-space-md"}>
      <div className={"flex items-center justify-between flex-wrap gap-2"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-headline-sm text-primary"}>priority_high</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface"}>Algorithmic Shift: Cases Jumping to Tier 1 Immediate</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant leading-none"}>اس ماڈل میں فوری ترجیح پر منتقل ہونے والے کیسز</span>
      </div>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary font-semibold"}>
                  5 High-Impact Priority Inversions
                </span>
      </div>
      <div className={"overflow-x-auto"}>
      <table className={"w-full text-left font-body-sm text-body-sm"}>
      <thead>
      <tr className={"text-telemetry-sm font-telemetry-sm text-on-surface-variant uppercase tracking-wider bg-surface-container/60"}>
      <th className={"py-2.5 px-space-md rounded-l-lg"}>Case Ref / Name</th>
      <th className={"py-2.5 px-space-md"}>Location / لوکیشن</th>
      <th className={"py-2.5 px-space-md"}>Baseline Status</th>
      <th className={"py-2.5 px-space-md"}>Simulated State</th>
      <th className={"py-2.5 px-space-md"}>Escalation Trigger Factor</th>
      <th className={"py-2.5 px-space-md rounded-r-lg text-right"}>Action Needed</th>
      </tr>
      </thead>
      <tbody className={"divide-y divide-surface-container-highest/30"}>
      {/*  Row 1: Mrs. Khan  */}
      <tr className={"hover:bg-surface-container/40 transition-colors"}>
      <td className={"py-3 px-space-md"}>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-md text-on-surface font-semibold"}>#NLB-8092: Mrs. Bilquis Khan</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>بلقیس خان (عمر ۶۸ سال)</span>
      </div>
      </td>
      <td className={"py-3 px-space-md text-on-surface"}>Lyari, Phool Patti Lane</td>
      <td className={"py-3 px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm font-bold"}>
                          Tier 2 (Wait 2h)
                        </span>
      </td>
      <td className={"py-3 px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1 w-max"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span>
                          Tier 1 (IMMEDIATE)
                        </span>
      </td>
      <td className={"py-3 px-space-md text-on-surface-variant"}>
                        Oxygen concentrator battery depleting + cell blackout silence.
                      </td>
      <td className={"py-3 px-space-md text-right"}>
      <button className={"px-space-sm py-1 rounded bg-primary/20 text-primary hover:bg-primary hover:text-on-primary font-telemetry-sm text-telemetry-sm font-bold transition-all"}>
                          Pre-Queue Dispatch
                        </button>
      </td>
      </tr>
      {/*  Row 2: Zubair Family  */}
      <tr className={"hover:bg-surface-container/40 transition-colors"}>
      <td className={"py-3 px-space-md"}>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-md text-on-surface font-semibold"}>#NLB-7714: Zubair &amp; 6 Dependents</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>زبیر (مع فیملی ۶ افراد)</span>
      </div>
      </td>
      <td className={"py-3 px-space-md text-on-surface"}>Malir River Bank, Sector 8</td>
      <td className={"py-3 px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-telemetry-sm text-telemetry-sm"}>
                          Tier 3 (Shelter In Place)
                        </span>
      </td>
      <td className={"py-3 px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1 w-max"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span>
                          Tier 1 (IMMEDIATE)
                        </span>
      </td>
      <td className={"py-3 px-space-md text-on-surface-variant"}>
                        Causeway burst cuts evacuation lane; rooftop inundation &lt; 40 min.
                      </td>
      <td className={"py-3 px-space-md text-right"}>
      <button className={"px-space-sm py-1 rounded bg-primary/20 text-primary hover:bg-primary hover:text-on-primary font-telemetry-sm text-telemetry-sm font-bold transition-all"}>
                          Assign Zodiac Boat
                        </button>
      </td>
      </tr>
      {/*  Row 3: Fatima Bibi Dialysis  */}
      <tr className={"hover:bg-surface-container/40 transition-colors"}>
      <td className={"py-3 px-space-md"}>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-md text-on-surface font-semibold"}>#NLB-8240: Fatima Bibi</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>فاطمہ بی بی (ڈائیلاسز مریضہ)</span>
      </div>
      </td>
      <td className={"py-3 px-space-md text-on-surface"}>Korangi Crossing No. 3</td>
      <td className={"py-3 px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm font-bold"}>
                          Tier 2 (Scheduled)
                        </span>
      </td>
      <td className={"py-3 px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1 w-max"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span>
                          Tier 1 (IMMEDIATE)
                        </span>
      </td>
      <td className={"py-3 px-space-md text-on-surface-variant"}>
                        Wet-bulb heat shock triggers fluid overload; dialysis overdue by 14h.
                      </td>
      <td className={"py-3 px-space-md text-right"}>
      <button className={"px-space-sm py-1 rounded bg-primary/20 text-primary hover:bg-primary hover:text-on-primary font-telemetry-sm text-telemetry-sm font-bold transition-all"}>
                          Reroute Medic Van
                        </button>
      </td>
      </tr>
      {/*  Row 4: Shanti Nagar Settlement  */}
      <tr className={"hover:bg-surface-container/40 transition-colors"}>
      <td className={"py-3 px-space-md"}>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-body-md text-on-surface font-semibold"}>#NLB-6912: Orphan Home Cluster (32 Children)</span>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>یتیم خانہ کلسٹر (۳۲ بچے)</span>
      </div>
      </td>
      <td className={"py-3 px-space-md text-on-surface"}>Old Golimar Nullah</td>
      <td className={"py-3 px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-telemetry-sm text-telemetry-sm font-bold"}>
                          Tier 2 (Standby)
                        </span>
      </td>
      <td className={"py-3 px-space-md"}>
      <span className={"px-2 py-0.5 rounded-full bg-error-container/30 text-error font-telemetry-sm text-telemetry-sm font-bold flex items-center gap-1 w-max"}>
      <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span>
                          Tier 1 (CRITICAL)
                        </span>
      </td>
      <td className={"py-3 px-space-md text-on-surface-variant"}>
                        Nullah breach overflow height reaches 1.2m ground floor level.
                      </td>
      <td className={"py-3 px-space-md text-right"}>
      <button className={"px-space-sm py-1 rounded bg-primary/20 text-primary hover:bg-primary hover:text-on-primary font-telemetry-sm text-telemetry-sm font-bold transition-all"}>
                          Mobilize Bus Fleet
                        </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/*  Recommended Strategic Mitigations  */}
      <div className={"bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-space-lg shadow-lg flex flex-col gap-space-md"}>
      <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-space-xs"}>
      <span className={"material-symbols-outlined text-headline-sm text-secondary"}>verified</span>
      <div className={"flex flex-col"}>
      <span className={"font-headline-sm text-headline-sm text-on-surface"}>Proactive AI Mitigations &amp; Dispatch Adjustments</span>
      <span className={"font-urdu-body text-telemetry-sm text-secondary leading-none"}>بحران سے نمٹنے کے لیے تجویز کردہ ہنگامی اقدامات</span>
      </div>
      </div>
      <span className={"font-telemetry-sm text-telemetry-sm text-on-surface-variant"}>Calculated Safeguards</span>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md"}>
      {/*  Mitigation Card 1  */}
      <div className={"p-space-md rounded-lg bg-surface-container/70 flex flex-col justify-between gap-space-sm hover:bg-surface-container-high transition-all"}>
      <div className={"flex flex-col gap-space-xs"}>
      <div className={"flex items-center gap-2 text-primary font-headline-sm text-body-md font-bold"}>
      <span className={"material-symbols-outlined"}>flight_takeoff</span>
      <span>Pre-Deploy 4 Army Inflatables from PAF Masroor</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>پی اے ایف مسرور بیس سے ۴ اضافی فوجی کشتیاں فوری طلب کریں</span>
      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      Relocates watercraft before Korangi Causeway totally fails, neutralizing the forecasted 7-unit fleet saturation deficit.
                    </p>
      </div>
      <div className={"pt-2 flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Saves Estimated: 32 Lives</span>
      <button className={"px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-headline-sm text-telemetry-sm font-bold hover:bg-primary-fixed shadow-sm transition-all"}>
                      Execute Request
                    </button>
      </div>
      </div>
      {/*  Mitigation Card 2  */}
      <div className={"p-space-md rounded-lg bg-surface-container/70 flex flex-col justify-between gap-space-sm hover:bg-surface-container-high transition-all"}>
      <div className={"flex flex-col gap-space-xs"}>
      <div className={"flex items-center gap-2 text-secondary font-headline-sm text-body-md font-bold"}>
      <span className={"material-symbols-outlined"}>radio</span>
      <span>Switch Broadcast to Low-Frequency FM &amp; Mosques</span>
      </div>
      <span className={"font-urdu-body text-telemetry-sm text-on-surface-variant"}>مساجد کے لاؤڈ اسپیکرز اور ایف ایم ریڈیو پر انتباہی پیغامات نشر کریں</span>
      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      Bypasses dead cellular towers in Lyari and Malir, transmitting survival instructions and assembly points to 14,000 residents.
                    </p>
      </div>
      <div className={"pt-2 flex items-center justify-between"}>
      <span className={"font-telemetry-sm text-telemetry-sm text-secondary"}>Reach: 86% Offline Households</span>
      <button className={"px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-headline-sm text-telemetry-sm font-bold hover:bg-secondary-fixed shadow-sm transition-all"}>
                      Broadcast Now
                    </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/*  Interactive Client-side Script for Sliders & Realtime Visual Feedback  */}

      </div>
  )
}
