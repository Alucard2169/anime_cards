/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.myanimelist.net", "giphy.com"],
  },
};

module.exports = nextConfig
