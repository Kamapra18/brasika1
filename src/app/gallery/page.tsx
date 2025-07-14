import NavbarSection from "../components/navbar";
import GallerySection from "../components/galery";
import Footer from "../components/footer";
import WhatsAppFloatingButton from "../components/wa";

export default function GallerryPage() {
  return (
    <div>
      <NavbarSection />
      <GallerySection
        title="Galeri Lengkap"
        description="Semua dokumentasi kegiatan kami dari berbagai momen penting."
      />

      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
}
