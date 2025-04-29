/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "img.freepik.com", "res.cloudinary.com"], // Add other domains if needed
  },
  typescript: {
    ignoreBuildErrors: true, // This skips type checking during build
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
