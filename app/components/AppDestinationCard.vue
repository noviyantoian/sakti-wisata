<script setup lang="ts">
import type { Destination } from '~~/shared/types'

defineProps<{ dest: Destination }>()
</script>

<template>
  <NuxtLink
    :to="`/destinasi/${dest.slug}`"
    class="group relative block h-full min-h-[26rem] overflow-hidden"
  >
    <NuxtImg
      :src="dest.image"
      :alt="`Pemandangan ${dest.name}, Bali`"
      width="900"
      height="1200"
      sizes="(max-width: 768px) 100vw, 600px"
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-t" :class="dest.heroGradientClass" />

    <div class="relative flex h-full flex-col justify-end p-6">
      <div class="mb-3 flex flex-wrap gap-2">
        <span
          v-for="t in dest.tags.slice(0, 3)"
          :key="t"
          class="bg-rice/15 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-rice backdrop-blur-sm"
        >
          {{ t }}
        </span>
      </div>
      <h3 class="font-display text-3xl font-bold text-rice drop-shadow-sm">{{ dest.name }}</h3>
      <p class="mt-1 text-sm text-rice/80">{{ dest.subtitle }}</p>
      <span
        class="mt-4 inline-flex translate-y-1 items-center gap-2 text-sm font-medium text-gold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        Jelajahi <AppIcon name="arrowRight" class="h-4 w-4" />
      </span>
    </div>
  </NuxtLink>
</template>
