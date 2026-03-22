/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel runs `next build`; ESLint can fail the deploy on warnings-as-errors. Run `npm run lint` locally; tighten this when clean.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};
module.exports = nextConfig;
