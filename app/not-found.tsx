import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  // 404 indekslenmemeli ama linkler takip edilsin
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink-950 text-center">
          <Image
            src="/images/genel/cta.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-ink-950/70" />

          <div className="relative mx-auto max-w-2xl px-6 pt-24">
            <div className="ornament text-gold-400">
              <i />
            </div>
            <p className="eyebrow mt-7 text-white/55">404</p>
            <h1 className="mt-5 font-normal text-white">Sayfa Bulunamadı</h1>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/70">
              Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdan
              devam edebilirsiniz.
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="flex min-h-[54px] w-full items-center justify-center gap-3 bg-white px-9 text-eyebrow font-medium uppercase tracking-[0.24em] text-ink-950 transition-colors duration-200 hover:bg-gold-600 hover:text-white sm:w-auto"
              >
                Ana Sayfa
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
              <Link
                href="/hizmetler"
                className="flex min-h-[54px] w-full items-center justify-center border border-white/45 px-9 text-eyebrow font-medium uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
              >
                Hizmetler
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
