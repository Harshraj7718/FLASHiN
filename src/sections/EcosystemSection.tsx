import { useState } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import UserTypeCard from '@/components/UserTypeCard'
import Ecosystem from '@/components/Ecosystem'
import Reveal from '@/components/Reveal'
import { getEcosystemRoles } from '@/data/workflows'
import { useLanguage } from '@/i18n'

export default function EcosystemSection() {
  const { t } = useLanguage()
  const ecosystemRoles = getEcosystemRoles(t)
  const [active, setActive] = useState(ecosystemRoles[0].id)
  const activeRole = ecosystemRoles.find((r) => r.id === active) ?? ecosystemRoles[0]

  return (
    <section id="ecosystem" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader align="center" eyebrow={t.ecosystem.eyebrow} title={t.ecosystem.title} className="mb-14" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {ecosystemRoles.map((role) => (
                <UserTypeCard
                  key={role.id}
                  icon={role.icon}
                  label={role.label}
                  tagline={role.tagline}
                  active={active === role.id}
                  onClick={() => setActive(role.id)}
                />
              ))}
            </div>

            <Reveal className="rounded-card border border-black/[0.06] bg-brand-light p-6">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.14em] text-brand-dark/40">
                {activeRole.label} {t.ecosystem.workflowLabel}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {activeRole.flow.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-dark shadow-sm">{step}</span>
                    {i < activeRole.flow.length - 1 && <ArrowRight size={15} className="text-brand-red" aria-hidden="true" />}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05} className="flex items-center gap-3 rounded-card border border-black/[0.06] bg-brand-dark p-6 text-white">
              <ShieldCheck size={22} className="shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold">{t.ecosystem.admin}</p>
                <p className="text-sm text-white/60">{t.ecosystem.adminDescription}</p>
              </div>
            </Reveal>
          </div>

          <Ecosystem />
        </div>
      </div>
    </section>
  )
}
