import SectionHeader from '@/components/SectionHeader'
import Stepper from '@/components/Stepper'
import Reveal from '@/components/Reveal'
import RevealStagger from '@/components/RevealStagger'
import { useLanguage } from '@/i18n'

export default function Problem() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader align="center" eyebrow={t.problem.eyebrow} title={t.problem.title} className="mb-14" />

        <Reveal className="mb-16 flex justify-center">
          <img
            src="/images/problem.png"
            alt="The old way of sourcing construction materials — too many calls, stores and steps"
            loading="lazy"
            className="w-full max-w-4xl"
          />
        </Reveal>

        <RevealStagger className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-3" itemSelector=":scope > .pain-card" stagger={0.1}>
          {t.problem.groups.map((group) => (
            <div key={group.title} className="pain-card rounded-card border border-black/[0.06] bg-brand-light p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-red">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-brand-dark/65">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealStagger>

        <div className="flex flex-col gap-5">
          <Stepper label={t.problem.oldWay} variant="old" steps={t.problem.oldWaySteps} />
          <Stepper label={t.problem.flashitWay} variant="new" steps={t.problem.flashitWaySteps} />
          <Stepper label={t.problem.forBulk} variant="new" steps={t.problem.bulkSteps} />
        </div>
      </div>
    </section>
  )
}
