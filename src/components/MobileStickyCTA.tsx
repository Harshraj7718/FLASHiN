import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '@/i18n'
import Button from './Button'

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    const nearBottomThreshold = 120
    const onScroll = () => {
      const distanceFromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight)
      setVisible(window.scrollY > 480 && distanceFromBottom > nearBottomThreshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  if (location.pathname === '/join') return null

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-black/[0.06] bg-white/95 px-5 py-3 backdrop-blur-md transition-transform duration-300 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Button to="/join" size="md" className="w-full">
        {t.common.getStarted}
      </Button>
    </div>
  )
}
