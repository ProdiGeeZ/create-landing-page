/** @type {import('next').Config} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = config;