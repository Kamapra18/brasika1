"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { supabase } from "../lib/supabase";

type Visitor = {
  day: string;
  views: number;
};

export default function HomeDashboardView() {
  const [data, setData] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [programCount, setProgramCount] = useState<number>(0);
  const [galleryCount, setGalleryCount] = useState<number>(0);

  const fetchVisitors = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("visitors")
      .select("day, views")
      .order("day", { ascending: true });

    if (error) {
      console.error("Gagal mengambil data pengunjung", error);
    } else {
      setData(data);
    }
    setLoading(false);
  };

  const fetchProgramCount = async () => {
    const { count, error } = await supabase
      .from("programs")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Gagal mengambil jumlah program", error);
    } else {
      setProgramCount(count ?? 0);
    }
  };

  const fetchGalleryCount = async () => {
    const { count, error } = await supabase
      .from("galleries")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Gagal mengambil jumlah galeri", error);
    } else {
      setGalleryCount(count ?? 0);
    }
  };

  useEffect(() => {
    fetchVisitors();
    fetchProgramCount();
    fetchGalleryCount();
  }, []);

  const totalViews = data.reduce((total, item) => total + item.views, 0);

  return (
    <div className="pt-10 px-2 md:px-6 md:pt-10">
      <h1 className="text-2xl font-bold mb-6">Selamat Datang di Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Gunakan dashboard ini untuk memantau, memperbarui, dan mengelola seluruh isi konten website Brasika I dengan mudah dan efisien.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatBox title="Jumlah Pengunjung" value={totalViews} />
        <StatBox title="Jumlah Program" value={programCount} />
        <StatBox title="Jumlah Foto Galeri" value={galleryCount} />
      </div>

      <div className="hidden md:block bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Grafik Pengunjung Mingguan</h2>
        {loading ? (
          <p className="text-gray-500">Memuat data...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="views" stroke="#4B5563" strokeWidth={2} />
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
              <XAxis dataKey="day" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="block md:hidden bg-white p-6 rounded shadow text-center">
        <h2 className="text-lg font-semibold mb-2">Total Pengunjung Minggu Ini</h2>
        <p className="text-3xl font-bold text-gray-800">{totalViews}</p>
      </div>
    </div>
  );
}

function StatBox({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <h2 className="text-sm font-medium text-gray-500">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
