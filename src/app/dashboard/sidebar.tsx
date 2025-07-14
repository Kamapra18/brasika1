"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3 lg:hidden">
        <div className="flex items-center gap-2">
          <Image src="/logo-p.jpg" alt="Logo" width={40} height={40} className="mix-blend-multiply" />
          <h1 className="text-xl font-bold uppercase">Brasika I</h1>
        </div>
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <aside className="hidden lg:flex w-64 min-h-screen bg-white border-r border-gray-200 p-4 pt-6 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Image src="/logo-p.jpg" alt="Logo" width={50} height={50} className="mix-blend-multiply" />
            <h1 className="text-3xl font-bold uppercase">Brasika I</h1>
          </div>
          <div className="h-1 bg-black mb-9"></div>
          <nav className="flex flex-col text-xl font-medium gap-4">
            <Link href="/dashboard" className="text-gray-700 hover:text-black">Dashboard</Link>
            <Link href="/dashboard/hero" className="text-gray-700 hover:text-black">Hero Section</Link>
            <Link href="/dashboard/about" className="text-gray-700 hover:text-black">About</Link>
            <Link href="/dashboard/visi" className="text-gray-700 hover:text-black">Visi & Misi</Link>
            <Link href="/dashboard/programs" className="text-gray-700 hover:text-black">Program</Link>
            <Link href="/dashboard/galeri" className="text-gray-700 hover:text-black">Galeri</Link>
            <Link href="/dashboard/pengurus" className="text-gray-700 hover:text-black">Kepengurusan</Link>
            <Link href="/dashboard/faq" className="text-gray-700 hover:text-black">FAQ</Link>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="mt-8 text-red-500 hover:text-red-700 text-left"
        >
          Logout
        </button>
      </aside>

      <div
        className={`fixed top-0 left-0 z-50 h-full w-1/2 bg-white border-r border-gray-200 p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Image src="/logo-p.jpg" alt="Logo" width={40} height={40} className="mix-blend-multiply" />
          <h1 className="text-md font-bold uppercase">Brasika I</h1>
        </div>
        <div className="h-1 bg-black mb-6"></div>
        <nav className="flex flex-col text-lg font-medium gap-4">
          <Link href="/dashboard" onClick={toggleMenu} className="text-gray-700 hover:text-black">Dashboard</Link>
          <Link href="/dashboard/hero" onClick={toggleMenu} className="text-gray-700 hover:text-black">Hero Section</Link>
          <Link href="/dashboard/about" onClick={toggleMenu} className="text-gray-700 hover:text-black">About</Link>
          <Link href="/dashboard/programs" onClick={toggleMenu} className="text-gray-700 hover:text-black">Program</Link>
          <Link href="/dashboard/galeri" onClick={toggleMenu} className="text-gray-700 hover:text-black">Galeri</Link>
          <Link href="/dashboard/pengurus" onClick={toggleMenu} className="text-gray-700 hover:text-black">Kepengurusan</Link>
          <Link href="/dashboard/faq" onClick={toggleMenu} className="text-gray-700 hover:text-black">FAQ</Link>
        </nav>
        <button
          onClick={() => {
            toggleMenu();
            handleLogout();
          }}
          className="mt-8 text-red-500 hover:text-red-700 text-left"
        >
          Logout
        </button>
      </div>
    </>
  );
}
