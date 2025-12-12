"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { visiMisiData } from "../data/DataVisi";

export default function VisiSection() {
  const [visi, setVisi] = useState("");
  const [misiList, setMisiList] = useState<string[]>([]);

  useEffect(() => {
    const visiData = visiMisiData.find((item) => item.type === "visi");
    const misiData = visiMisiData
      .filter((item) => item.type === "misi")
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));

    setVisi(visiData?.content || "");
    setMisiList(misiData.map((item) => item.content));
  }, []);

  return (
    <section id="visi" className="py-20 bg-gray-100 text-gray-800 text-center">
      <motion.h1
        className="text-3xl font-bold mb-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        Visi dan Misi
      </motion.h1>

      <motion.p
        className="my-4 px-6 md:px-20 lg:px-48"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}>
        Jangan tunggu sempurna untuk memulai berkarya. Justru dari keberanianmu
        mencoba, perubahan lahir. Pemuda dan Pemudi bukan hanya pewaris masa
        depan, tapi juga penentu arah zaman.
      </motion.p>

      <div className="container flex flex-col lg:flex-row mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}>
          <h2 className="font-bold text-2xl mb-2">Visi</h2>
          <p className="text-justify">{visi}</p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="font-bold text-2xl mb-2">Misi</h2>
          <div className="text-justify space-y-2">
            {misiList.map((misi, index) => (
              <p key={index}>
                <span className="font-bold">{index + 1}. </span>
                {misi}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
