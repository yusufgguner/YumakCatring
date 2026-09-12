"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company } from "@/config/site";
import { serviceGroups, servicesByGroup } from "@/constants/services";

// Ana sayfa bölümlerine "/#" ile bağlanır — alt sayfalardan da çalışsın.
const nav = [
  { label: "Hizmetler", href: "/#hizmetler", mega: true },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Organizasyonlar", href: "/#organizasyonlar" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Teklif Al", href: "/teklif-al" },
];

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const dark = stuck || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          dark ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
        }`}
        onMouseLeave={() => setMega(false)}
      >
        <div className="mx-auto flex h-20 max-w-[85rem] items-center justify-between px-5 md:px-10 lg:h-24">
          {/* Sol menü */}
          <nav className="hidden flex-1 items-center gap-8 lg:flex">
            {nav.slice(0, 2).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onMouseEnter={() => setMega(!!n.mega)}
                className={`relative py-2 text-eyebrow font-medium uppercase tracking-[0.22em] transition-colors ${
                  dark ? "text-ink-700 hover:text-gold-600" : "text-white/85 hover:text-white"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Logo — ortada */}
          <Link href="/" aria-label="Yumak Catering ana sayfa" className="flex-none px-4">
            <Image
              src={dark ? "/images/logo/logo-dark.png" : "/images/logo/logo-light.png"}
              alt="Yumak Catering"
              width={470}
              height={398}
              priority
              className={`w-auto transition-all duration-300 ${
                stuck ? "h-12 lg:h-14" : "h-14 lg:h-20"
              }`}
            />
          </Link>

          {/* Sağ menü */}
          <nav className="hidden flex-1 items-center justify-end gap-8 lg:flex">
            {nav.slice(2).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`relative py-2 text-eyebrow font-medium uppercase tracking-[0.22em] transition-colors ${
                  dark ? "text-ink-700 hover:text-gold-600" : "text-white/85 hover:text-white"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Mobil buton */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className={`flex size-12 items-center justify-center lg:hidden ${
              dark ? "text-ink-900" : "text-white"
            }`}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mega menü */}
        <div
          className={`absolute inset-x-0 top-full hidden origin-top border-t border-ink-200 bg-white transition-all duration-300 lg:block ${
            mega ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto grid max-w-[85rem] grid-cols-4 gap-10 px-10 py-12">
            {serviceGroups.map((g) => (
              <div key={g.id}>
                <p className="eyebrow text-gold-600">{g.label}</p>
                <ul className="mt-5 space-y-3">
                  {servicesByGroup(g.id).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/hizmetler/${s.slug}`}
                        className="text-sm text-ink-700 transition-colors hover:text-gold-600"
                      >
                        {s.short}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Mobil çekmece */}
      {/* z-[45]: ana sayfadaki sabit hızlı iletişim çubuğu (z-40) çekmecenin
          alt butonlarını örtüyordu. Header (z-50) yine üstte kalır. */}
      <div
        className={`fixed inset-0 z-[45] overflow-y-auto overscroll-contain bg-white px-6 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-24 transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink-200 py-4 font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <p className="eyebrow mt-8 text-gold-600">Hizmetler</p>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
          {serviceGroups.flatMap((g) =>
            servicesByGroup(g.id).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  onClick={() => setOpen(false)}
                  /* min 44px dokunma alanı — WCAG 2.5.8 */
                  className="flex min-h-[44px] items-center text-sm text-ink-700"
                >
                  {s.short}
                </Link>
              </li>
            )),
          )}
        </ul>

        <div className="mt-10 grid gap-3">
          <Link
            href="/teklif-al"
            onClick={() => setOpen(false)}
            className="flex min-h-[54px] items-center justify-center bg-gold-600 text-eyebrow font-medium uppercase tracking-[0.22em] text-white"
          >
            Teklif Al
          </Link>
          <a
            href={company.phone.href}
            className="flex min-h-[54px] items-center justify-center gap-2 border border-ink-900 text-eyebrow font-medium uppercase tracking-[0.22em]"
          >
            <Phone size={15} strokeWidth={1.5} />
            {company.phone.display}
          </a>
        </div>
      </div>
    </>
  );
}
