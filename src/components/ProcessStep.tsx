import { ArrowRight, ArrowDown } from 'lucide-react'
import RevealStagger from './RevealStagger'
import type { ProcessStepItem } from '@/types'

interface ProcessFlowProps {
  steps: ProcessStepItem[]
  dark?: boolean
  compact?: boolean
}

export default function ProcessFlow({ steps, dark = false, compact = false }: ProcessFlowProps) {
  return (
    <RevealStagger
      className="flex flex-col gap-0 lg:flex-row lg:flex-wrap lg:items-stretch lg:gap-0"
      itemSelector=":scope > .flow-item"
      stagger={0.08}
    >
      {steps.map((item, i) => (
        <div key={item.step} className="flow-item flex items-center lg:items-stretch">
          <div
            className={`flex flex-1 flex-col gap-3 rounded-card border p-5 sm:p-6 ${compact ? 'min-w-[160px]' : 'min-w-[180px]'} ${
              dark ? 'border-white/10 bg-white/[0.04]' : 'border-black/[0.07] bg-white'
            }`}
          >
            <span className={`text-2xl font-extrabold ${dark ? 'text-brand-red' : 'text-brand-red'}`}>{item.step}</span>
            <span className={`text-sm font-bold uppercase tracking-wide ${dark ? 'text-white' : 'text-brand-dark'}`}>
              {item.title}
            </span>
            {item.description && (
              <span className={`text-xs leading-relaxed ${dark ? 'text-white/60' : 'text-brand-dark/60'}`}>{item.description}</span>
            )}
          </div>
          {i < steps.length - 1 && (
            <div className={`flex shrink-0 items-center justify-center px-2 py-3 lg:px-3 ${dark ? 'text-white/30' : 'text-brand-dark/25'}`}>
              <ArrowDown size={18} className="lg:hidden" aria-hidden="true" />
              <ArrowRight size={18} className="hidden lg:block" aria-hidden="true" />
            </div>
          )}
        </div>
      ))}
    </RevealStagger>
  )
}
