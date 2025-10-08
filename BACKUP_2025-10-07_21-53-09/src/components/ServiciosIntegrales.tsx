'use client'

export default function ServiciosIntegrales() {
  const servicios = [
    { titulo: 'Transporte y Logística', icono: '🚚', descripcion: 'Soluciones de transporte terrestre' },
    { titulo: 'Tecnología TI', icono: '💻', descripcion: 'Servicios tecnológicos avanzados' },
    { titulo: 'Venta de Insumos B2B', icono: '📦', descripcion: 'Catálogo completo de productos' },
    { titulo: 'Asesoramiento', icono: '👥', descripcion: 'Consultoría empresarial' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Servicios Integrales</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-xl transition-all">
              <div className="text-6xl mb-4">{servicio.icono}</div>
              <h3 className="text-xl font-bold mb-3">{servicio.titulo}</h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
