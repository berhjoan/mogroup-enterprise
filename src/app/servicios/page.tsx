import Link from 'next/link'
import Image from 'next/image'

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image src="/logo.jpg" alt="MOGROUP" width={40} height={40} className="mr-3" />
              <div>
                <div className="text-2xl font-bold text-blue-600">MOGROUP</div>
                <div className="text-xs text-gray-500">Logística • Tecnología • Insumos</div>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
              <Link href="/servicios" className="text-blue-600 font-semibold">Servicios</Link>
              <Link href="/catalogo" className="text-gray-700 hover:text-blue-600">Catálogo</Link>
              <Link href="/empresa" className="text-gray-700 hover:text-blue-600">Empresa</Link>
              <Link href="/contacto" className="text-gray-700 hover:text-blue-600">Contacto</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Servicios Empresariales MOGROUP
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios en logística, tecnología y venta de insumos 
            para potenciar el crecimiento de tu empresa.
          </p>
        </div>

        {/* Servicios Principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "🚛",
              titulo: "Logística Integrada",
              descripcion: "Nuestra solución de logística integrada optimiza los procesos de transporte, almacenamiento y distribución para tu empresa.",
              detalles: "Gestión completa de cadena de suministro con optimización de procesos",
              link: "/servicios/logistica"
            },
            {
              icon: "💻", 
              titulo: "Tecnología Innovadora",
              descripcion: "Implementamos tecnologías innovadoras para mejorar la eficiencia y productividad en tu cadena de suministro.",
              detalles: "Soluciones IT avanzadas y transformación digital empresarial",
              link: "/servicios/tecnologia"
            },
            {
              icon: "🏪",
              titulo: "Venta de Insumos",
              descripcion: "Ofrecemos una amplia variedad de insumos de alta calidad para cubrir las necesidades de tu empresa.",
              detalles: "Productos certificados y gestión de aprovisionamiento",
              link: "/servicios/insumos"
            }
          ].map((servicio, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border border-gray-100">
              <div className="text-6xl mb-6 text-center">{servicio.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {servicio.descripcion}
              </p>
              <p className="text-blue-600 text-sm font-medium mb-6 text-center">
                {servicio.detalles}
              </p>
              <div className="text-center">
                <Link 
                  href={servicio.link}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block font-semibold"
                >
                  Conocer Más
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Servicios Especializados */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Servicios Especializados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titulo: "Gestión de Inventarios", descripcion: "Optimización de costos y disponibilidad", icon: "📋" },
              { titulo: "Tecnología de la Información", descripcion: "Servicios TI seguros y eficientes", icon: "🔧" },
              { titulo: "Asesoramiento Profesional", descripcion: "Consultoría para crecimiento empresarial", icon: "👥" },
              { titulo: "Diseño de Páginas Web", descripcion: "Desarrollo web profesional", icon: "🌐" },
              { titulo: "Administración de Redes", descripcion: "Gestión segura y eficiente de redes", icon: "🔗" },
              { titulo: "Recuperación de Datos", descripcion: "Soluciones de respaldo y recuperación", icon: "💾" }
            ].map((servicio, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4 text-center">{servicio.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {servicio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita más información sobre nuestros servicios?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctenos para una consulta personalizada y descubra cómo podemos potenciar su empresa
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/50764215897?text=Hola%20MOGROUP,%20me%20interesa%20información%20sobre%20sus%20servicios"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              💬 WhatsApp: 507-6421-5897
            </a>
            <a 
              href="mailto:admin@mogrupo.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              📧 admin@mogrupo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
