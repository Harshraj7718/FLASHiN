import PageHero from '@/components/PageHero'
import Button from '@/components/Button'
import SectionHeader from '@/components/SectionHeader'
import LeadForm from '@/components/LeadForm'
import BulkOrderSection from '@/sections/BulkOrderSection'
import { useLanguage } from '@/i18n'

export default function BulkOrders() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t.pages.bulkOrders.eyebrow}
        title={t.pages.bulkOrders.title}
        subtitle={t.pages.bulkOrders.subtitle}
        actions={
          <Button href="#request" icon>
            {t.common.requestBulkQuote}
          </Button>
        }
      />
      <BulkOrderSection />
      <section id="request" className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container-flash">
          <SectionHeader
            align="center"
            eyebrow={t.pages.bulkOrders.requestEyebrow}
            title={t.pages.bulkOrders.requestTitle}
            className="mb-12"
          />
          <div className="mx-auto max-w-3xl rounded-card border border-black/[0.06] bg-brand-light p-6 sm:p-10">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
