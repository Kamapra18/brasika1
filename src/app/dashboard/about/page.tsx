"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AboutSectionAdmin() {
  const [snippet, setSnippet] = useState("");
  const [fullContent, setFullContent] = useState("");
  const [aboutId, setAboutId] = useState<string | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      const { data, error } = await supabase
        .from("about_section")
        .select("*")
        .eq("page", "about")
        .limit(1)
        .maybeSingle();

      if (data) {
        setAboutId(data.id); 
        setSnippet(data.short_desc || "");
        setFullContent(data.full_desc || "");
      } else {
        console.error("Gagal mengambil data about:", error?.message);
      }
    };

    fetchAbout();
  }, []);

  const handleSave = async () => {
    if (!aboutId) {
      alert("ID data tidak ditemukan. Gagal menyimpan.");
      return;
    }

    const { error } = await supabase
      .from("about_section")
      .update({
        short_desc: snippet,
        full_desc: fullContent,
        updated_at: new Date().toISOString(),
      })
      .eq("id", aboutId);

    if (error) {
      alert("Gagal menyimpan perubahan");
    } else {
      alert("Perubahan berhasil disimpan!");
    }
  };

  return (
    <div className="bg-white p-10 rounded shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase">
        Edit About Section
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cuplikan Singkat (Homepage)
        </label>
        <textarea
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          rows={3}
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Konten Lengkap (Halaman About)
        </label>
        <textarea
          value={fullContent}
          onChange={(e) => setFullContent(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          rows={10}
        />
      </div>
    <div className="my-4">
      <a className="py-2 px-5 bg-blue-400 rounded text-white hover:bg-blue-700" href="/dashboard">Kembali</a>
    </div>
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Simpan Perubahan
      </button>
    </div>
  );
}
