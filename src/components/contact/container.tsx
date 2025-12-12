"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "../contact/info";
import ContactMap from "../contact/map";

export default function ContactContainer() {
    return (
        <div>
            <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-10">
                <motion.h1
                    className="text-4xl font-bold text-gray-800 mb-8"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    Hubungi Kami
                </motion.h1>

                <motion.div
                    className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <ContactMap />
                    <ContactInfo />
                </motion.div>
            </section>
        </div>
    );
}
