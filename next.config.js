/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.myanimelist.net", "giphy.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig
