"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Package } from "lucide-react";
import { getCategoriaBySlug, Categoria } from "../data";

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
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/catalogo/hoteleria-hospitalidad" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors group bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Volver al Catálogo</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-bold uppercase tracking-wider">Categoría</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {categoria.nombre}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 mb-10 leading-relaxed max-w-3xl">
              {categoria.descripcion}
            </p>
            
            <div className="inline-flex items-center gap-4 bg-white text-blue-700 px-8 py-5 rounded-2xl shadow-2xl">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Package className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <div className="text-4xl font-extrabold">{categoria.productoCount}</div>
                <div className="text-sm font-semibold text-blue-600">Productos Disponibles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white shadow-lg sticky top-0 z-40 border-b-2 border-gray-100">
        <div className="container mx-auto px-6">
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder={`Buscar en ${categoria.nombre.toLowerCase()}...`}
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none text-lg transition-all"
            />
          </div>
          {busqueda && (
            <div className="text-center mt-4">
              <span className="text-gray-600">
                <span className="font-bold text-blue-600 text-lg">{productosFiltrados.length}</span> producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {productosFiltrados.length === 0 ? (
            <div className="text-center py-32">
              <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                <Package className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">No se encontraron productos</h3>
              <p className="text-gray-500 text-lg">Intenta con otra búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {productosFiltrados.map((producto) => (
                <div
                  key={producto.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-200 hover:-translate-y-2"
                >
                  <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Package className="w-20 h-20 text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase">
                        {categoria.nombre.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {producto.nombre}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {producto.descripcion}
                    </p>
                    
                    {producto.especificaciones && (
                      <div className="mb-4 space-y-1 bg-gray-50 p-3 rounded-xl text-sm">
                        {producto.especificaciones.tamaño && (
                          <div className="flex gap-2">
                            <span className="font-bold text-gray-700">Tamaño:</span>
                            <span className="text-gray-600">{producto.especificaciones.tamaño}</span>
                          </div>
                        )}
                        {producto.especificaciones.material && (
                          <div className="flex gap-2">
                            <span className="font-bold text-gray-700">Material:</span>
                            <span className="text-gray-600">{producto.especificaciones.material}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {producto.palabrasClave.slice(0, 3).map((keyword, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 group-hover:scale-105">
                      <Package className="w-5 h-5" />
                      Solicitar Cotización
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}