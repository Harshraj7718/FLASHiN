import PageHero from '@/components/PageHero'
import Button from '@/components/Button'
import SectionHeader from '@/components/SectionHeader'
import SupplierForm from '@/components/SupplierForm'
import SupplierSection from '@/sections/SupplierSection'
import SupplierWorkflow from '@/sections/SupplierWorkflow'
import { useLanguage } from '@/i18n'

export default function Suppliers() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t.pages.suppliers.eyebrow}
        title={t.pages.suppliers.title}
        subtitle={t.pages.suppliers.subtitle}
        actions={
          <Button href="#apply" icon>
            {t.common.becomeSupplier}
          </Button>
        }
      />
      <SupplierSection />
      <SupplierWorkflow />
      <section id="apply" className="py-20 sm:py-24 lg:py-32">
        <div className="container-flash">
          <SectionHeader align="center" eyebrow={t.pages.suppliers.applyEyebrow} title={t.pages.suppliers.applyTitle} className="mb-12" />
          <div className="mx-auto max-w-3xl rounded-card border border-black/[0.06] bg-white p-6 sm:p-10">
            <SupplierForm />
          </div>
        </div>
      </section>
    </>
  )
}
