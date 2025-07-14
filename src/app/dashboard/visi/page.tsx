"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";

type Misi = {
  id: string;
  content: string;
  sort_order: number;
};

export default function UpdateVisiMisiPage() {
  const router = useRouter();
  const [visi, setVisi] = useState("");
  const [misiList, setMisiList] = useState<Misi[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("visi_misi")
        .select("id, type, content, sort_order")
        .order("sort_order", { ascending: true });

      if (error) {
        console.error("Gagal memuat data:", error);
        return;
      }

      const visiItem = data.find((item) => item.type === "visi");
      const misiItems = data.filter((item) => item.type === "misi");

      if (visiItem) setVisi(visiItem.content || "");
      setMisiList(
        misiItems.map((item) => ({
          id: item.id,
          content: item.content,
          sort_order: item.sort_order,
        }))
      );
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    setLoading(true);

    // Update Visi
    await supabase
      .from("visi_misi")
      .update({
        content: visi,
        updated_at: new Date().toISOString(),
      })
      .eq("type", "visi");

    // Update semua Misi
    for (let i = 0; i < misiList.length; i++) {
      const misi = misiList[i];
      await supabase.from("visi_misi").update({
        content: misi.content,
        sort_order: i + 1,
        updated_at: new Date().toISOString(),
      }).eq("id", misi.id);
    }

    setLoading(false);
    alert("Berhasil menyimpan perubahan");
  };

  const handleMisiChange = (index: number, value: string) => {
    const newList = [...misiList];
    newList[index].content = value;
    setMisiList(newList);
  };

  const handleAddMisi = () => {
    setMisiList([
      ...misiList,
      {
        id: crypto.randomUUID(),
        content: "",
        sort_order: misiList.length + 1,
      },
    ]);
  };

  const handleRemoveMisi = async (index: number) => {
    const deleted = misiList[index];
    if (deleted.id) {
      await supabase.from("visi_misi").delete().eq("id", deleted.id);
    }
    const newList = [...misiList];
    newList.splice(index, 1);
    setMisiList(newList);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Update Visi & Misi</h1>
        <button
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 bg-gray-800 text-white text-sm px-4 py-2 rounded shadow hover:bg-gray-700"
        >
          <ArrowLeft size={16} /> Kembali
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded p-4 mb-6">
        <h2 className="font-semibold mb-2">Visi</h2>
        <textarea
          value={visi}
          onChange={(e) => setVisi(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded resize-none min-h-[120px]"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded p-4">
        <h2 className="font-semibold mb-2">Misi</h2>
        <div className="space-y-2">
          {misiList.map((misi, index) => (
            <div key={misi.id} className="flex gap-2">
              <input
                value={misi.content}
                onChange={(e) => handleMisiChange(index, e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder={`Misi ke-${index + 1}`}
              />
              <button
                onClick={() => handleRemoveMisi(index)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          <button
            onClick={handleAddMisi}
            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
          >
            <Plus size={16} /> Tambah Misi
          </button>
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={loading}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Menyimpan..." : "Simpan Perubahan"}
      </button>
    </div>
  );
}
