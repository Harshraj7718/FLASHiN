import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number
  className?: string
}

/**
 * Moves its content vertically at a fraction of scroll speed while its
 * container crosses the viewport — the parallax technique from the
 * reference "parallax-scrolling" component, rebuilt for FLASHiT content.
 */
export default function ParallaxLayer({ children, speed = 0.15, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    })
    return () => ctx.revert()
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
