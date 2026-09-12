import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { company, site, whatsappUrl } from "@/config/site";
import { breadcrumbSchema } from "@/constants/schema";

export const metadata: Metadata = {
  title: "Teklif Al ve İletişim",
  description: `Organizasyonunuzu üç adımda anlatın, teklif talebiniz WhatsApp üzerinden doğrudan ${site.name} ekibine ulaşsın. Telefon: ${company.phone.display}.`,
  alternates: { canonical: "/teklif-al" },
  openGraph: {
    type: "website",
    url: `${site.url}/teklif-al`,
    title: `Teklif Al | ${site.name}`,
    description:
      "Kurumsal, özel gün ve etkinlik catering için üç adımda teklif isteyin. Yanıt WhatsApp'tan, aynı iş günü içinde.",
    images: [{ url: "/images/og/og-default.jpg", width: 1200, height: 630 }],
  },
};

const contactItems = [
  {
    Icon: Phone,
    label: "Telefon",
    value: company.phone.display,
    href: company.phone.href,
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: company.phone.display,
    href: whatsappUrl("Merhaba, Yumak Catering için teklif almak istiyorum."),
    external: true,
  },
  { Icon: Clock, label: "Çalışma saatleri", value: company.openingHours.display },
  { Icon: MapPin, label: "Hizmet bölgesi", value: company.areaServed },
];

export default function TeklifAlPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Ana Sayfa", path: "/" },
              { name: "Teklif Al", path: "/teklif-al" },
            ]),
            {
              "@type": "ContactPage",
              "@id": `${site.url}/teklif-al#contact`,
              url: `${site.url}/teklif-al`,
              name: "Teklif Al ve İletişim",
              isPartOf: { "@id": `${site.url}/#website` },
              about: { "@id": `${site.url}/#organization` },
            },
          ],
        }}
      />
      <Header />

      <main id="main">
        {/* Sayfa başlığı */}
        <section className="relative flex min-h-[48svh] items-center justify-center overflow-hidden bg-ink-950 text-center">
          <Image
            src="/images/genel/cta.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink-950/75" />
          <div className="relative mx-auto max-w-3xl px-6 pb-12 pt-32">
            <Reveal kind="fade">
              <nav
                aria-label="Sayfa yolu"
                className="text-eyebrow uppercase tracking-[0.2em] text-white/65"
              >
                <Link href="/" className="-my-3 inline-block py-3 hover:text-gold-400">
                  Ana Sayfa
                </Link>
                <span className="mx-3">/</span>
                <span className="text-white">Teklif Al</span>
              </nav>
              <div className="ornament mt-8 text-gold-400">
                <i />
              </div>
              <h1 className="mt-6 font-normal text-white">Teklif Al</h1>
              <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/70">
                Üç kısa adımda organizasyonunuzu anlatın. Talebiniz WhatsApp
                üzerinden doğrudan ekibimize ulaşır, aynı iş günü içinde dönüş
                yaparız.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-beige-100 px-5 py-20 md:px-10 md:py-28">
          {/* 1024'te form + 20rem yan kolon formu ~560px'e sıkıştırıyordu.
              xl altında form ana sayfadaki gibi 3xl genişlikte ortalanır,
              "Doğrudan Ulaşın" altına iner; xl ve üstü eski iki kolon. */}
          <div className="mx-auto grid max-w-3xl gap-14 xl:max-w-[85rem] xl:grid-cols-[1fr_20rem] xl:gap-16">
            <Reveal kind="rise">
              <QuoteForm />
            </Reveal>

            <Reveal kind="fade" delay={0.1}>
              <aside className="xl:sticky xl:top-32">
                <p className="eyebrow text-gold-600">İletişim</p>
                <h2 className="mt-4 text-[1.5rem] md:text-[1.75rem]">Doğrudan Ulaşın</h2>
                <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
                  {contactItems.map(({ Icon, label, value, href, external }) => (
                    <li key={label} className="flex gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-600/35 text-gold-600">
                        <Icon size={18} strokeWidth={1.4} />
                      </span>
                      <div>
                        <p className="eyebrow">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            {...(external ? { target: "_blank", rel: "noopener" } : {})}
                            className="-mb-2 -mt-1 inline-flex min-h-[44px] items-center text-sm font-medium text-ink-950 transition-colors hover:text-gold-600"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-ink-950">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
