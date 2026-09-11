import ScrollTypeReveal from '@/components/ScrollTypeReveal'
import Reveal from '@/components/Reveal'
import { useLanguage } from '@/i18n'

export default function Vision() {
  const { t } = useLanguage()
  const [w1, w2, w3] = t.vision.bigWords

  return (
    <section id="vision" className="overflow-hidden bg-brand-dark py-24 text-white sm:py-32 lg:py-40">
      <div className="container-flash grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="mb-4 block text-lg font-extrabold uppercase leading-none tracking-tight text-brand-red sm:text-xl md:text-2xl">
            {t.vision.eyebrow}
          </span>
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-white/65">{t.vision.text}</p>
          </Reveal>
        </div>

        <ScrollTypeReveal
          className="text-right lg:text-right"
          lineClassName="font-extrabold uppercase leading-[0.95] tracking-tight text-5xl sm:text-7xl lg:text-8xl"
          lines={[w1, w2, <span key="w3" className="text-brand-red">{w3}</span>]}
        />
      </div>
    </section>
  )
}
