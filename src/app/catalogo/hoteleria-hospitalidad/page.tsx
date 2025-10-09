"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search, Package, Sparkles, Hotel, ShoppingBag } from "lucide-react";
import { CATEGORIAS_HOTELERIA, TOTAL_PRODUCTOS, TOTAL_CATEGORIAS } from "./data";

export default function HoteleriaHospitalidadPage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null);
  
  const categoriasFiltradas = CATEGORIAS_HOTELERIA.filter(cat => {
    const matchBusqueda = busqueda.length === 0 || 
      cat.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      cat.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      cat.productos.some(p => 
        p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.palabrasClave.some(k => k.toLowerCase().includes(busqueda.toLowerCase()))
      );
    
    const matchCategoria = !categoriaActiva || cat.id === categoriaActiva;
    
    return matchBusqueda && matchCategoria;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/catalogo" className="inline-flex items-center text-white hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Catálogo
          </Link>
          
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6">
              <Hotel className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">Hotelería y Hospitalidad</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Elegancia y Comodidad<br/>
              <span className="text-blue-200">que tu descanso merece</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              {TOTAL_PRODUCTOS} productos premium organizados en {TOTAL_CATEGORIAS} categorías especializadas. 
              Textiles de alta calidad, amenidades de lujo y todo lo que necesitas para ofrecer una experiencia hotelera de cinco estrellas.
            </p>
            
            {/* BUSCADOR PREMIUM */}
            <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center gap-3 max-w-2xl">
              <Search className="w-6 h-6 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Buscar productos, categorías o palabras clave..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="flex-1 px-4 py-4 text-gray-900 outline-none text-lg"
              />
              {busqueda && (
                <button
                  onClick={() => setBusqueda("")}
                  className="mr-2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
            
            {/* ESTADÍSTICAS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-8 h-8 text-blue-200" />
                  <span className="text-4xl font-bold">{TOTAL_PRODUCTOS}</span>
                </div>
                <p className="text-blue-100">Productos Disponibles</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <ShoppingBag className="w-8 h-8 text-blue-200" />
                  <span className="text-4xl font-bold">{TOTAL_CATEGORIAS}</span>
                </div>
                <p className="text-blue-100">Categorías Especializadas</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-8 h-8 text-blue-200" />
                  <span className="text-4xl font-bold">100%</span>
                </div>
                <p className="text-blue-100">Calidad Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CATEGORÍAS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestras Categorías
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestra colección completa de productos hoteleros organizados 
              estratégicamente para facilitar tu búsqueda
            </p>
          </div>
          
          {busqueda && (
            <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-900 font-semibold">
                {categoriasFiltradas.length} categorías encontradas para "{busqueda}"
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriasFiltradas.map((categoria) => (
              <div
                key={categoria.id}
                className="group bg-white rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* IMAGEN DE CATEGORÍA */}
                <div className={`relative h-72 bg-gradient-to-br from-${categoria.colorPrimario}-400 to-${categoria.colorSecundario}-500 overflow-hidden`}>
                  <Image
                    src={categoria.imagen}
                    alt={categoria.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  
                  {/* BADGE DE CANTIDAD */}
                  <div className={`absolute top-6 right-6 bg-${categoria.colorPrimario}-600 text-white px-5 py-2 rounded-full font-bold shadow-lg`}>
                    {categoria.productoCount} Items
                  </div>
                  
                  {/* TÍTULO EN IMAGEN */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {categoria.nombre}
                    </h3>
                  </div>
                </div>
                
                {/* CONTENIDO */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {categoria.descripcion}
                  </p>
                  
                  {/* PREVIEW DE PRODUCTOS */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3 font-semibold">Ejemplos de productos:</p>
                    <div className="flex flex-wrap gap-2">
                      {categoria.productos.slice(0, 3).map((producto, index) => (
                        <span 
                          key={index} 
                          className={`text-xs bg-${categoria.colorPrimario}-50 text-${categoria.colorPrimario}-700 px-3 py-1 rounded-full`}
                        >
                          {producto.palabrasClave[0]}
                        </span>
                      ))}
                      {categoria.productos.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                          +{categoria.productos.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* BOTÓN DE ACCIÓN */}
                  <Link href={`/catalogo/hoteleria-hospitalidad/categoria/${categoria.slug}`} className={`w-full bg-gradient-to-r from-${categoria.colorPrimario}-500 to-${categoria.colorSecundario}-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 group-hover:scale-105`}>
                    <Package className="w-5 h-5" />
                    Ver {categoria.productoCount} Productos
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {categoriasFiltradas.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <Search className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-500">
                Intenta con otra búsqueda o explora todas nuestras categorías
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Necesitas una cotización personalizada?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Nuestro equipo está listo para asesorarte y ofrecerte las mejores soluciones 
            para tu hotel o negocio de hospitalidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cotizar" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2">
              <Package className="w-5 h-5" />
              Solicitar Cotización
            </Link>
            <Link href="/contacto" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors inline-flex items-center justify-center gap-2 border-2 border-white/20">
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}









