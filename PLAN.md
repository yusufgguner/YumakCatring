# YUMAK CATERING — Web Sitesi Master Plan (A → Z)

> Durum: **PLANLAMA FAZI**. Kod yazılmadı. Bu doküman onaylandıktan sonra uygulama başlar.
> Tasarım sistemi kaynağı: `design-system/yumak-catering/MASTER.md`

---

## 1. MARKA & KONUMLANDIRMA

| Konu | Karar |
|---|---|
| Marka adı | Yumak Catering |
| Konumlandırma | Premium / butik catering — "her davetin mutfağı" |
| Ton | Sıcak, güven veren, zarif. Ucuz/indirim dili YOK. |
| Hedef kitle | (a) Kurumsal satın alma & ofis yöneticileri (b) Özel gün organizatörleri & aileler (c) Fuar/etkinlik ajansları |
| Ana dönüşüm | **Teklif Al** (form) + **WhatsApp** + **Telefon** |
| İkincil dönüşüm | Menü PDF indirme, galeri inceleme |
| Dil | TR (birincil). EN opsiyonel Faz 3. |

**Marka vaadi (site genelinde tekrar eden 3 mesaj):**
1. Kendi mutfağımızda, günlük üretim.
2. Kurulumdan servise, ekipmanla birlikte tam hizmet.
3. Taşımalı araç ile lokasyon farketmez — sıcak yemek, zamanında.

---

## 2. HİZMET MİMARİSİ (7 ANA HİZMET)

Her hizmet aynı içerik şablonuyla işlenir → tutarlılık + SEO.

| # | Hizmet | Slug | Kime | Anahtar görsel |
|---|---|---|---|---|
| 1 | Özel Kokteyl & Cocktail Prolonge | `kokteyl-catering` | Lansman, açılış, gala | Kokteyl masası, canapé, barista/bar setup |
| 2 | İş Toplantısı Catering | `toplanti-catering` | Şirket toplantı & eğitim | Coffee break, sandviç/tabldot kutu |
| 3 | Kurumsal / Firma Yemek Hizmeti | `kurumsal-catering` | Süreli sözleşmeli personel yemeği | Ofis yemekhane, günlük menü |
| 4 | Özel Gün Catering | `ozel-gun-catering` | Nişan, kına, doğum günü, yıldönümü | Süslü büfe, pasta, servis |
| 5 | Fuar & Etkinlik Açık Büfe | `fuar-etkinlik-catering` | Fuar standı, festival, kongre | Açık büfe hattı, stand ikramı |
| 6 | Taşımalı Araç ile Catering | `tasimali-catering` | Şantiye, açık alan, uzak lokasyon | Termobox, taşıma aracı, sıcak servis |
| 7 | Mevlüt & Hayır Yemeği | `mevlut-yemekleri` | Mevlüt, cenaze, hayır, kandil | Geleneksel tabldot, lokma, pilav-et |

### Her hizmet sayfası şablonu (sabit 9 blok)
1. Hero — hizmet adı + tek cümle vaat + "Teklif Al" CTA
2. Kısa tanıtım paragrafı (150-200 kelime, SEO metni)
3. **Menü seçenekleri** — 2-3 paket (Klasik / Seçkin / Premium) tablo veya kart
4. **Neler dahil** — ikon listesi (ekipman, servis personeli, kurulum, toplama, ısıtma, tek kullanımlık/porselen)
5. **Kapasite & süre** — min-max kişi, hazırlık süresi, teslim saati
6. Galeri (6-8 görsel, lightbox)
7. Süreç — 4 adım: Talep → Menü & Teklif → Onay & Tarih → Kurulum & Servis
8. SSS (4-6 soru, accordion) → `FAQPage` schema
9. CTA bandı — form + WhatsApp + telefon

**Mevlüt sayfası özel notu:** ton daha sade, sakin; renk vurgusu düşük, "fiyat/kampanya" dili yok, hızlı organizasyon (24 saat içinde) öne çıkar.

---

## 3. SİTE HARİTASI

```
/                          Ana sayfa (tek sayfa akış + hizmet kartları)
/hizmetler/                Hizmetler hub (7 kart)
/hizmetler/kokteyl-catering
/hizmetler/toplanti-catering
/hizmetler/kurumsal-catering
/hizmetler/ozel-gun-catering
/hizmetler/fuar-etkinlik-catering
/hizmetler/tasimali-catering
/hizmetler/mevlut-yemekleri
/menuler/                  Menü & paketler (kategori filtreli) + PDF indir
/galeri/                   Fotoğraf galerisi (kategori filtreli)
/hakkimizda/               Mutfak, ekip, hijyen belgeleri
/iletisim/                 Form + harita + telefon/WhatsApp
/teklif-al/                Detaylı teklif formu (çok adımlı)
/kvkk/  /gizlilik/         Yasal
404.html
```

**Not:** Faz 1'de `/` + 7 hizmet sayfası + `/iletisim` yeterli. Diğerleri Faz 2.

---

## 4. ANA SAYFA BÖLÜM PLANI (sıra önemli)

| # | Bölüm | İçerik | Amaç |
|---|---|---|---|
| 1 | Sticky Header | Logo, menü, telefon, "Teklif Al" (altın buton) | Sürekli dönüşüm |
| 2 | Hero | Tam ekran görsel/video + başlık + alt başlık + 2 CTA + güven rozetleri (X+ etkinlik, Y+ kişi) | İlk 3 saniye |
| 3 | Hizmet Grid | 7 hizmet kartı (ikon + isim + 1 cümle + ok) | Yönlendirme |
| 4 | Neden Yumak | 4 sütun: Kendi mutfağımız / Tam ekipman / Taşımalı servis / Hijyen belgeli | İtiraz kırma |
| 5 | Öne çıkan menüler | 3 paket kartı + "tüm menüler" | Somutlaştırma |
| 6 | Galeri şeridi | Yatay kaydırmalı 10-12 görsel | Görsel kanıt |
| 7 | Süreç | 4 adım timeline | Belirsizlik giderme |
| 8 | Referanslar | Firma logoları + 3 yorum | Sosyal kanıt |
| 9 | Rakamlar | Yıl, etkinlik sayısı, misafir sayısı, menü çeşidi (sayaç animasyonu) | Güven |
| 10 | Hızlı teklif formu | Ad, telefon, etkinlik tipi, tarih, kişi sayısı | Dönüşüm |
| 11 | SSS | 6 soru accordion | SEO + itiraz |
| 12 | Footer | Adres, harita, çalışma saatleri, sosyal, hizmet linkleri, KVKK | SEO iç link |
| — | Mobil sticky bar | Ara / WhatsApp / Teklif (yalnız <768px) | Mobil dönüşüm |

---

## 5. TASARIM SİSTEMİ

> Kaynak: `assets/img/YumakLogo.png`. Palet doğrudan logodan çıkarıldı —
> mürekkep `#79201F`, zemin `#FAF2E7`. Tek doğruluk kaynağı: `assets/css/main.css` §1.
> (`design-system/yumak-catering/MASTER.md` ilk tarama çıktısıdır, güncel değildir.)

### Görsel dil
Beyaz, ferah, editorial. Ortalanmış bölüm başlıkları, geniş harf aralıklı (0.09–0.14em)
UPPERCASE serif başlıklar, ince altın süs çizgisi, tam genişlik fotoğraf bantları,
ortada logolu şeffaf menü. Yuvarlak köşe yok denecek kadar az (2–3px), gölge minimal.

### Renk (WCAG AA doğrulandı)
```css
--wine-900: #2E0A09;  /* koyu bantlar, footer, hero zemini */
--wine-600: #79201F;  /* marka ana rengi — logo mürekkebi */
--gold-700: #8A6118;  /* krem üstü metin-güvenli altın */
--gold-500: #C9A227;  /* koyu zemin üstü dekoratif altın */
--cream-100:#FAF5EC;  /* logo zemini — bölüm arka planı */
--bg:       #FFFFFF;  /* ana zemin */
--ink:      #241715;  /* metin */
--ink-muted:#7C6C67;  /* ikincil metin */
```
Oran: %70 beyaz/krem, %20 bordo koyu bantlar, %10 altın vurgu.
Altın yalnızca hairline, ikon ve süs; geniş alanda kullanılmaz. Saf siyah yok.

### Tipografi
- Başlık: **Cormorant Garamond** 300/400/500/600 — uppercase + geniş harf aralığı
- Gövde/UI: **Inter** 300/400/500/600 — gövde ağırlığı 300
- Ölçek: h1 clamp(2.25rem, 5.4vw, 4rem) / h2 clamp(1.75rem, 3.4vw, 2.75rem) / body 1rem
- Gövde line-height 1.75. Eyebrow 11px, letter-spacing 0.3em.

### Spacing & layout
- Skala: 8 / 16 / 24 / 32 / 48 / 64 px
- Container max 1280px, iç padding 24px (mobil 16px)
- Grid: mobil 1 sütun → 768px 2 → 1024px 3
- Radius: kart 12px, buton 8px, görsel 16px
- Gölge: yumuşak, `0 4px 24px rgba(12,10,9,.08)`

### Bileşen envanteri
Buton (primary/ghost/altın), Hizmet kartı, Menü paket kartı, Accordion, Lightbox galeri, Yatay carousel, Timeline, Referans kartı, Sayaç, Form input + inline hata, Toast/success, Sticky mobil bar, Breadcrumb, Footer.

### Kırılım noktaları
375 / 768 / 1024 / 1440 px. Mobile-first. Yatay scroll YOK.

---

## 6. MOTION PLANI (orta yoğunluk)

- Kütüphane: GSAP + ScrollTrigger (CDN) — Empire Garden ile aynı yaklaşım
- Scroll reveal: `opacity 0→1, y 24→0`, 400ms, `expo.out`
- Grid stagger: `each: 0.06`, `back.out(1.4)`
- Hero arka plan: hafif parallax `yPercent 10`, scrub — **sadece görsel katman, metin değil**
- Hover: 150-200ms, kart `translateY(-4px)` + gölge artışı
- Sayaç: viewport'a girince bir kez
- `prefers-reduced-motion: reduce` → tüm animasyonlar kapanır, içerik anında görünür (zorunlu)
- Animasyon `transform`/`opacity` üzerinden; `width/height/top` animasyonu YOK

---

## 7. TEKNİK STACK & DOSYA YAPISI

**Stack: statik HTML + CSS + vanilla JS** (build yok, herhangi bir hostinge atılır — Empire Garden ile aynı mantık, ama çok sayfalı yapı için CSS/JS ayrı dosyada).

```
YumakCatring/
├── index.html
├── hizmetler/
│   ├── index.html
│   ├── kokteyl-catering.html
│   ├── toplanti-catering.html
│   ├── kurumsal-catering.html
│   ├── ozel-gun-catering.html
│   ├── fuar-etkinlik-catering.html
│   ├── tasimali-catering.html
│   └── mevlut-yemekleri.html
├── menuler/index.html
├── galeri/index.html
├── hakkimizda/index.html
├── iletisim/index.html
├── kvkk/index.html
├── 404.html
├── assets/
│   ├── css/  main.css, components.css
│   ├── js/   main.js, gallery.js, form.js
│   ├── img/  hero/, hizmetler/, galeri/, logo/, og/
│   ├── icons/ (SVG sprite — Lucide seti, emoji YOK)
│   └── pdf/  yumak-catering-menu.pdf
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── design-system/yumak-catering/MASTER.md
```

Görseller: WebP + `<img loading="lazy" width height>` (CLS < 0.1), hero görseli `fetchpriority="high"` preload.

---

## 8. SEO PLANI

**Hedef anahtar kelimeler** (şehir eklenecek — bkz. açık sorular):
- catering firması [şehir], kurumsal catering, açık büfe catering, kokteyl catering
- toplantı catering, ofis yemek servisi, taşımalı yemek servisi
- mevlüt yemeği [şehir], hayır yemeği, mevlüt lokması
- nişan catering, düğün catering, fuar catering

**Her sayfada:** benzersiz `<title>` (55-60 kr), `meta description` (150-160 kr), canonical, Open Graph + Twitter kartı, `lang="tr"`, breadcrumb.

**Schema.org JSON-LD:**
- `LocalBusiness` / `FoodEstablishment` (ana sayfa) — ad, adres, telefon, açılış saatleri, geo, görseller
- `Service` (her hizmet sayfası) + `areaServed`
- `FAQPage` (SSS blokları)
- `BreadcrumbList` (iç sayfalar)
- `Organization` + `sameAs` (sosyal hesaplar)

**Ayrıca:** sitemap.xml, robots.txt, Google Business Profile bağlantısı, tüm görsellerde açıklayıcı `alt`.

---

## 9. FORM & TEKLİF AKIŞI

**Hızlı form (ana sayfa):** Ad Soyad*, Telefon*, Etkinlik Tipi (select, 7 hizmet)*, Tarih, Kişi Sayısı, Mesaj, KVKK onayı*

**Detaylı teklif formu (`/teklif-al`):** yukarıdakiler + lokasyon/adres, servis tipi (açık büfe / tabldot / kokteyl), ekipman ihtiyacı (checkbox), bütçe aralığı, kurum adı.

Kurallar (UX zorunlu):
- Görünür `<label>` — sadece placeholder YOK
- `blur`'da inline doğrulama, hata mesajı ilgili alanın altında
- Submit'te: loading → başarı/hata mesajı (sessiz kalma YOK)
- `type="tel"`, `inputmode="numeric"`, `autocomplete` doğru değerleri
- Dokunma hedefi min 44×44px
- Honeypot + rate limit (basit spam koruması)

**Backend seçeneği (karar gerekli):** Formspree/Web3Forms (kod yok, e-postaya düşer) **veya** PHP `mail()` **veya** sadece WhatsApp yönlendirme. Öneri: **Web3Forms + WhatsApp yedek** — statik hostingle çalışır, ücretsiz.

---

## 10. SENDEN GEREKENLER (içerik envanteri)

| # | Gereken | Öncelik | Yoksa ne yaparız |
|---|---|---|---|
| 1 | Logo (SVG/PNG şeffaf) | Kritik | Geçici yazı-logo (Playfair) üretirim |
| 2 | Telefon + WhatsApp numarası | Kritik | Placeholder |
| 3 | Adres + şehir/ilçe (SEO için şart) | Kritik | Placeholder — SEO eksik kalır |
| 4 | Yemek/etkinlik fotoğrafları (min 25-30 adet) | Kritik | Geçici stok görsel, sonra değiştiririz |
| 5 | Menü içerikleri (paket paket yemek listeleri) | Yüksek | Örnek menü yazarım, sen düzeltirsin |
| 6 | Hakkımızda metni / kuruluş yılı | Yüksek | Taslak yazarım |
| 7 | Referans firma logoları + yorumlar | Orta | Bölümü Faz 2'ye bırakırız |
| 8 | Hijyen/ISO belgeleri görseli | Orta | Bölüm gizlenir |
| 9 | Sosyal medya linkleri | Orta | Gizlenir |
| 10 | Domain adı | Orta | `https://www.yumakcatering.com` varsayarım |
| 11 | Çalışma saatleri, min. sipariş kişi sayısı | Orta | Placeholder |

**Not:** Hiçbiri hazır değilse yine de başlarım — tüm metin/görselleri gerçekçi taslakla doldurup net `TODO` işaretlerim.

---

## 11. PERFORMANS & ERİŞİLEBİLİRLİK BÜTÇESİ

- Lighthouse hedef: Performance ≥ 90, Accessibility ≥ 95, SEO 100
- LCP < 2.5s, CLS < 0.1, toplam sayfa ağırlığı < 1.5MB
- Tüm görseller WebP, lazy load, `width`/`height` sabit
- Metin kontrastı ≥ 4.5:1, buton/ikon ≥ 3:1
- Klavye ile tam gezinme + görünür focus ring (focus outline kaldırılmaz)
- İkonlar SVG (Lucide) — **emoji ikon olarak kullanılmaz**
- `aria-label` ikon-only butonlarda, `alt` tüm anlamlı görsellerde

---

## 12. YOL HARİTASI

| Faz | Kapsam | Durum |
|---|---|---|
| **Faz 0** | Plan + logo asset seti (şeffaf logo, beyaz varyant, favicon'lar) | ✅ Tamam |
| **Faz 1** | `main.css` tasarım sistemi + `index.html` tam ana sayfa | ✅ Tamam |
| **Faz 2** | 7 hizmet sayfası + hizmetler hub | ✅ Tamam |
| **Faz 3** | Galeri, Menüler, Hakkımızda, İletişim, KVKK, 404 | ✅ Tamam |
| **Faz 4** | Reveal/parallax/sayaç motion, lightbox, galeri filtresi, mobil sticky bar | ✅ Tamam |
| **Faz 5** | SEO: schema (Service/FAQ/Breadcrumb/LocalBusiness), sitemap, robots, OG | ✅ Tamam |
| **Faz 6** | Gerçek fotoğraf ve metinlerle değişim + Web3Forms key + Lighthouse QA | ⏳ Bekliyor |

**Motion notu:** GSAP yerine yerel IntersectionObserver + rAF kullanıldı — sıfır bağımlılık,
daha hızlı yükleme, aynı görsel sonuç. `prefers-reduced-motion` tam destekli.

---

## 13. YAYINA ALMA

Statik olduğu için: Netlify / Cloudflare Pages / Vercel / paylaşımlı hosting — hepsi çalışır. Öneri: **Cloudflare Pages** (ücretsiz, hızlı, otomatik HTTPS) + domain yönlendirme. Git deposu kurulur, push = deploy.

---

## 14. VERİLEN KARARLAR ✅

| Konu | Karar |
|---|---|
| Site yapısı | **Çok sayfa** — ana sayfa + 7 hizmet sayfası + galeri/menü/hakkımızda/iletişim |
| Form | **Web3Forms** (e-postaya düşer) + WhatsApp butonu yedek |
| İçerik | **Geçici ile başla** — taslak metin + placeholder görsel, `TODO` işaretli |
| Bölge | **İstanbul geneli** (Avrupa + Anadolu yakası) — SEO ve schema buna göre |
| Telefon / WhatsApp | **0538 446 69 38** — tüm sayfalarda, sticky barda ve schema'da tanımlı |
| Görsel dil | Referans siteye göre **beyaz / ferah / editorial** — bkz. §5 |
| Fiyat gösterimi | Yok. Sadece "Teklif Al" — premium algı korunur |
| Dil | TR. İngilizce Faz 7'ye ertelendi |

### Hâlâ cevap bekleyen (engelleyici değil)
1. Domain adı (varsayım: `yumakcatering.com`)
2. Fiziksel adres (schema `LocalBusiness` ve harita için)
3. E-posta adresi (varsayım: `info@yumakcatering.com`)
4. Instagram / Facebook adresleri
5. Web3Forms access key (ücretsiz — web3forms.com'dan e-posta ile alınır)

### Yayına almadan önce yapılacaklar (kod içinde `TODO` olarak işaretli)
| # | İş | Nerede |
|---|---|---|
| 1 | Geçici görselleri gerçek fotoğraflarla değiştir | `assets/img/hero`, `hizmetler`, `galeri`, `genel` |
| 2 | Web3Forms access key'i yaz | tüm sayfalardaki `value="YOUR-WEB3FORMS-ACCESS-KEY"` |
| 3 | Alan adını güncelle | `canonical`, `og:url`, JSON-LD, `robots.txt`, `sitemap.xml` |
| 4 | Adres + harita `q=` parametresi | `index.html`, `iletisim/index.html` |
| 5 | Sosyal medya linkleri (`href="#"`) | footer |
| 6 | Referans firma adlarını gerçek logolarla değiştir | `index.html` `.logos` |
| 7 | KVKK metnini hukuk danışmanıyla kesinleştir | `kvkk/index.html` |

**Not:** Logoda marka adı **"catring"** olarak yazılmış. Site metinlerinde doğru yazım
("Catering") kullanıldı. Logoyu düzelttirmek isterseniz asset seti aynı script ile yeniden üretilir.

### Geçici görsel politikası
Yer tutucular marka renginde üretildi ve üzerinde "GEÇİCİ GÖRSEL — DEĞİŞTİRİLECEK"
yazıyor; gözden kaçmaz. Dosya adları nihai, sadece içerik değiştirilecek.
Metinler lorem ipsum değil — yayına uygun gerçek taslak.
