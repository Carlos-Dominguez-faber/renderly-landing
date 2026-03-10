import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  const iconBuffer = readFileSync(join(process.cwd(), 'public/apple-touch-icon.png'))
  return new Response(iconBuffer, {
    headers: { 'Content-Type': 'image/png' },
  })
}
