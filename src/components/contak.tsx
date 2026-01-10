"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeKepengurusan } from "@/types/TypeKepengurusan";
import { DataKepengurusan } from "@/data/DataKepengurusan";

export default function ContactSection() {
  const [contacts, setContacts] = useState<TypeKepengurusan[]>([]);

  useEffect(() => {
    setContacts(DataKepengurusan);
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-foreground text-gray-800 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Kontak Pengurus
        </motion.h2>

        <motion.p
          className="mt-4 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Hubungi pengurus kami jika ada pertanyaan atau kerja sama terkait
          kegiatan Karang Taruna.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg shadow-md p-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}>
              <h3 className="text-xl font-semibold">{contact.position}</h3>
              <p className="text-gray-600 mt-2">{contact.name}</p>
              <p className="text-gray-500">{contact.phone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
