import NavbarSection from "../components/navbar";
import GallerrySection from "../components/galery";
import Footer from "../components/footer";
import WhatsAppFloatingButton from "../components/wa";

const galleryImages = [
    "/program1.jpg", "/program3.jpg", "/galeri/galeri15.jpeg",
    "/galeri/galeri2.jpg", "/galeri/galeri11.jpeg", "/galeri/galeri.jpg",
    "/galeri/galeri4.jpg", "/galeri/galeri5.jpg", "/galeri/galeri6.jpg",
    "/galeri/galeri9.jpeg", "/galeri/galeri8.jpg", "/galeri/ngayah1.jpeg",
    "/galeri/galeri10.jpeg", "/galeri/ngayah4.jpg", "/galeri/ngayah.jpg",
    "/galeri/no-ogoh.jpg", "/galeri/ogoh-2023.jpg", "/galeri/galeri12.jpg",
    "/galeri/ngayah5.jpg", "/galeri/galeri14.jpg", "/galeri/galeri3.jpg",
    "/galeri/ogoh-2018.jpg", "/galeri/ngayah7.jpeg", "/galeri/ngayah8.jpeg",
    "/galeri/alit.jpeg", "/galeri/ngayah9.jpeg", "/galeri/ngayah10.jpg",

    ];

export default function GallerryPage(){
    return (
        <div>
            <NavbarSection/>
            <GallerrySection 
                title="Galeri Kegiatan"
                description="Lihat berbagai momen terbaik dalam kegiatan kami."
                images={galleryImages}
            />
            <WhatsAppFloatingButton/>
            <Footer/>
        </div>
    );
}