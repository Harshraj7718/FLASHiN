import SectionHeader from '@/components/SectionHeader'
import RevealStagger from '@/components/RevealStagger'
import { useLanguage } from '@/i18n'

const teamMembers = [
  { name: 'Harsh', role: 'CTO', image: '/team/harsh.png' },
  { name: 'Shravan', role: 'CEO', image: '/team/shravan.jpg' },
]

export default function Team() {
  const { t } = useLanguage()

  return (
    <section className="bg-brand-dark py-20 text-white sm:py-24 lg:py-32">
      <div className="container-flash">
        <SectionHeader
          light
          align="center"
          eyebrow={t.team.eyebrow}
          title={t.team.title}
          subtitle={t.team.subtitle}
          className="mb-14"
        />

        <RevealStagger
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2"
          itemSelector=":scope > *"
          stagger={0.1}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-card border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:bg-white/[0.09]"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xl font-extrabold tracking-tight">{member.name}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-brand-red">{member.role}</p>
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
