import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'

interface RevealStaggerProps {
  children: ReactNode
  className?: string
  itemSelector?: string
  stagger?: number
  y?: number
}

export default function RevealStagger({
  children,
  className,
  itemSelector = ':scope > *',
  stagger = 0.1,
  y = 24,
}: RevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll(itemSelector)
    if (!items.length) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      )
    })
    return () => ctx.revert()
  }, [itemSelector, stagger, y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
