"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import KepengurusanFormModal from "./FormModal";
import Image from "next/image";

type Pengurus = {
  id: string;
  name: string;
  position: "ketua" | "wakil" | "sekretaris" | "bendahara";
  phone: string;
  photo_url: string;
};

const posisiUrut = ["ketua", "wakil", "sekretaris", "bendahara"];

export default function KepengurusanTable() {
  const [pengurus, setPengurus] = useState<Pengurus[]>([]);
  const [selectedPengurus, setSelectedPengurus] = useState<Pengurus | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    const { data, error } = await supabase.from("kepengurusan").select("*");

    if (error) {
      alert("Gagal mengambil data pengurus");
      console.error(error);
    } else {
      const withUrls = data.map((item) => ({
        ...item,
        photo_url: item.photo_url || "/placeholder.jpg",
      }));

      const sorted = withUrls.sort(
        (a, b) =>
          posisiUrut.indexOf(a.position) - posisiUrut.indexOf(b.position)
      );

      setPengurus(sorted);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPengurus(null);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold uppercase text-center sm:text-center my-5 mx-2">
          Struktur Kepengurusan
        </h2>
        <div className="flex items-center justify-between mb-2">
          <a
            href="/dashboard"
            className="px-4 py-2 bg-black text-white rounded text-sm">
            Kembali
          </a>
        </div>
      </div>

      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-2">Foto</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Posisi</th>
              <th className="px-4 py-2">Telepon</th>
              <th className="px-4 py-2 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pengurus.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-2">
                  <div className="relative w-14 h-14">
                    <Image
                      src={p.photo_url}
                      alt={p.name}
                      fill
                      className="object-cover rounded-full"
                      sizes="56px"
                    />
                  </div>
                </td>
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2 capitalize">{p.position}</td>
                <td className="px-4 py-2">{p.phone}</td>
                <td className="px-4 py-2 text-right">
                  <button
                    onClick={() => {
                      setSelectedPengurus(p);
                      setIsModalOpen(true);
                    }}
                    className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {pengurus.map((p) => (
          <div
            key={p.id}
            className="border rounded p-4 flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 shrink-0">
                <Image
                  src={p.photo_url}
                  alt={p.name}
                  fill
                  className="object-cover rounded-full"
                  sizes="56px"
                />
              </div>
              <div>
                <div className="font-bold text-lg">{p.name}</div>
                <div className="capitalize text-gray-600 text-sm">
                  {p.position}
                </div>
                <div className="text-sm text-gray-500">{p.phone}</div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setSelectedPengurus(p);
                  setIsModalOpen(true);
                }}
                className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 mt-2">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedPengurus && (
        <KepengurusanFormModal
          isOpen={isModalOpen}
          pengurus={selectedPengurus}
          onClose={handleCloseModal}
          onSaved={() => {
            fetchData();
            handleCloseModal();
          }}
        />
      )}
    </div>
  );
}
