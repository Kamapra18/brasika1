"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

type Program = {
  id: string;
  title: string;
  description: string;
  image_url: string;
};

type ProgramsSectionProps = {
  showAll?: boolean; 
};

export default function ProgramsSection({ showAll = false }: ProgramsSectionProps) {
  const [programs, setPrograms] = useState<Program[]>([]);

  const fetchPrograms = async () => {
    let query = supabase
      .from("programs")
      .select("id, title, description, image_url")
      .order("created_at", { ascending: false });

    if (!showAll) {
      query = query.limit(3);
    }

    const { data, error } = await query;

    if (data) {
      setPrograms(data);
    } else {
      console.error("Gagal memuat program:", error?.message);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, [showAll]);

  return (
    <section
      id="programs"
      className="py-20 bg-gray-100 text-gray-800 text-center"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Kegiatan dan Program
        </motion.h2>

        <motion.p
          className="mt-4 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Berbagai kegiatan dan program kami bertujuan untuk meningkatkan keterampilan, kepemimpinan, serta kepedulian sosial para pemuda.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src={program.image_url}
                alt={program.title}
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="text-gray-600 mt-2">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-10">
            <a
              href="/about"
              className="inline-block px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition"
            >
              Lihat Semua
            </a>
          </div>
        )}
      </div>
    </section>
  );
}