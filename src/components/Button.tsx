import type { ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'dark' | 'light' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: boolean
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  to?: undefined
  href?: undefined
}

interface ButtonAsLink extends CommonProps {
  to: string
  href?: undefined
}

interface ButtonAsAnchor extends CommonProps {
  href: string
  to?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const base =
  'inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-all duration-200 ease-out focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-red text-white hover:bg-brand-red-dark active:scale-[0.98] shadow-[0_6px_20px_-6px_rgba(235,0,41,0.55)]',
  dark: 'bg-brand-dark text-white hover:bg-brand-dark-soft active:scale-[0.98]',
  light: 'bg-white text-brand-dark hover:bg-brand-light-dim active:scale-[0.98]',
  outline: 'border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white active:scale-[0.98]',
  ghost: 'text-brand-dark hover:opacity-70',
}

const sizes: Record<Size, string> = {
  md: 'text-sm px-5 py-3',
  lg: 'text-base px-7 py-4',
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', icon = false, className = '', children } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
        {icon && <ArrowRight size={18} aria-hidden="true" />}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes} target={props.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
        {icon && <ArrowRight size={18} aria-hidden="true" />}
      </a>
    )
  }

  const { onClick, type = 'button', disabled } = props as ButtonAsButton
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon && <ArrowRight size={18} aria-hidden="true" />}
    </button>
  )
}
