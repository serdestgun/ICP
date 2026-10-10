// Firebase: Google ile giriş, kullanıcı verisinin bulutta saklanması, geri bildirim ve analitik.
// Bu dosya yüklenemezse (çevrimdışı vb.) uygulama yalnızca bu cihazda saklayarak çalışmaya devam eder.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, addDoc, collection, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAnalytics, isSupported, logEvent } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";

// Web yapılandırması gizli değildir; erişim Firestore güvenlik kurallarıyla (firestore.rules) korunur.
const firebaseConfig = {
  apiKey: "AIzaSyCrqUuX_2UW8SZ16HIMbtEauWYbCd4fNgE",
  authDomain: "knowledge-app-91c06.firebaseapp.com",
  projectId: "knowledge-app-91c06",
  storageBucket: "knowledge-app-91c06.firebasestorage.app",
  messagingSenderId: "978099886391",
  appId: "1:978099886391:web:13e37272c56a07251a22b2",
  measurementId: "G-N2JYNM1XS7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let analitik = null;
isSupported().then((destekli) => { if (destekli) analitik = getAnalytics(app); }).catch(() => {});

const GB = window.GunlukBilgi;
const SENKRON_ALANLARI = ["ilgiler", "gecmis", "okunan", "favoriler", "puanlar", "tohum"];
let kullanici = null;
let olusturma = null;
let zamanlayici = null;
let bekleyen = false;

const kullaniciBelgesi = (uid) => doc(db, "kullanicilar", uid);

function belgeVerisi(durum) {
  const veri = {};
  for (const alan of SENKRON_ALANLARI) veri[alan] = durum[alan];
  return {
    ...veri,
    ad: kullanici.displayName || "",
    olusturma: olusturma || serverTimestamp(),
    guncelleme: serverTimestamp()
  };
}

async function hemenYaz(zorla = false) {
  clearTimeout(zamanlayici);
  if (!kullanici || (!bekleyen && !zorla)) return;
  bekleyen = false;
  try { await setDoc(kullaniciBelgesi(kullanici.uid), belgeVerisi(GB.durum())); }
  catch (h) { console.warn("Buluta kaydedilemedi:", h.code || h); }
}

onAuthStateChanged(auth, async (u) => {
  kullanici = u;
  if (u) {
    try {
      const anlik = await getDoc(kullaniciBelgesi(u.uid));
      const uzak = anlik.exists() ? anlik.data() : null;
      olusturma = uzak?.olusturma || null;
      GB.birlestir(uzak);
      await hemenYaz(true);
    } catch (h) {
      console.warn("Bulut verisi okunamadı:", h.code || h);
    }
  } else {
    olusturma = null;
  }
  window.Bulut.hazir = true;
  GB.oturumDegisti();
});

window.Bulut = {
  hazir: false,
  kullanici: () => kullanici && {
    ad: kullanici.displayName || kullanici.email,
    eposta: kullanici.email,
    foto: kullanici.photoURL
  },

  async girisYap() {
    const saglayici = new GoogleAuthProvider();
    saglayici.setCustomParameters({ prompt: "select_account" });
    try {
      await signInWithPopup(auth, saglayici);
      this.olay("login", { method: "google" });
    } catch (h) {
      if (h.code === "auth/popup-blocked" || h.code === "auth/operation-not-supported-in-this-environment") {
        await signInWithRedirect(auth, saglayici);
      } else if (h.code !== "auth/popup-closed-by-user" && h.code !== "auth/cancelled-popup-request") {
        throw h;
      }
    }
  },

  async cikisYap() {
    await hemenYaz();
    await signOut(auth);
  },

  // Her değişiklikte çağrılır; sık yazmamak için kısa bir gecikmeyle toplar
  kaydet() {
    if (!kullanici) return;
    bekleyen = true;
    clearTimeout(zamanlayici);
    zamanlayici = setTimeout(hemenYaz, 1500);
  },

  async geribildirim({ konu, puan, yorum }) {
    await addDoc(collection(db, "geribildirim"), {
      uid: kullanici ? kullanici.uid : null,
      konu,
      puan,
      yorum: (yorum || "").slice(0, 1000),
      tarih: serverTimestamp()
    });
    this.olay("geri_bildirim", { konu, puan });
  },

  olay(ad, parametreler = {}) {
    try { if (analitik) logEvent(analitik, ad, parametreler); } catch { /* yok say */ }
  }
};

// Sekme kapanırken bekleyen değişiklikleri gönder
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") hemenYaz();
});
