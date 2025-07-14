"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

export default function VisiSection() {
  const [visi, setVisi] = useState("");
  const [misiList, setMisiList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("visi_misi")
        .select("type, content, sort_order")
        .order("sort_order", { ascending: true });

      if (error) {
        console.error("Gagal mengambil data visi dan misi", error);
        return;
      }

      const visiData = data.find((item) => item.type === "visi");
      const misiData = data.filter((item) => item.type === "misi");

      setVisi(visiData?.content || "");
      setMisiList(misiData.map((item) => item.content));
    };

    fetchData();
  }, []);

  return (
    <section id="visi" className="py-20 bg-gray-100 text-gray-800 text-center">
      <motion.h1
        className="text-3xl font-bold mb-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Visi dan Misi
      </motion.h1>

      <motion.p
        className="my-4 px-6 md:px-20 lg:px-48"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Jangan tunggu sempurna untuk memulai berkarya. Justru dari keberanianmu mencoba, perubahan lahir. Pemuda dan Pemudi bukan hanya pewaris masa depan, tapi juga penentu arah zaman.
      </motion.p>

      <div className="container flex flex-col lg:flex-row mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-2xl mb-2">Visi</h2>
          <p className="text-left">{visi}</p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-2xl mb-2">Misi</h2>
          <div className="text-left space-y-2">
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
