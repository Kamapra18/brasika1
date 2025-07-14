import AboutSection from "./components/about";
import HeroSection from "./components/hero";
import NavbarSection from "./components/navbar";
import ProgramsSection from "./components/programs";
import Footer from "./components/footer";
import GallerySection from "./components/galery";
import ContactContainer from "./components/contact/container";
import WhatsAppFloatingButton from "./components/wa";


export default function Home() {
  return (
    <div className="bg-gray-300">
      <NavbarSection />
      <HeroSection />

      <AboutSection title="Tentang Kami" type="short" />

      <ProgramsSection showAll={false} />
      <GallerySection
        title="Galeri Kegiatan"
        description="Berikut beberapa dokumentasi kegiatan terbaru kami."
        isHomepage={true}
        moreLink="/galeri"
      />

      <ContactContainer />
      <WhatsAppFloatingButton />

      <Footer />
    </div>
  );
}

// hover effect: (gray-600), (blue-500),(yellow-500)
// elemen(teks, tombol, border): (gray-800), (blue-900), (yellow-400)
// second: (gray-700), (blue-900), (yellow-400)
