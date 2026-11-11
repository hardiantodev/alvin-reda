# ULEM — GitHub Pages build

Paket ini disiapkan untuk publikasi statis di GitHub Pages.

## Publikasi
1. Ekstrak seluruh isi ZIP.
2. Unggah `index.html`, folder `aset/`, dan file README ke root repository `hardiantodev/alvin-reda`.
3. Pada Settings → Pages pilih Deploy from a branch → `main` → `/(root)`.

## Perubahan kompatibilitas
- File utama berada di root sebagai `index.html`.
- Referensi WordPress REST/AJAX dan feed dihapus/dinonaktifkan.
- Font CSS yang sebelumnya berisi data WOFF2 kosong dibuang agar browser tidak terus gagal decode; font memakai fallback lokal sistem.
- Script Elementor yang meminta dynamic chunks WordPress yang tidak ikut terunduh dinonaktifkan. Layout/CSS tetap dipertahankan, tetapi sebagian animasi/widget yang memerlukan handler Elementor asli mungkin perlu dibuat ulang dengan JavaScript statis.
- RSVP, buku tamu, komentar, dan upload tidak dapat menyimpan data pada GitHub Pages saja; fitur tersebut membutuhkan layanan backend eksternal atau Google Apps Script.

Paket ini belum mengklaim kesetaraan 100% dengan server WordPress asli. Uji di GitHub Pages tetap diperlukan setelah publikasi.
