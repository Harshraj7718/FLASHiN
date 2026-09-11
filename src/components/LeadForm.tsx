import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle2, Loader2 } from 'lucide-react'
import FormField, { inputClass } from './FormField'
import { submitLead } from '@/services/leadService'
import { useLanguage } from '@/i18n'
import type { LeadFormData } from '@/types'

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const { t } = useLanguage()
  const f = t.leadForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({ defaultValues: { role: 'customer' } })

  const onSubmit = async (data: LeadFormData) => {
    const result = await submitLead(data)
    if (result.success) {
      setStatus('success')
      reset()
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-card border border-brand-red/20 bg-white p-10 text-center">
        <CheckCircle2 size={36} className="text-brand-red" aria-hidden="true" />
        <p className="text-lg font-bold text-brand-dark">{f.successTitle}</p>
        <button type="button" onClick={() => setStatus('idle')} className="text-sm font-semibold text-brand-red hover:underline">
          {t.common.submitAnotherEnquiry}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <FormField label={f.fullName} htmlFor="fullName" error={errors.fullName?.message}>
        <input id="fullName" className={inputClass} placeholder={f.fullNamePlaceholder} {...register('fullName', { required: f.fullNameError })} />
      </FormField>

      <FormField label={f.mobile} htmlFor="mobile" error={errors.mobile?.message}>
        <input
          id="mobile"
          type="tel"
          className={inputClass}
          placeholder={f.mobilePlaceholder}
          {...register('mobile', {
            required: f.mobileError,
            pattern: { value: /^[6-9]\d{9}$/, message: f.mobileInvalid },
          })}
        />
      </FormField>

      <FormField label={f.email} htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          className={inputClass}
          placeholder={f.emailPlaceholder}
          {...register('email', {
            required: f.emailError,
            pattern: { value: /^\S+@\S+\.\S+$/, message: f.emailInvalid },
          })}
        />
      </FormField>

      <FormField label={f.city} htmlFor="city" error={errors.city?.message}>
        <input id="city" className={inputClass} placeholder={f.cityPlaceholder} {...register('city', { required: f.cityError })} />
      </FormField>

      <FormField label={f.iAmA} htmlFor="role" className="sm:col-span-2" error={errors.role?.message}>
        <select id="role" className={inputClass} {...register('role', { required: true })}>
          <option value="customer">{f.roleCustomer}</option>
          <option value="supplier">{f.roleSupplier}</option>
          <option value="professional">{f.roleProfessional}</option>
          <option value="partner">{f.rolePartner}</option>
          <option value="other">{f.roleOther}</option>
        </select>
      </FormField>

      <FormField label={f.message} htmlFor="message" className="sm:col-span-2" error={errors.message?.message}>
        <textarea
          id="message"
          rows={4}
          className={inputClass}
          placeholder={f.messagePlaceholder}
          {...register('message', { required: f.messageError })}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-btn bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark disabled:opacity-60 sm:col-span-2"
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
        {t.common.sendEnquiry}
      </button>
    </form>
  )
}
