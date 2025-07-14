"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

type Pengurus = {
  id: string;
  name: string;
  position: "ketua" | "wakil" | "sekretaris" | "bendahara";
  photo_url: string;
};

export default function Struktur() {
  const [pengurus, setPengurus] = useState<Pengurus[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("kepengurusan").select("*");

      if (error) {
        console.error("Gagal memuat data kepengurusan:", error.message);
        return;
      }

      const processedData = data.map((item) => {
        const isFullUrl = item.photo_url.startsWith("http");

        // Jika sudah URL langsung, pakai langsung. Kalau belum, generate public URL dari bucket
        const url = isFullUrl
          ? item.photo_url
          : supabase.storage.from("pengurus").getPublicUrl(item.photo_url).data.publicUrl;

        return {
          ...item,
          photo_url: url || "/placeholder.jpg",
        };
      });

      setPengurus(processedData);
    };

    fetchData();
  }, []);

  const getPengurusByPosition = (pos: Pengurus["position"]) =>
    pengurus.find((p) => p.position === pos);

  const ketua = getPengurusByPosition("ketua");
  const wakil = getPengurusByPosition("wakil");
  const sekre = getPengurusByPosition("sekretaris");
  const bendes = getPengurusByPosition("bendahara");

  return (
    <section id="struktur" className="relative py-20 bg-white text-gray-800 text-center overflow-hidden">
      <div className="container relative mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Struktur Kepengurusan 2024 - 2026
        </motion.h2>

        {ketua && (
          <motion.div
            className="flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative p-3 bg-white rounded-full shadow-lg border-4 border-blue-900 hover:scale-105 transition-transform">
              <Image
                src={ketua.photo_url}
                alt={ketua.name}
                width={140}
                height={140}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold">{ketua.name}</h3>
            <p className="text-gray-600 uppercase font-semibold">Ketua</p>
          </motion.div>
        )}

        {wakil && (
          <motion.div
            className="flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative p-3 bg-white rounded-full shadow-lg border-4 border-yellow-500 hover:scale-105 transition-transform">
              <Image
                src={wakil.photo_url}
                alt={wakil.name}
                width={130}
                height={130}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold">{wakil.name}</h3>
            <p className="text-gray-600 uppercase font-semibold">Wakil Ketua</p>
          </motion.div>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 justify-center">
          {sekre && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative p-3 bg-white rounded-full shadow-lg border-4 border-gray-800 hover:scale-105 transition-transform">
                <Image
                  src={sekre.photo_url}
                  alt={sekre.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">{sekre.name}</h3>
              <p className="text-gray-600 uppercase font-semibold">Sekretaris</p>
            </motion.div>
          )}

          {bendes && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative p-3 bg-white rounded-full shadow-lg border-4 border-blue-900 hover:scale-105 transition-transform">
                <Image
                  src={bendes.photo_url}
                  alt={bendes.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">{bendes.name}</h3>
              <p className="text-gray-600 uppercase font-semibold">Bendahara</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
