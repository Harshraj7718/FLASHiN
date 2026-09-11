import PageHero from '@/components/PageHero'
import Button from '@/components/Button'
import SectionHeader from '@/components/SectionHeader'
import ProfessionalForm from '@/components/ProfessionalForm'
import ProfessionalSection from '@/sections/ProfessionalSection'
import ReferralFlow from '@/sections/ReferralFlow'
import { useLanguage } from '@/i18n'

export default function Professionals() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t.pages.professionals.eyebrow}
        title={t.pages.professionals.title}
        subtitle={t.pages.professionals.subtitle}
        actions={
          <Button href="#register" icon>
            {t.common.joinAsProfessional}
          </Button>
        }
      />
      <ProfessionalSection />
      <ReferralFlow />
      <section id="register" className="py-20 sm:py-24 lg:py-32">
        <div className="container-flash">
          <SectionHeader
            align="center"
            eyebrow={t.pages.professionals.registerEyebrow}
            title={t.pages.professionals.registerTitle}
            className="mb-12"
          />
          <div className="mx-auto max-w-3xl rounded-card border border-black/[0.06] bg-white p-6 sm:p-10">
            <ProfessionalForm />
          </div>
        </div>
      </section>
    </>
  )
}
