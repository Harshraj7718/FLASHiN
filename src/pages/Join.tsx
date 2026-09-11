import { useState } from 'react'
import { ShoppingBag, Store, Share2 } from 'lucide-react'
import PageHero from '@/components/PageHero'
import LeadForm from '@/components/LeadForm'
import SupplierForm from '@/components/SupplierForm'
import ProfessionalForm from '@/components/ProfessionalForm'
import { useLanguage } from '@/i18n'

type TabId = 'customer' | 'supplier' | 'professional'

export default function Join() {
  const [active, setActive] = useState<TabId>('customer')
  const { t } = useLanguage()
  const j = t.pages.join

  const tabs: { id: TabId; label: string; icon: typeof ShoppingBag; description: string }[] = [
    { id: 'customer', label: j.tabCustomer, icon: ShoppingBag, description: j.tabCustomerDesc },
    { id: 'supplier', label: j.tabSupplier, icon: Store, description: j.tabSupplierDesc },
    { id: 'professional', label: j.tabProfessional, icon: Share2, description: j.tabProfessionalDesc },
  ]

  return (
    <>
      <PageHero eyebrow={j.eyebrow} title={j.title} subtitle={j.subtitle} />
      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-flash">
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {tabs.map(({ id, label, icon: Icon, description }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                className={`rounded-card border p-6 text-left transition-all duration-300 ${
                  active === id
                    ? 'border-brand-red bg-brand-dark text-white shadow-[0_18px_44px_-20px_rgba(235,0,41,0.45)]'
                    : 'border-black/[0.07] bg-white text-brand-dark hover:border-brand-red/30'
                }`}
              >
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    active === id ? 'bg-brand-red text-white' : 'bg-brand-red/10 text-brand-red'
                  }`}
                >
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mb-1 text-lg font-bold">{label}</h3>
                <p className={`text-sm ${active === id ? 'text-white/70' : 'text-brand-dark/60'}`}>{description}</p>
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-3xl rounded-card border border-black/[0.06] bg-white p-6 sm:p-10">
            {active === 'customer' && <LeadForm />}
            {active === 'supplier' && <SupplierForm />}
            {active === 'professional' && <ProfessionalForm />}
          </div>
        </div>
      </section>
    </>
  )
}
