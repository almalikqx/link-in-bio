const ICONS = {
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>`,
  threads: `<svg viewBox="0 0 192 192" fill="currentColor" aria-hidden="true"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19445 47.2921 9.6418 32.7883 28.013C19.4555 44.9093 12.7937 67.9255 12.5694 95.8456L12.5658 96.002L12.5694 96.1584C12.7937 124.075 19.4555 147.091 32.7883 163.987C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21l-6.522 7.45L22 22h-6.796l-4.766-6.23L4.8 22H2.044l7.006-7.99L2 2h6.914l4.31 5.71L18.244 2zm-2.388 18h1.878L7.006 4H5.017l10.839 16z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/></svg>`,
  default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
};

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

function isSafeHttpUrl(url) {
  try {
    const parsed = new URL(url, location.href);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function setImage(img, url, fallbackHide) {
  if (!img) return;
  if (!url || !isSafeHttpUrl(url)) {
    // URL kosong / tidak valid: sembunyikan agar tidak tampil broken image
    img.style.display = 'none';
    if (fallbackHide) fallbackHide.style.display = 'none';
    return;
  }
  img.onerror = () => { img.style.display = 'none'; };
  img.src = url;
}

// --- Optimasi gambar: pecah jadi preview kecil + full-res (<2MB) ---
// preview ~2-5KB langsung tampil blur, full-res menimpa setelah download.
// Ini yang bikin "langsung kebuka" walau internet lambat.
function unsplashVariant(url, w, q) {
  try {
    const u = new URL(url);
    u.searchParams.set('w', String(w));
    u.searchParams.set('q', String(q));
    if (!u.searchParams.get('auto')) u.searchParams.set('auto', 'format');
    if (!u.searchParams.get('fit')) u.searchParams.set('fit', 'crop');
    return u.toString();
  } catch {
    return url;
  }
}

function loadProgressive(img, fullUrl, opts = {}) {
  if (!img || !fullUrl || !isSafeHttpUrl(fullUrl)) {
    setImage(img, fullUrl);
    return;
  }
  // File lokal (folder images/): langsung tampilkan tanpa parameter Unsplash.
  // Kalau file belum diupload (404), sembunyikan agar tidak tampil rusak.
  if (!fullUrl.includes('images.unsplash.com')) {
    img.onload = () => img.classList.add('is-loaded');
    img.onerror = () => { img.style.display = 'none'; };
    img.src = fullUrl;
    if (img.complete && img.naturalWidth) img.classList.add('is-loaded');
    return;
  }
  const { previewW = 32, previewQ = 10, srcsetWidths = [], sizes = '' } = opts;

  // 1. Pasang srcset/sizes dulu agar browser pilih resolusi yang pas (hemat byte)
  if (srcsetWidths.length) {
    img.srcset = srcsetWidths.map((w) => `${unsplashVariant(fullUrl, w, 70)} ${w}w`).join(', ');
    if (sizes) img.sizes = sizes;
  }

  // 2. Tampilkan preview mungil seketika (~2KB)
  img.classList.remove('is-loaded');
  img.src = unsplashVariant(fullUrl, previewW, previewQ);

  // 3. Preload full-res di background, lalu swap tanpa kedip
  const preloader = new Image();
  if (srcsetWidths.length) {
    preloader.srcset = img.srcset;
    if (sizes) preloader.sizes = sizes;
  }
  preloader.decoding = 'async';
  preloader.onload = () => {
    img.src = fullUrl;
    // kalau sudah cached, onload img mungkin tidak fire -> paksa tandai loaded
    const mark = () => img.classList.add('is-loaded');
    if (img.complete && img.naturalWidth) mark();
    else { img.onload = mark; img.onerror = () => img.classList.add('is-loaded'); }
  };
  preloader.onerror = () => {
    // Gagal preload? tetap coba tampilkan full langsung
    img.src = fullUrl;
    img.classList.add('is-loaded');
  };
  preloader.src = fullUrl;

  img.onerror = () => { img.style.display = 'none'; };
}

function initProfile() {
  // Guard: config.js gagal load / CONFIG tidak ada
  if (typeof CONFIG === 'undefined' || !CONFIG) {
    console.error('CONFIG tidak ditemukan. Pastikan config.js ter-load sebelum script.js.');
    return;
  }

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  };

  setText('domName', CONFIG.name);
  // Tulis handle bersih (tanpa @ ganda). Sengaja ditulis ke seluruh badge .username,
  // bukan ke #domUsername saja, agar sisa markup lama yang ke-cache (ikon + @ statis)
  // ikut terbuang otomatis saat JS baru jalan.
  const cleanHandle = '@' + (CONFIG.username || '').trim().replace(/^@+/, '');
  const badge = document.querySelector('.username');
  if (badge) {
    badge.querySelectorAll('svg').forEach((el) => el.remove());
    badge.textContent = cleanHandle;
  } else {
    setText('domUsername', cleanHandle);
  }
  setText('domBio', CONFIG.bio);
  setText('currentYear', new Date().getFullYear());

  if (CONFIG.username) document.title = CONFIG.username;

  // Profil tampil 120px -> srcset 256/512 (retina tajam, total <100KB, bukan 2MB)
  loadProgressive(document.getElementById('domProfile'), CONFIG.profileUrl, {
    previewW: 32, previewQ: 10,
    srcsetWidths: [256, 512],
    sizes: '120px'
  });
  // Cover tampil max 520px -> srcset 640/960/1200 (tajam di HP+desktop, ~100-150KB)
  loadProgressive(document.getElementById('domCover'), CONFIG.coverUrl, {
    previewW: 64, previewQ: 10,
    srcsetWidths: [640, 960, 1200],
    sizes: '(max-width: 520px) 100vw, 520px'
  });

  const container = document.getElementById('socialContainer');
  if (!container) return;
  container.innerHTML = '';

  const socials = CONFIG.socials && typeof CONFIG.socials === 'object' ? CONFIG.socials : {};
  const username = (CONFIG.username || '').trim().replace(/^@+/, '');

  for (const [key, rawUrl] of Object.entries(socials)) {
    if (typeof rawUrl !== 'string') continue;
    const url = rawUrl.trim();
    if (!url || !isSafeHttpUrl(url)) continue;

    const handle = '@' + username;
    let nameLabel = key.charAt(0).toUpperCase() + key.slice(1);
    if (nameLabel.toLowerCase() === 'x') nameLabel = 'X (Twitter)';

    const iconSvg = ICONS[key] || ICONS.default;

    const linkEl = document.createElement('a');
    linkEl.className = 'social-link';
    linkEl.href = url;
    linkEl.target = '_blank';
    linkEl.rel = 'noopener noreferrer';
    linkEl.setAttribute('aria-label', `${nameLabel} ${handle}`);
    linkEl.innerHTML = `
      <span class="social-icon" aria-hidden="true">${iconSvg}</span>
      <span class="social-info">
        <span class="social-name">${escapeHtml(nameLabel)}</span>
        <span class="social-handle">${escapeHtml(handle)}</span>
      </span>
    `;
    container.appendChild(linkEl);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProfile);
} else {
  // Script di akhir body + DOM sudah siap: jalan langsung, tidak nunggu event (lebih cepat 100-300ms)
  initProfile();
}
