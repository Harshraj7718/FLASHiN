import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle2, Loader2 } from 'lucide-react'
import FormField, { inputClass } from './FormField'
import { submitProfessionalRegistration } from '@/services/leadService'
import { useLanguage } from '@/i18n'
import type { ProfessionalFormData } from '@/types'

export default function ProfessionalForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const { t } = useLanguage()
  const f = t.professionalForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfessionalFormData>()

  const onSubmit = async (data: ProfessionalFormData) => {
    const result = await submitProfessionalRegistration(data)
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
        <p className="text-sm text-brand-dark/60">{f.successBody}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <FormField label={f.name} htmlFor="name" error={errors.name?.message}>
        <input id="name" className={inputClass} {...register('name', { required: f.nameError })} />
      </FormField>

      <FormField label={t.leadForm.mobile} htmlFor="mobile" error={errors.mobile?.message}>
        <input
          id="mobile"
          type="tel"
          className={inputClass}
          {...register('mobile', {
            required: t.leadForm.mobileError,
            pattern: { value: /^[6-9]\d{9}$/, message: t.leadForm.mobileInvalid },
          })}
        />
      </FormField>

      <FormField label={f.profession} htmlFor="profession" error={errors.profession?.message}>
        <select id="profession" className={inputClass} {...register('profession', { required: true })}>
          <option value="">{f.professionSelect}</option>
          {f.professionOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </FormField>

      <FormField label={f.businessName} htmlFor="businessName">
        <input id="businessName" className={inputClass} {...register('businessName')} />
      </FormField>

      <FormField label={t.leadForm.city} htmlFor="city" error={errors.city?.message}>
        <input id="city" className={inputClass} {...register('city', { required: t.leadForm.cityError })} />
      </FormField>

      <FormField label={f.serviceArea} htmlFor="serviceArea" error={errors.serviceArea?.message}>
        <input
          id="serviceArea"
          className={inputClass}
          placeholder={f.serviceAreaPlaceholder}
          {...register('serviceArea', { required: f.serviceAreaError })}
        />
      </FormField>

      <FormField label={f.experience} htmlFor="experience" error={errors.experience?.message}>
        <input
          id="experience"
          className={inputClass}
          placeholder={f.experiencePlaceholder}
          {...register('experience', { required: f.experienceError })}
        />
      </FormField>

      <FormField label={t.leadForm.email} htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          className={inputClass}
          {...register('email', {
            required: t.leadForm.emailError,
            pattern: { value: /^\S+@\S+\.\S+$/, message: t.leadForm.emailInvalid },
          })}
        />
      </FormField>

      <FormField label={f.message} htmlFor="message" className="sm:col-span-2">
        <textarea id="message" rows={4} className={inputClass} placeholder={f.messagePlaceholder} {...register('message')} />
      </FormField>

      <p className="text-xs leading-relaxed text-brand-dark/50 sm:col-span-2">{f.payoutNote}</p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-btn bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark disabled:opacity-60 sm:col-span-2"
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
        {t.common.joinFlashitPro}
      </button>
    </form>
  )
}
