import PageHero from '@/components/PageHero'
import Team from '@/sections/Team'
import Vision from '@/sections/Vision'
import Mission from '@/sections/Mission'
import LocalBusinessPhilosophy from '@/sections/LocalBusinessPhilosophy'
import FutureVision from '@/sections/FutureVision'
import WhyFlashit from '@/sections/WhyFlashit'
import Trust from '@/sections/Trust'
import { useLanguage } from '@/i18n'

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero eyebrow={t.pages.about.eyebrow} title={t.pages.about.title} subtitle={t.pages.about.subtitle} />
      <Team />
      <Vision />
      <Mission />
      <LocalBusinessPhilosophy />
      <FutureVision />
      <WhyFlashit />
      <Trust />
    </>
  )
}
