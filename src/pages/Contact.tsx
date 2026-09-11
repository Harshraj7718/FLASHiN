import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '@/components/PageHero'
import LeadForm from '@/components/LeadForm'
import Reveal from '@/components/Reveal'
import { useLanguage } from '@/i18n'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.pages.contact

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-flash grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-brand-dark">{c.email}</p>
                <p className="text-sm text-brand-dark/60">{c.emailValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-brand-dark">{c.phone}</p>
                <p className="text-sm text-brand-dark/60">{c.phoneValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-brand-dark">{c.base}</p>
                <p className="text-sm text-brand-dark/60">{c.baseValue}</p>
              </div>
            </div>
          </Reveal>

          <div className="rounded-card border border-black/[0.06] bg-white p-6 sm:p-10 lg:col-span-2">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
