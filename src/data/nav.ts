export interface NavLink {
  key: 'customers' | 'suppliers' | 'professionals' | 'howItWorks' | 'about'
  to: string
}

export const primaryNav: NavLink[] = [
  { key: 'customers', to: '/customer' },
  { key: 'suppliers', to: '/suppliers' },
  { key: 'professionals', to: '/professionals' },
  { key: 'howItWorks', to: '/how-it-works' },
  { key: 'about', to: '/about' },
]
