<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: () => (is404.value ? '404 — Halaman tak ditemukan' : 'Terjadi kesalahan'),
  robots: 'noindex, nofollow',
})

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="grain relative min-h-dvh overflow-hidden bg-deep text-rice">
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-rust/20 via-transparent to-transparent"
    />
    <div
      class="relative mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center px-6 text-center"
    >
      <p class="eyebrow text-gold">SaktiWisata · Bali</p>
      <p class="mt-6 font-display text-[6rem] leading-none text-gold sm:text-[9rem]">
        {{ error?.statusCode || 500 }}
      </p>
      <h1 class="mt-2 font-display text-3xl text-rice sm:text-4xl">
        {{ is404 ? 'Jalan ini buntu' : 'Ada yang tak beres' }}
      </h1>
      <p class="mt-4 max-w-md text-rice/70">
        {{
          is404
            ? 'Halaman yang kamu cari mungkin sudah pindah atau tidak pernah ada. Yuk kembali dan lanjut menjelajah Bali.'
            : 'Maaf, terjadi kesalahan di sisi kami. Coba muat ulang, atau kembali ke beranda.'
        }}
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          class="inline-flex cursor-pointer items-center gap-2 bg-gold px-6 py-3 text-sm font-semibold text-deep transition-colors duration-200 hover:bg-gold-light"
          @click="goHome"
        >
          Kembali ke Beranda
          <AppIcon name="arrowRight" class="h-4 w-4" />
        </button>
        <NuxtLink
          to="/paket"
          class="inline-flex items-center gap-2 border border-rice/25 px-6 py-3 text-sm font-medium text-rice transition-colors duration-200 hover:border-gold hover:text-gold"
        >
          Lihat Paket
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
