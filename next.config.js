/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages (static site generation)
  images: {
    unoptimized: true, // Required as Next.js Image Optimization API doesn't work with static export
  },
}

module.exports = nextConfig
