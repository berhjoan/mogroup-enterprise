"use client";

import Image from "next/image";
import Link from "next/link";
import { CATEGORIAS_CATALOGO, TOTAL_PRODUCTOS } from "@/lib/data/catalogo";
import { Package, Search, ShoppingCart } from "lucide-react";

export default function CatalogoGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Package className="w-8 h-8" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Catálogo Inteligente
              </span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Más de {TOTAL_PRODUCTOS} Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra todo lo que tu empresa necesita en un solo lugar.
            Sistema de cotización sin precios: nosotros buscamos el mejor
            proveedor para ti.
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {CATEGORIAS_CATALOGO.map((categoria) => (
            <Link
              key={categoria.id}
              href={`/catalogo/${categoria.slug}`}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              {/* Imagen */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <Image
                  src={categoria.imagen}
                  alt={categoria.nombre}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 z-20">
                  {categoria.productoCount} items
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {categoria.nombre}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {categoria.descripcion}
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Ver productos
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 text-center text-white shadow-2xl">
          <Search className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Nuestro equipo puede conseguir cualquier insumo que tu empresa
            necesite. Cotiza con nosotros y te conectamos con el mejor
            proveedor.
          </p>
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="w-5 h-5" />
            Solicitar Cotización Personalizada
          </Link>
        </div>
      </div>
    </section>
  );
}
