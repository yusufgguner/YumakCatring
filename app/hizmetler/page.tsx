import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { services, serviceGroups, servicesByGroup } from "@/constants/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/config/site";
import { breadcrumbSchema, serviceListSchema } from "@/constants/schema";

export const metadata: Metadata = {
  title: "Catering Hizmetlerimiz",
  description:
    "Kurumsal catering, düğün, nişan, mevlüt, kokteyl, fuar, taşımalı ve toplu yemek hizmeti. İstanbul genelinde 17 hizmet alanında tam kapsamlı organizasyon.",
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    type: "website",
    url: `${site.url}/hizmetler`,
    title: `Catering Hizmetlerimiz | ${site.name}`,
    description:
      "İstanbul genelinde 17 catering hizmeti: kurumsal, düğün, nişan, mevlüt, kokteyl, fuar, taşımalı ve toplu yemek.",
    images: [{ url: "/images/og/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function HizmetlerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Ana Sayfa", path: "/" },
              { name: "Hizmetler", path: "/hizmetler" },
            ]),
            serviceListSchema(services),
          ],
        }}
      />
      <Header />

      <main id="main">
        {/* Sayfa başlığı */}
        <section className="relative flex min-h-[62svh] items-center justify-center overflow-hidden bg-ink-950 text-center">
          <Image
            src="/images/genel/cta.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink-950/75" />
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
                <span className="text-white">Hizmetler</span>
              </nav>
              <div className="ornament mt-8 text-gold-400">
                <i />
              </div>
              <h1 className="mt-6 font-normal text-white">Hizmetlerimiz</h1>
              <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/70">
                On yedi hizmet alanı, tek bir standart: taze üretim, zamanında
                teslim, kusursuz sunum.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Kategori kategori hizmetler */}
        {serviceGroups.map((g, gi) => (
          <section
            key={g.id}
            className={`px-5 py-20 md:px-10 md:py-28 ${
              gi % 2 === 1 ? "bg-beige-100" : ""
            }`}
          >
            <div className="mx-auto max-w-[85rem]">
              <Reveal kind="fade" className="text-center">
                <div className="ornament">
                  <i />
                </div>
                <h2 className="mt-5 text-[1.5rem] md:text-[1.75rem]">{g.label}</h2>
              </Reveal>

              <Stagger
                className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-14 lg:grid-cols-4"
                step={0.06}
              >
                {servicesByGroup(g.id).map((s) => (
                  <StaggerItem key={s.slug}>
                    <Link href={`/hizmetler/${s.slug}`} className="group block">
                      {/* Telefonda tek kolon 4/5 kart 17 hizmeti ~13.500px'e uzatıyordu */}
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
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
