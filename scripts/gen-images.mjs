#!/usr/bin/env node
/**
 * SaktiWisata — Bali asset generator (fal.ai / nano-banana-2)
 *
 * Reuses the FAL_KEY already configured in the user's `image-gen` MCP server
 * and the @fal-ai/client install that ships with it. The key is read from
 * ~/.claude.json at runtime and never printed.
 *
 * Usage:
 *   node scripts/gen-images.mjs            # generate all missing assets
 *   node scripts/gen-images.mjs hero-main  # generate only matching id(s)
 *   FORCE=1 node scripts/gen-images.mjs    # re-generate even if file exists
 *
 * Style: editorial travel-magazine, warm film grain (Kodak Portra), golden
 * hour, muted gold/rust/sand palette — per SaktiWisata design direction.
 */
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { createRequire } from 'node:module'

const MCP_DIR = '/Users/noviyantoian/tools/mcp-image-gen'
const FAL_MODEL = process.env.FAL_MODEL || 'fal-ai/nano-banana-2'
const FORCE = !!process.env.FORCE
const ONLY = process.argv.slice(2) // optional id filters
const ROOT = process.cwd()
const CONCURRENCY = 3

// ── Resolve FAL_KEY from the configured image-gen MCP server (never logged) ──
function readFalKey() {
  if (process.env.FAL_KEY) return process.env.FAL_KEY
  const cfgPath = path.join(os.homedir(), '.claude.json')
  const data = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
  let found = null
  const walk = (o) => {
    if (found || !o || typeof o !== 'object') return
    const ms = o.mcpServers
    if (ms && typeof ms === 'object') {
      for (const cfg of Object.values(ms)) {
        const k = cfg?.env?.FAL_KEY
        if (k) { found = k; return }
      }
    }
    for (const v of Object.values(o)) walk(v)
  }
  walk(data)
  if (!found) throw new Error('FAL_KEY not found in env or ~/.claude.json (image-gen MCP)')
  return found
}

// ── Load @fal-ai/client from the existing MCP install (no local install) ─────
async function loadFal() {
  const require = createRequire(path.join(MCP_DIR, 'package.json'))
  try {
    const m = require('@fal-ai/client')
    return m.fal ?? m.default?.fal ?? m.default ?? m
  } catch {
    const p = require.resolve('@fal-ai/client')
    const m = await import('file://' + p)
    return m.fal ?? m.default?.fal ?? m.default ?? m
  }
}

const RATIO_TO_SIZE = {
  '16:9': 'landscape_16_9',
  '4:3': 'landscape_4_3',
  '1:1': 'square_hd',
  '9:16': 'portrait_16_9',
  '3:2': 'landscape_4_3',
}

const STYLE =
  'editorial travel-magazine photograph, shot on Kodak Portra 400, fine analog film grain, ' +
  'warm golden-hour light, muted gold rust and sand tones, soft natural light, cinematic depth of field, ' +
  '35mm, high detail, photorealistic, no text, no watermark, no logo, no caption'

/** @type {{id:string,path:string,ratio:string,prompt:string}[]} */
const ASSETS = [
  {
    id: 'hero-main',
    path: 'public/images/hero/hero-main.jpg',
    ratio: '16:9',
    prompt:
      'Misty sunrise over emerald green Balinese rice terraces in Ubud, a traditional split temple gate ' +
      '(candi bentar) of dark volcanic stone, tall coconut palms, soft fog drifting through the valley, serene and spiritual',
  },
  // ── Paket (6) ──────────────────────────────────────────────────────────
  {
    id: 'paket-ubud-retreat',
    path: 'public/images/paket/ubud-retreat.jpg',
    ratio: '16:9',
    prompt:
      'Tirta Empul holy spring water temple in Ubud Bali, stone purification pools with clear water, ' +
      'frangipani offerings and gentle incense smoke, surrounded by lush tropical jungle, tranquil sacred atmosphere',
  },
  {
    id: 'paket-bali-adventure',
    path: 'public/images/paket/bali-adventure.jpg',
    ratio: '16:9',
    prompt:
      'A lone hiker standing on the rim of Mount Batur volcano at sunrise above a sea of clouds, ' +
      'dramatic caldera and distant crater lake below, vast sense of scale and adventure',
  },
  {
    id: 'paket-seminyak-luxury',
    path: 'public/images/paket/seminyak-luxury.jpg',
    ratio: '16:9',
    prompt:
      'Luxury Seminyak villa infinity pool overlooking the ocean at sunset, elegant white daybeds and ' +
      'frangipani blossoms, sophisticated tropical resort, refined and serene',
  },
  {
    id: 'paket-nusa-penida',
    path: 'public/images/paket/nusa-penida.jpg',
    ratio: '16:9',
    prompt:
      'Kelingking Beach viewpoint on Nusa Penida island, dramatic T-rex shaped limestone cliff plunging ' +
      'into vivid turquoise water, tiny white sand cove far below, clear sky',
  },
  {
    id: 'paket-kintamani-sunrise',
    path: 'public/images/paket/kintamani-sunrise.jpg',
    ratio: '16:9',
    prompt:
      'Golden sunrise over Mount Batur and Lake Batur caldera in Kintamani Bali, layered volcanic ridges ' +
      'fading into morning mist, warm light, calm and majestic',
  },
  {
    id: 'paket-honeymoon-bali',
    path: 'public/images/paket/honeymoon-bali.jpg',
    ratio: '16:9',
    prompt:
      'Romantic floating breakfast on a private villa pool in Bali at soft sunrise, tropical fruit and two ' +
      'coffee cups on a bamboo tray, scattered flower petals on the water, intimate honeymoon mood, warm and dreamy',
  },
  // ── Destinasi (5) ──────────────────────────────────────────────────────
  {
    id: 'destinasi-ubud',
    path: 'public/images/destinasi/ubud.jpg',
    ratio: '16:9',
    prompt:
      'Tegalalang rice terraces near Ubud Bali, lush green stepped paddies with elegant curves, coconut ' +
      'palms and a small farmer hut, soft diffused morning light, peaceful',
  },
  {
    id: 'destinasi-seminyak',
    path: 'public/images/destinasi/seminyak.jpg',
    ratio: '16:9',
    prompt:
      'Seminyak beach at golden sunset, gentle surf rolling in, distant silhouettes of surfers and beanbags, ' +
      'warm amber sky, relaxed upscale beach-club atmosphere',
  },
  {
    id: 'destinasi-uluwatu',
    path: 'public/images/destinasi/uluwatu.jpg',
    ratio: '16:9',
    prompt:
      'Uluwatu clifftop temple Pura Luhur perched on a dramatic limestone cliff high above the Indian Ocean ' +
      'at sunset, crashing waves below, golden backlight, awe-inspiring',
  },
  {
    id: 'destinasi-kintamani',
    path: 'public/images/destinasi/kintamani.jpg',
    ratio: '16:9',
    prompt:
      'Wide panorama of Mount Batur volcano and its crater lake in Kintamani Bali, vast green caldera, ' +
      'terraced foreground fields, hazy blue layered ridges, warm soft sky',
  },
  {
    id: 'destinasi-nusa-penida',
    path: 'public/images/destinasi/nusa-penida.jpg',
    ratio: '16:9',
    prompt:
      'Diamond Beach on Nusa Penida, a hidden white sand cove framed by tall carved limestone cliffs and a ' +
      'narrow stairway, brilliant turquoise sea, sunny and dramatic',
  },

  // ── Itinerary per-day photos (path = /images/itinerary/<slug>-d<n>.jpg) ──
  // Ubud Spiritual Retreat
  { id: 'itinerary-ubud-retreat-d1', path: 'public/images/itinerary/ubud-retreat-d1.jpg', ratio: '16:9', prompt: 'A bamboo villa terrace overlooking lush rice paddies in Ubud Bali at late afternoon, a welcome herbal drink on the table, calm and inviting' },
  { id: 'itinerary-ubud-retreat-d2', path: 'public/images/itinerary/ubud-retreat-d2.jpg', ratio: '16:9', prompt: 'Tirta Empul holy spring temple in Ubud, stone purification fountains with frangipani offerings and gentle mist, sacred and serene' },
  { id: 'itinerary-ubud-retreat-d3', path: 'public/images/itinerary/ubud-retreat-d3.jpg', ratio: '16:9', prompt: 'Sunrise yoga on a wooden deck overlooking misty Ubud jungle and rice fields, peaceful golden morning' },
  { id: 'itinerary-ubud-retreat-d4', path: 'public/images/itinerary/ubud-retreat-d4.jpg', ratio: '16:9', prompt: 'Campuhan Ridge Walk, a grassy hilltop path lined with tall grass at golden morning light, Ubud Bali' },
  // Bali Adventure Full
  { id: 'itinerary-bali-adventure-d1', path: 'public/images/itinerary/bali-adventure-d1.jpg', ratio: '16:9', prompt: 'A lively Balinese night street-food market with warm lanterns and steam from food stalls, friendly evening atmosphere' },
  { id: 'itinerary-bali-adventure-d2', path: 'public/images/itinerary/bali-adventure-d2.jpg', ratio: '16:9', prompt: 'Hikers standing on the summit of Mount Batur volcano at sunrise above a sea of clouds, dramatic and triumphant' },
  { id: 'itinerary-bali-adventure-d3', path: 'public/images/itinerary/bali-adventure-d3.jpg', ratio: '16:9', prompt: 'White-water rafting on the Ayung River through a lush jungle gorge with carved cliffs, splashing rapids, Bali' },
  { id: 'itinerary-bali-adventure-d4', path: 'public/images/itinerary/bali-adventure-d4.jpg', ratio: '16:9', prompt: 'Sekumpul waterfall cascading down tall cliffs into emerald pools in lush north Bali jungle' },
  { id: 'itinerary-bali-adventure-d5', path: 'public/images/itinerary/bali-adventure-d5.jpg', ratio: '16:9', prompt: 'Snorkeler floating over a colorful coral reef in clear turquoise water at Amed, Bali, sunlit underwater' },
  // Seminyak Luxury Escape
  { id: 'itinerary-seminyak-luxury-d1', path: 'public/images/itinerary/seminyak-luxury-d1.jpg', ratio: '16:9', prompt: 'An upscale Seminyak beach club at sunset with elegant daybeds, cocktails, and the ocean glowing amber' },
  { id: 'itinerary-seminyak-luxury-d2', path: 'public/images/itinerary/seminyak-luxury-d2.jpg', ratio: '16:9', prompt: 'A serene tropical spa massage room with frangipani flowers, warm towels, and soft light, luxurious Bali wellness' },
  { id: 'itinerary-seminyak-luxury-d3', path: 'public/images/itinerary/seminyak-luxury-d3.jpg', ratio: '16:9', prompt: 'A private villa infinity pool in the morning with a breakfast tray by the water, refined and tranquil, Seminyak' },
  // Nusa Penida One Day Trip
  { id: 'itinerary-nusa-penida-d1', path: 'public/images/itinerary/nusa-penida-d1.jpg', ratio: '16:9', prompt: 'A fast boat crossing brilliant turquoise sea toward the cliffs of Nusa Penida island in the morning' },
  { id: 'itinerary-nusa-penida-d2', path: 'public/images/itinerary/nusa-penida-d2.jpg', ratio: '16:9', prompt: 'Kelingking Beach T-rex shaped limestone cliff viewpoint on Nusa Penida above vivid turquoise water' },
  { id: 'itinerary-nusa-penida-d3', path: 'public/images/itinerary/nusa-penida-d3.jpg', ratio: '16:9', prompt: 'Snorkeling in the crystal clear turquoise water of Crystal Bay, Nusa Penida, white sand and reef' },
  { id: 'itinerary-nusa-penida-d4', path: 'public/images/itinerary/nusa-penida-d4.jpg', ratio: '16:9', prompt: 'A speedboat wake across calm turquoise sea returning to Bali in warm late afternoon light, distant coastline' },
  // Kintamani Sunrise & Ubud
  { id: 'itinerary-kintamani-sunrise-d1', path: 'public/images/itinerary/kintamani-sunrise-d1.jpg', ratio: '16:9', prompt: 'Sunrise over Mount Batur caldera in Kintamani with a warm cup of coffee in the foreground, layered misty ridges' },
  { id: 'itinerary-kintamani-sunrise-d2', path: 'public/images/itinerary/kintamani-sunrise-d2.jpg', ratio: '16:9', prompt: 'A jungle swing soaring over a green valley at a Bali coffee plantation, palms and terraces below' },
  { id: 'itinerary-kintamani-sunrise-d3', path: 'public/images/itinerary/kintamani-sunrise-d3.jpg', ratio: '16:9', prompt: 'Tegalalang rice terraces near Ubud with coconut palms in soft morning light, lush and layered' },
  { id: 'itinerary-kintamani-sunrise-d4', path: 'public/images/itinerary/kintamani-sunrise-d4.jpg', ratio: '16:9', prompt: 'A scenic Bali countryside road winding through rice fields and palm trees in warm afternoon light' },
  // Bali Honeymoon
  { id: 'itinerary-honeymoon-bali-d1', path: 'public/images/itinerary/honeymoon-bali-d1.jpg', ratio: '16:9', prompt: 'Romantic floating breakfast in a private villa pool in Ubud at soft sunrise, flower petals on the water, intimate honeymoon mood' },
  { id: 'itinerary-honeymoon-bali-d2', path: 'public/images/itinerary/honeymoon-bali-d2.jpg', ratio: '16:9', prompt: 'A couple in sarongs walking through the Tegalalang rice terraces in Bali, warm morning light, romantic' },
  { id: 'itinerary-honeymoon-bali-d3', path: 'public/images/itinerary/honeymoon-bali-d3.jpg', ratio: '16:9', prompt: 'A Seminyak beach club at sunset with a couple enjoying cocktails by the ocean, warm amber sky' },
  { id: 'itinerary-honeymoon-bali-d4', path: 'public/images/itinerary/honeymoon-bali-d4.jpg', ratio: '16:9', prompt: 'Uluwatu clifftop temple at sunset with silhouettes of the Kecak fire dance, dramatic ocean backdrop, Bali' },
  { id: 'itinerary-honeymoon-bali-d5', path: 'public/images/itinerary/honeymoon-bali-d5.jpg', ratio: '16:9', prompt: 'A couple relaxing on a daybed beside a private villa pool surrounded by tropical greenery in Bali at golden hour' },
  { id: 'itinerary-honeymoon-bali-d6', path: 'public/images/itinerary/honeymoon-bali-d6.jpg', ratio: '16:9', prompt: 'An elegant villa breakfast table with tropical fruit and flowers in soft morning light, Bali, serene farewell' },
]

async function generateOne(fal, asset) {
  const out = path.join(ROOT, asset.path)
  if (!FORCE && fs.existsSync(out)) return { id: asset.id, skipped: true }
  fs.mkdirSync(path.dirname(out), { recursive: true })
  const result = await fal.subscribe(FAL_MODEL, {
    input: {
      prompt: `${asset.prompt}. ${STYLE}`,
      image_size: RATIO_TO_SIZE[asset.ratio] || 'landscape_16_9',
      num_images: 1,
      output_format: 'jpeg',
    },
  })
  const url = result?.data?.images?.[0]?.url
  if (!url) throw new Error(`no image url for ${asset.id}: ${JSON.stringify(result?.data).slice(0, 160)}`)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`download failed ${res.status} for ${asset.id}`)
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(out, buf)
  return { id: asset.id, kb: Math.round(buf.length / 1024) }
}

async function main() {
  process.env.FAL_KEY = readFalKey()
  const fal = await loadFal()
  fal.config({ credentials: process.env.FAL_KEY })

  const queue = ASSETS.filter((a) => ONLY.length === 0 || ONLY.some((o) => a.id.includes(o)))
  console.log(`[gen] model=${FAL_MODEL} assets=${queue.length} force=${FORCE}`)

  const results = []
  for (let i = 0; i < queue.length; i += CONCURRENCY) {
    const batch = queue.slice(i, i + CONCURRENCY)
    const settled = await Promise.allSettled(batch.map((a) => generateOne(fal, a)))
    settled.forEach((s, j) => {
      const a = batch[j]
      if (s.status === 'fulfilled') {
        const r = s.value
        console.log(r.skipped ? `[skip] ${r.id} (exists)` : `[ok]   ${r.id} (${r.kb} KB)`)
        results.push(r)
      } else {
        console.error(`[fail] ${a.id}: ${s.reason?.message || s.reason}`)
        results.push({ id: a.id, error: String(s.reason?.message || s.reason) })
      }
    })
  }
  const ok = results.filter((r) => r.kb).length
  const skip = results.filter((r) => r.skipped).length
  const fail = results.filter((r) => r.error).length
  console.log(`[done] ok=${ok} skip=${skip} fail=${fail}`)
  if (fail) process.exitCode = 1
}

main().catch((e) => {
  console.error('[fatal]', e?.message || e)
  process.exit(1)
})
