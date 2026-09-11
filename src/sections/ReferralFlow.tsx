import SectionHeader from '@/components/SectionHeader'
import ProcessFlow from '@/components/ProcessStep'
import Reveal from '@/components/Reveal'
import { getReferralFlow } from '@/data/workflows'
import { useLanguage } from '@/i18n'

export default function ReferralFlow() {
  const { t } = useLanguage()
  const referralFlow = getReferralFlow(t)

  return (
    <section id="referral" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader eyebrow={t.referralFlow.eyebrow} title={t.referralFlow.title} className="mb-10" />
        <div className="mb-8 overflow-x-auto pb-2">
          <ProcessFlow compact steps={referralFlow} />
        </div>
        <Reveal className="max-w-2xl rounded-card border border-black/[0.06] bg-brand-light p-6 text-sm leading-relaxed text-brand-dark/65">
          {t.referralFlow.disclaimer}
        </Reveal>
      </div>
    </section>
  )
}
