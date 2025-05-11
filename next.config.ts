import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://images.pexels.com/photos/**')],
    unoptimized: true
  }
};

export default nextConfig;
