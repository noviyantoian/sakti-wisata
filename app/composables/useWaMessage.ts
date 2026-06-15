/**
 * Builds the WhatsApp booking message and opens the wa.me deep link.
 * formatPrice/formatDate are auto-imported from app/utils.
 */
export const useWaMessage = () => {
  const { state } = useBooking()
  const config = useAppConfig()

  const buildMessage = (): string => {
    const s = state.value
    const priceLine =
      s.packagePrice === 'custom'
        ? 'Sesuai kebutuhan (mohon penawaran)'
        : `Rp ${formatPrice(s.packagePrice)} / ${s.packagePricePer}`

    return [
      '🌺 *PEMESANAN WISATA BALI — SAKTIWISATA*',
      '——————————————',
      `📦 Paket: ${s.packageName || '-'}`,
      `⏱️ Durasi: ${s.packageDuration || '-'}`,
      `👥 Peserta: ${s.pax || '-'}`,
      `📅 Tanggal: ${formatDate(s.departureDate)}`,
      `💰 Estimasi: ${priceLine}`,
      '——————————————',
      `👤 Nama: ${s.name || '-'}`,
      `📱 WhatsApp: ${s.whatsapp || '-'}`,
      `✉️ Email: ${s.email || '-'}`,
      `🏙️ Kota asal: ${s.city || '-'}`,
      '📝 Permintaan khusus:',
      `${s.notes || '-'}`,
      `📣 Tahu SaktiWisata dari: ${s.referralSource || '-'}`,
      '——————————————',
      'Halo tim SaktiWisata! 👋 Aku tertarik dengan paket di atas. Tolong bantu cek ketersediaan tanggal & info DP-nya ya. Makasih banyak! 🙏',
    ].join('\n')
  }

  const waLink = (): string =>
    `https://wa.me/${config.waNumber}?text=${encodeURIComponent(buildMessage())}`

  const send = () => {
    if (import.meta.client) {
      window.open(waLink(), '_blank', 'noopener,noreferrer')
    }
  }

  return { buildMessage, waLink, send }
}
