import SectionHeader from '@/components/SectionHeader'
import ProcessFlow from '@/components/ProcessStep'
import Reveal from '@/components/Reveal'
import RevealStagger from '@/components/RevealStagger'
import Button from '@/components/Button'
import { getBulkOrderWorkflow } from '@/data/workflows'
import { getBulkExamples } from '@/data/categories'
import { useLanguage } from '@/i18n'

export default function BulkOrderSection() {
  const { t } = useLanguage()
  const bulkOrderWorkflow = getBulkOrderWorkflow(t)
  const bulkExamples = getBulkExamples(t)

  return (
    <section id="bulk" className="py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <div className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader eyebrow={t.bulkOrder.eyebrow} title={t.bulkOrder.title} subtitle={t.bulkOrder.subtitle} />
          <Button to="/bulk-orders" icon>
            {t.common.requestBulkQuote}
          </Button>
        </div>

        <RevealStagger className="mb-12 flex flex-wrap gap-2.5" itemSelector=":scope > *" stagger={0.04}>
          {bulkExamples.map((ex) => (
            <span key={ex} className="rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-2 text-sm font-semibold text-brand-dark">
              {ex}
            </span>
          ))}
        </RevealStagger>

        <div className="mb-8 overflow-x-auto pb-2">
          <ProcessFlow compact steps={bulkOrderWorkflow} />
        </div>

        <Reveal className="max-w-2xl rounded-card border border-black/[0.06] bg-white p-6 text-sm leading-relaxed text-brand-dark/65">
          {t.bulkOrder.disclaimer}
        </Reveal>
      </div>
    </section>
  )
}
