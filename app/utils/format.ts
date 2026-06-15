// Formatting helpers — auto-imported app-wide (Nuxt utils/).

/** Full rupiah amount with id-ID grouping, e.g. 1650000 → "1.650.000". */
export function formatPrice(value: number | 'custom'): string {
  if (value === 'custom' || typeof value !== 'number') return 'Sesuai kebutuhan'
  return new Intl.NumberFormat('id-ID').format(value)
}

/** Compact price for cards/badges, e.g. 1650000 → "Rp 1,65 jt", 480000 → "Rp 480rb". */
export function formatPriceShort(value: number | 'custom'): string {
  if (value === 'custom' || typeof value !== 'number') return 'Custom'
  if (value >= 1_000_000) {
    const jt = value / 1_000_000
    const label = Number.isInteger(jt) ? String(jt) : jt.toFixed(1).replace('.', ',')
    return `Rp ${label} jt`
  }
  if (value >= 1000) return `Rp ${Math.round(value / 1000)}rb`
  return `Rp ${value}`
}

/** ISO date → readable id-ID, e.g. "2026-07-12" → "12 Juli 2026". */
export function formatDate(iso?: string): string {
  if (!iso) return '-'
  const d = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(d.getTime())) return iso
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d)
}
