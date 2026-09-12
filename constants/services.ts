export type ServiceGroup = "kurumsal" | "ozel-gun" | "etkinlik" | "surekli";

export interface Service {
  slug: string;
  name: string;
  /** Menüde kısa görünen ad */
  short: string;
  group: ServiceGroup;
  blurb: string;
  image: string;
  featured?: boolean;

  /* ─────────────────────────────────────────────────────────────
   * Hizmete ÖZEL içerik — SEO için kritik.
   *
   * Şu an 17 hizmet sayfası da 252-256 kelime; içeriğin neredeyse
   * tamamı ortak şablon. Google bunları birbirinin kopyası sayar ve
   * büyük bölümünü sıralamaya sokmaz.
   *
   * Aşağıdaki alanları doldurduğun hizmetin sayfasında ilgili bölüm
   * otomatik görünür; boş bıraktıkların hiç render edilmez.
   * Hedef: hizmet başına 300-500 kelime ÖZGÜN metin.
   * ───────────────────────────────────────────────────────────── */

  /** 2-3 cümle giriş. Bu hizmeti diğerlerinden ayıran şey ne? */
  intro?: string;

  /** Kimler için — ör: "150-400 kişilik şirket yıl sonu partileri" */
  audience?: string[];

  /** Tipik kişi sayısı aralığı — ör: "50 – 800 kişi" */
  capacity?: string;

  /** Menü yaklaşımı: bu hizmette menü nasıl kurgulanır? */
  menuApproach?: string;

  /** Bu hizmete özel süreç adımları */
  process?: { title: string; text: string }[];

  /** Bu hizmete özel sık sorulanlar.
   *  Not: FAQPage şeması eklenmiyor — Google 7 Mayıs 2026'da FAQ zengin
   *  sonuçlarını tüm siteler için kaldırdı. İçerik değeri için duruyor. */
  faq?: { q: string; a: string }[];
}

export const serviceGroups: { id: ServiceGroup; label: string }[] = [
  { id: "kurumsal", label: "Kurumsal" },
  { id: "ozel-gun", label: "Özel Günler" },
  { id: "etkinlik", label: "Etkinlik" },
  { id: "surekli", label: "Sürekli Hizmet" },
];

export const services: Service[] = [
  {
    slug: "kurumsal-catering",
    name: "Kurumsal Catering",
    short: "Kurumsal Catering",
    group: "kurumsal",
    blurb:
      "Şirket davetleri ve kurumsal ağırlamalarda kurulumdan servise tam kapsamlı organizasyon.",
    image: "/images/hizmetler-v3/kurumsal.jpg",
    featured: true,
  },
  {
    slug: "is-toplantisi-catering",
    name: "İş Toplantısı Catering",
    short: "İş Toplantısı",
    group: "kurumsal",
    blurb:
      "Coffee break, kahvaltı ve öğle servisi — toplantı ajandanıza göre dakikası dakikasına.",
    image: "/images/hizmetler-v3/toplanti.jpg",
    featured: true,
  },
  {
    slug: "vip-catering",
    name: "VIP Catering",
    short: "VIP Catering",
    group: "kurumsal",
    blurb:
      "Protokol ve üst yönetim ağırlamalarında özel şef, porselen servis ve sessiz operasyon.",
    image: "/images/hizmetler-v3/kokteyl.jpg",
  },
  {
    slug: "davet-organizasyonu",
    name: "Davet Organizasyonu",
    short: "Davet",
    group: "kurumsal",
    blurb: "Kurumsal davet ve ağırlamalarda menü tasarımı, ekipman ve servis ekibi.",
    image: "/images/hizmetler-v3/ozel-gun.jpg",
  },

  {
    slug: "dugun-catering",
    name: "Düğün Catering",
    short: "Düğün",
    group: "ozel-gun",
    blurb:
      "Hayatınızın en önemli gününde menüden sunuma kadar her detay planlı ilerler.",
    image: "/images/hizmetler-v3/ozel-gun.jpg",
    featured: true,
  },
  {
    slug: "nisan-catering",
    name: "Nişan Catering",
    short: "Nişan",
    group: "ozel-gun",
    blurb: "Nişan, kına ve söz törenlerinde tema uyumlu büfe tasarımı ve tatlı sunumu.",
    image: "/images/galeri-v3/gal-06.jpg",
  },
  {
    slug: "ozel-gun-organizasyonu",
    name: "Özel Gün Organizasyonu",
    short: "Özel Gün",
    group: "ozel-gun",
    blurb: "Doğum günü, yıldönümü ve aile davetlerinde sıcak ve özenli sofralar.",
    image: "/images/galeri-v3/gal-08.jpg",

    /* ── DOLDURMA ŞABLONU ─────────────────────────────────────────
     * Aşağıdaki yorumu açıp kendi metninle doldur. Doldurduğun alan
     * sayfada otomatik görünür. Aynısını diğer 16 hizmete uygula.
     * Fiyat, kapasite, referans gibi verileri sen gir — tahmin yazılmadı.
     *
     * intro:
     *   "İki-üç cümle. Bu hizmeti diğerlerinden ayıran şey ne? " +
     *   "Hangi problemi çözüyorsuńuz?",
     *
     * audience: [
     *   "Ör: 150-400 kişilik şirket yıl sonu partileri",
     *   "Ör: Bayi ve çalışan buluşmaları",
     * ],
     *
     * capacity: "Ör: 50 – 800 kişi",
     *
     * menuApproach:
     *   "Bu hizmette menü nasıl kurgulanıyor? Açık büfe mi, tabak servis mi? " +
     *   "Kaç çeşit? Vejetaryen/glutensiz seçenek var mı?",
     *
     * process: [
     *   { title: "Keşif", text: "Mekân ve kişi sayısına göre ne yapıyorsunuz?" },
     *   { title: "Menü onayı", text: "Tadım var mı? Kaç gün önce kesinleşiyor?" },
     *   { title: "Kurulum", text: "Etkinlikten kaç saat önce ekip mekânda?" },
     *   { title: "Servis", text: "Kaç personel? Servis akışı nasıl?" },
     * ],
     *
     * faq: [
     *   { q: "Bu hizmette minimum kişi sayısı nedir?", a: "..." },
     *   { q: "Mekânı siz mi ayarlıyorsunuz?", a: "..." },
     * ],
     * ──────────────────────────────────────────────────────────── */
  },
  {
    slug: "mevlut-yemekleri",
    name: "Mevlüt Yemekleri",
    short: "Mevlüt",
    group: "ozel-gun",
    blurb:
      "Mevlüt, kandil ve hayır yemeklerinde geleneksel sofra düzeni. 24 saat içinde organizasyon.",
    image: "/images/hizmetler-v3/mevlut.jpg",
    featured: true,
  },

  {
    slug: "kokteyl-organizasyonu",
    name: "Kokteyl Organizasyonu",
    short: "Kokteyl",
    group: "etkinlik",
    blurb:
      "Canapé, finger food, canlı pişirme istasyonu ve profesyonel bar kurulumu.",
    image: "/images/hizmetler-v3/kokteyl.jpg",
    featured: true,
  },
  {
    slug: "acilis-organizasyonu",
    name: "Açılış Organizasyonu",
    short: "Açılış",
    group: "etkinlik",
    blurb: "Açılış ve basın davetlerinde hızlı kurulum, akıcı servis, temiz sunum.",
    image: "/images/galeri-v3/gal-01.jpg",
  },
  {
    slug: "lansman-organizasyonu",
    name: "Lansman Organizasyonu",
    short: "Lansman",
    group: "etkinlik",
    blurb: "Marka lansmanlarında konsepte uygun menü tasarımı ve sahne uyumlu servis akışı.",
    image: "/images/galeri-v3/gal-03.jpg",
  },
  {
    slug: "fuar-catering",
    name: "Fuar Catering",
    short: "Fuar",
    group: "etkinlik",
    blurb:
      "Yoğun ziyaretçi akışına göre planlanmış, sürekli tazelenen açık büfe hattı.",
    image: "/images/hizmetler-v3/fuar.jpg",
    featured: true,
  },
  {
    slug: "festival-etkinlik-catering",
    name: "Festival ve Etkinlik Catering",
    short: "Festival",
    group: "etkinlik",
    blurb: "Yüksek hacimli alanlarda çok noktalı servis ve kesintisiz ikmal yönetimi.",
    image: "/images/galeri-v3/gal-05.jpg",
  },

  {
    slug: "personel-yemek-hizmeti",
    name: "Personel Yemek Hizmeti",
    short: "Personel Yemeği",
    group: "surekli",
    blurb:
      "Aylık tekrarsız menü döngüsü, sabit teslim saati, hijyen kayıtlı üretim.",
    image: "/images/hizmetler-v3/kurumsal.jpg",
    featured: true,
  },
  {
    slug: "fabrika-yemek-hizmeti",
    name: "Fabrika Yemek Hizmeti",
    short: "Fabrika",
    group: "surekli",
    blurb: "Vardiyalı üretim tesislerinde 7/24 planlanabilen yemek servisi.",
    image: "/images/galeri-v3/gal-10.jpg",
  },
  {
    slug: "toplu-yemek-hizmeti",
    name: "Toplu Yemek Hizmeti",
    short: "Toplu Yemek",
    group: "surekli",
    blurb: "Yüksek adetli üretimde standart kalite, sıcaklık takibi ve numune saklama.",
    image: "/images/galeri-v3/gal-02.jpg",
  },
  {
    slug: "tasimali-mobil-catering",
    name: "Taşımalı Mobil Catering",
    short: "Taşımalı Catering",
    group: "surekli",
    blurb:
      "Şantiye, saha ve uzak lokasyonlara sıcak zinciri korunmuş termobox servisi.",
    image: "/images/hizmetler-v3/tasimali.jpg",
    featured: true,
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function servicesByGroup(group: ServiceGroup) {
  return services.filter((s) => s.group === group);
}
