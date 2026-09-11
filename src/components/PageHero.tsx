import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  subtitle?: ReactNode
  actions?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, actions }: PageHeroProps) {
  return (
    <section className="border-b border-black/[0.06] py-16 sm:py-20 lg:py-24">
      <div className="container-flash">
        <Reveal>
          <span className="mb-4 block text-lg font-extrabold uppercase leading-none tracking-tight text-brand-red sm:text-xl md:text-2xl">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-balance max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1} className="mt-5 max-w-xl">
            <p className="text-lg leading-relaxed text-brand-dark/65">{subtitle}</p>
          </Reveal>
        )}
        {actions && (
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-4">
            {actions}
          </Reveal>
        )}
      </div>
    </section>
  )
}
