import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import RevealStagger from '@/components/RevealStagger'
import { getTrustPoints } from '@/data/benefits'
import { useLanguage } from '@/i18n'

export default function Trust() {
  const { t } = useLanguage()
  const trustPoints = getTrustPoints(t)

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader eyebrow={t.trust.eyebrow} title={t.trust.title} className="mb-12" />
        <RevealStagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" itemSelector=":scope > *" stagger={0.05}>
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-3 rounded-btn border border-black/[0.06] bg-brand-light px-4 py-3.5">
              <CheckCircle2 size={17} className="shrink-0 text-brand-red" aria-hidden="true" />
              <span className="text-sm font-medium text-brand-dark">{point}</span>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
