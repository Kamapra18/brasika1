"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DataGallery } from "@/data/DataGalery";
import { GallerySectionProps } from "@/types/TypeGalery";

export default function GallerySection({
  title,
  description,
  isHomepage = false,
  moreLink,
}: GallerySectionProps) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const urls = DataGallery.map((item) => item.image_url);

    setImages(isHomepage ? urls.slice(0, 6) : urls);
  }, [isHomepage]);

  return (
    <section className="py-20 bg-background text-gray-800 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          {title}
        </motion.h2>

        <motion.p
          className="mt-4 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          {description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-64">
              <Image
                src={src}
                alt={`Galeri ${index + 1}`}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          ))}
        </div>

        {isHomepage && moreLink && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            <a
              href={moreLink}
              className="px-6 py-3 bg-blue-900 !text-white font-semibold rounded-lg shadow-md hover:!bg-blue-700 transition-all">
              Lihat Selengkapnya
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
