import Reveal from './Reveal'

interface SectionHeaderProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left', light = false, className = '' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="text-lg font-extrabold uppercase leading-none tracking-tight text-brand-red sm:text-xl md:text-2xl">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`text-balance font-extrabold leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl ${
            light ? 'text-white' : 'text-brand-dark'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1} className={align === 'center' ? 'max-w-2xl' : 'max-w-xl'}>
          <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-brand-dark/65'}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
