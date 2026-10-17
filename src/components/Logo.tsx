export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <div className={`${sizeClasses[size]} rounded-xl bg-surface-container flex items-center justify-center text-primary-container shrink-0 shadow-md`}>
      <svg className="w-full h-full p-2 text-primary-container drop-shadow-[0_0_12px_rgba(242,169,59,0.7)]" fill="none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" opacity="0.45" r="44" stroke="#3FB8A5" strokeWidth="2.5" />
        <path d="M48 14 H52 V22 H48 Z" fill="#F2A93B" />
        <circle cx="50" cy="18" r="6" stroke="#F2A93B" strokeWidth="2" />
        <path d="M36 28 C42 24 58 24 64 28 L60 36 C54 33 46 33 40 36 Z" fill="#3FB8A5" opacity="0.8" />
        <path d="M38 38 C32 50 32 64 36 72 L64 72 C68 64 68 50 62 38 Z" fill="rgba(22,38,43,0.6)" stroke="#3FB8A5" strokeWidth="2" />
        <path d="M50 42 C44 54 41 62 45 68 C48 72 52 72 55 68 C59 62 56 54 50 42 Z" fill="#F2A93B" />
        <circle cx="50" cy="56" fill="#FFF3D4" r="3.5" />
        <ellipse cx="50" cy="63" fill="#FFF3D4" rx="4.5" ry="3" />
        <path d="M32 72 L68 72 L65 78 L35 78 Z" fill="#3FB8A5" />
      </svg>
    </div>
  )
}
