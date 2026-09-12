import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ServiceDetail } from "@/components/ui/ServiceDetail";
import { services } from "@/constants/services";
import { company, site, whatsappUrl } from "@/config/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} İstanbul`,
    description: s.blurb,
    alternates: { canonical: `/hizmetler/${s.slug}` },
    openGraph: {
      type: "website",
      url: `${site.url}/hizmetler/${s.slug}`,
      title: `${s.name} | ${site.name}`,
      description: s.blurb,
      // Hizmet fotoğrafı 1200x630 değil; paylaşım kartı için doğru orandaki
      // varsayılan görsel ilk sırada, hizmete özel görsel yedeği ikinci.
      images: [
        { url: "/images/og/og-default.jpg", width: 1200, height: 630, alt: s.name },
        { url: s.image, alt: s.name },
      ],
    },
  };
}

/** Hizmete dahil olan standart kalemler — hepsinde ortak, gizli kalem yok mesajı */
const includes = [
  "Menü tasarımı ve porsiyon planlaması",
  "Kendi mutfağımızda günlük taze üretim",
  "Büfe masası, örtü ve chafing dish",
  "Porselen, cam ve servis ekipmanı",
  "Üniformalı servis personeli",
  "Sıcak zincir korumalı taşıma",
  "Kurulum ve etkinlik sonrası toplama",
  "Yazılı zaman çizelgesi ve saat taahhüdü",
];

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/hizmetler/${service.slug}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.blurb,
        url: `${site.url}/hizmetler/${service.slug}`,
        image: `${site.url}${service.image}`,
        // Layout'taki Organization düğümüne bağlan — kopya varlık üretme
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "City", name: "İstanbul" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${site.url}/hizmetler/${service.slug}`,
          servicePhone: company.phone.e164,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.url },
          { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${site.url}/hizmetler` },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${site.url}/hizmetler/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main">
        {/* Sayfa başlığı */}
        <section className="relative flex min-h-[68svh] items-center justify-center overflow-hidden bg-ink-950 text-center">
          <Image
            src={service.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/78 via-ink-950/60 to-ink-950/85" />
          <div className="relative mx-auto max-w-3xl px-6 pt-24">
            <Reveal kind="fade">
              <nav
                aria-label="Sayfa yolu"
                className="text-eyebrow uppercase tracking-[0.2em] text-white/65"
              >
                <Link href="/" className="-my-3 inline-block py-3 hover:text-gold-400">
                  Ana Sayfa
                </Link>
                <span className="mx-3">/</span>
                <Link href="/hizmetler" className="-my-3 inline-block py-3 hover:text-gold-400">
                  Hizmetler
                </Link>
                <span className="mx-3">/</span>
                <span className="text-white">{service.short}</span>
              </nav>
              <div className="ornament mt-8 text-gold-400">
                <i />
              </div>
              <h1 className="mt-6 font-normal text-white">{service.name}</h1>
              <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/75">
                {service.blurb}
              </p>
              <Link
                href={`/teklif-al?hizmet=${service.slug}`}
                className="mt-10 inline-flex min-h-[54px] items-center justify-center gap-3 bg-white px-9 text-eyebrow font-medium uppercase tracking-[0.24em] text-ink-950 transition-colors duration-200 hover:bg-gold-600 hover:text-white"
              >
                Bu Hizmet İçin Teklif Al
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Hizmete dahil */}
        <section className="px-5 py-20 md:px-10 md:py-32">
          <div className="mx-auto max-w-[85rem]">
            <Reveal kind="fade" className="mx-auto max-w-2xl text-center">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">Hizmete Dahil</p>
              <h2 className="mt-4">Fiyatın İçinde Ne Var?</h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-500">
                Kurulumdan toplamaya kadar sürecin tamamı bize ait. Sonradan
                çıkan kalem yok.
              </p>
            </Reveal>

            <Stagger
              className="mx-auto mt-12 grid max-w-4xl gap-x-10 gap-y-5 sm:grid-cols-2 md:mt-16"
              step={0.05}
            >
              {includes.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-4 border-b border-ink-200 pb-5">
                    <Check size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-600" />
                    <span className="text-sm leading-relaxed text-ink-700">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Hizmete özel içerik — constants/services.ts dolduruldukça büyür */}
        <ServiceDetail service={service} />

        {/* CTA bandı */}
        <section className="relative overflow-hidden bg-ink-950 px-5 py-20 md:px-10 md:py-28">
          <Image
            src="/images/genel/ekip.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-ink-950/70" />
          <Reveal kind="fade" className="relative mx-auto max-w-2xl text-center">
            <div className="ornament text-gold-400">
              <i />
            </div>
            <h2 className="mt-6 text-white">Tarihinizi Söyleyin</h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Aynı iş günü içinde menü önerisi ve kalem kalem fiyatlandırma ile
              dönüş yapıyoruz.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/teklif-al?hizmet=${service.slug}`}
                className="flex min-h-[54px] w-full items-center justify-center gap-3 bg-gold-600 px-9 text-eyebrow font-medium uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-gold-700 sm:w-auto"
              >
                Teklif Al
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
              <a
                href={whatsappUrl(`Merhaba, ${service.name} hakkında teklif almak istiyorum.`)}
                target="_blank"
                rel="noopener"
                className="flex min-h-[54px] w-full items-center justify-center gap-3 border border-white/45 px-9 text-eyebrow font-medium uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
            <p className="mt-8 text-xs text-white/65">
              Ya da arayın:{" "}
              <a href={company.phone.href} className="text-gold-400 underline underline-offset-4">
                {company.phone.display}
              </a>
            </p>
          </Reveal>
        </section>

        {/* Diğer hizmetler */}
        <section className="bg-beige-100 px-5 py-20 md:px-10 md:py-32">
          <div className="mx-auto max-w-[85rem]">
            <Reveal kind="fade" className="text-center">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">Diğer Hizmetler</p>
              <h2 className="mt-4">Bunlar da İlginizi Çekebilir</h2>
            </Reveal>

            <Stagger
              className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-12 md:mt-16 lg:grid-cols-4"
              step={0.06}
            >
              {others.map((s) => (
                <StaggerItem key={s.slug}>
                  <Link href={`/hizmetler/${s.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-ink-200">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(max-width:1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                      />
                    </div>
                    <h3 className="mt-4 text-[0.9375rem] transition-colors group-hover:text-gold-600 sm:mt-6">
                      {s.name}
                    </h3>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
