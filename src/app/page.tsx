
import AboutSection from "./components/about";
import HeroSection from "./components/hero";
import NavbarSection from "./components/navbar";
import ProgramsPage from "./components/programs";
import Footer from "./components/footer";
import GallerrySection from "./components/galery";
import ContactContainer from "./components/contact/container";
import WhatsAppFloatingButton from "./components/wa";

const galleryImages = [
  "/program1.jpg",
  "/galeri/galeri10.jpeg",
  "/galeri/galeri4.jpg",
  "/galeri/galeri15.jpeg",
  "/galeri/galeri12.jpg",
  "/galeri/no-ogoh.jpg",
];


const programs = [
  {
      image: "/program1.jpg",
      title: "Pengundian kupon berhadiah",
      description: "Program untuk penggalangan dana untuk khas Yowana."
  },
  {
    image: "/galeri/galeri10.jpeg",
    title: "Pematuh Agung",
    description: "Membuat Sekee Gong STT bernama Pematuh Agung."
},
  {
    image: "/galeri/galeri11.jpeg",
    title: "Pengerupukan",
    description: "Membuat Ogoh-ogoh dan fragment tari dalam pengerupukan."
},

];

export default function Home() {
  
  return (
    <div className="bg-gray-300">
      <NavbarSection/>
      <HeroSection/>

      <AboutSection
        title="Tentang Kami"
        description="Sekaa Teruna Teruni Brasika Asta Dharma I adalah wadah bagi generasi muda Banjar untuk berkarya, melestarikan budaya, dan mempererat kebersamaan. Kami aktif dalam berbagai kegiatan, mulai dari Pelatihan Tari & Tabuh, Pementasan Seni, hingga Odalan dan Upacara Keagamaan sebagai bentuk pelestarian tradisi. Selain itu, kami juga berkontribusi dalam bidang sosial dengan mengadakan Bakti Sosial dan Aksi Donor Darah secara rutin. Dengan semangat menyama braya, kami berkomitmen membangun generasi yang kreatif, peduli, dan berbudaya. 💙 Bersatu, Berkarya, Berbudaya! 💙"
      />
      <ProgramsPage programs={programs}/>
      <GallerrySection 
        title="Galeri Kegiatan"
        description="Lihat berbagai momen terbaik dalam kegiatan kami."
        images={galleryImages}
        moreLink="/gallery"
      />

      <ContactContainer/>
      <WhatsAppFloatingButton/>

      <Footer/>

    </div>
  );
}

// hover effect: (gray-600), (blue-500),(yellow-500)
// elemen(teks, tombol, border): (gray-800), (blue-900), (yellow-400)
// second: (gray-700), (blue-900), (yellow-400)