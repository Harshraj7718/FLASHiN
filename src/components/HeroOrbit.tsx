import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

/**
 * Line-art orbit accent for the hero — concentric dashed rings with a
 * travelling marker. Replaces the old blurred red gradient blob with a
 * flat, stroke-only motif (no gradients, no blur) in the brand palette.
 */
export default function HeroOrbit() {
  const dotRef = useRef<SVGGElement>(null)

  useLayoutEffect(() => {
    const dot = dotRef.current
    if (!dot) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      gsap.to(dot, {
        rotation: 360,
        duration: 14,
        repeat: -1,
        ease: 'none',
        transformOrigin: '100px 100px',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 sm:-right-14 sm:-top-14 sm:h-72 sm:w-72"
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <circle cx="100" cy="100" r="94" fill="none" stroke="#111822" strokeOpacity="0.06" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="#111822" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="46" fill="none" stroke="#EB0029" strokeOpacity="0.15" strokeWidth="1" />
        <g ref={dotRef}>
          <circle cx="100" cy="6" r="4" fill="#EB0029" />
        </g>
        <circle cx="100" cy="100" r="3" fill="#111822" fillOpacity="0.3" />
      </svg>
    </div>
  )
}
