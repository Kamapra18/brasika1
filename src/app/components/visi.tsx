"use client";
import { motion } from "framer-motion";

export default function VisiSection() {
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
                Jangan tunggu sempurna untuk memulai berkarya. Justru dari keberanianmu mencoba, perubahanan lahir. Pemuda dan Pemudi bukan hanya pewaris masa depan, tapi juga penentu arah zaman.
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
                    <p className="text-left">
                        Menjadi Sekaa Teruna Teruni yang berbudaya, berdaya, dan bersatu dalam menjaga serta mengembangkan tradisi, seni, dan sosial kemasyarakatan di Banjar
                    </p>
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
                        <p className="font-bold">
                            1. Melestarikan Budaya:{" "}
                            <span className="font-normal ml-5">
                                Mengembangkan dan mempertahankan seni, adat, serta tradisi Bali melalui kegiatan budaya dan keagamaan.
                            </span>
                        </p>
                        <p className="font-bold">
                            2. Meningkatkan Solidaritas:{" "}
                            <span className="font-normal ml-5">
                                Menjalin kebersamaan dan kekompakan antar anggota STT dalam berbagai aspek kehidupan sosial dan keorganisasian.
                            </span>
                        </p>
                        <p className="font-bold">
                            3. Berperan Aktif dalam Masyarakat:{" "}
                            <span className="font-normal ml-5">
                                Terlibat dalam kegiatan sosial dan keagamaan yang bermanfaat bagi masyarakat Banjar.
                            </span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
