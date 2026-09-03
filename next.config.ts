import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * AVIF önce denenir, desteklemeyen tarayıcı WebP alır.
     * JPEG'e göre ~%50 daha küçük dosya = daha hızlı LCP.
     */
    formats: ["image/avif", "image/webp"],
    // Kart, galeri ve hero için gerçekten kullanılan genişlikler
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  // Kaynak haritaları üretimde sunulmasın
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Hash'li olmayan statik görseller uzun süre önbelleklensin
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
