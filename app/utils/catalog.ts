import type { Destination, PackageCategoryKey, TourPackage } from '~~/shared/types'
import { packages } from '~~/shared/data/packages'
import { destinations } from '~~/shared/data/destinations'

// All catalog accessors are auto-imported (Nuxt utils/) and used by pages.

export interface PackageCategory {
  value: PackageCategoryKey | 'all'
  label: string
}

export const PACKAGE_CATEGORIES: PackageCategory[] = [
  { value: 'all', label: 'Semua' },
  { value: 'spiritual', label: 'Spiritual' },
  { value: 'petualangan', label: 'Petualangan' },
  { value: 'day_trip', label: 'Day Trip' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'honeymoon', label: 'Honeymoon' },
]

const TYPE_LABELS: Record<TourPackage['type'], string> = {
  open_trip: 'Open Trip',
  private_trip: 'Private Trip',
  private_luxury: 'Private Luxury',
}

export const getAllPackages = (): TourPackage[] => packages
export const getAllDestinations = (): Destination[] => destinations

export const getPackageBySlug = (slug: string): TourPackage | undefined =>
  packages.find((p) => p.slug === slug)

export const getDestinationBySlug = (slug: string): Destination | undefined =>
  destinations.find((d) => d.slug === slug)

export const getFeaturedPackage = (): TourPackage =>
  packages.find((p) => p.isFeatured) ?? packages[0]

export const getRelatedPackages = (slugs: string[]): TourPackage[] =>
  slugs.map(getPackageBySlug).filter((p): p is TourPackage => Boolean(p))

export const getRelatedDestinations = (slugs: string[]): Destination[] =>
  slugs.map(getDestinationBySlug).filter((d): d is Destination => Boolean(d))

export const getCategoryLabel = (value: PackageCategoryKey): string =>
  PACKAGE_CATEGORIES.find((c) => c.value === value)?.label ?? value

export const getTypeLabel = (value: TourPackage['type']): string => TYPE_LABELS[value]
