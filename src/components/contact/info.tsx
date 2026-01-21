import { FaMapMarkedAlt, FaDirections } from "react-icons/fa";

export default function ContactInfo() {
  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=-8.499671,115.368841";

  return (
    <div className="w-full md:w-1/2 text-text-primary md:pl-8 mt-6 md:mt-0 flex flex-col justify-center">
      {/* Judul Kecil */}
      <div className="flex items-center gap-2 mb-3 text-text-primary/70">
        <FaMapMarkedAlt className="text-xl" />
        <span className="font-bold uppercase tracking-wider text-sm">
          Lokasi Kami
        </span>
      </div>

      {/* Deskripsi Naratif */}
      <h3 className="text-3xl font-bold mb-4 leading-tight">
        Kunjungi Balai Banjar Pekandelan
      </h3>

      <div className="space-y-4 mb-8">
        <p className="text-text-secondary font-semibold leading-relaxed">
          Jl. Arjuna, Br. Pekandelan, Desa Nyalian, Kec. Banjarangkan, Kabupaten
          Klungkung, Bali.
        </p>
      </div>

      {/* Button Action */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 bg-primary text-background hover:bg-transparent hover:text-text-primary border-2 border-text-primary font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 w-fit">
        <FaDirections className="text-xl" />
        Petunjuk Rute Navigasi
      </a>

      <p className="mt-4 text-xs text-text-secondary/60 italic">
        *Klik tombol di atas untuk membuka navigasi di Google Maps.
      </p>
    </div>
  );
}
