/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Seun-s-portfolio'; // Your GitHub repository name
const basePath = isProd ? `/${repoName}` : '';

const nextConfig = {
  output: 'export', // Required for GitHub Pages
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
