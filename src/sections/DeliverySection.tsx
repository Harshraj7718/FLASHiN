import { Zap, Clock, Truck } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import RevealImage from '@/components/RevealImage'
import RevealStagger from '@/components/RevealStagger'
import { useLanguage } from '@/i18n'

const icons = [Zap, Clock, Truck]

export default function DeliverySection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader
          eyebrow={t.delivery.eyebrow}
          title={t.delivery.title}
          subtitle={t.delivery.subtitle}
          className="mb-14"
        />

        <RevealImage variant="fade-up" className="mb-14 overflow-hidden rounded-card border border-black/[0.06]">
          <img
            src="/images/delivery.png"
            alt="FLASHiT delivery models — express, same-day and scheduled bulk delivery"
            loading="lazy"
            className="w-full object-cover"
          />
        </RevealImage>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-3" itemSelector=":scope > *" stagger={0.08}>
          {t.delivery.models.map(({ title, description, examples }, i) => {
            const Icon = icons[i]
            return (
              <div key={title} className="rounded-card border border-black/[0.06] bg-white p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h3 className="mb-1.5 text-lg font-bold text-brand-dark">{title}</h3>
                <p className="mb-5 text-sm text-brand-dark/60">{description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {examples.map((ex) => (
                    <span key={ex} className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand-dark/60">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
