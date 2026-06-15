<script setup lang="ts">
const app = useAppConfig()
const year = new Date().getFullYear()
const packages = getAllPackages()
const destinations = getAllDestinations()
const waHref = `https://wa.me/${app.waNumber}`
</script>

<template>
  <footer class="grain relative bg-deep-2 text-rice/75">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="grid gap-12 lg:grid-cols-12">
        <!-- Brand -->
        <div class="lg:col-span-4">
          <div class="flex items-center gap-2.5">
            <span class="grid h-9 w-9 place-items-center bg-gold">
              <svg viewBox="0 0 32 32" class="h-5 w-5" aria-hidden="true">
                <g fill="#1C0F00">
                  <path d="M7 27V14h3v-4h3v17H7Z" />
                  <path d="M25 27V14h-3v-4h-3v17h6Z" />
                  <circle cx="16" cy="9" r="1.6" />
                </g>
              </svg>
            </span>
            <span class="font-display text-2xl font-bold text-rice">
              Sakti<span class="text-gold">Wisata</span>
            </span>
          </div>
          <p class="mt-5 max-w-sm text-sm leading-relaxed">
            Agensi wisata Bali yang merancang perjalanan dengan jiwa — dari Ubud yang tenang
            sampai Uluwatu yang dramatis. Dikurasi oleh orang lokal yang benar-benar cinta pulau ini.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <a
              :href="waHref"
              target="_blank"
              rel="noopener noreferrer"
              class="grid h-10 w-10 place-items-center border border-rice/15 text-rice/80 transition-colors duration-200 hover:border-gold hover:text-gold"
              aria-label="WhatsApp SaktiWisata"
            >
              <AppIcon name="whatsapp" class="h-5 w-5" />
            </a>
            <a
              :href="`https://instagram.com/${app.instagram}`"
              target="_blank"
              rel="noopener noreferrer"
              class="grid h-10 w-10 place-items-center border border-rice/15 text-rice/80 transition-colors duration-200 hover:border-gold hover:text-gold"
              aria-label="Instagram SaktiWisata"
            >
              <AppIcon name="instagram" class="h-5 w-5" />
            </a>
            <a
              :href="`mailto:${app.email}`"
              class="grid h-10 w-10 place-items-center border border-rice/15 text-rice/80 transition-colors duration-200 hover:border-gold hover:text-gold"
              aria-label="Email SaktiWisata"
            >
              <AppIcon name="mail" class="h-5 w-5" />
            </a>
          </div>
          <div class="mt-6 flex gap-5 text-sm">
            <NuxtLink to="/tentang" class="transition-colors duration-200 hover:text-gold">Tentang Kami</NuxtLink>
            <NuxtLink to="/kontak" class="transition-colors duration-200 hover:text-gold">Kontak</NuxtLink>
          </div>
        </div>

        <!-- Paket -->
        <nav class="lg:col-span-3" aria-label="Paket wisata">
          <p class="eyebrow text-gold">Paket Wisata</p>
          <ul class="mt-5 space-y-3 text-sm">
            <li v-for="p in packages" :key="p.slug">
              <NuxtLink
                :to="`/paket/${p.slug}`"
                class="transition-colors duration-200 hover:text-gold"
              >
                {{ p.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Destinasi -->
        <nav class="lg:col-span-2" aria-label="Destinasi">
          <p class="eyebrow text-gold">Destinasi</p>
          <ul class="mt-5 space-y-3 text-sm">
            <li v-for="d in destinations" :key="d.slug">
              <NuxtLink
                :to="`/destinasi/${d.slug}`"
                class="transition-colors duration-200 hover:text-gold"
              >
                {{ d.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Kontak -->
        <div class="lg:col-span-3">
          <p class="eyebrow text-gold">Kontak</p>
          <ul class="mt-5 space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <AppIcon name="whatsapp" class="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <a :href="waHref" target="_blank" rel="noopener noreferrer" class="hover:text-gold">
                +{{ app.waNumber }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <AppIcon name="mail" class="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <a :href="`mailto:${app.email}`" class="hover:text-gold">{{ app.email }}</a>
            </li>
            <li class="flex items-start gap-3">
              <AppIcon name="mapPin" class="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>Denpasar, Bali · Melayani seluruh Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col gap-3 border-t border-rice/10 pt-6 text-xs text-rice/55 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} SaktiWisata. Dibuat dengan ❤ di Bali.</p>
        <p>Harga “mulai dari” — konfirmasi ketersediaan & harga final via WhatsApp.</p>
      </div>
    </div>
  </footer>
</template>
