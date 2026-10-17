import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { t } from '../i18n'

export default function CommandPage() {
  const navigate = useNavigate()
  const { language, cases, openCaseDrawer, showToast } = useStore()
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)

  const handleOpenCase = (caseId: string) => {
    openCaseDrawer(caseId)
  }

  const handleAreaSelect = (area: string) => {
    setSelectedArea(selectedArea === area ? null : area)
  }

  const handleZoomIn = () => {
    setZoomLevel(Math.min(zoomLevel + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))
  }

  const handleRecenter = () => {
    setZoomLevel(1)
    showToast('Map recentered', 'نقشہ دوبارہ مرکزی ہو گیا', 'info')
  }

  const filteredCases = selectedArea
    ? cases.filter(c => c.location.toLowerCase().includes(selectedArea.toLowerCase()))
    : cases

  return (
    <div className="bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* 1. TOP METRIC / INCIDENT TRIAGE COMMAND BAR */}
      <section className="w-full bg-surface-container-low/90 backdrop-blur-md rounded-xl p-space-md shadow-lg relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
          {/* Title & Mission Context */}
          <div className="flex items-center gap-space-md min-w-0">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shrink-0 shadow-md">
              <span className="material-symbols-outlined text-display-lg-mobile" style={{ fontVariationSettings: "'FILL' 1" }}>flood</span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-md text-headline-sm text-on-surface font-bold tracking-tight">Active Flood Basin Command</span>
                <span className="text-outline-variant font-telemetry-sm">/</span>
                <span className="font-urdu-headline text-body-lg text-primary font-bold">لائائیو ایمرجنسی کمانڈ</span>
              </div>
              <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm">
                <span>Karachi South &amp; East Drainage Basins</span>
                <span className="w-1 h-1 rounded-full bg-outline"></span>
                <span className="font-telemetry-sm text-telemetry-sm text-secondary">Telemetry Freshness: 3.8s</span>
              </div>
            </div>
          </div>
          {/* Live Metric Triage Strips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm w-full xl:w-auto">
            {/* Total Tracked */}
            <div className="bg-surface-container/70 rounded-lg p-space-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase">Tracked</span>
                <span className="material-symbols-outlined text-telemetry-sm text-on-surface-variant">groups</span>
              </div>
              <div className="mt-1 flex items-baseline gap-space-xs">
                <span className="font-telemetry-lg text-telemetry-lg text-on-surface font-bold">1,842</span>
                <span className="font-urdu-body text-telemetry-sm text-on-surface-variant">شہری</span>
              </div>
              <span className="font-body-sm text-on-surface-variant/75 text-[11px] truncate">Lyari, Malir, Korangi</span>
            </div>
            {/* Tier 1: Life Threat */}
            <div className="bg-error-container/20 rounded-lg p-space-sm flex flex-col justify-between shadow-[0_0_16px_rgba(229,83,61,0.15)] relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-telemetry-sm text-telemetry-sm text-error font-semibold uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span> Tier 1 Life
                </span>
                <span className="font-urdu-body text-telemetry-sm text-error">خطرہ جاں</span>
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-telemetry-lg text-telemetry-lg text-error font-extrabold">14</span>
                <span className="font-telemetry-sm text-telemetry-sm text-error/80">Immediate</span>
              </div>
              <div className="w-full bg-surface-container-lowest h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-error h-full w-full"></div>
              </div>
            </div>
            {/* Tier 2: Urgent */}
            <div className="bg-surface-container/70 rounded-lg p-space-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-telemetry-sm text-telemetry-sm text-primary uppercase font-semibold">Tier 2 Urgent</span>
                <span className="font-urdu-body text-telemetry-sm text-primary">فوری</span>
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-telemetry-lg text-telemetry-lg text-primary font-bold">48</span>
                <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">Cases</span>
              </div>
              <div className="w-full bg-surface-container-lowest h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-primary-container h-full w-3/4"></div>
              </div>
            </div>
            {/* Tier 3: Watch */}
            <div className="bg-surface-container/70 rounded-lg p-space-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-telemetry-sm text-telemetry-sm text-secondary uppercase font-semibold">Tier 3 Watch</span>
                <span className="font-urdu-body text-telemetry-sm text-secondary">نگرانی</span>
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-telemetry-lg text-telemetry-lg text-secondary font-bold">112</span>
                <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">Stable</span>
              </div>
              <div className="w-full bg-surface-container-lowest h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-secondary-container h-full w-2/5"></div>
              </div>
            </div>
            {/* Unknown / Welfare Check */}
            <div className="bg-surface-container/70 rounded-lg p-space-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#5F7A8C_1px,transparent_1px)] [background-size:6px_6px]"></div>
              <div className="flex items-center justify-between">
                <span className="font-telemetry-sm text-telemetry-sm text-outline uppercase font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-telemetry-sm">help_center</span> Unknown
                </span>
                <span className="font-urdu-body text-telemetry-sm text-outline">نامعلوم</span>
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-telemetry-lg text-telemetry-lg text-on-surface font-bold">29</span>
                <span className="font-telemetry-sm text-telemetry-sm text-error/90 font-medium tracking-tight">Zero-Ping</span>
              </div>
              <span className="font-body-sm text-[11px] text-tertiary truncate">Default to High Exposure</span>
            </div>
            {/* Avg Response Latency */}
            <div className="bg-surface-container-high/80 rounded-lg p-space-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant uppercase">Resp Latency</span>
                <span className="material-symbols-outlined text-telemetry-sm text-secondary">speed</span>
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-telemetry-lg text-telemetry-lg text-secondary font-bold">2m 14s</span>
              </div>
              <span className="font-urdu-body text-[11px] text-on-surface-variant truncate">اوسط رسپانس وقت (مطلوبہ &lt; 3m)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN SPLIT INTERFACE (60% Map / 40% Queue) */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start mt-space-lg">
        {/* LEFT COLUMN: 3D TILTED LIVE HAZARD MAP */}
        <div className="lg:col-span-7 flex flex-col gap-space-sm">
          <div className="bg-surface-container-low/95 rounded-xl p-space-md shadow-xl flex flex-col gap-space-md relative overflow-hidden">
            {/* Map Header & Filter Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm z-10">
              <div className="flex items-center gap-space-sm">
                <div className="px-space-sm py-1 rounded bg-surface-container-high text-primary font-telemetry-sm text-telemetry-sm flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-telemetry-md">view_in_ar</span>
                  <span>Perspective View 28°</span>
                </div>
                <div className="flex items-center bg-surface-container rounded-lg p-0.5">
                  <button
                    onClick={() => handleAreaSelect('all')}
                    className={`px-space-sm py-1 rounded font-body-sm text-body-sm ${!selectedArea ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'} transition-colors`}
                  >
                    All Karachi
                  </button>
                  <button
                    onClick={() => handleAreaSelect('lyari')}
                    className={`px-space-sm py-1 rounded font-body-sm text-body-sm ${selectedArea === 'lyari' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'} transition-colors`}
                  >
                    Lyari Basin
                  </button>
                  <button
                    onClick={() => handleAreaSelect('malir')}
                    className={`px-space-sm py-1 rounded font-body-sm text-body-sm ${selectedArea === 'malir' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'} transition-colors`}
                  >
                    Malir Nadi
                  </button>
                  <button
                    onClick={() => handleAreaSelect('korangi')}
                    className={`px-space-sm py-1 rounded font-body-sm text-body-sm ${selectedArea === 'korangi' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'} transition-colors`}
                  >
                    Korangi
                  </button>
                </div>
              </div>
              {/* Controls Stack */}
              <div className="flex items-center gap-space-xs">
                <button className="px-space-sm py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-telemetry-sm text-telemetry-sm flex items-center gap-1 transition-colors" title="Toggle Unknown Beacons">
                  <span className="w-2 h-2 rounded-full bg-outline"></span>
                  <span>Hatched Unknowns</span>
                </button>
                <div className="flex items-center bg-surface-container rounded-lg overflow-hidden">
                  <button
                    onClick={handleZoomIn}
                    className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container-high"
                    title="Zoom In"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-headline-sm">add</span>
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container-high"
                    title="Zoom Out"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-headline-sm">remove</span>
                  </button>
                  <button
                    onClick={handleRecenter}
                    className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container-high"
                    title="Recenter View"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-body-sm">my_location</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 3D Perspective Map Canvas Container */}
            <div className="relative w-full h-[520px] rounded-lg overflow-hidden bg-surface-container-lowest shadow-inner [perspective:1200px]">
              {/* Tilted Map Surface */}
              <div
                className="w-full h-full relative transition-transform duration-300 ease-out"
                style={{
                  transform: `rotateX(24deg) scale(${1.05 * zoomLevel})`,
                  transformOrigin: '50% 80%',
                }}
              >
                {/* Simulated Satellite Base Map Layer */}
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity filter contrast-125" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfOv1_droolOJs3jzkRzstrRIHNCLxytCLvIcRKnzorJHtq1HMX0Xb8O1cojQKzy9Ilf9BMPgg5Omk8SCYMcwN0eXhw6CP4T3syu-zHSHGBQx2ENzh2JUbG9tjO-e_Vmu7SF1FYzcB-8a-HaG3hL6I40mT2Ew4eta6Ml8aYjfcbulE4T8ctiUconjfbsVJSffc69OII7ywfG_7Uh47JCqyGoPmzuEntoHNkdwbT1fpon79_DKRBDkM4w')" }}></div>
                {/* Deep Monsoon Teal Ambient & Riverbed Inundation Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-surface-dim/70 to-surface-container-lowest/80"></div>
                {/* Water Vector Polygons & Flash Flood Spillway (Inline SVG Overlay) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="floodFlow" x1="0%" x2="100%" y1="0%" y2="80%">
                      <stop offset="0%" stopColor="#1da290" stopOpacity="0.2"></stop>
                      <stop offset="60%" stopColor="#65d9c5" stopOpacity="0.45"></stop>
                      <stop offset="100%" stopColor="#1da290" stopOpacity="0.3"></stop>
                    </linearGradient>
                    <pattern height="12" id="diagonalHatch" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse" width="12">
                      <line opacity="0.6" stroke="#9e8e7c" strokeWidth="2.5" x1="0" x2="0" y1="0" y2="12"></line>
                    </pattern>
                    <linearGradient id="dangerFlow" x1="0%" x2="100%" y1="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffb4ab" stopOpacity="0.1"></stop>
                      <stop offset="100%" stopColor="#93000a" stopOpacity="0.5"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M-50,180 C180,240 280,310 460,320 C620,330 750,420 1050,440 L1050,560 C780,520 620,440 440,430 C260,420 120,380 -50,330 Z" fill="url(#floodFlow)"></path>
                  <path d="M420,50 C540,160 620,280 720,410 C810,520 910,610 1050,680 L960,700 C830,620 720,520 620,390 C530,260 450,140 370,60 Z" fill="url(#floodFlow)"></path>
                  <ellipse className="animate-pulse" cx="440" cy="340" fill="url(#dangerFlow)" rx="140" ry="60"></ellipse>
                  <path d="M320,310 Q450,290 570,350 Q430,390 320,310 Z" fill="none" opacity="0.8" stroke="#65d9c5" strokeDasharray="6,4" strokeWidth="1.5"></path>
                  <path d="M720,480 L880,450 L910,560 L750,590 Z" fill="url(#diagonalHatch)"></path>
                  <text fill="#d8e5ea" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="1" x="760" y="530">UNVERIFIED EXP ZONE #09</text>
                  <path d="M120,120 L380,280 L440,340" fill="none" stroke="#ffb4ab" strokeDasharray="8,6" strokeWidth="4"></path>
                  <path d="M680,390 L840,460 L960,510" fill="none" stroke="#ffb4ab" strokeDasharray="8,6" strokeWidth="4"></path>
                </svg>
                {/* TACTICAL MAP MARKERS & BEACONS */}
                <div className="absolute top-[28%] left-[34%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded text-error font-telemetry-sm text-[10px] shadow-lg">
                  <span className="material-symbols-outlined text-sm">no_crash</span>
                  <span>Hub River Rd Cut</span>
                </div>
                <div className="absolute top-[58%] left-[78%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded text-error font-telemetry-sm text-[10px] shadow-lg">
                  <span className="material-symbols-outlined text-sm">water_damage</span>
                  <span>Causeway Overflow 1.4m</span>
                </div>
                {/* RESCUE ASSETS */}
                <div className="absolute top-[44%] left-[48%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-secondary/30 animate-ping"></span>
                    <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-base">directions_boat</span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 whitespace-nowrap bg-surface-container-lowest/90 text-secondary font-telemetry-sm text-[10px] px-2 py-0.5 rounded shadow pointer-events-none">
                    Pak Navy Boat Unit 04
                  </div>
                </div>
                <div className="absolute top-[32%] left-[24%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-base">emergency</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 whitespace-nowrap bg-surface-container-lowest/90 text-primary font-telemetry-sm text-[10px] px-2 py-0.5 rounded shadow pointer-events-none">
                    Edhi 4x4 Amb #12
                  </div>
                </div>
                <div className="absolute top-[20%] left-[64%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-surface-bright text-on-surface flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-sm">flight</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-7 whitespace-nowrap bg-surface-container-lowest/90 text-on-surface-variant font-telemetry-sm text-[10px] px-2 py-0.5 rounded shadow pointer-events-none">
                    Thermal Drone D-2
                  </div>
                </div>
                {/* CRITICAL RISK BEACONS */}
                <div className="absolute top-[48%] left-[38%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer" onClick={() => handleOpenCase('PK-KHI-7821')}>
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-12 h-12 rounded-full bg-error/40 animate-ping"></span>
                    <span className="absolute w-8 h-8 rounded-full bg-error/60 blur-sm"></span>
                    <div className="w-6 h-6 rounded-full bg-error text-on-error flex items-center justify-center shadow-[0_0_16px_rgba(229,83,61,0.8)]">
                      <span className="material-symbols-outlined text-sm">priority_high</span>
                    </div>
                  </div>
                  <div className="absolute left-6 -top-12 z-30 w-64 bg-surface-container-high/95 backdrop-blur-xl p-space-sm rounded-lg shadow-2xl opacity-95 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between border-b border-surface-variant pb-1">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                        <span className="font-headline-sm text-body-sm font-bold text-error">Tier 1 • Risk 98.4</span>
                      </div>
                      <span className="font-telemetry-sm text-[10px] text-tertiary">#SOS-7821</span>
                    </div>
                    <div className="mt-1 flex flex-col leading-tight">
                      <span className="font-headline-sm text-body-sm font-bold text-on-surface">Fatima Bibi / فاطمہ بی بی</span>
                      <span className="text-on-surface-variant font-body-sm text-[11px]">Lyari Sector 4-B | Age 78</span>
                      <p className="font-body-sm text-error text-[11px] mt-1 font-semibold">⚠️ O₂ Concentrator Dead | Water +1.8m</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[62%] left-[58%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer" onClick={() => handleOpenCase('PK-KHI-7822')}>
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-9 h-9 rounded-full bg-error/30 animate-pulse"></span>
                    <div className="w-5 h-5 rounded-full bg-error text-on-error flex items-center justify-center shadow-[0_0_12px_rgba(229,83,61,0.6)]">
                      <span className="material-symbols-outlined text-xs">accessible</span>
                    </div>
                  </div>
                  <div className="absolute left-6 -top-6 hidden group-hover:flex z-30 w-52 bg-surface-container-high/95 p-2 rounded shadow-xl flex-col text-[11px]">
                    <span className="font-bold text-on-surface">Bilal Ahmed (34)</span>
                    <span className="text-error font-medium">Non-Ambulatory • Malir Edge</span>
                  </div>
                </div>
                <div className="absolute top-[68%] left-[82%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden shadow-lg shadow-black/60">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24">
                        <line stroke="#d6c3af" strokeWidth="2.5" x1="0" x2="24" y1="24" y2="0"></line>
                        <line stroke="#d6c3af" strokeWidth="2.5" x1="-12" x2="12" y1="12" y2="-12"></line>
                        <line stroke="#d6c3af" strokeWidth="2.5" x1="12" x2="36" y1="36" y2="12"></line>
                      </svg>
                      <span className="relative material-symbols-outlined text-xs text-on-surface">help</span>
                    </div>
                  </div>
                  <div className="absolute left-7 -top-8 hidden group-hover:flex z-30 w-56 bg-surface-container-high p-2 rounded shadow-xl flex-col text-[11px]">
                    <span className="font-bold text-outline">Mrs. Khan (Dialysis)</span>
                    <span className="text-on-surface-variant">Korangi • No Cell Ping (3h 40m)</span>
                    <span className="text-tertiary-container font-semibold">Assumed Max Hazard Exposure</span>
                  </div>
                </div>
                <div className="absolute top-[28%] left-[76%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_0_10px_rgba(242,169,59,0.5)]">
                    <span className="material-symbols-outlined text-xs">family_restroom</span>
                  </div>
                </div>
              </div>
              {/* Bottom Floating Map Telemetry Strip */}
              <div className="absolute bottom-2 left-2 right-2 z-20 bg-surface-container-low/85 backdrop-blur-md px-space-md py-space-xs rounded-lg flex flex-wrap items-center justify-between text-telemetry-sm font-telemetry-sm text-on-surface-variant">
                <div className="flex items-center gap-space-md">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-error"></span> Tier 1 Life Threat</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary"></span> Tier 2 Urgent</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-outline"></span> Hatched = Unknown Welfare</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="text-secondary">Lyari Crest: 4.1m (Max Cap 4.5m)</span>
                  <span className="text-outline-variant">|</span>
                  <span className="text-primary">Wind: 34 kt SW Monsoon</span>
                </div>
              </div>
            </div>
            {/* Layer Toggles & Interactive Map Sliders */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container/60 p-space-sm rounded-lg text-body-sm">
              <div className="flex items-center gap-space-md">
                <label className="flex items-center gap-2 cursor-pointer text-on-surface">
                  <input defaultChecked className="w-4 h-4 rounded accent-primary-container bg-surface-container-highest" type="checkbox" />
                  <span className="font-medium text-body-sm">Inundation Layer (+2.5m)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-on-surface">
                  <input defaultChecked className="w-4 h-4 rounded accent-primary-container bg-surface-container-highest" type="checkbox" />
                  <span className="font-medium text-body-sm">KE Grid Blackouts</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-on-surface">
                  <input defaultChecked className="w-4 h-4 rounded accent-primary-container bg-surface-container-highest" type="checkbox" />
                  <span className="font-medium text-body-sm">Field Assets (Boats/4x4)</span>
                </label>
              </div>
              <div className="flex items-center gap-2 font-telemetry-sm text-telemetry-sm text-on-surface-variant">
                <span>Projection Model:</span>
                <span className="text-primary font-semibold">SWAT-Monsoon-V4</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MULTI-TIER PRIORITY RESCUE QUEUE */}
        <div className="lg:col-span-5 flex flex-col gap-space-sm">
          <div className="bg-surface-container-low/95 rounded-xl p-space-md shadow-xl flex flex-col gap-space-md">
            {/* Queue Header with Search & Auto-refresh */}
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-headline-sm">sort</span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Priority Rescue Queue</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-secondary font-telemetry-sm text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  <span>LIVE REFRESH 5s</span>
                </div>
              </div>
              <div className="h-0.5 w-16 bg-primary-container rounded-full"></div>
            </div>
            {/* Search & Filter Controls */}
            <div className="flex flex-col gap-space-xs">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-md">search</span>
                <input className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-lg text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Search citizen by name, CNIC (42201-...), or phone..." type="text" />
              </div>
              {/* Tier Filter Tabs with Counter Badges */}
              <div className="flex items-center justify-between gap-1 overflow-x-auto py-1">
                <button className="px-space-sm py-1 rounded-lg text-body-sm font-medium bg-surface-container-high text-on-surface">All (203)</button>
                <button className="px-space-sm py-1 rounded-lg text-body-sm font-semibold bg-error-container/30 text-error flex items-center gap-1">
                  <span>Tier 1</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-error text-on-error text-telemetry-sm font-bold">14</span>
                </button>
                <button className="px-space-sm py-1 rounded-lg text-body-sm font-medium text-primary hover:bg-surface-container flex items-center gap-1">
                  <span>Tier 2</span>
                  <span className="text-telemetry-sm text-primary/80">48</span>
                </button>
                <button className="px-space-sm py-1 rounded-lg text-body-sm font-medium text-outline hover:bg-surface-container flex items-center gap-1">
                  <span>Unknown</span>
                  <span className="text-telemetry-sm text-outline">29</span>
                </button>
              </div>
            </div>
            {/* Case Cards List */}
            <div className="flex flex-col gap-space-sm max-h-[560px] overflow-y-auto pr-1">
              {filteredCases.map((caseItem) => (
                <article key={caseItem.id} className="bg-surface-container/90 rounded-xl p-space-md flex flex-col gap-space-xs shadow-lg relative overflow-hidden transition-transform hover:-translate-y-0.5 cursor-pointer" onClick={() => handleOpenCase(caseItem.id)}>
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${caseItem.tier === 1 ? 'bg-error' : caseItem.tier === 2 ? 'bg-primary-container' : 'bg-secondary-container'}`}></div>
                  <div className="flex items-start justify-between gap-2 pl-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">{caseItem.name}</h3>
                        <span className="text-on-surface-variant font-urdu-body text-headline-sm">{caseItem.nameUrdu}</span>
                      </div>
                      <div className="flex items-center gap-2 font-body-sm text-on-surface-variant text-[12px]">
                        <span>{caseItem.age} yrs</span>
                        <span>•</span>
                        <span>{caseItem.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className={`px-2 py-0.5 rounded ${caseItem.tier === 1 ? 'bg-error text-on-error' : caseItem.tier === 2 ? 'bg-primary text-on-primary' : 'bg-secondary text-on-secondary'} font-telemetry-lg text-headline-sm font-extrabold shadow-[0_0_12px_rgba(229,83,61,0.5)]`}>
                        {caseItem.risk.toFixed(1)}
                      </div>
                      <span className="font-telemetry-sm text-[10px] text-on-surface-variant mt-0.5">96% Model Conf</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 mt-1 border-t border-surface-variant/40 pl-2">
                    <span className={`font-headline-sm text-body-sm ${caseItem.tier === 1 ? 'text-error' : 'text-primary'} font-bold`}>
                      {caseItem.tier === 1 ? 'Urgent Action Required' : 'Action Required'}
                    </span>
                    <button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold flex items-center gap-1 shadow-md hover:bg-primary-fixed transition-all">
                      <span>Open Case</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
