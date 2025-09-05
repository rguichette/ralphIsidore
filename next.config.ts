// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["logo.svgcdn.com"], // 👈 add this line
  },
  // (optional) turn off the “x-powered-by: Next.js” header:
  // poweredByHeader: false,
};

export default nextConfig;
