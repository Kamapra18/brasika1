"use client";

import React from "react";
import { motion } from "framer-motion";

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
                <motion.h2
                    className="text-3xl md:text-4xl font-bold"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.4 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="mt-4 text-lg max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.4 }}
                >
                    {description}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold">{contact.role}</h3>
                            <p className="text-gray-600 mt-2">{contact.name}</p>
                            <p className="text-gray-500">{contact.phone}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
