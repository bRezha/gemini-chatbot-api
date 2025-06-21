# AI API Integration & Chatbot with Gemini

Proyek ini merupakan bagian dari program **"Maju Bareng AI"** oleh Hacktiv8, didukung oleh Google.org dan Asian Development Bank. Fokus utamanya adalah membekali pengembang dengan keterampilan AI praktis, termasuk pemahaman prompt engineering, pembuatan situs web berbasis AI, serta implementasi dan konfigurasi Google Gemini AI API untuk membangun chatbot multimodal yang cerdas.

## Gambaran Umum Proyek

Aplikasi ini mengintegrasikan model Gemini AI untuk menghasilkan respons chatbot yang kaya, kontekstual, dan mirip manusia. Ini menggantikan logika berbasis aturan tradisional dengan respons cerdas dan *real-time* yang beradaptasi dengan masukan pengguna. Arsitektur ini dirancang untuk menjaga logika AI di sisi *backend* guna memastikan keamanan dan skalabilitas, sekaligus memberikan pengalaman percakapan yang mulus kepada pengguna.

## Fitur Utama & API Endpoints

Proyek ini menyediakan API Node.js + ExpressJS dasar untuk mengintegrasikan Google Gemini AI, mendukung berbagai masukan multimodal:

* **Integrasi Chatbot:** Memungkinkan respons AI yang cerdas untuk input pengguna.
* **Penanganan File Multimodal:** Mampu memproses input berupa teks, audio, gambar, atau dokumen.
* **Keamanan API:** Kunci API dikelola dengan aman melalui file `.env`.
* **Pembersihan Otomatis:** Memastikan file unggahan sementara dihapus setelah pemrosesan.
* **Model:** Dikonfigurasi untuk menggunakan `models/gemini-1.5-flash` untuk kemampuan multimodal.

**Endpoints API yang Disediakan:**

* `POST /api/chat`: Endpoint utama untuk interaksi chatbot berbasis teks.
* `POST /generate-text`: Untuk menghasilkan teks dari input teks.
* `POST /generate-from-image`: Untuk memproses dan menghasilkan respons dari input gambar.
* `POST /generate-from-document`: Untuk memproses dan menghasilkan respons dari input dokumen.
* `POST /generate-from-audio`: Untuk memproses dan menghasilkan respons dari input audio.

## Alur Kerja Aplikasi Chatbot

Aplikasi ini mengimplementasikan alur kerja menggunakan *frontend* Vanilla JavaScript dan *backend* Node.js + Express.

1.  Ketika pengguna mengirim pesan melalui formulir obrolan, *frontend* akan mengirimkan permintaan `POST` ke endpoint `/api/chat` pada *backend*.
2.  *Backend* kemudian menggunakan metode `generateContent()` dari Gemini SDK untuk meminta model AI dengan pesan pengguna.
3.  Setelah Gemini mengembalikan respons, respons tersebut dikirim kembali ke *frontend* dan ditampilkan di antarmuka obrolan.

## Teknologi & Dependensi

Proyek ini dibangun menggunakan teknologi berikut:

* **Node.js** (v18+)
* **Express**: Framework web untuk menyiapkan REST API.
* **Dotenv**: Untuk memuat kunci API Gemini dengan aman dari file `.env`.
* **@google/generative-ai**: Untuk menghubungkan ke Google Gemini API (termasuk Flash 1.5).
* **CORS**: Mengizinkan permintaan lintas-origin (untuk pemisahan *frontend*/*backend*).
* **Multer**: (Secara implisit digunakan untuk penanganan unggahan file yang disebutkan dalam deskripsi *commit*).

## Struktur File Proyek

* `.env`: Berisi variabel lingkungan, terutama kunci API Gemini Anda (`GEMINI_API_KEY=your_credential_key`).
* `package.json`: Mendefinisikan dependensi dan skrip untuk aplikasi Node.js.
* `index.js`: Berisi semua logika untuk *endpoint* REST yang berinteraksi dengan Gemini AI. Ini mengatur aplikasi Express, terhubung ke model Gemini 1.5 Flash, mendefinisikan *endpoint*, serta menangani *parsing* permintaan, unggahan file, manajemen *error*, dan respons.
* `uploads/`: Folder untuk menyimpan file yang diunggah sementara (seharusnya diabaikan oleh Git).

## Persiapan Proyek (Setup)

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Buat Direktori Proyek:**
    ```bash
    $ mkdir gemini-chatbot-api
    $ cd gemini-chatbot-api
    ```
2.  **Inisialisasi Proyek Node.js:**
    ```bash
    $ npm init -y
    ```
3.  **Instal Dependensi:**
    ```bash
    $ npm install express dotenv cors @google/generative-ai
    ```
4.  **Konfigurasi Variabel Lingkungan:**
    Buat file `.env` di *root* proyek Anda dan tambahkan kunci API Gemini Anda:
    ```dotenv
    GEMINI_API_KEY=your_credential_key_here
    ```
    (Ganti `your_credential_key_here` dengan kunci API Gemini Anda yang sebenarnya dari Google Gemini Studio.)
5.  **Tulis Logika Aplikasi:**
    Isi file `index.js` dengan logika *backend* API Anda seperti yang dijelaskan dalam materi.

## Tools yang Digunakan

Selama pengembangan dan pengujian proyek ini, tools berikut digunakan:

* **Node.js** (v18+)
* **Visual Studio Code**: Lingkungan pengembangan terintegrasi (IDE) yang direkomendasikan dengan ekstensi seperti REST Client, Prettier, dan dukungan `.env`.
* **Postman**: Digunakan untuk pengujian API.
* **Git** (v2.40+): Sistem kontrol versi. Pastikan untuk mengkonfigurasi `user.name` dan `user.email` Anda.
* **GitHub**: Platform berbasis web untuk submit proyek melalui repositori publik/pribadi.
* **Google Gemini Studio**: Untuk menghasilkan dan menyalin kunci API Gemini ke file `.env`.
* **Terminal / CLI**: Digunakan untuk menjalankan perintah `npm`, `node`, `git`, dll.

## Hasil dan Pembelajaran yang Diharapkan

Melalui proyek ini, peserta akan:

* Memahami cara mengintegrasikan model AI Gemini untuk mendukung respons chatbot.
* Meningkatkan produktivitas menggunakan alat AI dan menguasai *prompt engineering*.
* Membangun situs web yang didukung AI.
* Mampu mengimplementasikan Google Gemini AI API, konfigurasi model, dan mengembangkan chatbot cerdas dengan kemampuan multimodal.
