"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Search, Package } from "lucide-react";
import { getCategoriaBySlug, Categoria } from "@/data/catalogo/hoteleria/data";

export default function CategoriaDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [categoria, setCategoria] = useState<Categoria | undefined>(undefined);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (slug) {
      const cat = getCategoriaBySlug(slug);
      setCategoria(cat);
    }
  }, [slug]);

  const productosFiltrados = categoria?.productos.filter(producto => {
    if (!busqueda) return true;
    const searchLower = busqueda.toLowerCase();
    return (
      producto.nombre.toLowerCase().includes(searchLower) ||
      producto.descripcion.toLowerCase().includes(searchLower) ||
      producto.palabrasClave.some(k => k.toLowerCase().includes(searchLower))
    );
  }) || [];

  if (!categoria) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <Package className="w-20 h-20 mx-auto text-gray-400 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Categoría no encontrada</h1>
          <Link href="/catalogo/hoteleria-hospitalidad" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
            ← Volver al catálogo de hotelería
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/catalogo/hoteleria-hospitalidad" 
            className="inline-flex items-center text-white mb-8 transition-colors group bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-white drop-shadow-lg">Volver al Catálogo</span>
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
              {categoria.nombre}
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-3xl drop-shadow-xl font-bold">
              {categoria.descripcion}
            </p>
            
            <div className="inline-flex items-center gap-4 bg-white text-blue-700 px-8 py-5 rounded-2xl shadow-2xl">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Package className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <div className="text-4xl font-black">{categoria.productoCount}</div>
                <div className="text-sm font-bold text-blue-600">Productos Disponibles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder={`Buscar en ${categoria.nombre.toLowerCase()}...`}
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none text-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
                  {producto.imagen ? (
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="w-20 h-20 text-gray-300" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{producto.nombre}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{producto.descripcion}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-colors">
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
