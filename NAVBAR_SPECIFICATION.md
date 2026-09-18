# Dokumentasi & Spesifikasi Final Navbar - Vendor Outbound Malang

> **Status:** Final & Terkunci (Locked)  
> **Referensi Desain:** *Bumi Journey Editorial Style*  
> **Terakhir Diperbarui:** 17 September 2026  

---

## 1. Ringkasan Desain & Filosofi

Navigasi situs **Vendor Outbound Malang** telah disesuaikan secara presisi mengikuti referensi desain bertema petualangan dan alam terbuka (*editorial adventure style*). Seluruh efek berlebih (gradien mencolok, *glassmorphism blur*, kotak kapsul pada menu teks) telah dihilangkan dan digantikan dengan tampilan **Solid Flat Clean**.

---

## 2. Spesifikasi Teknis Navbar

### A. Dimensi & Posisi
- **Elemen:** `<nav class="navbar navbar-expand-lg navbar-site sticky-top" id="navbar">`
- **Container Layout:** Fluid Edge-to-Edge (`max-width: 100% !important; padding: 0 clamp(0.75rem, 1.8vw, 1.5rem);`), menempatkan logo di ujung kiri dan CTA di ujung kanan layar secara leluasa.
- **Padding:** `0.75rem 0` (Desktop), `0.9rem 0` (Mobile)
- **Min Height:** `78px` (Desktop), `72px` (Mobile)
- **Posisi:** `sticky-top` (Menempel di bagian atas layar secara statis, mulus, dan konsisten tanpa ada perubahan warna/ukuran saat halaman di-scroll).

### B. Palet Warna (Color Tokens)
| Komponen | Nilai Warna | Keterangan |
| :--- | :--- | :--- |
| **Latar Belakang (Navbar Background)** | `#0D5C64` | *Oceanic Deep Teal* (Solid, bersih, tanpa gradien & tanpa efek blur). |
| **Teks Menu Normal** | `rgba(255, 255, 255, 0.9)` | Putih bersih (*contrast ratio* 8.5:1, standar WCAG AAA). |
| **Hover Teks Menu** | `#FFF8D6` | *Soft Butter Cream* pastel yang hangat. |
| **Menu Terpilih / Aktif (.active)** | `#FFF8D6` | *Butter Cream* tebal (*Font Weight 700*) menandakan halaman aktif. |
| **Hover pada Menu Aktif (.active:hover)**| `#FFFFFF` | Bertransisi ke putih solid bercahaya. |
| **Teks Brand Logo ("Vendor Outbound")** | `#FFFFFF` | Putih tebal (*Font Weight 700*). |
| **Lokasi Brand ("MALANG")** | `rgba(255, 255, 255, 0.85)` | Putih dengan *letter-spacing* 0.22em. |
| **Latar Tombol CTA WhatsApp** | `#FFF8D6` | *Butter Cream* pastel (*Rounded Pill*). |
| **Teks & Ikon CTA WhatsApp** | `#0D5C64` | *Deep Teal* (**Tanpa warna hijau**, selaras dengan latar navbar). |
| **Hover Tombol CTA WhatsApp** | `#FFF8D6` (opacity 0.92) | Tetap solid butter cream tanpa efek kilatan putih. |
| **Latar Dropdown Menu** | `#4A7F87` | *Soft Muted Teal* dengan sudut rounded card (`10px`). |
| **Dropdown Item Hover / Active** | `rgba(255, 255, 255, 0.25)` | *Rounded Pill Capsule* (`border-radius: 9999px`) dengan teks putih solid `#FFFFFF`. |

### C. Tipografi & Proporsi (Typography & Sizing)
- **Font Family Utama Navbar:** `Outfit` didukung oleh `Plus Jakarta Sans` (*Geometric Sans Aesthetic*):
  ```css
  --font-outfit: 'Outfit', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-navbar: 'Outfit', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  ```
- **Ukuran & Bobot Font:**
  - Logo Mark: `52px x 52px` (Desktop) / `48px x 48px` (Mobile)
  - Nama Brand: `1.25rem`, Weight `700`, Letter Spacing `-0.015em`
  - Subtitle Lokasi: `0.65rem`, Weight `700`, Letter Spacing `0.22em`, Uppercase
  - Tautan Menu: `1.02rem`, Weight `500`, Letter Spacing `0.005em`
  - Dropdown Items: `1rem`, Weight `500`
  - Tombol CTA: `0.92rem`, Weight `600`, Letter Spacing `-0.01em`, Min Height `38px`

---

## 3. Komponen Khusus

### 1. Dropdown Menu (*Bumi Journey Rounded Style*)
- **Container Dropdown:** Menggunakan background *Soft Slate Teal* (`#53868E`) dengan posisi menempel pas tanpa celah di bawah garis navbar (`margin-top: 0.85rem`), sudut atas datar dan sudut bawah melengkung halus `border-radius: 0 0 16px 16px` serta bayangan lembut (`box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2)`).
- **Item Menu (Dynamic Width Rounded Pill):** Setiap item di dalam dropdown menggunakan bentuk kapsul bulat (*Rounded Pill* `border-radius: 9999px`) yang panjangnya secara dinamis **mengikuti panjang teks item** (`width: fit-content`) saat di-*hover* maupun saat aktif (*active*), persis seperti referensi Bumi Journey.

### 2. Indikator Dropdown (*Clean Stroke Chevron ∨*)
- Menggunakan ikon *open chevron stroke* tipis dan elegan yang identik dengan referensi:
  ```css
  .navbar-site .dropdown-toggle::after {
    display: inline-block;
    content: "";
    width: 7px;
    height: 7px;
    margin-left: 0.45rem;
    vertical-align: 0.22em;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    border-top: none;
    border-left: none;
    border-radius: 1px;
    transform: rotate(45deg);
    transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .navbar-site .dropdown-toggle[aria-expanded="true"]::after,
  .navbar-site .dropdown-toggle.show::after {
    transform: rotate(-135deg);
  }
  ```

### 2. Tombol CTA WhatsApp (*Rounded Pill*)
- Bentuk bulat mulus penuh (*Pill Capsule* `border-radius: 9999px`).
- Menggunakan palet *Butter Cream* & *Deep Teal* tanpa bayangan kasar (*shadow*).
- Responsif penuh: Otomatis memanjang (*full-width*) dengan nyaman pada perangkat ponsel/tablet.

### 3. Tampilan Mobile & Efek Mengalir Menyamping (*Sideways Wave Stream*)
- **Dimensi & Spasi Header Mobile:**
  - Tinggi Header Navbar: `80px` (`min-height: 80px`), padding `1.1rem 0`.
  - Brand Logo Mark: `40px x 40px` (sejajar vertikal presisi dengan teks brand).
  - Brand Title / Judul Brand: `1.2rem` (Nama `Vendor Outbound`, line-height `1.1`) & `0.625rem` (Lokasi `MALANG`, letter-spacing `0.22em`, line-height `1`).
  - Tombol WhatsApp Mobile (CTA Pill): Butter Cream (`#FFF8D6`), teks deep teal (`#0D5C64`), tanpa warna hijau (`font-size: 0.82rem`, tinggi `34px`, padding `0.38rem 0.95rem`, ikon WhatsApp `15px x 15px`).
  - Tombol Hamburger / Toggler: `44px x 44px`, 3 garis CSS solid (*3-Bar Morphing*), rotasi halus 90 derajat dengan transisi spring cubic-bezier (`0.35s`).
- **Efek Mengalir Menyamping pada Navbar Saat Diklik (*Full-Height Transparent Wave Stream*):**
  - **Efek Gelombang Transparan Penuh:** Saat tombol hamburger diklik, gelombang cahaya halus transparan yang menutupi seluruh tinggi bilah navbar (*100% height & width*) meluncur menyamping dari kiri ke kanan secara lembut (`.navbar-site::after` dengan `@keyframes navbarFullWave 1.3s`).
  - **Warna & Transparansi Gelombang:** Lapisan kilau lembut (*sheer ambient sheen*) perpaduan putih transparan dan butter cream hangat:
    `linear-gradient(105deg, transparent 0%, rgba(255, 255, 255, 0.04) 25%, rgba(255, 248, 214, 0.18) 50%, rgba(255, 255, 255, 0.04) 75%, transparent 100%)`.
- **Drawer Menu Mobile (Clean, Solid & Fast Overlay):**
  - **Latar Belakang:** Solid Soft Teal `#53868E` (menutupi seluruh layar secara mulus edge-to-edge).
  - **Posisi & Dimensi:** `position: fixed; top: 80px; left: 0; right: 0; bottom: 0; width: 100vw; height: calc(100dvh - 80px);`
  - **Item Menu:** Teks putih `1.15rem` (*Font Weight 600*) dengan *tap target* `46px` dan open stroke chevron `∨` (`9px x 9px`) yang berputar mulus menjadi `∧` saat diklik.
  - **Submenu Dropdown:** Tanpa kotak container (`background: transparent !important`), item menjorok rapi (`padding-left: 0.85rem`), font `0.95rem`, baris rapat dan seimbang (`padding: 0.45rem 0`).
  - **Scroll Lock:** Halaman belakang otomatis terkunci (*body scroll lock*) saat menu mobile terbuka.
- **Kondisi Tertutup (Collapsed):**
  - Ikon toggler menampilkan 3 garis datar horizontal (`≡`) putih bersih.
- **Kondisi Terbuka (Expanded Drawer):**
  - Garis atas dan bawah bergeser ke tengah dan berputar membentuk tanda silang (`✕`) 45 derajat secara mulus bersamaan dengan rotasi tombol 90 derajat.
  - Seluruh tombol dan tautan memenuhi standar aksesibilitas manusia (*min tap target 44px - 52px*).

---

## 4. Letak Kode Sumber

1. **Stylesheet Utama:** [`assets/css/style.css`](file:///c:/PROJECT/vendoroutboundmalang/assets/css/style.css) (Bagian `/* NAVBAR: Clean, Flat Solid Deep Teal */`).
2. **JavaScript Pengendali:** [`assets/js/main.js`](file:///c:/PROJECT/vendoroutboundmalang/assets/js/main.js) (Event klik otomatis menutup menu mobile).
3. **Penerapan Seluruh Halaman:**
   - [`index.html`](file:///c:/PROJECT/vendoroutboundmalang/index.html)
   - [`tentang.html`](file:///c:/PROJECT/vendoroutboundmalang/tentang.html)
   - [`paket.html`](file:///c:/PROJECT/vendoroutboundmalang/paket.html)
   - [`galeri.html`](file:///c:/PROJECT/vendoroutboundmalang/galeri.html)
   - [`kontak.html`](file:///c:/PROJECT/vendoroutboundmalang/kontak.html)
   - Seluruh halaman di dalam direktori `layanan/` dan `blog/`.
