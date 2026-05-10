// Run with: node generate-icons.mjs
// Generates minimal PWA PNG icons using pure Node.js (no external deps)

import { writeFileSync } from 'fs'
import { createCanvas } from 'node:canvas'

function makeIcon(size) {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')

  // Background
  ctx.fillStyle = '#15803d'
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.fill()

  // Soccer ball emoji
  ctx.font = `${size * 0.6}px serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('⚽', size / 2, size / 2 + size * 0.05)

  return canvas.toBuffer('image/png')
}

try {
  writeFileSync('public/pwa-192x192.png', makeIcon(192))
  writeFileSync('public/pwa-512x512.png', makeIcon(512))
  writeFileSync('public/apple-touch-icon.png', makeIcon(180))
  console.log('Icons generated!')
} catch {
  console.log('node:canvas not available — using Python fallback')
  process.exit(1)
}
