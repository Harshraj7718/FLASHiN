import type { LeadFormData, ProfessionalFormData, SupplierFormData } from '@/types'

export interface SubmitResult {
  success: boolean
  message: string
}

const MOCK_DELAY_MS = 900

// TODO: replace with a real API/Supabase call, e.g.
// await fetch('/api/leads', { method: 'POST', body: JSON.stringify(data) })
export async function submitLead(data: LeadFormData): Promise<SubmitResult> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS))
  console.info('[leadService] general enquiry submitted', data)
  return { success: true, message: 'Thanks. Our team will get back to you shortly.' }
}

// TODO: replace with a real API/Supabase call
export async function submitSupplierApplication(data: SupplierFormData): Promise<SubmitResult> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS))
  console.info('[leadService] supplier application submitted', data)
  return { success: true, message: "Thanks. We've received your application — our supplier team will reach out shortly." }
}

// TODO: replace with a real API/Supabase call
export async function submitProfessionalRegistration(data: ProfessionalFormData): Promise<SubmitResult> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS))
  console.info('[leadService] professional registration submitted', data)
  return { success: true, message: "Thanks for joining FLASHiT Pro. We'll verify your details and follow up shortly." }
}
