# ✦ Günlük Bilgi

Her gün, seçtiğin ilgi alanlarından sana özel, derinlemesine ve görsellerle zenginleştirilmiş bir konu.

- **Alan seçimi:** Tarih, Coğrafya, Biyoloji, Uzay & Astronomi, Fizik, Sanat, Felsefe, Teknoloji
- **Kişiye özel günlük konu:** Her kullanıcının kendi rastgele tohumu var; aynı gün herkes farklı konu görebilir, sen ise o gün boyunca hep aynı konuyu görürsün. Bir alandaki konular bitmeden tekrar gelmez ve mümkünse her gün farklı bir alandan konu gelir.
- **Görseller:** Her konunun kapak ve ara görselleri çalışma anında Wikipedia / Wikimedia Commons'tan çekilir.
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

`data/konular.js` içindeki diziye yeni bir nesne ekle:

```js
{
  id: "benzersiz-id", kategori: "tarih", sure: 5,
  baslik: "Başlık", altbaslik: "Kısa alt başlık",
  gorseller: ["English_Wikipedia_Title", "Another_Title"], // ilki kapak
  wiki: "Türkçe Vikipedi arama terimi",
  giris: "...",
  bolumler: [{ baslik: "...", metin: "..." }],
  bilgiler: ["...", "..."],
  biliyorMuydun: "..."
}
```

Yeni bir alan eklemek için `data/kategoriler.js`'e bir satır ekle.

## Dosyalar

| Dosya | Görev |
|---|---|
| `index.html` | Sayfa iskeleti |
| `styles.css` | Tasarım (açık/koyu tema) |
| `app.js` | Günlük seçim algoritması, sayfalar, görsel yükleme, geri bildirim |
| `bulut.js` | Firebase: Google ile giriş, Firestore senkronizasyonu, analitik |
| `data/` | Kategoriler ve konu içerikleri |
| `sw.js`, `manifest.webmanifest`, `icon.svg` | Kurulabilir uygulama (PWA) ve çevrimdışı destek |
