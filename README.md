# SpeakUp ✈️ — Senaryolarla İngilizce

Havalimanı senaryolarıyla İngilizce pratik yapmak için hazırlanmış, **mobil öncelikli** statik web sitesi.
Dört senaryo × altı CEFR seviyesi = **24 bağımsız ders**; her ders diyalog, okuma, gramer ve telaffuz bölümlerinden oluşuyor.

| Senaryo | Taraflar |
|---|---|
| 🛂 Pasaport Kontrol | Memur & Yolcu |
| 🧳 Check-in Bankosu | Görevli & Yolcu |
| 🔍 Güvenlik Kontrolü | Güvenlik & Yolcu |
| 📦 Gümrük | Gümrük memuru & Yolcu |

Seviyeler gerçekten farklı yazıldı: A1'de "Passport, please." varken C2'de taşıma sözleşmesi, ölçülülük
ilkesi ve `Were I…` yapısıyla yürüyen resmî bir müzakere var.

## Neler var

| Bölüm | İçerik |
|---|---|
| 💬 Diyalog | Seviyeye özel konuşma, Türkçe çeviri, kültürel notlar, satır satır veya baştan sona sesli dinleme. Rol etiketleri senaryoya göre değişir |
| 📖 Okuma | Seviyeye uygun metin + kelime listesi + 3 soruluk anlama testi (puanlı). Metindeki **her kelimeye dokunup** telaffuzunu dinleyebilirsin |
| 🧩 Gramer | Seviyeye göre yazılmış konular, örnekler ve pratik ipuçları. **Bu senaryo (4)** ↔ **seviyenin tamamı (16)** arasında geçiş yapabilirsin |
| 🗣️ Telaffuz | Zor kelimeler, IPA yazımı, vurgu ipuçları, sırayla dinleme + Türklerin klasik hata listesi. Aynı kapsam anahtarı burada da var (6 ↔ 24) |

Gramer ve telaffuz **senaryoya değil seviyeye** ait; senaryo yalnızca hangi konuların öne çıkacağını belirler.
Bu yüzden bu iki sekmenin başında ne gördüğünü ve neyin gizli kalmadığını anlatan bir yönlendirme kartı,
altında da tıklanabilir bir konu dizini var — dizinden bir konuya dokununca ilgili karta atlıyor.

Ekstra: TR çeviriyi tek düğmeyle kapatma, 0.7×–1.15× arası konuşma hızı, seçimlerin tarayıcıda hatırlanması.
Quizde her soru ilk cevaptan sonra kilitlenir, böylece başlıktaki puan gerçek performansı gösterir.

## Ses nasıl çalışıyor?

Tarayıcının kendi **Web Speech API**'si kullanılıyor — ses dosyası indirilmiyor, internet/veri harcanmıyor,
depo boyutu büyümüyor. Memur ve yolcu için mümkün olduğunca iki farklı ses seçiliyor.

> iOS Safari'de sesler ilk dokunuştan sonra açılır — bu normaldir. Sistem ayarlarından ek İngilizce sesler
> indirirsen (Ayarlar → Erişilebilirlik → Konuşulan İçerik → Sesler) telaffuz belirgin şekilde iyileşir.

## GitHub Pages'te yayınlama

```bash
git init
git add .
git commit -m "SpeakUp ilk sürüm"
git branch -M main
git remote add origin https://github.com/KULLANICI-ADIN/english-practise.git
git push -u origin main
```

Sonra depoda: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `root` → Save**.
Site birkaç dakika içinde `https://KULLANICI-ADIN.github.io/english-practise/` adresinde yayında olur.

Derleme adımı, bağımlılık, `node_modules` yok — dosyalar olduğu gibi servis edilir.
`.nojekyll` dosyası, Jekyll'in dosyalara karışmasını engeller.

## Yerelde çalıştırma

`index.html` dosyasına çift tıklamak yeterli. İstersen:

```bash
python3 -m http.server 8000
```

## Yeni senaryo ekleme

Seviye tanımları ve senaryo listesi [`assets/js/data.js`](assets/js/data.js) içinde; her senaryonun içeriği
kendi dosyasında. Üç adım:

1. `SCENARIOS` dizisine yeni senaryoyu ekle. `roles`, diyalogda görünen taraf isimlerini belirler:

```js
{
  id: "lostluggage", emoji: "🧭", title: "Kayıp Bagaj",
  subtitle: "Görevli & Yolcu", ready: true,
  roles: {
    officer:   { label: "Görevli", emoji: "🧭" },
    passenger: { label: "Yolcu",   emoji: "🧍" },
  },
}
```

2. `assets/js/data-lostluggage.js` dosyasını oluştur ve altı seviyeyi doldur:

```js
CONTENT.lostluggage = {
  a1: { dialogue: {...}, reading: {...}, grammar: [...], pronunciation: [...] },
  a2: { ... }, b1: { ... }, b2: { ... }, c1: { ... }, c2: { ... }
};
```

3. `index.html` içinde `app.js`'ten **önce** script etiketini ekle.

Veri şeması mevcut senaryolarda birebir görülebilir. Arayüz tarafında hiçbir şey değiştirmen gerekmez.
`ready: false` verirsen kart kilitli görünür ve "yakında" mesajı gösterir — içeriği hazır olmayan
senaryoyu listede tutmak istersen bunu kullan.

## Dosya yapısı

```
index.html
assets/
  css/style.css        — tema, mobil düzen, bileşenler
  js/data.js           — seviyeler + senaryo listesi + Pasaport içeriği
  js/data-checkin.js   — Check-in içeriği (6 seviye)
  js/data-security.js  — Güvenlik içeriği (6 seviye)
  js/data-customs.js   — Gümrük içeriği (6 seviye)
  js/app.js            — durum yönetimi, render, Web Speech API
.nojekyll
```

## Tasarım notları

- Koyu tema; pembe `#FF4D9D`, mor `#A855F7`, sarı `#FFD34E`.
- Başlıklar **Fredoka**, gövde **Outfit** — enerjik ve okunaklı, ders kitabı havası yok.
- iPhone 13 (390 × 844) referans alındı: alt sekme çubuğu, `safe-area-inset` desteği, 44 px'ten küçük
  dokunma hedefi yok, yatay kaydırma yok. 760 px üstünde masaüstü düzenine geçer.
