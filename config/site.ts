/**
 * Site geneli sabitler — tek doğruluk kaynağı.
 * Alan adı, marka bilgisi ve iletişim verisi koda gömülmez, buradan okunur.
 */

/**
 * Canonical taban adresi.
 * Alan adı henüz bağlanmadıysa NEXT_PUBLIC_SITE_URL ile geçerli
 * yayın adresine çevir; yoksa canonical yayında olmayan bir alan adını
 * işaret eder ve sayfalar indekslenmez.
 */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.yumakcatering.com"
).replace(/\/+$/, "");

export const site = {
  name: "Yumak Catering",
  url: SITE_URL,
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

export type Stat = { value: number; suffix: string; label: string };

/**
 * Ana sayfa güven bölümü — rakamlar.
 *
 * Boş bırakıldı: önceki değerler placeholder'dı ama sitede olgu gibi
 * görünüyordu. Dizi boşken bölüm ana sayfada hiç render edilmez.
 *
 * Gerçek rakamları girince bölüm otomatik geri gelir:
 *
 *   export const stats: Stat[] = [
 *     { value: 12,   suffix: "",   label: "Yıllık Tecrübe" },
 *     { value: 1200, suffix: "+",  label: "Tamamlanan Organizasyon" },
 *     { value: 180,  suffix: "+",  label: "Kurumsal Müşteri" },
 *     { value: 250,  suffix: "B+", label: "Ağırlanan Misafir" },
 *   ];
 */
export const stats: Stat[] = [];

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${company.phone.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
