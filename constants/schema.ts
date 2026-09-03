import { site, company } from "@/config/site";

/** Her sayfada bulunan site geneli varlıklar */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/images/logo/logo-dark.png`,
        width: 470,
        height: 398,
      },
      telephone: company.phone.e164,
      email: company.email,
      // TODO: sosyal medya adresleri netleşince doldur — Google bilgi paneli için
      sameAs: [company.social.instagram, company.social.facebook].filter(Boolean),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: company.phone.e164,
          contactType: "sales",
          areaServed: "TR",
          availableLanguage: ["Turkish"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "tr-TR",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

/** Ana sayfada kullanılan yerel işletme varlığı */
export const localBusinessSchema = {
  "@type": "FoodEstablishment",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: company.phone.e164,
  email: company.email,
  priceRange: "$$$",
  servesCuisine: ["Türk Mutfağı", "Dünya Mutfağı", "Kokteyl"],
  image: `${site.url}/images/og/og-default.jpg`,
  logo: `${site.url}/images/logo/logo-dark.png`,
  parentOrganization: { "@id": `${site.url}/#organization` },
  address: {
    "@type": "PostalAddress",
    // TODO: sokak adresi ve posta kodu girilmeden harita paketinde çıkma şansı düşük
    streetAddress: company.address.street || undefined,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode || undefined,
    addressCountry: company.address.country,
  },
  areaServed: { "@type": "City", name: company.address.city },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: company.openingHours.days,
      opens: company.openingHours.opens,
      closes: company.openingHours.closes,
    },
  ],
};

/**
 * Hizmet kataloğu — ana sayfada 17 hizmeti Google'a tek yapıda bildirir.
 * Hizmet sayfalarındaki tekil Service şemalarını destekler, onların yerine geçmez.
 */
export function serviceCatalogSchema(
  items: { name: string; slug: string; blurb: string }[],
) {
  return {
    "@type": "OfferCatalog",
    "@id": `${site.url}/#services`,
    name: "Catering Hizmetleri",
    itemListElement: items.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.blurb,
        url: `${site.url}/hizmetler/${s.slug}`,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "City", name: company.address.city },
      },
    })),
  };
}
