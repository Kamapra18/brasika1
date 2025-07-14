"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("Email atau password salah.");
    } else {
      setMessage("Login berhasil. Mengarahkan...");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">Login Admin</h2>
        <p className="text-sm text-red-600 mb-4">
          Hanya untuk email admin yang terdaftar
        </p>

        <input
          type="email"
          placeholder="Masukkan email admin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-3"
        />
        <input
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full">
          Login
        </button>

        {message && <p className="text-sm mt-3 text-center">{message}</p>}

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-600 underline block text-center">
          Tutup
        </button>
      </div>
    </div>
  );
}
