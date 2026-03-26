# 🎵 Music Player REST API

![Build Status](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-brightgreen)
![Node Version](https://img.shields.io/badge/Node-20-blue)
![Docker Ready](https://img.shields.io/badge/Docker-Ready-blue)

## 1. Deskripsi Project
**Music Player API** adalah layanan *backend* berbasis RESTful yang dikembangkan untuk mengelola koleksi lagu secara digital. API ini memungkinkan pengguna melakukan operasi **CRUD** (Create, Read, Update, Delete) pada data lagu secara efisien.

Project ini menggunakan teknologi terkini untuk menjamin skalabilitas dan keamanan:
* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript (Type-safe)
* **Testing**: Jest & ts-jest
* **Containerization**: Docker & Docker Compose

---

## 2. Dokumentasi API
**Base URL**: `http://localhost:3000/api`

### Endpoint List
| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| **GET** | `/songs` | Mengambil seluruh daftar lagu |
| **POST** | `/songs` | Menambahkan lagu baru ke koleksi |
| **GET** | `/songs/[id]` | Mengambil detail spesifik satu lagu |
| **PUT** | `/songs/[id]` | Memperbarui data lagu berdasarkan ID |
| **DELETE** | `/songs/[id]` | Menghapus lagu dari koleksi |

### Format Response

#### **Success (200 OK / 201 Created)**
```json
{
  "status": "success",
  "message": "Lagu ditemukan",
  "data": {
    "id": "1",
    "title": "Yellow",
    "artist": "Coldplay",
    "album": "Parachutes",
    "duration": 269
  }
}
```

## 3. Panduan Instalasi (Docker)
Aplikasi ini telah diisolasi menggunakan Docker untuk memastikan lingkungan pengembangan yang konsisten. Anda tidak perlu menginstal Node.js secara lokal.

### Langkah-langkah:
1. Pastikan Docker Desktop sudah berjalan di mesin Anda.
2. Jalankan perintah berikut untuk membangun image dan menyalakan kontainer:
   ```bash
   docker-compose up --build
   ```
3. Akses API melalui browser atau Postman di: http://localhost:3000/api/songs

## 4. Alur Kerja Git
Proyek ini dikembangkan menggunakan Feature Branch Workflow untuk menjaga stabilitas kode pada cabang utama.
Cabang (Branches):

* **main**: Cabang produksi yang berisi kode stabil.
* **develop**: Cabang utama untuk integrasi fitur sebelum masuk ke main.
* **feature/crud**: Cabang fitur tempat pengembangan API, Docker, dan Testing dilakukan.

### Bukti Penggunaan Conventional Commits
Proyek ini menerapkan standar **Conventional Commits** untuk memastikan riwayat pengembangan terdokumentasi dengan baik dan mudah dipahami oleh tim.

| Prefix | Contoh Pesan Commit | Tujuan |
| :--- | :--- | :--- |
| **feat** | `feat: implement crud api`, `feat: db` | Penambahan fitur atau fungsionalitas baru. |
| **test** | `test: implement unit testing for song crud logic` | Penambahan skenario pengujian atau unit testing. |
| **chore** | `chore: trigger github actions retry` | Tugas pemeliharaan, update konfigurasi, atau perubahan non-kode. |

---

## 5. Status Automasi (GitHub Actions)
Kami menerapkan **CI/CD/CS Pipeline** untuk menjamin kualitas, keamanan, dan reliabilitas perangkat lunak secara otomatis pada setiap perubahan kode.

### Status Pipeline:
![CI/CD Status](https://img.shields.io/badge/Workflow-Passing-brightgreen?style=flat-square&logo=github-actions) 
*(Catatan: Badge akan berubah secara dinamis mengikuti status build terakhir di GitHub)*

### Alur Kerja (Workflow):

* **Continuous Integration (CI):**
    Setiap kali terjadi *push* atau *pull request* ke branch utama, sistem secara otomatis menjalankan **Unit Test** menggunakan **Jest**. Hal ini memastikan bahwa perubahan kode terbaru tidak merusak logika bisnis CRUD yang sudah ada.

* **Continuous Security (CS):**
    Sistem melakukan pemindaian keamanan otomatis menggunakan `npm audit`. Proses ini bertujuan untuk mendeteksi celah keamanan (*vulnerability*) pada library pihak ketiga dengan tingkat risiko *high* atau lebih tinggi sebelum kode dianggap layak untuk digabung.

* **Docker Build Check:**
    Melakukan validasi terhadap file `Dockerfile` dengan menjalankan simulasi proses *build image* di lingkungan server GitHub Actions. Langkah ini menjamin bahwa aplikasi selalu dalam kondisi siap untuk di-*deploy* ke dalam kontainer kapan saja.
