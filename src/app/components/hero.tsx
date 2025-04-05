"use client";
export default function HeroSection(){
    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById("programs");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <section className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 px-6 md:px-12 lg:px-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg uppercase">
                    Selamat Datang di Website <br /> ST. BRASIKA ASTA DHARMA I
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    Bersama, kita menciptakan perubahan positif bagi masyarakat dengan semangat kepemimpinan, kreativitas, dan solidaritas
                </p>
                <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
                    <a href="/about" className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">Tentang Kami</a>
                    <a onClick={handleScrollToAbout}
                    href="#join" className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg shadow-md hover:bg-yellow-400 hover:text-gray-800 transition-all">Ayo Beraksi</a>
                </div>
            </div>
        </section>
    );
}