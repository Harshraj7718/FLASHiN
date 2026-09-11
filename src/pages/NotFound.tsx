import Button from '@/components/Button'
import { useLanguage } from '@/i18n'

export default function NotFound() {
  const { t } = useLanguage()
  const nf = t.pages.notFound

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red">{nf.code}</span>
      <h1 className="text-4xl font-extrabold text-brand-dark">{nf.title}</h1>
      <p className="max-w-sm text-brand-dark/60">{nf.subtitle}</p>
      <Button to="/" icon>
        {t.common.backToHome}
      </Button>
    </section>
  )
}
