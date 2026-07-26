# SpeakUp ✈️ — Senaryolarla İngilizce

Havalimanı senaryolarıyla İngilizce pratik yapmak için hazırlanmış, **mobil öncelikli** statik web sitesi.
Şu an aktif senaryo: **Pasaport Kontrol (memur & yolcu)**. Tüm içerik A1'den C2'ye altı CEFR seviyesinde ayrı ayrı yazıldı.

## Neler var

| Bölüm | İçerik |
|---|---|
| 💬 Diyalog | Seviyeye özel memur–yolcu konuşması, Türkçe çeviri, kültürel notlar, satır satır veya baştan sona sesli dinleme |
| 📖 Okuma | Seviyeye uygun metin + kelime listesi + 3 soruluk anlama testi. Metindeki **her kelimeye dokunup** telaffuzunu dinleyebilirsin |
| 🧩 Gramer | O seviyede ve o senaryoda gerçekten işine yarayan 4 konu, örnekler ve pratik ipuçları |
| 🗣️ Telaffuz | Zor kelimeler, IPA yazımı, vurgu ipuçları + Türklerin klasik hata listesi |

Ekstra: TR çeviriyi tek düğmeyle kapatma, 0.7×–1.15× arası konuşma hızı, seçimlerin tarayıcıda hatırlanması.

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

Tüm içerik [`assets/js/data.js`](assets/js/data.js) içinde. İki adım:

1. `SCENARIOS` dizisine yeni senaryoyu ekle ve `ready: true` yap:

```js
{ id: "checkin", emoji: "🧳", title: "Check-in Bankosu", subtitle: "Havalimanı · Görevli & Yolcu", ready: true }
```

2. `CONTENT` içine aynı `id` ile altı seviyeyi doldur:

```js
CONTENT.checkin = {
  a1: { dialogue: {...}, reading: {...}, grammar: [...], pronunciation: [...] },
  a2: { ... }, b1: { ... }, b2: { ... }, c1: { ... }, c2: { ... }
};
```

Veri şeması `passport` senaryosunda birebir görülebilir. Arayüz tarafında hiçbir şey değiştirmen gerekmez.

## Dosya yapısı

```
index.html
assets/
  css/style.css     — tema, mobil düzen, bileşenler
  js/data.js        — tüm içerik (senaryo × seviye)
  js/app.js         — durum yönetimi, render, Web Speech API
.nojekyll
```

## Tasarım notları

- Koyu tema; pembe `#FF4D9D`, mor `#A855F7`, sarı `#FFD34E`.
- Başlıklar **Fredoka**, gövde **Outfit** — enerjik ve okunaklı, ders kitabı havası yok.
- iPhone 13 (390 × 844) referans alındı: alt sekme çubuğu, `safe-area-inset` desteği, 44 px'ten küçük
  dokunma hedefi yok, yatay kaydırma yok. 760 px üstünde masaüstü düzenine geçer.
