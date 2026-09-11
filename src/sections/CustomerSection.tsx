import SectionHeader from '@/components/SectionHeader'
import FeatureCard from '@/components/FeatureCard'
import RevealStagger from '@/components/RevealStagger'
import Reveal from '@/components/Reveal'
import Button from '@/components/Button'
import { getCustomerBenefits } from '@/data/benefits'
import { getProductCategories } from '@/data/categories'
import { useLanguage } from '@/i18n'

export default function CustomerSection() {
  const { t } = useLanguage()
  const customerBenefits = getCustomerBenefits(t)
  const productCategories = getProductCategories(t)

  return (
    <section id="customers" className="py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader eyebrow={t.customer.eyebrow} title={t.customer.title} subtitle={t.customer.subtitle} />
          <div className="flex flex-wrap gap-3">
            <Button to="/customer" icon>
              {t.common.startShopping}
            </Button>
            <Button to="/bulk-orders" variant="outline">
              {t.common.requestABulkQuote}
            </Button>
          </div>
        </div>

        <Reveal className="mb-14 overflow-hidden rounded-card">
          <img
            src="/images/customers.png"
            alt="Everything you need to build, repair and maintain — delivered from local suppliers through FLASHiT"
            loading="lazy"
            className="w-full object-cover"
          />
        </Reveal>

        <RevealStagger
          className="mb-14 flex flex-wrap gap-3"
          itemSelector=":scope > .cat-chip"
          stagger={0.05}
        >
          {productCategories.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="cat-chip inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-2 text-sm font-semibold text-brand-dark"
            >
              <Icon size={15} className="text-brand-red" aria-hidden="true" />
              {name}
            </span>
          ))}
        </RevealStagger>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" itemSelector=":scope > *" stagger={0.06}>
          {customerBenefits.map((b) => (
            <FeatureCard key={b.title} {...b} />
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
