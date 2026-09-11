import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { primaryNav } from '@/data/nav'
import { useLanguage } from '@/i18n'
import Button from './Button'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const mobileLinks = [
    ...primaryNav.map((link) => ({ label: t.nav[link.key], to: link.to })),
    { label: t.common.contact, to: '/contact' },
    { label: t.common.joinFlashit, to: '/join' },
  ]

  return (
    <>
      {/* spacer so fixed floating nav doesn't cover page content */}
      <div className="h-[76px] sm:h-[84px]" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          className={`nova-glow-nav relative flex w-full max-w-5xl items-center justify-between overflow-hidden rounded-full border border-white/10 bg-brand-dark/95 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? 'px-4 py-2 shadow-[0_10px_50px_-14px_rgba(235,0,41,0.5)] sm:px-5' : 'px-5 py-2.5 shadow-[0_10px_40px_-18px_rgba(17,24,34,0.6)] sm:px-6'
          }`}
        >
          <span className="glow-orb glow-orb--left pointer-events-none absolute -left-8 -top-10 h-28 w-28 rounded-full bg-brand-red/50 blur-3xl" aria-hidden="true" />
          <span className="glow-orb glow-orb--right pointer-events-none absolute -right-10 -bottom-12 h-28 w-28 rounded-full bg-brand-red/35 blur-3xl" aria-hidden="true" />

          <Link to="/" className="relative z-10 text-lg font-extrabold tracking-tight text-white sm:text-xl">
            FLASH<span className="text-brand-red">iT</span>
          </Link>

          <div className="relative z-10 hidden items-center gap-7 lg:flex">
            {primaryNav.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${isActive ? 'text-brand-red' : 'text-white/70 hover:text-white'}`
                }
              >
                {t.nav[link.key]}
              </NavLink>
            ))}
          </div>

          <div className="relative z-10 hidden items-center gap-5 lg:flex">
            <Link to="/contact" className="text-sm font-semibold text-white/70 hover:text-white">
              {t.common.contact}
            </Link>
            <Link to="/join" className="text-sm font-semibold text-white/70 hover:text-white">
              {t.common.joinFlashit}
            </Link>
            <LanguageSwitcher dark />
            <Button to="/join" variant="primary" size="md">
              {t.common.getStarted}
            </Button>
          </div>

          <div className="relative z-10 flex items-center gap-3 lg:hidden">
            <LanguageSwitcher dark />
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[100] flex flex-col bg-brand-dark transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="container-flash flex items-center justify-between pt-6">
          <Link to="/" className="text-xl font-extrabold tracking-tight text-white" onClick={() => setOpen(false)}>
            FLASH<span className="text-brand-red">iT</span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white hover:border-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-1 flex-col items-start justify-center gap-1 px-8">
          {mobileLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={({ isActive }) =>
                `py-3 text-3xl font-light uppercase tracking-wide transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                } ${open ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 px-8 pb-10">
          <LanguageSwitcher dark />
          <Button to="/join" variant="primary" size="lg" className="flex-1">
            {t.common.getStarted}
          </Button>
        </div>
      </div>
    </>
  )
}
