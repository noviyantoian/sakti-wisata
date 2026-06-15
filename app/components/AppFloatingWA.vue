<script setup lang="ts">
const app = useAppConfig()
const route = useRoute()
const message = 'Halo SaktiWisata! 🌺 Saya mau tanya soal paket wisata Bali.'
const href = computed(
  () => `https://wa.me/${app.waNumber}?text=${encodeURIComponent(message)}`,
)
// Package-detail pages show a sticky mobile CTA bar; hide the FAB there on small screens.
const hiddenOnMobile = computed(() => route.path.startsWith('/paket/'))
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat WhatsApp SaktiWisata"
    class="group fixed bottom-5 right-5 z-50 flex items-center gap-3 print:hidden"
    :class="hiddenOnMobile && 'max-lg:hidden'"
  >
    <span
      class="pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-deep px-0 py-2.5 text-sm font-medium text-rice opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-xs group-hover:px-4 group-hover:opacity-100 sm:block"
    >
      Tanya lewat WhatsApp
    </span>
    <span class="relative grid h-14 w-14 place-items-center">
      <span
        class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/40 motion-reduce:hidden"
      />
      <span
        class="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 group-hover:scale-105"
      >
        <AppIcon name="whatsapp" class="h-7 w-7" />
      </span>
    </span>
  </a>
</template>
