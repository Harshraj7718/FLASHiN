import SectionHeader from '@/components/SectionHeader'
import FeatureCard from '@/components/FeatureCard'
import RevealStagger from '@/components/RevealStagger'
import Reveal from '@/components/Reveal'
import Button from '@/components/Button'
import { getSupplierBenefits } from '@/data/benefits'
import { useLanguage } from '@/i18n'

export default function SupplierSection() {
  const { t } = useLanguage()
  const supplierBenefits = getSupplierBenefits(t)

  return (
    <section id="suppliers" className="bg-brand-dark py-20 text-white sm:py-24 lg:py-32">
      <div className="container-flash">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader light eyebrow={t.supplier.eyebrow} title={t.supplier.title} subtitle={t.supplier.subtitle} />
          <Button to="/suppliers" icon>
            {t.common.becomeSupplier}
          </Button>
        </div>

        <Reveal className="mb-12 overflow-hidden rounded-card">
          <img
            src="/images/suppliers.png"
            alt="FLASHiT connecting local suppliers with customers, professionals and delivery riders"
            loading="lazy"
            className="w-full object-cover"
          />
        </Reveal>

        <Reveal className="mb-12 rounded-card border border-brand-red/25 bg-white/[0.04] p-6 sm:p-8" delay={0.1}>
          <p className="text-xl font-bold sm:text-2xl">
            {t.supplier.quote1} <span className="text-brand-red">{t.supplier.quote2}</span>
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" itemSelector=":scope > *" stagger={0.06}>
          {supplierBenefits.map((b) => (
            <FeatureCard key={b.title} {...b} dark />
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
