import { Link } from 'react-router-dom'
import { useLanguage } from '@/i18n'
import type { Translations } from '@/i18n'
import Reveal from './Reveal'
import { LinkedInIcon, InstagramIcon, YouTubeIcon, XIcon } from './SocialIcons'

function getColumns(t: Translations) {
  return [
    {
      title: t.footer.company,
      links: [
        { label: t.footer.companyLinks.about, to: '/about' },
        { label: t.footer.companyLinks.vision, to: '/about#vision' },
        { label: t.footer.companyLinks.mission, to: '/about#mission' },
        { label: t.footer.companyLinks.contact, to: '/contact' },
      ],
    },
    {
      title: t.footer.forCustomers,
      links: [
        { label: t.footer.forCustomersLinks.howItWorks, to: '/how-it-works' },
        { label: t.footer.forCustomersLinks.bulkOrders, to: '/bulk-orders' },
        { label: t.footer.forCustomersLinks.customerApp, to: '/customer' },
        { label: t.footer.forCustomersLinks.support, to: '/contact' },
      ],
    },
    {
      title: t.footer.forSuppliers,
      links: [
        { label: t.footer.forSuppliersLinks.become, to: '/suppliers' },
        { label: t.footer.forSuppliersLinks.benefits, to: '/suppliers#benefits' },
        { label: t.footer.forSuppliersLinks.process, to: '/suppliers#workflow' },
      ],
    },
    {
      title: t.footer.forProfessionals,
      links: [
        { label: t.footer.forProfessionalsLinks.join, to: '/professionals' },
        { label: t.footer.forProfessionalsLinks.referral, to: '/professionals#referral' },
        { label: t.footer.forProfessionalsLinks.benefits, to: '/professionals#benefits' },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.legalLinks.privacy, to: '/legal/privacy' },
        { label: t.footer.legalLinks.terms, to: '/legal/terms' },
        { label: t.footer.legalLinks.refund, to: '/legal/refund' },
      ],
    },
  ]
}

const socials = [
  { label: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com' },
  { label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { label: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com' },
  { label: 'X', icon: XIcon, href: 'https://x.com' },
]

export default function Footer() {
  const { t } = useLanguage()
  const columns = getColumns(t)

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-flash py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <Link to="/" className="text-2xl font-extrabold tracking-tight">
              FLASH<span className="text-brand-red">iT</span>
            </Link>
            <p className="text-sm font-medium text-white/60">{t.footer.tagline}</p>
            <div className="mt-2 flex items-center gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-red hover:text-brand-red"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">{col.title}</h4>
              {col.links.map((link) => (
                <Link key={link.label} to={link.to} className="text-sm text-white/70 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.bottomNote}</span>
        </div>
      </div>

      <Reveal y={40}>
        <div className="select-none overflow-hidden pb-2 text-center" aria-hidden="true">
          <span
            className="block font-extrabold uppercase leading-[0.8] tracking-tighter text-white/[0.06]"
            style={{ fontSize: 'clamp(4.5rem, 17vw, 14rem)' }}
          >
            FLASH<span className="text-brand-red/10">iT</span>
          </span>
        </div>
      </Reveal>
    </footer>
  )
}
