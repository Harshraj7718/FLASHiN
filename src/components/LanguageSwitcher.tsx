import { useLanguage } from '@/i18n'

interface LanguageSwitcherProps {
  dark?: boolean
  className?: string
}

export default function LanguageSwitcher({ dark = false, className = '' }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Select language"
      className={`inline-flex items-center rounded-full p-0.5 text-xs font-bold ${
        dark ? 'bg-white/10' : 'bg-black/[0.06]'
      } ${className}`}
    >
      {(['en', 'hi'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1.5 uppercase tracking-wide transition-colors ${
            lang === code
              ? 'bg-brand-red text-white'
              : dark
                ? 'text-white/60 hover:text-white'
                : 'text-brand-dark/50 hover:text-brand-dark'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
