import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from './en'
import { hi } from './hi'
import type { Lang, Translations } from './types'

const STORAGE_KEY = 'flashit-lang'

const dictionaries: Record<Lang, Translations> = { en, hi }

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'hi'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'hi') return stored
  return 'hi'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore storage failures (e.g. private browsing)
    }
  }, [lang])

  const setLang = (next: Lang) => setLangState(next)
  const toggleLang = () => setLangState((prev) => (prev === 'en' ? 'hi' : 'en'))

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang, t: dictionaries[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
