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
      {
        source: "/products/YJV-Copper-Core-XLPE-Insulated-PVC-Sheathed-Power-Cable.html",
        destination: "/products/low-voltage-xlpe-power-cables",
        permanent: true,
      },
      {
        source: "/products/YJV22-Copper-Conductor-XLPE-Insulated-Steel-Tape-Armoured-PVC-Sheathed-Power-Cable-1.html",
        destination: "/products/low-voltage-armoured-power-cables",
        permanent: true,
      },
      {
        source: "/products/YJV32-Copper-Core-XLPE-Insulated-Steel-Wire-Armoured-PVC-Sheathed-Power-Cable.html",
        destination: "/products/low-voltage-armoured-power-cables",
        permanent: true,
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
