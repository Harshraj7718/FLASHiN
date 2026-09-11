import {
  Search,
  MapPin,
  Truck,
  ClipboardList,
  FileSpreadsheet,
  CreditCard,
  RotateCcw,
  Calculator,
  Globe,
  Users,
  Eye,
  PackageCheck,
  LayoutDashboard,
  Boxes,
  Wallet,
  Network,
  ShieldCheck,
  Sparkles,
  Layers,
  TrendingUp,
} from 'lucide-react'
import type { Benefit } from '@/types'
import type { Translations } from '@/i18n'

const customerIcons = [Search, MapPin, Truck, ClipboardList, FileSpreadsheet, CreditCard, RotateCcw, Calculator]
const supplierIcons = [Globe, Users, Eye, PackageCheck, FileSpreadsheet, LayoutDashboard, Boxes, Wallet, Network]
const whyFlashitIcons = [MapPin, Sparkles, Layers, ShieldCheck, Network, TrendingUp]

export function getCustomerBenefits(t: Translations): Benefit[] {
  return t.customer.benefits.map((b, i) => ({ ...b, icon: customerIcons[i] }))
}

export function getSupplierBenefits(t: Translations): Benefit[] {
  return t.supplier.benefits.map((b, i) => ({ ...b, icon: supplierIcons[i] }))
}

export function getProfessionalBenefits(t: Translations): string[] {
  return t.professional.benefits
}

export function getWhyFlashitCards(t: Translations): Benefit[] {
  return t.whyFlashit.cards.map((c, i) => ({ ...c, icon: whyFlashitIcons[i] }))
}

export function getTrustPoints(t: Translations): string[] {
  return t.trust.points
}
