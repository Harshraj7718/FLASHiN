import SectionHeader from '@/components/SectionHeader'
import Reveal from '@/components/Reveal'
import RevealStagger from '@/components/RevealStagger'
import { useLanguage } from '@/i18n'

export default function WhatIsFlashit() {
  const { t } = useLanguage()
  const progression = t.whatIs.progression

  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <Reveal className="mb-14 overflow-hidden rounded-card border border-black/[0.06] bg-brand-dark">
          <video
            src="/video/main.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="aspect-video w-full object-cover"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <SectionHeader eyebrow={t.whatIs.eyebrow} title={t.whatIs.title} subtitle={t.whatIs.subtitle} />

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="rounded-card border border-black/[0.06] bg-white p-6">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-dark/40">{t.whatIs.today}</span>
                <p className="mt-2 text-2xl font-extrabold text-brand-dark">{t.whatIs.build}</p>
              </Reveal>
              <Reveal delay={0.08} className="rounded-card border border-brand-red/25 bg-brand-dark p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">{t.whatIs.tomorrow}</span>
                <p className="mt-2 text-2xl font-extrabold">{t.whatIs.everything}</p>
              </Reveal>
            </div>

            <RevealStagger className="flex flex-col rounded-card border border-black/[0.06] bg-white p-6" itemSelector=":scope > .prog-item" stagger={0.08}>
              {progression.map((step, i) => (
                <div key={step} className="prog-item flex items-center gap-4 py-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-xs font-bold text-brand-red">
                    {i + 1}
                  </span>
                  <span className={`text-base font-semibold ${i === progression.length - 1 ? 'text-brand-red' : 'text-brand-dark'}`}>
                    {step}
                  </span>
                  {i < progression.length - 1 && <span className="ml-auto text-brand-dark/20">↓</span>}
                </div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
