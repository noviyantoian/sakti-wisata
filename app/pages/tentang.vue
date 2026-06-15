<script setup lang="ts">
const app = useAppConfig()

const values = [
  { icon: 'users', title: 'Orang lokal asli', desc: 'Tim kami lahir dan besar di Bali. Kami tidak menjual brosur — kami berbagi rumah sendiri.' },
  { icon: 'heart', title: 'Setiap detail penting', desc: 'Dari kejutan kue ulang tahun sampai kursi mobil anak, hal kecil kami urus tanpa diminta.' },
  { icon: 'shield', title: 'Aman & jujur', desc: 'Partner tepercaya, sopir berpengalaman, dan harga transparan tanpa biaya kejutan.' },
  { icon: 'route', title: 'Fleksibel sepenuhnya', desc: 'Itinerary bisa kami sesuaikan dengan tempo, minat, dan budget kamu. Tidak ada paket “kaku”.' },
]

useSeoMeta({
  title: 'Tentang Kami — SaktiWisata Bali',
  description:
    'SaktiWisata adalah agensi wisata Bali yang dikurasi orang lokal. Kenali kisah, nilai, dan kenapa ribuan wisatawan mempercayakan perjalanan mereka pada kami.',
  ogImage: '/images/destinasi/ubud.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="grain relative bg-deep px-4 pb-16 pt-28 text-rice sm:px-6 lg:pt-36">
      <div class="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" class="text-sm text-rice/55">
          <ol class="flex items-center gap-2">
            <li><NuxtLink to="/" class="hover:text-gold">Beranda</NuxtLink></li>
            <li aria-hidden="true">/</li>
            <li class="text-gold">Tentang Kami</li>
          </ol>
        </nav>
        <p class="eyebrow mt-6 text-gold">Salam dari Bali</p>
        <h1 class="mt-2 max-w-3xl font-display text-5xl font-bold leading-tight lg:text-6xl">
          Kami bukan agen tur. Kami tuan rumahmu di Bali.
        </h1>
        <p class="mt-4 max-w-2xl text-rice/70">
          SaktiWisata lahir dari satu keyakinan sederhana: liburan terbaik bukan soal mencentang
          daftar tempat, tapi soal pulang membawa cerita.
        </p>
      </div>
    </section>

    <!-- Story -->
    <section class="bg-white py-16 lg:py-24">
      <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <AppReveal class="relative overflow-hidden">
          <NuxtImg
            src="/images/destinasi/ubud.jpg"
            alt="Sawah dan pura di Ubud, Bali"
            width="800"
            height="600"
            sizes="(max-width: 1024px) 100vw, 600px"
            class="h-full w-full object-cover"
          />
          <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
        </AppReveal>
        <AppReveal :delay="100">
          <p class="eyebrow text-rust">Kisah Kami</p>
          <h2 class="mt-2 font-display text-3xl font-bold text-deep lg:text-4xl">
            Dimulai dari satu mobil tua dan cinta pada pulau ini
          </h2>
          <div class="mt-5 space-y-4 leading-relaxed text-deep/75">
            <p>
              Bertahun lalu, kami hanya sekelompok teman yang gemar mengantar tamu ke spot favorit
              kami — tempat yang tak ada di buku panduan. Mereka pulang, lalu mengirim teman-temannya.
              Begitu seterusnya.
            </p>
            <p>
              Hari ini, SaktiWisata sudah menemani {{ app.stats.travelers }} wisatawan, tapi cara kami
              tak berubah: dengarkan dulu, baru rancang. Setiap perjalanan kami perlakukan seperti
              menjamu teman sendiri.
            </p>
          </div>
          <NuxtLink
            to="/paket"
            class="mt-7 inline-flex cursor-pointer items-center gap-2 bg-rust px-6 py-3 text-sm font-semibold text-rice transition-colors duration-200 hover:bg-rust-light"
          >
            Lihat paket kami <AppIcon name="arrowRight" class="h-4 w-4" />
          </NuxtLink>
        </AppReveal>
      </div>
    </section>

    <!-- Values -->
    <section class="bg-rice py-16 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <AppReveal class="max-w-2xl">
          <p class="eyebrow text-rust">Yang Kami Pegang</p>
          <h2 class="mt-2 font-display text-3xl font-bold text-deep lg:text-4xl">Nilai yang menuntun tiap trip</h2>
        </AppReveal>
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AppReveal
            v-for="(v, i) in values"
            :key="v.title"
            :delay="i * 60"
            class="h-full border border-rice-2 bg-white p-6"
          >
            <span class="inline-grid h-12 w-12 place-items-center bg-rice text-gold">
              <AppIcon :name="v.icon" class="h-6 w-6" />
            </span>
            <h3 class="mt-5 font-display text-xl font-bold text-deep">{{ v.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-deep/65">{{ v.desc }}</p>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="grain relative bg-deep py-16 text-rice lg:py-20">
      <div class="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4">
        <div>
          <p class="font-display text-4xl font-bold text-gold lg:text-5xl">{{ app.stats.travelers }}</p>
          <p class="mt-1 text-sm text-rice/60">Wisatawan terlayani</p>
        </div>
        <div>
          <p class="font-display text-4xl font-bold text-gold lg:text-5xl">{{ app.stats.rating }}</p>
          <p class="mt-1 text-sm text-rice/60">Rating rata-rata</p>
        </div>
        <div>
          <p class="font-display text-4xl font-bold text-gold lg:text-5xl">{{ app.stats.repeatGuests }}</p>
          <p class="mt-1 text-sm text-rice/60">Tamu kembali lagi</p>
        </div>
        <div>
          <p class="font-display text-4xl font-bold text-gold lg:text-5xl">11</p>
          <p class="mt-1 text-sm text-rice/60">Paket & destinasi</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-white py-16 text-center lg:py-20">
      <div class="mx-auto max-w-2xl px-4">
        <h2 class="font-display text-3xl font-bold text-deep lg:text-4xl">Yuk, mulai ngobrol</h2>
        <p class="mt-3 text-deep/65">Ceritakan rencana liburanmu — kami bantu wujudkan, gratis konsultasi.</p>
        <NuxtLink
          to="/kontak"
          class="mt-7 inline-flex cursor-pointer items-center gap-2 bg-rust px-7 py-3.5 text-sm font-semibold text-rice transition-colors duration-200 hover:bg-rust-light"
        >
          Hubungi Kami <AppIcon name="arrowRight" class="h-4 w-4" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
