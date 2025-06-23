import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Essential deployment configuration
  reactStrictMode: true,
  
  // Image optimization for deployment
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Build configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Optimize for production
  poweredByHeader: false,
  
  // Compression
  compress: true,
};

export default nextConfig;
