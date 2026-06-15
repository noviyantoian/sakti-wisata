<script setup lang="ts">
import type { PackageCategoryKey } from '~~/shared/types'

const packages = getAllPackages()
const activeCategory = ref<PackageCategoryKey | 'all'>('all')
const filtered = computed(() =>
  activeCategory.value === 'all'
    ? packages
    : packages.filter((p) => p.category === activeCategory.value),
)

useSeoMeta({
  title: 'Paket Wisata Bali — 6 Pilihan Curated | SaktiWisata',
  description:
    'Pilih dari 6 paket wisata Bali: Ubud spiritual, adventure, Seminyak luxury, Nusa Penida, Kintamani sunrise, dan honeymoon. Mulai Rp 480rb.',
  ogImage: '/images/paket/ubud-retreat.jpg',
})
</script>

<template>
  <div>
    <!-- Header -->
    <section class="grain relative bg-deep px-4 pb-16 pt-28 text-rice sm:px-6 lg:pt-36">
      <div class="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" class="text-sm text-rice/55">
          <ol class="flex items-center gap-2">
            <li><NuxtLink to="/" class="hover:text-gold">Beranda</NuxtLink></li>
            <li aria-hidden="true">/</li>
            <li class="text-gold">Paket</li>
          </ol>
        </nav>
        <p class="eyebrow mt-6 text-gold">6 Paket Pilihan</p>
        <h1 class="mt-2 max-w-3xl font-display text-5xl font-bold leading-tight lg:text-6xl">
          Temukan perjalanan Bali yang pas untukmu
        </h1>
        <p class="mt-4 max-w-2xl text-rice/70">
          Setiap paket kami kurasi dengan tangan — dari day trip ramah kantong sampai bulan madu
          mewah. Saring berdasarkan suasana yang kamu cari.
        </p>
      </div>
    </section>

    <!-- List -->
    <section class="bg-white py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex flex-wrap gap-2">
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
          <AppReveal v-for="(p, i) in filtered" :key="p.slug" :delay="i * 60">
            <AppPackageCard :pkg="p" class="h-full" />
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="grain relative bg-deep-2 py-16 text-center text-rice">
      <div class="relative mx-auto max-w-2xl px-4">
        <h2 class="font-display text-3xl font-bold lg:text-4xl">Belum ketemu yang pas?</h2>
        <p class="mt-3 text-rice/70">
          Cerita ke kami soal budget, tanggal, dan gaya liburanmu — kami susun itinerary custom.
        </p>
        <NuxtLink
          to="/#pesan"
          class="mt-7 inline-flex cursor-pointer items-center gap-2 bg-gold px-7 py-3.5 text-sm font-semibold text-deep transition-colors duration-200 hover:bg-gold-light"
        >
          Konsultasi Gratis <AppIcon name="arrowRight" class="h-4 w-4" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
