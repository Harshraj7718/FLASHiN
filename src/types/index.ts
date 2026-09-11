import type { LucideIcon } from 'lucide-react'

export type UserRole = 'customer' | 'supplier' | 'professional' | 'partner' | 'other'

export interface Benefit {
  title: string
  description: string
  icon: LucideIcon
}

export interface ProcessStepItem {
  step: string
  title: string
  description?: string
}

export interface Category {
  name: string
  icon: LucideIcon
}

export interface EcosystemRole {
  id: 'customer' | 'supplier' | 'professional' | 'rider'
  label: string
  tagline: string
  flow: string[]
  icon: LucideIcon
}

export interface LeadFormData {
  fullName: string
  mobile: string
  email: string
  city: string
  role: UserRole
  message: string
}

export interface SupplierFormData {
  businessName: string
  ownerName: string
  mobile: string
  email: string
  city: string
  category: string
  yearsInBusiness: string
  gstin?: string
  productCategories: string
  deliveryCapability: string
  message: string
}

export interface ProfessionalFormData {
  name: string
  mobile: string
  profession: string
  businessName?: string
  city: string
  serviceArea: string
  experience: string
  email: string
  message: string
}
