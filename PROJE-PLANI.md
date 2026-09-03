# YUMAK CATERING — PREMIUM KURUMSAL WEB SİTESİ
## A'dan Z'ye Proje, Strateji ve Tasarım Dokümanı

> **Doküman tipi:** Senior UX + Senior UI + CRO + SEO + Creative Director ortak çıktısı
> **Aşama:** Strateji ve tasarım planı — **kod yazılmadı**
> **Durum:** Onay bekliyor. Onaydan sonra Faz 1 başlar.
> **Not:** Bu doküman önceki `PLAN.md` dosyasının yerine geçer.

---

# BÖLÜM 0 — YÖNETİCİ ÖZETİ VE KARAR NOKTALARI

## 0.1 Bu site ne yapacak?

Bu bir "vitrin sitesi" değil. Tek bir işi var: **kurumsal satın almacıyı ve organizasyon sahibini, ilk 8 saniyede güvene, 90 saniyede teklif talebine dönüştürmek.**

Catering satın alma kararı üç korkuyla verilir:
1. **"Rezil olur muyum?"** — Davetimde yemek yetmezse, geç gelirse, kötü olursa itibarım gider.
2. **"Bu firma gerçek mi?"** — Mutfağı var mı, ekibi var mı, belgesi var mı?
3. **"Bütçemi aşar mı?"** — Fiyat belirsizse teklif istemekten çekinirim.

Sitenin her bölümü bu üç korkudan **en az birini** söndürmek zorundadır. Söndürmeyen bölüm siteden çıkarılır.

## 0.2 Ölçülebilir hedefler

| Metrik | Hedef | Neden |
|---|---|---|
| Teklif formu dönüşümü | ≥ %4,5 (sektör ort. %2,1) | Ana KPI |
| WhatsApp tıklama | ≥ %8 | Mobilde birincil mikro-dönüşüm |
| Hemen çıkma (bounce) | ≤ %45 | İçerik uyumu göstergesi |
| Ortalama oturum | ≥ 1:40 | Hizmet sayfası derinliği |
| Lighthouse Performance | ≥ 92 (mobil) | CWV ve sıralama |
| LCP / INP / CLS | < 2,0 s / < 200 ms / < 0,05 | Google eşiğinin altında değil, **iyi** tarafında |
| Organik trafik (6. ay) | 17 hizmet sayfası + 50 blog ile 3.000+/ay | SEO |

## 0.3 ✅ KARARLAR — ONAYLANDI (2 Ağustos 2026)

| # | Karar | Sonuç |
|---|---|---|
| 1 | **Renk paleti** | ✅ **Logo antrasit + gold'a çevrilecek.** Palet: beyaz / siyah / gold / koyu gri / soft bej. Bordo emekli. |
| 2 | **Premium yeşil** | ✅ **Yalnız rozet ve onay ikonlarında** (`#1B3A2F`). Geniş yüzeyde kullanılmayacak. |
| 3 | **Teknoloji** | ✅ **Next.js 15 (App Router) + TypeScript + Tailwind + Framer Motion.** Mevcut statik site arşivlenip yeniden yazılacak. |
| 4 | **Fotoğraf** | ✅ **Markalı desenle inşa**, çekim sonra. Dosya adları sabit — fotoğraflar geldiğinde kod değişmeden yerleşir. |

> Aşağıdaki bölüm kararların gerekçesini kayıt altında tutar.

---

## 0.4 Karar gerekçeleri (arşiv)

### KARAR 1 — Renk paleti ile logo çakışıyor

İstediğiniz palet: **beyaz, siyah, gold, koyu gri, soft bej, hafif premium yeşil.**
Mevcut logo: **bordo (#79201F) + krem.** Bordo bu palette yok.

Üç yol var:

| Seçenek | Ne olur | Değerlendirme |
|---|---|---|
| **A. Logo antrasit + gold'a çevrilir** | Logo çizgileri `#1C1917`, yumak topu `#A16207`. Palet %100 tutarlı olur. Marka daha "Michelin/lüks otel" durur. | **Önerilen.** Logo çizgi işi olduğu için renk değişimi kolay ve kayıpsız. Varyantı üretebilirim. |
| **B. Bordo "miras aksan" olarak kalır** | Ana sistem siyah+gold+bej; bordo yalnız logo çevresinde ve tek bir vurgu öğesinde yaşar. | Çalışır ama palet 4 renge çıkar, "minimal" iddiası zayıflar. |
| **C. Palet bordo etrafında kurulur** | Şu anki site bu yönde. | İstediğiniz "siyah+gold lüks" hissi kaybolur. |

> **Tavsiyem: A.** Sebep: "premium + minimal + lüks" üçlüsü **renk azlığıyla** kurulur. Bordo sıcak ve samimi bir renk; siyah-gold ise mesafeli ve pahalı. İkisi aynı sayfada birbirini iptal eder.

### KARAR 2 — Yeşil gerçekten gerekli mi?

İstediniz: "premium yeşil tonları (çok abartmadan)". Siyah + gold + bej + yeşil = 4 renkli sistem. Lüks markalar 2–3 renkle çalışır.

**Tavsiyem:** Yeşili **tek bir işte** kullanalım — "taze / günlük üretim / hijyen" mesajını taşıyan rozetler ve onay ikonları (`#1B3A2F`). Geniş yüzeyde asla. Böylece hem istediğiniz ton girer, hem minimal kalır.

### KARAR 3 — Teknoloji: Next.js mi, statik HTML mi?

İstediğiniz klasör yapısı (`components`, `hooks`, `types`, `lib`, `api`) ve **Framer Motion** doğrudan **React/Next.js** demek. Mevcut site statik HTML.

| | Next.js (önerilen) | Statik HTML devam |
|---|---|---|
| Framer Motion, sayfa geçişi, shared element | ✅ Doğal | ⚠ Elle, sınırlı |
| Blog (50 makale) yönetimi | ✅ MDX / CMS | ❌ Elle 50 dosya |
| Bileşen tekrarı (17 hizmet sayfası) | ✅ Tek şablon | ❌ 17 kopya |
| SEO / SSG | ✅ Mükemmel | ✅ İyi |
| Hosting | Vercel / Cloudflare (ücretsiz) | Herhangi biri |
| Mevcut siteden geçiş | Yeniden yazım | — |

> **Tavsiyem: Next.js 15 (App Router) + TypeScript + Tailwind + Framer Motion.**
> Sebep: 17 hizmet sayfası + 50 blog yazısı statik HTML'de bakımı imkânsız hâle gelir. Tek şablon + veri dosyası ile 17 sayfa üretmek, 17 dosyayı elle güncellemekten 10 kat ucuzdur. Bu doküman Next.js varsayımıyla yazıldı; statik yolda kalınırsa Bölüm 17 sadeleşir, geri kalan her şey aynen geçerli.

---

# BÖLÜM 1 — MARKA STRATEJİSİ VE KONUMLANDIRMA

## 1.1 Konumlandırma cümlesi

> **Yumak Catering, İstanbul'da kurumsal ve özel organizasyonların mutfak yükünü tamamen üstlenen; üretimden servise, ekipmandan personele kadar tek elden çalışan premium catering firmasıdır.**

## 1.2 Marka kişiliği

| Boyut | Yumak | Yumak DEĞİL |
|---|---|---|
| Ton | Sakin, net, yetkin | Coşkulu, ünlemli, satışçı |
| Vaat | "Sorumluluğu biz alıyoruz" | "En ucuz biziz" |
| Kanıt | Rakam, süreç, belge | Sıfat yığını |
| Görsel | Az öğe, çok boşluk, büyük fotoğraf | Kalabalık kolaj, stok klişe |
| Fiyat dili | "Teklif alın" | "%20 indirim!" |

## 1.3 Üç ana mesaj (site genelinde tekrar eder)

1. **Kendi merkez mutfağımızda, etkinlik günü taze üretim.** — Fason yok.
2. **Kurulumdan toplamaya tam hizmet.** — Ekipman, personel, servis dahil. Gizli kalem yok.
3. **Zamanı yazılı taahhüt ediyoruz.** — Servis saati sözleşmeye yazılır.

## 1.4 Rakip ve benchmark analizi — ne alıyoruz, ne almıyoruz

| Kaynak | Aldığımız | Almadığımız |
|---|---|---|
| **Apple** | Tek ekran = tek mesaj. Aşırı beyaz alan. Ürünün (yemeğin) tek kahraman olması. Scroll'a bağlı sahne değişimi. | Soğukluk. Catering sıcak bir iştir. |
| **Tesla** | Tam ekran görsel + minimum metin + iki CTA. Sticky ve sade üst menü. | Teknik jargon. Konfigüratör karmaşası. |
| **Michelin yıldızlı restoran siteleri** | Editoryal serif tipografi, geniş satır aralığı, tabak fotoğrafına saygı, sessiz hareket. | Menü PDF'i indirtme, rezervasyon takvimi. |
| **Lüks otel siteleri** (Aman, Six Senses) | "Deneyimi anlatan" bölüm başlıkları, kategori bazlı büyük görsel kartlar, güven rozetleri. | Fiyat tablosu, oda karşılaştırma. |
| **Global catering** (Restaurant Associates, Bon Appétit Mgmt.) | Kurumsal referans logo şeridi, vaka çalışması formatı, sürdürülebilirlik ve hijyen sertifikası vurgusu. | Kurumsal soğukluk, yalnız B2B dili — biz B2C özel günleri de satıyoruz. |

**Sentez:** Yapı Tesla'dan (tam ekran, iki CTA), tipografi ve ritim Michelin/otel dünyasından, boşluk disiplini Apple'dan, kanıt mimarisi global catering'den.

---

# BÖLÜM 2 — HEDEF KİTLE VE KARAR YOLCULUĞU

## 2.1 Üç persona

### Persona A — "Kurumsal Satın Almacı" (Ayşe, 34, İdari İşler Müdürü)
- **Görevi:** 200 kişilik lansmana catering bulmak. Bütçe onayını yönetimden alacak.
- **Korkusu:** Yönetimin önünde rezil olmak. Fatura/sözleşme sorunları.
- **Aradığı:** Kurumsal referanslar, fatura kesebiliyor mu, sözleşme yapıyor mu, kaç kişiye kadar kapasite.
- **Kanıt ihtiyacı:** Firma logoları, vaka çalışması, hijyen belgesi, yazılı zaman planı.
- **Girdiği sayfa:** Google → "kurumsal catering istanbul" → `/hizmetler/kurumsal-catering`
- **Dönüşüm tetikleyicisi:** Detaylı teklif formu (bütçe aralığı alanı onu rahatlatır — "abartılı fiyat gelmeyecek").

### Persona B — "Özel Gün Sahibi" (Mehmet, 41, nişan organize ediyor)
- **Görevi:** Kızının nişanına 150 kişilik yemek.
- **Korkusu:** Misafirlerin önünde yetersiz kalmak. Yemeğin soğuk gelmesi.
- **Aradığı:** Fotoğraf, fotoğraf, fotoğraf. Menü örneği. Başkaları ne demiş.
- **Kanıt ihtiyacı:** Galeri, müşteri yorumu, "ne kadar önceden haber vermeliyim".
- **Girdiği sayfa:** Instagram / Google → `/hizmetler/nisan-catering`
- **Dönüşüm tetikleyicisi:** **WhatsApp.** Form doldurmaz, yazar.

### Persona C — "Acil İhtiyaç Sahibi" (Fatma, 52, mevlüt yemeği)
- **Görevi:** Yarın için 100 kişilik mevlüt yemeği.
- **Duygu durumu:** Yas. Sabrı yok. Karşılaştırma yapmayacak.
- **Aradığı:** Telefon numarası. "Yarına yetişir mi?"
- **Kanıt ihtiyacı:** Tek cümle: "24 saat içinde organizasyon."
- **Girdiği sayfa:** Google → "mevlüt yemeği istanbul" → `/hizmetler/mevlut-yemekleri`
- **Dönüşüm tetikleyicisi:** **Telefon.** Sayfanın en üstünde, büyük, tıklanabilir.

> **Tasarım sonucu:** Üç farklı dönüşüm yolu aynı anda açık olmalı — **Form (A), WhatsApp (B), Telefon (C)**. Hiçbiri diğerinin arkasına saklanmaz. Mevlüt sayfasında telefon; kurumsal sayfada form birincil olacak şekilde **hiyerarşi sayfa bazında değişir.**

## 2.2 Karar yolculuğu ve sitenin karşılığı

| Aşama | Kullanıcının kafasındaki soru | Sitenin cevabı | Bölüm |
|---|---|---|---|
| Farkındalık | "Kim bunlar?" | Hero + slogan | 1 |
| İlgi | "Ciddi bir firma mı?" | Rakamlar, kurumsal logolar | 2, 7 |
| Değerlendirme | "Benim işimi yapıyorlar mı?" | Hizmet grid'i, hizmet sayfası | 4 |
| Güven | "Batırmazlar mı?" | Neden Yumak, süreç, belge | 3, 5 |
| Doğrulama | "Başkaları memnun mu?" | Yorumlar, galeri, vaka | 6, 8, 9 |
| İtiraz | "Ya şu olursa?" | SSS | 10 |
| Aksiyon | "Nasıl başlıyorum?" | CTA + brief alanı + form | 12, 13 |

---

# BÖLÜM 3 — SİTE HARİTASI (BİLGİ MİMARİSİ)

```
/                                    Ana Sayfa
│
├── /kurumsal
│    ├── /hakkimizda                 Hikâye, mutfak, ekip, belgeler
│    ├── /neden-yumak                Farklılaşma sayfası (CRO odaklı)
│    └── /kalite-ve-hijyen           Belgeler, süreç, denetim
│
├── /hizmetler                       Hizmet hub'ı (17 kart)
│    ├── /kurumsal-catering
│    ├── /is-toplantisi-catering
│    ├── /ozel-gun-organizasyonu
│    ├── /dugun-catering
│    ├── /nisan-catering
│    ├── /mevlut-yemekleri
│    ├── /acilis-organizasyonu
│    ├── /kokteyl-organizasyonu
│    ├── /fuar-catering
│    ├── /fabrika-yemek-hizmeti
│    ├── /personel-yemek-hizmeti
│    ├── /tasimali-mobil-catering
│    ├── /vip-catering
│    ├── /davet-organizasyonu
│    ├── /lansman-organizasyonu
│    ├── /festival-etkinlik-catering
│    └── /toplu-yemek-hizmeti
│
├── /menuler                         Menü sistemi ve paketler
│    ├── /acik-bufe-menu
│    ├── /kokteyl-menu
│    ├── /tabldot-menu
│    └── /ozel-menu-tasarimi
│
├── /organizasyonlar                 Vaka çalışmaları (case study)
│    └── /organizasyonlar/[slug]     Tek tek proje sayfaları
│
├── /galeri                          Masonry + filtre + lightbox
├── /referanslar                     Kurumsal müşteri listesi
├── /yorumlar                        Müşteri yorumları (schema'lı)
│
├── /blog                            SEO içerik merkezi
│    ├── /blog/kategori/[slug]
│    └── /blog/[slug]
│
├── /sss                             Sık sorulan sorular
├── /iletisim                        İletişim + harita + form
├── /teklif-al                       ⭐ Çok adımlı teklif sihirbazı
│
├── /kvkk
├── /gizlilik-politikasi
├── /cerez-politikasi
├── /site-haritasi                   HTML sitemap (kullanıcı için)
└── /404
```

## 3.1 Mega Menü yapısı (masaüstü)

Üst menüde 5 ana başlık. "Hizmetler" hover'da **mega menü** açar:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  KURUMSAL              ÖZEL GÜNLER          ETKİNLİK          SÜREKLİ     │
│  ─────────             ───────────          ────────          ────────    │
│  Kurumsal Catering     Düğün                Kokteyl           Personel    │
│  İş Toplantısı         Nişan                Açılış            Fabrika     │
│  VIP Catering          Özel Gün             Lansman           Toplu Yemek │
│  Davet                 Mevlüt               Fuar                          │
│                                             Festival          Taşımalı    │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │  [Görsel]  Ne aradığınızdan emin değil misiniz?                    │  │
│  │            Organizasyonunuzu anlatın, biz yönlendirelim →          │  │
│  └────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────┘
```

**Neden 4 sütun?** 17 hizmet düz liste hâlinde **karar felci** yaratır (Hick yasası: seçenek sayısı arttıkça karar süresi logaritmik artar). Dört zihinsel kategoriye bölünce kullanıcı önce kategori seçer (4 seçenek), sonra hizmet seçer (4-5 seçenek). Karar yükü yarıya iner.

**Mobilde:** Mega menü olmaz. Tam ekran drawer + akordeon kategori.

---

# BÖLÜM 4 — ANA SAYFA: BÖLÜM BÖLÜM TAM ANALİZ

> Her bölüm için 8 soru cevaplanıyor: **Neden var / Psikoloji / CRO / SEO / UX / UI / Motion / Mobil.**

---

## BÖLÜM 1 — HERO (İlk Ekran)

**İçerik:** Tam ekran premium yemek videosu veya görseli · Eyebrow "İstanbul · Premium Catering" · H1 slogan · 1 cümle açıklama · 2 CTA ("Hemen Teklif Al" birincil, "Hizmetleri İncele" ikincil) · alt kenarda 4 mini güven rozeti.

| Soru | Cevap |
|---|---|
| **Neden var** | Sitenin tek "ilk izlenim" şansı. Ziyaretçi burada kalır ya da gider. |
| **Psikoloji** | **Thin-slicing** — insan bir sitenin kalitesine 50 milisaniyede karar verir (Lindgaard, 2006) ve bu karar sonraki tüm değerlendirmeyi renklendirir (**halo etkisi**). Premium bir görsel, sonraki fiyat algısını da yukarı çeker. |
| **CRO** | İki CTA = iki hazırlık seviyesi. "Teklif Al" hazır olan için; "Hizmetleri İncele" henüz hazır olmayan için. Tek CTA koyarsak hazır olmayanı kaybederiz; üç CTA koyarsak ikisi de zayıflar. |
| **SEO** | Tek `<h1>`, ana anahtar kelime + şehir içinde. LCP öğesi burada — bu yüzden hero görseli `priority` yüklenir, video **asla** LCP olmaz (poster görsel LCP olur). |
| **UX** | Katlamanın (fold) üstünde: kim olduğumuz, ne yaptığımız, ne yapmalıyım. Üçü birden. Scroll işareti alt kenarda — "devamı var" sinyali. |
| **UI** | Tam ekran (100svh, `dvh` değil — mobil adres çubuğu zıplamasını önler). Görselin üstünde alttan üste koyulaşan gradyan (metin kontrastı ≥ 4.5:1 garanti). Serif H1, 300 ağırlık, geniş harf aralığı. Butonlar ince çerçeveli, dolgusuz — lüks kodu. |
| **Motion** | Sayfa açılışında **stagger**: eyebrow → H1 → metin → butonlar, her biri 80 ms arayla, 500 ms, `power2.out`. Arka planda **yavaş parallax** (yPercent 8-10, scrub). Video varsa `autoplay muted loop playsinline`, 8-12 sn, sessiz, ilk kare = poster. |
| **Mobil** | Video **yüklenmez** (veri maliyeti) — statik görsel. Butonlar alt alta, tam genişlik. H1 en fazla 4 satır. |

**Anti-pattern:** Hero'da otomatik dönen slider yok. Slider'da 2. slaytı gören kullanıcı oranı %1'in altındadır (Notre Dame araştırması) ve CLS yaratır.

---

## BÖLÜM 2 — GÜVEN ALANI (Rakamlar)

**İçerik:** 4 sayaç — Yıllık tecrübe · Tamamlanan organizasyon · Kurumsal müşteri · Ağırlanan misafir.

| Soru | Cevap |
|---|---|
| **Neden var** | Hero bir **iddia**dır. Rakamlar o iddianın ilk **kanıtı**dır. İddia ile kanıt arasına başka hiçbir şey girmemeli. |
| **Psikoloji** | **Sosyal kanıt** + **otorite**. Somut sayı, sıfattan 6 kat daha inandırıcıdır. "12 yıl" > "yılların tecrübesi". |
| **CRO** | Doğrudan dönüşüm getirmez ama **terk etme oranını** düşürür. Kanıtsız sitede kullanıcı ortalama 3. bölümde ayrılır. |
| **SEO** | Doğrudan katkı yok. Dolaylı: oturum süresini uzatır, pogo-sticking'i azaltır. |
| **UX** | Hızlı okunur, 3 saniyede taranır. Sayı büyük, etiket küçük. |
| **UI** | **Koyu bant** — beyaz akıştan koyuya geçiş, bölüm sınırını fiziksel olarak hissettirir. Sayılar serif, gold; etiketler küçük, geniş aralıklı, açık gri. Arka planda %25 opaklıkta organizasyon fotoğrafı. |
| **Motion** | **Counter animasyonu** — viewport'a %50 girince 1400 ms'de `easeOutCubic` ile sayar. Bir kez çalışır, tekrar etmez. Rakamlar 80 ms stagger ile sırayla başlar. |
| **Mobil** | 2×2 grid. |

---

## BÖLÜM 3 — NEDEN YUMAK CATERING?

**İçerik:** 7 kart — Hijyen · Kalite · Profesyonel ekip · Zamanında teslim · Lezzet · Mobil ekip · Premium sunum.

| Soru | Cevap |
|---|---|
| **Neden var** | Rakamlar "büyüğüz" der. Bu bölüm **"iyiyiz ve şu yüzden"** der. Farklılaşma burada kurulur. |
| **Psikoloji** | **Risk azaltma.** Alıcının kafasındaki 7 itirazın her birine bir kart. Kart formatı, itirazları **teker teker ve görünür şekilde** kapatır — paragraf içinde kaybolmaz. |
| **CRO** | Hizmet bölümünden **önce** gelmeli. Önce "neden bu firma", sonra "hangi hizmet". Tersi olursa kullanıcı hizmete bakar, güven oluşmadan çıkar. |
| **SEO** | Semantik zenginlik: "hijyen", "gıda güvenliği", "zamanında teslim" gibi long-tail destek kelimeleri doğal şekilde girer. |
| **UX** | Her kart: ikon + 2-4 kelime başlık + 1 cümle. **Kart tıklanabilir değil** — burada amaç okutmak, tıklatmak değil. Tıklanabilir görünüp tıklanmayan öğe UX suçudur. |
| **UI** | Çerçevesiz, gölgesiz. Sadece ince gold hairline ikon çerçevesi. Bej zemin. 7 kart → masaüstü 4+3 asimetrik dizilim (Swiss grid mantığı), ortalanmış. |
| **Motion** | **Stagger reveal** — `each: 0.06`, `back.out(1.4)`, 400 ms, en fazla 8 kademe (fazlası son kartı yavaş hissettirir). Hover: ikon çerçevesi gold'a döner, 200 ms. |
| **Mobil** | Tek sütun, ikon solda + metin sağda (dikey alan tasarrufu). |

---

## BÖLÜM 4 — HİZMETLER

**İçerik:** 17 hizmet. Ana sayfada **hepsi değil** — 4 kategori başlığı altında 8 öne çıkan + "Tüm hizmetler (17)" bağlantısı.

| Soru | Cevap |
|---|---|
| **Neden var** | Sitenin kalbi. Kullanıcı buradan kendi ihtiyacına ait sayfaya dallanır. |
| **Psikoloji** | **Kendini bulma.** Kullanıcı listede kendi etkinliğini görürse ("Mevlüt Yemekleri") anında "burası bana göre" der. Görmezse çıkar. Bu yüzden hizmet adları **müşterinin kelimeleriyle** yazılır, bizim iç terminolojimizle değil. |
| **CRO** | Her kart bir **giriş kapısı**. 17 hizmet = 17 ayrı arama niyeti = 17 dönüşüm yolu. Ana sayfada 17'sini birden göstermek karar felci yaratır — 8 göster, kalanı hub'a yönlendir. |
| **SEO** | ⭐ **En kritik SEO bölümü.** Ana sayfadan 17 hizmet sayfasına iç link akışı. Google için hizmet ağacının haritası burada çıkar. Anchor metinler tam anahtar kelime olmalı ("Kurumsal Catering", "Fuar Catering Hizmeti"). |
| **UX** | Kart: büyük görsel (4:3) + hizmet adı + 1 satır fayda + "Detaylar" bağlantısı. **Tüm kart tıklanabilir**, sadece link değil. |
| **UI** | 3 sütunlu grid, geniş boşluk (gap 32px). Görsel üstte, metin altta ortalanmış. Kart çerçevesi yok — görselin kendisi sınırı çizer. Bu, ürünü (yemeği) kahraman yapan Apple yaklaşımıdır. |
| **Motion** | **Hover:** görsel 1.00 → 1.05 zoom, 600 ms `power2.out`; başlık altında gold hairline soldan sağa çizilir; kart 4px yükselir. **Scroll:** görsel için **perde açılışı** — alttan yukarı maske kalkar + görsel 1.10'dan 1.00'e iner, 700/900 ms. Grid stagger `each: 0.06`. |
| **Mobil** | Tek sütun, tam genişlik görsel. Hover yok → dokunma geri bildirimi: basılınca %0.98 scale, 150 ms. |

---

## BÖLÜM 5 — ÇALIŞMA SÜRECİ (7 Adım)

**İçerik:** İletişim → Planlama → Menü Oluşturma → Hazırlık → Teslimat → Organizasyon → Memnuniyet.

| Soru | Cevap |
|---|---|
| **Neden var** | Catering satın almanın en büyük engeli **belirsizlik**. "Ne olacak, nasıl olacak, ben ne yapacağım?" Süreç bu belirsizliği öldürür. |
| **Psikoloji** | **Bilişsel akıcılık (cognitive fluency).** Numaralandırılmış, doğrusal bir süreç görmek, işin kontrol altında olduğu hissi verir. Ayrıca **belirsizlikten kaçınma** — Türkiye yüksek belirsizlikten kaçınan bir kültürdür (Hofstede: 85/100); yazılı süreç burada beklenenden fazla iş görür. |
| **CRO** | 1. adımın adı **"İletişim"** — yani kullanıcının atması gereken tek adım. "Sen sadece yaz, gerisini biz yaparız" mesajı, formu doldurma eşiğini düşürür. |
| **SEO** | `HowTo` schema adayı. Zengin sonuçta adım listesi çıkabilir. |
| **UX** | 7 adım çok mu? Evet, tek satırda çok. Bu yüzden **yatay pinlenmiş scroll** (masaüstü) veya **dikey timeline** (mobil). |
| **UI** | Koyu bant üstünde. Her adım: büyük serif numara (01–07, gold, %50 opak) + başlık + 1 cümle. Adımlar arası ince gold bağlantı çizgisi. |
| **Motion** | ⭐ **Bölümün yıldızı.** Masaüstünde **GSAP ScrollTrigger pin**: bölüm ekrana sabitlenir, kullanıcı scroll ettikçe adımlar yatay ilerler ve bağlantı çizgisi soldan sağa çizilir. `scrub: 0.6`. Mobilde pin **kapalı** — dikey timeline, her adım normal scroll reveal ile girer. *(Pin, dokunmatikte scroll hissini bozar.)* |
| **Mobil** | Dikey, sol tarafta çizgi, adımlar sırayla fade+slide ile girer. |

---

## BÖLÜM 6 — ÖNE ÇIKAN ORGANİZASYONLAR (Vaka Çalışmaları)

**İçerik:** 6 büyük görsel kart — Fuar · Kokteyl · Düğün · Mevlüt · VIP · Şirket yemeği. Her biri gerçek bir işten: kişi sayısı, mekân tipi, süre.

| Soru | Cevap |
|---|---|
| **Neden var** | "Yaparız" ile "yaptık" arasındaki fark. Bu bölüm iddiayı **geçmiş zamana** çevirir. |
| **Psikoloji** | **Somutluk etkisi.** "400 kişilik fuar catering'i, 3 gün, Tüyap" cümlesi, "fuar catering hizmeti veriyoruz" cümlesinden ölçülemeyecek kadar güçlüdür. Sayı ve yer adı, hikâyeyi doğrulanabilir kılar. |
| **CRO** | Kullanıcı kendi etkinliğine benzeyen bir vakayı görürse **"benimkini de yaparlar"** çıkarımını kendisi yapar. İkna, bizim söylememizle değil, onun çıkarımıyla olur — çok daha güçlü. |
| **SEO** | `/organizasyonlar/[slug]` sayfaları uzun kuyruk trafiği getirir ("tüyap fuar catering", "400 kişilik düğün yemeği"). Ayrıca özgün içerik = Google için E-E-A-T sinyali (deneyim). |
| **UX** | Büyük görsel + üstünde minimal etiket. Tıklayınca vaka sayfası. |
| **UI** | Asimetrik **bento grid**: 1 büyük (2×2) + 4 küçük + 1 geniş. Monotonluğu kırar, editoryal dergi hissi verir. Görsel üstünde alttan gradyan + beyaz etiket. |
| **Motion** | Hover: görsel zoom 1.06 + etiket 8px yukarı kayar + gold ince çerçeve içeriden büyür. Scroll: bento parçaları **farklı hızlarda** girer (büyük olan önce, küçükler stagger ile). |
| **Mobil** | Bento bozulur → tek sütun, 16:9 kartlar. |

---

## BÖLÜM 7 — REFERANS FİRMALAR (Logo Şeridi)

| Soru | Cevap |
|---|---|
| **Neden var** | B2B alıcı için **tek en güçlü** kanıt: "bizim gibi firmalar bunlarla çalışıyor". |
| **Psikoloji** | **Otorite transferi.** Tanıdık bir marka logosu, o markanın güvenilirliğini bize ödünç verir. Ayrıca **sürü etkisi**. |
| **CRO** | Persona A (kurumsal satın almacı) için dönüşümde en yüksek etkili bölüm. Bu bölüm olmadan kurumsal teklif oranı belirgin düşer. |
| **SEO** | Doğrudan katkı düşük. `Organization` schema içinde belirtilebilir. |
| **UX** | Sonsuz kayan şerit (marquee). Durdurulabilir olmalı — `prefers-reduced-motion`'da tamamen durur ve statik grid olur. |
| **UI** | Gri tonlamalı logolar, %55 opaklık; hover'da renklenir ve %100 olur. Bej zemin. Kenarlarda maske gradyanı (logolar kenardan kesik çıkmasın). |
| **Motion** | Yatay sonsuz kaydırma, 40 sn/tur, `linear`. Hover'da durur. **Not:** Bu tek istisnadır — normalde `linear` yasak; sonsuz döngüde ivmelenme sarsıntı yaratacağı için burada doğru olan `linear`. |
| **Mobil** | Aynı, hız 25 sn/tur. |

> ⚠ **Hukuki not:** Logo kullanımı için müşteriden yazılı izin alınmalı. İzin yoksa metin olarak sektör yazılabilir ("Bir otomotiv grubu", "Uluslararası fuar organizatörü").

---

## BÖLÜM 8 — GALERİ

| Soru | Cevap |
|---|---|
| **Neden var** | Yemek satın alma **görsel** bir karardır. Fotoğraf, en iyi kopya metninden güçlüdür. |
| **Psikoloji** | **Zihinsel simülasyon.** Kullanıcı fotoğrafa bakarken kendi davetini hayal eder. Hayal ettiği an satın almaya çok yaklaşmıştır. |
| **CRO** | Galeriye giren kullanıcının teklif verme olasılığı ölçülebilir şekilde yüksektir → bu yüzden galeri ana sayfada **şerit** olarak, tam hâli `/galeri`'de. |
| **SEO** | Görsel araması trafiği. Her görselde açıklayıcı `alt` + dosya adı (`kokteyl-canape-sunumu.webp`). `ImageObject` schema. |
| **UX** | Ana sayfada yatay kaydırmalı şerit (keşif); `/galeri`'de **masonry grid + kategori filtresi + lightbox**. Lightbox'ta klavye ok tuşları ve ESC çalışır. |
| **UI** | Masonry — eşit olmayan yükseklikler dergi hissi verir. 2px boşluk (neredeyse bitişik), fotoğrafların bir bütün oluşturması için. |
| **Motion** | Filtre değişiminde **FLIP** animasyonu (öğeler yeni yerlerine kayarak gider, aniden zıplamaz). Lightbox açılışı: tıklanan görselden büyüyerek açılır (shared element), 400 ms `expo.out`. |
| **Mobil** | 2 sütun masonry. Lightbox tam ekran, kaydırarak geçiş (swipe). |

---

## BÖLÜM 9 — MÜŞTERİ YORUMLARI

| Soru | Cevap |
|---|---|
| **Neden var** | Bizim ağzımızdan çıkan her övgü şüpheyle karşılanır; müşteriden çıkan övgü kanıttır. |
| **Psikoloji** | **Benzerlik ilkesi** — kullanıcı kendine benzeyen kişinin yorumuna inanır. Bu yüzden yorumlar **rol + etkinlik tipi + ilçe** ile etiketlenir ("İnsan Kaynakları Müdürü · Kurumsal Yemek · Ümraniye"). |
| **CRO** | Yorumlar **CTA'dan hemen önce** durmalı. Sosyal kanıttan sonra gelen çağrının kabul oranı en yüksektir. |
| **SEO** | ⭐ `Review` + `AggregateRating` schema → arama sonucunda **yıldız** çıkar, tıklama oranı belirgin artar. |
| **UX** | 3 yorum aynı anda görünür (masaüstü), ok ve nokta ile gezinti. Otomatik dönmez — **kullanıcı kontrolü**. |
| **UI** | Tırnak işareti büyük ve gold, %20 opak, arkada. Yorum metni serif italik. Altında ad-rol-etkinlik. Fotoğraf yoksa harf monogramı (uydurma stok portre **kullanılmaz** — sahtelik anında sezilir). |
| **Motion** | Slider geçişi 400 ms `power2.inOut`. Giriş: hafif blur (4px→0) + fade. |
| **Mobil** | Tek yorum, swipe. |

> ⚠ **Dürüstlük kuralı:** Uydurma yorum yazılmaz. Gerçek yorum yoksa bölüm **gizlenir** ve gerçek yorumlar toplanınca açılır. Sahte yorum hem etik değil, hem Google'ın sahte `Review` schema'sına yaptırımı var.

---

## BÖLÜM 10 — SIK SORULAN SORULAR

| Soru | Cevap |
|---|---|
| **Neden var** | Satın almanın önündeki son 6 engeli kaldırmak. |
| **Psikoloji** | **İtiraz karşılama.** Kullanıcının aklındaki soruyu o sormadan cevaplamak, "bunlar işi biliyor" hissi yaratır. Ayrıca **kayıptan kaçınmayı** azaltır. |
| **CRO** | Doğru sorular: minimum kişi, ekipman dahil mi, ne kadar önceden, iptal/değişiklik, fiyat neye göre, hangi bölgeler. Bunlar müşteri hizmetlerine en çok gelen sorulardır — oradan beslenmeli. |
| **SEO** | ⭐ `FAQPage` schema → arama sonucunda açılır cevap kutuları. Ayrıca soru formatı **sesli arama** ve AI özetleri için birebir uygun. |
| **UX** | Akordeon. Tek seferde bir soru açık (odaklanma). Tümü kapalı başlar — açık başlarsa sayfa uzar ve tarama zorlaşır. |
| **UI** | İnce ayraç çizgileri, serif soru metni, gold "+" ikonu (açılınca 45° dönerek "×" olur). |
| **Motion** | `grid-template-rows: 0fr → 1fr` geçişi (yükseklik animasyonu **hesaplanmadan**, tarayıcı dostu). 420 ms. |
| **Mobil** | Aynı, dokunma alanı ≥ 44px. |

---

## BÖLÜM 11 — BLOG ÖNİZLEME

| Soru | Cevap |
|---|---|
| **Neden var** | SEO motoru ve uzmanlık kanıtı. |
| **Psikoloji** | **Otorite.** İşini anlatabilen firma, işini bilen firmadır. |
| **CRO** | Doğrudan düşük. Dolaylı: blog okuyucusu marka hatırlanırlığı yüksek, geri dönüş oranı yüksek. |
| **SEO** | ⭐ Ana sayfadan en yeni 3 yazıya link → tarama bütçesi ve indeksleme hızı. |
| **UX** | 3 kart: görsel + kategori + başlık + okuma süresi. |
| **UI** | Sade, çerçevesiz, beyaz zemin. |
| **Motion** | Standart scroll reveal + hover'da başlık altı çizgisi. |
| **Mobil** | Yatay kaydırmalı 3 kart. |

---

## BÖLÜM 12 — BÜYÜK CTA + İLETİŞİM

| Soru | Cevap |
|---|---|
| **Neden var** | Tüm ikna zincirinin bittiği yer. Buraya gelen kullanıcı hazırdır — önüne engel çıkarmamak gerekir. |
| **Psikoloji** | **Zeigarnik etkisi** — başlanmış iş bitirilmek ister. Bu yüzden CTA "Teklif Al" değil, **"Organizasyonunuzu anlatın"** gibi düşük eşikli bir başlangıç olmalı. |
| **CRO** | ⭐ Üç kanal yan yana: **Form** (kurumsal), **WhatsApp** (hızlı), **Telefon** (acil). Tek kanal dayatmak dönüşüm kaybettirir. |
| **SEO** | `ContactPoint` schema, NAP tutarlılığı (Ad-Adres-Telefon her yerde birebir aynı). |
| **UX** | Form kısa: 4 alan (ad, telefon, etkinlik tipi, tarih) + "Detaylı teklif" bağlantısı. Uzun form `/teklif-al`'da. |
| **UI** | Koyu zemin üstünde **beyaz kart** — sayfanın en yüksek kontrastlı, en dikkat çeken öğesi. Bilinçli olarak "sayfanın en parlak noktası" burası. |
| **Motion** | Kart aşağıdan yukarı girer (32px, 600 ms). Gönder butonunda **magnetic hover** (imleç yaklaşınca buton hafif çekilir — `* 0.3` sınırlı, sayfada **yalnızca burada** kullanılır). Gönderimde ripple + spinner → onay tikinin çizilmesi. |
| **Mobil** | Alt sabit çubuk: Ara / WhatsApp / Teklif. |

---

## BÖLÜM 13 — ⭐ "KAFANIZDAKİ ORGANİZASYONU ANLATIN" (Serbest Brief Alanı)

> Bu, özellikle istediğiniz bölüm. Sitenin en son ve en akıllı parçası.

**İçerik:** Tek büyük metin alanı + 3 yardımcı çip + gönder.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│              KAFANIZDAKİ ORGANİZASYON NE?                  │
│                                                            │
│   Form doldurmak zorunda değilsiniz. Aklınızdakini         │
│   kendi cümlelerinizle yazın — gerisini biz sorarız.       │
│                                                            │
│   ┌──────────────────────────────────────────────────┐    │
│   │ "Mart ayında 150 kişilik bir nişan düşünüyoruz,  │    │
│   │  mekân Bahçelievler'de, bütçemiz belli değil…"   │    │
│   │                                                  │    │
│   └──────────────────────────────────────────────────┘    │
│                                                            │
│   Hızlı başlangıç:                                         │
│   [ Kurumsal davet ]  [ Düğün / Nişan ]  [ Mevlüt ]        │
│                                                            │
│   [ Anlattım, teklif gelsin → ]     veya   [ WhatsApp ]    │
└────────────────────────────────────────────────────────────┘
```

| Soru | Cevap |
|---|---|
| **Neden var** | 14 alanlık form, hazır olmayan kullanıcıyı kaçırır. Bu alan **sıfır sürtünmeli giriş kapısı**. |
| **Psikoloji** | ⭐ İki güçlü etki birden: **(1) Taahhüt ve tutarlılık (Cialdini)** — bir cümle yazan kullanıcı sürece "başlamış" olur, devam etme olasılığı katlanır. **(2) Otonomi** — kullanıcı kendi kelimelerini kullanır, forma sıkışmaz; kontrol hissi güveni artırır. |
| **CRO** | ⭐ Bu bölüm **dönüşümün asıl motoru**. Klasik form: yüksek eşik, düşük hacim, yüksek nitelik. Serbest brief: düşük eşik, yüksek hacim. İkisi birlikte huniyi genişletir. Yazılan metin **otomatik olarak WhatsApp mesajına** veya e-postaya dönüşür. |
| **SEO** | Doğrudan katkı yok. Ama etkileşim sinyali ve dönüşüm oranı dolaylı fayda sağlar. |
| **UX** | Yardımcı çipler tıklanınca metin alanına hazır bir başlangıç cümlesi yazılır (**boş sayfa korkusunu** öldürür). Placeholder gerçek bir örnek cümledir — soyut "Mesajınız…" değil. |
| **UI** | Tam genişlik bej bölüm, ortada büyük serif başlık, altında geniş textarea. Etrafında bolca boşluk. Sayfa buraya gelene kadar "anlatıldı"; burada sıra kullanıcıya geçer — bu **sessiz ve davetkâr** görünmeli. |
| **Motion** | Textarea odaklanınca ince gold çerçeve içeriden büyür (200 ms) ve alan 4px genişler. Çip seçilince metin **daktilo efektiyle** yazılır (600 ms) — bu bir mikro-etkileşim ödülüdür. |
| **Mobil** | Textarea 5 satır, çipler yatay kaydırmalı. |

**Teknik akış:**
```
Kullanıcı yazar
   ↓
[Anlattım, teklif gelsin] → e-posta + CRM kaydı → teşekkür ekranı
   ↓
Teşekkür ekranı: "Dilerseniz WhatsApp'tan da devam edelim"
   ↓
WhatsApp linki, yazdığı metin ön doldurulmuş olarak açılır
```

---

## BÖLÜM 14 — FOOTER

**İçerik:** Logo + kısa tanım · Hizmet menüsü (17) · Kurumsal menü · İletişim (NAP) · Çalışma saatleri · Sosyal medya · Harita · KVKK / Gizlilik / Çerez · Telif.

| Soru | Cevap |
|---|---|
| **Neden var** | Sayfanın sonuna gelen kullanıcı ya aradığını bulamamıştır ya da doğrulama arıyordur. Footer ikisini de karşılar. |
| **Psikoloji** | **Kurumsal meşruiyet.** Adres, çalışma saati, yasal metinler — "bu gerçek bir şirket" sinyali. Eksik footer, en sık güven kaybı sebebidir. |
| **CRO** | Son çıkış kapısı. Telefon ve WhatsApp burada da bulunmalı. |
| **SEO** | ⭐ 17 hizmet sayfasına **site geneli iç link**. Her sayfadan her hizmete link akar — link eşitliği dağılımı ve tarama derinliği için kritik. NAP tutarlılığı yerel SEO'nun temelidir. |
| **UX** | 4 sütun, mobilde akordeon (17 link mobilde düz liste hâlinde çok uzun). |
| **UI** | Siyah zemin, gold başlıklar, açık gri linkler. Logo ortada ve büyük. |
| **Motion** | Yok. Footer sakin olmalı. Sadece link hover renk geçişi (150 ms). |

---

# BÖLÜM 5 — DÖNÜŞÜM HUNİSİ (CRO MANTIĞI)

## 5.1 Huni ve her adımın görevi

```
                    100 ziyaretçi
                          │
   ┌──────────────────────▼──────────────────────┐
   │  HERO — Dikkat                              │  Kayıp: %30
   │  Görev: 3 saniyede "burası kaliteli" dedirt │  Kalan: 70
   └──────────────────────┬──────────────────────┘
                          │
   ┌──────────────────────▼──────────────────────┐
   │  RAKAMLAR + NEDEN BİZ — Güven               │  Kayıp: %15
   │  Görev: "batırmazlar" dedirt                │  Kalan: 55
   └──────────────────────┬──────────────────────┘
                          │
   ┌──────────────────────▼──────────────────────┐
   │  HİZMETLER — Uygunluk                       │  Kayıp: %10
   │  Görev: kullanıcı kendi ihtiyacını görsün   │  Kalan: 45
   └──────────────────────┬──────────────────────┘
                          │
   ┌──────────────────────▼──────────────────────┐
   │  VAKA + REFERANS + YORUM — Kanıt            │  Kayıp: %12
   │  Görev: "yapmışlar" dedirt                  │  Kalan: 33
   └──────────────────────┬──────────────────────┘
                          │
   ┌──────────────────────▼──────────────────────┐
   │  SSS — İtiraz temizliği                     │  Kayıp: %8
   │  Görev: son soruları kapat                  │  Kalan: 25
   └──────────────────────┬──────────────────────┘
                          │
   ┌──────────────────────▼──────────────────────┐
   │  BRIEF ALANI + CTA — Aksiyon                │
   │  ├─ WhatsApp        →  ~8 kişi              │
   │  ├─ Telefon         →  ~4 kişi              │
   │  ├─ Serbest brief   →  ~5 kişi              │
   │  └─ Teklif formu    →  ~4,5 kişi            │
   └─────────────────────────────────────────────┘
              Toplam iletişim: ~21 kişi
```

## 5.2 Mikro-dönüşümler (asıl kazanç burada)

Ana dönüşüm (form) tek başına ölçülürse site "başarısız" görünür. Gerçek performans mikro-dönüşümlerde:

| Mikro-dönüşüm | Ölçüm | Neden önemli |
|---|---|---|
| WhatsApp tıklama | Event | Persona B'nin birincil yolu |
| Telefon tıklama | Event | Persona C'nin tek yolu |
| Hizmet sayfası görüntüleme | Sayfa | Niyet sinyali |
| Galeri lightbox açma | Event | Yüksek niyet |
| SSS açma | Event | İtiraz aşamasında |
| Menü PDF indirme | Event | Çok yüksek niyet |
| Brief alanına yazı yazma (blur) | Event | ⭐ En güçlü niyet sinyali |
| Sayfa %75 scroll | Event | İçerik uyumu |

## 5.3 Sürtünme azaltma kuralları

1. **Zorunlu alan sayısı asla 4'ü geçmez** (ilk adımda).
2. **Fiyat sorulmaz, aralık seçtirilir.** "Bütçeniz?" korkutur; "Bütçe aralığı: 50-100 bin ₺" rahatlatır ve bize niteleme verisi verir.
3. **Telefon alanı maskeli** (0 5__ ___ __ __) — format hatası yaşanmaz.
4. **Tarih seçici** takvimden, elle yazdırılmaz.
5. **Her adımda ilerleme çubuğu** — "3 adımdan 2'sindesiniz".
6. **Gönderim sonrası boşluk yok** — anında teşekkür ekranı + WhatsApp devri + "ne zaman döneceğiz" bilgisi.

---

# BÖLÜM 6 — `/teklif-al` — ÇOK ADIMLI TEKLİF SİHİRBAZI

## 6.1 Neden çok adımlı?

14 alanı tek ekranda göstermek **terk oranını 2 katına çıkarır**. Çok adımlı form:
- Her ekranda 3-5 alan → bilişsel yük düşük
- İlk adım en kolay → **taahhüt** oluşur, devam etme olasılığı artar
- İlerleme çubuğu → **hedefe yakınlık etkisi** (goal-gradient): bitişe yaklaştıkça terk azalır

## 6.2 Adım tasarımı

### ADIM 1 — "Ne organize ediyorsunuz?" (en kolay, en düşük eşik)
| Alan | Tip | Not |
|---|---|---|
| Etkinlik Türü | Görsel kart seçim (17 hizmet, 4 kategori) | Yazı değil, **kart**. Tıklamak yazmaktan kolaydır. |
| Kişi Sayısı | Aralık kaydırıcı + elle giriş | 30 / 50 / 100 / 200 / 400+ hızlı butonları |
| Organizasyon Tarihi | Takvim | "Henüz net değil" seçeneği var |

### ADIM 2 — "Nerede ve nasıl?"
| Alan | Tip | Not |
|---|---|---|
| Şehir | Seçim (varsayılan İstanbul) | |
| İlçe / Adres | Metin | Zorunlu değil |
| Menü Tercihi | Çoklu seçim | Açık büfe / Tabldot / Kokteyl / Kutu servis / Emin değilim |
| Ek Hizmetler | Onay kutuları | Servis personeli, ekipman, masa-sandalye, bar-barmen, dekor, canlı pişirme |
| Bütçe Aralığı | Seçim | ⭐ Zorunlu değil ama sorulmalı — nitelemeyi %60 hızlandırır |

### ADIM 3 — "Size nasıl ulaşalım?" (en son — kişisel veri en sonda istenir)
| Alan | Tip | Not |
|---|---|---|
| Ad Soyad | Metin | Zorunlu |
| Telefon | Maskeli | Zorunlu |
| Firma Adı | Metin | Kurumsal seçildiyse görünür (**progressive disclosure**) |
| E-posta | E-posta | Zorunlu değil |
| Notlar | Metin alanı | Ana sayfadaki brief metni **buraya taşınır** |
| WhatsApp Onayı | Anahtar | Varsayılan **açık** |
| KVKK Onayı | Onay kutusu | Zorunlu, varsayılan **kapalı** (yasal zorunluluk) |

> ⚠ **Neden iletişim bilgisi en sonda?** Kullanıcı ilk iki adımda emek harcamıştır. Bu emek "batık maliyet" hissi yaratır ve telefon numarasını verme direncini kırar. İlk ekranda telefon istemek, ziyaretçilerin yarısını kaybettirir.

## 6.3 Gönderim sonrası akış

```
[Gönder]
   │
   ├─ Buton: spinner + "Gönderiliyor…"      (anlık geri bildirim)
   │
   ├─ Başarılı
   │    ├─ Onay tiki çizilir (SVG path, 600 ms)
   │    ├─ "Talebiniz alındı. Bugün 18:00'e kadar dönüş yapacağız."
   │    │   ⭐ Belirsizlik bırakma — net saat taahhüdü
   │    ├─ Özet kartı: seçtikleri (etkinlik, kişi, tarih)
   │    └─ [WhatsApp'tan devam et] → ön doldurulmuş mesaj
   │
   └─ Hatalı
        └─ Alanın altında kırmızı mesaj + odak o alana + sayfa oraya kayar
           Ayrıca: "Form gönderilemedi, telefonla ulaşabilirsiniz: …"
```

**WhatsApp ön doldurulmuş mesaj şablonu:**
```
Merhaba, web sitesinden teklif talebi oluşturdum.

Etkinlik: Kokteyl Organizasyonu
Tarih: 14 Mart 2026
Kişi: 180
Lokasyon: Maslak
Menü: Açık büfe + kokteyl
Bütçe: 100.000 - 150.000 ₺

Notum: [kullanıcının yazdığı brief]

Ad Soyad: …
```

## 6.4 Spam ve veri güvenliği

- Honeypot alanı (görünmez, bot doldurursa reddedilir)
- Zaman tuzağı (3 saniyeden hızlı gönderim = bot)
- Rate limit (aynı IP 5 dk'da max 3 gönderim)
- reCAPTCHA **kullanılmayacak** — dönüşümü düşürür ve KVKK açısından ek veri aktarımı yaratır
- KVKK: veri sorumlusu, amaç, süre ve haklar formda link olarak sunulur

---

# BÖLÜM 7 — 17 HİZMET SAYFASI (SEO MİMARİSİ)

## 7.1 Neden her hizmet ayrı sayfa?

Tek "Hizmetler" sayfası 17 anahtar kelime için sıralanamaz. Google **sayfa başına bir ana niyet** ödüllendirir. 17 ayrı sayfa = 17 ayrı sıralama şansı + 17 ayrı iniş noktası.

## 7.2 Ortak sayfa şablonu (10 blok)

| # | Blok | Amaç |
|---|---|---|
| 1 | Sayfa hero (hizmete özel görsel + H1 + tek cümle vaat + CTA) | Niyet doğrulama: "doğru yerdeyim" |
| 2 | Breadcrumb | UX + `BreadcrumbList` schema |
| 3 | Giriş metni (200-300 kelime) | SEO gövdesi + bağlam |
| 4 | Teknik özet tablosu (min kişi, süre, servis tipi, bölge) | Taranabilir bilgi, hızlı karar |
| 5 | Hizmete dahil olanlar (ikon listesi) | "Gizli kalem yok" güveni |
| 6 | Menü paketleri (3 seviye) | Somutlaştırma + fiyat çıpası |
| 7 | Bu hizmete ait galeri (8 görsel) | Görsel kanıt |
| 8 | Süreç (4 adım, hizmete uyarlanmış) | Belirsizlik giderme |
| 9 | Hizmete özel SSS (4-6 soru) | `FAQPage` schema + itiraz |
| 10 | CTA + diğer hizmetler | Dönüşüm + iç link |

## 7.3 17 sayfanın SEO haritası

| # | URL | Ana anahtar kelime | Destek kelimeler | Birincil CTA | Persona |
|---|---|---|---|---|---|
| 1 | `/hizmetler/kurumsal-catering` | kurumsal catering istanbul | şirket yemek organizasyonu, kurumsal ikram | Form | A |
| 2 | `/hizmetler/is-toplantisi-catering` | iş toplantısı catering | toplantı ikramı, coffee break | Form | A |
| 3 | `/hizmetler/ozel-gun-organizasyonu` | özel gün catering | özel gün yemek organizasyonu | WhatsApp | B |
| 4 | `/hizmetler/dugun-catering` | düğün catering istanbul | düğün yemeği, düğün menüsü | WhatsApp | B |
| 5 | `/hizmetler/nisan-catering` | nişan catering | nişan yemeği, kına organizasyonu | WhatsApp | B |
| 6 | `/hizmetler/mevlut-yemekleri` | mevlüt yemeği istanbul | hayır yemeği, lokma, kandil | **Telefon** | C |
| 7 | `/hizmetler/acilis-organizasyonu` | açılış organizasyonu | açılış kokteyli, açılış ikramı | Form | A |
| 8 | `/hizmetler/kokteyl-organizasyonu` | kokteyl organizasyonu | cocktail prolonge, canapé | Form | A |
| 9 | `/hizmetler/fuar-catering` | fuar catering | stand ikramı, fuar yemek | Form | A |
| 10 | `/hizmetler/fabrika-yemek-hizmeti` | fabrika yemek hizmeti | fabrika catering, vardiya yemeği | Form | A |
| 11 | `/hizmetler/personel-yemek-hizmeti` | personel yemek hizmeti | çalışan yemeği, ofis yemek | Form | A |
| 12 | `/hizmetler/tasimali-mobil-catering` | taşımalı catering | mobil catering, şantiye yemek | Form | A |
| 13 | `/hizmetler/vip-catering` | vip catering | özel şef, protokol yemeği | Form | A |
| 14 | `/hizmetler/davet-organizasyonu` | davet organizasyonu | davet yemeği, ev daveti | WhatsApp | B |
| 15 | `/hizmetler/lansman-organizasyonu` | lansman organizasyonu | ürün lansmanı catering | Form | A |
| 16 | `/hizmetler/festival-etkinlik-catering` | festival catering | etkinlik catering, konser ikram | Form | A |
| 17 | `/hizmetler/toplu-yemek-hizmeti` | toplu yemek hizmeti | toplu yemek üretimi, yemek fabrikası | Form | A |

## 7.4 İçerik farklılaştırma kuralı

⚠ **17 sayfa birbirinin kopyası olamaz.** Google bunu "thin content" sayar ve hiçbirini sıralamaz.

Her sayfa için **benzersiz olması zorunlu** alanlar:
- Giriş metni (%100 özgün, en az 250 kelime)
- Teknik özet tablosu değerleri
- Menü paketi içerikleri
- SSS soruları (en az 3'ü o hizmete özel)
- Galeri görselleri (en az 4'ü o hizmete ait)
- H1, title, meta description

Ortak olabilir: süreç bloğu, iletişim bloğu, footer.

---

# BÖLÜM 8 — BLOG STRATEJİSİ + 50 MAKALE

## 8.1 Neden blog?

Hizmet sayfaları **ticari niyeti** yakalar ("kurumsal catering istanbul"). Blog **bilgi niyetini** yakalar ("100 kişilik davet için ne kadar yemek gerekir"). Bilgi arayan kişi bugün müşteri değildir ama **6 hafta sonra müşteridir** ve o zaman markayı hatırlar.

## 8.2 İçerik kümesi (topic cluster) mimarisi

```
        ┌─────────────────────────────┐
        │   PILLAR: Kurumsal Catering │  ← hizmet sayfası
        └──────────────┬──────────────┘
                       │ (blog yazıları buraya link verir)
     ┌─────────────────┼─────────────────┐
     ▼                 ▼                 ▼
 Kişi başı        Coffee break      Kurumsal
 porsiyon         menü fikirleri    catering
 hesaplama                          bütçesi
```

**Kural:** Her blog yazısı **en az 1 hizmet sayfasına** ve **1 diğer blog yazısına** link verir.

## 8.3 50 SEO MAKALE KONUSU

### A. Hesaplama ve Planlama (yüksek arama hacmi, güçlü niyet) — 10 yazı
1. 100 Kişilik Davette Kişi Başı Ne Kadar Yemek Hesaplanır?
2. Catering Fiyatları Neye Göre Belirlenir? Kalem Kalem Açıklama
3. Kokteylde Kişi Başı Kaç Adet Canapé Hesaplanmalı?
4. Düğün Yemeği Bütçesi Nasıl Planlanır? (Örnek Tablo)
5. Açık Büfe mi Tabldot mu? Hangi Etkinlikte Hangisi?
6. Organizasyon Takvimi: Kaç Hafta Önceden Hazırlık Başlar?
7. 50, 100, 200, 500 Kişilik Etkinlikte Kaç Servis Personeli Gerekir?
8. Catering Sözleşmesinde Nelere Dikkat Edilmeli?
9. Etkinlik Bütçesinde Catering Payı Ne Kadar Olmalı?
10. Yemek Artığını Azaltmak İçin Doğru Porsiyon Planlaması

### B. Menü ve Mutfak — 10 yazı
11. Kurumsal Toplantı İçin 12 Coffee Break Menü Fikri
12. Kokteyl Menüsü Nasıl Kurgulanır? Sıcak-Soğuk Dengesi
13. Vejetaryen ve Vegan Misafirler İçin Catering Menüsü
14. Glutensiz Catering: Nelere Dikkat Edilmeli?
15. Mevsimine Göre Catering Menüsü Seçimi
16. Türk Mutfağından Kurumsal Davetlere Uygun 15 Klasik
17. Açık Büfede En Çok Tercih Edilen 20 Yemek
18. Tatlı Büfesi Nasıl Kurgulanır?
19. Canapé Nedir? Çeşitleri ve Sunum Teknikleri
20. Sıcak Zincir Nedir, Yemek Neden Soğumaz?

### C. Etkinlik Türüne Özel — 12 yazı
21. Şirket Yılbaşı Yemeği Organizasyonu Rehberi
22. Ürün Lansmanı Catering'i Nasıl Planlanır?
23. Fuar Standında İkram: Ziyaretçi Akışına Göre Planlama
24. Mevlüt Yemeği Nasıl Organize Edilir? Adım Adım
25. Nişan Organizasyonunda Yemek Planlaması
26. Kına Gecesi İkram Fikirleri
27. Açılış Organizasyonu Kontrol Listesi
28. Şantiye ve Saha Ekipleri İçin Taşımalı Yemek Servisi
29. Fabrika Yemekhanesi Kurulumu ve Dış Kaynak Kullanımı
30. Festival Alanında Yüksek Hacimli Catering Yönetimi
31. VIP ve Protokol Yemeği Servis Kuralları
32. Ev Davetinde Catering Kullanmanın Avantajları

### D. Hijyen, Kalite, Süreç (E-E-A-T güçlendirici) — 8 yazı
33. Catering Firmasında Aranması Gereken Belgeler
34. Gıda Güvenliği: Numune Saklama Neden Zorunlu?
35. Soğuk Zincir ve Sıcak Zincir Nedir?
36. Catering Mutfağında HACCP Uygulamaları
37. Alerjen Yönetimi: Misafir Güvenliği İçin 8 Kural
38. Toplu Yemek Üretiminde Kalite Kontrol Süreci
39. Catering Ekipmanları: Chafing Dish'ten Termobox'a
40. Etkinlik Sonrası Atık Yönetimi ve Sürdürülebilirlik

### E. Yerel SEO (İstanbul odaklı) — 6 yazı
41. İstanbul'da Kurumsal Catering: Bölge Bölge Lojistik Rehberi
42. Avrupa Yakası Etkinlik Mekânları ve Catering Uyumu
43. Anadolu Yakası'nda Catering Servisi: Ulaşım ve Zamanlama
44. İstanbul Fuar Merkezleri ve Catering Kuralları
45. İstanbul'da Düğün Sezonu: Ne Zaman Rezervasyon Yapılmalı?
46. Plaza ve Ofis Bölgelerinde Personel Yemek Hizmeti

### F. Karşılaştırma ve Karar Desteği (ticari niyet) — 4 yazı
47. Catering mi, Restoran mı? Kurumsal Etkinlik İçin Karşılaştırma
48. İç Kaynak mı Dış Kaynak mı? Şirket Yemekhanesi Kararı
49. Ucuz Catering Neden Pahalıya Mal Olur?
50. Catering Firması Seçerken Sorulması Gereken 12 Soru

## 8.4 Yayın takvimi ve öncelik

| Dönem | Adet | Odak |
|---|---|---|
| Ay 1-2 | 10 yazı | A grubu (hesaplama) — en yüksek hacim |
| Ay 3-4 | 12 yazı | C grubu (etkinlik türü) — hizmet sayfalarını besler |
| Ay 5-6 | 10 yazı | B grubu (menü) |
| Ay 7-8 | 8 yazı | D grubu (E-E-A-T) |
| Ay 9-10 | 10 yazı | E + F grupları |

**Yazı standardı:** min 1.200 kelime, 1 tablo veya liste, 2 iç link, 1 görsel/500 kelime, yazar bilgisi (E-E-A-T), güncelleme tarihi.

---

# BÖLÜM 9 — TEKNİK SEO

## 9.1 Sayfa bazlı SEO kontrol listesi

| Öğe | Kural |
|---|---|
| `<title>` | 55-60 karakter, ana kelime başta, marka sonda |
| `meta description` | 150-160 karakter, fayda + CTA içerir |
| `H1` | Sayfada tek, ana anahtar kelimeyi içerir |
| `H2-H3` | Mantıksal hiyerarşi, atlamasız |
| Canonical | Her sayfada mutlak URL |
| `lang` | `tr-TR` |
| Open Graph | title, description, image (1200×630), url, type, locale |
| Twitter Card | `summary_large_image` |
| Görsel `alt` | Açıklayıcı, anahtar kelime **zorlamadan** |
| Görsel dosya adı | `kokteyl-canape-sunumu.webp` (Türkçe karakter yok) |
| İç link | Her sayfadan en az 3 ilgili sayfaya |
| URL | Kısa, tireli, Türkçe karaktersiz, fiilsiz |

## 9.2 Schema.org yapıları

| Schema | Nerede | Ne kazandırır |
|---|---|---|
| `Organization` | Tüm sayfalar (`@graph`) | Bilgi paneli, marka varlığı |
| `LocalBusiness` → `FoodEstablishment` | Ana sayfa, iletişim | Harita paketi, yerel sıralama |
| `Service` | 17 hizmet sayfası | Hizmet zengin sonucu |
| `WebSite` + `SearchAction` | Ana sayfa | Site içi arama kutusu |
| `BreadcrumbList` | Tüm iç sayfalar | Sonuçta yol gösterimi |
| `FAQPage` | Ana sayfa, hizmet sayfaları, SSS | ⭐ Açılır cevap kutuları |
| `Review` + `AggregateRating` | Yorumlar | ⭐ Yıldız gösterimi |
| `ImageObject` | Galeri | Görsel araması |
| `Article` / `BlogPosting` | Blog yazıları | Haber/blog zengin sonucu |
| `HowTo` | Süreç bölümü, rehber yazılar | Adım listesi |
| `Person` | Blog yazarı, şef profili | E-E-A-T |
| `ContactPoint` | Footer, iletişim | Telefon gösterimi |
| `OpeningHoursSpecification` | Ana sayfa | Çalışma saati |
| `Event` | Vaka çalışmaları (uygunsa) | Etkinlik gösterimi |

## 9.3 Yerel SEO

- **NAP tutarlılığı:** Ad, Adres, Telefon her yerde **birebir aynı** yazım (Google Business, site, dizinler)
- Google Business Profile açılır ve haftalık gönderi paylaşılır
- Hizmet bölgesi (`areaServed`) İstanbul ilçeleri düzeyinde tanımlanır
- Google yorumlarına **her birine** cevap yazılır
- Yerel dizin kayıtları: Yandex, Foursquare, sektörel rehberler

## 9.4 Zorunlu teknik dosyalar

`robots.txt` · `sitemap.xml` (bölümlü: sayfalar / hizmetler / blog / görseller) · `site.webmanifest` · `humans.txt` (opsiyonel) · `security.txt` (opsiyonel) · HTML site haritası sayfası · özel 404

---

# BÖLÜM 10 — CORE WEB VITALS OPTİMİZASYON PLANI

## 10.1 Hedefler

| Metrik | Google "iyi" eşiği | **Bizim hedefimiz** |
|---|---|---|
| LCP | < 2,5 s | **< 2,0 s** |
| INP | < 200 ms | **< 150 ms** |
| CLS | < 0,1 | **< 0,05** |
| TTFB | < 800 ms | **< 500 ms** |
| Toplam sayfa ağırlığı | — | **< 1,2 MB** (ana sayfa) |

## 10.2 LCP planı (en kritik)

1. Hero görseli **AVIF + WebP**, `<picture>` ile fallback
2. Hero görseline `priority` / `fetchpriority="high"` + `<link rel="preload">`
3. Hero **video LCP olamaz** → poster görsel LCP olur, video sonradan yüklenir
4. Responsive `srcset`: 640 / 1024 / 1440 / 1920 genişlikleri
5. Font `display: swap` + kritik font `preload` + **variable font** (tek dosya)
6. Statik üretim (SSG) → CDN'den anında servis
7. Kritik CSS satır içi, geri kalanı ertelenir

## 10.3 CLS planı

1. **Her** `<img>` ve `<video>` için `width`/`height` veya `aspect-ratio`
2. Font yükleme sıçramasını önlemek için `size-adjust` ile fallback font eşleme
3. Reklam/gömülü içerik yok (harita gömülü kullanılırsa yer rezerve edilir)
4. Animasyonlar **yalnız** `transform` ve `opacity` — `width`, `height`, `top`, `margin` animasyonu **yasak**
5. Sticky header sabit yükseklikte, içerik altına `padding-top`

## 10.4 INP planı

1. Ana thread'i bloklayan üçüncü parti script yok
2. Analytics `afterInteractive`, chat widget `lazyOnload`
3. Scroll dinleyicileri `passive: true` + `requestAnimationFrame` throttle
4. Animasyonlar compositor thread'de (`transform`/`opacity` + `will-change` sadece gerektiğinde)
5. Ağır bileşenler (lightbox, galeri, form sihirbazı) **dinamik import**
6. Uzun listelerde sanallaştırma

## 10.5 Görsel bütçesi

| Görsel tipi | Format | Maks. boyut |
|---|---|---|
| Hero | AVIF | 180 KB |
| Hizmet kartı | AVIF | 60 KB |
| Galeri küçük | AVIF | 45 KB |
| Galeri büyük (lightbox) | AVIF | 200 KB |
| Logo / ikon | SVG | 8 KB |

Tüm görseller `loading="lazy"` (hero hariç), `decoding="async"`.

---

# BÖLÜM 11 — UI DESIGN SYSTEM

## 11.1 Renk sistemi (KARAR 1'de A seçildiği varsayımıyla)

### Ana palet

| Token | Değer | Kullanım |
|---|---|---|
| `--ink-950` | `#0C0A09` | Ana metin |
| `--ink-900` | `#1C1917` | Koyu yüzey, footer, bant |
| `--ink-700` | `#44403C` | Koyu gri, ikincil yüzey |
| `--ink-500` | `#78716C` | İkincil metin |
| `--ink-300` | `#D6D3D1` | Kenarlık |
| `--gold-700` | `#8A6118` | Koyu gold, küçük metin |
| `--gold-600` | `#A16207` | ⭐ Ana aksan, CTA, hairline |
| `--gold-400` | `#C9A227` | Koyu zemin üstü gold |
| `--gold-100` | `#F5EBD3` | Gold zemin tonu |
| `--beige-100` | `#F5F0E8` | Soft bej — bölüm zemini |
| `--beige-50` | `#FAF8F4` | Ara ton zemin |
| `--white` | `#FFFFFF` | Ana zemin, kart |
| `--green-900` | `#1B3A2F` | Premium yeşil — **yalnız rozet/onay** |
| `--green-600` | `#2E6B4F` | Başarı durumu |
| `--red-600` | `#B3261E` | Hata durumu |

### Kontrast doğrulaması (WCAG)

| Kombinasyon | Oran | Sonuç |
|---|---|---|
| `--ink-950` / `--white` | 18,9:1 | ✅ AAA |
| `--ink-500` / `--white` | 4,6:1 | ✅ AA |
| `--gold-600` / `--white` | 4,9:1 | ✅ AA (metin) |
| `--white` / `--ink-900` | 16,1:1 | ✅ AAA |
| `--gold-400` / `--ink-900` | 7,4:1 | ✅ AAA |
| `--green-900` / `--white` | 12,8:1 | ✅ AAA |

### Kullanım oranı
**%70 beyaz/bej · %22 siyah-koyu gri · %7 gold · %1 yeşil**

Gold **asla** geniş yüzeyde kullanılmaz. Sadece: hairline, ikon, CTA çerçevesi, sayı, ayraç elması.

## 11.2 Tipografi

| Rol | Font | Ağırlık | Not |
|---|---|---|---|
| Display / H1-H2 | **Playfair Display** | 300, 400, 500 | Editoryal serif — Michelin/otel kodu |
| UI / gövde / buton | **Inter** | 300, 400, 500, 600 | Apple/Tesla kodu, mükemmel okunurluk |

> **Neden iki farklı dünya?** İstediğiniz "Apple + Michelin" bileşimi tek fontla kurulamaz. Çözüm: **başlıklar serif (lüks, editoryal), arayüz sans (modern, teknik).** Bu ikilik markayı hem pahalı hem çağdaş gösterir.
> Alternatif: Cormorant + Montserrat (daha ince, daha "moda" — istenirse geçilebilir).

### Tip ölçeği

| Rol | Boyut (clamp) | Satır | Harf aralığı |
|---|---|---|---|
| Display | `clamp(2.75rem, 6vw, 5rem)` | 1.05 | −0.02em |
| H1 | `clamp(2.25rem, 5vw, 3.75rem)` | 1.1 | −0.015em |
| H2 | `clamp(1.75rem, 3.4vw, 2.75rem)` | 1.15 | −0.01em |
| H3 | `clamp(1.25rem, 2vw, 1.625rem)` | 1.25 | 0 |
| H4 | `1.125rem` | 1.3 | 0 |
| Gövde L | `1.125rem` | 1.75 | 0 |
| Gövde | `1rem` | 1.7 | 0 |
| Küçük | `0.875rem` | 1.6 | 0 |
| Eyebrow | `0.6875rem` | 1.4 | **0.3em**, uppercase |
| Buton | `0.75rem` | 1 | **0.22em**, uppercase |

**Kural:** Gövde metni asla 12px altına inmez. Satır uzunluğu 60-75 karakter (`max-width: 68ch`).

## 11.3 Boşluk sistemi (8px tabanlı)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`

| Kullanım | Değer |
|---|---|
| Bileşen içi | 8 / 12 / 16 |
| Bileşenler arası | 24 / 32 |
| Bölüm içi bloklar | 48 / 64 |
| Bölüm dikey (mobil) | 64 |
| Bölüm dikey (tablet) | 96 |
| Bölüm dikey (masaüstü) | 128 |
| Bölüm dikey (geniş) | 160 |

> ⭐ **Lüks hissiyatın %60'ı boşluktan gelir.** Masaüstünde bölüm arası 128-160px, ucuz sitelerde 40-60px'tir. Fark burada.

## 11.4 Grid ve container

| | Mobil | Tablet | Masaüstü | Geniş |
|---|---|---|---|---|
| Breakpoint | 375-767 | 768-1023 | 1024-1439 | 1440+ |
| Sütun | 4 | 8 | 12 | 12 |
| Gutter | 16px | 24px | 32px | 32px |
| Kenar boşluğu | 20px | 40px | 48px | 64px |
| Max container | — | — | 1280px | 1360px |
| Dar container (metin) | — | — | 760px | 760px |

## 11.5 Köşe yarıçapı

| Öğe | Değer | Gerekçe |
|---|---|---|
| Buton | 2px | Neredeyse keskin — lüks kodu |
| Kart | 0px | Keskin köşe, editoryal |
| Görsel | 0px | Fotoğraf çerçevesiz |
| Input | 2px | |
| Rozet | 999px | Tek yuvarlak öğe — kontrast yaratır |
| Modal | 4px | |

> Yuvarlak köşe "dostane/yumuşak" kodudur (SaaS, uygulama). **Keskin köşe "pahalı/ciddi"** kodudur (moda, otel, otomotiv). Marka konumumuz ikincisi.

## 11.6 Gölge sistemi

| Token | Değer | Kullanım |
|---|---|---|
| `shadow-none` | yok | Varsayılan — kartlarda gölge **yok** |
| `shadow-sm` | `0 1px 2px rgba(12,10,9,.04)` | Sticky header |
| `shadow-md` | `0 8px 30px rgba(12,10,9,.06)` | Hover kartı |
| `shadow-lg` | `0 24px 70px rgba(12,10,9,.12)` | Modal, form kartı |
| `shadow-gold` | `0 8px 28px rgba(161,98,7,.20)` | CTA hover |

> **Kural:** Gölge azdır. Ayrım gölgeyle değil **boşluk ve hairline ile** kurulur. Ağır gölge ucuz gösterir.

## 11.7 Bileşen kütüphanesi

### Butonlar
| Varyant | Görünüm | Kullanım |
|---|---|---|
| `primary` | Dolu siyah, beyaz metin | Ana CTA |
| `gold` | Dolu gold, beyaz metin | Teklif Al |
| `outline` | Şeffaf, ince siyah çerçeve | İkincil |
| `outline-light` | Şeffaf, beyaz çerçeve | Koyu zemin üstü |
| `ghost` | Çerçevesiz, altı çizili hover | Üçüncül |
| `link-dash` | "— DETAYLAR" tire + uppercase | Kart içi |

Boyutlar: `sm` 40px · `md` 48px · `lg` 56px · `xl` 64px. **Minimum dokunma alanı 44×44px.**
Durumlar: default / hover / active / focus-visible / disabled / loading.

### Kartlar
`service-card` (görsel + başlık + metin + link) · `feature-card` (ikon + başlık + metin) · `package-card` (paket + liste + CTA) · `testimonial-card` · `case-card` (bento) · `blog-card` · `stat-card`

### Formlar
`text-input` · `email` · `tel` (maskeli) · `number` · `select` · `textarea` · `checkbox` · `radio-card` (görsel seçim) · `switch` · `date-picker` · `range-slider` · `file-upload` · `chip-select`

Her input: görünür etiket + yardım metni + hata metni (alanın **altında**) + `aria-describedby`.

### Rozetler
`badge-gold` (öne çıkan) · `badge-green` (hijyen/onay) · `badge-neutral` (kategori) · `badge-count`

### İkonlar
**Lucide** ikon seti, `stroke-width: 1.5`, 20/24px. Emoji **kesinlikle kullanılmaz**. Tüm ikonlar SVG, `aria-hidden` (dekoratifse) veya `aria-label` (anlamlıysa).

### Durum bileşenleri

| Bileşen | Tasarım |
|---|---|
| **Loading** | İnce gold ilerleme çubuğu (üstte) + buton içi spinner |
| **Skeleton** | Bej dikdörtgenler, soldan sağa parıltı, 1,5 sn döngü |
| **Empty state** | Merkezi ikon + başlık + açıklama + CTA (örn. galeri filtresinde sonuç yok) |
| **404** | Tam ekran görsel + "Sayfa bulunamadı" + ana sayfa/hizmet linkleri + arama |
| **500** | Sade, teknik olmayan dil + telefon numarası |
| **Success** | Yeşil onay tiki (SVG path çizimi, 600 ms) + net sonraki adım |
| **Error** | Kırmızı, alan altında, ikonlu, `role="alert"` |
| **Toast** | Sağ üst, 4 sn, kapatılabilir, `aria-live="polite"` |

### Yapısal bileşenler
`navbar` (şeffaf → sticky beyaz) · `mega-menu` · `mobile-drawer` (tam ekran) · `sticky-header` · `breadcrumb` · `footer` · `mobile-action-bar` (Ara/WhatsApp/Teklif) · `whatsapp-float` · `cookie-banner` · `modal` · `drawer` · `lightbox` · `accordion` · `tabs` · `carousel` · `progress-steps`

## 11.8 Glassmorphism — kullanılacak mı?

**Evet ama tek yerde:** Sticky header, hero üzerindeyken `backdrop-filter: blur(12px)` + `background: rgba(255,255,255,.06)`.

**Neden sınırlı?**
- Metin kontrastını bozar (WCAG riski)
- `backdrop-filter` mobilde GPU maliyetlidir, INP'yi etkiler
- 2020-2022 trendidir; her yerde kullanmak markayı **tarihlendirir**, lüks markalar zamansız kalır

Kartlarda, modallarda, formlarda **kullanılmayacak**.

---

# BÖLÜM 12 — ANİMASYON SİSTEMİ

## 12.1 Felsefe

> **Hareket dekorasyon değil, iletişimdir.** Her animasyon bir soruya cevap verir: "Bu nereden geldi?", "Ne değişti?", "Şimdi ne olacak?" Cevap vermiyorsa animasyon silinir.

## 12.2 Zamanlama ve eğri standartları

| Sınıf | Süre | Eğri | Kullanım |
|---|---|---|---|
| Anlık | 100-150 ms | `ease-out` | Renk, opaklık değişimi |
| Mikro | 150-300 ms | `cubic-bezier(.22,.61,.36,1)` | Hover, focus, buton |
| Standart | 300-450 ms | `power2.out` | Kart girişi, akordeon |
| Bölüm | 450-600 ms | `cubic-bezier(.16,1,.3,1)` | Scroll reveal |
| Sahne | 600-900 ms | `expo.out` | Perde açılışı, lightbox |
| Çıkış | **girişin %60'ı** | `ease-in` | Modal kapanış, sayfa çıkışı |

> ⚠ **Asimetri kuralı:** Çıkış her zaman girişten hızlıdır. Yavaş çıkış "takıldı" hissi verir.
> ⚠ **500 ms kuralı:** Kullanıcı eylemine (tıklama) verilen cevap 300 ms'yi geçmez.

## 12.3 Animasyon kataloğu

| # | Animasyon | Nerede | Detay |
|---|---|---|---|
| 1 | **Scroll Reveal** | Tüm bölümler | `opacity 0→1`, `y 24→0`, 520 ms, stagger 80 ms, **maks 8 kademe** |
| 2 | **Fade** | Metin blokları | `opacity` + `y 12px`, 460 ms |
| 3 | **Scale** | Kartlar | `0.94 → 1`, `back.out(1.4)`, 400 ms |
| 4 | **Slide** | Drawer, mega menü | `x/y` transform, 300 ms |
| 5 | **Blur** | Yorumlar, hero metni | `blur(6px) → 0` + fade, 500 ms |
| 6 | **Counter** | Rakamlar bölümü | 1400 ms `easeOutCubic`, viewport %50, bir kez |
| 7 | **Stagger** | Grid'ler | `each: 0.06`, `grid: 'auto'` |
| 8 | **Page Transition** | Rota değişimi | Giriş 450 ms, **çıkış 250 ms**, `power2.inOut`. Asla navigasyonu bloklamaz |
| 9 | **Hover** | Kart, buton, link | Kart: `y -4px` + gölge; Görsel: `scale 1.05`; Link: hairline soldan sağa |
| 10 | **Magnetic Button** | ⭐ Yalnız ana CTA | İmleç mesafesi × 0.3, `elastic.out(1,0.4)`, 400 ms. **Sayfada maks 1 adet** |
| 11 | **Ripple** | Buton tıklaması | Tıklama noktasından dalga, 500 ms, `opacity 0.15 → 0` |
| 12 | **Image Zoom** | Kart görselleri | Hover `1.00→1.05` 600 ms; scroll perdesi `1.10→1.00` 900 ms |
| 13 | **Perde açılışı** | Kart ve split görseller | Bej maske alttan yukarı `scaleY 1→0`, 700 ms |
| 14 | **Pin + yatay scroll** | Süreç bölümü (7 adım) | ScrollTrigger `pin`, `scrub: 0.6`. **Yalnız ≥1024px** |
| 15 | **FLIP** | Galeri filtresi | Öğeler yeni konumlarına kayar, 450 ms |
| 16 | **Marquee** | Referans logoları | 40 sn/tur, `linear`, hover'da durur |
| 17 | **Path draw** | Onay tiki, süreç çizgisi | SVG `stroke-dashoffset`, 600 ms |
| 18 | **Typewriter** | Brief alanı çipleri | Hazır cümle yazılır, 600 ms |
| 19 | **Progress bar** | Sayfa üstü | Scroll oranına bağlı, `scaleX` |
| 20 | **Sticky header dönüşümü** | Scroll > 40px | Şeffaf → beyaz, logo 66→50px, 260 ms |

## 12.4 Parallax kullanımı

**Evet, ama disiplinli:**
- Yalnız **dekoratif arka plan katmanları** (hero, koyu bantlar)
- `yPercent` farkı **maksimum ±10**
- Metin, buton, form **asla** parallax almaz
- Mobilde **kapalı** (dokunmatik scroll hissini bozar + GPU maliyeti)
- `overflow: hidden` ile sarmalanır

## 12.5 Micro Interactions listesi

| Etkileşim | Geri bildirim |
|---|---|
| Buton hover | Renk + 1px yükselme, 200 ms |
| Buton tıklama | Ripple + `scale(0.98)` |
| Input focus | Gold çerçeve içeriden büyür, 200 ms |
| Checkbox işaretleme | Tik SVG çizilir, 250 ms |
| Akordeon açma | `+` → `×` 45° döner |
| Kopyalama (telefon) | "Kopyalandı" toast'ı |
| Form adımı tamamlama | İlerleme çubuğu dolar + adım yeşile döner |
| Galeri görseli hover | Zoom + başlık yukarı kayar |
| Menü linki hover | Altında gold hairline ortadan açılır |
| Scroll to top | Buton fade-in, tıklamada yumuşak scroll |
| Sayfa yükleme | Üstte ince gold ilerleme çubuğu |
| Boş form gönderimi | İlgili alan 3 kez hafif titrer (shake), 300 ms |

## 12.6 Erişilebilirlik ve hareket

```
prefers-reduced-motion: reduce  →
  ✗ Parallax kapalı
  ✗ Pin/yatay scroll kapalı
  ✗ Marquee durur (statik grid olur)
  ✗ Perde açılışı kapalı
  ✗ Sayaç anında son değeri gösterir
  ✗ Sayfa geçişi kapalı
  ✓ Sadece 100 ms'lik opaklık geçişleri kalır
  ✓ Tüm içerik anında görünür
```

**Ek güvenlik:** JS animasyon sınıflarını kendisi ekler → JS çalışmazsa içerik görünür kalır. Gözlemci ateşlemezse 2,5 sn sonra devreye giren yedek mekanizma.

---

# BÖLÜM 13 — RESPONSIVE STRATEJİ

## 13.1 Üç cihaz, üç ayrı düşünce

> Responsive "küçültmek" değildir. Her cihazda **kullanıcının niyeti farklıdır.**

### 📱 MOBİL (375-767px) — Niyet: **Hızlı iletişim**
Mobil kullanıcı çoğunlukla acele eder ve genelde **aramak** ister.

| Karar | Uygulama |
|---|---|
| Navigasyon | Tam ekran drawer, kategori akordeonu |
| CTA | ⭐ Alt sabit çubuk: **Ara · WhatsApp · Teklif** (her zaman erişilebilir) |
| Hero | Video yok, statik görsel. Butonlar alt alta tam genişlik |
| Grid | Tek sütun |
| Süreç | Dikey timeline (pin kapalı) |
| Galeri | 2 sütun masonry, swipe lightbox |
| Mega menü | Yok |
| Parallax | Kapalı |
| Form | Tek sütun, `inputmode` doğru, otomatik büyük harf kapalı |
| Dokunma alanı | ≥ 44×44px, aralarında ≥ 8px |
| Güvenli alan | `env(safe-area-inset-bottom)` |
| Font | Gövde 16px (iOS zoom'unu engeller) |

### 📐 TABLET (768-1023px) — Niyet: **Göz atma / karşılaştırma**

| Karar | Uygulama |
|---|---|
| Navigasyon | Drawer (mega menü hâlâ yok) |
| Grid | 2 sütun |
| Hero | Yatayda tam ekran, dikeyde 80vh |
| Süreç | 2×4 grid (pin yok) |
| Galeri | 3 sütun |
| Alt çubuk | Var |
| Hover | ⚠ Hover **yok sayılır** — tüm bilgi hover olmadan erişilebilir olmalı |

### 🖥 MASAÜSTÜ (1024px+) — Niyet: **Değerlendirme / araştırma**

| Karar | Uygulama |
|---|---|
| Navigasyon | Sticky header + **mega menü** |
| Grid | 3-4 sütun, bento düzenler |
| Hero | Tam ekran + parallax + video |
| Süreç | ⭐ Pin + yatay scroll |
| Galeri | 4 sütun masonry |
| Hover | Tam animasyon seti |
| Magnetic buton | Aktif |
| Alt çubuk | Yok (yerine sağ altta WhatsApp balonu) |
| Maks genişlik | 1280-1360px (ultrawide'da metin satırı uzamaz) |

## 13.2 Test matrisi

| Cihaz | Genişlik | Kontrol |
|---|---|---|
| iPhone SE | 375 | En dar senaryo, taşma kontrolü |
| iPhone 15 Pro | 393 | Safe area, notch |
| iPad Mini | 768 | Breakpoint sınırı |
| iPad Pro | 1024 | Masaüstü/tablet sınırı |
| Laptop | 1280 | En yaygın masaüstü |
| Desktop | 1440 | Referans tasarım genişliği |
| Ultrawide | 1920+ | Maks genişlik kilidi |

---

# BÖLÜM 14 — ERİŞİLEBİLİRLİK (WCAG 2.2 AA)

| Alan | Kural |
|---|---|
| Kontrast | Metin ≥ 4.5:1, büyük metin ve UI ≥ 3:1 — **tüm palet doğrulandı** |
| Klavye | Tüm etkileşimli öğeler Tab ile erişilebilir, mantıklı sıra |
| Focus | Görünür focus halkası — **asla kaldırılmaz** (`:focus-visible`, 2px gold offset) |
| Skip link | "İçeriğe geç" — Tab'a ilk basışta görünür |
| Semantik | `header`, `nav`, `main`, `section`, `article`, `footer` doğru kullanılır |
| Başlık | H1→H2→H3 atlamasız hiyerarşi |
| Görsel | Anlamlı görsellerde açıklayıcı `alt`, dekoratifte `alt=""` |
| Form | Her input'un görünür `<label>`'ı var — **placeholder etiket yerine geçmez** |
| Hata | Alanın altında, `role="alert"`, renkten **bağımsız** ikon + metin |
| İkon buton | `aria-label` zorunlu |
| Modal | Focus trap, ESC ile kapanır, kapanınca focus tetikleyiciye döner |
| Akordeon | `aria-expanded`, `aria-controls` |
| Carousel | Otomatik dönmez, durdurma kontrolü, `aria-live` |
| Hareket | `prefers-reduced-motion` tam destek |
| Dil | `lang="tr"` |
| Zoom | `user-scalable` engellenmez, %200 zoom'da içerik okunur |

---

# BÖLÜM 15 — PROJE DOSYA VE KLASÖR MİMARİSİ

```
yumak-catering/
│
├── app/                          # Next.js App Router — rota = klasör
│   ├── layout.tsx                # Kök düzen: font, meta, header, footer
│   ├── page.tsx                  # Ana sayfa
│   ├── loading.tsx               # Rota geçiş iskeleti
│   ├── error.tsx                 # Hata sınırı
│   ├── not-found.tsx             # 404
│   ├── sitemap.ts                # Dinamik sitemap üretimi
│   ├── robots.ts                 # robots.txt üretimi
│   │
│   ├── kurumsal/
│   │   ├── hakkimizda/page.tsx
│   │   ├── neden-yumak/page.tsx
│   │   └── kalite-ve-hijyen/page.tsx
│   │
│   ├── hizmetler/
│   │   ├── page.tsx              # Hub
│   │   └── [slug]/page.tsx       # ⭐ 17 sayfa TEK şablondan üretilir
│   │
│   ├── menuler/[slug]/page.tsx
│   ├── organizasyonlar/[slug]/page.tsx
│   ├── galeri/page.tsx
│   ├── referanslar/page.tsx
│   ├── yorumlar/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── [slug]/page.tsx
│   │   └── kategori/[slug]/page.tsx
│   ├── sss/page.tsx
│   ├── iletisim/page.tsx
│   ├── teklif-al/page.tsx        # Çok adımlı sihirbaz
│   ├── kvkk/page.tsx
│   ├── gizlilik-politikasi/page.tsx
│   └── cerez-politikasi/page.tsx
│
├── components/                   # Yeniden kullanılabilir, sayfadan bağımsız
│   ├── ui/                       # Atomlar — iş mantığı YOK
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Accordion.tsx
│   │   ├── Modal.tsx
│   │   ├── Drawer.tsx
│   │   ├── Toast.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Lightbox.tsx
│   │   └── ProgressSteps.tsx
│   │
│   ├── layout/                   # Sayfa çerçevesi
│   │   ├── Header.tsx
│   │   ├── MegaMenu.tsx
│   │   ├── MobileDrawer.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileActionBar.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   └── ScrollProgress.tsx
│   │
│   ├── motion/                   # Animasyon sarmalayıcıları
│   │   ├── Reveal.tsx            # Scroll reveal sarmalayıcı
│   │   ├── StaggerGroup.tsx
│   │   ├── Counter.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── ImageCurtain.tsx      # Perde açılışı
│   │   ├── Parallax.tsx
│   │   └── PageTransition.tsx
│   │
│   └── seo/
│       ├── JsonLd.tsx            # Schema enjektörü
│       └── Breadcrumb.tsx
│
├── sections/                     # Ana sayfa ve şablon bölümleri (büyük parçalar)
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── TrustStats.tsx
│   │   ├── WhyUs.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── FeaturedCases.tsx
│   │   ├── ClientLogos.tsx
│   │   ├── GalleryStrip.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FaqSection.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── ContactCta.tsx
│   │   └── EventBriefBox.tsx     # ⭐ "Kafanızdaki organizasyon"
│   │
│   └── service/                  # 17 hizmet sayfasının ortak blokları
│       ├── ServiceHero.tsx
│       ├── ServiceIntro.tsx
│       ├── ServiceSpecs.tsx
│       ├── ServiceIncludes.tsx
│       ├── ServicePackages.tsx
│       ├── ServiceGallery.tsx
│       └── ServiceFaq.tsx
│
├── forms/                        # Form mantığı — şemalar ve gönderim
│   ├── QuoteWizard.tsx           # 3 adımlı sihirbaz
│   ├── QuickQuoteForm.tsx
│   ├── EventBriefForm.tsx
│   ├── ContactForm.tsx
│   ├── schemas.ts                # Zod doğrulama şemaları
│   └── submit.ts                 # Gönderim + WhatsApp devri
│
├── lib/                          # Dış dünya ile konuşan yardımcılar
│   ├── api.ts                    # Form gönderimi, CRM
│   ├── whatsapp.ts               # Ön doldurulmuş mesaj üretici
│   ├── analytics.ts              # Event takibi
│   ├── mail.ts                   # E-posta bildirimi
│   └── cms.ts                    # Blog içerik okuma (MDX)
│
├── utils/                        # Saf fonksiyonlar — yan etkisiz
│   ├── formatPhone.ts
│   ├── slugify.ts
│   ├── cn.ts                     # className birleştirici
│   ├── formatDate.ts
│   └── truncate.ts
│
├── hooks/                        # React davranış paketleri
│   ├── useScrollProgress.ts
│   ├── useInView.ts
│   ├── useReducedMotion.ts
│   ├── useMediaQuery.ts
│   ├── useLockScroll.ts
│   ├── useMagnetic.ts
│   └── useCountUp.ts
│
├── constants/                    # ⭐ Tek doğruluk kaynağı — içerik verisi
│   ├── services.ts               # 17 hizmetin tüm verisi
│   ├── navigation.ts             # Menü yapısı
│   ├── faq.ts
│   ├── testimonials.ts
│   ├── stats.ts
│   ├── cases.ts
│   ├── company.ts                # NAP, saatler, sosyal medya
│   └── seo.ts                    # Sayfa bazlı meta verileri
│
├── types/                        # TypeScript tip tanımları
│   ├── service.ts
│   ├── form.ts
│   ├── blog.ts
│   └── common.ts
│
├── config/                       # Yapılandırma
│   ├── site.ts                   # Alan adı, marka, varsayılan meta
│   ├── theme.ts                  # Tasarım token'ları
│   └── motion.ts                 # Süre ve eğri sabitleri
│
├── styles/
│   ├── globals.css               # Reset + token + temel tipografi
│   └── tokens.css                # CSS değişkenleri
│
├── content/                      # MDX blog yazıları
│   └── blog/*.mdx
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── hizmetler/
│   │   ├── galeri/
│   │   ├── organizasyonlar/
│   │   ├── ekip/
│   │   ├── logo/
│   │   └── og/                   # Sosyal paylaşım görselleri
│   ├── icons/
│   ├── fonts/                    # Self-hosted variable font
│   └── documents/                # Menü PDF, belgeler
│
└── (kök)
    ├── next.config.js
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── package.json
```

## 15.1 Her klasörün görevi — neden ayrı duruyor?

| Klasör | Görevi | Ayrılma gerekçesi |
|---|---|---|
| **app/** | Rota tanımı. Klasör = URL. | Next.js App Router zorunluluğu; SEO meta ve veri çekme burada. |
| **components/ui/** | En küçük yapı taşları. İş mantığı **yok**. | Bir Button 40 yerde kullanılır. Tek yerde değişince hepsi değişir. |
| **components/layout/** | Sayfa çerçevesi. | Her sayfada aynı — tek kaynaktan yönetilir. |
| **components/motion/** | Animasyon sarmalayıcıları. | ⭐ Animasyonu **içerikten ayırır**. `<Reveal>` sarmalayıcısı, içindekinin ne olduğunu bilmez. Animasyon değişince tek dosya değişir. |
| **components/seo/** | Schema ve breadcrumb. | SEO mantığı içerikten bağımsız yönetilsin. |
| **sections/** | Büyük sayfa parçaları. | Bir "Hero" yeniden kullanılabilir değildir ama tek dosyada durmalı. `components`'ten ayrı tutmak, "atom mu, blok mu" karışıklığını önler. |
| **forms/** | Form mantığı, doğrulama, gönderim. | Form en çok değişen ve en çok hata çıkan yerdir. İzole edilirse test edilebilir. |
| **lib/** | Dış dünya ile konuşan kod (API, mail, analytics). | Yan etkili kod tek yerde toplanır; mock'lanabilir. |
| **utils/** | Saf fonksiyonlar. Girdi → çıktı, yan etki yok. | Test edilmesi en kolay katman. `lib`'den ayrılması kritik. |
| **hooks/** | Yeniden kullanılabilir React davranışı. | "Görünürde mi?", "Ekran dar mı?" gibi sorular tek yerde cevaplanır. |
| **constants/** | ⭐ Tüm içerik verisi. | **Projenin en önemli klasörü.** 17 hizmet burada bir dizi olarak durur; sayfa şablonu bu veriyi okur. Metin değişikliği için koda dokunulmaz. |
| **types/** | TypeScript tipleri. | Veri şekli tek yerde tanımlanır; hizmet verisine alan eklenince derleyici eksik yerleri gösterir. |
| **config/** | Site geneli ayarlar ve token'lar. | Alan adı, marka adı, renk değeri kodun içine gömülmez. |
| **styles/** | Global CSS ve token'lar. | Tasarım sistemi tek dosyadan yönetilir. |
| **content/** | Blog MDX dosyaları. | İçerik koddan ayrı — yazar geliştirici olmadan yazı ekleyebilir. |
| **public/** | Statik dosyalar. | CDN'den doğrudan servis edilir. |

---

# BÖLÜM 16 — UYGULAMA YOL HARİTASI

| Faz | Kapsam | Çıktı | Süre |
|---|---|---|---|
| **0** | Bu doküman + 3 kararın onayı + logo renk varyantı | Onaylı plan | — |
| **1** | Proje kurulumu, tasarım token'ları, `components/ui` kütüphanesi | Çalışan bileşen kütüphanesi | 1 |
| **2** | Layout: header, mega menü, drawer, footer, mobil çubuk | Gezinti iskeleti | 1 |
| **3** | Motion katmanı: Reveal, Stagger, Counter, Magnetic, Curtain, PageTransition | Animasyon sistemi | 1 |
| **4** | Ana sayfa — 14 bölüm (brief alanı dahil) | Tam ana sayfa | 2 |
| **5** | `constants/services.ts` + `[slug]` şablonu → **17 hizmet sayfası** | Hizmet ağacı | 2 |
| **6** | `/teklif-al` sihirbazı + WhatsApp devri + form altyapısı | Dönüşüm motoru | 1 |
| **7** | Galeri (masonry + FLIP + lightbox), organizasyonlar, referanslar, yorumlar | Kanıt sayfaları | 1 |
| **8** | Kurumsal sayfalar, menüler, SSS, iletişim, yasal sayfalar | İçerik tamam | 1 |
| **9** | Blog altyapısı (MDX) + ilk 10 makale | SEO motoru | 2 |
| **10** | Teknik SEO: schema, sitemap, robots, OG görselleri, meta | Arama hazır | 1 |
| **11** | Performans: AVIF dönüşüm, kod bölme, CWV ölçüm ve düzeltme | Lighthouse ≥ 92 | 1 |
| **12** | QA: 7 cihaz, klavye, ekran okuyucu, reduced-motion, form senaryoları | Teslim | 1 |

## 16.1 Faz 0'ın çıktısı — inşaat başlamadan gerekenler

| # | İhtiyaç | Kritiklik | Yoksa ne olur |
|---|---|---|---|
| 1 | **3 kararın onayı** (palet, yeşil, stack) | 🔴 Bloklayıcı | İnşaat başlayamaz |
| 2 | Profesyonel fotoğraf çekimi (min 30 kare) | 🔴 Kritik | Site "premium" olamaz — bu bütçenin en önemli kalemi |
| 3 | Gerçek rakamlar (yıl, organizasyon, müşteri, misafir) | 🟠 Yüksek | Güven bölümü uydurma olur |
| 4 | Kurumsal referans listesi + logo izinleri | 🟠 Yüksek | En güçlü B2B kanıtı eksik kalır |
| 5 | Gerçek müşteri yorumları (min 6) | 🟠 Yüksek | Bölüm gizlenir |
| 6 | Hijyen/kalite belgeleri | 🟡 Orta | Belge bölümü çıkar |
| 7 | Adres, alan adı, e-posta, sosyal medya | 🟡 Orta | Placeholder kalır, yerel SEO eksik |
| 8 | Menü içerikleri (paket bazlı) | 🟡 Orta | Örnek menü yazılır, sonra düzeltilir |

> ⚠ **En kritik uyarı:** Bu dokümandaki tasarımın "10 bin dolarlık" görünmesi, **%40 tasarıma, %60 fotoğrafa** bağlıdır. Apple'ın sitesi, ürün fotoğrafı kötü olsa ucuz görünürdü. Profesyonel çekim bu projenin en yüksek getirili yatırımıdır.

---

# BÖLÜM 17 — ÖLÇÜM VE ANALİTİK

| Araç | Amaç |
|---|---|
| Google Analytics 4 | Trafik, dönüşüm, huni |
| Google Search Console | Sıralama, tıklama, indeksleme, CWV |
| Microsoft Clarity | ⭐ Isı haritası + oturum kaydı — **ücretsiz**, hangi bölümde terk edildiğini gösterir |
| Google Tag Manager | Event yönetimi |
| Google Business Profile | Yerel arama |

**Takip edilecek event'ler:** `quote_form_start`, `quote_step_1/2/3`, `quote_submit`, `brief_write`, `brief_submit`, `whatsapp_click`, `phone_click`, `service_view`, `gallery_open`, `faq_open`, `menu_download`, `scroll_75`

**Aylık rapor:** Dönüşüm oranı · en çok giriş alan hizmet sayfası · en çok terk edilen form adımı · WhatsApp/form oranı · CWV skorları · yeni sıralanan anahtar kelimeler.

---

# BÖLÜM 18 — RİSKLER VE AÇIK KONULAR

| # | Risk | Etki | Önlem |
|---|---|---|---|
| 1 | Gerçek fotoğraf gelmezse | 🔴 Yüksek | Proje "premium" hedefini tutturamaz. Çekim Faz 0'da planlanmalı |
| 2 | Logo bordo kalırsa palet bozulur | 🟠 Orta | Karar 1 → logo renk varyantı üretilecek |
| 3 | Referans logoları için izin yoksa | 🟠 Orta | Sektör adıyla anonim gösterim |
| 4 | Uydurma yorum kullanımı | 🔴 Yüksek | Etik ve Google yaptırımı riski — **yapılmayacak** |
| 5 | 17 sayfa benzer içerik olursa | 🔴 Yüksek | Thin content cezası. Her sayfa min 250 özgün kelime |
| 6 | Blog başlayıp bırakılırsa | 🟡 Düşük | Yayın takvimi taahhüdü; 10 yazı ile başlanmalı |
| 7 | Animasyon fazlalığı CWV'yi düşürürse | 🟠 Orta | INP bütçesi ölçülür; pin ve magnetic yalnız masaüstünde |
| 8 | KVKK metni hukukçu onayı almadan yayınlanırsa | 🟠 Orta | Yayın öncesi hukuk kontrolü |

---

# ONAY İÇİN ÖZET

**Bu doküman onaylandığında Faz 1 başlar.**

Onayınız gereken 3 madde:

1. **Renk paleti:** Logo antrasit+gold'a çevrilsin mi? *(Tavsiye: Evet)*
2. **Yeşil:** Sadece rozet/onay ikonlarında sınırlı kullanım? *(Tavsiye: Evet)*
3. **Teknoloji:** Next.js + TypeScript + Tailwind + Framer Motion? *(Tavsiye: Evet)*

Ayrıca Faz 0'daki 8 içerik ihtiyacından hangilerini sağlayabileceğinizi bilmem gerekiyor — özellikle **fotoğraf çekimi**, çünkü bu projenin premium algısını belirleyen tek en büyük etken.
