import Image from "next/image";

export default function HeritageSection() {
  return (
    <section
      className="py-20 overflow-hidden"
      style={{ backgroundColor: "var(--foreground)" }}>
      <div className="container mx-auto px-6 lg:flex items-center gap-12">
        <div className="lg:w-1/2 mb-10 lg:mb-0 relative group">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-600/20 rounded-full blur-2xl group-hover:bg-yellow-600/40 transition duration-500"></div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              width={800}
              height={600}
              src="/program/program10.jpeg"
              alt="Gong Baleganjur"
              className="grayscale hover:grayscale-0 transition duration-700 object-cover w-full h-[450px] scale-100 hover:scale-105"
            />
          </div>

          {/* Label Floating */}
          <div className="absolute -bottom-6 -right-6 bg-yellow-600 p-6 rounded-lg hidden md:block shadow-xl transform group-hover:-translate-y-2 transition duration-500">
            <p
              className=" font-bold text-xl italic m-0"
              style={{ color: "var(--text-primary)" }}>
              "Ngajegang Budaya"
            </p>
          </div>
        </div>

        {/* Sisi Teks */}
        <div className="lg:w-1/2">
          <h4 className="text-yellow-600 font-semibold tracking-[0.2em] uppercase mb-3 text-sm">
            Misi Pelestarian
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[var(--text-primary)]">
            Menolak Menjadi Penonton <br />
            <span className="text-yellow-600">di Tanah Sendiri.</span>
          </h2>

          <div className="w-20 h-1 bg-yellow-600 mb-8"></div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed italic border-l-4 border-yellow-600/30 pl-4 text-[var(--text-secondary)]">
              “Perjuangan menghadirkan Gong Baleganjur adalah langkah menjaga
              agar anak cucu kita tetap bisa menabuh budaya sendiri, bukan hanya
              menjadi saksi bisu di tanah kelahirannya.”
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
              Mewujudkan seperangkat alat musik ini adalah ikhtiar kami untuk
              memastikan bahwa generasi penerus tidak kehilangan jati diri. Kami
              ingin mereka tumbuh menjadi pemain utama dalam harmoni tradisi
              Bali yang agung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
