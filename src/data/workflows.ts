import { ShoppingBag, Store, Share2, Bike } from 'lucide-react'
import type { EcosystemRole, ProcessStepItem } from '@/types'
import type { Translations } from '@/i18n'

const roleIcons = [ShoppingBag, Store, Share2, Bike]

function numbered(titles: string[]): ProcessStepItem[] {
  return titles.map((title, i) => ({ step: String(i + 1).padStart(2, '0'), title }))
}

export function getCustomerJourney(t: Translations): ProcessStepItem[] {
  return numbered(t.customerJourney.standardSteps)
}

export function getBulkCustomerJourney(t: Translations): ProcessStepItem[] {
  return numbered(t.customerJourney.bulkSteps)
}

export function getSupplierWorkflow(t: Translations): ProcessStepItem[] {
  return numbered(t.supplierWorkflow.standardSteps)
}

export function getSupplierBulkWorkflow(t: Translations): ProcessStepItem[] {
  return numbered(t.supplierWorkflow.bulkSteps)
}

export function getReferralFlow(t: Translations): ProcessStepItem[] {
  return numbered(t.referralFlow.steps)
}

export function getBulkOrderWorkflow(t: Translations): ProcessStepItem[] {
  return numbered(t.bulkOrder.steps)
}

export function getEcosystemRoles(t: Translations): EcosystemRole[] {
  const ids: EcosystemRole['id'][] = ['customer', 'supplier', 'professional', 'rider']
  return t.ecosystem.roles.map((role, i) => ({
    id: ids[i],
    label: role.label,
    tagline: role.tagline,
    flow: role.flow,
    icon: roleIcons[i],
  }))
}
