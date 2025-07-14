import NavbarSection from "../components/navbar";
import Footer from "../components/footer";
import ContactSection from "../components/contak";
import ContactContainer from "../components/contact/container";
import WhatsAppFloatingButton from "../components/wa";

export default function ContactPage() {
  return (
    <div>
      <NavbarSection />
      <div className="mt-10">
        <ContactSection />
      </div>

      <ContactContainer />
      <WhatsAppFloatingButton />

      <Footer />
    </div>
  );
}
