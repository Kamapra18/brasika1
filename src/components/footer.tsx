"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-10">
            <div className="container mx-auto px-4 md:px-12 lg:px-20">

                {/* Logo, Navigasi */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    
                    {/* Logo kiri */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center md:justify-start"
                    >
                        <div className="w-20 h-20 relative">
                            <Image 
                                src="/logo-p2.png"
                                alt="Logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </motion.div>

                    {/* Navigasi */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="flex justify-center w-full md:w-1/3 space-x-6 text-sm"
                    >
                        <Link href="/" className="hover:underline hover:text-blue-400">BERANDA</Link>
                        <Link href="/about" className="hover:underline hover:text-blue-400">ABOUT</Link>
                        <Link href="/gallery" className="hover:underline hover:text-blue-400">GALERI</Link>
                        <Link href="/contact" className="hover:underline hover:text-blue-400">KONTAK</Link>
                    </motion.div>

                    {/* Kosong */}
                    <div className="hidden md:flex justify-end w-full md:w-1/3" />
                </div>

                {/* Deskripsi */}
                <motion.p
                    className="text-center max-w-2xl mx-auto text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: false }}
                >
                    Sekaa Teruna Teruni Brasika Asta Dharma I adalah wadah bagi generasi muda Banjar untuk berkarya, melestarikan budaya, dan mempererat kebersamaan.
                </motion.p>

                {/* Ikon Media Sosial */}
                <motion.div
                    className="flex justify-center space-x-6 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: false }}
                >
                    <a href="https://wa.me/6285739122445" className="hover:text-[#1ebe5d]" target="_blank">
                        <FaWhatsapp size={20} />
                    </a>
                    <a href="https://www.instagram.com/brasika.1?igsh=MWs3MGdhaDliZ2oxbw==" className="hover:text-pink-400" target="_blank">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://www.facebook.com/bersamapekandelan?locale=id_ID" className="hover:text-blue-500" target="_blank">
                        <FaFacebook size={20} />
                    </a>
                </motion.div>

                {/* Garis & Copyright */}
                <motion.hr
                    className="border-gray-700 mx-auto w-full mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: false }}
                />

                <motion.div
                    className="py-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: false }}
                >
                    <p className="text-center text-xs text-gray-300">
                        &copy; 2025 ST BRASIKA I. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
