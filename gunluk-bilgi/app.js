(() => {
  "use strict";

  const KATEGORILER = window.KATEGORILER;
  const KONULAR = window.KONULAR;
  const kategoriBul = (id) => KATEGORILER.find((k) => k.id === id);
  const konuBul = (id) => KONULAR.find((k) => k.id === id);

  // ───────── Durum (tarayıcıda saklanır) ─────────
  const ANAHTAR = "gunluk-bilgi.v1";
  const varsayilan = () => ({
    ilgiler: [],
    gecmis: {},      // { "2026-10-10": "konu-id" }
    okunan: [],      // sonuna kadar okunan konular
    favoriler: [],
    tohum: Math.random().toString(36).slice(2) // her kullanıcıya özel rastgelelik
  });
  function yukle() {
    try {
      const ham = localStorage.getItem(ANAHTAR);
      return ham ? { ...varsayilan(), ...JSON.parse(ham) } : varsayilan();
    } catch { return varsayilan(); }
  }
  let durum = yukle();
  function kaydet() {
    try { localStorage.setItem(ANAHTAR, JSON.stringify(durum)); } catch { /* gizli sekme vb. */ }
  }

  // ───────── Tarih yardımcıları ─────────
  const gunAnahtari = (t = new Date()) =>
    `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  const gunOnce = (n) => { const t = new Date(); t.setDate(t.getDate() - n); return gunAnahtari(t); };
  const tarihYazisi = (anahtar, secenek = { day: "numeric", month: "long", weekday: "long" }) => {
    const [y, a, g] = anahtar.split("-").map(Number);
    return new Date(y, a - 1, g).toLocaleDateString("tr-TR", secenek);
  };

  // ───────── Kişiye özel günlük seçim ─────────
  // Aynı kullanıcı aynı gün her zaman aynı konuyu görür; farklı kullanıcılar farklı konular görür.
  function hash(metin) {
    let h = 2166136261;
    for (let i = 0; i < metin.length; i++) { h ^= metin.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rastgele(tohum) {
    let a = tohum;
    return () => {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const sec = (dizi, r) => dizi[Math.floor(r() * dizi.length)];

  function bugununKonusu() {
    const bugun = gunAnahtari();
    const mevcut = konuBul(durum.gecmis[bugun]);
    if (mevcut && durum.ilgiler.includes(mevcut.kategori)) return mevcut;

    const r = rastgele(hash(durum.tohum + bugun));
    const gorulen = new Set(Object.entries(durum.gecmis).filter(([g]) => g !== bugun).map(([, id]) => id));
    const dunku = konuBul(durum.gecmis[gunOnce(1)]);

    const gorulmemis = (kat) => KONULAR.filter((k) => k.kategori === kat && !gorulen.has(k.id));
    let kategoriler = durum.ilgiler.filter((k) => gorulmemis(k).length > 0);
    // Mümkünse dünkü alandan farklı bir alan gelsin
    if (kategoriler.length > 1 && dunku) kategoriler = kategoriler.filter((k) => k !== dunku.kategori);

    let secilen;
    if (kategoriler.length) {
      secilen = sec(gorulmemis(sec(kategoriler, r)), r);
    } else {
      // Seçilen alanlardaki tüm konular görüldü: son 7 gün hariç baştan başla
      const yakin = new Set(Array.from({ length: 7 }, (_, i) => durum.gecmis[gunOnce(i + 1)]));
      const havuz = KONULAR.filter((k) => durum.ilgiler.includes(k.kategori));
      const tercih = havuz.filter((k) => !yakin.has(k.id));
      secilen = sec(tercih.length ? tercih : havuz, r);
    }
    durum.gecmis[bugun] = secilen.id;
    kaydet();
    return secilen;
  }

  function seriHesapla() {
    let n = 0;
    while (durum.gecmis[gunOnce(n)]) n++;
    return n;
  }

  // ───────── Görseller (Wikipedia / Wikimedia Commons) ─────────
  const gorselOnbellek = new Map();
  function gorselGetir(baslik) {
    if (gorselOnbellek.has(baslik)) return gorselOnbellek.get(baslik);
    const anahtar = "gb.gorsel." + baslik;
    let kayitli = null;
    try { kayitli = JSON.parse(localStorage.getItem(anahtar)); } catch { /* yok say */ }
    const istek = kayitli
      ? Promise.resolve(kayitli)
      : fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(baslik)}`)
          .then((y) => (y.ok ? y.json() : null))
          .then((v) => {
            if (!v || !(v.thumbnail || v.originalimage)) return null;
            const kucuk = v.thumbnail?.source;
            const buyuk = v.originalimage && v.originalimage.width <= 1280
              ? v.originalimage.source
              : kucuk?.replace(/\/\d+px-/, "/960px-") || v.originalimage?.source;
            const sonuc = { kucuk: kucuk || buyuk, buyuk, sayfa: v.content_urls?.desktop?.page, baslik: v.title };
            try { localStorage.setItem(anahtar, JSON.stringify(sonuc)); } catch { /* dolu olabilir */ }
            return sonuc;
          })
          .catch(() => null);
    gorselOnbellek.set(baslik, istek);
    return istek;
  }

  // data-gorsel="Başlık" data-boyut="buyuk|kucuk" olan kapları doldurur
  function gorselleriYukle(kok) {
    kok.querySelectorAll("[data-gorsel]").forEach(async (kap) => {
      const g = await gorselGetir(kap.dataset.gorsel);
      if (!g) { kap.closest(".ara-gorsel")?.remove(); return; }
      const img = new Image();
      img.alt = kap.dataset.alt || g.baslik;
      img.loading = "lazy";
      img.decoding = "async";
      img.src = kap.dataset.boyut === "kucuk" ? g.kucuk : g.buyuk;
      img.onerror = () => { if (img.src !== g.kucuk) img.src = g.kucuk; else kap.closest(".ara-gorsel")?.remove(); };
      img.onload = () => { img.classList.add("yuklendi"); kap.classList.add("gorselli"); };
      kap.appendChild(img);
      const kredi = kap.parentElement.querySelector("[data-kredi]");
      if (kredi && g.sayfa) kredi.innerHTML = `Görsel: <a href="${g.sayfa}" target="_blank" rel="noopener">Wikipedia / Wikimedia Commons</a>`;
    });
  }

  // ───────── Görünümler ─────────
  const kok = document.getElementById("uygulama");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function kategoriSecimi({ karsilama }) {
    let secili = new Set(durum.ilgiler);
    kok.innerHTML = `
      ${karsilama ? `
        <section class="karsilama-hero">
          <div class="buyuk-ikon" aria-hidden="true">✦</div>
          <h1>Her gün bir konu,<br>derinlemesine.</h1>
          <p>İlgini çeken alanları seç. Her gün sana özel, görsellerle zenginleştirilmiş bir konu hazırlayalım.</p>
        </section>` : `
        <div class="sayfa-baslik">
          <div class="ust-yazi">Ayarlar</div>
          <h1>İlgi alanların</h1>
          <p>Günlük konun yalnızca seçtiğin alanlardan gelir.</p>
        </div>`}
      <div class="kategori-izgara">
        ${KATEGORILER.map((k) => `
          <button class="kategori-kart" style="--renk:${k.renk}" data-id="${k.id}" aria-pressed="${secili.has(k.id)}">
            <span class="ikon" aria-hidden="true">${k.ikon}</span>
            <strong>${esc(k.ad)}</strong>
            <small>${esc(k.aciklama)}</small>
          </button>`).join("")}
      </div>
      <div class="secim-alt">
        <span id="secimSayisi"></span>
        <button class="dugme" id="kaydet">${karsilama ? "Başlayalım →" : "Kaydet"}</button>
      </div>
      ${karsilama ? "" : `<p class="ipucu">Verilerin yalnızca bu cihazda saklanır. <button class="dugme ikincil" id="sifirla" style="padding:6px 14px;font-size:13px">Her şeyi sıfırla</button></p>`}
    `;
    const guncelle = () => {
      kok.querySelector("#secimSayisi").textContent = secili.size ? `${secili.size} alan seçildi` : "En az bir alan seç";
      kok.querySelector("#kaydet").disabled = secili.size === 0;
    };
    kok.querySelectorAll(".kategori-kart").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.id;
      secili.has(id) ? secili.delete(id) : secili.add(id);
      b.setAttribute("aria-pressed", secili.has(id));
      guncelle();
    }));
    kok.querySelector("#kaydet").addEventListener("click", () => {
      durum.ilgiler = KATEGORILER.map((k) => k.id).filter((id) => secili.has(id));
      kaydet();
      if (location.hash === "#/bugun") rotala(); else location.hash = "#/bugun";
    });
    kok.querySelector("#sifirla")?.addEventListener("click", () => {
      if (!confirm("Seçimlerin, geçmişin ve favorilerin silinecek. Emin misin?")) return;
      durum = varsayilan(); kaydet(); location.hash = ""; rotala();
    });
    guncelle();
  }

  function makaleHTML(konu, { bugun } = {}) {
    const kat = kategoriBul(konu.kategori);
    const [kapak, ...ekler] = konu.gorseller;
    const favori = durum.favoriler.includes(konu.id);
    const bolumler = konu.bolumler.map((b, i) => `
      <section class="bolum"><h2>${esc(b.baslik)}</h2><p>${esc(b.metin)}</p></section>
      ${ekler[i] ? `
        <figure class="ara-gorsel">
          <div class="cerceve" data-gorsel="${esc(ekler[i])}" data-alt="${esc(konu.baslik)}"></div>
          <figcaption class="gorsel-kredi" data-kredi></figcaption>
        </figure>` : ""}`).join("");
    return `
      <article class="makale" style="--renk:${kat.renk}">
        <figure style="margin:0">
          <div class="kapak" data-gorsel="${esc(kapak)}" data-alt="${esc(konu.baslik)}">
            <div class="yedek-ikon" aria-hidden="true">${kat.ikon}</div>
          </div>
          <figcaption class="kapak-kredi" data-kredi></figcaption>
        </figure>
        <div class="makale-ust">
          <a class="etiket" href="#/kesfet/${kat.id}">${kat.ikon} ${esc(kat.ad)}</a>
          <span class="sure">${konu.sure} dk okuma${bugun ? " · Bugünün konusu" : ""}</span>
        </div>
        <h1>${esc(konu.baslik)}</h1>
        <p class="altbaslik">${esc(konu.altbaslik)}</p>
        <p class="giris">${esc(konu.giris)}</p>
        ${bolumler}
        <aside class="kutu">
          <h3>📌 Akılda kalsın</h3>
          <ul>${konu.bilgiler.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        </aside>
        <aside class="kutu biliyor">
          <h3>💡 Biliyor muydun?</h3>
          <p>${esc(konu.biliyorMuydun)}</p>
        </aside>
        <div class="eylemler">
          <button class="dugme ikincil" id="favori" aria-pressed="${favori}">${favori ? "♥ Favorilerde" : "♡ Favorilere ekle"}</button>
          <button class="dugme ikincil" id="paylas">↗ Paylaş</button>
        </div>
        <p class="kaynak">Daha fazlası için: <a href="https://tr.wikipedia.org/w/index.php?search=${encodeURIComponent(konu.wiki)}" target="_blank" rel="noopener">Vikipedi'de “${esc(konu.wiki)}”</a></p>
        <div id="sonIsaret" aria-hidden="true"></div>
      </article>`;
  }

  function makaleBagla(konu) {
    gorselleriYukle(kok);
    const fav = kok.querySelector("#favori");
    fav.addEventListener("click", () => {
      const i = durum.favoriler.indexOf(konu.id);
      i >= 0 ? durum.favoriler.splice(i, 1) : durum.favoriler.unshift(konu.id);
      kaydet();
      const var_ = durum.favoriler.includes(konu.id);
      fav.setAttribute("aria-pressed", var_);
      fav.textContent = var_ ? "♥ Favorilerde" : "♡ Favorilere ekle";
    });
    kok.querySelector("#paylas").addEventListener("click", async () => {
      const url = `${location.origin}${location.pathname}#/konu/${konu.id}`;
      const veri = { title: konu.baslik, text: `${konu.baslik} — ${konu.altbaslik}`, url };
      try {
        if (navigator.share) await navigator.share(veri);
        else { await navigator.clipboard.writeText(url); alert("Bağlantı kopyalandı!"); }
      } catch { /* kullanıcı iptal etti */ }
    });
    // Sona kadar kaydırınca "okundu" say
    const isaret = kok.querySelector("#sonIsaret");
    if ("IntersectionObserver" in window && !durum.okunan.includes(konu.id)) {
      const g = new IntersectionObserver((girdiler) => {
        if (girdiler.some((e) => e.isIntersecting)) {
          if (!durum.okunan.includes(konu.id)) { durum.okunan.push(konu.id); kaydet(); }
          g.disconnect();
        }
      });
      g.observe(isaret);
    }
  }

  function geriSayim() {
    const simdi = new Date();
    const yarin = new Date(simdi); yarin.setHours(24, 0, 0, 0);
    const dk = Math.ceil((yarin - simdi) / 60000);
    const s = Math.floor(dk / 60), d = dk % 60;
    return s > 0 ? `Yeni konu ${s} sa ${d} dk sonra` : `Yeni konu ${d} dk sonra`;
  }

  function bugunGorunumu() {
    const konu = bugununKonusu();
    kok.innerHTML = `
      <div class="tarih-satiri">
        <div><div class="ust-yazi">Bugünün konusu</div><h1>${esc(tarihYazisi(gunAnahtari()))}</h1></div>
        <span class="geri-sayim" id="geriSayim">${geriSayim()}</span>
      </div>
      ${makaleHTML(konu, { bugun: true })}`;
    makaleBagla(konu);
    seriGoster();
  }

  function konuGorunumu(id) {
    const konu = konuBul(id);
    if (!konu) { kok.innerHTML = `<div class="bos">Bu konu bulunamadı.<br><a class="dugme" href="#/bugun">Bugüne dön</a></div>`; return; }
    kok.innerHTML = `<a class="geri" href="javascript:history.back()">← Geri</a>${makaleHTML(konu)}`;
    makaleBagla(konu);
  }

  function listeOgesi(konu, ek = "") {
    const kat = kategoriBul(konu.kategori);
    return `
      <a class="liste-ogesi" href="#/konu/${konu.id}" style="--renk:${kat.renk}">
        <div class="kucuk-gorsel" data-gorsel="${esc(konu.gorseller[0])}" data-boyut="kucuk" data-alt="">${kat.ikon}</div>
        <div>
          <div class="ust-yazi">${esc(kat.ad)}${ek ? ` · ${ek}` : ""}</div>
          <strong>${esc(konu.baslik)}</strong>
          <small>${esc(konu.altbaslik)}</small>
        </div>
      </a>`;
  }

  function gecmisGorunumu() {
    const girdiler = Object.entries(durum.gecmis).sort(([a], [b]) => (a < b ? 1 : -1))
      .map(([g, id]) => [g, konuBul(id)]).filter(([, k]) => k);
    kok.innerHTML = `
      <div class="sayfa-baslik"><div class="ust-yazi">Geçmiş</div><h1>Öğrendiklerin</h1>
        <p>${girdiler.length} gün · ${durum.okunan.length} konu sonuna kadar okundu</p></div>
      ${girdiler.length ? `<div class="liste">${girdiler.map(([g, k]) =>
        listeOgesi(k, tarihYazisi(g, { day: "numeric", month: "short" }) + (durum.okunan.includes(k.id) ? " ✓" : ""))).join("")}</div>`
        : `<div class="bos">Henüz geçmişin yok.</div>`}`;
    gorselleriYukle(kok);
  }

  function favorilerGorunumu() {
    const konular = durum.favoriler.map(konuBul).filter(Boolean);
    kok.innerHTML = `
      <div class="sayfa-baslik"><div class="ust-yazi">Favoriler</div><h1>Sakladıkların</h1></div>
      ${konular.length ? `<div class="liste">${konular.map((k) => listeOgesi(k)).join("")}</div>`
        : `<div class="bos">Beğendiğin konuları ♡ ile buraya ekleyebilirsin.<br><a class="dugme" href="#/bugun">Bugünün konusuna git</a></div>`}`;
    gorselleriYukle(kok);
  }

  function kesfetGorunumu(filtre) {
    const aktif = filtre && kategoriBul(filtre) ? filtre : "hepsi";
    const konular = KONULAR.filter((k) => aktif === "hepsi" || k.kategori === aktif);
    const okunan = konular.filter((k) => durum.okunan.includes(k.id)).length;
    kok.innerHTML = `
      <div class="sayfa-baslik"><div class="ust-yazi">Keşfet</div><h1>Tüm konular</h1>
        <p>Yarını beklemek istemiyorsan istediğin konuyu şimdi oku.</p></div>
      <div class="filtreler" role="group" aria-label="Alan filtresi">
        <button class="filtre" data-f="hepsi" aria-pressed="${aktif === "hepsi"}">Hepsi</button>
        ${KATEGORILER.map((k) => `<button class="filtre" data-f="${k.id}" aria-pressed="${aktif === k.id}">${k.ikon} ${esc(k.ad)}</button>`).join("")}
      </div>
      <div class="ilerleme">
        <div class="ilerleme-cubuk"><div style="width:${konular.length ? (okunan / konular.length) * 100 : 0}%"></div></div>
        <small>${okunan} / ${konular.length} konu okundu</small>
      </div>
      <div class="liste">${konular.map((k) => listeOgesi(k, durum.okunan.includes(k.id) ? "okundu ✓" : "")).join("")}</div>`;
    kok.querySelectorAll(".filtre").forEach((b) => b.addEventListener("click", () => {
      location.hash = b.dataset.f === "hepsi" ? "#/kesfet" : `#/kesfet/${b.dataset.f}`;
    }));
    gorselleriYukle(kok);
  }

  function seriGoster() {
    const el = document.getElementById("seri");
    const n = seriHesapla();
    el.hidden = n < 1;
    el.textContent = `🔥 ${n} gün`;
  }

  // ───────── Yönlendirme ─────────
  function rotala() {
    const [rota, parametre] = location.hash.replace(/^#\/?/, "").split("/");
    const ilk = durum.ilgiler.length === 0;
    document.body.classList.toggle("karsilama", ilk);
    document.getElementById("altMenu").hidden = ilk;
    document.getElementById("seri").hidden = true;

    if (ilk && rota !== "konu") kategoriSecimi({ karsilama: true });
    else switch (rota) {
      case "konu": konuGorunumu(parametre); break;
      case "kesfet": kesfetGorunumu(parametre); break;
      case "gecmis": gecmisGorunumu(); break;
      case "favoriler": favorilerGorunumu(); break;
      case "ayarlar": kategoriSecimi({ karsilama: false }); break;
      default: bugunGorunumu();
    }
    if (!ilk) seriGoster();
    document.querySelectorAll(".alt-menu a").forEach((a) =>
      a.classList.toggle("aktif", a.dataset.rota === (rota || "bugun")));
    window.scrollTo(0, 0);
    kok.focus({ preventScroll: true });
  }

  window.addEventListener("hashchange", rotala);
  // Gece yarısı geçtiyse ya da uygulamaya geri dönüldüyse "Bugün"ü tazele
  let sonGun = gunAnahtari();
  setInterval(() => {
    const el = document.getElementById("geriSayim");
    if (el) el.textContent = geriSayim();
    if (gunAnahtari() !== sonGun) { sonGun = gunAnahtari(); if (/^#?\/?(bugun)?$/.test(location.hash)) rotala(); }
  }, 30000);

  rotala();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
