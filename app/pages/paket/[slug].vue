<script setup lang="ts">
const route = useRoute()
const app = useAppConfig()
const { prefillFromPackage } = useBooking()

// Local/static data → a computed stays reactive to the slug, so navigating
// between two package pages (same reused component) updates the content.
const pkg = computed(() => getPackageBySlug(route.params.slug as string))

if (!pkg.value) {
  throw createError({ statusCode: 404, statusMessage: 'Paket tidak ditemukan', fatal: true })
}

const related = computed(() => getRelatedPackages(pkg.value?.relatedPackages ?? []))

useSeoMeta({
  title: () => pkg.value?.seo.title,
  description: () => pkg.value?.seo.description,
  ogTitle: () => pkg.value?.name,
  ogDescription: () => pkg.value?.seo.description,
  ogImage: () => pkg.value?.seo.ogImage,
  twitterCard: 'summary_large_image',
})

if (pkg.value) {
  useSchemaOrg([
    defineBreadcrumb({
      itemListElement: [
        { name: 'Beranda', item: '/' },
        { name: 'Paket', item: '/paket' },
        { name: pkg.value.name, item: `/paket/${pkg.value.slug}` },
      ],
    }),
    defineProduct({
      name: pkg.value.name,
      description: pkg.value.tagline,
      image: pkg.value.image,
      offers: [
        { price: pkg.value.pricePerPerson, priceCurrency: 'IDR', availability: 'InStock' },
      ],
    }),
  ])
}

const relatedDestinations = computed(() => getRelatedDestinations(pkg.value?.relatedDestinations ?? []))

// Pre-fill the in-page booking form with this package (and on slug change).
watchEffect(() => {
  if (pkg.value) prefillFromPackage(pkg.value)
})

const scrollToForm = () => {
  document.getElementById('pesan')?.scrollIntoView({ behavior: 'smooth' })
}

const waQuick = computed(() => {
  const name = pkg.value?.name ?? ''
  const dur = pkg.value?.duration ?? ''
  const text = `Halo SaktiWisata! 🌺 Saya tertarik paket *${name}* (${dur}). Boleh info ketersediaan & harga? Terima kasih!`
  return `https://wa.me/${app.waNumber}?text=${encodeURIComponent(text)}`
})
</script>

<template>
  <div v-if="pkg" class="pb-20 lg:pb-0">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-deep px-4 pb-16 pt-28 text-rice sm:px-6 lg:pb-20 lg:pt-36">
      <div class="absolute inset-0 overflow-hidden">
        <NuxtImg
          :src="pkg.image"
          :alt="pkg.name"
          width="1920"
          height="1080"
          format="webp"
          quality="74"
          class="kenburns h-full w-full object-cover object-center"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/72 to-deep/35" />
      <div class="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-deep/50" />
      <div class="grain absolute inset-0 opacity-50" />
      <div class="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" class="text-sm text-rice/60">
          <ol class="flex flex-wrap items-center gap-2">
            <li><NuxtLink to="/" class="hover:text-gold">Beranda</NuxtLink></li>
            <li aria-hidden="true">/</li>
            <li><NuxtLink to="/paket" class="hover:text-gold">Paket</NuxtLink></li>
            <li aria-hidden="true">/</li>
            <li class="text-gold">{{ pkg.name }}</li>
          </ol>
        </nav>

        <div class="mt-6 flex flex-wrap items-center gap-2">
          <span class="bg-gold px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-deep">
            {{ getCategoryLabel(pkg.category) }}
          </span>
          <span class="border border-rice/30 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-rice/80">
            {{ getTypeLabel(pkg.type) }}
          </span>
        </div>

        <h1 class="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {{ pkg.name }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-rice/80">{{ pkg.tagline }}</p>

        <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <span class="inline-flex items-center gap-2"><AppIcon name="clock" class="h-5 w-5 text-gold" />{{ pkg.duration }}</span>
          <span class="inline-flex items-center gap-2"><AppIcon name="users" class="h-5 w-5 text-gold" />{{ pkg.maxPax }}</span>
          <span class="inline-flex items-center gap-2 font-display text-2xl font-bold text-gold">
            {{ formatPriceShort(pkg.pricePerPerson) }}<span class="font-sans text-sm font-normal text-rice/60">/{{ pkg.pricePer }}</span>
          </span>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            class="inline-flex cursor-pointer items-center gap-2 bg-gold px-6 py-3 text-sm font-semibold text-deep transition-colors duration-200 hover:bg-gold-light"
            @click="scrollToForm"
          >
            Pesan Paket Ini <AppIcon name="arrowRight" class="h-4 w-4" />
          </button>
          <a
            :href="waQuick"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 border border-rice/30 px-6 py-3 text-sm font-medium text-rice transition-colors duration-200 hover:border-gold hover:text-gold"
          >
            <AppIcon name="whatsapp" class="h-5 w-5" /> Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- Body -->
    <section class="bg-white py-16 lg:py-20">
      <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
        <!-- Content -->
        <div class="space-y-14 lg:col-span-2">
          <!-- Itinerary -->
          <div>
            <p class="eyebrow text-rust">Itinerary</p>
            <h2 class="mt-2 font-display text-3xl font-bold text-deep">Rencana perjalananmu</h2>
            <ol class="mt-8 space-y-10 border-l border-gold/30 pl-8">
              <li v-for="(d, i) in pkg.itinerary" :key="i" class="relative">
                <span class="absolute -left-11 top-1 grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-bold text-deep ring-4 ring-white">
                  {{ i + 1 }}
                </span>
                <div class="grid gap-5 sm:grid-cols-[1fr_15rem] sm:items-start">
                  <div>
                    <p class="eyebrow text-rust/80">{{ d.label }}</p>
                    <h3 class="mt-1 font-display text-xl font-bold text-deep">{{ d.title }}</h3>
                    <p class="mt-1.5 leading-relaxed text-deep/70">{{ d.description }}</p>
                  </div>
                  <NuxtImg
                    :src="`/images/itinerary/${pkg.slug}-d${i + 1}.jpg`"
                    :alt="`${d.title} — ${pkg.name}`"
                    width="560"
                    height="350"
                    format="webp"
                    loading="lazy"
                    class="aspect-[16/10] w-full border border-rice-2 object-cover sm:w-60"
                  />
                </div>
              </li>
            </ol>
          </div>

          <!-- Includes / Excludes -->
          <div class="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 class="flex items-center gap-2 font-display text-2xl font-bold text-deep">
                <AppIcon name="check" class="h-6 w-6 text-sage" /> Termasuk
              </h3>
              <ul class="mt-4 space-y-3">
                <li v-for="(inc, i) in pkg.includes" :key="i" class="flex items-start gap-3 text-sm text-deep/75">
                  <AppIcon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  <span>{{ inc }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="flex items-center gap-2 font-display text-2xl font-bold text-deep">
                <AppIcon name="x" class="h-6 w-6 text-rust" /> Tidak Termasuk
              </h3>
              <ul class="mt-4 space-y-3">
                <li v-for="(exc, i) in pkg.excludes" :key="i" class="flex items-start gap-3 text-sm text-deep/60">
                  <AppIcon name="x" class="mt-0.5 h-4 w-4 shrink-0 text-rust/70" />
                  <span>{{ exc }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Notes -->
          <div class="border-l-4 border-gold bg-rice p-6">
            <h3 class="flex items-center gap-2 font-display text-xl font-bold text-deep">
              <AppIcon name="info" class="h-5 w-5 text-gold" /> Catatan
            </h3>
            <p class="mt-2 leading-relaxed text-deep/75">{{ pkg.notes }}</p>
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <div class="lg:sticky lg:top-24">
            <div class="border border-rice-2">
              <div class="bg-deep p-6 text-rice">
                <p class="text-xs uppercase tracking-wide text-rice/55">Mulai dari</p>
                <p class="mt-1 font-display text-4xl font-bold text-gold">
                  {{ formatPriceShort(pkg.pricePerPerson) }}
                  <span class="font-sans text-base font-normal text-rice/55">/{{ pkg.pricePer }}</span>
                </p>
                <p class="mt-1 text-sm text-rice/55">{{ pkg.priceNote }}</p>
              </div>
              <dl class="space-y-3 p-6 text-sm">
                <div class="flex items-center justify-between gap-3">
                  <dt class="inline-flex items-center gap-2 text-deep/55"><AppIcon name="clock" class="h-4 w-4 text-gold" />Durasi</dt>
                  <dd class="font-medium text-deep">{{ pkg.duration }}</dd>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <dt class="inline-flex items-center gap-2 text-deep/55"><AppIcon name="users" class="h-4 w-4 text-gold" />Kapasitas</dt>
                  <dd class="font-medium text-deep">{{ pkg.maxPax }}</dd>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <dt class="inline-flex items-center gap-2 text-deep/55"><AppIcon name="route" class="h-4 w-4 text-gold" />Tipe</dt>
                  <dd class="font-medium text-deep">{{ getTypeLabel(pkg.type) }}</dd>
                </div>
              </dl>
              <div class="space-y-3 p-6 pt-0">
                <button
                  type="button"
                  class="flex w-full cursor-pointer items-center justify-center gap-2 bg-rust px-6 py-3 text-sm font-semibold text-rice transition-colors duration-200 hover:bg-rust-light"
                  @click="scrollToForm"
                >
                  Pesan via Form <AppIcon name="arrowRight" class="h-4 w-4" />
                </button>
                <a
                  :href="waQuick"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex w-full items-center justify-center gap-2 border border-rice-2 px-6 py-3 text-sm font-medium text-deep transition-colors duration-200 hover:border-[#25D366] hover:text-[#1da851]"
                >
                  <AppIcon name="whatsapp" class="h-5 w-5" /> Tanya via WhatsApp
                </a>
                <p class="text-center text-xs text-deep/45">Harga “mulai dari” — final dikonfirmasi via WhatsApp.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Booking (in-page, pre-filled with this package) -->
    <section id="pesan" class="grain relative scroll-mt-24 bg-deep-2 py-16 text-rice lg:py-24">
      <div class="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="eyebrow text-gold">Pesan Sekarang</p>
          <h2 class="mt-2 font-display text-4xl font-bold lg:text-5xl">
            Amankan tanggalmu untuk {{ pkg.name }}
          </h2>
          <p class="mt-4 max-w-md text-rice/70">
            Paketnya sudah terisi otomatis di formulir. Lengkapi tiga langkah singkat — pesananmu
            langsung meluncur ke WhatsApp kami, tanpa pindah halaman.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-6">
            <div>
              <p class="text-xs uppercase tracking-wide text-rice/50">Mulai dari</p>
              <p class="font-display text-3xl font-bold text-gold">
                {{ formatPriceShort(pkg.pricePerPerson) }}
                <span class="font-sans text-sm font-normal text-rice/55">/{{ pkg.pricePer }}</span>
              </p>
            </div>
            <a
              :href="waQuick"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-rice/30 px-5 py-2.5 text-sm font-medium text-rice transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              <AppIcon name="whatsapp" class="h-5 w-5" /> Chat langsung
            </a>
          </div>
        </div>
        <AppBookingForm />
      </div>
    </section>

    <!-- Destinasi dalam paket ini -->
    <section v-if="relatedDestinations.length" class="bg-white py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <p class="eyebrow text-rust">Yang Kamu Kunjungi</p>
        <h2 class="mt-2 font-display text-3xl font-bold text-deep lg:text-4xl">
          Destinasi dalam paket ini
        </h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <AppDestinationCard v-for="d in relatedDestinations" :key="d.slug" :dest="d" />
        </div>
      </div>
    </section>

    <!-- Related -->
    <section v-if="related.length" class="bg-rice py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 class="font-display text-3xl font-bold text-deep">Paket lain yang mungkin kamu suka</h2>
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AppPackageCard v-for="r in related" :key="r.slug" :pkg="r" class="h-full" />
        </div>
      </div>
    </section>

    <!-- Sticky mobile CTA (high-intent conversion) -->
    <div
      class="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-rice-2 bg-rice/95 px-4 py-3 backdrop-blur-md lg:hidden"
    >
      <div class="leading-none">
        <p class="text-[0.6rem] uppercase tracking-wide text-deep/50">Mulai dari</p>
        <p class="mt-0.5 font-display text-xl font-bold text-rust">
          {{ formatPriceShort(pkg.pricePerPerson) }}<span class="font-sans text-xs font-normal text-deep/50">/{{ pkg.pricePer }}</span>
        </p>
      </div>
      <button
        type="button"
        class="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 bg-rust px-5 py-3 text-sm font-semibold text-rice transition-colors duration-200 hover:bg-rust-light"
        @click="scrollToForm"
      >
        Pesan Sekarang <AppIcon name="arrowRight" class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>
