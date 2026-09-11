import ScrollTypeReveal from '@/components/ScrollTypeReveal'
import Reveal from '@/components/Reveal'
import { useLanguage } from '@/i18n'

export default function LocalBusinessPhilosophy() {
  const { t } = useLanguage()
  const equation = t.philosophy.equation

  return (
    <section className="overflow-hidden bg-brand-dark py-24 text-white sm:py-32 lg:py-40">
      <div className="container-flash">
        <span className="mb-6 block text-lg font-extrabold uppercase leading-none tracking-tight text-brand-red sm:text-xl md:text-2xl">
          {t.philosophy.eyebrow}
        </span>

        <ScrollTypeReveal
          className="mb-14 max-w-4xl"
          lineClassName="text-balance font-extrabold uppercase leading-[1.05] tracking-tight text-3xl sm:text-5xl lg:text-6xl"
          lines={[
            t.philosophy.line1,
            <span key="l2" className="text-brand-red">
              {t.philosophy.line2}
            </span>,
          ]}
        />

        <Reveal delay={0.1} className="mb-16 max-w-xl text-lg leading-relaxed text-white/60">
          {t.philosophy.body}
        </Reveal>

        <div className="mb-16 flex flex-wrap items-center gap-4 text-lg font-bold sm:text-2xl">
          {equation.map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              <span className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3">{item}</span>
              <span className="text-brand-red">{i < equation.length - 1 ? '+' : '='}</span>
            </span>
          ))}
          <span className="rounded-full bg-brand-red px-6 py-3">{t.philosophy.result}</span>
        </div>

        <Reveal delay={0.15} className="overflow-hidden rounded-card border border-white/10">
          <img
            src="/images/philosophy.png"
            alt="We're not replacing local businesses — we're making them accessible, through FLASHiT"
            loading="lazy"
            className="w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
