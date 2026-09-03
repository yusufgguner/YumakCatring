/**
 * Site geneli sabitler — tek doğruluk kaynağı.
 * Alan adı, marka bilgisi ve iletişim verisi koda gömülmez, buradan okunur.
 */

export const site = {
  name: "Yumak Catering",
  // TODO: gerçek alan adı alınınca güncelle
  url: "https://www.yumakcatering.com",
  locale: "tr_TR",
  lang: "tr",
  description:
    "İstanbul genelinde kurumsal catering, kokteyl, fuar, taşımalı ve mevlüt yemek organizasyonları. Kendi merkez mutfağımızda günlük üretim, kurulumdan servise tam hizmet.",
  slogan: "Her Davetin Mutfağı",
} as const;

export const company = {
  legalName: "Yumak Catering",
  phone: {
    display: "0538 446 69 38",
    href: "tel:+905384466938",
    e164: "+905384466938",
    whatsapp: "905384466938",
  },
  // TODO: gerçek e-posta
  email: "info@yumakcatering.com",
  // TODO: gerçek adres — LocalBusiness schema ve yerel SEO için kritik
  address: {
    street: "",
    district: "",
    city: "İstanbul",
    region: "İstanbul",
    postalCode: "",
    country: "TR",
  },
  areaServed: "İstanbul geneli — Avrupa ve Anadolu yakası",
  openingHours: {
    display: "Her gün 08:00 – 22:00",
    opens: "08:00",
    closes: "22:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  // TODO: gerçek sosyal medya adresleri
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

/** Ana sayfa güven bölümü — TODO: gerçek rakamlarla değiştir */
export const stats = [
  { value: 12, suffix: "", label: "Yıllık Tecrübe" },
  { value: 1200, suffix: "+", label: "Tamamlanan Organizasyon" },
  { value: 180, suffix: "+", label: "Kurumsal Müşteri" },
  { value: 250, suffix: "B+", label: "Ağırlanan Misafir" },
] as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${company.phone.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
