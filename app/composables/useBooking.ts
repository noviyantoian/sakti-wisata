import type { BookingState, TourPackage } from '~~/shared/types'

const initialState = (): BookingState => ({
  packageId: '',
  packageName: '',
  packagePrice: 0,
  packagePricePer: 'orang',
  packageDuration: '',
  pax: '',
  departureDate: '',
  name: '',
  whatsapp: '',
  email: '',
  city: '',
  notes: '',
  referralSource: '',
})

/**
 * Booking state + step machine. SSR-safe via useState (auto-imported).
 * All mutations return a fresh object (immutable pattern).
 */
export const useBooking = () => {
  const state = useState<BookingState>('booking', initialState)
  const step = useState<1 | 2 | 3>('bookingStep', () => 1)

  const prefillFromPackage = (pkg: TourPackage) => {
    state.value = {
      ...state.value,
      packageId: pkg.id,
      packageName: pkg.name,
      packagePrice: pkg.pricePerPerson,
      packagePricePer: pkg.pricePer,
      packageDuration: pkg.duration,
    }
  }

  const setCustomEnquiry = () => {
    state.value = {
      ...state.value,
      packageId: 'custom',
      packageName: 'Konsultasi / Custom Trip',
      packagePrice: 'custom',
      packagePricePer: 'orang',
      packageDuration: 'Fleksibel',
    }
  }

  const goTo = (target: 1 | 2 | 3) => {
    step.value = target
  }
  const next = () => {
    if (step.value < 3) step.value = (step.value + 1) as 1 | 2 | 3
  }
  const prev = () => {
    if (step.value > 1) step.value = (step.value - 1) as 1 | 2 | 3
  }
  const reset = () => {
    state.value = initialState()
    step.value = 1
  }

  return { state, step, prefillFromPackage, setCustomEnquiry, goTo, next, prev, reset }
}
