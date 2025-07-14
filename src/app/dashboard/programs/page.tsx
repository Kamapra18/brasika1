"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import ProgramFormModal from "./ModalForm";

type Program = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  section: string;
  created_at: string;
};

export default function ProgramTable() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | undefined>(
    undefined
  );

  const fetchPrograms = async () => {
    const { data } = await supabase
      .from("programs")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setPrograms(data);
    } else {
      alert("Gagal mengambil data program");
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const handleEdit = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleNew = () => {
    setSelectedProgram(undefined);
    setIsModalOpen(true);
  };

  const handleDelete = async (program: Program) => {
    if (!confirm(`Hapus program "${program.title}"?`)) return;

    if (program.image_url) {
      try {
        const url = new URL(program.image_url);
        const parts = url.pathname.split("/");
        const bucketIndex = parts.indexOf("public") + 1;
        const bucket = parts[bucketIndex];
        const filePath = parts.slice(bucketIndex + 1).join("/");

        if (bucket && filePath) {
          const { error: storageError } = await supabase.storage
            .from(bucket)
            .remove([filePath]);
          if (storageError) {
            alert(
              "Gagal menghapus gambar dari bucket: " + storageError.message
            );
          }
        }
      } catch {
        alert("Gagal memproses penghapusan gambar.");
      }
    }

    const { error } = await supabase
      .from("programs")
      .delete()
      .eq("id", program.id);
    if (error) {
      alert("Gagal menghapus program: " + error.message);
    } else {
      fetchPrograms();
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded shadow-md">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold uppercase text-center sm:text-center my-5">
          Daftar Program
        </h2>
        <div className="flex items-center justify-between mb-2">
          <a
            className="py-2 px-4 bg-black text-white rounded text-sm"
            href="/dashboard">
            Kembali
          </a>
          <button
            onClick={handleNew}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
            + Tambah Program
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-2">Judul</th>
              <th className="px-4 py-2">Deskripsi</th>
              <th className="px-4 py-2">Gambar</th>
              <th className="px-4 py-2">Tampil di</th>
              <th className="px-4 py-2 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program) => (
              <tr key={program.id} className="border-t">
                <td className="px-4 py-2">{program.title}</td>
                <td className="px-4 py-2">{program.description}</td>
                <td className="px-4 py-2">
                  {program.image_url ? (
                    <Image
                      src={program.image_url}
                      alt={program.title}
                      width={64}
                      height={64}
                      className="object-cover rounded"
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-4 py-2 capitalize">{program.section}</td>
                <td className="px-4 py-2 text-right">
                  <button
                    onClick={() => handleEdit(program)}
                    className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(program)}
                    className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {programs.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  Belum ada program.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="space-y-4 md:hidden">
        {programs.map((program) => (
          <div
            key={program.id}
            className="border rounded p-4 flex flex-col gap-2 shadow-sm">
            <div className="font-bold text-lg">{program.title}</div>
            <div className="text-sm text-gray-600">{program.description}</div>
            {program.image_url && (
              <Image
                src={program.image_url}
                alt={program.title}
                width={300}
                height={200}
                className="object-cover rounded"
              />
            )}
            <div className="text-sm">
              <strong>Tampil di:</strong> {program.section}
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleEdit(program)}
                className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                Edit
              </button>
              <button
                onClick={() => handleDelete(program)}
                className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        ))}
        {programs.length === 0 && (
          <div className="text-center text-gray-500">Belum ada program.</div>
        )}
      </div>

      <ProgramFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={selectedProgram}
        onSaved={fetchPrograms}
      />
    </div>
  );
}
