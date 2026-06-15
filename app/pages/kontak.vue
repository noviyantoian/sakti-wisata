<script setup lang="ts">
const app = useAppConfig()

const name = ref('')
const message = ref('')

const waHref = `https://wa.me/${app.waNumber}`
const canSend = computed(() => name.value.trim() && message.value.trim())

const sendInquiry = () => {
  const text = `Halo SaktiWisata! 🌺\nNama: ${name.value}\nPesan: ${message.value}`
  if (import.meta.client) {
    window.open(`https://wa.me/${app.waNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }
}

const channels = [
  { icon: 'whatsapp', label: 'WhatsApp', value: `+${app.waNumber}`, href: waHref, note: 'Respons tercepat — biasanya dalam 1 jam (jam kerja).' },
  { icon: 'mail', label: 'Email', value: app.email, href: `mailto:${app.email}`, note: 'Untuk pertanyaan rinci atau permintaan korporat.' },
  { icon: 'instagram', label: 'Instagram', value: `@${app.instagram}`, href: `https://instagram.com/${app.instagram}`, note: 'Intip dokumentasi trip & inspirasi terbaru.' },
]

useSeoMeta({
  title: 'Kontak — SaktiWisata Bali',
  description:
    'Hubungi SaktiWisata via WhatsApp, email, atau Instagram. Konsultasi gratis untuk paket wisata Bali — kami balas cepat oleh tim lokal.',
  ogImage: '/images/destinasi/seminyak.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="grain relative bg-deep px-4 pb-16 pt-28 text-rice sm:px-6 lg:pt-36">
      <div class="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" class="text-sm text-rice/55">
          <ol class="flex items-center gap-2">
            <li><NuxtLink to="/" class="hover:text-gold">Beranda</NuxtLink></li>
            <li aria-hidden="true">/</li>
            <li class="text-gold">Kontak</li>
          </ol>
        </nav>
        <p class="eyebrow mt-6 text-gold">Mari Terhubung</p>
        <h1 class="mt-2 max-w-3xl font-display text-5xl font-bold leading-tight lg:text-6xl">
          Ada pertanyaan? Kami senang membantu.
        </h1>
        <p class="mt-4 max-w-2xl text-rice/70">
          Pilih cara yang paling nyaman buat kamu. Tim lokal kami siap merespons dengan cepat dan ramah.
        </p>
      </div>
    </section>

    <!-- Channels + form -->
    <section class="bg-white py-16 lg:py-20">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <!-- Channels -->
        <div class="space-y-4">
          <a
            v-for="c in channels"
            :key="c.label"
            :href="c.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-start gap-4 border border-rice-2 bg-white p-6 transition-colors duration-200 hover:border-gold"
          >
            <span class="grid h-12 w-12 shrink-0 place-items-center bg-rice text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-deep">
              <AppIcon :name="c.icon" class="h-6 w-6" />
            </span>
            <div>
              <p class="text-xs uppercase tracking-wide text-deep/50">{{ c.label }}</p>
              <p class="font-display text-xl font-bold text-deep">{{ c.value }}</p>
              <p class="mt-1 text-sm text-deep/60">{{ c.note }}</p>
            </div>
            <AppIcon name="arrowUpRight" class="ml-auto h-5 w-5 text-deep/30 transition-colors group-hover:text-rust" />
          </a>

          <div class="flex items-start gap-4 border border-rice-2 bg-rice p-6">
            <span class="grid h-12 w-12 shrink-0 place-items-center bg-white text-gold">
              <AppIcon name="clock" class="h-6 w-6" />
            </span>
            <div>
              <p class="text-xs uppercase tracking-wide text-deep/50">Jam Operasional</p>
              <p class="font-display text-xl font-bold text-deep">Setiap hari, 08.00–21.00 WITA</p>
              <p class="mt-1 text-sm text-deep/60">Denpasar, Bali · melayani seluruh Indonesia.</p>
            </div>
          </div>
        </div>

        <!-- Quick inquiry -->
        <div class="bg-deep-2 p-6 text-rice sm:p-8">
          <p class="eyebrow text-gold">Pesan Cepat</p>
          <h2 class="mt-2 font-display text-2xl font-bold">Tinggalkan pesan</h2>
          <p class="mt-2 text-sm text-rice/65">Isi singkat, lalu kirim langsung ke WhatsApp kami.</p>
          <form class="mt-6 space-y-4" @submit.prevent="sendInquiry">
            <div>
              <label for="ct-name" class="mb-1.5 block text-sm font-medium text-rice/80">Nama</label>
              <input
                id="ct-name"
                v-model="name"
                type="text"
                placeholder="Nama kamu"
                class="w-full border border-rice/15 bg-deep px-4 py-3 text-rice placeholder:text-rice/35 outline-none transition-colors duration-200 focus:border-gold"
              />
            </div>
            <div>
              <label for="ct-msg" class="mb-1.5 block text-sm font-medium text-rice/80">Pesan</label>
              <textarea
                id="ct-msg"
                v-model="message"
                rows="4"
                placeholder="Mau tanya paket apa, tanggal, jumlah orang…"
                class="w-full border border-rice/15 bg-deep px-4 py-3 text-rice placeholder:text-rice/35 outline-none transition-colors duration-200 focus:border-gold"
              />
            </div>
            <button
              type="submit"
              :disabled="!canSend"
              class="flex w-full cursor-pointer items-center justify-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <AppIcon name="whatsapp" class="h-5 w-5" /> Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
