import React from "react";
import Image from "next/image";

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
                <h2 className="text-3xl md:text-4xl font-bold">Kegiatan dan Program</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Berbagai kegiatan dan program kami bertujuan untuk meningkatkan keterampilan, kepemimpinan, serta kepedulian sosial para pemuda.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image src={program.image} alt={program.title} width={400} height={256} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{program.title}</h3>
                                <p className="text-gray-600 mt-2">{program.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default ProgramsPage;
