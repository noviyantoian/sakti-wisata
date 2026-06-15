// Dynamic sitemap source consumed by @nuxtjs/sitemap (PRD §6).
// Emits one indexable URL per package + destination slug.
import { packages } from '../../../shared/data/packages'
import { destinations } from '../../../shared/data/destinations'

export default defineSitemapEventHandler(() => {
  return [
    ...packages.map((p) => ({
      loc: `/paket/${p.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.9,
    })),
    ...destinations.map((d) => ({
      loc: `/destinasi/${d.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.8,
    })),
  ]
})
