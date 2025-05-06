"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Struktur = () => {
    return (
        <section id="struktur" className="relative py-20 bg-white text-gray-800 text-center overflow-hidden">
            <div className="container relative mx-auto px-6 md:px-12 lg:px-20">
                <motion.h2 
                    className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Struktur Kepengurusan 2024 - 2026
                </motion.h2>

                {/* Ketua */}
                <motion.div 
                    className="flex flex-col items-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="relative p-3 bg-white rounded-full shadow-lg border-4 border-blue-900 hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Image src="/galeri/ketua.jpeg" alt="Ketua" width={140} height={140} className="rounded-full" />
                    </motion.div>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900">I Komang Juliartawan</h3>
                    <p className="text-gray-600 uppercase font-semibold">Ketua</p>
                </motion.div>

                {/* Wakil Ketua */}
                <motion.div 
                    className="flex flex-col items-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div 
                        className="relative p-3 bg-white rounded-full shadow-lg border-4 border-yellow-500 hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Image src="/galeri/wakil.jpg" alt="Wakil Ketua" width={130} height={130} className="rounded-full" />
                    </motion.div>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900">Ida Bagus Adi Saputra</h3>
                    <p className="text-gray-600 uppercase font-semibold">Wakil Ketua</p>
                </motion.div>

                {/* Sekretaris & Bendahara */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 justify-center">
                    {/* Sekretaris */}
                    <motion.div 
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <motion.div 
                            className="relative p-3 bg-white rounded-full shadow-lg border-4 border-gray-800 hover:scale-105 transition-transform"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image src="/galeri/sekre.jpg" alt="Sekretaris" width={120} height={120} className="rounded-full" />
                        </motion.div>
                        <h3 className="mt-4 text-xl font-bold text-gray-900">Ni Ketut Ari Pratiwi</h3>
                        <p className="text-gray-600 uppercase font-semibold">Sekretaris</p>
                    </motion.div>
                    
                    {/* Bendahara */}
                    <motion.div 
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <motion.div 
                            className="relative p-3 bg-white rounded-full shadow-lg border-4 border-blue-900 hover:scale-105 transition-transform"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image src="/galeri/bendahara.jpg" alt="Bendahara" width={120} height={120} className="rounded-full" />
                        </motion.div>
                        <h3 className="mt-4 text-xl font-bold text-gray-900">I Komang Ratnadi Putra</h3>
                        <p className="text-gray-600 uppercase font-semibold">Bendahara</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Struktur;
