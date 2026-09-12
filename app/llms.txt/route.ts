import { site, company } from "@/config/site";
import { services, serviceGroups, servicesByGroup } from "@/constants/services";

/**
 * llms.txt — AI arama motorlarının (ChatGPT, Perplexity, Claude) siteyi
 * özetlerken doğru bilgiyi alması için makine okunur özet.
 *
 * Not: Google Search bu dosyayı kullanmaz; klasik SEO'ya etkisi yoktur.
 * Amaç yalnızca AI cevaplarında marka bilgisinin doğru geçmesi.
 */
export const dynamic = "force-static";

export function GET() {
  const groups = serviceGroups
    .map((g) => {
      const rows = servicesByGroup(g.id)
        .map((s) => `- [${s.name}](${site.url}/hizmetler/${s.slug}): ${s.blurb}`)
        .join("\n");
      return `### ${g.label}\n${rows}`;
    })
    .join("\n\n");

  const body = `# ${site.name}

> ${site.description}

${site.name}, İstanbul genelinde kurumsal ve özel gün catering hizmeti verir.
Üretim kendi merkez mutfağında günlük yapılır; fason üretim kullanılmaz.
Menü tasarımından kuruluma, servisten etkinlik sonrası toplamaya kadar
organizasyonun tamamı tek elden yürütülür.

## İletişim
- Telefon: ${company.phone.display} (${company.phone.e164})
- E-posta: ${company.email}
- Hizmet bölgesi: ${company.areaServed}
- Çalışma saatleri: ${company.openingHours.display}

## Hizmetler
Toplam ${services.length} hizmet başlığı. Tam liste: ${site.url}/hizmetler

${groups}

## Sayfalar
- [Ana sayfa](${site.url}/): hizmet özeti, çalışma biçimi, galeri, sık sorulanlar
- [Hizmetler](${site.url}/hizmetler): tüm catering hizmetlerinin listesi
- [Site haritası](${site.url}/sitemap.xml)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
