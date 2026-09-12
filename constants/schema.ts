import { site, company } from "@/config/site";

/** Dolu olan sosyal medya adresleri — boşlar şemaya girmez */
const socialProfiles: string[] = [
  company.social.instagram,
  company.social.facebook,
].filter((u) => u.length > 0);

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
      // Sosyal hesaplar girilene kadar anahtar hiç yazılmasın — boş dizi
      // ("sameAs":[]) şemada anlamsız gürültü. config/site.ts > social doldur.
      ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
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

/**
 * Breadcrumb — Google'ın SERP'te yol izini göstermesi için.
 * Yol parçaları site.url ile mutlaklaştırılır.
 */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

/**
 * Hizmet listeleme sayfası — CollectionPage + ItemList.
 * Arama motoruna sayfanın bir koleksiyon olduğunu ve hangi 17 hizmeti
 * listelediğini bildirir; tekil hizmet sayfalarına giden yolu güçlendirir.
 */
export function serviceListSchema(
  items: { name: string; slug: string; blurb: string }[],
) {
  return {
    "@type": "CollectionPage",
    "@id": `${site.url}/hizmetler#collection`,
    url: `${site.url}/hizmetler`,
    name: "Catering Hizmetlerimiz",
    description: `${site.name} — İstanbul genelinde ${items.length} catering hizmeti.`,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `${site.url}/hizmetler/${s.slug}`,
      })),
    },
  };
}
