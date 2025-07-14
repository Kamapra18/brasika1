"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../lib/supabase";
import GalleryFormModal from "./modalForm";

type Gallery = {
  id: string;
  image_url: string;
};

export default function GalleryTable() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null);

  const fetchGalleries = async () => {
    const { data, error } = await supabase.from("galleries").select("*");

    if (error) {
      alert("Gagal mengambil data galeri");
      console.error(error);
    } else {
      setGalleries(data);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Yakin ingin menghapus gambar ini?");
    if (!confirmed) return;

    const { error } = await supabase.from("galleries").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus gambar");
      console.error(error);
    } else {
      fetchGalleries();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGallery(null);
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 rounded shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold uppercase text-center sm:text-center my-6 mx-2">
          Galeri
        </h2>
        <div className="flex items-center justify-between mb-2">
          <a href="/dashboard" className="px-4 py-2 bg-black text-white rounded text-sm">
            Kembali
          </a>
          <button
            onClick={() => {
              setSelectedGallery(null);
              setIsModalOpen(true);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700"
          >
            + Tambah Gambar
          </button>
        </div>
      </div>

      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-2">Gambar</th>
              <th className="px-6 py-2 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {galleries.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-6 py-3">
                  <div className="relative w-32 h-20 rounded overflow-hidden border">
                    <Image
                      src={item.image_url}
                      alt="Galeri"
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-3 text-right space-x-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => {
                      setSelectedGallery(item);
                      setIsModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(item.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {galleries.map((item) => (
          <div key={item.id} className="border rounded shadow-sm p-4 space-y-2">
            <div className="relative w-full h-40 rounded overflow-hidden border">
              <Image
                src={item.image_url}
                alt="Galeri"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                onClick={() => {
                  setSelectedGallery(item);
                  setIsModalOpen(true);
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                onClick={() => handleDelete(item.id)}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      <GalleryFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSaved={fetchGalleries}
        initialData={selectedGallery}
      />
    </div>
  );
}
