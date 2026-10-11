# Sandeq Rush — Proyek Godot

Balap perahu layar Sandeq dari pesisir Mandar. Proyek ini adalah versi Godot dari prototipe web, dengan fisika, aset, suara, dan kontrol slider yang sama.

**Versi 0.2** menambahkan beberapa fitur baru:
- Angin berubah arah: datang dari samping, agak dari belakang, atau dari depan, dan bisa dari kiri maupun kanan.
- Pindah haluan (tacking) untuk etape yang anginnya datang dari depan.
- Mode Karier "Sandeq Race" dengan 5 etape dan klasemen total waktu.
- 3 bintang per etape.
- Ensiklopedia Sandeq dengan 12 entri.

**Versi 0.3** menambahkan beberapa hal:
- Menu utama baru dengan logo, berisi **Karier, Tutorial, Papan Skor, dan Keluar**.
- Pembuatan nama pemain sebelum mulai bermain.
- Tutorial interaktif berpemandu.
- Papan skor lokal per etape dan untuk total Sandeq Race.
- Ensiklopedia kini dibuka lewat tautan di bawah menu, dan main bebas dipilih di dalam menu Karier.

**Versi 0.3.1** berisi perbaikan keamanan sebelum rilis:
- **Menu jeda**: tombol **II Jeda** di kanan atas saat lomba, dengan pilihan Lanjut, Ulangi, Ke menu, dan Suara.
- **Tombol Back Android**: tidak lagi menutup game. Saat lomba, Back membuka menu jeda; di layar lain, Back kembali satu langkah; di menu utama, Back meminta konfirmasi keluar. Tombol **Esc** di laptop berperilaku sama.
- **Jeda otomatis**: lomba langsung dijeda saat ada telepon, notifikasi ditarik, atau pemain pindah aplikasi.
- **Safe area**: HUD, slider, dan tombol bergeser menjauhi poni atau lubang kamera, termasuk saat HP diputar 180°.
- **File simpanan berversi**: data diperiksa saat dibuka sehingga file rusak tidak membuat game crash. Game menyimpan ke file sementara dulu dan selalu menyimpan satu cadangan (`.bak`).

Sudah diuji di Godot **4.6.3**: proyek terbuka tanpa error skrip, dan bot uji berhasil menyelesaikan tutorial, kelima etape karier, serta uji perahu terbalik. Pembuatan APK belum diuji di sini, karena butuh Android SDK di komputer Anda.

---

## 1. Buka dan coba di laptop

1. Unduh **Godot 4.6.3 (Standard)** dari https://godotengine.org/download. Tidak perlu install, cukup ekstrak lalu jalankan.
2. Di Project Manager, klik **Import**, lalu pilih file `project.godot` di folder ini.
3. Tekan **F5** untuk menjalankan game.
   - Keyboard: panah atas/bawah untuk layar, panah kiri/kanan untuk memindahkan awak ke cadik kiri/kanan, **Spasi** untuk pindah haluan, **M** untuk suara.
   - Mouse: seret slider di pojok kiri bawah (layar) dan kanan bawah (awak), lalu klik tombol kuning **Pindah haluan** saat angin datang dari depan.

## 2. Siapkan ekspor Android (sekali saja)

1. Install **OpenJDK 17**, misalnya Eclipse Temurin 17.
2. Install **Android Studio**. Lalu buka SDK Manager dan pasang:
   - Android SDK Platform-Tools
   - Android SDK Build-Tools
   - Android SDK Platform 36
   - Command-line Tools
3. Di Godot, buka **Editor → Editor Settings → Export → Android**, lalu isi:
   - **Java SDK Path**: folder JDK 17
   - **Android SDK Path**: biasanya `C:\Users\<nama>\AppData\Local\Android\Sdk`
4. Buka **Editor → Manage Export Templates → Download and Install**.

Panduan resmi: https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_android.html

## 3. Coba langsung di HP (APK debug)

1. Di HP, aktifkan **Opsi Pengembang** dengan cara mengetuk "Nomor Build" 7 kali, lalu nyalakan **USB debugging**.
2. Sambungkan HP ke laptop dengan kabel USB.
3. Di Godot, klik ikon Android di kanan atas editor (Remote Deploy). Game akan terpasang dan langsung berjalan di HP.

Untuk dibagikan ke siswa sebagai file:
1. Buka **Project → Export → Android**, lalu klik **Export Project**.
2. Simpan sebagai `SandeqRush.apk`. Centang **Export With Debug** untuk versi uji coba.

## 4. Rilis ke Play Store (AAB)

Google Play kini mewajibkan aplikasi baru menargetkan **Android 16 (API level 36)**.

1. Ganti **Package → Unique Name** dari `id.sandeqrush.game` menjadi milik Anda, misalnya `id.namaanda.sandeqrush`. Nama ini tidak bisa diubah setelah rilis.
2. Klik **Project → Install Android Build Template**.
3. Di preset Android, atur bagian Gradle:
   - Nyalakan **Gradle Build → Use Gradle Build**.
   - **Export Format**: `AAB`.
   - **Target SDK**: `36`.
4. Buat keystore rilis, cukup sekali. Simpan baik-baik, karena kalau hilang Anda tidak bisa memperbarui game di Play Store.
   ```
   keytool -genkeypair -v -keystore sandeqrush-release.keystore -alias sandeqrush -keyalg RSA -keysize 2048 -validity 10000
   ```
5. Isi **Keystore → Release, Release User, Release Password** di preset.
6. Naikkan **Version → Code** setiap kali mengunggah versi baru, misalnya 1, 2, 3, dan seterusnya.
7. Ekspor dengan **Export With Debug tidak dicentang**, lalu unggah file `.aab` ke Play Console.

## 5. Mengubah isi game

- **`game_data.gd`**: data etape, nama lawan, fakta budaya, dan isi ensiklopedia. Ubah angka di sini untuk menyeimbangkan tingkat kesulitan.
  - Data tiap etape: panjang lintasan, kekuatan angin, kecepatan lawan, dan warna laut.
  - Bagian **`winds`** mengatur di meter berapa angin berubah dan dari mana datangnya. Contoh: `[560.0, "head", 0]` berarti mulai meter 560 angin datang dari depan.
  - **`ENSI`** berisi teks ensiklopedia dan jumlah bintang yang dibutuhkan untuk membuka setiap entri.
- **Format simpanan**: kalau suatu saat struktur data simpanan diubah, naikkan `SAVE_VERSION` di `main.gd` dan tulis konversinya di fungsi `_migrate()`, supaya progres pemain lama tidak hilang.
- **`main.gd`**: semua logika, mencakup fisika (`_step`), gambar arena (`_draw`), UI, slider sentuh, suara, dan getaran.
- **`assets/img/`**: logo (`logo.png`), gambar perahu, dan background. Ganti file dengan nama yang sama untuk memperbarui grafis.
- **`assets/audio/`**: suara angin, ombak, dan percikan. Bisa diganti dengan rekaman asli dari pantai, asalkan formatnya WAV.

## 6. Lisensi aset

- Font **Big Shoulders Display** dan **Figtree**: SIL Open Font License, lihat `assets/fonts/OFL-*.txt`. Boleh dipakai di game komersial.
- Logo, gambar perahu, dan background dibuat dengan Higgsfield. Pastikan paket Higgsfield Anda mengizinkan penggunaan komersial sebelum rilis.
- Suara dibuat secara sintetis, jadi bebas dipakai.
- Fakta budaya di dalam game sebaiknya diverifikasi bersama budayawan Mandar sebelum rilis publik.

## 7. Bekerja dari VS Code

Proyek sudah berisi folder `.vscode` dengan pengaturan siap pakai.

1. Buka VS Code, lalu pilih **File → Open Folder** dan buka folder `sandeq-rush-godot`.
2. VS Code akan menawarkan ekstensi **godot-tools**. Klik **Install**.
3. Buka `.vscode/settings.json` dan ganti `godotTools.editorPath.godot4` dengan lokasi file Godot di laptop Anda. Gunakan garis miring ganda `\\` pada path Windows.
4. Buka proyek **sekali** di editor Godot. Langkah ini menyiapkan file impor, dan editor Godot yang terbuka juga mengaktifkan saran kode otomatis di VS Code.
5. Jalankan dan build lewat **Terminal → Run Task**:
   - **Sandeq Rush: Jalankan di laptop**
   - **Sandeq Rush: Buat APK uji (debug)**, juga bisa lewat **Ctrl+Shift+B**
   - **Sandeq Rush: Buat AAB rilis (Play Store)**

   Hasilnya tersimpan di folder `build/`.
6. Menekan **F5** juga menjalankan game dengan debugger, sehingga Anda bisa memasang breakpoint di `main.gd`.

Build APK/AAB dari VS Code tetap membutuhkan semua persiapan di bagian 2 dan 4: JDK 17, Android SDK, template ekspor, dan keystore. VS Code hanya memanggil Godot untuk melakukan build.
