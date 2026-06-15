#!/usr/bin/env node
/**
 * SaktiWisata — faithful 2x super-resolution for hero photos (fal.ai ESRGAN).
 *
 * The nano-banana sources are ~1408x768, which upscale poorly when shown
 * full-bleed on retina screens ("pecah"). ESRGAN does pure super-resolution
 * (no scene change), so approved images stay identical, just sharper.
 *
 * Reuses FAL_KEY from ~/.claude.json (never printed) + the @fal-ai/client
 * that ships with the user's image-gen MCP.
 *
 * Usage:
 *   node scripts/upscale-images.mjs                 # upscale all hero photos in place
 *   node scripts/upscale-images.mjs path/to/x.jpg   # upscale specific file(s)
 */
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { createRequire } from 'node:module'

const MCP_DIR = '/Users/noviyantoian/tools/mcp-image-gen'
const MODEL = process.env.UPSCALE_MODEL || 'fal-ai/esrgan'
const SCALE = Number(process.env.UPSCALE_SCALE || 2)
const ROOT = process.cwd()

const DEFAULT_TARGETS = [
  'public/images/hero/hero-main.jpg',
  'public/images/destinasi/ubud.jpg',
  'public/images/destinasi/seminyak.jpg',
  'public/images/destinasi/uluwatu.jpg',
  'public/images/destinasi/kintamani.jpg',
  'public/images/destinasi/nusa-penida.jpg',
  'public/images/paket/ubud-retreat.jpg',
  'public/images/paket/bali-adventure.jpg',
  'public/images/paket/seminyak-luxury.jpg',
  'public/images/paket/nusa-penida.jpg',
  'public/images/paket/kintamani-sunrise.jpg',
  'public/images/paket/honeymoon-bali.jpg',
]

function readFalKey() {
  if (process.env.FAL_KEY) return process.env.FAL_KEY
  const data = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.claude.json'), 'utf8'))
  let found = null
  const walk = (o) => {
    if (found || !o || typeof o !== 'object') return
    const ms = o.mcpServers
    if (ms && typeof ms === 'object') {
      for (const cfg of Object.values(ms)) {
        if (cfg?.env?.FAL_KEY) { found = cfg.env.FAL_KEY; return }
      }
    }
    for (const v of Object.values(o)) walk(v)
  }
  walk(data)
  if (!found) throw new Error('FAL_KEY not found in env or ~/.claude.json')
  return found
}

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

async function upscaleOne(fal, rel) {
  const abs = path.isAbsolute(rel) ? rel : path.join(ROOT, rel)
  if (!fs.existsSync(abs)) return { rel, error: 'missing' }
  const buf = fs.readFileSync(abs)
  const blob = new Blob([buf], { type: 'image/jpeg' })
  const uploadedUrl = await fal.storage.upload(blob)
  const result = await fal.subscribe(MODEL, {
    input: { image_url: uploadedUrl, scale: SCALE },
  })
  const url = result?.data?.image?.url || result?.data?.images?.[0]?.url
  if (!url) throw new Error(`no output url: ${JSON.stringify(result?.data).slice(0, 160)}`)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`download ${res.status}`)
  const out = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(abs, out)
  return { rel, kb: Math.round(out.length / 1024) }
}

async function main() {
  process.env.FAL_KEY = readFalKey()
  const fal = await loadFal()
  fal.config({ credentials: process.env.FAL_KEY })

  const targets = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_TARGETS
  console.log(`[upscale] model=${MODEL} scale=${SCALE} count=${targets.length}`)

  for (const rel of targets) {
    try {
      const r = await upscaleOne(fal, rel)
      console.log(r.error ? `[skip] ${rel} (${r.error})` : `[ok]   ${rel} (${r.kb} KB)`)
    } catch (e) {
      console.error(`[fail] ${rel}: ${e?.message || e}`)
    }
  }
  console.log('[done]')
}

main().catch((e) => {
  console.error('[fatal]', e?.message || e)
  process.exit(1)
})
