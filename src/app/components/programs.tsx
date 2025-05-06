"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

type Program = {
    image: string;
    title: string;
    description: string;
};

type ProgramsPageProps = {
    programs: Program[];
};

const ProgramsPage: React.FC<ProgramsPageProps> = ({ programs }) => {
    return (
        <section id="programs" className="py-20 bg-gray-100 text-gray-800 text-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <motion.h2 
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.4 }}
                >Kegiatan dan Program</motion.h2>
                <motion.p className="mt-4 text-lg max-w-3xl mx-auto"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.4 }}>
                    Berbagai kegiatan dan program kami bertujuan untuk meningkatkan keterampilan, kepemimpinan, serta kepedulian sosial para pemuda.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {programs.map((program, index) => (
                        <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}>
                            <Image src={program.image} alt={program.title} width={400} height={256} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{program.title}</h3>
                                <p className="text-gray-600 mt-2">{program.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default ProgramsPage;
