<script setup lang="ts">
const destinations = getAllDestinations()

useSeoMeta({
  title: 'Destinasi Wisata Bali — Panduan Lengkap | SaktiWisata',
  description:
    'Jelajahi destinasi Bali: Ubud, Seminyak, Uluwatu, Kintamani, dan Nusa Penida. Atraksi, tips lokal, dan rekomendasi paket di tiap tempat.',
  ogImage: '/images/destinasi/ubud.jpg',
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
            <li class="text-gold">Destinasi</li>
          </ol>
        </nav>
        <p class="eyebrow mt-6 text-gold">5 Destinasi Ikonik</p>
        <h1 class="mt-2 max-w-3xl font-display text-5xl font-bold leading-tight lg:text-6xl">
          Kenali Bali sebelum kamu tiba
        </h1>
        <p class="mt-4 max-w-2xl text-rice/70">
          Panduan jujur dari orang lokal — atraksi terbaik, waktu ideal, dan tips yang tak kamu
          temukan di buku panduan generik.
        </p>
      </div>
    </section>

    <!-- Grid -->
    <section class="bg-rice py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AppReveal
            v-for="(d, i) in destinations"
            :key="d.slug"
            :delay="i * 60"
            :class="i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''"
          >
            <AppDestinationCard :dest="d" class="min-h-[24rem]" :class="i === 0 ? 'sm:min-h-[28rem]' : ''" />
          </AppReveal>
        </div>
      </div>
    </section>
  </div>
</template>
