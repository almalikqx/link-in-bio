#  — Link-in-Bio

Halaman profil link-in-bio statis, cepat, dan responsif. Tanpa build step, tanpa dependency. Cukup edit `js/config.js`, semua teks, foto, dan tombol sosial ke-render otomatis oleh `js/script.js`.

Live structure:

```
/public
├── indealmalikqxx.html      # Struktur + meta SEO/OG + load CSS/JS
├── css/style.css   # Tema glassmorphism dark-blue + animasi
├── js/config.js    # SATU-SATUNYA file yang perlu kamu edit
├── js/script.js    # Render engine (jangan edit kecuali mau ubah perilaku)
└── images/         # Taruh foto lokal di sini (opsional, lihat images/README.md)
```

## Cara Pakai (2 menit)

1. Buka `js/config.js`:

```js
const CONFIG = {
  name: "Malik",
  username: "amalikqx",
  bio: "Software Engineer & UI Designer. Suka ngopi dan ngoding tengah malam.",
  profileUrl: "https://images.unsplash.com/photo-...?q=75&w=512&auto=format&fit=crop&crop=faces",
  coverUrl: "https://images.unsplash.com/photo-...?q=70&w=1200&auto=format&fit=crop",
  socials: {
    youtube: "https://www.youtube.com/@amalikqx",
    facebook: "https://www.facebook.com/almalikqx",
    instagram: "https://www.instagram.com/almalikqx",
    threads: "https://www.threads.com/@almalikqx",
    x: "https://x.com/almalikqx",
    tiktok: "https://www.tiktok.com/@amalikqx"
  }
};
```

2. Ganti `name`, `username` (tanpa `@`, otomatis ditambah `@` oleh script), `bio`, `profileUrl`, `coverUrl`.
3. Tambah/hapus key di `socials` untuk tambah/hapus tombol. Key yang dikenal punya ikon SVG bawaan: `youtube`, `facebook`, `instagram`, `threads`, `x`, `tiktok`. Key lain otomatis pakai ikon link generik (`ICONS.default` di `script.js`).
4. Buka `index.html` langsung di browser, atau serve lokal:

```bash
# dari folder /public
python3 -m http.server 8000
# buka http://localhost:8000
```

Tidak perlu `npm install` / build.

## Cara Kerja Kode

### `index.html`
- Elemen dengan ID yang diisi JS: `domCover` (img cover), `domProfile` (img profil 120x120), `domName`, `domUsername` (di dalam badge `.username`), `domBio`, `socialContainer` (nav tempat tombol sosial di-generate), `currentYear`.
- Optimasi load: `fetchpriority="high"`, `loading="eager"`, `decoding="async"`, preconnect ke `images.unsplash.com` + Google Fonts.
- Load order penting: `js/config.js` dulu, baru `js/script.js`.
- Cover + profil pakai class `blur-up` untuk efek blur-up progressive (lihat bawah).

### `js/script.js` — `initProfile()`
1. Guard kalau `CONFIG` tidak ada → log error, berhenti.
2. `setText()`: isi `domName`, `domBio`, `currentYear` (tahun otomatis).
3. Username: dibersihkan dari `@` ganda (`replace(/^@+/, '')`), ditulis sebagai `@username` ke seluruh badge `.username` (SVG lama dihapus agar tidak dobel saat cache lama).
4. `document.title` diganti jadi `CONFIG.username`.
5. Foto dimuat via `loadProgressive()`:
   - Profil: `previewW: 32, previewQ: 10, srcsetWidths: [256, 512], sizes: '120px'`
   - Cover: `previewW: 64, previewQ: 10, srcsetWidths: [640, 960, 1200], sizes: '(max-width: 520px) 100vw, 520px'`
6. Sosial: loop `Object.entries(CONFIG.socials)`, skip yang kosong / bukan `http(s)`. Setiap tombol `<a class="social-link" target="_blank" rel="noopener noreferrer">` berisi ikon + nama + `@username`. Nama `x` otomatis dilabeli `X (Twitter)`. Semua teks di-escape via `escapeHtml()` anti-XSS.

### Fungsi pendukung di `script.js`
- `isSafeHttpUrl(url)`: hanya izinkan `http:`/`https:`. URL kosong/invalid → gambar disembunyikan (`display: none`) agar tidak tampil broken-image.
- `setImage(img, url)`: fallback sederhana + sembunyikan saat error.
- `unsplashVariant(url, w, q)`: utak-atik query Unsplash (`w`, `q`, paksa `auto=format`, `fit=crop`) untuk bikin preview kecil & srcset.
- `loadProgressive(img, fullUrl, opts)`:
  - Kalau URL **bukan** `images.unsplash.com` (misal file lokal `images/foto.jpg`) → langsung pasang `src`, tanpa parameter Unsplash. Kalau 404 → sembunyikan.
  - Kalau URL Unsplash → pasang `srcset` dulu, tampilkan preview mungil (~2KB, blur), preload full-res di background via `new Image()`, lalu swap tanpa kedip + tambah class `is-loaded` (menghilangkan blur di CSS).

### `css/style.css`
- Tema: background gradient dark navy (`#020617` → `#082F4E` → `#0C4A6E`), 3 blob animasi `float 20s`, noise overlay via `body::before`, kartu glassmorphism (`--glass-bg`, `--glass-border`, `backdrop-filter: blur(20px)`).
- Layout: `.container max-width: 520px`, cover `aspect-ratio: 16/9`, profil 120px overlap `-60px` dengan ring gradient + glow `--shadow-profile`.
- State gambar: `.blur-up { filter: blur(12px); opacity: 0.7 }` → `.blur-up.is-loaded { filter: blur(0); opacity: 1 }`. Shimmer loading via `.cover-wrap::before`.
- Sosial: grid 1 kolom, hover naik `-2px` + ikon gradient cyan, active scale `0.99`. Support `prefers-reduced-motion: reduce` (animasi dimatikan).
- Aksen utama: `--accent: #22D3EE` (cyan). Ganti satu variabel ini untuk ganti tema.

## Ganti Foto: Unsplash vs Lokal

- Default memakai Unsplash dengan aturan hemat byte (lihat komentar di `config.js`): profil tampil 120px → minta `w=512`, cover tampil max 520px → minta `w=1200`, selalu `auto=format` (WebP/AVIF otomatis, 30-50% lebih kecil).
- Untuk pakai foto sendiri, taruh di `images/` lalu isi config dengan path relatif. Detail lengkap di [`images/README.md`](images/README.md).

```js
profileUrl: "images/profile.jpg",
coverUrl: "images/cover.jpg",
```

## Kustomisasi Cepat

| Mau apa | File : baris |
|---|---|
| Ganti nama/bio/sosial | `js/config.js:1-22` |
| Ganti warna aksen | `css/style.css:2` `--accent` |
| Ubah ukuran profil/cover | `css/style.css:70-84` + `js/script.js:138-148` (srcset harus ikut) |
| Tambah ikon sosial baru | `js/script.js:1-9` tambah key di `ICONS` |
| Ubah meta SEO/OG/favicon | `index.html:7-16` |

## Deploy

Ini situs statis — upload isi `/public` apa adanya ke GitHub Pages / Netlify / Vercel / shared hosting. Pastikan struktur relatif tetap (`css/`, `js/`, `images/`) karena `index.html` memanggilnya dengan path relatif (`css/style.css`, `js/config.js`).

## Catatan Keamanan

- `script.js` menolak URL non-http(s) (`javascript:`, `data:` otomatis diblok) dan meng-escape semua label sosial. Jangan bypass `isSafeHttpUrl()` / `escapeHtml()`.
