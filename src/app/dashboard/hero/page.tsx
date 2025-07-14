"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

export default function HeroSectionAdmin() {
  const [heroId, setHeroId] = useState<string | null>(null);
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null); // public URL
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [oldFilePath, setOldFilePath] = useState<string | null>(null); // path lama di bucket

  useEffect(() => {
    const fetchHero = async () => {
      const { data, error } = await supabase
        .from("homepage_hero")
        .select("*")
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Gagal mengambil data hero:", error.message);
      }

      if (data) {
        setHeroId(data.id);
        setHeadline(data.headline || "");
        setDescription(data.description || "");
        setBackgroundImage(data.background_image_url || null);
        setPreviewImage(data.background_image_url || null);

        // Simpan path lama untuk penghapusan nanti
        if (data.background_image_url) {
          const parts = data.background_image_url.split("/herobg/");
          if (parts.length === 2) setOldFilePath(parts[1]);
        }
      } else {
        alert("Gagal memuat data hero section.");
      }
    };

    fetchHero();
  }, []);

  const handleSave = async () => {
    let uploadedUrl = backgroundImage;

    // Jika ada gambar baru diunggah
    if (previewImage && previewImage !== backgroundImage) {
      const file = await fetch(previewImage).then((res) => res.blob());
      const filename = `hero-${Date.now()}.jpg`;

      const { error: uploadError } = await supabase.storage
        .from("herobg")
        .upload(filename, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) {
        alert("Gagal mengunggah gambar latar.");
        return;
      }

      const { data: urlData } = supabase.storage
        .from("herobg")
        .getPublicUrl(filename);

      uploadedUrl = urlData.publicUrl;

      // Hapus gambar lama jika ada
      if (oldFilePath) {
        const { error: deleteError } = await supabase.storage
          .from("herobg")
          .remove([oldFilePath]);

        if (deleteError) {
          console.warn("Gagal menghapus gambar lama:", deleteError.message);
        }
      }
    }

    if (heroId) {
      const { error: updateError } = await supabase
        .from("homepage_hero")
        .update({
          headline,
          description,
          background_image_url: uploadedUrl,
        })
        .eq("id", heroId);

      if (updateError) {
        alert("Gagal menyimpan perubahan");
      } else {
        alert("Perubahan berhasil disimpan!");
      }
    } else {
      alert("Data hero tidak ditemukan, tidak dapat diperbarui.");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-10 rounded shadow-md">
      <h2 className="text-4xl flex justify-center font-bold mb-4 uppercase">
        Edit Hero Section
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Headline
        </label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Deskripsi Singkat
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          rows={3}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gambar Latar
        </label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {previewImage && (
          <div className="mt-2 relative w-full h-64">
            <Image
              src={previewImage}
              alt="Preview"
              fill
              className="object-cover rounded"
            />
          </div>
        )}
      </div>

      <div className="my-3">
        <a
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          href="/dashboard">
          Kembali
        </a>
      </div>

      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
        Simpan Perubahan
      </button>
    </div>
  );
}
