# PLAN — Rombak Ulang Website alfandhy.my.id

> Dokumen rencana kerja untuk dikerjakan bersama AI agent di **Antigravity**.
> Kerjakan **per fase**, centang checklist setiap tugas selesai, dan jangan lanjut ke fase berikutnya sebelum *acceptance criteria* fase itu terpenuhi.

---

## 0. Konteks Proyek

**Pemilik:** Alfandhy, S.T. (Fandhy)
**Domain:** `alfandhy.my.id`
**Tujuan:** Website portofolio pribadi dengan identitas utama **AI Enthusiast**, yang menghubungkan semua bidang: pendidikan, desain, microstock, dan game development.

**Benang merah (tagline):**
> "Menggabungkan AI, desain, dan pendidikan untuk menghidupkan ide."

**Profil singkat (untuk konten):**
- AI Enthusiast & Prompt Engineer
- Guru SMK Negeri Tapango, Polewali Mandar, Sulawesi Barat (Mikroprosesor, DKV, Desain Brief, Informatika)
- Founder **SMEGTA MEDIA**, kontributor Adobe Stock dan unit ekstrakurikuler sekolah
- Graphic Designer
- Game Developer, sedang membangun **Sandeq Rush** (game balap perahu Sandeq Mandar untuk Android)
- Pendidikan: S1 Informatika (S.T.) dan PPG

**Target pengunjung:**
1. Pemain game yang datang dari tombol di dalam Sandeq Rush (mayoritas membuka lewat **HP**)
2. Klien atau kolaborator desain dan AI
3. Rekan guru, komunitas, dan instansi pendidikan
4. Pembeli microstock

---

## 1. Tech Stack

| Bagian | Pilihan | Alasan |
|---|---|---|
| Framework | **Astro** (static output) | Cepat, SEO bagus, gampang menambah halaman atau konten Markdown |
| Styling | **Tailwind CSS** | Konsisten dan cepat |
| Animasi | CSS + sedikit JS (opsional GSAP untuk hero) | Ringan |
| Konten | Markdown/MDX di `src/content/` (Content Collections) | Menambah karya atau artikel tanpa menyentuh kode |
| Hosting | **Cloudflare Pages** (alternatif: Netlify) | Gratis, SSL otomatis, CDN |
| Analytics | Google Analytics 4 atau Cloudflare Web Analytics | Melacak pengunjung, termasuk yang datang dari game |
| Form kontak | Formspree / Web3Forms | Tanpa backend |

> Kalau website lama punya konten yang masih dipakai, **backup dulu** semua file dan aset sebelum mulai (lihat Fase 0).

---

## 2. Peta Situs (Sitemap)

```
/                              → Beranda (identitas AI Enthusiast)
/about                         → Tentang: latar belakang, pekerjaan, keahlian
/work                          → Hub karya (filter: Design / Stock / AI)
/work/[slug]                   → Detail studi kasus satu karya
/game                          → Daftar game
/game/sandeq-rush               → Landing page Sandeq Rush
/game/sandeq-rush/privacy       → Privacy Policy Sandeq Rush (WAJIB untuk Play Store)
/edu                           → Materi & media ajar (explainer, modul)
/blog                          → Devlog & artikel (fase akhir)
/blog/[slug]                   → Detail artikel
/contact                       → Kontak & kolaborasi
/404                           → Halaman tidak ditemukan
```

**Navigasi utama (header):** Home · Work · Games · Edu · About · Contact
**Footer:** ajakan kontak + email besar, link sosial media (teks), link Privacy, "© 2026 Alfandhy — Polewali Mandar"

---

## 3. Design System — "Editorial + Aksen Mandar"

**Konsep:** website ini dibaca seperti **majalah desain**, bukan landing page startup.
Terang, tenang, tipografi besar, banyak ruang kosong, dan karya nyata sebagai pusat perhatian.
Identitas lokal (layar perahu Sandeq, laut Mandar) hadir lewat **warna aksen**, bukan dekorasi.
Profesional karena **menahan diri**: satu aksen, dua font, garis tipis, tanpa efek.

**Warna (CSS variables / Tailwind theme):**
```
--paper:     #F4F1EA   (latar utama, putih tulang hangat)
--paper-2:   #EAE5DA   (blok latar sekunder, sangat jarang dipakai)
--ink:       #16140F   (teks utama, hampir hitam hangat)
--ink-2:     #5C574D   (teks sekunder)
--rule:      #D6D0C3   (garis pemisah 1px)
--accent:    #C2410C   (oranye-bata "layar Sandeq" — SATU-SATUNYA warna aksen)
--sea:       #1E3A4C   (biru laut tua — hanya untuk blok Sandeq Rush / footer)
```
Mode gelap opsional: tukar `--paper` ↔ `#14130F` dan `--ink` ↔ `#EDE9DF`, aksen tetap.

**Tipografi (Google Fonts):**
- Display/judul: **Fraunces** (serif berkarakter; pakai ukuran besar, `opsz` tinggi, weight 400–500, bukan bold tebal)
- Body & UI: **Geist** atau **IBM Plex Sans**
- Label kecil/nomor bagian: **IBM Plex Mono**, huruf kapital, `letter-spacing: .08em`, ukuran 12–13px

**Skala tipe (desktop → mobile):**
```
Display  : clamp(3rem, 8vw, 7.5rem)  / line-height 0.95 / tracking -0.02em
H2       : clamp(2rem, 4vw, 3.25rem) / 1.05
H3       : 1.375rem / 1.3
Body     : 1.0625rem / 1.65, maksimal 65 karakter per baris
Label    : 0.8125rem mono uppercase
```

**Tata letak:**
- Grid 12 kolom, max-width 1280px, gutter 24px; **asimetris** (mis. judul kolom 1–5, isi kolom 7–12).
- Setiap section dibuka dengan label bernomor: `01 — Karya Terpilih`, `02 — Tentang`, dst., dengan garis 1px `--rule` di atasnya.
- Spacing vertikal antar section besar (120–160px desktop, 80px mobile).
- Gambar karya tampil **besar** (lebar penuh atau 2/3 kolom), rasio konsisten, tanpa bayangan.

**Komponen dasar yang harus dibuat:**
- `Header` (sederhana: nama di kiri, 4–5 link teks di kanan, tidak transparan-blur; menu teks penuh layar di mobile)
- `Footer` (blok `--sea` dengan email besar sebagai CTA)
- `SectionLabel` (nomor + judul mono + garis)
- `WorkRow` (satu karya per baris: nomor, judul serif, kategori, tahun, gambar besar)
- `Link` (garis bawah tipis yang menebal saat hover — bukan tombol pil)
- `Button` (hanya dipakai untuk aksi utama; kotak, radius 2px, latar `--ink`)
- `Tag` (teks mono kecil dengan border 1px, tanpa warna isi)
- `Timeline` (tahun di kolom kiri, isi di kanan, dipisah garis)
- `SEO` (meta, Open Graph, Twitter card)

**Aturan gerak:**
- Maksimal 2 jenis animasi: teks/gambar muncul perlahan saat scroll (opacity + translate 12px, 600ms) dan gambar sedikit membesar saat hover (scale 1.02).
- Tidak ada animasi latar, partikel, kursor kustom, atau efek mengetik.
- Hormati `prefers-reduced-motion`.

**Aturan umum:**
- Mobile-first, uji di lebar 360px.
- Radius kecil (0–4px) di seluruh situs.
- Kontras teks minimal WCAG AA.

### 3.1 DAFTAR LARANGAN (anti "AI slop") — WAJIB DIPATUHI
- ❌ Gradien biru/ungu/teal, teks bergradien, efek glow/neon
- ❌ Glassmorphism, `backdrop-blur` dekoratif
- ❌ Latar partikel, neural network, grid futuristik, blob animasi
- ❌ Inter, Space Grotesk, Poppins, Montserrat sebagai font judul
- ❌ Grid 3–4 kartu identik dengan ikon di atasnya ("layanan saya")
- ❌ Emoji di UI, ikon roket/bintang/kilat/sparkle, badge "✨ AI-powered"
- ❌ Kata klise: *Unleash, Revolutionary, Transform, Cutting-edge, Passionate, Innovative solutions, Elevate*
- ❌ Semua section berpola sama (judul tengah → subjudul → kartu)
- ❌ Radius besar + bayangan di semua elemen, tombol pil berwarna-warni
- ❌ Baris logo tools berwarna-warni (kalau perlu, tulis nama tools sebagai teks biasa)
- ❌ Statistik palsu ("100+ projects", "99% satisfaction")
- ❌ Gambar stok atau avatar AI sebagai foto profil — pakai foto asli

**Referensi gaya** (cari dan simpan 2–3 screenshot ke `/docs/ref/`): siteinspire.com, minimal.gallery, godly.website. Kata kunci: *editorial portfolio, serif, designer portfolio*.

---

## 4. Spesifikasi Halaman

### 4.1 Beranda `/`

1. **Hero tipografi** (tanpa animasi latar)
   - Label mono kecil: `AI ENTHUSIAST — POLEWALI MANDAR, SULAWESI BARAT`
   - Display serif besar, 2–3 baris: *"Alfandhy. Saya memakai AI untuk mendesain, mengajar, dan membangun game."*
   - Kolom kanan/bawah: foto asli (rasio 4:5, sedikit desaturasi) dan 2 baris teks singkat, ditambah link teks *Lihat karya →*
2. **01 — Karya Terpilih:** 3–4 karya, **satu per baris** (`WorkRow`), Sandeq Rush paling atas. Ambil dari content collection `featured: true`.
3. **02 — Cara saya bekerja dengan AI:** **satu paragraf esai** (60–100 kata, suara pribadi) di kolom kanan, dan daftar sederhana di kolom kiri: *Desain & microstock · Pendidikan · Game · Prompt engineering*. Bukan kartu.
4. **03 — Sekarang:** 2–3 baris tentang apa yang sedang dikerjakan (mis. "Membangun Sandeq Rush untuk Android · Mengajar DKV & Mikroprosesor"). Memberi kesan hidup dan jujur.
5. **Footer `--sea`:** kalimat *"Punya proyek atau ingin berkolaborasi?"* dan alamat email dalam ukuran besar sebagai link.

### 4.2 About `/about`

1. **Intro:** foto dan satu paragraf cerita personal (asal Polewali Mandar, awal tertarik AI)
2. **Latar Belakang (timeline pendidikan):**
   - S1 Informatika (S.T.)
   - Pendidikan Profesi Guru (PPG)
   - Sertifikat/pelatihan AI *(isi jika ada)*
3. **Pekerjaan & Pengalaman (timeline):**
   - Guru SMK Negeri Tapango: Mikroprosesor, DKV, Desain Brief, Informatika
   - Founder SMEGTA MEDIA: kontributor Adobe Stock dan ekstrakurikuler
   - Game Developer: Sandeq Rush
   - Komunitas/pelatihan *(opsional, mis. Kombel)*
4. **Keahlian** (tag/badge per kelompok, **tanpa** progress bar persen):
   - **AI:** Prompt Engineering, AI Image/Video Generation, AI Persona
   - **Desain:** Desain Grafis, DKV, Motion Graphic
   - **Teknis:** Informatika, Mikroprosesor, Web, Game Development
   - **Pendidikan:** Media Ajar, Kurikulum Merdeka
5. **CTA:** **Unduh CV** (`/cv-alfandhy.pdf`) dan **Hubungi Saya**

### 4.3 Work `/work` dan `/work/[slug]`

- Grid kartu karya dengan filter kategori: **Semua · Design · Stock · AI**
- Detail karya menggunakan format studi kasus: **Masalah → Proses → Tools → Hasil** dan galeri gambar
- Bagian Stock memuat tombol menuju profil Adobe Stock SMEGTA MEDIA

**Schema content collection `work`:**
```yaml
title: string
slug: string
category: design | stock | ai
cover: image
date: date
tools: string[]
featured: boolean
summary: string
```

### 4.4 Games `/game`

- Kartu per game. Saat ini isinya Sandeq Rush, sisanya diberi label "Coming soon".

### 4.5 Landing Page Sandeq Rush `/game/sandeq-rush`

> **Penting:** halaman ini dibuka dari tombol di dalam game, jadi **wajib optimal di HP** dan cepat dimuat.

Gunakan tema khusus yang lebih cerah dan kartun, menyesuaikan gaya visual game (aksen `--warm`, laut biru).

1. **Hero:** logo Sandeq Rush, tagline, trailer/GIF gameplay, tombol **Download di Google Play** (badge resmi; sebelum rilis tampilkan "Segera Hadir")
2. **Tentang Perahu Sandeq:** cerita singkat budaya Mandar sebagai nilai unik game
3. **Fitur Game:** 3–4 kartu (balapan, etape, upgrade perahu, dll.)
4. **Screenshot / Etape:** galeri yang bisa digeser (swipe)
5. **Info Hak Cipta:** "Terdaftar di DJKI" *(tampilkan setelah sertifikat terbit)*
6. **Kredit & Kontak:** developer, sosial media, link Privacy Policy

**Tracking:** URL dari game menggunakan `?src=game`. Pastikan analytics mencatat parameter ini, termasuk event klik tombol Play Store.

**Kode tombol di dalam game (referensi):**
- Godot: `OS.shell_open("https://alfandhy.my.id/game/sandeq-rush?src=game")`
- Unity: `Application.OpenURL("https://alfandhy.my.id/game/sandeq-rush?src=game")`

### 4.6 Privacy Policy `/game/sandeq-rush/privacy`

- Bahasa Indonesia dan Inggris
- Isi: data yang dikumpulkan (sesuaikan dengan SDK yang dipakai: iklan, analytics), tujuan penggunaan, pihak ketiga, privasi anak, kontak, dan tanggal berlaku
- Halaman harus bisa diakses publik tanpa login. URL ini akan diisi di Google Play Console.

### 4.7 Edu `/edu`

- Daftar video explainer (embed YouTube) dan materi ajar publik
- Kartu berisi judul, mapel, kelas, dan link

### 4.8 Blog `/blog` *(fase akhir)*

- Devlog Sandeq Rush, tutorial AI, dan catatan desain
- Content collection `blog` (title, date, tags, cover, summary)

### 4.9 Contact `/contact`

- Form: nama, email, jenis kebutuhan (Desain / AI / Game / Pelatihan / Lainnya), pesan
- Link langsung: email, WhatsApp, Instagram, YouTube, Adobe Stock

---

## 5. SEO & Teknis Wajib

- [ ] `<title>` dan `meta description` unik per halaman
- [ ] Open Graph + Twitter Card (gambar 1200×630) agar preview di WhatsApp rapi
- [ ] `sitemap.xml` (`@astrojs/sitemap`) dan `robots.txt`
- [ ] Favicon + `apple-touch-icon` + `manifest.webmanifest`
- [ ] Schema.org JSON-LD: `Person` (beranda/about) dan `VideoGame` (Sandeq Rush)
- [ ] Gambar dalam format WebP/AVIF dengan `loading="lazy"` (pakai `astro:assets`)
- [ ] `lang="id"` di `<html>`
- [ ] Target Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- [ ] HTTPS aktif dan redirect `www` → non-www

---

## 6. Struktur Folder Proyek

```
alfandhy-web/
├── public/
│   ├── favicon.svg
│   ├── og-default.png
│   ├── cv-alfandhy.pdf
│   └── robots.txt
├── src/
│   ├── components/      (Header, Footer, Button, Card, Tag, Timeline, SEO, ...)
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── GameLayout.astro      (tema khusus Sandeq Rush)
│   ├── content/
│   │   ├── config.ts
│   │   ├── work/
│   │   ├── blog/
│   │   └── edu/
│   ├── assets/          (gambar yang dioptimasi)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   ├── work/index.astro
│   │   ├── work/[slug].astro
│   │   ├── game/index.astro
│   │   ├── game/sandeqrush/index.astro
│   │   ├── game/sandeqrush/privacy.astro
│   │   ├── edu/index.astro
│   │   └── blog/...
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 7. Fase Pengerjaan & Checklist

### Fase 0 — Persiapan
- [ ] Backup website lama (file, gambar, konten yang masih dipakai)
- [ ] Kumpulkan aset: foto profil, logo, screenshot Sandeq Rush, 6–10 karya terbaik, CV PDF
- [ ] Tulis daftar link sosial media & Adobe Stock
- [ ] Buat repo GitHub `alfandhy-web`

**Selesai bila:** semua aset ada di satu folder dan repo sudah dibuat.

### Fase 1 — Fondasi
- [ ] Init Astro + Tailwind + sitemap
- [ ] Atur design tokens (warna, font) di Tailwind config
- [ ] Buat `BaseLayout`, `Header`, `Footer`, komponen `SEO`
- [ ] Buat komponen dasar (Button, Card, Tag, SectionTitle, Timeline)
- [ ] Deploy awal ke Cloudflare Pages dan sambungkan domain `alfandhy.my.id`

**Selesai bila:** halaman kosong dengan header/footer tampil di domain asli lewat HTTPS.

### Fase 2 — Beranda, About, Contact
- [ ] Bangun Beranda sesuai 4.1
- [ ] Bangun About sesuai 4.2
- [ ] Bangun Contact + form berfungsi (uji kirim pesan)
- [ ] Halaman 404

**Selesai bila:** ketiga halaman responsif di 360px, 768px, dan 1440px, dan form kontak berhasil mengirim email.

### Fase 3 — Sandeq Rush (prioritas sebelum rilis Play Store)
- [ ] Buat `GameLayout` dengan tema cerah
- [ ] Landing page sesuai 4.5
- [ ] Privacy Policy sesuai 4.6
- [ ] Pasang analytics + event klik "Download"
- [ ] Uji akses `.../game/sandeq-rush?src=game` dari HP Android

**Selesai bila:** halaman cepat di HP (Lighthouse mobile ≥ 90) dan URL privacy siap diisi di Play Console.

### Fase 4 — Work & Edu
- [ ] Content collection `work` + `edu`
- [ ] Halaman `/work` dengan filter + `/work/[slug]`
- [ ] Isi minimal 6 karya (Design, Stock, AI)
- [ ] Halaman `/edu` dengan minimal 2 materi

**Selesai bila:** menambah karya baru cukup dengan membuat satu file `.md`.

### Fase 5 — Blog & Polish
- [ ] Content collection `blog` + halaman list/detail
- [ ] Artikel pertama: devlog Sandeq Rush
- [ ] JSON-LD, OG image per halaman
- [ ] Audit Lighthouse dan aksesibilitas, lalu perbaiki temuan
- [ ] (Opsional) versi Bahasa Inggris untuk halaman game & work

**Selesai bila:** semua checklist di bagian 5 tercentang.

---

## 8. Instruksi untuk AI Agent (Antigravity)

Salin bagian ini sebagai prompt awal:

```
Kamu membantu saya membangun ulang website portofolio pribadi alfandhy.my.id
berdasarkan file PLAN-alfandhy-website.md di root proyek.

Aturan:
1. Kerjakan SATU fase dalam satu waktu, sesuai urutan di bagian 7.
2. Sebelum menulis kode, ringkas rencana fase tersebut dan tunggu persetujuan saya.
3. Ikuti design system di bagian 3 secara ketat (warna, font, komponen).
4. Mobile-first; uji tampilan di lebar 360px.
5. Semua teks konten dalam Bahasa Indonesia kecuali disebutkan lain.
6. Jangan menambah library di luar tech stack bagian 1 tanpa bertanya.
7. Setelah fase selesai, centang checklist di file PLAN ini dan
   tunjukkan cara saya menguji hasilnya.
8. Gunakan placeholder yang jelas ([FOTO PROFIL], [LINK INSTAGRAM])
   untuk aset yang belum saya berikan.
9. Patuhi DAFTAR LARANGAN di bagian 3.1 tanpa pengecualian. Sebelum
   menyerahkan hasil, periksa sendiri setiap poin larangan itu dan
   laporkan bahwa semuanya sudah dicek.
10. Kerjakan Beranda dulu sampai saya setujui gayanya, baru halaman lain
    mengikuti gaya yang sama. Jika ada prototype-beranda.html di /docs,
    jadikan itu acuan visual utama.

Mulai dari Fase 0 dan Fase 1.
```

---

## 9. Data yang Perlu Dilengkapi Pemilik

- [ ] Foto profil (resolusi tinggi)
- [ ] Logo pribadi / Alfandhy Studio
- [ ] Link: Instagram, YouTube, TikTok, LinkedIn, Adobe Stock, email, WhatsApp
- [ ] CV terbaru (PDF)
- [ ] Daftar sertifikat/pelatihan AI
- [ ] Karya terbaik + deskripsi singkat masing-masing
- [ ] Aset Sandeq Rush: logo, screenshot, trailer/GIF, link Play Store (setelah rilis)
- [ ] SDK yang dipakai di game (untuk isi Privacy Policy)