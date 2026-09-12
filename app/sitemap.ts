import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/constants/services";

/**
 * Dinamik sitemap — hizmet listesi değiştiğinde otomatik güncellenir.
 * Elle bakım gerektiren statik XML dosyası tutmuyoruz.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/hizmetler`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${site.url}/images/og/og-default.jpg`],
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    // Öne çıkan hizmetler ticari niyeti daha yüksek sayfalar
    priority: s.featured ? 0.8 : 0.7,
    // Google Görseller sayfayı görselle birlikte değerlendirsin
    images: [`${site.url}${s.image}`],
  }));

  return [...staticRoutes, ...serviceRoutes];
}
