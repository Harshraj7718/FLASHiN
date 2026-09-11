import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

export function LinkedInIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YouTubeIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12c0-2.3-.2-3.7-.5-4.6a3 3 0 0 0-2.1-2.1C18 5 12 5 12 5s-6 0-7.4.3A3 3 0 0 0 2.5 7.4C2.2 8.3 2 9.7 2 12s.2 3.7.5 4.6a3 3 0 0 0 2.1 2.1C6 19 12 19 12 19s6 0 7.4-.3a3 3 0 0 0 2.1-2.1c.3-.9.5-2.3.5-4.6ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />
    </svg>
  )
}

export function XIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3 3h4.6l4 5.5L16.4 3H21l-6.7 8.3L21.3 21h-4.6l-4.4-6-5.4 6H2l7.2-8.5L3 3Z" />
    </svg>
  )
}
