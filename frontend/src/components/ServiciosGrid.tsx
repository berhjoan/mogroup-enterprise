'use client'

export default function ServiciosGrid() {
  const servicios = [
    {
      titulo: 'Transporte y Logística',
      icono: '🚚',
      descripcion: 'Soluciones integrales de transporte terrestre y logística empresarial',
      link: '/servicios/transporte'
    },
    {
      titulo: 'Tecnología de la Información',
      icono: '💻',
      descripcion: 'Servicios TI seguros y eficientes para su empresa',
      link: '/servicios/tecnologia'
    },
    {
      titulo: 'Venta de Insumos B2B',
      icono: '📦',
      descripcion: 'Catálogo completo de productos de alta calidad',
      link: '/catalogo'
    },
    {
      titulo: 'Asesoramiento Profesional',
      icono: '👥',
      descripcion: 'Consultoría para crecimiento empresarial',
      link: '/servicios/asesoria'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Servicios Especializados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all">
              <div className="text-5xl mb-4 text-center">{servicio.icono}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{servicio.titulo}</h3>
              <p className="text-gray-600 text-center mb-4">{servicio.descripcion}</p>
              <a href={servicio.link} className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Conocer Más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
