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
      'Cormorant Garamond': { wght: [400, 600, 700], ital: [400] },
      'DM Sans': [300, 400, 500, 600],
    },
    display: 'swap',
    subsets: ['latin'],
    // Don't preload every weight — that competes with the LCP hero image.
    preload: false,
    download: true,
  },

  image: {
    // IPX runs at BUILD time (during prerender) → optimized static WebP, so there
    // is no runtime sharp/IPX RAM cost on the server.
    format: ['webp'],
    quality: 72,
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 },
  },

  // Prerender every page to static HTML at build time → fast FCP/TTFB and minimal
  // runtime RAM (no per-request SSR render, no runtime image processing).
  routeRules: {
    '/**': { prerender: true },
  },

  nitro: {
    prerender: { crawlLinks: true, failOnError: false },
    compressPublicAssets: { gzip: true, brotli: true },
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
