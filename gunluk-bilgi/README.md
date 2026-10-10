# ✦ Günlük Bilgi

Her gün, seçtiğin ilgi alanlarından sana özel, derinlemesine ve görsellerle zenginleştirilmiş bir konu.

- **Alan seçimi:** Tarih, Coğrafya, Biyoloji, Uzay & Astronomi, Fizik, Sanat, Felsefe, Teknoloji
- **Kişiye özel günlük konu:** Her kullanıcının kendi rastgele tohumu var; aynı gün herkes farklı konu görebilir, sen ise o gün boyunca hep aynı konuyu görürsün. Bir alandaki konular bitmeden tekrar gelmez ve mümkünse her gün farklı bir alandan konu gelir.
- **Görseller:** Her konunun kapak ve ara görselleri Wikimedia Commons'tan gelir ve altlarında Türkçe açıklama bulunur.
- **Geçmiş, favoriler, keşfet, okuma serisi (🔥)**
- **PWA:** Telefona "Ana ekrana ekle" ile uygulama gibi kurulabilir, çevrimdışı açılır.
- **Google ile giriş (isteğe bağlı):** Giriş yapan kullanıcının alanları, geçmişi, favorileri Firebase Firestore'da saklanır ve her cihazda görünür. Misafirler yalnızca cihazlarında (localStorage) saklar; giriş yapınca cihazdaki veri hesaba aktarılır.
- **Geri bildirim:** Her konunun sonunda 👍/👎 ve yorum, Alanlar sayfasında genel görüş kutusu. Kayıtlar Firestore'daki `geribildirim` koleksiyonuna düşer.
- **Analitik:** Firebase Analytics ile `konu_goruntule`, `konu_okundu`, `login`, `geri_bildirim` olayları.

## Çalıştırma

Derleme adımı yok, saf HTML/CSS/JS:

```bash
cd gunluk-bilgi
python3 -m http.server 8000
# tarayıcıda http://localhost:8000
```

## Yayınlama

Klasörü olduğu gibi herhangi bir statik barındırmaya koyabilirsin: GitHub Pages, Netlify, Vercel, Cloudflare Pages.

## Firebase

Yapılandırma `bulut.js` içinde. Güvenlik kuralları repodaki `firestore.rules` dosyasında; Firebase konsolunda **Firestore Database → Rules** sekmesine yapıştırıp **Publish** edilmeli. Firebase'e ulaşılamazsa uygulama misafir modunda çalışmaya devam eder.

## Yeni konu eklemek

İlgili alanın dosyasına (`data/konular/<alan>.js`) yeni bir nesne ekle:

```js
{
  id: "benzersiz-id", kategori: "tarih",
  baslik: "Başlık", altbaslik: "Kısa alt başlık",
  wiki: "Türkçe Vikipedi arama terimi",
  gorseller: [ // ilki kapak; diğerleri bölümlerin arasına yerleşir
    { dosya: "Wikimedia_Commons_dosya_adı.jpg", aciklama: "Görselde ne olduğu", odak: "50% 30%" /* isteğe bağlı */ }
  ],
  giris: "...",
  bolumler: [{ baslik: "...", metin: "Paragraf 1\n\nParagraf 2" }],
  bilgiler: ["...", "..."],
  biliyorMuydun: "..."
}
```

Okuma süresi metinden otomatik hesaplanır. Görseller dosya adıyla sabitlendiği için açıklama hep doğru görsele aittir; `Görselleri doğrula` iş akışı her değişiklikte tüm görsellerin açılabildiğini kontrol eder. Yeni bir alan için `data/kategoriler.js`'e bir satır, `data/konular/` altına bir dosya ekleyip `index.html` ve `sw.js`'teki listeye yaz.

## Dosyalar

| Dosya | Görev |
|---|---|
| `index.html` | Sayfa iskeleti |
| `styles.css` | Tasarım (açık/koyu tema) |
| `app.js` | Günlük seçim algoritması, sayfalar, görsel yükleme, geri bildirim |
| `bulut.js` | Firebase: Google ile giriş, Firestore senkronizasyonu, analitik |
| `data/` | Kategoriler ve alan başına konu dosyaları (`data/konular/`) |
| `sw.js`, `manifest.webmanifest`, `icon.svg` | Kurulabilir uygulama (PWA) ve çevrimdışı destek |
