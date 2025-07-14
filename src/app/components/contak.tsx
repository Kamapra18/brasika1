"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

type ContactPerson = {
  role: string;
  name: string;
  phone: string;
};

export default function ContactSection() {
  const [contacts, setContacts] = useState<ContactPerson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data, error } = await supabase
        .from("kepengurusan")
        .select("name, position, phone");

      if (error) {
        console.error("Gagal memuat data kontak:", error);
      } else {
        const mapped = data.map((item) => ({
          role: convertPosition(item.position),
          name: item.name,
          phone: item.phone,
        }));
        setContacts(mapped);
      }
      setLoading(false);
    };

    fetchContacts();
  }, []);

  const convertPosition = (position: string) => {
    switch (position) {
      case "ketua":
        return "Ketua";
      case "wakil":
        return "Wakil Ketua";
      case "sekretaris":
        return "Sekretaris";
      case "bendahara":
        return "Bendahara";
      default:
        return position;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Kontak Pengurus
        </motion.h2>

        <motion.p
          className="mt-4 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Hubungi pengurus kami jika ada pertanyaan atau kerja sama terkait kegiatan Karang Taruna.
        </motion.p>

        {loading ? (
          <p className="mt-10 text-gray-500">Memuat data kontak...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl font-semibold">{contact.role}</h3>
                <p className="text-gray-600 mt-2">{contact.name}</p>
                <p className="text-gray-500">{contact.phone}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
