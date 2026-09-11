import { useLayoutEffect, useRef } from 'react'
import { ShoppingBag, Store, Share2, Bike } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import { useLanguage } from '@/i18n'

const nodeMeta = [
  { id: 'customer', icon: ShoppingBag, pos: 'top-0 left-1/2 -translate-x-1/2' },
  { id: 'supplier', icon: Store, pos: 'top-1/2 right-0 -translate-y-1/2' },
  { id: 'professional', icon: Share2, pos: 'bottom-0 left-1/2 -translate-x-1/2' },
  { id: 'rider', icon: Bike, pos: 'top-1/2 left-0 -translate-y-1/2' },
]

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const nodes = nodeMeta.map((meta, i) => ({ ...meta, label: t.ecosystem.roles[i].label }))

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const lines = el.querySelectorAll('.eco-line')
    const nodesEls = el.querySelectorAll('.eco-node')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { strokeDashoffset: 120 },
        {
          strokeDashoffset: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        },
      )
      gsap.fromTo(
        nodesEls,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          delay: 0.3,
          ease: 'back.out(1.6)',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <line className="eco-line" x1="50" y1="50" x2="50" y2="8" stroke="#EB0029" strokeWidth="0.6" strokeDasharray="120" strokeDashoffset="120" opacity="0.5" />
        <line className="eco-line" x1="50" y1="50" x2="92" y2="50" stroke="#EB0029" strokeWidth="0.6" strokeDasharray="120" strokeDashoffset="120" opacity="0.5" />
        <line className="eco-line" x1="50" y1="50" x2="50" y2="92" stroke="#EB0029" strokeWidth="0.6" strokeDasharray="120" strokeDashoffset="120" opacity="0.5" />
        <line className="eco-line" x1="50" y1="50" x2="8" y2="50" stroke="#EB0029" strokeWidth="0.6" strokeDasharray="120" strokeDashoffset="120" opacity="0.5" />
      </svg>

      <div className="eco-node absolute left-1/2 top-1/2 flex h-24 w-24 sm:h-28 sm:w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand-dark text-white shadow-[0_20px_50px_-15px_rgba(17,24,34,0.5)]">
        <span className="text-base sm:text-lg font-extrabold tracking-tight">
          FLASH<span className="text-brand-red">iT</span>
        </span>
      </div>

      {nodes.map(({ id, label, icon: Icon, pos }) => (
        <div key={id} className={`eco-node absolute ${pos} flex flex-col items-center gap-2`}>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-black/[0.07] bg-white shadow-sm">
            <Icon size={22} className="text-brand-red" aria-hidden="true" />
          </div>
          <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wide text-brand-dark">{label}</span>
        </div>
      ))}
    </div>
  )
}
