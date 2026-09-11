import { useParams } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import { useLanguage } from '@/i18n'

export default function Legal() {
  const { page } = useParams<{ page: string }>()
  const { t } = useLanguage()
  const l = t.pages.legal

  const content: Record<string, { title: string; body: string[] }> = {
    privacy: { title: l.privacyTitle, body: l.privacyBody },
    terms: { title: l.termsTitle, body: l.termsBody },
    refund: { title: l.refundTitle, body: l.refundBody },
  }

  const data = content[page ?? ''] ?? { title: l.notFoundTitle, body: l.notFoundBody }

  return (
    <>
      <PageHero eyebrow={t.footer.legal} title={data.title} />
      <section className="pb-20 sm:pb-24">
        <div className="container-flash max-w-2xl">
          {data.body.map((p) => (
            <p key={p} className="mb-4 text-base leading-relaxed text-brand-dark/70">
              {p}
            </p>
          ))}
        </div>
      </section>
    </>
  )
}
