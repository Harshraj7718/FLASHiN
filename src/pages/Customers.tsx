import PageHero from '@/components/PageHero'
import Button from '@/components/Button'
import CustomerSection from '@/sections/CustomerSection'
import CustomerJourney from '@/sections/CustomerJourney'
import DeliverySection from '@/sections/DeliverySection'
import CTASection from '@/sections/CTASection'
import { useLanguage } from '@/i18n'

export default function Customers() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t.pages.customers.eyebrow}
        title={t.pages.customers.title}
        subtitle={t.pages.customers.subtitle}
        actions={
          <>
            <Button to="/join" icon>
              {t.common.getStarted}
            </Button>
            <Button to="/bulk-orders" variant="outline">
              {t.common.requestABulkQuote}
            </Button>
          </>
        }
      />
      <CustomerSection />
      <CustomerJourney />
      <DeliverySection />
      <CTASection />
    </>
  )
}
