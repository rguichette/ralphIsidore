// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  // (optional) turn off the “x-powered-by: Next.js” header:
  // poweredByHeader: false,
};

export default nextConfig;
