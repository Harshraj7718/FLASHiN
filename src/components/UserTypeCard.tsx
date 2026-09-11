import type { LucideIcon } from 'lucide-react'

interface UserTypeCardProps {
  icon: LucideIcon
  label: string
  tagline: string
  active?: boolean
  onClick?: () => void
}

export default function UserTypeCard({ icon: Icon, label, tagline, active = false, onClick }: UserTypeCardProps) {
  const interactive = typeof onClick === 'function'
  const Comp = interactive ? 'button' : 'div'

  return (
    <Comp
      {...(interactive ? { onClick, type: 'button' as const } : {})}
      className={`w-full rounded-card border p-6 text-left transition-all duration-300 ${
        active
          ? 'border-brand-red bg-brand-dark text-white shadow-[0_18px_44px_-20px_rgba(235,0,41,0.45)]'
          : 'border-black/[0.07] bg-white text-brand-dark hover:border-brand-red/30'
      } ${interactive ? 'cursor-pointer' : ''}`}
    >
      <div
        className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
          active ? 'bg-brand-red text-white' : 'bg-brand-red/10 text-brand-red'
        }`}
      >
        <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
      </div>
      <h3 className="mb-1 text-lg font-bold uppercase tracking-wide">{label}</h3>
      <p className={`text-sm leading-relaxed ${active ? 'text-white/70' : 'text-brand-dark/60'}`}>{tagline}</p>
    </Comp>
  )
}
