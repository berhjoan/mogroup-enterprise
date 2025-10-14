'use client'

export default function ProductosDestacados() {
  const productos = [
    { nombre: 'Frappé Caramelo Premium', categoria: 'Bebidas', proveedor: 'AGENCIA LOPEZ' },
    { nombre: 'Químicos Industriales', categoria: 'Limpieza', proveedor: 'BARRAZA & CIA' },
    { nombre: 'Suministros de Oficina', categoria: 'Papelería', proveedor: 'FEDURO' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Productos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {productos.map((producto, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">{producto.nombre}</h3>
              <p className="text-gray-600 mb-2">{producto.categoria}</p>
              <p className="text-sm text-blue-600">Proveedor: {producto.proveedor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
