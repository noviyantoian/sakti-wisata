<script setup lang="ts">
const route = useRoute()

// Local/static data → a computed stays reactive to the slug, so navigating
// between two destination pages (same reused component) updates the content.
const dest = computed(() => getDestinationBySlug(route.params.slug as string))

if (!dest.value) {
  throw createError({ statusCode: 404, statusMessage: 'Destinasi tidak ditemukan', fatal: true })
}

const related = computed(() => getRelatedPackages(dest.value?.relatedPackages ?? []))

const quickFacts = computed(() => {
  const d = dest.value
  if (!d) return []
  return [
    { icon: 'sun', label: 'Waktu terbaik', value: d.bestTime },
    { icon: 'clock', label: 'Durasi ideal', value: d.idealDuration },
    { icon: 'mapPin', label: 'Dari Kuta', value: d.distanceFromKuta },
  ]
})

useSeoMeta({
  title: () => dest.value?.seo.title,
  description: () => dest.value?.seo.description,
  ogTitle: () => dest.value?.name,
  ogDescription: () => dest.value?.seo.description,
  ogImage: () => dest.value?.seo.ogImage,
  twitterCard: 'summary_large_image',
})

if (dest.value) {
  useSchemaOrg([
    defineBreadcrumb({
      itemListElement: [
        { name: 'Beranda', item: '/' },
        { name: 'Destinasi', item: '/destinasi' },
        { name: dest.value.name, item: `/destinasi/${dest.value.slug}` },
      ],
    }),
  ])
}
</script>

<template>
  <div v-if="dest">
    <!-- Hero -->
    <section class="relative flex min-h-[70vh] items-end overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:pb-16">
      <div class="absolute inset-0 overflow-hidden">
        <NuxtImg
          :src="dest.image"
          :alt="`Pemandangan ${dest.name}, Bali`"
          width="2560"
          height="1440"
          format="webp"
          quality="88"
          preload
          fetchpriority="high"
          class="kenburns h-full w-full object-cover object-center"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent" />
      <div class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep/75 to-transparent" />
      <div class="grain absolute inset-0 opacity-50" />
      <div class="relative mx-auto w-full max-w-7xl text-rice">
        <nav aria-label="Breadcrumb" class="text-sm text-rice/70">
          <ol class="flex flex-wrap items-center gap-2">
            <li><NuxtLink to="/" class="hover:text-gold">Beranda</NuxtLink></li>
            <li aria-hidden="true">/</li>
            <li><NuxtLink to="/destinasi" class="hover:text-gold">Destinasi</NuxtLink></li>
            <li aria-hidden="true">/</li>
            <li class="text-gold">{{ dest.name }}</li>
          </ol>
        </nav>
        <h1 class="mt-4 font-display text-5xl font-bold leading-none sm:text-6xl lg:text-7xl">{{ dest.name }}</h1>
        <p class="mt-3 text-lg text-rice/85">{{ dest.subtitle }}</p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="t in dest.tags"
            :key="t"
            class="bg-rice/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-rice backdrop-blur-sm"
          >
            {{ t }}
          </span>
        </div>
      </div>
    </section>

    <!-- Intro + Quick facts -->
    <section class="bg-white py-16 lg:py-20">
      <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <p class="eyebrow text-rust">Tentang {{ dest.name }}</p>
          <p class="mt-4 font-display text-2xl leading-relaxed text-deep sm:text-3xl">{{ dest.intro }}</p>
        </div>
        <aside class="lg:col-span-1">
          <div class="border border-rice-2 bg-rice p-6">
            <p class="eyebrow text-sage">Info Praktis</p>
            <dl class="mt-5 space-y-5">
              <div v-for="f in quickFacts" :key="f.label" class="flex items-start gap-3">
                <span class="grid h-10 w-10 shrink-0 place-items-center bg-white text-gold">
                  <AppIcon :name="f.icon" class="h-5 w-5" />
                </span>
                <div>
                  <dt class="text-xs uppercase tracking-wide text-deep/50">{{ f.label }}</dt>
                  <dd class="font-medium text-deep">{{ f.value }}</dd>
                </div>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>

    <!-- Attractions -->
    <section class="bg-rice py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <p class="eyebrow text-rust">Yang Wajib Dikunjungi</p>
        <h2 class="mt-2 font-display text-3xl font-bold text-deep lg:text-4xl">Atraksi unggulan {{ dest.name }}</h2>
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AppReveal
            v-for="(a, i) in dest.attractions"
            :key="a.name"
            :delay="i * 50"
            class="group h-full border border-rice-2 bg-white p-6 transition-colors duration-300 hover:border-gold"
          >
            <span class="inline-grid h-12 w-12 place-items-center bg-rice text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-deep">
              <AppIcon :name="a.icon" class="h-6 w-6" />
            </span>
            <h3 class="mt-5 font-display text-xl font-bold text-deep">{{ a.name }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-deep/65">{{ a.description }}</p>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Tips -->
    <section class="grain relative bg-deep py-16 text-rice lg:py-20">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p class="eyebrow text-gold">Tips dari Kami</p>
        <h2 class="mt-2 font-display text-3xl font-bold lg:text-4xl">Biar liburanmu makin mulus</h2>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div v-for="t in dest.travelTips" :key="t.title" class="border border-rice/12 bg-deep-2 p-6">
            <span class="inline-grid h-11 w-11 place-items-center border border-gold/40 text-gold">
              <AppIcon :name="t.icon" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-lg font-bold text-rice">{{ t.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-rice/65">{{ t.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related packages -->
    <section v-if="related.length" class="bg-white py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 class="font-display text-3xl font-bold text-deep">Paket yang mampir ke {{ dest.name }}</h2>
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AppPackageCard v-for="r in related" :key="r.slug" :pkg="r" class="h-full" />
        </div>
      </div>
    </section>
  </div>
</template>
