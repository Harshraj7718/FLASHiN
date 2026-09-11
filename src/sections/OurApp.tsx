import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import Reveal from '@/components/Reveal'
import RevealStagger from '@/components/RevealStagger'
import { useLanguage } from '@/i18n'

export default function OurApp() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-flash grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader eyebrow={t.ourApp.eyebrow} title={t.ourApp.title} subtitle={t.ourApp.subtitle} />

          <RevealStagger className="mt-8 flex flex-col gap-3" itemSelector=":scope > *" stagger={0.08}>
            {t.ourApp.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-btn border border-black/[0.06] bg-brand-light px-4 py-3.5">
                <CheckCircle2 size={17} className="shrink-0 text-brand-red" aria-hidden="true" />
                <span className="text-sm font-medium text-brand-dark">{feature}</span>
              </div>
            ))}
          </RevealStagger>
        </div>

        <Reveal delay={0.1} className="overflow-hidden rounded-card border border-black/[0.06] bg-brand-dark">
          <video
            src="/video/app.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="aspect-video w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
