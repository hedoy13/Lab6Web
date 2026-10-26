# Lab6Web — JavaScript DOM dan Event Handling

**Nama / NIM / Kelas:** Mushlih hadi 312600335

## Tujuan
1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses JavaScript.
2. Memilih elemen dengan id, class, dan selector CSS.
3. Mengubah teks, atribut, kelas, dan gaya elemen.
4. Menangani event dengan `addEventListener()`.
5. Membuat validasi form dan pesan sesuai kondisi input.
6. Membuat halaman interaktif dengan minimal tiga fungsi.

## Struktur File
```
Lab6Web/
├── index.html
├── style.css
├── script.js
├── README.md
├── mini_project/ (index.html, style.css, script.js)
└── screenshots/ (semua file .png)
```

## Cara Menjalankan
1. Clone/unduh repository.
2. Buka `index.html` (latihan) atau `mini_project/index.html` di browser.
3. Buka Developer Tools (F12) → Console untuk memeriksa error.

## Langkah Kerja
| Latihan | Ringkasan | Screenshot |
|---|---|---|
| 1 | Mengubah teks judul & paragraf dengan `textContent` | `screenshots/latihan1.png` |
| 2 | Event click menampilkan waktu | `screenshots/latihan2.png` |
| 3 | `classList.toggle` untuk `highlight` & `teks-besar` | `screenshots/latihan3.png` |
| 4 | Event `input` untuk penghitung karakter | `screenshots/latihan4.png` |
| 5 | Validasi form (kosong, email salah, usia salah, valid) | `screenshots/latihan5-*.png` |
| 6 | To-do list (tambah, tandai selesai, hapus) | `screenshots/latihan6.png` |
| Mini project | Form workshop: validasi, ringkasan langsung, hitung karakter, reset | `screenshots/mini-*.png` |

### Skenario Uji Validasi (Latihan 5 & Mini Project)
| # | Skenario | Hasil yang diharapkan |
|---|---|---|
| 1 | Semua kosong | "Nama wajib diisi." |
| 2 | Nama kosong | "Nama wajib diisi." |
| 3 | Nama < 3 karakter ("Al") | "Nama minimal 3 karakter." |
| 4 | Email tidak valid ("abc@") | "Masukkan email yang valid." |
| 5 | Usia 16 | "Usia harus berupa bilangan bulat 17–100." |
| 6 | Semua valid | "Validasi berhasil..." dan form di-reset |

## Eksperimen Mandiri
1. **Hapus item to-do:** tombol "Hapus" memakai `item.remove()`.
2. **Nama minimal 3 karakter:** cek `nama.length < 3`.
3. **Event change dropdown:** menampilkan "Sesi dipilih: ..." di mini project.
4. **Sembunyikan/tampilkan paragraf:** `classList.toggle("sembunyi")` dengan `.sembunyi { display:none }`.
5. **Script tanpa `defer` di `<head>`:** Script dijalankan saat HTML belum selesai diparsing, sehingga elemen seperti `#judul` belum ada. `document.getElementById("judul")` mengembalikan `null`, lalu muncul error `Cannot set properties of null (setting 'textContent')`. Solusi: pakai `defer`, letakkan `<script>` sebelum `</body>`, atau bungkus kode dalam event `DOMContentLoaded`.

## Jawaban Pertanyaan Evaluasi
1. **DOM** adalah representasi dokumen HTML sebagai pohon objek yang dapat diakses dan dimanipulasi JavaScript. Manfaatnya: memilih elemen, mengubah konten/atribut/gaya, menambah-menghapus elemen, dan merespons aksi pengguna tanpa memuat ulang halaman.
2. `getElementById()` memilih satu elemen berdasarkan id. `querySelector()` memilih elemen **pertama** yang cocok dengan selector CSS. `querySelectorAll()` memilih **semua** elemen yang cocok (NodeList).
3. `addEventListener()` menghubungkan sebuah event dengan fungsi yang dijalankan saat event terjadi. Contoh event: `click`, `input`, `submit` (juga `change`, `keydown`, `mouseover`).
4. `event.preventDefault()` mencegah perilaku bawaan submit (halaman dimuat ulang/dikirim ke server) agar JavaScript sempat memvalidasi data dan menampilkan pesan.
5. `textContent` menyisipkan **teks biasa** sehingga aman; tag HTML ditampilkan apa adanya. `innerHTML` mengurai string sebagai markup HTML sehingga berguna untuk mengubah struktur, tetapi berisiko XSS jika memasukkan input pengguna yang tidak dipercaya.
6. `classList.toggle("nama")` menambahkan kelas jika belum ada dan menghapusnya jika sudah ada, sehingga satu tombol dapat menyalakan/mematikan tampilan (mis. highlight, mode gelap, sembunyi/tampil) tanpa kode kondisi tambahan.
7. Skenario uji: (a) semua input kosong, (b) email tidak valid, (c) usia di bawah 17 / di atas 100, (d) nama kurang dari 3 karakter, (e) semua input valid.

## Commit & Pengumpulan
```bash
git init
git add .
git commit -m "Lab6Web: DOM dan Event Handling"
git branch -M main
git remote add origin https://github.com/hedoy13/Lab6Web.git
git push -u origin main
```
## Screenshot Hasil

### Latihan 1
![Latihan 1](screenshots/latihan1.png)

### Latihan 2
![Latihan 2](screenshots/latihan2.png)

### Latihan 3
![Sebelum](screenshots/latihan3_sebelum.png)
![Sesudah](screenshots/latihan3_sesudah.png)

### Latihan 4
![Latihan 4](screenshots/latihan4.png)

### Latihan 5
![Kosong](screenshots/latihan5_kosong.png)
![Nama pendek](screenshots/latihan5_nama_pendek.png)
![Email tidak valid](screenshots/latihan5_email.png)
![Usia tidak valid](screenshots/latihan5_usia.png)
![Valid](screenshots/latihan5_valid.png)

### Latihan 6
![Latihan 6](screenshots/latihan6.png)

### Eksperimen 4
![Sembunyi](screenshots/eksperimen4_sembunyi.png)

### Mini Project
![Error](screenshots/mini_error.png)
![Ringkasan langsung](screenshots/mini_live.png)
![Sukses](screenshots/mini_sukses.png)
![Reset](screenshots/mini_reset.png)