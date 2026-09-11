import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  dark?: boolean
}

export default function FeatureCard({ icon: Icon, title, description, dark = false }: FeatureCardProps) {
  return (
    <div
      className={`group h-full rounded-card border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? 'border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]'
          : 'border-black/[0.06] bg-white hover:border-brand-red/20 hover:shadow-[0_16px_40px_-20px_rgba(17,24,34,0.25)]'
      }`}
    >
      <div
        className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
          dark ? 'bg-brand-red/15 text-brand-red' : 'bg-brand-red/10 text-brand-red'
        }`}
      >
        <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
      </div>
      <h3 className={`mb-2 text-lg font-bold ${dark ? 'text-white' : 'text-brand-dark'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-brand-dark/60'}`}>{description}</p>
    </div>
  )
}
