import SectionHeader from '@/components/SectionHeader'
import RevealStagger from '@/components/RevealStagger'
import { useLanguage } from '@/i18n'

export default function FutureVision() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader align="center" eyebrow={t.futureVision.eyebrow} title={t.futureVision.title} className="mb-14" />

        <RevealStagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          itemSelector=":scope > *"
          stagger={0.08}
        >
          {t.futureVision.timeline.map((item) => (
            <div
              key={item.label}
              className={`rounded-card border p-6 ${
                item.future ? 'border-dashed border-black/[0.12] bg-white/60' : 'border-brand-red/25 bg-white shadow-sm'
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">{item.label}</span>
                {item.future && (
                  <span className="rounded-full bg-brand-dark/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-dark/40">
                    {t.common.future}
                  </span>
                )}
              </div>
              <p className="text-lg font-bold leading-snug text-brand-dark">{item.title}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
