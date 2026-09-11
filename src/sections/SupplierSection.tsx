import SectionHeader from '@/components/SectionHeader'
import FeatureCard from '@/components/FeatureCard'
import RevealStagger from '@/components/RevealStagger'
import Reveal from '@/components/Reveal'
import RevealImage from '@/components/RevealImage'
import Button from '@/components/Button'
import { getSupplierBenefits } from '@/data/benefits'
import { useLanguage } from '@/i18n'

interface SupplierSectionProps {
  compact?: boolean
}

export default function SupplierSection({ compact = false }: SupplierSectionProps) {
  const { t } = useLanguage()
  const supplierBenefits = getSupplierBenefits(t)
  const benefits = compact ? supplierBenefits.slice(0, 3) : supplierBenefits

  return (
    <section id="suppliers" className={`bg-brand-dark text-white ${compact ? 'py-14 sm:py-16 lg:py-20' : 'py-20 sm:py-24 lg:py-32'}`}>
      <div className="container-flash">
        <div className={`flex flex-col justify-between gap-8 lg:flex-row lg:items-end ${compact ? 'mb-8' : 'mb-12'}`}>
          <SectionHeader light eyebrow={t.supplier.eyebrow} title={t.supplier.title} subtitle={t.supplier.subtitle} />
          <Button to="/suppliers" icon>
            {t.common.becomeSupplier}
          </Button>
        </div>

        {!compact && (
          <RevealImage variant="slide-right" className="mb-12 overflow-hidden rounded-card">
            <img
              src="/images/suppliers.png"
              alt="FLASHiT connecting local suppliers with customers, professionals and delivery riders"
              loading="lazy"
              className="w-full object-cover"
            />
          </RevealImage>
        )}

        <Reveal className={`rounded-card border border-brand-red/25 bg-white/[0.04] p-6 sm:p-8 ${compact ? 'mb-8' : 'mb-12'}`} delay={0.1}>
          <p className="text-xl font-bold sm:text-2xl">
            {t.supplier.quote1} <span className="text-brand-red">{t.supplier.quote2}</span>
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" itemSelector=":scope > *" stagger={0.06}>
          {benefits.map((b) => (
            <FeatureCard key={b.title} {...b} dark />
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
