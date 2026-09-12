"use client";

import { useRef, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { company, whatsappUrl } from "@/config/site";

/**
 * Serbest metin teklif formu.
 * Sunucu tarafı yok — yazılan brief WhatsApp mesajına gömülüp wa.me
 * üzerinden açılıyor. Boş gönderim engelleniyor.
 *
 * Not: işaretleme, daha önce app/page.tsx içinde satır içi duran statik
 * kartın aynısı. Sadece textarea kontrollü hale geldi.
 */
export function BriefForm() {
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const [brief, setBrief] = useState("");
  const [warn, setWarn] = useState(false);

  const filled = brief.trim().length > 0;

  const href = filled
    ? whatsappUrl(
        `Merhaba, organizasyonum için teklif almak istiyorum. Detaylar: ${brief.trim()}`,
      )
    : whatsappUrl("Merhaba, organizasyonum için teklif almak istiyorum.");

  return (
    <div className="bg-white p-6 shadow-[var(--shadow-lg)] md:p-10">
      <label htmlFor="brief" className="sr-only">
        Organizasyonunuzu anlatın
      </label>
      <textarea
        id="brief"
        ref={areaRef}
        rows={5}
        value={brief}
        onChange={(e) => {
          setBrief(e.target.value);
          if (warn) setWarn(false);
        }}
        aria-invalid={warn}
        aria-describedby={warn ? "brief-uyari" : undefined}
        placeholder="&quot;Mart ayında 150 kişilik bir nişan düşünüyoruz, mekân Bahçelievler'de, bütçemiz henüz net değil…&quot;"
        className={`w-full resize-y border bg-white p-4 text-sm leading-relaxed text-ink-950 outline-none transition-colors placeholder:text-ink-300 focus:border-gold-600 ${
          warn ? "border-red-500" : "border-ink-300"
        }`}
      />

      {warn ? (
        <p id="brief-uyari" role="alert" className="mt-2 text-xs text-red-600">
          Önce organizasyonunuzu birkaç cümleyle yazın — mesaja ekleyelim.
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={href}
          target="_blank"
          rel="noopener"
          onClick={(e) => {
            // Boş brief ile "Anlattım" demek anlamsız: alana geri gönder.
            if (!filled) {
              e.preventDefault();
              setWarn(true);
              areaRef.current?.focus();
            }
          }}
          className="flex min-h-[54px] flex-1 items-center justify-center gap-3 bg-gold-600 px-8 text-eyebrow font-medium uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-gold-700"
        >
          Anlattım, Teklif Gelsin
          <ArrowRight size={15} strokeWidth={1.5} />
        </a>
        <a
          href={whatsappUrl("Merhaba, Yumak Catering için teklif almak istiyorum.")}
          target="_blank"
          rel="noopener"
          className="flex min-h-[54px] items-center justify-center gap-3 border border-ink-900 px-8 text-eyebrow font-medium uppercase tracking-[0.24em] transition-colors duration-200 hover:bg-ink-900 hover:text-white"
        >
          <MessageCircle size={15} strokeWidth={1.5} />
          WhatsApp
        </a>
      </div>

      <p className="mt-6 text-xs text-ink-500">
        Ya da doğrudan arayın:{" "}
        <a
          href={company.phone.href}
          className="font-medium text-gold-600 underline underline-offset-4"
        >
          {company.phone.display}
        </a>
      </p>
    </div>
  );
}
