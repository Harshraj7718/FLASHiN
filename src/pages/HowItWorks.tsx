import PageHero from '@/components/PageHero'
import Button from '@/components/Button'
import CustomerJourney from '@/sections/CustomerJourney'
import SupplierWorkflow from '@/sections/SupplierWorkflow'
import ReferralFlow from '@/sections/ReferralFlow'
import EcosystemSection from '@/sections/EcosystemSection'
import DeliverySection from '@/sections/DeliverySection'
import { useLanguage } from '@/i18n'

export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t.pages.howItWorks.eyebrow}
        title={t.pages.howItWorks.title}
        subtitle={t.pages.howItWorks.subtitle}
        actions={
          <Button to="/join" icon>
            {t.common.getStarted}
          </Button>
        }
      />
      <EcosystemSection />
      <CustomerJourney />
      <SupplierWorkflow />
      <ReferralFlow />
      <DeliverySection />
    </>
  )
}
