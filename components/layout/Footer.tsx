import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

/* Marka ikonları lucide'dan kaldırıldı — satır içi SVG kullanıyoruz */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-[17px]" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" className="size-[17px]" aria-hidden>
      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3h2v9h3v-9h2.5l.5-3H12V6.5a1 1 0 0 1 1-1h2Z" />
    </svg>
  );
}
import { company, site } from "@/config/site";
import { serviceGroups, servicesByGroup } from "@/constants/services";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white/65">
      <div className="mx-auto max-w-[85rem] px-5 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Marka */}
          <div>
            <Image
              src="/images/logo/logo-light.png"
              alt={site.name}
              width={470}
              height={398}
              className="h-20 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              İstanbul genelinde kurumsal, özel gün ve etkinlik catering hizmeti.
              Kendi merkez mutfağımızda günlük üretim.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: InstagramIcon, href: company.social.instagram || "#", label: "Instagram" },
                { Icon: FacebookIcon, href: company.social.facebook || "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-11 items-center justify-center border border-white/20 transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Hizmet sütunları */}
          {serviceGroups.slice(0, 2).map((g) => (
            <div key={g.id}>
              <p className="eyebrow text-gold-400">{g.label}</p>
              <ul className="mt-3">
                {servicesByGroup(g.id).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/hizmetler/${s.slug}`}
                      /* dokunma alanı 44px — dikey padding ile */
                      className="flex min-h-[44px] items-center text-sm transition-colors hover:text-gold-400"
                    >
                      {s.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* İletişim */}
          <div>
            <p className="eyebrow text-gold-400">İletişim</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-400" />
                <a href={company.phone.href} className="hover:text-gold-400">
                  {company.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-400" />
                <a href={`mailto:${company.email}`} className="hover:text-gold-400">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{company.areaServed}</span>
              </li>
              <li className="flex gap-3">
                <Clock size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{company.openingHours.display}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/10 pt-10 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</span>
          
          <a
            href="https://linerasoft.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-gold-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <span className="font-medium tracking-wide text-white/60 transition-colors group-hover:text-white/90">
              Geliştiren
            </span>
            <div className="flex items-center gap-2 border-l border-white/20 pl-3 transition-colors group-hover:border-gold-500/30">
              <Image 
                src="/images/linerasoft-logo.png" 
                alt="LineraSoft Logo" 
                width={20} 
                height={20} 
                className="h-5 w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-bold tracking-widest text-white/80 transition-colors group-hover:text-gold-400">
                LINERASOFT
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
