import { QrCode, Share2, Wallet } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import Reveal from '@/components/Reveal'
import RevealImage from '@/components/RevealImage'
import RevealStagger from '@/components/RevealStagger'
import Button from '@/components/Button'
import { getProfessionalBenefits } from '@/data/benefits'
import { useLanguage } from '@/i18n'

interface ProfessionalSectionProps {
  compact?: boolean
}

export default function ProfessionalSection({ compact = false }: ProfessionalSectionProps) {
  const { t } = useLanguage()
  const professionalBenefits = getProfessionalBenefits(t)
  const benefits = compact ? professionalBenefits.slice(0, 4) : professionalBenefits

  return (
    <section id="professionals" className={compact ? 'py-14 sm:py-16 lg:py-20' : 'py-20 sm:py-24 lg:py-32'}>
      <div className="container-flash">
        <div className={`flex flex-col justify-between gap-8 lg:flex-row lg:items-end ${compact ? 'mb-8' : 'mb-10'}`}>
          <SectionHeader eyebrow={t.professional.eyebrow} title={t.professional.title} subtitle={t.professional.subtitle} />
          <Button to="/professionals" icon>
            {t.common.joinAsProfessional}
          </Button>
        </div>

        {!compact && (
          <>
            <RevealStagger className="mb-10 flex flex-wrap gap-2.5" itemSelector=":scope > *" stagger={0.04}>
              {t.professional.roles.map((r) => (
                <span key={r} className="rounded-full border border-black/[0.08] bg-white px-4 py-2 text-sm font-semibold text-brand-dark">
                  {r}
                </span>
              ))}
            </RevealStagger>

            <RevealImage variant="wipe" className="mb-12 flex justify-center">
              <img
                src="/images/professionals.png"
                alt="Your customers. Your referral. Your rewards. — the FLASHiT Pro referral app"
                loading="lazy"
                className="w-full max-w-4xl"
              />
            </RevealImage>
          </>
        )}

        <Reveal className={`rounded-card border border-brand-red/20 bg-brand-red/5 p-6 sm:p-8 ${compact ? 'mb-8' : 'mb-12'}`}>
          <p className="text-base font-semibold text-brand-dark sm:text-lg">{t.professional.badge}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <RevealStagger className="grid grid-cols-1 gap-3 sm:grid-cols-2" itemSelector=":scope > *" stagger={0.04}>
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5 rounded-btn border border-black/[0.06] bg-white p-4">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                <span className="text-sm leading-relaxed text-brand-dark/75">{b}</span>
              </div>
            ))}
          </RevealStagger>

          <Reveal delay={0.1} className="rounded-card border border-black/[0.06] bg-brand-dark p-7 text-white sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">{t.professional.cardLabel}</span>
              <QrCode size={26} className="text-brand-red" aria-hidden="true" />
            </div>
            <p className="mb-1 text-xs text-white/40">{t.professional.professionalId}</p>
            <p className="mb-5 text-2xl font-extrabold tracking-tight">PRO-10482</p>
            <p className="mb-1 text-xs text-white/40">{t.professional.referralCode}</p>
            <p className="mb-6 text-2xl font-extrabold tracking-tight text-brand-red">PRO-RJ482</p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Share2 size={15} aria-hidden="true" /> {t.professional.referralLink}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Wallet size={15} aria-hidden="true" /> {t.professional.earningsTracker}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
