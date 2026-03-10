import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const iconBuffer = readFileSync(join(process.cwd(), 'public/favicon-32x32.png'))
  return new Response(iconBuffer, {
    headers: { 'Content-Type': 'image/png' },
  })
}
