<script setup lang="ts">
import type { PackageCategoryKey } from '~~/shared/types'

const app = useAppConfig()
const featured = getFeaturedPackage()
const packages = getAllPackages()
const destinations = getAllDestinations()

const activeCategory = ref<PackageCategoryKey | 'all'>('all')
const filteredPackages = computed(() =>
  activeCategory.value === 'all'
    ? packages
    : packages.filter((p) => p.category === activeCategory.value),
)

const marqueeWords = [
  'Ubud', 'Seminyak', 'Uluwatu', 'Kintamani', 'Nusa Penida',
  'Tirta Empul', 'Tegalalang', 'Kelingking', 'Gunung Batur', 'Tanah Lot',
]

const whyUs = [
  { icon: 'users', title: 'Dikurasi orang lokal', desc: 'Tim kami orang Bali yang tahu spot tersembunyi, jam terbaik, dan cerita di balik tiap tempat.' },
  { icon: 'route', title: 'Itinerary fleksibel', desc: 'Mau santai atau padat, romantis atau ramai keluarga — semua bisa kami sesuaikan dengan kamu.' },
  { icon: 'shield', title: 'Aman & terpercaya', desc: 'Sopir berpengalaman, kendaraan terawat, dan partner lokal yang sudah teruji bertahun-tahun.' },
  { icon: 'tag', title: 'Harga jujur', desc: 'Tanpa biaya tersembunyi. Yang kamu lihat itu yang kamu bayar — semua dikonfirmasi di awal.' },
  { icon: 'whatsapp', title: 'Respons cepat', desc: 'Pertanyaanmu dibalas via WhatsApp dengan cepat oleh manusia, bukan bot.' },
  { icon: 'heart', title: 'Perjalanan bermakna', desc: 'Kami percaya liburan terbaik menyentuh hati — bukan sekadar daftar tempat yang dicentang.' },
]

const testimonials = [
  { name: 'Dinda & Raka', trip: 'Bali Honeymoon 7D6N', text: 'Bulan madu kami jadi sempurna. Floating breakfast-nya bikin nangis bahagia, dan tim SaktiWisata perhatian banget sama detail kecil. Terima kasih!', stars: 5 },
  { name: 'Keluarga Wijaya', trip: 'Kintamani Sunrise & Ubud', text: 'Bawa anak dan orang tua, semua happy. Sopirnya sabar, jadwalnya pas, sunrise Batur-nya juara. Pasti balik lagi pakai SaktiWisata.', stars: 5 },
  { name: 'Anisa P.', trip: 'Nusa Penida One Day Trip', text: 'Open trip-nya seru, ketemu teman baru, spot fotonya gila bagus. Worth it banget buat harga segini. Recommended!', stars: 5 },
]

useSeoMeta({
  title: 'SaktiWisata — Agensi Wisata Bali Terpercaya',
  description:
    'Wisata Bali dari Ubud spiritual hingga Uluwatu dramatis. 6 paket curated, ribuan wisatawan puas. Mulai Rp 480rb. Konsultasi gratis via WhatsApp.',
  ogTitle: 'SaktiWisata — Wisata Bali yang Dirancang dengan Jiwa',
  ogDescription:
    'Paket wisata Bali curated: Ubud, Seminyak, Uluwatu, Kintamani, Nusa Penida. Mulai Rp 480rb.',
  ogImage: '/images/hero/hero-main.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <!-- ─── Hero ─────────────────────────────────────────────── -->
    <section class="relative flex min-h-[92vh] items-center overflow-hidden" aria-labelledby="hero-heading">
      <div class="absolute inset-0 overflow-hidden">
        <NuxtImg
          src="/images/hero/hero-main.jpg"
          alt="Gerbang pura dan terasering sawah Ubud saat matahari terbit"
          width="2560"
          height="1440"
          format="webp"
          quality="88"
          preload
          loading="eager"
          fetchpriority="high"
          class="kenburns h-full w-full object-cover object-center"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-deep/92 via-deep/55 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/15 to-deep/45" />
      <div class="grain absolute inset-0 opacity-60" />
      <div class="pointer-events-none absolute -right-24 top-1/4 h-[55vh] w-[55vh] rounded-full bg-gold/10 blur-[140px]" />

      <div class="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-7">
          <p class="eyebrow text-gold">Agensi Wisata Bali · {{ app.stats.yearsLabel }}</p>
          <h1
            id="hero-heading"
            class="mt-4 font-display text-5xl font-bold leading-[1.05] text-rice sm:text-6xl lg:text-7xl"
          >
            Rasakan Bali yang<br />
            <span class="italic text-gold">sesungguhnya</span>
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-rice/80">
            Dari ritual air suci di Ubud hingga sunset dramatis di Uluwatu — kami rancang
            perjalananmu dengan jiwa, bukan template. Tinggal datang, sisanya kami yang urus.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <NuxtLink
              to="/paket"
              class="inline-flex cursor-pointer items-center gap-2 bg-gold px-7 py-3.5 text-sm font-semibold text-deep transition-colors duration-200 hover:bg-gold-light"
            >
              Lihat 6 Paket <AppIcon name="arrowRight" class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink
              to="#pesan"
              class="inline-flex items-center gap-2 border border-rice/30 px-7 py-3.5 text-sm font-medium text-rice transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              Konsultasi Gratis
            </NuxtLink>
          </div>
          <dl class="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt class="font-display text-3xl font-bold text-rice">{{ app.stats.travelers }}</dt>
              <dd class="text-sm text-rice/60">Wisatawan puas</dd>
            </div>
            <div>
              <dt class="font-display text-3xl font-bold text-rice">{{ app.stats.rating }}</dt>
              <dd class="text-sm text-rice/60">Rating rata-rata</dd>
            </div>
            <div>
              <dt class="font-display text-3xl font-bold text-rice">6</dt>
              <dd class="text-sm text-rice/60">Paket pilihan</dd>
            </div>
          </dl>
        </div>

        <!-- Featured package card -->
        <div class="lg:col-span-5">
          <NuxtLink
            :to="`/paket/${featured.slug}`"
            class="group relative block overflow-hidden border border-rice/15 bg-deep/40 backdrop-blur-sm transition-colors duration-300 hover:border-gold"
          >
            <div class="relative aspect-[4/3] overflow-hidden">
              <NuxtImg
                :src="featured.image"
                :alt="featured.name"
                width="640"
                height="480"
                sizes="(max-width: 1024px) 100vw, 460px"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span class="absolute left-4 top-4 inline-flex items-center gap-1 bg-gold px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-deep">
                <AppIcon name="star" class="h-3 w-3" /> Paket Unggulan
              </span>
            </div>
            <div class="p-6">
              <p class="eyebrow text-gold/80">{{ getCategoryLabel(featured.category) }}</p>
              <h2 class="mt-1.5 font-display text-2xl font-bold text-rice">{{ featured.name }}</h2>
              <p class="mt-2 line-clamp-2 text-sm text-rice/70">{{ featured.tagline }}</p>
              <div class="mt-4 flex items-end justify-between border-t border-rice/15 pt-4">
                <p class="font-display text-2xl font-bold text-gold">
                  {{ formatPriceShort(featured.pricePerPerson) }}
                  <span class="font-sans text-sm font-normal text-rice/55">/{{ featured.pricePer }}</span>
                </p>
                <span class="inline-flex items-center gap-1.5 text-sm font-medium text-rice transition-colors group-hover:text-gold">
                  Lihat detail <AppIcon name="arrowRight" class="h-4 w-4" />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <AppIcon name="chevronDown" class="h-6 w-6 animate-bounce text-rice/60" />
      </div>
    </section>

    <!-- ─── Marquee strip ───────────────────────────────────── -->
    <div class="overflow-hidden border-y border-rust/20 bg-gold py-4" aria-hidden="true">
      <div class="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        <template v-for="n in 2" :key="n">
          <span
            v-for="(w, i) in marqueeWords"
            :key="`${n}-${i}`"
            class="flex items-center gap-8 font-display text-xl font-semibold italic text-deep"
          >
            {{ w }} <span class="text-rust">✦</span>
          </span>
        </template>
      </div>
    </div>

    <!-- ─── Packages ────────────────────────────────────────── -->
    <section class="bg-white py-20 lg:py-28" aria-labelledby="paket-heading">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <AppReveal class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="eyebrow text-rust">Paket Pilihan</p>
            <h2 id="paket-heading" class="mt-2 max-w-xl font-display text-4xl font-bold text-deep lg:text-5xl">
              Enam cara berbeda jatuh cinta pada Bali
            </h2>
          </div>
          <NuxtLink to="/paket" class="group inline-flex items-center gap-2 text-sm font-semibold text-rust hover:text-rust-light">
            Lihat semua paket
            <AppIcon name="arrowRight" class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </NuxtLink>
        </AppReveal>

        <!-- Filter -->
        <div class="mt-8 flex flex-wrap gap-2">
          <button
            v-for="cat in PACKAGE_CATEGORIES"
            :key="cat.value"
            type="button"
            class="cursor-pointer border px-4 py-2 text-sm font-medium transition-colors duration-200"
            :class="
              activeCategory === cat.value
                ? 'border-rust bg-rust text-rice'
                : 'border-rice-2 bg-white text-deep/70 hover:border-rust hover:text-rust'
            "
            @click="activeCategory = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AppReveal v-for="(p, i) in filteredPackages" :key="p.slug" :delay="i * 60">
            <AppPackageCard :pkg="p" class="h-full" />
          </AppReveal>
        </div>
        <p v-if="!filteredPackages.length" class="mt-10 text-center text-deep/50">
          Belum ada paket di kategori ini.
        </p>
      </div>
    </section>

    <!-- ─── Destinations ────────────────────────────────────── -->
    <section class="bg-rice py-20 lg:py-28" aria-labelledby="destinasi-heading">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <AppReveal class="max-w-2xl">
          <p class="eyebrow text-rust">Destinasi</p>
          <h2 id="destinasi-heading" class="mt-2 font-display text-4xl font-bold text-deep lg:text-5xl">
            Lima wajah Bali yang wajib kamu temui
          </h2>
          <p class="mt-4 text-deep/65">
            Tiap tempat punya karakter sendiri. Arahkan kursor untuk mengintip, klik untuk panduan lengkapnya.
          </p>
        </AppReveal>

        <!-- Horizontal-expand row (desktop) -->
        <div class="mt-10 hidden gap-3 lg:flex lg:h-[30rem]">
          <AppDestinationCard
            v-for="d in destinations"
            :key="d.slug"
            :dest="d"
            class="flex-1 transition-all duration-500 ease-out hover:flex-[2.4]"
          />
        </div>
        <!-- Grid (mobile/tablet) — compact 2-col, first card full width -->
        <div class="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
          <AppReveal
            v-for="(d, i) in destinations"
            :key="d.slug"
            :class="i === 0 ? 'col-span-2' : ''"
          >
            <AppDestinationCard
              :dest="d"
              class="min-h-[14rem] sm:min-h-[20rem]"
              :class="i === 0 ? '!min-h-[17rem]' : ''"
            />
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- ─── Why us ──────────────────────────────────────────── -->
    <section class="grain relative bg-deep py-20 text-rice lg:py-28" aria-labelledby="why-heading">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
        <AppReveal class="max-w-2xl">
          <p class="eyebrow text-gold">Kenapa SaktiWisata</p>
          <h2 id="why-heading" class="mt-2 font-display text-4xl font-bold text-rice lg:text-5xl">
            Bukan sekadar paket. Sebuah perjalanan yang diurus dengan hati.
          </h2>
        </AppReveal>
        <div class="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-rice/10 bg-rice/10 lg:grid-cols-3">
          <AppReveal v-for="(f, i) in whyUs" :key="f.title" :delay="i * 50" class="bg-deep p-5 transition-colors duration-300 hover:bg-deep-2 sm:p-8">
            <span class="inline-grid h-12 w-12 place-items-center border border-gold/40 text-gold">
              <AppIcon :name="f.icon" class="h-6 w-6" />
            </span>
            <h3 class="mt-5 font-display text-xl font-bold text-rice">{{ f.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-rice/65">{{ f.desc }}</p>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- ─── Booking ─────────────────────────────────────────── -->
    <section id="pesan" class="grain relative scroll-mt-24 bg-deep-2 py-20 text-rice lg:py-28" aria-labelledby="pesan-heading">
      <div class="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <AppReveal>
          <p class="eyebrow text-gold">Mulai Sekarang</p>
          <h2 id="pesan-heading" class="mt-2 font-display text-4xl font-bold text-rice lg:text-5xl">
            Ceritakan rencanamu, kami susun sisanya
          </h2>
          <p class="mt-4 max-w-md text-rice/70">
            Isi tiga langkah singkat di samping. Pesananmu langsung terkirim ke WhatsApp kami,
            lengkap dan rapi — tim akan balas dengan ketersediaan dan info DP.
          </p>
          <ul class="mt-8 space-y-4">
            <li class="flex items-start gap-3">
              <AppIcon name="check" class="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span class="text-rice/80">Gratis konsultasi, tanpa kewajiban memesan</span>
            </li>
            <li class="flex items-start gap-3">
              <AppIcon name="check" class="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span class="text-rice/80">Bisa custom itinerary sesuai budget & tanggal</span>
            </li>
            <li class="flex items-start gap-3">
              <AppIcon name="check" class="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span class="text-rice/80">Dibalas langsung oleh tim lokal kami</span>
            </li>
          </ul>
        </AppReveal>
        <AppReveal :delay="120">
          <AppBookingForm />
        </AppReveal>
      </div>
    </section>

    <!-- ─── Testimonials ────────────────────────────────────── -->
    <section class="bg-white py-20 lg:py-28" aria-labelledby="testi-heading">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <AppReveal class="max-w-2xl">
          <p class="eyebrow text-rust">Kata Mereka</p>
          <h2 id="testi-heading" class="mt-2 font-display text-4xl font-bold text-deep lg:text-5xl">
            Cerita dari yang sudah pulang dengan senyum
          </h2>
        </AppReveal>
        <div class="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          <AppReveal v-for="(t, i) in testimonials" :key="t.name" :delay="i * 70" class="flex h-full min-w-[82%] shrink-0 snap-center flex-col border border-rice-2 bg-rice p-6 sm:p-8 md:min-w-0">
            <AppIcon name="quote" class="h-8 w-8 text-gold" />
            <div class="mt-4 flex gap-0.5 text-gold">
              <AppIcon v-for="s in t.stars" :key="s" name="star" class="h-4 w-4" />
            </div>
            <p class="mt-4 flex-1 leading-relaxed text-deep/80">“{{ t.text }}”</p>
            <div class="mt-6 border-t border-rice-2 pt-4">
              <p class="font-display text-lg font-bold text-deep">{{ t.name }}</p>
              <p class="text-sm text-rust">{{ t.trip }}</p>
            </div>
          </AppReveal>
        </div>
        <p class="mt-8 text-center text-xs text-deep/40">
          *Testimoni contoh untuk demo — akan diganti dengan ulasan asli sebelum launch.
        </p>
      </div>
    </section>
  </div>
</template>
