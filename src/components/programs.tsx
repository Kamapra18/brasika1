"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DataProgram } from "@/data/DataPrograms";
import { ProgramType } from "@/types/TypeProgram";

type ProgramsSectionProps = {
  showAll?: boolean;
};

export default function ProgramsSection({
  showAll = false,
}: ProgramsSectionProps) {
  const [programs, setPrograms] = useState<ProgramType[]>([]);

  useEffect(() => {
    if (showAll) {
      setPrograms(DataProgram);
    } else {
      setPrograms(DataProgram.slice(0, 3));
    }
  }, [showAll]);

  return (
    <section
      id="programs"
      className="py-20 bg-[var(--foreground)] text-gray-800 text-center">
      <div className="container  mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}>
          Kegiatan dan Program
        </motion.h2>

        <motion.p
          className="mt-4 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}>
          Berbagai kegiatan dan program kami bertujuan untuk meningkatkan
          keterampilan, kepemimpinan, serta kepedulian sosial para pemuda.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="bg-background rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}>
              <Image
                src={program.image}
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
              className="inline-block px-6 py-3 border-2 border-text-primary text-text-primary font-semibold rounded-lg hover:bg-background hover:text-text-primary transition">
              Lihat Semua
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
