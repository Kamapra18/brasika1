"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type GallerySectionProps = {
    title: string;
    description: string;
    images: string[];
    moreLink?: string;
};

const GallerySection: React.FC<GallerySectionProps> = ({
    title,
    description,
    images,
    moreLink,
}) => {
    return (
        <section id="gallery" className="py-20 bg-white text-gray-800 text-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.4 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="mt-4 text-lg max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.4 }}
                >
                    {description}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative w-full h-64"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <Image
                                src={src}
                                alt={`Galeri ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-md"
                            />
                        </motion.div>
                    ))}
                </div>

                {moreLink && (
                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3}}
                        viewport={{ once: false, amount: 0.4 }}
                    >
                        <a
                            href={moreLink}
                            className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
                        >
                            Lihat Selengkapnya
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;
