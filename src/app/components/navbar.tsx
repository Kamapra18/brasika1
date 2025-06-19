"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavbarSection() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false); 
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <header className="bg-white p-5 shadow-md fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image
                            className="mix-blend-multiply"
                            src="/logo-p.jpg"
                            alt="logo"
                            width={40}
                            height={35}
                        />
                        <h1 className="text-2xl md:text-3x text-black font-bold uppercase">Brasika I</h1>
                    </div>
                    <nav className="hidden md:flex gap-10 uppercase">
                        <Link href="/" className="text-black hover:text-gray-600 group">
                            Beranda
                            <span className="block w-10 h-0.5 bg-gray-700 mt-1 mx-auto transition-all duration-300 ease-in-out opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></span>
                        </Link>
                        <Link href="/about" className="text-black hover:text-gray-600 group">
                            About
                            <span className="block w-10 h-0.5 bg-gray-600 mt-1 mx-auto transition-all duration-300 ease-in-out opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></span>
                        </Link>
                        <Link href="/gallery" className="text-black hover:text-gray-600 group">
                            Galeri
                            <span className="block w-10 h-0.5 bg-gray-700 mt-1 mx-auto transition-all duration-300 ease-in-out opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></span>
                        </Link>
                        <Link href="/contact" className="text-black hover:text-gray-600 group">
                            Kontak
                            <span className="block w-10 h-0.5 bg-gray-700 mt-1 mx-auto transition-all duration-300 ease-in-out opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></span>
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        {/* Burger Menu Button */}
                        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav
                    ref={menuRef}
                    className="md:hidden flex flex-col items-center gap-4 mt-20 pb-3 border-t bg-white shadow-md fixed top-0 left-0 w-full z-40"
                >
                    <Link href="/" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>Beranda</Link>
                    <Link href="/about" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/gallery" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>Galeri</Link>
                    <Link href="/contact" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>Kontak</Link>
                </nav>
            )}
        </>
    );
}
