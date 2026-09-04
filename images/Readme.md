# Folder `images/` — Foto Lokal

Folder ini untuk foto profil & cover lokal kamu. Saat ini **kosong**, jadi `js/config.js` masih memakai URL Unsplash remote:

```js
profileUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=75&w=512&auto=format&fit=crop&crop=faces",
coverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=70&w=1200&auto=format&fit=crop",
```

Kalau kamu upload file ke sini dan mengubah `config.js` ke path lokal, `js/script.js` otomatis mendeteksinya (lihat fungsi `loadProgressive()`, `script.js:58-106`): URL yang **tidak** mengandung `images.unsplash.com` langsung dipasang sebagai `src` tanpa parameter `w`/`q`/`auto`/`fit`.

## Cara Pakai

1. Taruh file di sini, misal:
   - `images/profile.jpg` (disarankan square 512×512, <200KB)
   - `images/cover.jpg` (disarankan 1280×720 / 16:9, <300KB)
2. Edit `js/config.js`:

```js
profileUrl: "images/profile.jpg",
coverUrl: "images/cover.jpg",
```

3. Refresh `index.html`. Selesai — tidak perlu edit `script.js` / `style.css`.

> Path relatif: karena `index.html` ada di `/public`, tulis `images/namafile.jpg` (bukan `/images/...` dan bukan `public/images/...`).

## Aturan Ukuran (sesuai kode)

Kode didesain hemat byte, jadi samakan ukuran file lokalmu dengan yang diminta kode:

| Slot | Tampil di layar | Ukuran file ideal | Kenapa |
|---|---|---|---|
| Profil (`#domProfile`) | 120×120 bulat (`style.css:82`, `script.js:138-142`) | 512×512 JPG/WebP, q ~75, <200KB | 512px = 2x retina dari 120px, sudah tajam. Srcset remote memakai `[256, 512]`. |
| Cover (`#domCover`) | max 520px, rasio 16:9 (`style.css:70`, `script.js:144-148`) | 1280×720 JPG/WebP, q ~70, <300KB | Srcset remote memakai `[640, 960, 1200]`. |

Jangan upload foto 3000px / 2-5MB — hanya memperlambat load tanpa terlihat lebih tajam.

## Format & Nama File

- Format yang didukung browser: `.jpg` / `.jpeg`, `.png`, `.webp`, `.avif`. Disarankan `.jpg` untuk foto, `.webp` kalau mau lebih kecil.
- Nama kecil, tanpa spasi: `profile.jpg`, `cover.jpg` (bukan `Foto Saya (1).JPG`).
- Format otomatis terdeteksi dari isi file, tapi ekstensi harus benar.

## Perilaku Penting (dari `script.js`)

- **File tidak ketemu (404) / URL kosong / tidak valid** → gambar disembunyikan otomatis (`img.style.display = 'none'`, lihat `setImage()` di `script.js:30-40` dan `loadProgressive()` di `script.js:65-70`). Jadi tidak akan tampil ikon broken-image.
- **File lokal tidak dapat preview blur + srcset otomatis.** Efek blur-up progressive + srcset (`previewW`, `srcsetWidths`, `sizes`) hanya jalan untuk URL Unsplash (cabang `fullUrl.includes('images.unsplash.com')`). File lokal langsung full-res + class `is-loaded` saat `onload`.
- **Hanya `http(s)` atau path relatif yang lolos** (`isSafeHttpUrl()`, `script.js:21-28`). Jangan isi dengan `data:`, `blob:`, atau `javascript:`.
- **Cover** memakai `object-fit: cover` dan **profil** memakai `object-fit: cover` + bulat (`style.css:73,82`), jadi foto portrait/landscape otomatis di-crop tengah. Idealnya upload profil square dan cover 16:9 agar tidak kepotong wajah.

## Contoh Lengkap

```
images/
├── README.md        # file ini
├── profile.jpg      # foto kamu
└── cover.jpg        # banner kamu
```

```js
// js/config.js
const CONFIG = {
  name: "Malik",
  username: "amalikqx",
  bio: "...",
  profileUrl: "images/profile.jpg",
  coverUrl: "images/cover.jpg",
  socials: { /* ... */ }
};
```

Mau kembali ke Unsplash? Kembalikan dua baris itu ke URL `https://images.unsplash.com/...` seperti semula.
