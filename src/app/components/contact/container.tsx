import ContactInfo from "../contact/info";
import ContactMap from "../contact/map";

export default function ContactContainer() {
    return (
        <div>
            <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    Hubungi Kami
                </h1>
                <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
                    <ContactMap />
                    <ContactInfo />
                </div>
            </section>
        </div>
    );
}
