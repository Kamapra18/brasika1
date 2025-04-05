import NavbarSection from "../components/navbar";
import Footer from "../components/footer";
import ContactSection from "../components/contak";
import ContactContainer from "../components/contact/container";
import WhatsAppFloatingButton from "../components/wa";

const contacts = [
    { role: "Ketua", name: "I Komang Juliartawan",  phone: "+62 857-3912-2445" },
    { role: "Wakil Ketua", name: "Ida Bagus Adi Saputra", phone: "+62 877-7224-0003" },
    { role: "Sekretaris", name: "Ni Ketut Ari Pratiwi", phone: "+62 878-6314-0620" },
    { role: "Bendahara", name: "I Komang Ratnadi Putra", phone: "+62 831-1966-1811" },
    ];

export default function ContactPage() {
    return (
        <div>
            <NavbarSection />
            <div className="mt-10">
            <ContactSection 
                title="Kontak Kepengurusan"
                description="Hubungi tim kami untuk informasi lebih lanjut."
                contacts={contacts}
            />

            </div>

            <ContactContainer />
            <WhatsAppFloatingButton/>

            <Footer/>
        </div>
    );
}
