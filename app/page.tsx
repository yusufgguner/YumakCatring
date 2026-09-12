import Image from "next/image";
import Link from "next/link";
import {
  ChefHat,
  ShieldCheck,
  Truck,
  Clock3,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { Accordion } from "@/components/ui/Accordion";
import { featuredServices, services } from "@/constants/services";
import { clients, testimonials, faq, galleryItems } from "@/constants/content";
import { localBusinessSchema, serviceCatalogSchema } from "@/constants/schema";
import { company, site, stats, whatsappUrl } from "@/config/site";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { QuoteForm } from "@/components/ui/QuoteForm";

const HERO_IMAGES = [
  { src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80", alt: "Açık büfede chafing dish ile sıcak yemek servisi" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", alt: "Kurumsal davet için hazırlanmış yemek masası" },
  { src: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=800&q=80", alt: "Şefin tabak sunumunu tamamlaması" },
  { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80", alt: "Taze sebzelerle hazırlanmış salata kasesi" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Ana yemek servisinde et sunumu" },
  { src: "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=800&q=80", alt: "Fırından yeni çıkmış sıcak ikram" },
  { src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80", alt: "Kokteyl davetinde finger food tabağı" },
  { src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80", alt: "Kahvaltı ve ikram büfesi düzeni" },
  { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", alt: "Mevsim sebzeleriyle renkli salata sunumu" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80", alt: "Izgara ve mangal çeşitleri" },
];

const reasons = [
  {
    Icon: ChefHat,
    title: "Kendi Mutfağımız",
    text: "Tüm üretim merkez mutfağımızda, etkinlik günü taze yapılır. Fason üretim yok.",
  },
  {
    Icon: ShieldCheck,
    title: "Hijyen Disiplini",
    text: "Sıcaklık takibi, numune saklama ve kayıt tutma standart uygulamamızdır.",
  },
  {
    Icon: Truck,
    title: "Tam Ekipman",
    text: "Masa, örtü, chafing dish, porselen ve servis personeli hizmete dahildir.",
  },
  {
    Icon: Clock3,
    title: "Dakika Hassasiyeti",
    text: "Servis saatleri yazılı zaman çizelgesine bağlanır, önceden paylaşılır.",
  },
];

const steps = [
  ["İletişim", "Tarih, kişi sayısı ve lokasyonu iletin."],
  ["Planlama", "İhtiyacı birlikte netleştirir, kapsamı çıkarırız."],
  ["Menü", "Konseptinize uygun menü kurgusu hazırlanır."],
  ["Hazırlık", "Üretim ve ekipman planı devreye girer."],
  ["Teslimat", "Sıcak zincir korunarak lokasyona ulaşırız."],
  ["Organizasyon", "Kurulum ve servis ekibimiz tarafından yürütülür."],
  ["Memnuniyet", "Alan toplanır, geri bildiriminiz alınır."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    localBusinessSchema,
    serviceCatalogSchema(services),
    /**
     * NOT: Google 7 Mayıs 2026'da FAQ zengin sonuçlarını tüm siteler için
     * kaldırdı — bu işaretleme artık SERP'te açılır kutu getirmiyor.
     * Zarar vermediği ve içeriği makine tarafından okunabilir kıldığı için
     * bırakıldı; sıralama faydası beklenmemeli.
     */
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main">
        {/* ═══════════════ 1. HERO ═══════════════ */}
        <ImageStreamHero
          images={HERO_IMAGES}
          className="relative flex min-h-[100svh] items-center justify-center bg-ink-950 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/72 to-ink-950/95" />
          <div
            aria-hidden
            className="absolute inset-0 [background:radial-gradient(62%_52%_at_50%_46%,rgb(12_10_9/0.66)_0%,rgb(12_10_9/0.28)_55%,transparent_100%)]"
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24">
            <Reveal kind="fade">
              <div className="ornament text-gold-400">
                <i />
              </div>
            </Reveal>
            <Reveal kind="fade" delay={0.08}>
              <p className="eyebrow mt-7 text-white/85 drop-shadow-md">
                İstanbul · Premium Catering
              </p>
            </Reveal>
            <Reveal kind="fade" delay={0.16}>
              <h1 className="mt-6 font-normal !leading-[1.08] text-white drop-shadow-lg">
                {site.slogan}
              </h1>
            </Reveal>
            <Reveal kind="fade" delay={0.24}>
              <p className="mx-auto mt-8 max-w-xl text-[1.0625rem] leading-[1.75] text-white/92 drop-shadow-md">
                Kurumsal davetten düğüne, fuardan mevlüt sofrasına — üretimden
                servise kadar tüm sorumluluğu tek elden üstleniyoruz.
              </p>
            </Reveal>
            <Reveal kind="fade" delay={0.32}>
              <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="#iletisim"
                  className="flex min-h-[54px] w-full items-center justify-center gap-3 bg-white px-9 text-eyebrow font-medium uppercase tracking-[0.24em] text-ink-950 transition-colors duration-200 hover:bg-gold-600 hover:text-white shadow-xl sm:w-auto"
                >
                  Hemen Teklif Al
                  <ArrowRight size={15} strokeWidth={1.5} />
                </Link>
                <Link
                  href="#hizmetler"
                  className="flex min-h-[54px] w-full items-center justify-center border border-white/60 px-9 text-eyebrow font-medium uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:border-white hover:bg-white/10 sm:w-auto"
                >
                  Hizmetleri İncele
                </Link>
              </div>
            </Reveal>
          </div>

          {/* kaydırma işareti */}
          <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
            <div className="h-14 w-px bg-gradient-to-b from-white/80 to-transparent" />
          </div>
        </ImageStreamHero>

        {/* ═══════════════ 2. GÜVEN — RAKAMLAR ═══════════════
            Gerçek rakamlar config/site.ts > stats içine girilene kadar gizli. */}
        {stats.length > 0 ? (
        <section className="border-b border-ink-200 bg-ink-950">
          <Stagger className="mx-auto grid max-w-[85rem] grid-cols-2 gap-y-12 px-5 py-20 md:grid-cols-4 md:px-10">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <b className="block font-[family-name:var(--font-display)] text-[2.75rem] font-normal leading-none text-gold-400 md:text-[3.25rem]">
                  <Counter to={s.value} suffix={s.suffix} />
                </b>
                <span className="eyebrow mt-4 block text-white/55">{s.label}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
        ) : null}

        {/* ═══════════════ 3. NEDEN YUMAK ═══════════════ */}
        <section id="hakkimizda" className="px-5 py-20 md:px-10 md:py-32">
          <div className="mx-auto max-w-[85rem]">
            <Reveal kind="fade" className="mx-auto max-w-2xl text-center">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">Neden Yumak Catering</p>
              <h2 className="mt-4">Lezzet Tesadüf Değildir</h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-500">
                Malzemenin girişinden sofraya çıkışına kadar süreç bizim
                kontrolümüzde. İşin görünmeyen kısmı, görünen kısmını belirler.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 md:mt-20 md:gap-y-14 lg:grid-cols-4">
              {reasons.map(({ Icon, title, text }) => (
                <StaggerItem key={title} className="text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-gold-600/35 text-gold-600">
                    <Icon size={24} strokeWidth={1.2} />
                  </div>
                  <h3 className="mt-6 text-base">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ═══════════════ 4. HİZMETLER ═══════════════ */}
        <section id="hizmetler" className="bg-beige-100 px-5 py-20 md:px-10 md:py-32">
          <div className="mx-auto max-w-[85rem]">
            <Reveal kind="fade" className="mx-auto max-w-2xl text-center">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">Hizmetlerimiz</p>
              <h2 className="mt-4">Her Organizasyona Ayrı Kurgu</h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-500">
                On yedi hizmet alanı, tek bir standart: taze üretim, zamanında
                teslim, kusursuz sunum.
              </p>
            </Reveal>

            <Stagger
              className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-20 md:gap-y-14 lg:grid-cols-4"
              step={0.06}
            >
              {featuredServices.map((s) => (
                <StaggerItem key={s.slug}>
                  <Link href={`/hizmetler/${s.slug}`} className="group block">
                    {/* Tek kolonda 4/5 kart ekranı dolduruyordu; telefonda yatay oran */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-200 sm:aspect-[4/5]">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/15" />
                    </div>
                    <h3 className="mt-6 text-[0.9375rem] transition-colors group-hover:text-gold-600">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {s.blurb}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-3 text-eyebrow font-medium uppercase tracking-[0.24em] text-ink-500 transition-colors group-hover:text-gold-600">
                      <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
                      Detaylar
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal kind="fade" className="mt-16 text-center">
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[54px] items-center justify-center gap-3 border border-ink-900 px-10 text-eyebrow font-medium uppercase tracking-[0.24em] transition-colors duration-200 hover:bg-ink-900 hover:text-white"
              >
                Tüm Hizmetler (17)
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════ 5. ÇALIŞMA SÜRECİ ═══════════════ */}
        <section id="organizasyonlar" className="relative overflow-hidden bg-ink-950 px-5 py-20 md:px-10 md:py-32">
          <Image
            src="/images/genel/cta.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-ink-950/70" />

          <div className="relative mx-auto max-w-[85rem]">
            <Reveal kind="fade" className="mx-auto max-w-2xl text-center">
              <div className="ornament text-gold-400">
                <i />
              </div>
              <p className="eyebrow mt-6 text-white/55">Nasıl Çalışıyoruz</p>
              <h2 className="mt-4 text-white">Yedi Adımda, Sürprizsiz</h2>
            </Reveal>

            <Stagger
              className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-20 md:gap-y-12 lg:grid-cols-4"
              step={0.06}
            >
              {steps.map(([title, text], i) => (
                <StaggerItem key={title} className="border-t border-white/15 pt-6">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-gold-400/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[0.9375rem] text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ═══════════════ 6. GALERİ ŞERİDİ ═══════════════ */}
        <section id="galeri" className="py-20 md:py-32">
          <Reveal kind="fade" className="mx-auto max-w-2xl px-5 text-center md:px-10">
            <div className="ornament">
              <i />
            </div>
            <p className="eyebrow mt-6">Galeri</p>
            <h2 className="mt-4">Sofranın Hâli</h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px bg-ink-200 md:mt-16 md:grid-cols-4">
            {galleryItems.map((g) => (
              <div
                key={g.file}
                className="group relative aspect-square overflow-hidden bg-white"
              >
                <Image
                  src={`/images/galeri-v3/${g.file}.jpg`}
                  alt={g.alt}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════ 7. REFERANSLAR ═══════════════ */}
        <section className="border-y border-ink-200 bg-beige-100 px-5 py-16 md:px-10">
          <Reveal kind="fade" className="mx-auto max-w-[85rem] text-center">
            <p className="eyebrow">Bizi Tercih Edenler</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-y-6">
              {clients.map((c) => (
                <span
                  key={c}
                  className="font-[family-name:var(--font-display)] text-[0.9375rem] uppercase tracking-[0.18em] text-ink-500/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ═══════════════ 8. MÜŞTERİ YORUMLARI ═══════════════
            Gerçek yorumlar constants/content.ts > testimonials içine
            girilene kadar gizli. */}
        {testimonials.length > 0 ? (
        <section className="px-5 py-20 md:px-10 md:py-32">
          <div className="mx-auto max-w-[85rem]">
            <Reveal kind="fade" className="mx-auto max-w-2xl text-center">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">Onlar Ne Dedi</p>
              <h2 className="mt-4">Müşteri Yorumları</h2>
            </Reveal>

            <Stagger className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3" step={0.08}>
              {testimonials.map((t) => (
                <StaggerItem key={t.name} className="text-center">
                  <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-ink-200 bg-white font-[family-name:var(--font-display)] text-xl tracking-wide text-gold-600">
                    {t.initials}
                  </div>
                  <blockquote className="mx-auto mt-7 max-w-[34ch] text-sm leading-[1.85] text-ink-500">
                    “{t.quote}”
                  </blockquote>
                  <p className="mt-7 text-eyebrow font-semibold uppercase tracking-[0.2em]">
                    {t.name}
                  </p>
                  <p className="mt-2 text-eyebrow uppercase tracking-[0.12em] text-ink-300">
                    {t.meta}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
        ) : null}

        {/* ═══════════════ 9. SSS ═══════════════ */}
        <section className="bg-beige-100 px-5 py-20 md:px-10 md:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal kind="fade" className="text-center">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">Sık Sorulanlar</p>
              <h2 className="mt-4">Merak Edilenler</h2>
            </Reveal>
            <Reveal kind="rise" delay={0.08} className="mt-14">
              <Accordion items={faq} />
            </Reveal>
          </div>
        </section>

        {/* ═══════════════ 10. BRIEF + İLETİŞİM ═══════════════ */}
        {/* SSS ile aynı zemin: iki bölümün alt+üst boşluğu üst üste binip
            192-256px boş bej alan bırakıyordu — üst boşluk kısaltıldı. */}
        <section id="iletisim" className="bg-beige-100 px-5 pb-20 pt-6 md:px-10 md:pb-32 md:pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal kind="fade">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">Başlayalım</p>
              <h2 className="mt-4">Kafanızdaki Organizasyon Ne?</h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-500">
                Üç kısa adımda anlatın, talebiniz WhatsApp üzerinden doğrudan
                ekibimize ulaşsın.
              </p>
            </Reveal>

            <Reveal kind="rise" delay={0.1} className="mt-12">
              <QuoteForm />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sabit mobil çubuk footer'ın son satırını kapatıyordu — çubuk
          yüksekliği kadar yer ayır. Cihaz güvenli alanı Footer'ın
          pb-[env(safe-area-inset-bottom)] payından geliyor. */}
      <div aria-hidden className="h-[3.625rem] bg-ink-950 lg:hidden" />

      {/* Mobil hızlı iletişim çubuğu */}
      <nav
        aria-label="Hızlı iletişim"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink-200 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <a
          href={company.phone.href}
          className="flex min-h-[58px] flex-col items-center justify-center gap-1 text-eyebrow font-medium uppercase leading-none tracking-[0.12em] text-ink-700"
        >
          <Phone size={17} strokeWidth={1.5} />
          Ara
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          className="flex min-h-[58px] flex-col items-center justify-center gap-1 text-eyebrow font-medium uppercase leading-none tracking-[0.12em] text-ink-700"
        >
          <MessageCircle size={17} strokeWidth={1.5} />
          WhatsApp
        </a>
        <a
          href="#iletisim"
          className="flex min-h-[58px] flex-col items-center justify-center gap-1 bg-gold-600 text-eyebrow font-medium uppercase leading-none tracking-[0.12em] text-white"
        >
          <ArrowRight size={17} strokeWidth={1.5} />
          Teklif Al
        </a>
      </nav>
    </>
  );
}
