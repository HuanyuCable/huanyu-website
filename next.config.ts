import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["resend"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "huanyucable.com" }],
        destination: "https://www.huanyucable.com/:path*",
        permanent: true,
      },
      {
        source: "/products/medium-voltage-power-cables",
        destination: "/products/medium-voltage-xlpe-power-cables",
        statusCode: 301,
      },
      {
        source: "/products/yjv22-yjv23-low-voltage-armoured-power-cables",
        destination: "/products/low-voltage-armoured-power-cables",
        statusCode: 301,
      },
      {
        source: "/products/low-voltage-unarmoured-power-cables",
        destination: "/products/low-voltage-xlpe-power-cables",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
