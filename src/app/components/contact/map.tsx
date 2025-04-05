export default function ContactMap() {
    return (
        <div className="w-full md:w-1/2">
            <iframe 
                className="w-full h-[400px] md:h-[300px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1554.2501742127133!2d115.36791910724031!3d-8.499657445929145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2172609cf4e89%3A0x780127ce656639c4!2sBALAI%20BANJAR%20PEKANDELAN!5e1!3m2!1sid!2sid!4v1743777367842!5m2!1sid!2sid"
                width="800" 
                height="650"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
}
