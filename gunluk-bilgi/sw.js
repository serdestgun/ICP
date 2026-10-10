// Uygulama kabuğunu ve görülen görselleri önbelleğe alır; uygulama çevrimdışı da açılır.
const SURUM = "gb-v3";
const KABUK = ["./", "index.html", "styles.css", "app.js", "bulut.js", "data/kategoriler.js",
  ...["tarih", "cografya", "biyoloji", "uzay", "fizik", "sanat", "felsefe", "teknoloji"].map((k) => `data/konular/${k}.js`), "icon.svg", "manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SURUM).then((c) => c.addAll(KABUK)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((anahtarlar) => Promise.all(anahtarlar.filter((a) => a !== SURUM && a !== "gb-gorseller").map((a) => caches.delete(a))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  // Görseller: önce önbellek, yoksa ağdan alıp sakla
  if (url.hostname === "upload.wikimedia.org") {
    e.respondWith(caches.open("gb-gorseller").then(async (c) => {
      const kayit = await c.match(request);
      if (kayit) return kayit;
      const yanit = await fetch(request);
      if (yanit.ok || yanit.type === "opaque") c.put(request, yanit.clone());
      return yanit;
    }));
    return;
  }

  // Uygulama dosyaları: önce ağ (güncel içerik), çevrimdışıysa önbellek
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(request)
        .then((yanit) => { const kopya = yanit.clone(); caches.open(SURUM).then((c) => c.put(request, kopya)); return yanit; })
        .catch(() => caches.match(request).then((r) => r || caches.match("index.html")))
    );
  }
});
