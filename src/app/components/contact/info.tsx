import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <div className="w-full md:w-1/2 text-gray-900 font-semibold text-lg md:pl-6 mt-4 md:mt-0 space-y-4">
            <p className="flex items-center gap-3 hover:text-gray-700 transition-all">
                <FaMapMarkerAlt className="text-yellow-500 text-3xl" /> 
                Jl. Arjuna, Br. Pekandelan, Nyalian, Kec. Banjarangkan, Kabupaten Klungkung, Bali
            </p>
            <p className="flex items-center gap-3 hover:text-blue-500 transition-all">
                <FaPhoneAlt className="text-yellow-500 text-2xl" /> +62 857-3912-2445
            </p>
            <p className="flex items-center gap-3 hover:text-yellow-500 transition-all">
                <FaEnvelope className="text-yellow-500 text-2xl" /> brasika1@gmail.com
            </p>
            <div>
                <p className="flex items-center gap-3 hover:text-blue-500 transition-all">
                    <FaGlobe className="text-yellow-500 text-2xl" /> Media Sosial
                </p>
                <div className="flex justify-center gap-6 mt-4 pt-5 text-3xl">
                    <a href="https://www.facebook.com/bersamapekandelan?locale=id_ID" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-all "target="_blank">
                        <FaFacebook />
                    </a>
                    <a href="https://wa.me/6285739122445" className="flex items-center gap-2 text-[#25D366] hover:text-[#1ebe5d] transition-all" target="_blank">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/brasika.1?igsh=MWs3MGdhaDliZ2oxbw==" className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition-all" target="_blank">
                        <FaInstagram /> 
                    </a>
                </div>
            </div>
        </div>
    );
}
