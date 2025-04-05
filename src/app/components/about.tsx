type AboutSectionProps = {
    title: string;
    description: string;
};

export default function AboutSection({ title, description }: AboutSectionProps) {
    return (
        <section id="about" className="py-20 bg-white text-gray-800 text-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-10 max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    {title}
                </h2>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700 text-justify indent-8 sm:indent-12">
                    {description}
                </p>
            </div>
        </section>
    );
}
