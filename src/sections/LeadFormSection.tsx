import SectionHeader from '@/components/SectionHeader'
import LeadForm from '@/components/LeadForm'
import { useLanguage } from '@/i18n'

export default function LeadFormSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader align="center" eyebrow={t.leadFormSection.eyebrow} title={t.leadFormSection.title} className="mb-12" />
        <div className="mx-auto max-w-3xl rounded-card border border-black/[0.06] bg-white p-6 sm:p-10">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
