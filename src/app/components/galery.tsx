import React from "react";
import Image from "next/image";

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
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {images.map((src, index) => (
                <div key={index} className="relative w-full h-64">
                <Image
                    src={src}
                    alt={`Galeri ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                />
                </div>
            ))}
            </div>
            {moreLink && (
                    <div className="mt-6">
                        <a
                            href={moreLink}
                            className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
                        >
                            Lihat Selengkapnya
                        </a>
                    </div>
                )}
        </div>
        </section>
    );
};

export default GallerySection;
