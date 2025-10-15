"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulación de delay
    setTimeout(() => {
      if (usuario === "BKSYSTEM" && password === "admin123") {
        // Guardar en localStorage
        localStorage.setItem("mogroup_auth", JSON.stringify({
          usuario: usuario,
          timestamp: Date.now()
        }));
        
        // Redirigir
        router.push("/enterprise/dashboard");
      } else {
        setError("❌ Usuario o contraseña incorrectos");
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center">
              <span className="text-3xl font-bold text-white">MO</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            MOGROUP-ENTERPRISE
          </h1>
          <p className="text-gray-600">Sistema de Gestión Integral</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              👤 Usuario
            </label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Ingresa tu usuario"
              required
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🔒 Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? "⏳ Iniciando sesión..." : "🚀 Iniciar Sesión"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800 font-semibold mb-2">
              📋 Credenciales de prueba:
            </p>
            <div className="bg-white rounded px-3 py-2 font-mono text-sm">
              <p className="text-gray-700"><strong>Usuario:</strong> BKSYSTEM</p>
              <p className="text-gray-700"><strong>Contraseña:</strong> admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
