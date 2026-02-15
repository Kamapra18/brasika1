"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DataKepengurusan } from "@/data/DataKepengurusan";
import { TypeKepengurusan } from "@/types/TypeKepengurusan";

export default function Struktur() {
  const [pengurus, setPengurus] = useState<TypeKepengurusan[]>([]);

  useEffect(() => {
    // langsung set dari array
    setPengurus(DataKepengurusan);
  }, []);

  const getPengurusByPosition = (pos: TypeKepengurusan["position"]) =>
    pengurus.find((p) => p.position === pos);

  const ketua = getPengurusByPosition("ketua");
  const wakil = getPengurusByPosition("wakil");
  const sekre = getPengurusByPosition("sekretaris");
  const bendes = getPengurusByPosition("bendahara");

  return (
    <section
      id="struktur"
      className="relative py-20 bg-background text-gray-800 text-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-4xl md:text-4xl font-extrabold mb-12 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Struktur Kepengurusan 2023 - 2026
        </motion.h2>

        {/* KETUA */}
        {ketua && (
          <motion.div
            className="flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Link
              href={`/about/detailProfile?id=${ketua.id}`}
              className="relative p-3 bg-white rounded-full shadow-lg border-4 border-blue-900 hover:scale-105 transition-all group overflow-hidden">
              <Image
                src={ketua.photo_url}
                alt={ketua.name}
                width={140}
                height={140}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
                <span className="text-white text-xs font-bold bg-black/40 px-2 py-1 rounded">
                  Lihat Profil
                </span>
              </div>
            </Link>
            <h3 className="mt-4 text-2xl font-bold">{ketua.name}</h3>
            <p className="text-gray-600 uppercase font-semibold">Ketua</p>
          </motion.div>
        )}

        {/* WAKIL */}
        {wakil && (
          <motion.div
            className="flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Link
              href={`/about/detailProfile?id=${wakil.id}`}
              className="relative p-3 bg-white rounded-full shadow-lg border-4 border-yellow-500 hover:scale-105 transition-all group overflow-hidden">
              <Image
                src={wakil.photo_url}
                alt={wakil.name}
                width={130}
                height={130}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
                <span className="text-white text-xs font-bold bg-black/40 px-2 py-1 rounded">
                  Lihat Profil
                </span>
              </div>
            </Link>
            <h3 className="mt-4 text-2xl font-bold">{wakil.name}</h3>
            <p className="text-gray-600 uppercase font-semibold">Wakil Ketua</p>
          </motion.div>
        )}

        {/* SEKRETARIS & BENDAHARA */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 justify-center">
          {sekre && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <Link
                href={`/about/detailProfile?id=${sekre.id}`}
                className="relative p-3 bg-white rounded-full shadow-lg border-4 border-gray-800 hover:scale-105 transition-all group overflow-hidden">
                <Image
                  src={sekre.photo_url}
                  alt={sekre.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
                  <span className="text-white text-xs font-bold bg-black/40 px-2 py-1 rounded">
                    Lihat Profil
                  </span>
                </div>
              </Link>
              <h3 className="mt-4 text-xl font-bold">{sekre.name}</h3>
              <p className="text-gray-600 uppercase font-semibold">
                Sekretaris
              </p>
            </motion.div>
          )}

          {bendes && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <Link
                href={`/about/detailProfile?id=${bendes.id}`}
                className="relative p-3 bg-white rounded-full shadow-lg border-4 border-blue-900 hover:scale-105 transition-all group overflow-hidden">
                <Image
                  src={bendes.photo_url}
                  alt={bendes.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
                  <span className="text-white text-xs font-bold bg-black/40 px-2 py-1 rounded">
                    Lihat Profil
                  </span>
                </div>
              </Link>
              <h3 className="mt-4 text-xl font-bold">{bendes.name}</h3>
              <p className="text-gray-600 uppercase font-semibold">Bendahara</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
