# Design Guide — Vendor Outbound Malang
### Outdoor Adventure, Elegan & Tidak "AI Slop"

Panduan ini melengkapi PRD. Tujuannya: website terasa seperti dibuat oleh brand outdoor premium sungguhan — bukan template generik yang langsung ketebak dibuat AI.

---

## 1. Prinsip Anti "AI Slop"

Ciri-ciri visual yang **harus dihindari** karena terasa generik/AI-made:

- ❌ Gradient ungu-biru di hero section (klise SaaS)
- ❌ Blob shape / squiggle dekoratif tanpa makna
- ❌ Card dengan shadow tebal + border-radius besar di semua elemen tanpa variasi
- ❌ Font `Inter`/`Poppins` dipakai untuk semuanya (heading, body, button) tanpa hierarki
- ❌ Icon flat generic dari satu set icon library yang dipakai berlebihan (checkmark di lingkaran, dsb)
- ❌ Foto stock orang tersenyum ke kamera yang jelas bukan aktivitas asli
- ❌ Statistik angka bombastis ("500+ klien", "99% puas") tanpa bukti — *(sudah dilarang di PRD)*
- ❌ Section berurutan dengan layout yang identik (heading di tengah + 3 card di bawah, berulang di setiap section)
- ❌ Warna aksen neon/terlalu saturated
- ❌ Copywriting penuh buzzword kosong ("solusi terbaik", "kualitas nomor satu")

**Prinsip pengganti:** desain harus terasa *grounded* — seperti brand outdoor/lifestyle premium (pikirkan Patagonia, AirAsia adventure microsite, atau brand eco-tourism Skandinavia): tekstur alami, foto dokumentatif asli, tipografi dengan karakter, ruang kosong yang disengaja.

---

## 2. Color Palette

Palet dasar dari PRD (Forest Green, Cream, Orange) dipertajam agar tidak terasa seperti palet default Bootstrap:

| Peran | Warna | Hex (acuan) | Catatan |
|---|---|---|---|
| Primary (Forest) | Deep Forest Green | `#1F3A2E` | Lebih gelap & desaturated dari hijau "grass" default — kesan premium |
| Primary Light | Moss Green | `#4A6B52` | Untuk hover state, secondary text di area gelap |
| Secondary (Cream) | Warm Sand | `#F3EDE1` | Bukan putih polos — sedikit hangat, terasa "outdoor paper" |
| Base Neutral | Charcoal | `#242320` | Untuk body text, bukan hitam pekat `#000000` |
| Accent (Orange) | Burnt Sienna | `#C4622D` | Orange yang di-mute, bukan orange terang seperti `#FF6600` |
| Accent Support | Clay | `#8A6D4D` | Untuk garis, ikon sekunder, elemen dekoratif kecil |

**Aturan pakai:**
- Aksen orange dipakai **secukupnya** — untuk CTA/WhatsApp button dan highlight kecil saja, bukan dominasi section.
- Hindari gradient antar warna aksen. Jika perlu gradasi, gunakan gradasi tone-on-tone yang sangat halus (mis. forest green ke forest green lebih gelap), bukan gradasi antar hue.
- Background section berselang antara Warm Sand dan putih gading (`#FAF8F3`) — jangan putih murni.

---

## 3. Typography

Kombinasi 2 font agar ada karakter, bukan satu font generik dipakai semua:

- **Heading:** Serif dengan karakter kuat — misalnya **Fraunces**, **Canela**-style, atau **Playfair Display** (versi lebih tegas, bukan terlalu dekoratif). Serif memberi kesan "editorial/travel magazine" yang menjauh dari tampilan SaaS generik.
- **Body & UI:** Sans-serif yang hangat dan mudah dibaca — misalnya **General Sans**, **Söhne**, atau kalau butuh yang mudah diakses via Google Fonts: **Work Sans** / **Manrope** (hindari Inter/Poppins yang terlalu sering dipakai di template AI).
- **Aksen kecil (label kategori, eyebrow text):** huruf kapital kecil dengan letter-spacing lebar, ukuran kecil — beri kesan "signage" outdoor.

**Skala tipografi** (contoh, mobile-first):
- H1: 40–56px, serif, line-height ketat (1.05–1.1)
- H2: 28–36px, serif
- Body: 16–18px, sans, line-height 1.6–1.7
- Eyebrow/label: 12–13px, uppercase, letter-spacing 0.08em

---

## 4. Layout & Komposisi

- **Jangan** ulangi pola "heading tengah + grid card simetris" di setiap section. Variasikan:
  - Section Hero: teks rata kiri, foto besar di kanan (asymmetric split), bukan teks di tengah dengan background blob.
  - Section "Tentang": layout editorial — foto besar + teks di sebelahnya, mirip artikel majalah, bukan card.
  - Section "Nilai Utama": grid tapi dengan nomor urut bergaya tipografi besar (01, 02, 03, 04) alih-alih icon generik dalam lingkaran.
  - Section "Layanan": card dengan foto full-bleed di atas, bukan icon + judul + deskripsi generik.
- **Whitespace besar** antar section (80–120px di desktop) agar terasa premium, tidak padat.
- **Garis tipis (hairline, 1px)** sebagai pemisah section, bukan shadow tebal — lebih elegan dan konsisten dengan tema "outdoor/craft".
- Sudut (`border-radius`) dibuat konsisten kecil (4–8px) atau bahkan tajam (0px) untuk kesan lebih editorial/premium, bukan bulat besar (16–24px) ala mobile-app UI.

---

## 5. Fotografi & Visual

- Prioritaskan **foto dokumentasi asli** dari kegiatan outbound (peserta bermain di lapangan, fasilitator memandu, suasana alam Malang). Ini paling penting untuk menghindari kesan "template".
- Jika sementara belum ada foto asli, gunakan foto stock yang **candid**, bukan foto orang menatap kamera dan tersenyum lebar.
- Treatment warna: sedikit warm filter/duotone halus mengarah ke tone forest green & sand agar galeri terasa konsisten sebagai satu brand, bukan kumpulan foto acak.
- Gunakan foto **full-bleed / crop natural** (tidak selalu dalam frame card rounded dengan shadow).
- Untuk icon (FAQ, nilai utama, dsb): jika terpaksa pakai icon set, pilih icon line-art tipis yang custom-feel (mis. Phosphor Icons "thin" weight atau Lucide dengan stroke tipis), bukan icon flat filled generik.

---

## 6. Micro-interaction & Detail

- Hover state tombol: transisi warna halus (200–250ms ease), bukan efek scale/bounce berlebihan.
- Tombol WhatsApp: gunakan warna brand WhatsApp secukupnya (jangan terlalu neon), bentuk pill atau rounded-rect kecil, ikon WhatsApp asli.
- Scroll reveal animation: gunakan sangat halus (fade + translateY kecil 12–16px), jangan animasi besar yang terasa "flashy AI demo".
- Divider dekoratif boleh memakai motif garis/tekstur ringan bertema alam (mis. garis kontur peta/topografi tipis) sebagai elemen khas brand — bukan blob/wave SVG generik.

---

## 7. Tone Copywriting (mendukung visual)

- Kalimat deskriptif dan spesifik, bukan buzzword kosong.
- Hindari klaim superlatif tanpa dasar ("terbaik", "nomor satu") — sudah selaras dengan arahan PRD "tanpa statistik generik".
- Gunakan bahasa yang hangat dan personal, seolah brand benar-benar mengenal kegiatan lapangan (istilah spesifik: ice breaking, fasilitator, rundown acara), bukan bahasa marketing generik.

---

## 8. Ringkasan Implementasi Teknis

- Bootstrap 5 tetap dipakai sebagai grid & komponen dasar, tapi **override total** default styling (warna, radius, shadow, font) via CSS custom properties — jangan pakai tampilan default Bootstrap (biru primary, card shadow default, dsb).
- Definisikan token warna & tipografi di `:root` sebagai CSS variables agar konsisten di semua halaman layanan.
- Uji kontras warna (terutama Burnt Sienna di atas Warm Sand) untuk aksesibilitas WCAG AA.
