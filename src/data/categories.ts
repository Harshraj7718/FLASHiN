import {
  HardHat,
  Zap,
  Droplets,
  PaintBucket,
  Wrench,
  Hammer,
  FlaskConical,
  ShowerHead,
} from 'lucide-react'
import type { Category } from '@/types'
import type { Translations } from '@/i18n'

const categoryIcons = [HardHat, Zap, Droplets, PaintBucket, Wrench, Hammer, FlaskConical, ShowerHead]

export function getProductCategories(t: Translations): Category[] {
  return t.customer.categories.map((name, i) => ({ name, icon: categoryIcons[i] }))
}

export function getBulkExamples(t: Translations): string[] {
  return t.bulkOrder.examples
}
