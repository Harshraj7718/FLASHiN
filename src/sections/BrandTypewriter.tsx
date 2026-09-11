import Typewriter from '@/components/Typewriter'
import { useLanguage } from '@/i18n'

export default function BrandTypewriter() {
  const { t, lang } = useLanguage()

  return (
    <section className="border-y border-black/[0.06] bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-flash flex items-center justify-center text-center">
        <Typewriter
          key={lang}
          text={t.hero.eyebrow}
          className="text-balance font-extrabold uppercase leading-[1.05] tracking-tight text-brand-red text-[2.1rem] sm:text-5xl lg:text-6xl"
        />
      </div>
    </section>
  )
}
