<?php
/**
 * PasarKita - Contoh konfigurasi.
 *
 * Salin file ini menjadi config/config.php lalu isi sesuai lingkungan Anda.
 * File config/config.php TIDAK ikut di-commit ke Git (lihat .gitignore),
 * sehingga password database tidak pernah masuk ke repository publik.
 */
return [
    // Pengaturan database MySQL
    'db' => [
        'host'     => 'localhost',      // InfinityFree: contoh sqlXXX.infinityfree.com
        'port'     => 3306,
        'username' => 'root',           // InfinityFree: contoh if0_12345678
        'password' => '',               // ISI di config.php, jangan di file ini
        'database' => 'pasarkita',      // InfinityFree: contoh if0_12345678_pasarkita
    ],

    'app' => [
        'name'     => 'PasarKita',
        // URL dasar aplikasi tanpa garis miring di akhir.
        // Biarkan null agar dideteksi otomatis (mis. "/PasarKita" di Laragon, "" di hosting).
        'base_url' => null,
        // true = tampilkan detail error (hanya untuk pengembangan lokal)
        'debug'    => true,
        'timezone' => 'Asia/Jakarta',
        // Ongkos kirim flat (Rupiah) yang dihitung di server
        'shipping_cost' => 10000,
    ],
];
