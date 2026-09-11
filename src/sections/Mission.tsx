import { Cpu, Network, Truck } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import RevealStagger from '@/components/RevealStagger'
import { useLanguage } from '@/i18n'

const icons = [Cpu, Network, Truck]

export default function Mission() {
  const { t } = useLanguage()

  return (
    <section id="mission" className="py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader
          align="center"
          eyebrow={t.mission.eyebrow}
          title={t.mission.title}
          subtitle={t.mission.subtitle}
          className="mb-14"
        />

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-3" itemSelector=":scope > *" stagger={0.1}>
          {t.mission.pillars.map(({ title, description }, i) => {
            const Icon = icons[i]
            return (
              <div key={title} className="rounded-card border border-black/[0.06] bg-white p-8 text-center">
                <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                  <Icon size={26} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-extrabold text-brand-dark">{title}</h3>
                <p className="text-sm leading-relaxed text-brand-dark/60">{description}</p>
              </div>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
