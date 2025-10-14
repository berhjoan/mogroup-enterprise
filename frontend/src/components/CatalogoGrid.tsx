'use client'
import Link from 'next/link'
import Image from 'next/image'
import IMAGES from '@/config/images'

export default function CatalogoGrid() {
  const categorias = [
    { 
      id: 1, 
      nombre: 'Hotelería y Hospitalidad', 
      slug: 'hoteleria-hospitalidad', 
      imagen: IMAGES.categorias.hoteleria,
      descripcion: 'Productos premium para hoteles' 
    },
    { 
      id: 2, 
      nombre: 'Suministros de Cafetería', 
      slug: 'suministros-cafeteria', 
      imagen: IMAGES.categorias.cafeteria,
      descripcion: 'Todo para tu cafetería' 
    },
    { 
      id: 3, 
      nombre: 'Bolsas de Residuos', 
      slug: 'bolsas-residuos', 
      imagen: IMAGES.categorias.limpieza,
      descripcion: 'Bolsas resistentes' 
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categorias.map((cat) => (
        <Link key={cat.id} href={'/catalogo/'}>
          <div className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={cat.imagen}
                alt={cat.nombre}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.nombre}</h3>
              <p className="text-gray-600">{cat.descripcion}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
