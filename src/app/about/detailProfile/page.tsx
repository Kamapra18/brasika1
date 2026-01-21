"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DataKepengurusan } from "@/data/DataKepengurusan";
import { Suspense } from "react";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

function ProfileContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const person = DataKepengurusan.find((p) => p.id === id);

  if (!person) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary px-6">
        <h1 className="text-2xl font-bold mb-4">Profil tidak ditemukan</h1>
        <Link
          href="/about"
          className="text-blue-500 hover:underline flex items-center gap-2">
          <FaArrowLeft /> Kembali ke About
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12">
          <Link
            href="/#struktur"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors font-semibold group">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke Struktur
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Photo Section */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-white/10">
              <Image
                src={person.photo_url}
                alt={person.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-1.5 bg-foreground text-text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-black/5 dark:border-white/10">
                {person.position}
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-2 leading-tight">
                {person.name}
              </h1>
              <div className="w-20 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mb-8" />
            </div>

            <div className="space-y-6">
              {/* WhatsApp Section */}
              <div className="bg-foreground p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                <h2 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                  <span className="w-1 h-6 bg-gray-400 dark:bg-gray-600 rounded-full" />
                  Hubungi Langsung
                </h2>
                {person.phone && (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm border border-green-200 dark:border-green-800/30">
                      <FaWhatsapp size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">
                        WhatsApp
                      </p>
                      <a
                        href={`https://wa.me/${person.phone.replace(/^0/, "62")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-text-primary hover:text-green-600 transition-colors">
                        +{person.phone.replace(/^0/, "62")}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Media Section */}
              <div className="bg-foreground p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                <h2 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                  <span className="w-1 h-6 bg-gray-400 dark:bg-gray-600 rounded-full" />
                  Media Sosial
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {person.facebook && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-200 dark:border-blue-800/30">
                        <FaFacebook size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-text-secondary uppercase font-bold tracking-widest">
                          Facebook
                        </p>
                        <a
                          href={`https://facebook.com/${person.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-text-primary hover:text-pink-600 transition-colors">
                          @{person.facebook}
                        </a>
                      </div>
                    </div>
                  )}

                  {person.instagram && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 shadow-sm border border-pink-200 dark:border-pink-800/30">
                        <FaInstagram size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-text-secondary uppercase font-bold tracking-widest">
                          Instagram
                        </p>
                        <a
                          href={`https://instagram.com/${person.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-text-primary hover:text-pink-600 transition-colors">
                          @{person.instagram}
                        </a>
                      </div>
                    </div>
                  )}

                  {person.tiktok && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700">
                        <FaTiktok size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-text-secondary uppercase font-bold tracking-widest">
                          TikTok
                        </p>
                        <a
                          href={`https://tiktok.com/@${person.tiktok}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-text-primary hover:text-gray-500 transition-colors">
                          @{person.tiktok}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-foreground p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                <h2 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                  <span className="w-1 h-6 bg-gray-400 dark:bg-gray-600 rounded-full" />
                  Biografi Singkat
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Sebagai {person.position} ST. Brasika Asta Dharma I periode
                  2024-2026, {person.name} berkomitmen untuk menjalankan tugas
                  dengan penuh tanggung jawab dan dedikasi tinggi demi kemajuan
                  organisasi dan kebersamaan seluruh anggota STT.
                </p>
              </div>

              <div className="bg-foreground p-6 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                <h2 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                  <span className="w-1 h-6 bg-gray-400 dark:bg-gray-600 rounded-full" />
                  Motto
                </h2>
                <p className="text-xl italic text-text-primary font-medium opacity-90 leading-relaxed">
                  &quot;
                  {person.motto ||
                    "Bersama Membangun Negeri, Berkarya untuk Banjar."}
                  &quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function DetailProfile() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }>
      <ProfileContent />
    </Suspense>
  );
}
