import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ru3iezrgy5poujuh.public.blob.vercel-storage.com" },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: "/images/:path*",
          destination: "/Images/:path*",
        },
        {
          source: "/Images/:path*",
          destination: "/images/:path*",
        }
      ],
    };
  },
};

export default nextConfig;
