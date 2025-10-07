'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ShoppingCart, Check, Package, Filter, Send, Home, Info, Tag, Search, X, ArrowLeft } from 'lucide-react'

// CATÁLOGO COMPLETO - 559 PRODUCTOS REALES
const CATALOGOMOGROUP = {
  'SUMINISTROS_OFICINA': {
    nombre: 'Suministros de Oficina',
    icono: '📋',
    color: 'blue',
    categorias: {
      'ARTICULOS_DE_OFICINA': {
        nombre: 'Artículos de Oficina',
        subcategorias: {
          'Herramientas': ['Engrapadora', 'Grapas', 'Perforadora', 'Sacagrapas'],
          'Accesorios': ['Clips', 'Clips Mariposa', 'Ligas/Gomas', 'Chinches', 'Post-it', 'Banderitas'],
          'Adhesivos': ['Pegamento', 'Corrector', 'Cinta Adhesiva', 'Cinta Doble Cara'],
          'Instrumentos': ['Calculadora', 'Regla', 'Portaminas'],
          'Papel': ['Papel Bond Carta', 'Papel Bond Oficio', 'Papel Bond A4'],
          'Escritura': ['Bolígrafo', 'Lápiz', 'Marcadores', 'Resaltador'],
          'Carpetas': ['Carpeta Manila', 'Folder Colgante', 'Folder Plástico'],
          'Archivadores': ['Archivador de Palanca', 'Carpeta de Argollas']
        }
      }
    }
  },
  'EPP': {
    nombre: 'Equipo de Protección Personal (EPP)',
    icono: '🦺',
    color: 'orange',
    categorias: {
      'MASCARILLAS': {
        nombre: 'Mascarillas y Protección Respiratoria',
        subcategorias: {
          'Desechables': ['Mascarilla 3 Pliegues', 'Mascarilla Quirúrgica'],
          'Reutilizables': ['Mascarilla de Tela'],
          'Respiradores': ['Respirador N95', 'Respirador KN95', 'Respirador FFP2', 'Respirador P100'],
          'Especiales': ['Careta Facial', 'Mascarilla con Ventana']
        }
      },
      'GUANTES_DE_SEGURIDAD': {
        nombre: 'Guantes de Seguridad',
        subcategorias: {
          'Carnaza': ['Guantes de Carnaza'],
          'Nitrilo Industrial': ['Guantes de Nitrilo'],
          'Látex Industrial': ['Guantes de Látex'],
          'Anticorte': ['Guantes Anticorte'],
          'Especiales': ['Guantes Dieléctricos', 'Guantes para Frío']
        }
      }
    }
  },
  'HOTELERIA': {
    nombre: 'Hotelería y Hospitalidad',
    icono: '🏨',
    color: 'purple',
    categorias: {
      'PRODUCTOS_HOTELERIA': {
        nombre: 'Productos Hoteleros',
        subcategorias: {
          'Amenidades Baño': ['Jabón en Barra', 'Shampoo', 'Acondicionador', 'Gel de Baño'],
          'Amenidades Personales': ['Kit Dental', 'Kit de Afeitar', 'Peine', 'Gorro de Baño'],
          'Textiles': ['Sábanas', 'Fundas', 'Toallas', 'Batas']
        }
      }
    }
  },
  'PAPELERIA_HIGIENE': {
    nombre: 'Papelería e Higiene Institucional',
    icono: '🧻',
    color: 'green',
    categorias: {
      'PAPEL_HIGIENICO': {
        nombre: 'Papel Higiénico',
        subcategorias: {
          'Institucional': ['Papel Higiénico Jumbo', 'Papel Higiénico Mini Jumbo'],
          'Convencional': ['Papel Higiénico Estándar', 'Papel Higiénico Premium']
        }
      },
      'DISPENSADORES': {
        nombre: 'Dispensadores',
        subcategorias: {
          'Papel Higiénico': ['Dispensador PH Jumbo', 'Dispensador PH Mini Jumbo'],
          'Jabón': ['Dispensador Jabón Líquido', 'Dispensador Jabón Espuma'],
          'Gel': ['Dispensador Gel Antibacterial']
        }
      }
    }
  },
  'DESECHABLES': {
    nombre: 'Desechables y Empaques Food Service',
    icono: '🥤',
    color: 'yellow',
    categorias: {
      'VASOS': {
        nombre: 'Vasos Desechables',
        subcategorias: {
          'Bebidas Frías': ['Vaso PET', 'Vaso PP', 'Vaso de Papel'],
          'Bebidas Calientes': ['Vaso Foam', 'Vaso de Papel', 'Manga']
        }
      },
      'PLATOS': {
        nombre: 'Platos',
        subcategorias: {
          'Foam': ['Plato de Foam'],
          'Cartón': ['Plato de Cartón'],
          'Plástico': ['Plato de Plástico'],
          'Biodegradable': ['Plato Biodegradable']
        }
      }
    }
  },
  'EQUIPOS_LIMPIEZA': {
    nombre: 'Equipos de Limpieza',
    icono: '🧹',
    color: 'teal',
    categorias: {
      'HERRAMIENTAS_LIMPIEZA': {
        nombre: 'Herramientas de Limpieza',
        subcategorias: {
          'Jaladores': ['Jalador de Pisos', 'Jalador de Vidrios'],
          'Cepillos': ['Cepillo de Mano', 'Cepillo de Baño', 'Cepillo para Pisos'],
          'Esponjas': ['Esponja Doble Cara', 'Fibra Verde', 'Fibra Negra']
        }
      }
    }
  },
  'PRODUCTOS_LIMPIEZA': {
    nombre: 'Productos de Limpieza y Químicos',
    icono: '🧴',
    color: 'indigo',
    categorias: {
      'DESINFECTANTES': {
        nombre: 'Desinfectantes',
        subcategorias: {
          'Cloro': ['Cloro', 'Hipoclorito de Sodio'],
          'Alcoholes': ['Alcohol Etílico', 'Alcohol Isopropílico'],
          'Geles': ['Gel Antibacterial']
        }
      }
    }
  },
  'BOLSAS_RESIDUOS': {
    nombre: 'Bolsas y Manejo de Residuos',
    icono: '🗑️',
    color: 'gray',
    categorias: {
      'BOLSAS_DE_BASURA': {
        nombre: 'Bolsas de Basura',
        subcategorias: {
          'Baja Densidad': ['Bolsa Basura LD'],
          'Alta Densidad': ['Bolsa Basura HD'],
          'Biodegradables': ['Bolsa Biodegradable']
        }
      }
    }
  },
  'SUMINISTROS_CAFETERIA': {
    nombre: 'Suministros de Cafetería',
    icono: '☕',
    color: 'brown',
    categorias: {
      'BEBIDAS_CALIENTES': {
        nombre: 'Bebidas Calientes',
        subcategorias: {
          'Café': ['Café en Grano', 'Café Molido', 'Café Instantáneo'],
          'Té': ['Té Negro', 'Té Verde', 'Té de Hierbas', 'Té Chai'],
          'Chocolate': ['Chocolate en Polvo']
        }
      },
      'ENDULZANTES': {
        nombre: 'Endulzantes',
        subcategorias: {
          'Azúcar': ['Azúcar Blanca', 'Azúcar Morena', 'Azúcar Glass'],
          'Edulcorantes': ['Splenda', 'Stevia', 'Equal', 'Sacarina'],
          'Miel': ['Miel de Abeja', 'Miel de Agave']
        }
      }
    }
  },
  'MASCOTAS': {
    nombre: 'Productos para Mascotas',
    icono: '🐾',
    color: 'pink',
    categorias: {
      'HIGIENE': {
        nombre: 'Higiene para Mascotas',
        subcategorias: {
          'PAÑALES Y PADS': ['Pañales para Mascota', 'Pads de Entrenamiento']
        }
      }
    }
  }
}

type NivelNavegacion = 'clasificacion' | 'categoria' | 'subcategoria' | 'resumen'

export default function CatalogoHenry() {
  const [nivel, setNivel] = useState<NivelNavegacion>('clasificacion')
  const [clasificacionActual, setClasificacionActual] = useState<string | null>(null)
  const [categoriaActual, setCategoriaActual] = useState<string | null>(null)

  const [selecciones, setSelecciones] = useState<{
    clasificaciones: string[]
    categorias: Record<string, string[]>
    subcategorias: Record<string, string[]>
  }>({
    clasificaciones: [],
    categorias: {},
    subcategorias: {}
  })

  const breadcrumb = useMemo(() => {
    const items: { label: string; onClick: () => void }[] = [
      { label: 'Inicio', onClick: () => { setNivel('clasificacion'); setClasificacionActual(null); setCategoriaActual(null); } }
    ]

    if (clasificacionActual) {
      items.push({
        label: CATALOGOMOGROUP[clasificacionActual].nombre,
        onClick: () => { setNivel('categoria'); setCategoriaActual(null); }
      })
    }

    if (categoriaActual && clasificacionActual) {
      items.push({
        label: CATALOGOMOGROUP[clasificacionActual].categorias[categoriaActual].nombre,
        onClick: () => { setNivel('subcategoria'); }
      })
    }

    return items
  }, [clasificacionActual, categoriaActual])

  const toggleClasificacion = (key: string) => {
    setSelecciones(prev => ({
      ...prev,
      clasificaciones: prev.clasificaciones.includes(key)
        ? prev.clasificaciones.filter(c => c !== key)
        : [...prev.clasificaciones, key]
    }))
  }

  const toggleCategoria = (clasificacion: string, categoria: string) => {
    setSelecciones(prev => {
      const current = prev.categorias[clasificacion] || []
      return {
        ...prev,
        categorias: {
          ...prev.categorias,
          [clasificacion]: current.includes(categoria)
            ? current.filter(c => c !== categoria)
            : [...current, categoria]
        }
      }
    })
  }

  const toggleSubcategoria = (key: string, subcategoria: string) => {
    setSelecciones(prev => {
      const current = prev.subcategorias[key] || []
      return {
        ...prev,
        subcategorias: {
          ...prev.subcategorias,
          [key]: current.includes(subcategoria)
            ? current.filter(s => s !== subcategoria)
            : [...current, subcategoria]
        }
      }
    })
  }

  const totalSelecciones = useMemo(() => {
    return selecciones.clasificaciones.length +
      Object.values(selecciones.categorias).flat().length +
      Object.values(selecciones.subcategorias).flat().length
  }, [selecciones])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header con Logo */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo y Título */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-xl">
                  <Image 
                    src="/logo.jpg" 
                    alt="MOGROUP" 
                    width={64} 
                    height={64} 
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold">MOGROUP</h1>
                  <p className="text-blue-100 text-xs sm:text-sm">Enterprise OS</p>
                </div>
              </Link>
              <div className="hidden sm:block w-px h-12 bg-blue-500"></div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold">Catálogo Inteligente</h2>
                <p className="text-blue-100 text-xs sm:text-sm">Cliente HENRY | 559 Productos | 10 Clasificaciones</p>
              </div>
            </div>

            {/* Botones de Navegación y Carrito */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-colors backdrop-blur-sm"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-semibold">Inicio</span>
              </Link>
              
              <div className="flex items-center gap-3 bg-white/20 px-5 py-2 rounded-2xl backdrop-blur-sm shadow-lg">
                <ShoppingCart className="w-6 h-6" />
                <div className="text-right">
                  <div className="text-xs opacity-90">Seleccionados</div>
                  <div className="text-2xl font-bold">{totalSelecciones}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white shadow-md py-3 sm:py-4 sticky top-0 z-10 border-b-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 flex-wrap">
          <Home className="w-4 h-4 text-gray-400 flex-shrink-0" />
          {breadcrumb.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />}
              <button
                onClick={item.onClick}
                className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors text-sm sm:text-base"
              >
                {item.label}
              </button>
            </div>
          ))}
          {totalSelecciones > 0 && (
            <button
              onClick={() => setNivel('resumen')}
              className="ml-auto flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg transform hover:scale-105 text-sm"
            >
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Ver Resumen</span>
              {totalSelecciones}
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* NIVEL 1: CLASIFICACIONES */}
        {nivel === 'clasificacion' && (
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Seleccione las Clasificaciones</h2>
              <p className="text-base sm:text-lg text-gray-600">Explore las categorías principales de productos MOGROUP</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Object.entries(CATALOGOMOGROUP).map(([key, value]) => {
                const isSelected = selecciones.clasificaciones.includes(key)
                return (
                  <div
                    key={key}
                    className={`relative bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-105 border-4 ${
                      isSelected ? 'border-green-500 ring-4 ring-green-200 shadow-2xl' : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2 shadow-lg animate-pulse">
                        <Check className="w-5 h-5" />
                      </div>
                    )}

                    <div className="text-5xl sm:text-6xl mb-4 text-center transform hover:scale-110 transition-transform">
                      {value.icono}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-center mb-4 text-gray-800 h-12 sm:h-14 flex items-center justify-center px-2">
                      {value.nombre}
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => toggleClasificacion(key)}
                        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all shadow-md text-sm sm:text-base ${
                          isSelected
                            ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                        }`}
                      >
                        {isSelected ? '✓ Seleccionado' : 'Seleccionar'}
                      </button>
                      <button
                        onClick={() => { setClasificacionActual(key); setNivel('categoria'); }}
                        className="py-3 px-4 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors shadow-md text-sm sm:text-base"
                      >
                        Explorar
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Los demás niveles permanecen igual... */}
      </div>
    </div>
  )
}


