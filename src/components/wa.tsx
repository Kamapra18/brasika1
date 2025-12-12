import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton: React.FC = () => {
    const phoneNumber = "6285739122445"; 
    const message = "Halo, saya ingin bertanya seputar kegiatan Brasika I";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3 rounded-full shadow-lg transition duration-300 flex items-center gap-2"
        >
        <FaWhatsapp size={24} />
        <span className="hidden md:inline font-medium">Chat dengan kami</span>
        </a>
    );
};

export default WhatsAppFloatingButton;
