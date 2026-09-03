/**
 * Schema.org JSON-LD enjektörü.
 * Sunucu bileşeni — istemciye ekstra JS gitmez.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // İçerik kendi kodumuzdan gelir, kullanıcı girdisi değildir
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
