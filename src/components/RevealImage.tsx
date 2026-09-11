import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'

export type RevealImageVariant = 'fade-up' | 'slide-left' | 'slide-right' | 'zoom-in' | 'wipe' | 'tilt'

interface RevealImageProps {
  children: ReactNode
  variant?: RevealImageVariant
  delay?: number
  className?: string
}

const variantTweens: Record<RevealImageVariant, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
  'fade-up': {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
  },
  'slide-left': {
    from: { opacity: 0, x: -80 },
    to: { opacity: 1, x: 0, duration: 0.95, ease: 'power3.out' },
  },
  'slide-right': {
    from: { opacity: 0, x: 80 },
    to: { opacity: 1, x: 0, duration: 0.95, ease: 'power3.out' },
  },
  'zoom-in': {
    from: { opacity: 0, scale: 0.85 },
    to: { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
  },
  wipe: {
    from: { clipPath: 'inset(0% 0% 0% 100%)', opacity: 1 },
    to: { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power4.inOut' },
  },
  tilt: {
    from: { opacity: 0, scale: 0.92, rotate: -3, y: 30 },
    to: { opacity: 1, scale: 1, rotate: 0, y: 0, duration: 1, ease: 'power3.out' },
  },
}

export default function RevealImage({ children, variant = 'fade-up', delay = 0, className }: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const { from, to } = variantTweens[variant]
    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })
    return () => ctx.revert()
  }, [variant, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
