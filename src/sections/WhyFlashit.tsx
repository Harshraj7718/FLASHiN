import SectionHeader from '@/components/SectionHeader'
import FeatureCard from '@/components/FeatureCard'
import RevealStagger from '@/components/RevealStagger'
import { getWhyFlashitCards } from '@/data/benefits'
import { useLanguage } from '@/i18n'

export default function WhyFlashit() {
  const { t } = useLanguage()
  const whyFlashitCards = getWhyFlashitCards(t)

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader align="center" eyebrow={t.whyFlashit.eyebrow} title={t.whyFlashit.title} className="mb-14" />
        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" itemSelector=":scope > *" stagger={0.06}>
          {whyFlashitCards.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
