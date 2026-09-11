import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
  className?: string
}

export default function FormField({ label, htmlFor, error, children, className = '' }: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-brand-dark">
        {label}
      </label>
      {children}
      {error && (
        <span role="alert" className="text-xs font-medium text-brand-red">
          {error}
        </span>
      )}
    </div>
  )
}

export const inputClass =
  'w-full rounded-btn border border-black/10 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-dark/35 outline-none transition-colors focus:border-brand-red'
