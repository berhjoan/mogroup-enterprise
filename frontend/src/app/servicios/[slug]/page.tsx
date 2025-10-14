"use client"

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Package, Truck, Wrench, Laptop, Settings, MapPin } from 'lucide-react'

const serviciosData: any = {
  logistica: {
    nombre: "Logística Integrada",
    descripcion: "Soluciones completas de almacenamiento, distribución y gestión de inventario para optimizar tu cadena de suministro",
    icon: Package,
    color: "from-blue-600 to-cyan-600",
    beneficios: [
      "Almacenamiento seguro y climatizado",
      "Sistema de gestión de inventario en tiempo real",
      "Distribución eficiente con rutas optimizadas",
      "Trazabilidad completa de productos",
      "Personal capacitado y certificado",
      "Tecnología de vanguardia"
    ]
  },
  transporte: {
    nombre: "Transporte de Carga",
    descripcion: "Flota moderna y servicio de transporte confiable para todo tipo de mercancía",
    icon: Truck,
    color: "from-green-600 to-emerald-600",
    beneficios: [
      "Flota moderna y bien mantenida",
      "Rastreo GPS en tiempo real",
      "Seguro de carga incluido",
      "Conductores profesionales",
      "Entregas puntuales garantizadas",
      "Cobertura nacional"
    ]
  },
  modificaciones: {
    nombre: "Modificaciones y Mantenimiento",
    descripcion: "Servicios especializados de modificación, reparación y mantenimiento técnico",
    icon: Wrench,
    color: "from-orange-600 to-red-600",
    beneficios: [
      "Mantenimiento preventivo y correctivo",
      "Reparaciones especializadas",
      "Modificaciones personalizadas",
      "Certificaciones técnicas",
      "Garantía de trabajo",
      "Respuesta rápida 24/7"
    ]
  },
  software: {
    nombre: "Software y Tecnología",
    descripcion: "Desarrollo de software empresarial y soluciones tecnológicas innovadoras",
    icon: Laptop,
    color: "from-purple-600 to-pink-600",
    beneficios: [
      "Desarrollo de ERP/CRM personalizado",
      "Aplicaciones móviles nativas",
      "Automatización de procesos",
      "Integración de sistemas",
      "Soporte técnico continuo",
      "Capacitación incluida"
    ]
  },
  jardineria: {
    nombre: "Jardinería y Paisajismo",
    descripcion: "Diseño, implementación y mantenimiento profesional de áreas verdes",
    icon: Settings,
    color: "from-green-500 to-lime-500",
    beneficios: [
      "Diseño de jardines personalizado",
      "Mantenimiento periódico",
      "Sistemas de riego automatizado",
      "Paisajismo profesional",
      "Plantas de calidad premium",
      "Garantía de crecimiento"
    ]
  },
  insumos: {
    nombre: "Venta de Insumos",
    descripcion: "Amplio catálogo de productos de alta calidad para empresas",
    icon: MapPin,
    color: "from-indigo-600 to-blue-600",
    beneficios: [
      "Productos hoteleros premium",
      "Suministros para gastronomía",
      "Artículos de limpieza industrial",
      "Equipos de seguridad",
      "Precios competitivos",
      "Entregas programadas"
    ]
  }
}

export default function ServicioDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const servicio = serviciosData[slug]

  if (!servicio) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Servicio no encontrado</h1>
          <Link href="/servicios" className="text-blue-600 hover:text-blue-800 font-bold">
            ← Volver a servicios
          </Link>
        </div>
      </div>
    )
  }

  const Icon = servicio.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className={`relative bg-gradient-to-br ${servicio.color} text-white py-24 overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/servicios" className="inline-flex items-center text-white mb-8 hover:underline font-bold">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a servicios
          </Link>
          
          <div className="max-w-4xl">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl inline-block mb-8">
              <Icon className="w-16 h-16" />
            </div>
            
            <h1 className="text-6xl font-black mb-6">{servicio.nombre}</h1>
            <p className="text-2xl text-white/90 leading-relaxed">{servicio.descripcion}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 mb-12">Beneficios del Servicio</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicio.beneficios.map((beneficio: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{beneficio}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 p-12 rounded-3xl text-white text-center">
              <h3 className="text-3xl font-black mb-4">¿Interesado en este servicio?</h3>
              <p className="text-xl mb-8">Contáctanos para obtener más información y una cotización personalizada</p>
              <Link href="/contacto" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform">
                Contactar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
