import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle2, Loader2 } from 'lucide-react'
import FormField, { inputClass } from './FormField'
import { submitSupplierApplication } from '@/services/leadService'
import { useLanguage } from '@/i18n'
import type { SupplierFormData } from '@/types'

export default function SupplierForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const { t } = useLanguage()
  const f = t.supplierForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SupplierFormData>()

  const onSubmit = async (data: SupplierFormData) => {
    const result = await submitSupplierApplication(data)
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
      <FormField label={f.businessName} htmlFor="businessName" error={errors.businessName?.message}>
        <input id="businessName" className={inputClass} {...register('businessName', { required: f.businessNameError })} />
      </FormField>

      <FormField label={f.ownerName} htmlFor="ownerName" error={errors.ownerName?.message}>
        <input id="ownerName" className={inputClass} {...register('ownerName', { required: f.ownerNameError })} />
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

      <FormField label={t.leadForm.city} htmlFor="city" error={errors.city?.message}>
        <input id="city" className={inputClass} {...register('city', { required: t.leadForm.cityError })} />
      </FormField>

      <FormField label={f.category} htmlFor="category" error={errors.category?.message}>
        <input
          id="category"
          className={inputClass}
          placeholder={f.categoryPlaceholder}
          {...register('category', { required: f.categoryError })}
        />
      </FormField>

      <FormField label={f.years} htmlFor="yearsInBusiness" error={errors.yearsInBusiness?.message}>
        <input id="yearsInBusiness" className={inputClass} {...register('yearsInBusiness', { required: f.yearsError })} />
      </FormField>

      <FormField label={f.gstin} htmlFor="gstin">
        <input id="gstin" className={inputClass} {...register('gstin')} />
      </FormField>

      <FormField label={f.productCategories} htmlFor="productCategories" className="sm:col-span-2" error={errors.productCategories?.message}>
        <input id="productCategories" className={inputClass} {...register('productCategories', { required: f.productCategoriesError })} />
      </FormField>

      <FormField label={f.deliveryCapability} htmlFor="deliveryCapability" className="sm:col-span-2" error={errors.deliveryCapability?.message}>
        <select id="deliveryCapability" className={inputClass} {...register('deliveryCapability', { required: true })}>
          <option value="">{f.deliveryOptionSelect}</option>
          <option value="own-fleet">{f.deliveryOptionOwn}</option>
          <option value="flashit-delivery">{f.deliveryOptionFlashit}</option>
          <option value="both">{f.deliveryOptionBoth}</option>
          <option value="not-sure">{f.deliveryOptionUnsure}</option>
        </select>
      </FormField>

      <FormField label={f.message} htmlFor="message" className="sm:col-span-2">
        <textarea id="message" rows={4} className={inputClass} {...register('message')} />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-btn bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark disabled:opacity-60 sm:col-span-2"
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
        {t.common.applyAsSupplier}
      </button>
    </form>
  )
}
