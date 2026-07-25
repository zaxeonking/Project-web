# Portfolio — Public Site

Situs publik buat nampilin project yang statusnya **published**. Datanya diambil
dari Upstash Redis yang sama dengan yang dipakai project `portfolio-admin`.

## 1. Setup Upstash Redis (gratis)

1. Buka https://upstash.com → daftar/login (bisa pakai akun GitHub).
2. Buat **Redis database** baru (pilih region terdekat, misal Singapore).
3. Di halaman database, buka tab **REST API**, catat:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. Pakai 2 value ini di **kedua** project (public & admin) — supaya keduanya
   baca/tulis ke data yang sama.

## 2. Jalanin lokal (opsional)

```bash
npm install
cp .env.example .env.local
# isi .env.local dengan credential Upstash
npm run dev
```

Buka http://localhost:3000

## 3. Deploy ke Vercel

1. Push folder ini ke repo GitHub baru (misal `portfolio-public`).
2. Buka https://vercel.com/new, import repo tsb.
3. Framework preset: **Next.js** (otomatis kedetect).
4. Di step **Environment Variables**, tambahin:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
5. Klik **Deploy**.

Situs bakal otomatis update setiap kali ada perubahan status "published" di
dashboard admin — nggak perlu redeploy.

## Struktur

```
app/
  page.js              -> homepage, grid project yang published
  projects/[id]/page.js -> detail 1 project
  not-found.js
lib/redis.js            -> baca data dari Upstash
components/              -> ProjectCard, ProjectGrid (filter tag), Footer
```
