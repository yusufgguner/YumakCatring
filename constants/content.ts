import type { FaqItem } from "@/components/ui/Accordion";

/**
 * TODO — GERÇEK REFERANSLAR
 * Müşteriden yazılı logo kullanım izni alınana kadar sektör adıyla anonim gösterim.
 * İzin alındıkça buraya gerçek firma adı / logo yolu yazılacak.
 */
export const clients = [
  "Otomotiv Grubu",
  "Uluslararası Fuar Organizatörü",
  "Teknoloji Şirketi",
  "İnşaat Holding",
  "Reklam Ajansı",
  "Lojistik Firması",
];

/**
 * TODO — GERÇEK MÜŞTERİ YORUMLARI
 * Uydurma yorum yazılmaz. Gerçek yorumlar toplanınca burası değiştirilecek;
 * o zamana kadar örnek metinler kullanılmaktadır.
 */
export const testimonials = [
  {
    initials: "AY",
    quote:
      "180 kişilik lansmanımızda kurulum tam saatinde bitti. Canapé sunumu misafirlerden en çok konuşulan detaydı.",
    name: "Ajans Yöneticisi",
    meta: "Ürün Lansmanı · Maslak",
  },
  {
    initials: "İK",
    quote:
      "İki yıldır personel yemeğimizi Yumak yapıyor. Menü tekrarı yok, teslim saati hiç şaşmadı.",
    name: "İnsan Kaynakları Müdürü",
    meta: "Personel Yemeği · Ümraniye",
  },
  {
    initials: "MA",
    quote:
      "Mevlüt yemeğini bir gün önceden aradık, ertesi gün her şey hazırdı. Zor bir günde büyük kolaylık oldu.",
    name: "Aile",
    meta: "Mevlüt Yemeği · Bahçelievler",
  },
];

/**
 * Ana sayfa galeri şeridi.
 * Her görselin alt metni benzersiz ve açıklayıcı — Google Görseller
 * araması aynı alt metni tekrar eden görselleri sıralamaz.
 */
export const galleryItems = [
  { file: "gal-02", alt: "Açık büfe hattında sıcak yemek sunumu" },
  { file: "gal-06", alt: "Özel gün organizasyonunda tatlı büfesi düzeni" },
  { file: "gal-01", alt: "Kokteyl davetinde canapé ve finger food sunumu" },
  { file: "gal-08", alt: "Kurumsal davet için hazırlanmış masa düzeni" },
  { file: "gal-05", alt: "Chafing dish ile sıcak yemek servisi" },
  { file: "gal-03", alt: "Canapé tabağı yakın plan detay" },
  { file: "gal-10", alt: "Yumak Catering merkez mutfağında hazırlık" },
  { file: "gal-04", alt: "Etkinlik öncesi büfe kurulumu" },
];

export const faq: FaqItem[] = [
  {
    q: "Minimum kaç kişilik organizasyon yapıyorsunuz?",
    a: "Kokteyl ve özel gün organizasyonlarında minimum 30 kişi, kurumsal ve taşımalı yemek hizmetinde minimum 50 kişiden başlıyoruz. Mevlüt yemeklerinde alt sınır 50 kişidir.",
  },
  {
    q: "Ekipman ve servis personeli fiyata dahil mi?",
    a: "Evet. Büfe masaları, örtü, chafing dish, porselen ve cam ürünler, servis personeli, kurulum ve etkinlik sonrası toplama hizmete dahildir. Bar kurulumu ve barmen ihtiyaca göre ayrıca sağlanır.",
  },
  {
    q: "Ne kadar önceden rezervasyon yapmalıyım?",
    a: "İdeal süre 7–10 gündür; bu süre menü provası ve planlama için rahat bir alan bırakır. Mevlüt ve hayır yemeklerinde 24 saat içinde organizasyon yapabiliyoruz.",
  },
  {
    q: "Menüyü özelleştirebilir miyiz?",
    a: "Evet. Hazır paketlerimiz başlangıç noktasıdır; bütçe, konsept ve misafir profiline göre menü birlikte kurgulanır. Vejetaryen, glutensiz ve alerjen bazlı alternatifler sunulur.",
  },
  {
    q: "İstanbul dışına hizmet veriyor musunuz?",
    a: "İstanbul'un tamamına (Avrupa ve Anadolu yakası) hizmet veriyoruz. Çevre illere taşımalı araç ile özel organizasyonlar için ayrıca planlama yapılır.",
  },
  {
    q: "Yemekler nerede hazırlanıyor?",
    a: "Tüm üretim kendi merkez mutfağımızda, etkinlik günü taze olarak yapılır. Sıcak zincir korunarak termobox ve donanımlı araçlarla lokasyona ulaştırılır.",
  },
];
