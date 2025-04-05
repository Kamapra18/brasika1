import React from "react";

type ContactPerson = {
    role: string;
    name: string;
    phone: string;
};

type ContactSectionProps = {
    title: string;
    description: string;
    contacts: ContactPerson[];
};

const ContactSection: React.FC<ContactSectionProps> = ({ title, description, contacts }) => {
    return (
        <section id="contact" className="py-20 bg-gray-100 text-gray-800 text-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {contacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-2">
                    <h3 className="text-xl font-semibold">{contact.role}</h3>
                    <p className="text-gray-600 mt-2">{contact.name}</p>
                    <p className="text-gray-500">{contact.phone}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default ContactSection;
