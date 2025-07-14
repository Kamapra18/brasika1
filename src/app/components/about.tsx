"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

type AboutSectionProps = {
  title: string;
  type: "short" | "full"; 
};

export default function AboutSection({ title, type }: AboutSectionProps) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      const { data, error } = await supabase
        .from("about_section")
        .select("*")
        .eq("page", "about")
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Gagal mengambil data:", error.message);
        return;
      }

      if (data) {
        setContent(type === "short" ? data.short_desc : data.full_desc);
      }
    };

    fetchAbout();
  }, [type]);

  return (
    <section id="about" className="py-20 bg-white text-gray-800 text-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-10 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700 text-justify indent-8 sm:indent-12"
        >
          {content}
        </motion.p>
      </div>
    </section>
  );
}
