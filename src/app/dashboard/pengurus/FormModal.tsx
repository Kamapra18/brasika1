"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Image from "next/image";

type Pengurus = {
  id: string;
  name: string;
  position: "ketua" | "wakil" | "sekretaris" | "bendahara";
  phone: string;
  photo_url: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  pengurus: Pengurus;
  onSaved: () => void;
};

export default function KepengurusanFormModal({ isOpen, onClose, pengurus, onSaved }: Props) {
  const [formData, setFormData] = useState<Pengurus>(pengurus);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData(pengurus);
  }, [pengurus]);

  const handleChange = (field: keyof Pengurus, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const oldImagePath = formData.photo_url.split("/").pop(); // ambil nama file lama
    const filename = `pengurus-${formData.position}-${Date.now()}.jpg`;

    const { error: uploadError } = await supabase.storage
      .from("pengurus")
      .upload(filename, file, { upsert: true });

    if (uploadError) {
      alert("Gagal mengunggah foto");
      return;
    }

    if (oldImagePath) {
      await supabase.storage.from("pengurus").remove([oldImagePath]);
    }

    const { data: urlData } = supabase.storage.from("pengurus").getPublicUrl(filename);
    handleChange("photo_url", urlData.publicUrl);
  };

  const handleSave = async () => {
    setLoading(true);

    const { error } = await supabase
      .from("kepengurusan")
      .update({
        name: formData.name,
        phone: formData.phone,
        photo_url: formData.photo_url,
      })
      .eq("id", formData.id);

    if (error) {
      alert("Gagal menyimpan data!");
    } else {
      alert("Data berhasil disimpan");
      onSaved();
      onClose();
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 capitalize">Edit {pengurus.position}</h2>

        <div className="mb-3">
          <label className="block text-sm font-medium">Nama</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded mt-1"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium">No. Telepon</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded mt-1"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium">Foto</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full mt-1 border rounded px-3 py-2 cursor-pointer"
          />
          {formData.photo_url && (
            <div className="mt-2 relative w-32 h-32">
              <Image
                src={formData.photo_url}
                alt={formData.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}
