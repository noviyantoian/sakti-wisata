<script setup lang="ts">
import type { TourPackage } from '~~/shared/types'

defineProps<{ pkg: TourPackage }>()
</script>

<template>
  <NuxtLink
    :to="`/paket/${pkg.slug}`"
    class="group relative flex flex-row overflow-hidden border border-rice-2 bg-white transition-all duration-300 hover:border-gold hover:shadow-xl hover:shadow-deep/5 sm:flex-col"
  >
    <div class="relative w-[42%] shrink-0 overflow-hidden sm:aspect-[16/10] sm:w-full">
      <NuxtImg
        :src="pkg.image"
        :alt="`Foto ${pkg.name}`"
        width="800"
        height="500"
        sizes="(max-width: 640px) 45vw, 420px"
        class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        class="absolute left-3 top-3 bg-deep/85 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.16em] text-rice backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-[0.7rem] sm:tracking-[0.18em]"
      >
        {{ getCategoryLabel(pkg.category) }}
      </span>
      <span
        v-if="pkg.isFeatured"
        class="absolute right-3 top-3 hidden items-center gap-1 bg-gold px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-deep sm:right-4 sm:top-4 sm:inline-flex"
      >
        <AppIcon name="star" class="h-3 w-3" />
        Unggulan
      </span>
    </div>

    <div class="flex flex-1 flex-col p-4 sm:p-6">
      <p class="eyebrow text-sage">{{ getTypeLabel(pkg.type) }}</p>
      <h3
        class="mt-1.5 font-display text-lg font-bold leading-tight text-deep transition-colors duration-200 group-hover:text-rust sm:mt-2 sm:text-2xl"
      >
        {{ pkg.name }}
      </h3>
      <p class="mt-1.5 line-clamp-2 text-sm leading-relaxed text-deep/65">{{ pkg.tagline }}</p>

      <div class="mt-4 hidden flex-wrap items-center gap-x-4 gap-y-2 text-xs text-deep/60 sm:flex">
        <span class="inline-flex items-center gap-1.5">
          <AppIcon name="clock" class="h-4 w-4 text-gold" />{{ pkg.duration }}
        </span>
        <span class="inline-flex items-center gap-1.5">
          <AppIcon name="users" class="h-4 w-4 text-gold" />{{ pkg.maxPax }}
        </span>
      </div>

      <div class="mt-auto flex items-end justify-between gap-2 border-t border-rice-2 pt-3 sm:pt-5">
        <div>
          <p class="text-[0.65rem] uppercase tracking-wide text-deep/45">Mulai dari</p>
          <p class="font-display text-xl font-bold text-rust sm:text-2xl">
            {{ formatPriceShort(pkg.pricePerPerson) }}
            <span class="ml-0.5 font-sans text-xs font-normal text-deep/50 sm:text-sm">/{{ pkg.pricePer }}</span>
          </p>
        </div>
        <span
          class="grid h-9 w-9 shrink-0 place-items-center bg-rice-2 text-deep transition-colors duration-200 group-hover:bg-rust group-hover:text-rice sm:h-10 sm:w-10"
        >
          <AppIcon name="arrowUpRight" class="h-5 w-5" />
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
