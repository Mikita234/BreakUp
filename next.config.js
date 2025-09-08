/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/breakup-help' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/breakup-help/' : '',
}

module.exports = nextConfig
