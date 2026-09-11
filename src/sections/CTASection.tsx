import { ShoppingBag, Store, Share2 } from 'lucide-react'
import Reveal from '@/components/Reveal'
import RevealStagger from '@/components/RevealStagger'
import Button from '@/components/Button'
import { useLanguage } from '@/i18n'

const icons = [ShoppingBag, Store, Share2]
const targets = ['/customer', '/suppliers', '/professionals']

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-brand-red py-20 text-white sm:py-24 lg:py-28">
      <div className="container-flash">
        <Reveal className="mb-12 text-center">
          <h2 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">{t.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">{t.cta.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-3" itemSelector=":scope > *" stagger={0.08}>
          {t.cta.options.map(({ title, cta }, i) => {
            const Icon = icons[i]
            return (
              <div key={title} className="flex flex-col items-center gap-4 rounded-card bg-white/10 p-8 text-center backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-red">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <Button to={targets[i]} variant="light">
                  {cta}
                </Button>
              </div>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
