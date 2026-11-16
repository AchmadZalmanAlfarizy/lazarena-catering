# La Zarena — Premium Catering & Food Service

> **A Taste Worth Remembering.**  
> Website profil perusahaan & pemesanan catering dengan estetika *French-inspired Modern Luxury*, animasi *cinematic motion*, dan integrasi pemesanan langsung via WhatsApp.

---

## 📋 Daftar Isi

1. [Project Overview](#1-project-overview)
2. [Paket Catering & Menu](#2-paket-catering--menu)
3. [Kontak & Identitas Brand](#3-kontak--identitas-brand)
4. [Instalasi & Development](#4-instalasi--development)
5. [Production Build](#5-production-build)
6. [Panduan Deployment ke Vercel](#6-panduan-deployment-ke-vercel)
7. [Konfigurasi WhatsApp Ordering](#7-konfigurasi-whatsapp-ordering)
8. [Struktur Project](#8-struktur-project)

---

## 1. Project Overview

**La Zarena Catering & Food Service** adalah solusi kuliner premium untuk beragam kebutuhan acara:
- **Paket Nasi Box Harian & Event** (kantor, sekolah, arisan, syukuran)
- **Corporate Catering & Executive Lunch Box** (meeting, seminar, pelatihan)
- **Private Celebration Catering** (pernikahan, perhelatan privat)
- **Menu Nusantara Khas & Custom Diet Package**

Stack teknologi:
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS (French-inspired luxury palette: Warm Ivory, Forest Olive, Champagne Gold, Deep Charcoal, Soft Cream)
- **Motion & Interactions**: Framer Motion
- **Icons**: Lucide React + Custom Brand SVGs
- **Deployment Ready**: Terkonfigurasi untuk Vercel (`vercel.json` included)

---

## 2. Paket Catering & Menu

### A. Paket Nasi Box La Zarena
| Paket | Komposisi Isi | Harga |
|---|---|---|
| **La Zarena Hemat** | Nasi, ayam, sayur, sambal | **Rp 18.000** |
| **La Zarena Regular** | Nasi, ayam, sayur, pelengkap, sambal | **Rp 22.000** |
| **La Zarena Premium** | Nasi, ayam/daging, 2 sayur, pelengkap, buah | **Rp 28.000** |
| **La Zarena Special** | Nasi, daging, ayam, 2 sayur, dessert | **Rp 35.000** |

### B. Koleksi Masakan Unggulan La Zarena
1. **Ayam Goreng Kremes** — Ayam ungkep bumbu kuning dengan taburan kremesan renyah keemasan & sambal terasi.
2. **Ayam Bakar Kecap** — Ayam bakar karamel manis gurih dengan aroma smoky khas.
3. **Ayam Saus Mentega** — Ayam renyah berpadu saus mentega gurih manis dan bawang bombay.
4. **Rendang Daging** — Daging sapi empuk dimasak perlahan dengan santan dan rempah Minang autentik.
5. **Empal Gepuk** — Daging sapi empuk manis gurih beraroma ketumbar dengan taburan bawang goreng.
6. **Capcay** — Tumis sayuran segar warna-warni (kembang kol, brokoli, wortel, jamur) bumbu bawang putih.
7. **Tumis Buncis Wortel** — Buncis renyah manis dan irisan wortel ditumis cabai & bawang merah.
8. **Sambal Goreng Kentang** — Potongan dadu kentang gurih berbumbu balado merah santan berdaun jeruk.
9. **Perkedel Kentang** — Olahan kentang tumbuk lembut berbalut telur goreng keemasan.
10. **Nasi Kuning** — Nasi kuning wangi gurih berempah kunyit alami, santan kental, serai, dan pandan.

---

## 3. Kontak & Identitas Brand

- **Nama Brand**: La Zarena (La Zarena Catering & Food Service)
- **WhatsApp**: `0899-9268-988` (`+62 899-9268-988`)
- **Instagram**: [`@zalmanalf_`](https://instagram.com/zalmanalf_)
- **Email**: `azalmana27@gmail.com`
- **Alamat**: Website Demo
- **Jam Operasional**: Senin – Sabtu, 07.00 – 20.00 WIB

---

## 4. Instalasi & Development

```bash
# Masuk ke direktori
cd cattering

# Install dependensi
pnpm install # atau npm install

# Jalankan server lokal
pnpm.cmd dev # atau npm run dev
```

Buka browser di `http://localhost:5173`.

---

## 5. Production Build

```bash
pnpm.cmd run build # atau npm run build
```

Hasil build tersimpan di folder `dist/` dan siap dipublikasikan.

---

## 6. Panduan Deployment ke Vercel

Project telah dilengkapi file [`vercel.json`](file:///vercel.json).
1. Hubungkan repository GitHub Anda ke [Vercel Dashboard](https://vercel.com).
2. Framework preset terdeteksi otomatis sebagai **Vite**.
3. Klik **Deploy**.

---

## 7. Konfigurasi WhatsApp Ordering

File konfigurasi berada di [`src/utils/whatsapp.js`](file:///src/utils/whatsapp.js):
```javascript
export const WHATSAPP_NUMBER = "628999268988";
```
Seluruh tombol pemesanan paket, menu satuan, dan formulir kontak akan membuka chat WhatsApp ke nomor tersebut dengan format pesan otomatis yang rapi.

---

## 8. Lisensi & Hak Cipta

© 2026 **La Zarena Catering & Food Service**. All Rights Reserved.  
*Crafted with care.*
