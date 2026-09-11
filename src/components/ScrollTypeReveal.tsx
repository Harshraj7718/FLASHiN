import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'

interface ScrollTypeRevealProps {
  lines: ReactNode[]
  className?: string
  lineClassName?: string
}

/**
 * Oversized, line-by-line typography that scales and sharpens into focus as the
 * viewer scrolls through it — a scroll-scrubbed camera move through type, in the
 * spirit of the reference "glyph-portal" component, rebuilt from scratch for FLASHiT.
 */
export default function ScrollTypeReveal({ lines, className = '', lineClassName = '' }: ScrollTypeRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('.stype-line')
    const ctx = gsap.context(() => {
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0.08, scale: 0.86, filter: 'blur(6px)' },
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: `top ${75 - i * 8}%`,
              end: `top ${35 - i * 8}%`,
              scrub: 0.5,
            },
          },
        )
      })
    })
    return () => ctx.revert()
  }, [lines.length])

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className={`stype-line origin-left ${lineClassName}`}>
          {line}
        </div>
      ))}
    </div>
  )
}
