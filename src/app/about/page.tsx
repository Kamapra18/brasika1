import NavbarSection from "../components/navbar";
import AboutSection from "../components/about";
import VisiSection from "../components/visi";
import ProgramsSection from "../components/programs";
import Struktur from "../components/struktur";
import Footer from "../components/footer";
import WhatsAppFloatingButton from "../components/wa";


export default function AboutPage() {
  return (
    <div>
      <NavbarSection />
      <AboutSection title="Tentang Kami" type="full" />

      <p></p>
      <VisiSection />
      <Struktur />

      <ProgramsSection showAll={true} />
      <WhatsAppFloatingButton />

      <Footer />
    </div>
  );
}
