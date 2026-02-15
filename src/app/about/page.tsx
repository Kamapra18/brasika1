import NavbarSection from "../../components/navbar";
import AboutSection from "../../components/about";
import VisiSection from "../../components/visi";
import ProgramsSection from "../../components/programs";
import Struktur from "../../components/struktur";
import Footer from "../../components/footer";
import WhatsAppFloatingButton from "../../components/wa";
import HeritageSection from "@/components/heritage";

export default function AboutPage() {
  return (
    <div>
      <NavbarSection />
      <AboutSection title="Tentang Kami" type="full" />

      <HeritageSection />
      <VisiSection />
      <Struktur />

      <ProgramsSection showAll={true} />
      <WhatsAppFloatingButton />

      <Footer />
    </div>
  );
}
