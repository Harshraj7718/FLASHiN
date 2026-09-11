import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import Reveal from './Reveal'

interface StepperProps {
  label: string
  steps: string[]
  variant: 'old' | 'new'
}

export default function Stepper({ label, steps, variant }: StepperProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const isOld = variant === 'old'

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const nodes = root.querySelectorAll('.stepper-node')

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: 'top 85%', toggleActions: 'play none none none' },
      })
      tl.fromTo('.stepper-fill-v', { scaleY: 0 }, { scaleY: 1, duration: 0.5, stagger: 0.12, ease: 'power2.inOut' }, 0)
        .fromTo('.stepper-fill-h', { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power2.inOut' }, 0)
        .fromTo(
          nodes,
          { opacity: 0, scale: 0.4, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'back.out(1.9)' },
          '-=0.7',
        )
    }, root)

    return () => ctx.revert()
  }, [steps])

  const circleClass = isOld
    ? 'border-2 border-black/10 bg-white text-brand-dark/50'
    : 'bg-brand-red text-white shadow-[0_6px_16px_-4px_rgba(235,0,41,0.6)]'
  const trackClass = isOld ? 'bg-brand-dark/10' : 'bg-white/15'
  const fillClass = isOld ? 'bg-brand-dark/30' : 'bg-brand-red'
  const labelClass = isOld ? 'text-brand-dark/55' : 'text-white/85'

  return (
    <Reveal
      className={`rounded-card border p-6 sm:p-8 ${
        isOld ? 'border-black/[0.07] bg-white/60' : 'border-brand-red/25 bg-brand-dark text-white'
      }`}
    >
      <span
        className={`mb-8 block text-lg font-extrabold uppercase leading-none tracking-tight sm:text-xl ${
          isOld ? 'text-brand-dark/40' : 'text-brand-red'
        }`}
      >
        {label}
      </span>

      <div ref={rootRef}>
        {/* Mobile: vertical stepper */}
        <ol className="flex flex-col sm:hidden">
          {steps.map((step, i) => (
            <li key={step} className="relative flex gap-4 pb-7 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  className={`absolute left-[15px] top-8 h-[calc(100%-1.75rem)] w-[2px] overflow-hidden ${trackClass}`}
                  aria-hidden="true"
                >
                  <span className={`stepper-fill-v block h-full w-full origin-top ${fillClass}`} />
                </span>
              )}
              <span
                className={`stepper-node relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${circleClass}`}
              >
                {i + 1}
              </span>
              <span className={`pt-1.5 text-sm font-semibold leading-snug ${labelClass}`}>{step}</span>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal stepper */}
        <div className="hidden overflow-x-auto pb-1 sm:block">
          <div className="relative" style={{ minWidth: `${Math.max(steps.length * 110, 320)}px` }}>
            <div className={`absolute left-0 right-0 top-4 h-[2px] ${trackClass}`} aria-hidden="true" />
            <div className={`stepper-fill-h absolute left-0 top-4 h-[2px] w-full origin-left ${fillClass}`} aria-hidden="true" />

            <div className="relative flex justify-between">
              {steps.map((step, i) => (
                <div key={step} className="stepper-node flex flex-1 flex-col items-center gap-3 px-1 text-center">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${circleClass}`}>
                    {i + 1}
                  </span>
                  <span className={`text-xs font-semibold leading-snug sm:text-sm ${labelClass}`}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
