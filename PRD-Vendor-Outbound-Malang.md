# Product Requirement Document (PRD)
## Website Vendor Outbound Malang

| | |
|---|---|
| **Project Type** | Static Business Website |
| **Platform** | Web |
| **Technology** | HTML5 + CSS3 + Bootstrap 5 + Vanilla JavaScript |
| **Database** | Tidak menggunakan database |
| **Domain** | vendoroutboundmalang.web.id |
| **Target** | Landing page & company profile jasa outbound & outdoor activity di Malang |

---

## 1. Project Overview

**Nama Produk:** Vendor Outbound Malang
**Domain:** vendoroutboundmalang.web.id

**Deskripsi:**
Website profesional untuk perusahaan penyedia layanan outbound, gathering, team building, dan aktivitas outdoor di Malang. Website bertujuan menjadi media pemasaran digital yang membantu calon pelanggan mendapatkan informasi layanan, melihat portofolio kegiatan, memahami paket yang tersedia, dan melakukan konsultasi melalui WhatsApp.

---

## 2. Business Goal

**Primary Goal**
- Meningkatkan jumlah calon pelanggan yang melakukan kontak melalui WhatsApp.

**Secondary Goal**
- Membangun kepercayaan terhadap brand
- Menampilkan profesionalitas layanan
- Mendukung pencarian Google dengan SEO lokal
- Menjadi katalog digital layanan outbound

---

## 3. Target Audience

### 3.1 Perusahaan
**Kebutuhan:** Gathering karyawan, team building, employee bonding, corporate event
**Keyword:** outbound perusahaan Malang, team building Malang, gathering kantor Malang

### 3.2 Sekolah
**Kebutuhan:** Kegiatan edukasi, leadership, kekompakan siswa
**Keyword:** outbound sekolah Malang, wisata edukasi Malang

### 3.3 Keluarga & Komunitas
**Kebutuhan:** Family gathering, rekreasi kelompok, aktivitas outdoor
**Keyword:** family gathering Malang, outbound keluarga Malang

---

## 4. Website Goals

Pengunjung setelah membuka website diharapkan:
1. Mengetahui layanan yang tersedia
2. Percaya dengan profesionalitas vendor
3. Melihat contoh kegiatan
4. Memilih paket yang sesuai
5. Menghubungi WhatsApp

---

## 5. Information Architecture

```
/
├── index.html                    (Beranda)
├── tentang.html                  (Tentang)
├── layanan/
│   ├── outbound-perusahaan.html
│   ├── outbound-sekolah.html
│   ├── family-gathering.html
│   ├── team-building.html
│   ├── offroad.html
│   ├── paintball.html
│   └── rafting.html
├── paket.html                    (Paket)
├── blog/
│   ├── index.html
│   ├── artikel-1.html
│   └── artikel-2.html
├── galeri.html                   (Galeri)
└── kontak.html                   (Kontak)
```

---

## 6. User Flow

```
Pengunjung → Landing Homepage → Melihat layanan → Membaca paket
→ Melihat galeri/testimoni → Klik WhatsApp → Konsultasi Paket
```

---

## 7. Homepage Requirement (`index.html`)

### Section 1 — Navbar
**Tujuan:** Navigasi utama website.

**Menu:**
- Logo
- Beranda
- Tentang
- Layanan ▼ (Outbound Perusahaan, Outbound Sekolah, Family Gathering, Team Building, Offroad, Paintball, Rafting)
- Paket
- Blog
- Galeri
- Kontak
- Button WhatsApp

**Requirement:** Responsive Bootstrap navbar, sticky navbar, mobile hamburger menu.

### Section 2 — Hero Section
**Tujuan:** Menjelaskan bisnis dalam beberapa detik.

**Heading:** "Vendor Outbound Malang untuk Gathering, Team Building dan Aktivitas Outdoor"

**Description:** "Kami menyediakan layanan outbound profesional untuk perusahaan, sekolah, komunitas, dan keluarga dengan konsep kegiatan yang seru, aman, dan berkesan."

**Button:** Konsultasi Sekarang / Lihat Paket

**Visual:** Foto aktivitas outbound asli — peserta sedang teamwork, outdoor environment.

### Section 3 — Tentang Kami
**Tujuan:** Membangun kepercayaan.

**Judul:** "Tentang Vendor Outbound Malang"

**Deskripsi:** "Kami membantu berbagai kebutuhan kegiatan outdoor melalui konsep outbound yang kreatif, interaktif, dan disesuaikan dengan karakter peserta."

**Tambahan:** pengalaman, pendekatan kegiatan, pelayanan. **Tanpa angka statistik.**

### Section 4 — Nilai Utama Kami
**Tujuan:** Menggantikan statistik generik. **Format:** Bootstrap Card.

1. **Custom Activity** — Konsep kegiatan dapat disesuaikan dengan kebutuhan perusahaan, sekolah, maupun komunitas.
2. **Professional Facilitator** — Didukung oleh tim yang membantu mengarahkan kegiatan agar berjalan efektif.
3. **Fun & Safe Experience** — Aktivitas dirancang untuk memberikan pengalaman menyenangkan dan aman.
4. **Complete Support** — Mulai dari perencanaan, pelaksanaan hingga dokumentasi.

### Section 5 — Layanan Utama (Card)
1. **Outbound Perusahaan** — Kegiatan team building dan gathering untuk meningkatkan komunikasi serta kerja sama.
2. **Outbound Sekolah** — Aktivitas edukatif untuk membangun kekompakan dan karakter peserta.
3. **Family Gathering** — Kegiatan outdoor untuk menciptakan momen kebersamaan.
4. **Adventure Activity** — Rafting, paintball, dan aktivitas outdoor lainnya.

### Section 6 — Paket Outbound (Card)
1. **Paket Hemat** — Fun Games, Ice Breaking, Fasilitator, Peralatan
2. **Paket Corporate** — Team Building, Games, Dokumentasi, Support Event
3. **Paket Custom** — Konsep sesuai kebutuhan, Konsultasi langsung

### Section 7 — Galeri Kegiatan
**Tujuan:** Social proof.

**Kategori:** Corporate, School, Family Gathering, Adventure

**Fitur:** Bootstrap carousel, image modal, responsive gallery

**SEO image:** `alt="Kegiatan outbound perusahaan Malang"`

### Section 8 — Testimoni
**Tujuan:** Meningkatkan kepercayaan. **Format:** Carousel.

**Isi:** Nama instansi, kegiatan, review.

> "Acara berjalan sangat seru, tim fasilitator membantu seluruh kegiatan berjalan dengan baik." — PT ABC

### Section 9 — FAQ
**Tujuan:** SEO / AEO. **Format:** Bootstrap Accordion.

**Pertanyaan:**
1. Apa saja layanan outbound yang tersedia?
2. Berapa harga paket outbound?
3. Apakah paket bisa custom?
4. Apakah tersedia dokumentasi?
5. Berapa jumlah minimal peserta?

### Section 10 — CTA WhatsApp
**Tujuan:** Konversi.

**Content:** "Siap Mengadakan Kegiatan Outbound? Diskusikan kebutuhan acara Anda bersama tim kami."

**Button:** Hubungi WhatsApp

### Section 11 — Footer
Logo, deskripsi singkat, menu, layanan, kontak, social media, copyright.

---

## 8. Layanan Pages Requirement

Template setiap halaman layanan:
1. Hero Banner
2. Judul Layanan
3. Deskripsi
4. Manfaat
5. Aktivitas
6. Fasilitas
7. Galeri
8. FAQ
9. CTA WhatsApp

---

## 9. SEO Requirement

**Meta Title (contoh):**
`Vendor Outbound Malang | Paket Outbound & Team Building`

**Meta Description (contoh):**
`Vendor outbound Malang menyediakan layanan outbound perusahaan, sekolah, family gathering, team building, rafting, paintball dan aktivitas outdoor.`

**Schema yang digunakan:**
- LocalBusiness Schema
- Service Schema
- FAQ Schema
- Article Schema

---

## 10. Design Requirement

**Tema:** Outdoor Adventure Professional

**Color Palette:**
- Primary — Forest Green
- Secondary — Cream / Beige
- Accent — Orange Adventure

**Design Direction:** Profesional, natural, premium, tidak terlalu ramai, **tidak terlihat template AI**.

*(Lihat file `design-Vendor-Outbound-Malang.md` untuk panduan desain lengkap.)*

---

## 11. Technical Requirement

**Frontend:** HTML5, CSS3, Bootstrap 5, JavaScript

**Struktur Assets:**
```
assets/
├── css/
├── js/
├── images/
└── icons/
```

---

## 12. Performance Requirement

- Mobile friendly
- Optimasi gambar WebP
- Lazy loading image
- Minify CSS
- Fast loading

---

## 13. Development Roadmap

**Phase 1 — Core Website**
Homepage, Tentang, Layanan, Paket, Galeri, Kontak

**Phase 2 — SEO**
Blog, FAQ, Schema, Sitemap, Robots

**Phase 3 — Optimization**
Analytics, Search Console, Conversion tracking

---

## 14. Final Website Vision

Website Vendor Outbound Malang menjadi media profesional untuk memperkenalkan layanan outbound, gathering, dan aktivitas outdoor dengan tampilan modern, SEO-friendly, serta fokus menghasilkan pelanggan melalui WhatsApp.
