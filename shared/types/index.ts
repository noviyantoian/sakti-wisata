// ─── Shared domain types (PRD §4) ─────────────────────────────────────────

export interface ItineraryDay {
  label: string // "Hari 1" atau "06.30"
  title: string
  description: string
}

export type PackageType = 'open_trip' | 'private_trip' | 'private_luxury'
export type PackageCategoryKey =
  | 'spiritual'
  | 'petualangan'
  | 'luxury'
  | 'day_trip'
  | 'honeymoon'
export type PriceUnit = 'orang' | 'pasangan'

export interface SeoMetaData {
  title: string
  description: string
  ogImage: string
}

export interface TourPackage {
  id: string
  slug: string
  name: string
  tagline: string
  type: PackageType
  category: PackageCategoryKey
  duration: string
  maxPax: string
  pricePerPerson: number
  pricePer: PriceUnit
  priceNote: string
  image: string // /images/paket/<slug>.jpg
  highlights: string[] // 3–4 ringkas untuk kartu
  isFeatured: boolean
  itinerary: ItineraryDay[]
  includes: string[]
  excludes: string[]
  notes: string
  relatedPackages: string[]
  relatedDestinations: string[]
  seo: SeoMetaData
}

export interface Attraction {
  icon: string // key ikon SVG (lihat AppIcon.vue)
  name: string
  description: string
}

export interface TravelTip {
  icon: string
  title: string
  content: string
}

export interface Destination {
  id: string
  slug: string
  name: string
  subtitle: string
  tags: string[]
  image: string // /images/destinasi/<slug>.jpg
  heroGradientClass: string // overlay gradient di atas foto hero
  intro: string
  bestTime: string
  idealDuration: string
  distanceFromKuta: string
  attractions: Attraction[]
  travelTips: TravelTip[]
  relatedPackages: string[]
  seo: SeoMetaData
}

export interface BookingState {
  packageId: string
  packageName: string
  packagePrice: number | 'custom'
  packagePricePer: PriceUnit
  packageDuration: string
  pax: string
  departureDate: string // ISO date 'YYYY-MM-DD' dari <input type="date">
  name: string
  whatsapp: string
  email?: string
  city: string
  notes?: string
  referralSource?: string
}
