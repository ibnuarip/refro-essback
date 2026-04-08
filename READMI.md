# Web App Menggunakan React & ExpressJS

Belajar libary React untuk fronend & ExpressJS untuk backend

## Tech Stack

**Frontend:**
- React (Vite)
- JavaScript

**Backend:**
- Node.js
- Express

## Cara Menjalankan

### Prasyarat
Pastikan sudah terinstall:
- Node.js
- pnpm

### 1. Clone repository

```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
```

### 2. Jalankan Backend

```bash
cd backend
pnpm install
node index.js
```

Server berjalan di `http://localhost:3001`

### 3. Jalankan Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

App berjalan di `http://localhost:5173`

> Buka dua terminal agar frontend dan backend bisa jalan bersamaan.

## Environment Variables

Buat file `.env` di folder `backend`:

```
PORT=3001
```

## Lisensi

[MIT](https://choosealicense.com/licenses/mit/)