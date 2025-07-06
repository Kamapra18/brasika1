import NavbarSection from "../components/navbar";
import AboutSection from "../components/about";
import VisiSection from "../components/visi";
import ProgramsPage from "../components/programs";
import Struktur from "../components/struktur";
import Footer from "../components/footer";
import WhatsAppFloatingButton from "../components/wa";

// Data Programs
const programs = [
    {
        image: "/program1.jpg",
        title: "Pengundian kupon berhadiah",
        description: "Program untuk penggalangan dana untuk khas Yowana."
    },
    {
        image: "/galeri/ngayah4.jpg",
        title: "Ngayah",
        description: "Aturan ngayah di pura dan lingkungan banjar."
    },
    {
        image: "/program7.jpg",
        title: "Lomba Bulan Bahasa Bali",
        description: "Meraih juara 3 dalam lomba mapidarta bulan Bahasa Bali."
    },
    {
        image: "/galeri/galeri10.jpeg",
        title: "Pematuh Agung",
        description: "Membuat Sekee Gong STT bernama Pematuh Agung."
    },
    {
        image: "/galeri/alit.jpeg",
        title: "Sekee Gong Alit",
        description: "Pembentukan Sekee Gong Alit-alit"
    },
    {
        image: "/galeri/galeri11.jpeg",
        title: "Pengerupukan",
        description: "Membuat Ogoh-ogoh dan fragment tari dalam pengerupukan."
    },
    ];

export default function AboutPage(){
    return (
        <div>
            <NavbarSection/>
            <AboutSection
                title="Tentang Kami"
                description="Selamat datang di website resmi ST. Brasika Asta Dharma I, wadah pemuda-pemudi Banjar yang berkomitmen untuk melestarikan budaya, mempererat solidaritas, dan berkontribusi dalam pembangunan masyarakat. Sebagai generasi muda Bali, kami berperan aktif dalam kegiatan adat, sosial, dan seni guna menjaga warisan leluhur sekaligus berinovasi di era modern. Dengan semangat menyama braya dan kebersamaan, kami terus bergerak maju untuk menciptakan komunitas yang harmonis, kreatif, dan berdaya saing. Melalui berbagai program unggulan, kami berupaya menghadirkan dampak positif bagi anggota STT maupun masyarakat luas, di antaranya Bidang Budaya dan Keagamaan, seperti Pelatihan Tari & Tabuh yang sesekali dilakukan untuk melestarikan seni tari dan gamelan, Penyelenggaraan Odalan dan Upacara Keagamaan sebagai bentuk partisipasi aktif dalam kegiatan adat, serta Pementasan Seni yang menampilkan berbagai pertunjukan dalam event budaya. Sementara dalam Bidang Sosial dan Kemasyarakatan, kami mengadakan Kegiatan Bakti Sosial seperti gotong royong di pura dan lingkungan banjar.
                
                Dengan berbagai kegiatan tersebut, kami berharap dapat terus berkontribusi dalam menjaga nilai-nilai budaya serta meningkatkan kesejahteraan sosial. Mari bersama membangun generasi muda yang solid, kreatif, dan berjiwa sosial tinggi! 💙 Bersatu, Berkarya, Berbudaya! 💙"
            />
            <p>
            </p>
            <VisiSection/>
            <Struktur/>

            <ProgramsPage programs={programs}/>
            <WhatsAppFloatingButton/>

            <Footer/>
        </div>
    );
}