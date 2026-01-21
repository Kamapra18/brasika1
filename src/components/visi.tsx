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
    <section
      id="visi"
      className="py-24 bg-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            Visi dan Misi
          </motion.h1>

          <motion.p
            className="text-lg leading-relaxed opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            &quot;Jangan tunggu sempurna untuk memulai berkarya. Justru dari
            keberanianmu mencoba, perubahan lahir. Pemuda dan Pemudi bukan hanya
            pewaris masa depan, tapi juga penentu arah zaman.&quot;
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Visi Card */}
          <motion.div
            className="bg-background shadow-xl rounded-2xl p-8 md:p-10 border border-black/5 dark:border-white/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
              <h2 className="font-bold text-3xl">Visi</h2>
            </div>
            <p className="text-xl leading-relaxed italic text-text-primary opacity-90">
              &quot;{visi}&quot;
            </p>
          </motion.div>

          {/* Misi Card */}
          <motion.div
            className="bg-background shadow-xl rounded-2xl p-8 md:p-10 border border-black/5 dark:border-white/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
              <h2 className="font-bold text-3xl">Misi</h2>
            </div>
            <div className="space-y-6">
              {misiList.map((misi, index) => (
                <div key={index} className="flex gap-5 items-start px-2">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-text-primary font-bold text-sm shadow-md border border-gray-300 dark:border-gray-600">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed pt-0.5 text-[1.1rem] text-text-secondary">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
