"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Gallery = {
  id?: string;
  image_url?: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
  initialData?: Gallery | null;
};

export default function GalleryFormModal({
  isOpen,
  onClose,
  onSaved,
  initialData,
}: Props) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData?.image_url) {
      setPreviewUrl(initialData.image_url);
    } else {
      setPreviewUrl(null);
    }
  }, [initialData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    let uploadedUrl = initialData?.image_url || "";

    try {
      if (imageFile) {
        const fileName = `gallery-${Date.now()}.${imageFile.name.split(".").pop()}`;
        const { error: uploadError } = await supabase.storage
          .from("galery")
          .upload(fileName, imageFile);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("galery")
          .getPublicUrl(fileName);

        uploadedUrl = publicUrlData.publicUrl;
      }

      if (initialData) {
        const { error } = await supabase
          .from("galleries")
          .update({ image_url: uploadedUrl})
          .eq("id", initialData.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("galleries")
          .insert({ image_url: uploadedUrl});

        if (error) throw error;
      }

      onSaved();
      onClose();
    } catch (err) {
      alert("Terjadi kesalahan saat menyimpan data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Gambar" : "Tambah Gambar"}
        </h2>

        {previewUrl && (
          <div className="relative w-full h-52 mb-4 rounded overflow-hidden">
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              className="object-cover rounded"
            />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 border p-2 rounded w-full"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={loading}
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}
