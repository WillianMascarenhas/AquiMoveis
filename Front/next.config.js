/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "static.wixstatic.com", "media.istockphoto.com"],
    formats: ["image/webp"],
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com/willmasca/image/upload"
  },
};

module.exports = nextConfig;
