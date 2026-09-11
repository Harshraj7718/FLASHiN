import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  className?: string
  start?: string
}

export default function Reveal({ children, delay = 0, y = 28, x = 0, className, start = 'top 88%' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, x },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.85,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        },
      )
    })
    return () => ctx.revert()
  }, [delay, y, x, start])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
