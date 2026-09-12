import { Users, UtensilsCrossed } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { Service } from "@/constants/services";

/**
 * Hizmete özel içerik blokları.
 *
 * constants/services.ts içinde doldurulan alanlar burada render edilir.
 * Hiçbiri doldurulmamışsa bölüm tamamen atlanır — boş başlık basmaz.
 *
 * Amaç: 17 hizmet sayfasının ortak şablondan ayrışması. Şu an hepsi
 * 252-256 kelime ve içerik neredeyse birebir aynı; Google bunları
 * kopya sayar. Her alan dolduğunda sayfa özgün metin kazanır.
 */
export function ServiceDetail({ service }: { service: Service }) {
  const { intro, audience, capacity, menuApproach, process, faq } = service;

  const hasOverview = Boolean(intro || audience?.length || capacity || menuApproach);
  if (!hasOverview && !process?.length && !faq?.length) return null;

  return (
    <>
      {hasOverview ? (
        <section className="bg-beige-100 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[85rem]">
            <Reveal kind="fade" className="mx-auto max-w-2xl text-center">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">{service.short}</p>
              <h2 className="mt-4">Bu Hizmet Nasıl İşliyor?</h2>
              {intro ? (
                <p className="prose-width mx-auto mt-6 text-sm leading-relaxed text-ink-500">
                  {intro}
                </p>
              ) : null}
            </Reveal>

            {(audience?.length || capacity || menuApproach) ? (
              <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
                {audience?.length ? (
                  <Reveal kind="rise" className="bg-white p-8">
                    <h3 className="text-base">Kimler İçin</h3>
                    <ul className="mt-5 space-y-3">
                      {audience.map((a) => (
                        <li
                          key={a}
                          className="border-b border-ink-200 pb-3 text-sm leading-relaxed text-ink-700"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ) : null}

                {(capacity || menuApproach) ? (
                  <Reveal kind="rise" delay={0.08} className="bg-white p-8">
                    {capacity ? (
                      <div className="flex items-start gap-4">
                        <Users size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-gold-600" />
                        <div>
                          <h3 className="text-base">Kapasite</h3>
                          <p className="mt-2 text-sm leading-relaxed text-ink-700">{capacity}</p>
                        </div>
                      </div>
                    ) : null}
                    {menuApproach ? (
                      <div className={`flex items-start gap-4 ${capacity ? "mt-8" : ""}`}>
                        <UtensilsCrossed
                          size={18}
                          strokeWidth={1.5}
                          className="mt-1 shrink-0 text-gold-600"
                        />
                        <div>
                          <h3 className="text-base">Menü Yaklaşımı</h3>
                          <p className="mt-2 text-sm leading-relaxed text-ink-700">{menuApproach}</p>
                        </div>
                      </div>
                    ) : null}
                  </Reveal>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {process?.length ? (
        <section className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[85rem]">
            <Reveal kind="fade" className="mx-auto max-w-2xl text-center">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">Süreç</p>
              <h2 className="mt-4">Tarihten Servise</h2>
            </Reveal>

            <Stagger className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-2" step={0.06}>
              {process.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="flex gap-6">
                    <span className="font-[family-name:var(--font-display)] text-2xl text-gold-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-500">{step.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}

      {faq?.length ? (
        <section className="bg-beige-100 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal kind="fade" className="text-center">
              <div className="ornament">
                <i />
              </div>
              <p className="eyebrow mt-6">Sık Sorulanlar</p>
              <h2 className="mt-4">{service.short} Hakkında</h2>
            </Reveal>

            <Stagger className="mt-14 space-y-8" step={0.05}>
              {faq.map((item) => (
                <StaggerItem key={item.q}>
                  <div className="border-b border-ink-300 pb-8">
                    <h3 className="text-base normal-case tracking-normal">{item.q}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-500">{item.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}
    </>
  );
}
