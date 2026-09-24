# Panduan Standar & Aturan Penulisan Artikel Blog
**Website**: Vendor Outbound Malang (`vendoroutboundmalang.web.id`)  
**File Acuan Master Template**: `blog/rekomendasi-lokasi-outbound-malang.html`

---

## 1. Aturan Wajib Meta Tags (Ketat & Terikat)

| Parameter | Batasan Maksimal | Ketentuan & Panduan | Contoh Sesuai Standar |
| :--- | :--- | :--- | :--- |
| **Meta Title (`<title>`)** | **Maksimal 60 Karakter & 60 Kata** (Tidak Boleh Lebih) | Judul harus padat, menarik, mengandung kata kunci utama dan nama daerah (Malang/Batu). Wajib identik dengan `og:title`, `twitter:title`, dan Schema `headline`. | `Rekomendasi Lokasi Outbound di Malang dan Sekitarnya` *(52 karakter, 7 kata)* |
| **Meta Description** | **Maksimal 160 Karakter & 160 Kata** (Tidak Boleh Lebih) | Ringkasan isi artikel dengan *value proposition* yang jelas dan mengundang klik (*high CTR*). Wajib identik dengan `og:description`, `twitter:description`, dan Schema `description`. | `Rekomendasi lokasi outbound di Malang: area pegunungan, area sungai, dan lokasi terbuka yang cocok untuk berbagai jenis kegiatan outdoor.` *(137 karakter, 19 kata)* |
| **URL Slug & Canonical** | Huruf kecil dengan tanda strip (`-`) | Format: `https://vendoroutboundmalang.web.id/blog/[slug-artikel]` | `https://vendoroutboundmalang.web.id/blog/rekomendasi-lokasi-outbound-malang` |
| **Meta Image (`og:image`, `twitter:image`, Schema `image`)** | **Wajib Sesuai Gambar / Slug Artikel** | URL gambar harus mengarah ke gambar utama artikel yang bersangkutan di folder `assets/img/blog/` (bukan gambar statis default). Format WebP rasio 16:9 (1200x675 / 1200x630). | `https://vendoroutboundmalang.web.id/assets/img/blog/rekomendasi-lokasi-outbound-malang.webp` |

---

## 2. Standar Desain & Layout Halaman (Master Template)

Seluruh halaman artikel baru di folder `blog/*.html` **wajib mengacu 100%** pada tampilan dan struktur DOM dari file master:
👉 **`blog/rekomendasi-lokasi-outbound-malang.html`**

### Struktur Komponen Wajib:

1. **Bagian `<head>` & SEO**:
   - Meta SEO lengkap: `charset`, `viewport`, `title` (≤ 60 chars), `description` (≤ 160 chars), `keywords`, `robots`, `author`, `canonical`, `geo.*`, `og:*`, `twitter:*`.
   - Resource Optimization: `preconnect` (Google Fonts, CDN jsdelivr), `preload` untuk gambar utama LCP dengan `fetchpriority="high"`.
   - Fonts & CSS: Outfit, Playfair Display, Plus Jakarta Sans, Bootstrap 5.3.3 CSS, dan `../assets/css/style.css`.
   - Structured Data: Schema.org `@graph` JSON-LD (`BreadcrumbList`, `LocalBusiness`, `Organization`, `BlogPosting`).

2. **Header & Navigasi**:
   - Skip to main content link: `<a href="#main-content" class="skip-link">Langsung ke konten utama</a>`.
   - Sticky Navbar dengan class `.active` pada menu **Blog** dan tombol CTA WhatsApp.

3. **Breadcrumb Navigation**:
   - Posisi di atas artikel dengan format: `Beranda > Blog > Judul Singkat`.

4. **Grid 2 Kolom Responsive (`.blog-layout-wrapper > .container > .row.g-lg-5`)**:
   - **Kolom Kiri (`.col-lg-8` - Konten Utama)**:
     - `.article-header-clean`: Badge kategori (`.article-category-tag`), judul `h1.article-title-clean`, ringkasan lead (`.article-lead-desc`), meta info tanggal dan nama penulis Ardhana Prasasta (`.article-meta-clean`).
     - Hero Image (`<figure class="article-featured-image">`): Gambar 1200x675 format WebP dengan `loading="eager" decoding="async"` dan `<figcaption>`.
     - `.article-body-content`:
       - Paragraf pembuka.
       - Daftar Isi Interaktif / TOC (`<details class="article-toc">` tertutup secara default).
       - Heading `<h2>` dan `<h3>` terstruktur dengan `id` anchor yang cocok dengan TOC.
       - Internal Link Kontekstual (`<div class="article-read-also">`).
       - Gambar pendukung di dalam artikel (`<figure class="article-body-figure">` format WebP + figcaption).
       - Seksi FAQ Interaktif (`<section class="article-faq-section" id="faq-artikel">` dengan accordion Bootstrap 5).
       - Seksi Kesimpulan (`<h2 id="kesimpulan">Kesimpulan</h2>` + `<blockquote class="article-conclusion-quote">`).
       - Author Box Resmi (`.article-author-box` memuat avatar `ardha.webp`, bio, dan link ke `../author/ardhanaprasasta.html`).
   - **Kolom Kanan (`.col-lg-4` - Sidebar Artikel)**:
     - Widget 1: **Artikel Terkait** (`.recent-posts-list` dengan thumbnail 72x64 WebP).
     - Widget 2: **Kategori Layanan** (`.sidebar-categories-list` pills).
     - Widget 3: **Card CTA Penawaran Cepat** (`.sidebar-cta-card` dengan tombol WhatsApp).

5. **Footer & Global Popup Modal**:
   - 4-kolom footer standar website, hak cipta, dan tombol pemicu Network Modal (`#networkModal`).
   - Modal popup jaringan website (`.modal-network`).
   - Script Javascript deferred: `bootstrap.bundle.min.js` dan `../assets/js/main.js`.

---

## 3. Template HTML Baku (Boilerplate Siap Pakai)

Gunakan template di bawah ini saat membuat artikel baru di dalam folder `blog/`:

```html
<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- ATURAN: Maksimal 60 karakter & 60 kata -->
  <title>Judul Artikel Menarik Fokus Keyword Malang Batu</title>
  <!-- ATURAN: Maksimal 160 karakter & 160 kata -->
  <meta name="description"
    content="Deskripsi ringkas dan menarik mengenai isi artikel outbound di Malang dan Batu dengan ajakan yang jelas.">
  <meta name="keywords" content="keyword 1, keyword 2, outbound malang, gathering batu">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Vendor Outbound Malang">
  <link rel="canonical" href="https://vendoroutboundmalang.web.id/blog/slug-artikel-anda">

  <meta name="geo.region" content="ID-JI">
  <meta name="geo.placename" content="Malang, Jawa Timur">
  <meta name="geo.position" content="-7.978;112.634">
  <meta name="ICBM" content="-7.978, 112.634">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Vendor Outbound Malang">
  <meta property="og:locale" content="id_ID">
  <meta property="og:title" content="Judul Artikel Menarik Fokus Keyword Malang Batu">
  <meta property="og:description"
    content="Deskripsi ringkas dan menarik mengenai isi artikel outbound di Malang dan Batu dengan ajakan yang jelas.">
  <meta property="og:url" content="https://vendoroutboundmalang.web.id/blog/slug-artikel-anda">
  <!-- ATURAN: Ganti dengan URL gambar utama artikel Anda -->
  <meta property="og:image" content="https://vendoroutboundmalang.web.id/assets/img/blog/nama-gambar-artikel.webp">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="article:published_time" content="2026-02-15T08:00:00+07:00">
  <meta property="article:author" content="Vendor Outbound Malang">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Judul Artikel Menarik Fokus Keyword Malang Batu">
  <meta name="twitter:description"
    content="Deskripsi ringkas dan menarik mengenai isi artikel outbound di Malang dan Batu.">
  <!-- ATURAN: Ganti dengan URL gambar utama artikel Anda (sesuai slug/gambar artikel) -->
  <meta name="twitter:image" content="https://vendoroutboundmalang.web.id/assets/img/blog/nama-gambar-artikel.webp">

  <!-- Preconnect & DNS Prefetch -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">

  <!-- Preload LCP Hero Image (Wajib Sesuai Gambar Utama Artikel) -->
  <link rel="preload" as="image" href="../assets/img/blog/nama-gambar-artikel.webp" fetchpriority="high">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

  <!-- CSS Dependencies -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="icon" href="../assets/img/logo/favicon.jpeg" type="image/jpeg">
  <link rel="shortcut icon" href="../assets/img/logo/favicon.jpeg" type="image/jpeg">
  <link rel="apple-touch-icon" href="../assets/img/logo/favicon.jpeg">

  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://vendoroutboundmalang.web.id"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://vendoroutboundmalang.web.id/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Judul Singkat Artikel",
            "item": "https://vendoroutboundmalang.web.id/blog/slug-artikel-anda"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Vendor Outbound Malang",
        "url": "https://vendoroutboundmalang.web.id",
        "image": "https://vendoroutboundmalang.web.id/assets/img/web/hero-out.webp",
        "telephone": "+6282211221909",
        "priceRange": "Rp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Diponegoro Gg. IV No 14 RT 01 RW 05 Kel. Sisir Kec. Batu",
          "addressLocality": "Kota Batu",
          "addressRegion": "Jawa Timur",
          "postalCode": "65314",
          "addressCountry": "ID"
        }
      },
      {
        "@type": "Organization",
        "name": "Vendor Outbound Malang",
        "url": "https://vendoroutboundmalang.web.id",
        "logo": "https://vendoroutboundmalang.web.id/assets/img/logo/favicon.png",
        "image": "https://vendoroutboundmalang.web.id/assets/img/web/hero-out.webp",
        "telephone": "+6282211221909",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Diponegoro Gg. IV No 14 RT 01 RW 05 Kel. Sisir Kec. Batu",
          "addressLocality": "Kota Batu",
          "addressRegion": "Jawa Timur",
          "postalCode": "65314",
          "addressCountry": "ID"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "Judul Artikel Menarik Fokus Keyword Malang Batu",
        "description": "Deskripsi ringkas dan menarik mengenai isi artikel outbound di Malang dan Batu dengan ajakan yang jelas.",
        "url": "https://vendoroutboundmalang.web.id/blog/slug-artikel-anda",
        "datePublished": "2026-02-15T08:00:00+07:00",
        "dateModified": "2026-02-15T08:00:00+07:00",
        "inLanguage": "id",
        "author": {
          "@type": "Person",
          "name": "Ardhana Prasasta",
          "url": "https://vendoroutboundmalang.web.id/author/ardhanaprasasta"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vendor Outbound Malang",
          "url": "https://vendoroutboundmalang.web.id",
          "logo": {
            "@type": "ImageObject",
            "url": "https://vendoroutboundmalang.web.id/assets/img/logo/favicon.png"
          }
        },
        "image": "https://vendoroutboundmalang.web.id/assets/img/blog/nama-gambar-artikel.webp",
        "mainEntityOfPage": "https://vendoroutboundmalang.web.id/blog/slug-artikel-anda"
      }
    ]
  }
  </script>
</head>

<body>
  <a href="#main-content" class="skip-link">Langsung ke konten utama</a>
  <nav class="navbar navbar-expand-lg navbar-site sticky-top" id="navbar" aria-label="Navigasi utama">
    <div class="container">
      <a class="navbar-brand" href="../index.html">
        <span class="brand-logo-mark" aria-hidden="true">
          <img src="../assets/img/logo/favicon.png" alt="Logo Vendor Outbound Malang" width="42" height="42" decoding="async">
        </span>
        <span class="brand-logo-text">
          <span class="brand-name">Vendor Outbound</span>
          <span class="brand-location">MALANG</span>
        </span>
      </a>
      <div class="navbar-header-actions d-flex align-items-center gap-2 ms-auto ms-lg-0 order-lg-last">
        <a class="btn btn-wa"
          href="https://wa.me/6282211221909?text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20outbound" target="_blank"
          rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Buka menu navigasi">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item"><a class="nav-link" href="../index.html">Beranda</a></li>
          <li class="nav-item"><a class="nav-link" href="../tentang.html">Tentang</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Layanan</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="../layanan/outbound-perusahaan.html">Outbound Perusahaan</a></li>
              <li><a class="dropdown-item" href="../layanan/outbound-sekolah.html">Outbound Sekolah</a></li>
              <li><a class="dropdown-item" href="../layanan/family-gathering.html">Family Gathering</a></li>
              <li><a class="dropdown-item" href="../layanan/team-building.html">Team Building</a></li>
              <li><a class="dropdown-item" href="../layanan/offroad.html">Offroad</a></li>
              <li><a class="dropdown-item" href="../layanan/paintball.html">Paintball</a></li>
              <li><a class="dropdown-item" href="../layanan/rafting.html">Rafting</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="../paket.html">Paket</a></li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="../blog.html">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="../galeri.html">Galeri</a></li>
          <li class="nav-item"><a class="nav-link" href="../kontak.html">Kontak</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main id="main-content">
    <div class="blog-layout-wrapper">
      <div class="container">
        <!-- Breadcrumb Navigation -->
        <nav class="breadcrumb-nav mb-4" aria-label="Breadcrumb">
          <ol>
            <li><a href="../index.html">Beranda</a></li>
            <li><a href="../blog.html">Blog</a></li>
            <li>Judul Singkat Artikel</li>
          </ol>
        </nav>

        <div class="row g-lg-5">
          <!-- Main Article Column (Left) -->
          <div class="col-lg-8">
            <article class="article-main">
              <!-- Clean Article Header -->
              <header class="article-header-clean">
                <a href="../index.html" class="article-category-tag">Kategori Artikel</a>
                <h1 class="article-title-clean">Judul Artikel Lengkap dan Informatif</h1>
                <p class="article-lead-desc">
                  Paragraf ringkasan pengantar (lead) yang menjelaskan gambaran utama isi artikel secara menarik.
                </p>
                <div class="article-meta-clean">
                  <time datetime="2026-02-15" class="article-meta-date">15 Februari, 2026</time>
                  <a href="../author/ardhanaprasasta.html" class="article-meta-author">Ardhana Prasasta</a>
                </div>
              </header>

              <!-- Featured Hero Image -->
              <figure class="article-featured-image">
                <img src="../assets/img/blog/nama-gambar-artikel.webp"
                  alt="Deskripsi gambar artikel yang relevan dan mengandung keyword" width="1200"
                  height="675" loading="eager" decoding="async">
                <figcaption>Keterangan foto artikel di lokasi kegiatan outbound Malang Raya.</figcaption>
              </figure>

              <!-- Article Body Content -->
              <div class="article-body-content">
                <p>
                  Paragraf pembuka artikel yang mengalir alami, menjelaskan latar belakang topik dan pentingnya pembahasan ini untuk pembaca...
                </p>

                <!-- Collapsible Table of Contents (Closed by Default) -->
                <details class="article-toc">
                  <summary>
                    <span>Daftar Isi Artikel</span>
                    <span class="article-toc-toggle-icon" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div class="article-toc-content">
                    <ul class="article-toc-list">
                      <li><a href="#subheading-1">Judul Poin Pembahasan Pertama</a></li>
                      <li><a href="#subheading-2">Judul Poin Pembahasan Kedua</a></li>
                      <li><a href="#faq-artikel">FAQ</a></li>
                      <li><a href="#kesimpulan">Kesimpulan</a></li>
                    </ul>
                  </div>
                </details>

                <h2 id="subheading-1">Judul Poin Pembahasan Pertama</h2>
                <p>
                  Ulasan mendalam mengenai poin pertama, menyajikan tips praktis, data, atau wawasan lokal seputar aktivitas outbound di Malang.
                </p>

                <!-- In-Article Contextual Link -->
                <div class="article-read-also">
                  <span class="article-read-also-tag">Baca juga:</span>
                  <a href="tips-memilih-vendor-outbound.html" class="article-read-also-link">Tips Memilih Vendor Outbound yang Tepat untuk Perusahaan</a>
                </div>

                <h2 id="subheading-2">Judul Poin Pembahasan Kedua</h2>
                <p>
                  Ulasan mendalam poin kedua yang relevan dengan kebutuhan peserta dan panitia gathering...
                </p>

                <!-- Supporting In-Article Photo -->
                <figure class="article-body-figure">
                  <img src="../assets/img/web/about-out.webp"
                    alt="Deskripsi foto pendukung aktivitas outdoor outbound di Malang"
                    width="1200" height="675" loading="lazy" decoding="async">
                  <figcaption>Dokumentasi aktivitas pendukung kegiatan outdoor.</figcaption>
                </figure>

                <!-- In-Article FAQ Section -->
                <section class="article-faq-section" id="faq-artikel" aria-labelledby="article-faq-heading">
                  <h2 id="article-faq-heading" class="article-faq-title">FAQ</h2>
                  <div class="accordion article-faq-accordion" id="articleFaqAccordion">
                    <div class="accordion-item">
                      <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#artFaq1" aria-expanded="false" aria-controls="artFaq1">
                          Pertanyaan sering diajukan 1?
                        </button>
                      </h3>
                      <div id="artFaq1" class="accordion-collapse collapse" data-bs-parent="#articleFaqAccordion">
                        <div class="accordion-body">
                          Jawaban lengkap dan solutif untuk pertanyaan 1.
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#artFaq2" aria-expanded="false" aria-controls="artFaq2">
                          Pertanyaan sering diajukan 2?
                        </button>
                      </h3>
                      <div id="artFaq2" class="accordion-collapse collapse" data-bs-parent="#articleFaqAccordion">
                        <div class="accordion-body">
                          Jawaban lengkap dan solutif untuk pertanyaan 2.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Conclusion Section -->
                <h2 id="kesimpulan">Kesimpulan</h2>
                <p>
                  Paragraf penutup yang merangkum poin-poin penting dalam artikel.
                </p>

                <!-- Article Conclusion Blockquote Box -->
                <blockquote class="article-conclusion-quote">
                  <div class="article-quote-icon" aria-hidden="true">
                    <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 16.8C0 7.84 5.88 1.68 14.28 0L16.24 3.92C11.76 4.76 8.96 7.84 8.4 11.2H14.56V28H0V16.8ZM17.92 16.8C17.92 7.84 23.8 1.68 32.2 0L34.16 3.92C29.68 4.76 26.88 7.84 26.32 11.2H32.48V28H17.92V16.8Z"
                        fill="#F59E0B" />
                    </svg>
                  </div>
                  <div class="article-quote-text">
                    Kutipan penutup atau intisari kesimpulan yang berkesan bagi pembaca.
                  </div>
                </blockquote>

                <!-- Author Box -->
                <div class="article-author-box">
                  <a href="../author/ardhanaprasasta.html" class="article-author-box-avatar" aria-label="Lihat profil penulis Ardhana Prasasta">
                    <img src="../assets/img/author/ardha.webp" alt="Ardhana Prasasta" width="76" height="76"
                      loading="lazy" decoding="async">
                  </a>
                  <div class="article-author-box-info">
                    <span class="article-author-box-label">Ditulis Oleh</span>
                    <h4 class="article-author-box-name">
                      <a href="../author/ardhanaprasasta.html" class="article-author-box-link">Ardhana Prasasta</a>
                    </h4>
                    <p class="article-author-box-bio">Praktisi dan konsultan kegiatan outdoor outbound &amp; team
                      building di Malang Raya. Berpengalaman merancang program experiential learning dan corporate
                      gathering untuk berbagai instansi dan perusahaan.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!-- Sidebar Column (Right) -->
          <div class="col-lg-4">
            <aside class="blog-sidebar">
              <!-- Artikel Terkait Widget -->
              <div class="sidebar-widget">
                <h3 class="sidebar-widget-title">Artikel Terkait</h3>
                <div class="recent-posts-list">
                  <a href="rekomendasi-lokasi-outbound-malang.html" class="recent-post-item">
                    <div class="recent-post-thumb">
                      <img src="../assets/img/web/layanan-adventure.webp" alt="Rekomendasi Lokasi Outbound Malang"
                        width="72" height="64" loading="lazy" decoding="async">
                    </div>
                    <div class="recent-post-info">
                      <div class="recent-post-title">Rekomendasi Lokasi Outbound di Malang dan Sekitarnya</div>
                      <div class="recent-post-date">18 September 2026</div>
                    </div>
                  </a>

                  <a href="../layanan/team-building.html" class="recent-post-item">
                    <div class="recent-post-thumb">
                      <img src="../assets/img/web/layanan-perusahaan.webp" alt="Panduan Team Building" width="72"
                        height="64" loading="lazy" decoding="async">
                    </div>
                    <div class="recent-post-info">
                      <div class="recent-post-title">Panduan Efektif Membangun Sinergi Tim Lewat Team Building</div>
                      <div class="recent-post-date">15 September 2026</div>
                    </div>
                  </a>

                  <a href="../layanan/rafting.html" class="recent-post-item">
                    <div class="recent-post-thumb">
                      <img src="../assets/img/web/about-out.webp" alt="Sensasi Rafting Kasembon Malang" width="72"
                        height="64" loading="lazy" decoding="async">
                    </div>
                    <div class="recent-post-info">
                      <div class="recent-post-title">Sensasi Rafting dan Arung Jeram Seru di Kasembon Malang</div>
                      <div class="recent-post-date">12 September 2026</div>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Categories Widget -->
              <div class="sidebar-widget">
                <h3 class="sidebar-widget-title">Kategori Layanan</h3>
                <div class="sidebar-categories-list">
                  <a href="../layanan/outbound-perusahaan.html" class="sidebar-category-pill">Outbound Perusahaan</a>
                  <a href="../layanan/team-building.html" class="sidebar-category-pill">Team Building</a>
                  <a href="../layanan/family-gathering.html" class="sidebar-category-pill">Family Gathering</a>
                  <a href="../layanan/rafting.html" class="sidebar-category-pill">Rafting Kasembon</a>
                  <a href="../layanan/offroad.html" class="sidebar-category-pill">Offroad Jeep Batu</a>
                  <a href="../layanan/paintball.html" class="sidebar-category-pill">Paintball War</a>
                  <a href="../layanan/outbound-sekolah.html" class="sidebar-category-pill">Edukasi Sekolah</a>
                </div>
              </div>

              <!-- Sidebar CTA Card -->
              <div class="sidebar-cta-card">
                <h4>Butuh Penawaran Cepat?</h4>
                <p>Hubungi admin kami untuk informasi ketersediaan tanggal, katalog paket, dan diskon rombongan.</p>
                <a href="https://wa.me/6282211221909?text=Halo%20Admin%20Vendor%20Outbound%20Malang%2C%20saya%20ingin%20tanya%20penawaran%20paket"
                  class="btn-sidebar-wa" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-brand-col">
        <a class="footer-brand" href="../index.html" aria-label="Vendor Outbound Malang Beranda">
          <span class="brand-logo-mark" aria-hidden="true" style="width: 40px; height: 40px;">
            <img src="../assets/img/logo/favicon.png" alt="Logo Vendor Outbound Malang" width="40" height="40" decoding="async">
          </span>
          <span class="brand-logo-text">
            <span class="brand-name" style="font-size: 1.25rem;">Vendor Outbound</span>
            <span class="brand-location" style="font-size: 0.65rem;">MALANG</span>
          </span>
        </a>
        <p class="footer-desc">Penyedia layanan outbound, gathering, team building, paintball, rafting, dan offroad
          terpercaya di Malang Raya & Batu.</p>
        <div class="footer-social-row">
          <a href="https://wa.me/6282211221909" class="footer-social-btn" target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp Kami" title="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"
              aria-hidden="true">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a href="https://instagram.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram Kami" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"
              aria-hidden="true">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://tiktok.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer"
            aria-label="TikTok Kami" title="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"
              aria-hidden="true">
              <path
                d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.73 1.26-.04 2.45-.73 3.04-1.84.34-.63.5-1.37.5-2.09V.02h-.24z" />
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Layanan</h4>
        <ul>
          <li><a href="../layanan/outbound-perusahaan.html">Outbound Perusahaan</a></li>
          <li><a href="../layanan/team-building.html">Team Building</a></li>
          <li><a href="../layanan/family-gathering.html">Family Gathering</a></li>
          <li><a href="../layanan/paintball.html">Paintball Games</a></li>
          <li><a href="../layanan/rafting.html">Rafting Kasembon</a></li>
          <li><a href="../layanan/offroad.html">Offroad Adventure</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Navigasi</h4>
        <ul>
          <li><a href="../index.html">Beranda</a></li>
          <li><a href="../tentang.html">Tentang Kami</a></li>
          <li><a href="../paket.html">Paket Outbound</a></li>
          <li><a href="../galeri.html">Galeri Foto</a></li>
          <li><a href="../blog.html">Blog &amp; Tips</a></li>
          <li><a href="../kontak.html">Kontak &amp; Lokasi</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Kontak</h4>
        <ul>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/6282211221909" target="_blank"
              rel="noopener noreferrer">+62 822-1122-1909</a></li>
          <li><strong>Alamat:</strong> Jl. Diponegoro Gg. IV No 14 RT 01 RW 05 Kel. Sisir Kec. Batu - Kota Batu - Jawa Timur</li>
          <li><strong>Jam Kerja:</strong> Setiap Hari (08.00 - 20.00 WIB)</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; 2026 Vendor Outbound Malang. Seluruh hak cipta dilindungi.</p>
      <div class="footer-bottom-links">
        <a href="../tentang.html">Tentang</a>
        <span>•</span>
        <a href="../kontak.html">Kontak</a>
        <span>•</span>
        <button type="button" class="footer-network-link" data-bs-toggle="modal" data-bs-target="#networkModal" aria-label="Buka popup daftar website network">
          <svg class="footer-network-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          Network
        </button>
      </div>
    </div>
  </footer>

  <!-- Network Modal Popup -->
  <div class="modal fade modal-network" id="networkModal" tabindex="-1" aria-labelledby="networkModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3 class="modal-title" id="networkModalTitle">Jaringan Website Kami</h3>
            <p class="modal-subtitle">Jelajahi jaringan website partner dan layanan outdoor kami di Malang Raya, Jawa Timur, dan seluruh Indonesia.</p>
          </div>
          <button type="button" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Tutup jendela popup network">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <!-- Network items loaded automatically -->
        </div>
      </div>
    </div>
  </div>

  <!-- Deferred Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous" defer></script>
  <script src="../assets/js/main.js" defer></script>
</body>
</html>
```

---

## 4. Checklist Validasi Sebelum Publish

Sebelum mempublikasikan artikel baru, pastikan hal-hal berikut sudah lolos uji:
- [ ] **Karakter & Kata Title**: `<title>` memiliki panjang **≤ 60 karakter dan ≤ 60 kata**.
- [ ] **Karakter & Kata Description**: `<meta name="description">` memiliki panjang **≤ 160 karakter dan ≤ 160 kata**.
- [ ] **Canonical URL**: Link canonical mengarah tepat ke `https://vendoroutboundmalang.web.id/blog/slug-artikel`.
- [ ] **Meta Image Sesuai Artikel**: Tag `og:image`, `twitter:image`, dan `BlogPosting` `image` wajib menggunakan URL gambar utama artikel tersebut (sesuai slug/gambar artikel), bukan gambar statis default.
- [ ] **Struktur Schema.org**: JSON-LD graph memuat `BreadcrumbList`, `LocalBusiness`, `Organization`, dan `BlogPosting` yang valid tanpa error.
- [ ] **Format Gambar**: Semua gambar berformat `.webp` dengan atribut `width`, `height`, dan `loading="lazy"` (kecuali LCP hero image yang menggunakan `loading="eager"` dan di-preload).
- [ ] **Komponen Lengkap**: Memiliki Header Bersih, Daftar Isi (`<details>`), Foto Pendukung, Seksi FAQ Accordion, Kesimpulan Quote Box, Author Box Ardhana Prasasta, dan Sidebar Widget lengkap.
