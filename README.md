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
