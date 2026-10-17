import { useEffect, useRef, useState } from 'react'
import v1 from '../assets/video/1.mp4'
import v3 from '../assets/video/3.mp4'
import v4 from '../assets/video/4.mp4'

const CLIPS = [v1, v3, v4] // playback order: 1 → 3 → 4, then loop
const SPEED = 0.5 // slow motion

/**
 * Background playlist. Every clip is stretched to fill the same box
 * (absolute inset-0 + object-cover), so all of them render at an identical size
 * regardless of their source resolution. Clips play in slow motion and crossfade.
 */
export default function HeroVideo({ className = '' }: { className?: string }) {
  const refs = useRef<(HTMLVideoElement | null)[]>([])
  const [active, setActive] = useState(0)

  // Play only the active clip, restart it, and apply the slow-mo rate.
  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return
      if (i === active) {
        v.currentTime = 0
        v.playbackRate = SPEED
        v.play().catch(() => {})
      } else {
        window.setTimeout(() => v.pause(), 900) // let the fade-out finish first
      }
    })
  }, [active])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {CLIPS.map((src, i) => (
        <video
          key={src}
          ref={(el) => { refs.current[i] = el }}
          src={src}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => { e.currentTarget.playbackRate = SPEED }}
          onPlay={(e) => { e.currentTarget.playbackRate = SPEED }}
          onEnded={() => i === active && setActive((a) => (a + 1) % CLIPS.length)}
          onError={() => i === active && setActive((a) => (a + 1) % CLIPS.length)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[900ms] ease-in-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  )
}
