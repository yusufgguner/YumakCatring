/**
 * Animasyon sabitleri — PROJE-PLANI.md Bölüm 12 ile birebir.
 * Süre ve eğri değerleri tek yerden yönetilir; bileşenler sayı yazmaz.
 */

/** Bezier eğrileri */
export const ease = {
  /** Giren öğeler — ease-out */
  out: [0.22, 0.61, 0.36, 1] as const,
  /** Bölüm girişleri — yumuşak yavaşlama */
  soft: [0.16, 1, 0.3, 1] as const,
  /** Çıkış — ease-in */
  in: [0.4, 0, 1, 1] as const,
  /** Gidiş-dönüş */
  inOut: [0.65, 0, 0.35, 1] as const,
  /** Hafif geri tepme — kart girişleri */
  back: [0.34, 1.36, 0.64, 1] as const,
} as const;

/** Süreler (saniye — Framer Motion saniye kullanır) */
export const duration = {
  instant: 0.12,
  micro: 0.22,
  standard: 0.4,
  section: 0.52,
  scene: 0.8,
  /** Çıkış her zaman girişin ~%60'ı — yavaş çıkış "takıldı" hissi verir */
  exit: 0.25,
} as const;

/** Kademe (stagger) */
export const stagger = {
  step: 0.08,
  /** 8'den fazla kademe son öğeleri yavaş hissettirir */
  maxSteps: 8,
} as const;

/** Sık kullanılan variant'lar */
export const variants = {
  /** Aşağıdan yükselerek gir — kart, blok */
  rise: {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.section, ease: ease.out },
    },
  },
  /** Yalnız sönümlenerek gir — metin satırları */
  fade: {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.standard, ease: ease.out },
    },
  },
  /** Ölçeklenerek gir — görsel kartlar */
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: duration.standard, ease: ease.back },
    },
  },
  /** Bulanıktan netleşerek gir — yorumlar, hero metni */
  blur: {
    hidden: { opacity: 0, filter: "blur(6px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: duration.section, ease: ease.out },
    },
  },
  /** Çocuklarını kademeli tetikleyen kapsayıcı */
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger.step, delayChildren: 0.05 },
    },
  },
} as const;

/** Görünürlük eşiği — bir kez tetiklenir, geri sarmaz */
export const viewport = { once: true, amount: 0.15, margin: "0px 0px -10% 0px" } as const;
