'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Clasificacion {
  id: number;
  codigo: string;
  nombre: string;
}

interface Categoria {
  id: number;
  nombre: string;
  clasificacion_id: number;
}

interface Subcategoria {
  id: number;
  nombre: string;
  categoria_id: number;
}

interface Producto {
  id: number;
  codigo_unico: string;
  nombre: string;
  descripcion?: string;
  imagen_url?: string;
  marca?: string;
  subcategoria_nombre: string;
  categoria_nombre: string;
  clasificacion_nombre: string;
}

export default function CatalogoPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [clasificaciones, setClasificaciones] = useState<Clasificacion[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);
  
  const [filtros, setFiltros] = useState({
    busqueda: '',
    clasificacion: '',
    categoria: '',
    subcategoria: ''
  });
  
  const [loading, setLoading] = useState(true);
  const [vista, setVista] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    fetchTaxonomia();
    fetchProductos();
  }, []);

  useEffect(() => {
    fetchProductos();
  }, [filtros]);

  const fetchTaxonomia = async () => {
    try {
      const resClasif = await fetch('/api/taxonomia/clasificaciones');
      const dataClasif = await resClasif.json();
      setClasificaciones(dataClasif.clasificaciones || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchCategorias = async (clasificacionId: string) => {
    try {
      const res = await fetch(`/api/taxonomia/categorias?clasificacion_id=${clasificacionId}`);
      const data = await res.json();
      setCategorias(data.categorias || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchSubcategorias = async (categoriaId: string) => {
    try {
      const res = await fetch(`/api/taxonomia/subcategorias?categoria_id=${categoriaId}`);
      const data = await res.json();
      setSubcategorias(data.subcategorias || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchProductos = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filtros.busqueda) params.append('busqueda', filtros.busqueda);
      if (filtros.subcategoria) params.append('subcategoria', filtros.subcategoria);
      
      const res = await fetch(`/api/productos?${params}`);
      const data = await res.json();
      setProductos(data.productos || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClasificacionChange = (clasificacionId: string) => {
    setFiltros({...filtros, clasificacion: clasificacionId, categoria: '', subcategoria: ''});
    setCategorias([]);
    setSubcategorias([]);
    if (clasificacionId) {
      fetchCategorias(clasificacionId);
    }
  };

  const handleCategoriaChange = (categoriaId: string) => {
    setFiltros({...filtros, categoria: categoriaId, subcategoria: ''});
    setSubcategorias([]);
    if (categoriaId) {
      fetchSubcategorias(categoriaId);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero del Catálogo */}
      <div className='bg-gradient-to-r from-mogroup-blue to-mogroup-accent py-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <h1 className='text-4xl font-bold text-white mb-4'>Catálogo de Productos</h1>
          <p className='text-white/90 text-lg'>Encuentra todo lo que necesitas para tu empresa</p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* Barra de Búsqueda */}
        <div className='bg-white rounded-xl shadow-lg p-6 mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-4'>
            <input
              type='text'
              placeholder='Buscar productos...'
              value={filtros.busqueda}
              onChange={(e) => setFiltros({...filtros, busqueda: e.target.value})}
              className='px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent'
            />
            
            <select
              value={filtros.clasificacion}
              onChange={(e) => handleClasificacionChange(e.target.value)}
              className='px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent'
            >
              <option value=''>Todas las clasificaciones</option>
              {clasificaciones.map(c => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>

            <select
              value={filtros.categoria}
              onChange={(e) => handleCategoriaChange(e.target.value)}
              disabled={!filtros.clasificacion}
              className='px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent disabled:bg-gray-100'
            >
              <option value=''>Todas las categorías</option>
              {categorias.map(c => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>

            <select
              value={filtros.subcategoria}
              onChange={(e) => setFiltros({...filtros, subcategoria: e.target.value})}
              disabled={!filtros.categoria}
              className='px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent disabled:bg-gray-100'
            >
              <option value=''>Todas las subcategorías</option>
              {subcategorias.map(s => (
                <option key={s.id} value={s.id}>{s.nombre}</option>
              ))}
            </select>
          </div>

          <div className='flex justify-between items-center'>
            <p className='text-gray-600 text-sm'>
              {productos.length} {productos.length === 1 ? 'producto encontrado' : 'productos encontrados'}
            </p>
            
            <div className='flex gap-2'>
              <button
                onClick={() => setVista('grid')}
                className={'p-2 rounded ' + (vista === 'grid' ? 'bg-mogroup-accent text-white' : 'bg-gray-100')}
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                </svg>
              </button>
              <button
                onClick={() => setVista('list')}
                className={'p-2 rounded ' + (vista === 'list' ? 'bg-mogroup-accent text-white' : 'bg-gray-100')}
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Grid/Lista de Productos */}
        {loading ? (
          <div className='text-center py-20'>
            <div className='inline-block animate-spin rounded-full h-16 w-16 border-4 border-mogroup-blue border-t-transparent' />
            <p className='text-gray-600 mt-4'>Cargando productos...</p>
          </div>
        ) : productos.length === 0 ? (
          <div className='text-center py-20'>
            <svg className='w-24 h-24 mx-auto text-gray-300 mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' />
            </svg>
            <p className='text-gray-600 text-lg'>No se encontraron productos</p>
            <p className='text-gray-500 text-sm mt-2'>Intenta ajustar los filtros de búsqueda</p>
          </div>
        ) : vista === 'grid' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {productos.map(producto => (
              <div key={producto.id} className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group'>
                <div className='relative h-48 bg-gray-100 flex items-center justify-center'>
                  {producto.imagen_url ? (
                    <Image src={producto.imagen_url} alt={producto.nombre} fill className='object-cover' />
                  ) : (
                    <div className='text-gray-300'>
                      <svg className='w-16 h-16' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z' clipRule='evenodd' />
                      </svg>
                    </div>
                  )}
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all' />
                </div>
                
                <div className='p-4'>
                  <div className='flex items-start justify-between mb-2'>
                    <span className='text-xs text-gray-500 font-mono'>{producto.codigo_unico}</span>
                  </div>
                  
                  <h3 className='font-semibold text-gray-900 mb-2 line-clamp-2'>{producto.nombre}</h3>
                  
                  {producto.marca && (
                    <p className='text-xs text-gray-600 mb-2'>Marca: {producto.marca}</p>
                  )}
                  
                  <div className='space-y-1 mb-3'>
                    <p className='text-xs text-mogroup-blue font-semibold'>{producto.clasificacion_nombre}</p>
                    <p className='text-xs text-gray-600'>{producto.categoria_nombre} › {producto.subcategoria_nombre}</p>
                  </div>
                  
                  <button className='w-full py-2 bg-gradient-to-r from-mogroup-blue to-mogroup-accent text-white rounded-lg font-semibold hover:scale-105 transition-transform'>
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='space-y-4'>
            {productos.map(producto => (
              <div key={producto.id} className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 flex gap-6'>
                <div className='w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  {producto.imagen_url ? (
                    <Image src={producto.imagen_url} alt={producto.nombre} width={128} height={128} className='object-cover rounded-lg' />
                  ) : (
                    <svg className='w-12 h-12 text-gray-300' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z' clipRule='evenodd' />
                    </svg>
                  )}
                </div>
                
                <div className='flex-1'>
                  <div className='flex items-start justify-between mb-2'>
                    <div>
                      <span className='text-xs text-gray-500 font-mono'>{producto.codigo_unico}</span>
                      <h3 className='font-semibold text-xl text-gray-900 mt-1'>{producto.nombre}</h3>
                    </div>
                  </div>
                  
                  {producto.descripcion && (
                    <p className='text-gray-600 text-sm mb-3'>{producto.descripcion}</p>
                  )}
                  
                  {producto.marca && (
                    <p className='text-sm text-gray-600 mb-2'>Marca: <span className='font-semibold'>{producto.marca}</span></p>
                  )}
                  
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='px-3 py-1 bg-mogroup-blue/10 text-mogroup-blue text-xs font-semibold rounded-full'>{producto.clasificacion_nombre}</span>
                    <span className='text-gray-400'>›</span>
                    <span className='px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full'>{producto.categoria_nombre}</span>
                    <span className='text-gray-400'>›</span>
                    <span className='px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full'>{producto.subcategoria_nombre}</span>
                  </div>
                  
                  <button className='px-6 py-2 bg-gradient-to-r from-mogroup-blue to-mogroup-accent text-white rounded-lg font-semibold hover:scale-105 transition-transform'>
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
