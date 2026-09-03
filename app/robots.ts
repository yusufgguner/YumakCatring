import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * AI tarayıcılarını bilinçli olarak engellemiyoruz.
 * Marka görünürlüğü AI arama sonuçlarında (AI Overviews, ChatGPT, Perplexity)
 * artık organik trafiğin bir parçası; engellemek görünürlüğü kesmek olur.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next.js iç uçları taranmasın — tarama bütçesi boşa gitmesin
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
