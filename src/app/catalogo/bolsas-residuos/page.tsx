"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Package, Search, Recycle } from "lucide-react";
import { CATEGORIAS_BOLSAS_RESIDUOS, TOTAL_PRODUCTOS_RESIDUOS } from "./data";

export default function BolsasResiduosPage() {
  const [busqueda, setBusqueda] = useState("");

  const categoriasFiltradas = CATEGORIAS_BOLSAS_RESIDUOS.filter(cat =>
    cat.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    cat.palabrasClave.some(palabra => palabra.toLowerCase().includes(busqueda.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-900 text-white py-24 overflow-hidden">
        {/* Fondo con imagen desvanecida */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/categorias/Bolsas_Manejo_de_Residuos.png"
            alt="Bolsas Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Efectos decorativos */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-300 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Botón volver + Logo */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/catalogo" className="inline-flex items-center text-white/90 hover:text-white transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver al Catálogo</span>
            </Link>
            
            {/* Logo MOGROUP */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">
                MG
              </div>
              <span className="text-sm font-semibold hidden md:block">MOGROUP</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            {/* Badge con icono */}
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20">
              <Recycle className="w-6 h-6 text-green-300" />
              <span className="text-sm font-bold uppercase tracking-wider">Bolsas y Manejo de Residuos</span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Gestión Completa de 
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300">
                Residuos y Reciclaje
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Bolsas de basura, residuos peligrosos, biodegradables y contenedores.
              <span className="font-bold text-white"> {TOTAL_PRODUCTOS_RESIDUOS} productos</span> certificados disponibles.
            </p>

            {/* Barra de búsqueda mejorada */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-white rounded-2xl shadow-2xl p-3 flex items-center gap-3">
                <div className="bg-green-50 p-3 rounded-xl">
                  <Search className="w-6 h-6 text-green-600" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar bolsas, contenedores, biodegradables..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="flex-1 px-2 py-3 text-gray-900 outline-none text-lg font-medium placeholder:text-gray-400"
                />
                {busqueda && (
                  <button
                    onClick={() => setBusqueda("")}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors"
                  >
                    Limpiar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Categorías */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {categoriasFiltradas.length} Categorías Disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selecciona una categoría para ver los productos y solicitar tu cotización personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categoriasFiltradas.map((categoria, index) => (
              <div
                key={categoria.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-green-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Imagen con overlay */}
                <div className="relative h-72 bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200 overflow-hidden">
                  <Image
                    src={categoria.imagen}
                    alt={categoria.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge de items */}
                  <div className="absolute top-5 right-5 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border border-white/20">
                    {categoria.productoCount} Items
                  </div>

                  {/* Logo MOGROUP en hover */}
                  <div className="absolute top-5 left-5 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold text-green-600 text-xs border-2 border-green-500">
                    MG
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-7">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {categoria.nombre}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed text-base">
                    {categoria.descripcion}
                  </p>

                  {/* Palabras clave */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {categoria.palabrasClave.slice(0, 4).map((palabra, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-semibold hover:bg-green-100 transition-colors cursor-default"
                      >
                        {palabra}
                      </span>
                    ))}
                  </div>

                  {/* Botón */}
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-2xl flex items-center justify-center gap-3 group/btn">
                    <Package className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    <span>Solicitar Cotización</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {categoriasFiltradas.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-500 text-lg">
                No hay categorías que coincidan con <span className="font-semibold text-gray-700">"{busqueda}"</span>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
