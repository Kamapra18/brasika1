"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminGuidePage() {
  const router = useRouter();

  return (
    <div className="p-4 sm:p-6 mt-6 bg-white border border-blue-100 rounded-xl shadow-sm text-sm text-gray-800 space-y-6">
      {/* Header */}
      <div className="bg-gray-900 px-4 sm:px-6 py-4 rounded-xl text-white font-semibold shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <Image
            className="rounded"
            src="/logo-p.jpg"
            alt="Logo"
            width={50}
            height={50}
          />
          <h1 className="text-lg sm:text-xl">
            Panduan Penggunaan Admin Dashboard
          </h1>
        </div>
        <button
          onClick={() => router.push("/dashboard")}
          className="flex items-center justify-center gap-1 text-sm bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200 transition">
          <ArrowLeft size={16} />
          Kembali
        </button>
      </div>

      {/* Informasi perangkat */}
      <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded text-sm shadow-sm">
        📱 <strong>Catatan:</strong> Untuk pengalaman terbaik saat mengelola
        konten, disarankan menggunakan perangkat <strong>desktop</strong> atau{" "}
        <strong>tablet</strong>. Beberapa fitur mungkin tidak tampil optimal di
        layar HP.
      </div>

      {/* Isi Panduan */}
      <div className="space-y-6">
        <Section title="🔐 Akses Login">
          <ul className="list-disc list-inside space-y-1 bg-gray-100">
            <li>Hanya admin dengan email terdaftar yang bisa login.</li>
            <li>Gunakan tombol logout setelah selesai untuk keamanan.</li>
          </ul>
        </Section>

        <Section title="🛠️ Fungsi Dashboard">
          <ul className="list-disc list-inside space-y-1">
            <li>Mengelola semua konten yang tampil di website.</li>
            <li>
              Semua data tersimpan otomatis di Supabase (tidak perlu simpan
              manual).
            </li>
          </ul>
        </Section>

        <Section title="🧭 Struktur Halaman Website">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Homepage</strong> menampilkan Hero, Deskripsi Singkat
              About, Program Pilihan, 6 Gambar Galeri, dan Kontak.
            </li>
            <li>
              <strong>About Page</strong> menampilkan deskripsi lengkap
              organisasi, semua program, dan struktur kepengurusan.
            </li>
            <li>
              <strong>Galeri Page</strong> menampilkan semua gambar dokumentasi
              yang diunggah.
            </li>
            <li>
              <strong>Contact Page</strong> berisi informasi kontak organisasi
              seperti alamat, nomor telepon, dan email.
            </li>
          </ul>
        </Section>

        <Section title="🏠 Hero Section (Beranda)">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Mengatur judul utama (headline), deskripsi singkat, dan gambar
              latar di homepage.
            </li>
            <li>Gunakan gambar landscape dengan ukuran sedang (maks 1MB).</li>
            <li>
              Pastikan kalimat singkat dan mencerminkan semangat organisasi.
            </li>
          </ul>
        </Section>

        <Section title="📖 About (Tentang Organisasi)">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Tersedia dua bagian: deskripsi singkat (tampil di homepage) dan
              versi lengkap (di halaman About).
            </li>
            <li>
              Admin dapat mengedit isi kedua bagian tersebut langsung melalui
              dashboard.
            </li>
            <li>
              Tuliskan dengan bahasa yang sopan dan menggambarkan kegiatan atau
              tujuan organisasi.
            </li>
          </ul>
        </Section>

        <Section title="🎯 Visi & Misi">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Admin dapat <strong>mengubah visi</strong> organisasi melalui
              textarea yang tersedia.
            </li>
            <li>
              Misi organisasi disimpan sebagai daftar poin dan bisa{" "}
              <strong>ditambah, diubah, atau dihapus</strong> dari dashboard.
            </li>
            <li>
              Setiap perubahan akan disimpan secara real-time ke Supabase dan
              ditampilkan pada halaman About publik.
            </li>
            <li>
              Pastikan setiap misi ditulis singkat, padat, dan sesuai dengan
              tujuan organisasi.
            </li>
          </ul>
        </Section>

        <Section title="📚 Program">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Program adalah kegiatan yang dijalankan oleh organisasi
              (pelatihan, lomba, sosial, dll).
            </li>
            <li>
              Admin bisa <strong>menambah, mengubah, dan menghapus</strong>{" "}
              program.
            </li>
            <li>Setiap program harus memiliki judul, deskripsi, dan gambar.</li>
            <li>
              Program bisa ditampilkan di homepage atau halaman about, sesuai
              pilihan saat membuatnya.
            </li>
          </ul>
        </Section>

        <Section title="👥 Struktur Kepengurusan">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Menampilkan pengurus inti: Ketua, Wakil, Sekretaris, dan
              Bendahara.
            </li>
            <li>
              Admin hanya bisa <strong>mengubah</strong> nama, nomor telepon,
              dan foto untuk tiap pengurus.
            </li>
            <li>
              Tidak bisa menambah atau menghapus jabatan. Hanya 4 orang tetap.
            </li>
            <li>Gunakan foto profil ukuran kecil (maks 1MB, rasio 1:1).</li>
          </ul>
        </Section>

        <Section title="🖼️ Galeri">
          <ul className="list-disc list-inside space-y-1">
            <li>Menampilkan dokumentasi foto kegiatan organisasi.</li>
            <li>
              Admin bisa <strong>menambah, mengubah, dan menghapus</strong>{" "}
              gambar.
            </li>
            <li>
              Maksimal 18 gambar bisa disimpan, tapi disarankan hanya unggah 16
              gambar agar lebih ringan.
            </li>
            <li>
              Ukuran gambar maksimal 1MB per file. Gunakan rasio kotak (1:1)
              atau horizontal (4:3).
            </li>
            <li>
              6 gambar pertama akan tampil di homepage, sisanya di halaman
              Galeri.
            </li>
          </ul>
        </Section>

        <Section title="💡 Tips Teknis & Keamanan">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Format gambar yang disarankan: <strong>.jpg</strong> atau{" "}
              <strong>.png</strong>.
            </li>
            <li>
              Hindari penggunaan .webp, .heic, atau .svg untuk menjaga
              kompatibilitas.
            </li>
            <li>
              Pastikan gambar tidak terlalu besar (maks 1MB) untuk performa yang
              baik.
            </li>
            <li>Pastikan koneksi internet stabil saat upload gambar.</li>
            <li>
              Jika file terlalu besar, upload bisa memakan waktu 5–10 detik.
            </li>
            <li>Jangan gunakan browser dalam mode incognito saat login.</li>
            <li>
              Jika database tidak aktif lebih dari 7 hari, situs bisa otomatis
              tertunda oleh Supabase.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
      <h2 className="text-base font-semibold mb-2 text-gray-700">{title}</h2>
      {children}
    </div>
  );
}
