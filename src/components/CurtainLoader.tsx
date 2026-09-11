import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { useLanguage } from '@/i18n'

const STRIP_COUNT = 8

/**
 * Rebuilt from the reference "Curtain Loader" Framer component. The original
 * is entirely Framer-runtime code (useVariantState, withFX, RichText, nested
 * Framer sub-modules) with no portable logic to lift — this reproduces the
 * same beat (curtain strips converge → hold on the brand name → open) with
 * GSAP instead.
 */
export default function CurtainLoader() {
  const [visible, setVisible] = useState(true)
  const rootRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const topStrips = root.querySelectorAll('.curtain-strip-top')
    const bottomStrips = root.querySelectorAll('.curtain-strip-bottom')
    const title = root.querySelector('.curtain-title')
    const subtitle = root.querySelector('.curtain-subtitle')

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      const timeout = setTimeout(() => setVisible(false), 400)
      return () => clearTimeout(timeout)
    }

    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        setVisible(false)
      },
    })

    tl.set(topStrips, { yPercent: -101 })
      .set(bottomStrips, { yPercent: 101 })
      .set([title, subtitle], { opacity: 0, y: 14 })
      .to(topStrips, { yPercent: 0, duration: 0.8, ease: 'power3.out', stagger: 0.05 }, 0)
      .to(bottomStrips, { yPercent: 0, duration: 0.8, ease: 'power3.out', stagger: 0.05 }, 0)
      .to(title, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.55)
      .to(subtitle, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.65)
      .to({}, { duration: 0.9 })
      .to([title, subtitle], { opacity: 0, duration: 0.3, ease: 'power1.out' })
      .to(topStrips, { yPercent: -101, duration: 0.8, ease: 'power3.inOut', stagger: 0.04 }, '-=0.05')
      .to(bottomStrips, { yPercent: 101, duration: 0.8, ease: 'power3.inOut', stagger: 0.04 }, '<')

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [])

  if (!visible) return null

  return (
    <div ref={rootRef} className="fixed inset-0 z-[9999] overflow-hidden">
      <div className="absolute inset-x-0 top-0 flex h-1/2 overflow-hidden">
        {Array.from({ length: STRIP_COUNT }).map((_, i) => (
          <div key={`t-${i}`} className="curtain-strip-top h-full flex-1 bg-brand-dark" />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-1/2 overflow-hidden">
        {Array.from({ length: STRIP_COUNT }).map((_, i) => (
          <div key={`b-${i}`} className="curtain-strip-bottom h-full flex-1 bg-brand-dark" />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        <span className="curtain-title text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          FLASH<span className="text-brand-red">iT</span>
        </span>
        <span className="curtain-subtitle text-xs font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-sm">
          {t.hero.eyebrow}
        </span>
      </div>
    </div>
  )
}
