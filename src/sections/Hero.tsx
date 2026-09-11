import { useLayoutEffect, useRef } from 'react'
import Button from '@/components/Button'
import HeroVisual from '@/components/HeroVisual'
import HeroOrbit from '@/components/HeroOrbit'
import { gsap } from '@/lib/gsap'
import { useLanguage } from '@/i18n'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } })
      tl.fromTo('.hero-eyebrow', { opacity: 0, y: 16 }, { opacity: 1, y: 0 })
        .fromTo('.hero-line', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.12 }, '-=0.5')
        .fromTo('.hero-sub', { opacity: 0, y: 16 }, { opacity: 1, y: 0 }, '-=0.4')
        .fromTo('.hero-cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, stagger: 0.08 }, '-=0.5')
        .fromTo('.hero-micro', { opacity: 0 }, { opacity: 1 }, '-=0.3')
        .fromTo('.hero-visual', { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 1 }, '-=0.9')
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-28 lg:pt-16">
      <HeroOrbit />
      <div className="container-flash relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-8">
        <div>
          <span className="hero-eyebrow mb-4 block text-lg font-extrabold uppercase leading-none tracking-tight text-brand-red sm:text-xl md:text-2xl">
            {t.hero.eyebrow}
          </span>

          <h1 className="text-balance text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-brand-dark sm:text-6xl lg:text-[4.2rem]">
            <span className="hero-line block overflow-hidden">{t.hero.line1}</span>
            <span className="hero-line block overflow-hidden">
              {t.hero.line2Pre} <span className="text-brand-red">FLASH</span>
              <span className="text-brand-red">iT</span>.
            </span>
          </h1>

          <p className="hero-sub mt-6 max-w-lg text-lg leading-relaxed text-brand-dark/65">{t.hero.sub}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/join" size="lg" icon className="hero-cta">
              {t.common.getStarted}
            </Button>
            <Button to="/how-it-works" variant="outline" size="lg" className="hero-cta">
              {t.common.exploreFlashit}
            </Button>
          </div>

          <div className="hero-micro mt-10 flex flex-col gap-1.5 border-t border-brand-dark/10 pt-6">
            <p className="text-sm font-semibold text-brand-dark">{t.hero.micro1}</p>
            <p className="text-sm text-brand-dark/50">{t.hero.micro2}</p>
          </div>
        </div>

        <div className="hero-visual">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
