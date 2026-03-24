import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [75, 100]
  },
  allowedDevOrigins: ['192.168.0.13']
};

export default nextConfig;