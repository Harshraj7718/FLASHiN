import { useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import ProcessFlow from '@/components/ProcessStep'
import AnimatedPath from '@/components/AnimatedPath'
import { getCustomerJourney, getBulkCustomerJourney } from '@/data/workflows'
import { useLanguage } from '@/i18n'

export default function CustomerJourney() {
  const [tab, setTab] = useState<'standard' | 'bulk'>('standard')
  const { t } = useLanguage()
  const customerJourney = getCustomerJourney(t)
  const bulkCustomerJourney = getBulkCustomerJourney(t)

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader eyebrow={t.customerJourney.eyebrow} title={t.customerJourney.title} />
          <div className="inline-flex w-fit rounded-full bg-brand-light p-1">
            {(['standard', 'bulk'] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  tab === key ? 'bg-brand-dark text-white' : 'text-brand-dark/60 hover:text-brand-dark'
                }`}
              >
                {key === 'standard' ? t.customerJourney.tabStandard : t.customerJourney.tabBulk}
              </button>
            ))}
          </div>
        </div>

        <div className="-mb-6 h-20 sm:h-28 lg:h-36" aria-hidden="true">
          <AnimatedPath />
        </div>

        <div className="overflow-x-auto pb-2">
          <ProcessFlow steps={tab === 'standard' ? customerJourney : bulkCustomerJourney} />
        </div>
      </div>
    </section>
  )
}
