<script setup lang="ts">
const route = useRoute()
const app = useAppConfig()

const open = ref(false)
const scrolled = ref(false)
// Transparent over every page's (dark) hero; turns solid once scrolled.
const solid = computed(() => scrolled.value)

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
watch(() => route.fullPath, () => {
  open.value = false
})

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/paket', label: 'Paket' },
  { to: '/destinasi', label: 'Destinasi' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/kontak', label: 'Kontak' },
]
const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition-colors duration-300"
    :class="solid ? 'bg-rice/90 backdrop-blur-md border-b border-rice-2 shadow-sm' : 'bg-transparent'"
  >
    <nav
      aria-label="Navigasi utama"
      class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20"
    >
      <!-- Brand -->
      <NuxtLink to="/" class="group flex items-center gap-2.5" aria-label="SaktiWisata — beranda">
        <span
          class="grid h-9 w-9 place-items-center bg-deep transition-colors duration-200 group-hover:bg-rust"
        >
          <svg viewBox="0 0 32 32" class="h-5 w-5" aria-hidden="true">
            <g fill="#C9A84C">
              <path d="M7 27V14h3v-4h3v17H7Z" />
              <path d="M25 27V14h-3v-4h-3v17h6Z" />
              <circle cx="16" cy="9" r="1.6" />
            </g>
          </svg>
        </span>
        <span
          class="font-display text-2xl font-bold leading-none transition-colors duration-300"
          :class="solid ? 'text-deep' : 'text-rice'"
        >
          Sakti<span class="text-gold">Wisata</span>
        </span>
      </NuxtLink>

      <!-- Desktop links -->
      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative text-sm font-medium tracking-wide transition-colors duration-200"
          :class="[
            solid ? 'text-deep/80 hover:text-rust' : 'text-rice/90 hover:text-gold',
            isActive(link.to) && (solid ? 'text-rust' : 'text-gold'),
          ]"
        >
          {{ link.label }}
          <span
            v-if="isActive(link.to)"
            class="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
          />
        </NuxtLink>
      </div>

      <!-- CTA + mobile toggle -->
      <div class="flex items-center gap-2">
        <NuxtLink
          to="/#pesan"
          class="hidden cursor-pointer items-center gap-2 bg-rust px-5 py-2.5 text-sm font-semibold text-rice transition-colors duration-200 hover:bg-rust-light sm:inline-flex"
        >
          Konsultasi Gratis
          <AppIcon name="arrowRight" class="h-4 w-4" />
        </NuxtLink>
        <button
          type="button"
          class="grid h-11 w-11 cursor-pointer place-items-center md:hidden"
          :class="solid || open ? 'text-deep' : 'text-rice'"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          aria-label="Buka menu"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'x' : 'menu'" class="h-6 w-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="open"
        id="mobile-menu"
        class="border-t border-rice-2 bg-rice px-4 pb-6 pt-2 md:hidden"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="block border-b border-rice-2/70 py-3 font-display text-xl text-deep transition-colors hover:text-rust"
          :class="isActive(link.to) && 'text-rust'"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/#pesan"
          class="mt-4 flex items-center justify-center gap-2 bg-rust px-5 py-3 text-sm font-semibold text-rice"
        >
          Konsultasi Gratis
          <AppIcon name="arrowRight" class="h-4 w-4" />
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>
