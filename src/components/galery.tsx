"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataGallery } from "@/data/DataGalery";
import { GallerySectionProps } from "@/types/TypeGalery";

export default function GallerySection({
  title,
  description,
  isHomepage = false,
  moreLink,
}: GallerySectionProps) {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            <motion.div
              key={index}
              className="relative w-full h-64 cursor-pointer overflow-hidden rounded-lg group"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(src)}>
              <Image
                src={src}
                alt={`Galeri ${index + 1}`}
                fill
                className="rounded-lg shadow-md object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {isHomepage && moreLink && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            <a
              href={moreLink}
              className="px-8 py-3 bg-blue-900 !text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-all">
              Lihat Selengkapnya
            </a>
          </motion.div>
        )}
      </div>

      {/* Lightbox / Full screen image view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 cursor-zoom-out">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Full preview"
                fill
                className="object-contain"
                priority
              />
              <button
                className="absolute -top-12 right-0 md:-right-12 text-white p-2 hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
