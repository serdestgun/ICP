// Konu dosyalarındaki her görselin Wikimedia'da gerçekten açılabildiğini kontrol eder.
import { readdirSync, readFileSync } from "node:fs";
import vm from "node:vm";

const kok = new URL("../../gunluk-bilgi/", import.meta.url);
const ortam = { window: {} };
vm.createContext(ortam);
vm.runInContext(readFileSync(new URL("data/kategoriler.js", kok), "utf8"), ortam);
for (const dosya of readdirSync(new URL("data/konular/", kok)).sort()) {
  vm.runInContext(readFileSync(new URL(`data/konular/${dosya}`, kok), "utf8"), ortam);
}

const gorseller = ortam.window.KONULAR.flatMap((k) => k.gorseller.map((g) => ({ konu: k.id, ...g })));
const UA = { "User-Agent": "GunlukBilgi-CI/1.0 (https://serdestgun.github.io/ICP/)" };

// Görselleri tek tek indirmek Wikimedia'nın hız sınırına takılır; bunun yerine API'den toplu sorgula.
// en.wikipedia hem Commons'taki hem yerel dosyaları görür (uygulama da aynı adresi kullanır).
const bilgi = new Map();
const adlar = [...new Set(gorseller.map((g) => g.dosya))];
for (let i = 0; i < adlar.length; i += 40) {
  const u = new URL("https://en.wikipedia.org/w/api.php");
  Object.entries({
    action: "query", format: "json", formatversion: "2", prop: "imageinfo",
    iiprop: "url|mime", iiurlwidth: "960", titles: adlar.slice(i, i + 40).map((d) => "File:" + d).join("|")
  }).forEach(([k, v]) => u.searchParams.set(k, v));
  const veri = await (await fetch(u, { headers: UA })).json();
  const ad = (t) => t.replace(/^File:/, "").replace(/ /g, "_");
  const esles = Object.fromEntries((veri.query.normalized || []).map((n) => [ad(n.to), n.from]));
  for (const p of veri.query.pages) {
    const ii = p.imageinfo?.[0];
    // Commons dosyaları en.wikipedia'da "missing" ama "known" görünür; imageinfo varsa dosya vardır
    bilgi.set(esles[ad(p.title)] ? ad(esles[ad(p.title)]) : ad(p.title), ii || null);
  }
}

let hata = 0;
for (const g of gorseller) {
  const ii = bilgi.get(g.dosya.replace(/ /g, "_"));
  const tamam = !!(ii && ii.mime?.startsWith("image/") && ii.thumburl);
  if (!tamam) hata++;
  console.log(`${tamam ? "✓" : "✗"} ${g.konu} — ${g.dosya}${ii ? ` (${ii.mime})` : " (bulunamadı)"}`);
}
console.log(`\n${gorseller.length} görsel kontrol edildi, ${hata} hata.`);
process.exit(hata ? 1 : 0);
