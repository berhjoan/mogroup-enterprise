"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NavegacionPremium() {
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const [isOtrosOpen, setIsOtrosOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">MOGROUP</span>
              <span className="text-xs text-gray-600 -mt-1">Logística & Tecnología</span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Inicio
            </Link>

            {/* Menú Servicios */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1"
                onMouseEnter={() => setIsServiciosOpen(true)}
                onMouseLeave={() => setIsServiciosOpen(false)}
              >
                Servicios
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServiciosOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  onMouseEnter={() => setIsServiciosOpen(true)}
                  onMouseLeave={() => setIsServiciosOpen(false)}
                >
                  <Link
                    href="/servicios/transporte"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    🚛 Transporte
                  </Link>
                  <Link
                    href="/servicios/logistica"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    📦 Logística
                  </Link>
                  <Link
                    href="/servicios/insumos"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    🛒 Insumos B2B
                  </Link>

                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="px-4 py-1 text-xs text-gray-500 font-semibold uppercase">
                    Otros Servicios
                  </div>

                  <Link
                    href="/servicios/jardineria"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    🌿 Jardinería
                  </Link>
                  <Link
                    href="/servicios/modificaciones"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    🔧 Modificaciones y Estructura
                  </Link>
                  <Link
                    href="/servicios/software"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    💻 Diseño de Software
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/catalogo"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Catálogo
            </Link>

            <Link
              href="/empresa"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Empresa
            </Link>

            <Link
              href="/contacto"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contacto
            </Link>

            <Link
              href="/cotizar"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              Cotizar Ahora
            </Link>

            <Link
              href="/enterprise/login"
              className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all font-semibold text-sm"
            >
              MOGROUP-ENTERPRISE
            </Link>
          </nav>

          {/* Botón móvil */}
          <button className="lg:hidden p-2 text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

