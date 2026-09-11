import { useLayoutEffect, useRef } from 'react'
import { PackageSearch, Search, CheckCircle2, Store, MapPin, Bike, Home } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import { useLanguage } from '@/i18n'

export default function HeroVisual() {
  const rootRef = useRef<HTMLDivElement>(null)
  const bikeRef = useRef<HTMLSpanElement>(null)
  const { t } = useLanguage()
  const v = t.hero.visual
  const nearbySuppliers = v.supplierNames.map((name, i) => ({ name, distance: v.distances[i] }))

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const stages = gsap.utils.toArray<HTMLElement>('.stage', root)
    const dots = root.querySelectorAll('.motion-dot')
    const bike = bikeRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.out' } })

      stages.forEach((stage) => {
        tl.to(stage, { autoAlpha: 1, y: 0, duration: 0.55 })
          .to(stage, { autoAlpha: 1, duration: 1.6 })
          .to(stage, { autoAlpha: 0, y: -14, duration: 0.45 }, '+=0')
      })

      gsap.to(dots, {
        y: -8,
        opacity: 0.35,
        repeat: -1,
        yoyo: true,
        duration: 1.1,
        stagger: 0.25,
        ease: 'sine.inOut',
      })

      if (bike && !reducedMotion) {
        gsap.to(bike, {
          keyframes: [
            { x: 0, y: 0 },
            { x: 96, y: -22 },
            { x: 192, y: 0 },
          ],
          duration: 2.4,
          repeat: -1,
          repeatDelay: 0.5,
          ease: 'power1.inOut',
        })
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="relative mx-auto h-[420px] w-full max-w-[440px] sm:h-[460px]">
      {/* connecting motion line */}
      <div className="absolute left-1/2 top-6 h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-brand-red/0 via-brand-red/25 to-brand-red/0">
        <span className="motion-dot absolute left-1/2 top-1/4 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-red" />
        <span className="motion-dot absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-red" />
        <span className="motion-dot absolute left-1/2 top-3/4 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-red" />
      </div>

      {/* Stage 1: customer requirement */}
      <div className="stage invisible absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0">
        <div className="w-full max-w-[280px] rounded-card border border-black/[0.06] bg-white p-5 shadow-[0_20px_50px_-20px_rgba(17,24,34,0.25)]">
          <div className="mb-3 flex items-center gap-2 text-brand-red">
            <PackageSearch size={18} aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wide">{v.requirementLabel}</span>
          </div>
          <p className="text-lg font-bold text-brand-dark">{v.requirementText}</p>
          <p className="mt-1 text-sm text-brand-dark/50">{v.requirementSubtext}</p>
        </div>
      </div>

      {/* Stage 2: FLASHiT searching */}
      <div className="stage invisible absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-dark text-white shadow-[0_20px_50px_-20px_rgba(17,24,34,0.5)]">
          <span className="text-lg font-extrabold">
            F<span className="text-brand-red">iT</span>
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
          <Search size={14} className="animate-pulse text-brand-red" aria-hidden="true" />
          <span className="text-sm font-medium text-brand-dark/70">{v.finding}</span>
        </div>
      </div>

      {/* Stage 3: nearby suppliers found */}
      <div className="stage invisible absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0">
        <div className="w-full max-w-[280px] rounded-card border border-black/[0.06] bg-white p-5 shadow-[0_20px_50px_-20px_rgba(17,24,34,0.25)]">
          <div className="mb-3 flex items-center gap-2 text-brand-red">
            <MapPin size={16} aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wide">{v.nearbyHeading}</span>
          </div>
          <div className="flex flex-col gap-2">
            {nearbySuppliers.map((s) => (
              <div key={s.name} className="flex items-center gap-2.5 rounded-lg bg-brand-light/70 px-3 py-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-brand-red shadow-sm">
                  <Store size={13} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-brand-dark">{s.name}</span>
                <span className="ml-auto text-xs font-medium text-brand-dark/45">{s.distance}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-brand-dark/50">{v.nearbySubtext}</p>
        </div>
      </div>

      {/* Stage 4: best option selected */}
      <div className="stage invisible absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0">
        <div className="flex w-full max-w-[280px] items-center gap-3 rounded-card border border-brand-red/25 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(235,0,41,0.35)]">
          <CheckCircle2 size={22} className="shrink-0 text-brand-red" aria-hidden="true" />
          <div>
            <p className="text-sm font-bold text-brand-dark">{v.bestSelected}</p>
            <p className="text-xs text-brand-dark/50">{v.bestSelectedSub}</p>
          </div>
        </div>
      </div>

      {/* Stage 5: delivery scheduled — animated route from shop to home */}
      <div className="stage invisible absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0">
        <div className="w-full max-w-[280px] rounded-card border border-black/[0.06] bg-brand-dark p-5 text-white shadow-[0_20px_50px_-20px_rgba(17,24,34,0.5)]">
          <div className="relative mb-4 h-9 w-[224px]">
            <svg viewBox="0 0 224 44" className="absolute inset-0 h-full w-full overflow-visible" fill="none" aria-hidden="true">
              <path d="M14 30 Q 112 -14 210 30" stroke="white" strokeOpacity="0.18" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
            </svg>
            <span className="absolute left-0 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow-sm">
              <Store size={13} aria-hidden="true" />
            </span>
            <span className="absolute right-0 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow-sm">
              <Home size={13} aria-hidden="true" />
            </span>
            <span
              ref={bikeRef}
              className="absolute left-0 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_6px_16px_-4px_rgba(235,0,41,0.7)]"
            >
              <Bike size={12} aria-hidden="true" />
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 size={18} className="shrink-0 text-brand-red" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold">{v.deliveryScheduled}</p>
              <p className="text-xs text-white/50">{v.deliveryScheduledSub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
