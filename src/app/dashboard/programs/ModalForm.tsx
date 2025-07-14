// components/ProgramFormModal.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Image from "next/image";

type Program = {
  id?: string;
  title: string;
  description: string;
  image_url: string;
  section: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Program;
  onSaved: () => void;
};

export default function ProgramFormModal({ isOpen, onClose, initialData, onSaved }: Props) {
  const [formData, setFormData] = useState<Omit<Program, "id">>({
    title: "",
    description: "",
    image_url: "",
    section: "homepage",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description,
        image_url: initialData.image_url,
        section: initialData.section,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        image_url: "",
        section: "homepage",
      });
    }
    setImageFile(null);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
  };

  const handleSave = async () => {
    setLoading(true);
    let imageUrl = formData.image_url;

    // Upload gambar jika ada file baru
    if (imageFile) {
      const filename = `program-${Date.now()}-${imageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("programs")
        .upload(filename, imageFile, { cacheControl: "3600", upsert: true });

      if (uploadError) {
        alert("Gagal mengunggah gambar.");
        setLoading(false);
        return;
      }

      const { data } = supabase.storage.from("programs").getPublicUrl(filename);
      imageUrl = data.publicUrl;
    }

    const dataToSend = {
      title: formData.title,
      description: formData.description,
      image_url: imageUrl,
      section: formData.section,
      updated_at: new Date(),
    };

    if (initialData?.id) {
      // Update
      const { error } = await supabase.from("programs").update(dataToSend).eq("id", initialData.id);
      if (error) {
        alert("Gagal mengupdate data!");
        setLoading(false);
        return;
      }
    } else {
      // Create
      const { error } = await supabase.from("programs").insert(dataToSend);
      if (error) {
        alert("Gagal menambahkan program!");
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    onSaved();
    onClose();
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
        <h2 className="text-2xl font-bold mb-4">
          {initialData?.id ? "Edit Program" : "Tambah Program"}
        </h2>

        <div className="mb-3">
          <label className="text-sm font-medium">Judul</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Deskripsi</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Gambar Program</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
          {formData.image_url && (
            <div className="relative w-32 h-32 mt-2">
              <Image
                src={formData.image_url}
                alt="preview"
                fill
                className="object-cover rounded"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3">
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