/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "static.wixstatic.com", "media.istockphoto.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
