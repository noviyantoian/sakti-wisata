import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-01',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],

  // Tailwind CSS v4 via the official Vite plugin (CSS-first config in main.css)
  vite: {
    plugins: [tailwindcss()],
  },

  googleFonts: {
    families: {
      'Cormorant Garamond': { wght: [400, 600, 700], ital: [400, 600] },
      'DM Sans': [300, 400, 500, 600],
    },
    display: 'swap',
    preload: true,
    download: true,
  },

  image: {
    format: ['webp', 'jpg'],
    quality: 86,
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 },
  },

  // @nuxtjs/seo umbrella — site identity feeds sitemap, robots, og, schema-org
  site: {
    url: 'https://saktiwisata.id',
    name: 'SaktiWisata — Agensi Wisata Bali',
    description:
      'Agensi wisata Bali yang merancang perjalanan dengan jiwa. Ubud, Seminyak, Uluwatu, Kintamani, Nusa Penida. Mulai Rp 480rb.',
    defaultLocale: 'id',
  },

  sitemap: {
    autoLastmod: true,
    sources: ['/api/__sitemap__/urls'],
  },

  // Keep the build light: no headless-browser OG rendering, no dev link crawler.
  ogImage: { enabled: false },
  linkChecker: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      titleTemplate: '%s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1C0F00' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
