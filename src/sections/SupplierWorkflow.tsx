import { useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import ProcessFlow from '@/components/ProcessStep'
import { getSupplierWorkflow, getSupplierBulkWorkflow } from '@/data/workflows'
import { useLanguage } from '@/i18n'

export default function SupplierWorkflow() {
  const [tab, setTab] = useState<'standard' | 'bulk'>('standard')
  const { t } = useLanguage()
  const supplierWorkflow = getSupplierWorkflow(t)
  const supplierBulkWorkflow = getSupplierBulkWorkflow(t)

  return (
    <section id="workflow" className="bg-brand-dark pb-20 text-white sm:pb-24 lg:pb-32">
      <div className="container-flash">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader light eyebrow={t.supplierWorkflow.eyebrow} title={t.supplierWorkflow.title} />
          <div className="inline-flex w-fit rounded-full bg-white/10 p-1">
            {(['standard', 'bulk'] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  tab === key ? 'bg-brand-red text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {key === 'standard' ? t.supplierWorkflow.tabStandard : t.supplierWorkflow.tabBulk}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto pb-2">
          <ProcessFlow dark steps={tab === 'standard' ? supplierWorkflow : supplierBulkWorkflow} />
        </div>
      </div>
    </section>
  )
}
