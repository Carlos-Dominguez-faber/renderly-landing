import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Activa el MCP server en /_next/mcp (Next.js 16+)
  experimental: {
    mcpServer: true,
  },
  async redirects() {
    return [
      {
        source: '/conference',
        destination: 'https://app.renderly.space/promo/conference',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
