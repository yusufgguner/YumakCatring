"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { company, whatsappUrl } from "@/config/site";
import { serviceGroups, services, servicesByGroup } from "@/constants/services";

/**
 * Üç adımlı teklif formu (PROJE-PLANI.md Bölüm 6).
 *
 * Sunucu tarafı ve e-posta yok: toplanan bilgiler tek bir WhatsApp
 * mesajına dönüştürülüp wa.me üzerinden açılır. Veri sitede saklanmaz.
 *
 * Kişisel bilgi bilinçli olarak en son adımda istenir — ilk iki adımda
 * emek harcayan ziyaretçi telefonunu vermeye daha isteklidir.
 */

const OTHER = "diger";
const PEOPLE_PRESETS = ["30", "50", "100", "200", "400"];
const MENU_OPTIONS = ["Açık büfe", "Tabldot", "Kokteyl", "Kutu servis", "Emin değilim"];
const EXTRA_OPTIONS = [
  "Servis personeli",
  "Masa-sandalye",
  "Ekipman",
  "Bar ve barmen",
  "Dekor",
  "Canlı pişirme",
];
const BUDGET_OPTIONS = [
  "50.000 ₺ altı",
  "50.000 – 100.000 ₺",
  "100.000 – 250.000 ₺",
  "250.000 ₺ üzeri",
  "Henüz net değil",
];

type Errors = Partial<Record<"event" | "people" | "date" | "name" | "phone" | "consent", string>>;

const inputClass =
  "w-full border bg-white px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-300 focus:border-gold-600";

function borderFor(error?: string) {
  return error ? "border-red-500" : "border-ink-300";
}

/** 0 5XX XXX XX XX biçimine zorlar; en fazla 11 rakam. */
function formatPhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("90")) d = d.slice(2);
  if (d && !d.startsWith("0")) d = `0${d}`;
  d = d.slice(0, 11);
  const parts = [d.slice(0, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)];
  return parts.filter(Boolean).join(" ");
}

const noopSubscribe = () => () => {};

/** Yerel saate göre bugünün YYYY-AA-GG hali */
function todayIso() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

/** Hizmet sayfasından gelindiyse (?hizmet=slug) o hizmet ön seçili gelir. */
function readHizmetParam() {
  const slug = new URLSearchParams(window.location.search).get("hizmet") ?? "";
  return services.some((s) => s.slug === slug) ? slug : "";
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Chip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`min-h-[44px] border px-4 text-left text-sm transition-colors duration-200 ${
        selected
          ? "border-gold-600 bg-gold-100 text-ink-950"
          : "border-ink-300 bg-white text-ink-700 hover:border-gold-600"
      }`}
    >
      {children}
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-xs text-red-600">
      {message}
    </p>
  );
}

function Label({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="eyebrow block text-ink-700">
      {children}
    </label>
  );
}

export function QuoteForm() {
  const topRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  // Takvim alt sınırı ve ?hizmet= ön seçimi yalnız tarayıcıda okunur;
  // sunucu çıktısında boş kalır, hidrasyon uyuşmazlığı çıkmaz.
  const today = useSyncExternalStore(noopSubscribe, todayIso, () => undefined);
  const hizmetParam = useSyncExternalStore(noopSubscribe, readHizmetParam, () => "");

  // Adım 1
  const [picked, setEvent] = useState("");
  const event = picked || hizmetParam;
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
  const [dateUnsure, setDateUnsure] = useState(false);
  // Adım 2
  const [location, setLocation] = useState("");
  const [menus, setMenus] = useState<string[]>([]);
  const [extras, setExtras] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  // Adım 3
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company_, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);

  const service = services.find((s) => s.slug === event);
  const eventLabel = event === OTHER ? "Diğer" : (service?.name ?? "");
  const isCorporate = service?.group === "kurumsal" || service?.group === "surekli";

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  function focusFirstError(errs: Errors) {
    const first = Object.keys(errs)[0];
    if (!first) return;
    const el = document.getElementById(`teklif-${first}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    el?.focus({ preventScroll: true });
  }

  function validate(current: number): Errors {
    const errs: Errors = {};
    if (current === 0) {
      if (!event) errs.event = "Organizasyon türünü seçin.";
      if (!people || Number(people) < 1) errs.people = "Yaklaşık kişi sayısını girin.";
      if (!date && !dateUnsure) errs.date = "Bir tarih seçin ya da “Henüz net değil” işaretleyin.";
      else if (!dateUnsure && today && date < today) errs.date = "Geçmiş bir tarih seçilemez.";
    }
    if (current === 2) {
      if (name.trim().length < 2) errs.name = "Adınızı ve soyadınızı yazın.";
      if (!/^05\d{9}$/.test(phone.replace(/\D/g, ""))) errs.phone = "Telefonu 05XX XXX XX XX biçiminde girin.";
      if (!consent) errs.consent = "Devam etmek için onay kutusunu işaretleyin.";
    }
    return errs;
  }

  function goTo(next: number) {
    setStep(next);
    setErrors({});
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onNext() {
    const errs = validate(step);
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirstError(errs);
    goTo(step + 1);
  }

  function buildMessage() {
    const lines = [
      "Merhaba, web sitesinden teklif talebi oluşturdum.",
      "",
      `Etkinlik: ${eventLabel}`,
      `Tarih: ${dateUnsure || !date ? "Henüz net değil" : formatDate(date)}`,
      `Kişi: ${people}`,
    ];
    if (location.trim()) lines.push(`Lokasyon: ${location.trim()}`);
    if (menus.length) lines.push(`Menü: ${menus.join(", ")}`);
    if (extras.length) lines.push(`Ek hizmet: ${extras.join(", ")}`);
    if (budget) lines.push(`Bütçe: ${budget}`);
    if (notes.trim()) lines.push("", `Not: ${notes.trim()}`);
    lines.push("", `Ad Soyad: ${name.trim()}`, `Telefon: ${phone}`);
    if (isCorporate && company_.trim()) lines.push(`Firma: ${company_.trim()}`);
    return lines.join("\n");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Ara adımlarda Enter formu göndermesin, sonraki adıma geçsin.
    if (step < 2) return onNext();
    const errs = validate(2);
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirstError(errs);

    const url = whatsappUrl(buildMessage());
    const win = window.open(url, "_blank");
    if (win) {
      try {
        win.opener = null;
      } catch {
        /* bazı tarayıcılar izin vermez, sorun değil */
      }
    } else {
      window.location.href = url; // açılır pencere engellendiyse aynı sekmede aç
    }
    setSentUrl(url);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const stepTitles = ["Ne organize ediyorsunuz?", "Nerede ve nasıl?", "Size nasıl ulaşalım?"];

  if (sentUrl) {
    return (
      <div ref={topRef} className="scroll-mt-32 bg-white p-6 text-left shadow-[var(--shadow-lg)] md:p-10">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Check size={26} strokeWidth={1.6} />
        </div>
        <h3 className="mt-6 text-center text-xl">Talebiniz Hazır</h3>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-ink-500">
          Bilgileriniz WhatsApp mesajına dönüştürüldü. Mesajı WhatsApp&apos;ta
          gönderdiğinizde ekibimiz aynı iş günü içinde dönüş yapar.
        </p>

        <dl className="mt-8 grid gap-x-6 gap-y-3 border-y border-ink-200 py-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="eyebrow">Etkinlik</dt>
            <dd className="mt-1">{eventLabel}</dd>
          </div>
          <div>
            <dt className="eyebrow">Kişi</dt>
            <dd className="mt-1">{people}</dd>
          </div>
          <div>
            <dt className="eyebrow">Tarih</dt>
            <dd className="mt-1">{dateUnsure || !date ? "Henüz net değil" : formatDate(date)}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={sentUrl}
            target="_blank"
            rel="noopener"
            className="flex min-h-[54px] flex-1 items-center justify-center gap-3 bg-gold-600 px-8 text-eyebrow font-medium uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-gold-700"
          >
            <MessageCircle size={15} strokeWidth={1.5} />
            WhatsApp Açılmadıysa Tıklayın
          </a>
          <button
            type="button"
            onClick={() => {
              setSentUrl(null);
              goTo(0);
            }}
            className="flex min-h-[54px] items-center justify-center border border-ink-900 px-8 text-eyebrow font-medium uppercase tracking-[0.24em] transition-colors duration-200 hover:bg-ink-900 hover:text-white"
          >
            Düzenle
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="bg-white p-6 text-left shadow-[var(--shadow-lg)] md:p-10"
    >
      <div ref={topRef} className="scroll-mt-32">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow text-gold-600">
            Adım {step + 1} / {stepTitles.length}
          </p>
          <p className="text-xs text-ink-500">Yaklaşık 1 dakika</p>
        </div>
        <div
          className="mt-3 h-[2px] bg-ink-200"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={stepTitles.length}
          aria-valuenow={step + 1}
          aria-label="Form ilerlemesi"
        >
          <div
            className="h-full bg-gold-600 transition-all duration-500"
            style={{ width: `${((step + 1) / stepTitles.length) * 100}%` }}
          />
        </div>
        <h3 className="mt-7 text-xl">{stepTitles[step]}</h3>
      </div>

      {step === 0 ? (
        <div className="mt-8 space-y-8">
          <fieldset>
            <legend className="eyebrow text-ink-700">Organizasyon türü *</legend>
            <div
              id="teklif-event"
              tabIndex={-1}
              aria-describedby={errors.event ? "teklif-event-hata" : undefined}
              className="mt-4 space-y-5 outline-none"
            >
              {serviceGroups.map((g) => (
                <div key={g.id}>
                  <p className="text-xs text-ink-500">{g.label}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {servicesByGroup(g.id).map((s) => (
                      <Chip
                        key={s.slug}
                        selected={event === s.slug}
                        onClick={() => {
                          setEvent(s.slug);
                          setErrors((e) => ({ ...e, event: undefined }));
                        }}
                      >
                        {s.short}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-2">
                <Chip
                  selected={event === OTHER}
                  onClick={() => {
                    setEvent(OTHER);
                    setErrors((e) => ({ ...e, event: undefined }));
                  }}
                >
                  Diğer
                </Chip>
              </div>
            </div>
            <FieldError id="teklif-event-hata" message={errors.event} />
          </fieldset>

          <div>
            <Label htmlFor="teklif-people">Kişi sayısı *</Label>
            <div className="mt-4 flex flex-wrap gap-2">
              {PEOPLE_PRESETS.map((p) => (
                <Chip
                  key={p}
                  selected={people === p}
                  onClick={() => {
                    setPeople(p);
                    setErrors((e) => ({ ...e, people: undefined }));
                  }}
                >
                  {p === "400" ? "400+" : p}
                </Chip>
              ))}
            </div>
            <input
              id="teklif-people"
              type="number"
              inputMode="numeric"
              min={1}
              placeholder="ya da tam sayıyı yazın"
              value={people}
              onChange={(e) => {
                setPeople(e.target.value);
                setErrors((er) => ({ ...er, people: undefined }));
              }}
              aria-invalid={!!errors.people}
              aria-describedby={errors.people ? "teklif-people-hata" : undefined}
              className={`${inputClass} mt-3 sm:max-w-xs ${borderFor(errors.people)}`}
            />
            <FieldError id="teklif-people-hata" message={errors.people} />
          </div>

          <div>
            <Label htmlFor="teklif-date">Organizasyon tarihi *</Label>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                id="teklif-date"
                type="date"
                min={today}
                value={date}
                disabled={dateUnsure}
                onChange={(e) => {
                  setDate(e.target.value);
                  setErrors((er) => ({ ...er, date: undefined }));
                }}
                aria-invalid={!!errors.date}
                aria-describedby={errors.date ? "teklif-date-hata" : undefined}
                className={`${inputClass} sm:max-w-xs disabled:bg-ink-200/40 disabled:text-ink-300 ${borderFor(errors.date)}`}
              />
              <label className="flex min-h-[44px] cursor-pointer items-center gap-3 text-sm text-ink-700">
                <input
                  type="checkbox"
                  checked={dateUnsure}
                  onChange={(e) => {
                    setDateUnsure(e.target.checked);
                    setErrors((er) => ({ ...er, date: undefined }));
                  }}
                  className="size-4 accent-[var(--color-gold-600)]"
                />
                Henüz net değil
              </label>
            </div>
            <FieldError id="teklif-date-hata" message={errors.date} />
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="mt-8 space-y-8">
          <div>
            <Label htmlFor="teklif-location">İlçe / mekân</Label>
            <input
              id="teklif-location"
              type="text"
              autoComplete="address-level2"
              placeholder="ör. Maslak, Bahçelievler, düğün salonu"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`${inputClass} mt-4 border-ink-300`}
            />
          </div>

          <fieldset>
            <legend className="eyebrow text-ink-700">Menü tercihi</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {MENU_OPTIONS.map((m) => (
                <Chip key={m} selected={menus.includes(m)} onClick={() => toggle(menus, setMenus, m)}>
                  {m}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="eyebrow text-ink-700">Ek hizmetler</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {EXTRA_OPTIONS.map((x) => (
                <Chip key={x} selected={extras.includes(x)} onClick={() => toggle(extras, setExtras, x)}>
                  {x}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="eyebrow text-ink-700">Bütçe aralığı</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {BUDGET_OPTIONS.map((b) => (
                <Chip key={b} selected={budget === b} onClick={() => setBudget(budget === b ? "" : b)}>
                  {b}
                </Chip>
              ))}
            </div>
          </fieldset>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-8 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="teklif-name">Ad soyad *</Label>
              <input
                id="teklif-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((er) => ({ ...er, name: undefined }));
                }}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "teklif-name-hata" : undefined}
                className={`${inputClass} mt-3 ${borderFor(errors.name)}`}
              />
              <FieldError id="teklif-name-hata" message={errors.name} />
            </div>
            <div>
              <Label htmlFor="teklif-phone">Telefon *</Label>
              <input
                id="teklif-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                placeholder="05XX XXX XX XX"
                value={phone}
                onChange={(e) => {
                  setPhone(formatPhone(e.target.value));
                  setErrors((er) => ({ ...er, phone: undefined }));
                }}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "teklif-phone-hata" : undefined}
                className={`${inputClass} mt-3 ${borderFor(errors.phone)}`}
              />
              <FieldError id="teklif-phone-hata" message={errors.phone} />
            </div>
          </div>

          {isCorporate ? (
            <div>
              <Label htmlFor="teklif-company">Firma adı</Label>
              <input
                id="teklif-company"
                type="text"
                autoComplete="organization"
                value={company_}
                onChange={(e) => setCompany(e.target.value)}
                className={`${inputClass} mt-3 border-ink-300`}
              />
            </div>
          ) : null}

          <div>
            <Label htmlFor="teklif-notes">Eklemek istedikleriniz</Label>
            <textarea
              id="teklif-notes"
              rows={4}
              placeholder="“Mart ayında bir nişan düşünüyoruz, vejetaryen seçenek de olsun…”"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={`${inputClass} mt-3 resize-y border-ink-300 leading-relaxed`}
            />
          </div>

          <div>
            <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-ink-500">
              <input
                id="teklif-consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  setErrors((er) => ({ ...er, consent: undefined }));
                }}
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? "teklif-consent-hata" : undefined}
                className="mt-1 size-4 shrink-0 accent-[var(--color-gold-600)]"
              />
              <span>
                Bilgilerimin teklif hazırlanması amacıyla WhatsApp üzerinden{" "}
                {company.legalName}&apos;a iletilmesini onaylıyorum. Bilgiler bu
                sitede saklanmaz. *
              </span>
            </label>
            <FieldError id="teklif-consent-hata" message={errors.consent} />
          </div>
        </div>
      ) : null}

      <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="flex min-h-[54px] items-center justify-center gap-3 border border-ink-300 px-8 text-eyebrow font-medium uppercase tracking-[0.24em] text-ink-700 transition-colors duration-200 hover:border-ink-900"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            Geri
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}

        {step < 2 ? (
          <button
            type="button"
            onClick={onNext}
            className="flex min-h-[54px] items-center justify-center gap-3 bg-ink-950 px-10 text-eyebrow font-medium uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-gold-600"
          >
            Devam
            <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        ) : (
          <button
            type="submit"
            className="flex min-h-[54px] items-center justify-center gap-3 bg-gold-600 px-10 text-eyebrow font-medium uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-gold-700"
          >
            <MessageCircle size={15} strokeWidth={1.5} />
            WhatsApp ile Gönder
          </button>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-ink-500 sm:text-left">
        Formla uğraşmak istemezseniz:{" "}
        <a
          href={whatsappUrl("Merhaba, Yumak Catering için teklif almak istiyorum.")}
          target="_blank"
          rel="noopener"
          className="font-medium text-gold-600 underline underline-offset-4"
        >
          doğrudan WhatsApp
        </a>{" "}
        ya da{" "}
        <a
          href={company.phone.href}
          className="inline-flex items-center gap-1 font-medium text-gold-600 underline underline-offset-4"
        >
          <Phone size={12} strokeWidth={1.8} />
          {company.phone.display}
        </a>
      </p>
    </form>
  );
}
