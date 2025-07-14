"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

export default function HeroSection() {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundUrl, setBackgroundUrl] = useState("");

  useEffect(() => {
    const fetchHeroContent = async () => {
      const { data, error } = await supabase
        .from("homepage_hero")
        .select("*")
        .limit(1)
        .maybeSingle();

      if (data) {
        console.log("✅ Data Hero:", data); // Debug
        setHeadline(data.headline);
        setDescription(data.description);
        setBackgroundUrl(data.background_image_url);
      } else {
        console.error("Gagal mengambil data hero:", error?.message);
      }
    };

    fetchHeroContent();
  }, []);

  return (
    <section
      key={backgroundUrl}
      className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundUrl || "/hero.jpg"}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg uppercase"
        >
          {headline || "Selamat Datang di Website ST. BRASIKA ASTA DHARMA I"}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          {description ||
            "Bersama, kita menciptakan perubahan positif bagi masyarakat dengan semangat kepemimpinan, kreativitas, dan solidaritas"}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="/about"
            className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Tentang Kami
          </a>
          <a
            onClick={() =>
              document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })
            }
            href="#join"
            className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg shadow-md hover:bg-yellow-400 hover:text-gray-800 transition-all"
          >
            Ayo Beraksi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
