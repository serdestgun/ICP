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
let hata = 0;
for (const g of gorseller) {
  const url = `https://en.wikipedia.org/wiki/Special:FilePath/${encodeURIComponent(g.dosya)}?width=960`;
  const yanit = await fetch(url, { headers: UA, redirect: "follow" });
  const tur = yanit.headers.get("content-type") || "";
  const tamam = yanit.ok && tur.startsWith("image/");
  if (!tamam) hata++;
  console.log(`${tamam ? "✓" : "✗"} ${g.konu} — ${g.dosya} (${yanit.status} ${tur})`);
  await yanit.body?.cancel();
}
console.log(`\n${gorseller.length} görsel kontrol edildi, ${hata} hata.`);
process.exit(hata ? 1 : 0);
