import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

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
            </div>
        </div>
    );
}
