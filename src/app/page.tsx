'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Truck, Package, Globe, Code, FileText, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const productosDestacados = [
    { nombre: 'Suministros de Oficina', imagen: '📋', descripcion: 'Todo lo que tu empresa necesita' },
    { nombre: 'Equipo de Protección', imagen: '🦺', descripcion: 'EPP certificado y de calidad' },
    { nombre: 'Hotelería', imagen: '🏨', descripcion: 'Amenidades y textiles premium' },
    { nombre: 'Papelería Institucional', imagen: '🧻', descripcion: 'Papel y dispensadores industriales' },
    { nombre: 'Desechables Food Service', imagen: '🥤', descripcion: 'Vasos, platos y empaques' },
    { nombre: 'Equipos de Limpieza', imagen: '🧹', descripcion: 'Herramientas profesionales' },
    { nombre: 'Productos de Limpieza', imagen: '🧴', descripcion: 'Químicos y desinfectantes' },
    { nombre: 'Cafetería', imagen: '☕', descripcion: 'Café, té y endulzantes' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(productosDestacados.length / 3))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(productosDestacados.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(productosDestacados.length / 3)) % Math.ceil(productosDestacados.length / 3))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Profesional */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-2 shadow-md">
                <Image 
                  src="/logo.jpg" 
                  alt="MOGROUP" 
                  width={56} 
                  height={56} 
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900">MOGROUP</h1>
                <p className="text-xs text-gray-600 font-medium">Soluciones Empresariales</p>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="#servicios" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
                Servicios
              </Link>
              <Link href="#productos" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
                Productos
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
                Contacto
              </Link>
              <Link
                href="/login"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold shadow-md flex items-center gap-2"
              >
                Acceso Clientes
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <Link
              href="/login"
              className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm"
            >
              Acceso
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-gray-900 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-md">
                🚀 Líder en Soluciones B2B en Panamá
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-gray-900">
                Impulsamos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-700">Negocio</span> con Soluciones Integrales
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
                Transporte, Logística, Trámites Aduanales, Desarrollo de Software y Venta de Insumos B2B.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contacto"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all font-bold text-lg shadow-lg flex items-center justify-center gap-2"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  href="#servicios"
                  className="bg-white text-gray-800 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all font-bold text-lg border-2 border-gray-300 flex items-center justify-center shadow-md"
                >
                  Conocer Servicios
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-md">
                  <p className="text-3xl font-black text-blue-600">+7</p>
                  <p className="text-sm text-gray-600 font-medium">Años de Experiencia</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-md">
                  <p className="text-3xl font-black text-blue-600">24/7</p>
                  <p className="text-sm text-gray-600 font-medium">Atención Continua</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-md">
                  <p className="text-3xl font-black text-blue-600">100%</p>
                  <p className="text-sm text-gray-600 font-medium">Confiable</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
                <div className="aspect-square w-full bg-gradient-to-br from-blue-100 via-slate-100 to-blue-50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/images/imagen1.png"
                    alt="MOGROUP Solutions"
                    width={600}
                    height={600}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-slate-200 rounded-3xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones empresariales completas diseñadas para impulsar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icono: <Truck className="w-12 h-12 text-white" />,
                titulo: 'Transporte y Logística',
                descripcion: 'Servicio de transporte terrestre y logística integral. Distribución nacional con tracking en tiempo real. Flota propia y alianzas estratégicas.',
                color: 'from-blue-600 to-blue-700',
                detalles: ['Transporte terrestre', 'Distribución nacional', 'Tracking GPS', 'Flota propia']
              },
              {
                icono: <Globe className="w-12 h-12 text-white" />,
                titulo: 'Trámites Aduanales',
                descripcion: 'Gestión completa de importaciones y exportaciones. Agente aduanal certificado. Asesoría en regulaciones y documentación.',
                color: 'from-slate-600 to-slate-700',
                detalles: ['Importaciones', 'Exportaciones', 'Asesoría legal', 'Documentación']
              },
              {
                icono: <Code className="w-12 h-12 text-white" />,
                titulo: 'Desarrollo de Software',
                descripcion: 'Diseño y desarrollo de software empresarial a medida. CRM, ERP, aplicaciones web y móviles. Integración de sistemas.',
                color: 'from-blue-700 to-slate-700',
                detalles: ['CRM/ERP', 'Apps móviles', 'Web apps', 'Integración']
              },
              {
                icono: <Package className="w-12 h-12 text-white" />,
                titulo: 'Venta de Insumos B2B',
                descripcion: 'Catálogo completo de insumos empresariales. Suministros de oficina, EPP, productos de limpieza, hotelería y más.',
                color: 'from-blue-500 to-blue-600',
                detalles: ['Oficina', 'EPP', 'Limpieza', 'Hotelería']
              },
              {
                icono: <FileText className="w-12 h-12 text-white" />,
                titulo: 'Gestión Empresarial',
                descripcion: 'Plataforma de gestión integral para empresas. Control de inventarios, facturación, reportes y análisis.',
                color: 'from-slate-600 to-blue-600',
                detalles: ['Inventarios', 'Facturación', 'Reportes', 'Analytics']
              },
              {
                icono: <Truck className="w-12 h-12 text-white" />,
                titulo: 'Almacenamiento',
                descripcion: 'Servicios de warehousing y almacenamiento. Bodegas seguras con control de temperatura. Sistema de gestión de inventario.',
                color: 'from-slate-700 to-blue-700',
                detalles: ['Warehousing', 'Control clima', 'Seguridad 24/7', 'Inventario']
              }
            ].map((servicio, idx) => (
              <div key={idx} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${servicio.color} p-6`}>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    {servicio.icono}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{servicio.titulo}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{servicio.descripcion}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {servicio.detalles.map((detalle, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{detalle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel de Productos */}
      <section id="productos" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Nuestros Productos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Catálogo completo de insumos empresariales organizados por categorías
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {productosDestacados.slice(currentSlide * 3, currentSlide * 3 + 3).map((producto, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                    <div className="text-6xl mb-4 text-center">{producto.imagen}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{producto.nombre}</h3>
                    <p className="text-gray-600 text-center">{producto.descripcion}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-md"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(productosDestacados.length / 3) }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-3 rounded-full transition-all ${
                        currentSlide === idx ? 'bg-blue-600 w-8' : 'bg-gray-300 w-3'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl hover:bg-blue-700 transition-all font-bold text-xl shadow-lg"
            >
              Solicitar Catálogo Completo
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6">Contáctanos</h2>
              <p className="text-xl text-blue-100 mb-8">
                Estamos listos para ayudarte a impulsar tu negocio. Solicita una cotización personalizada.
              </p>

              <div className="space-y-6">
                {[
                  { icono: <Phone className="w-6 h-6" />, titulo: 'Teléfono', info: '+507 6421-5897' },
                  { icono: <Mail className="w-6 h-6" />, titulo: 'Email', info: 'info@mogroup.com.pa' },
                  { icono: <MapPin className="w-6 h-6" />, titulo: 'Ubicación', info: 'Ciudad de Panamá, Panamá' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="bg-blue-600 rounded-lg p-3">
                      {item.icono}
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 font-medium">{item.titulo}</p>
                      <p className="text-lg font-bold">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Cotización</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
                <input
                  type="email"
                  placeholder="Email corporativo"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
                <textarea
                  placeholder="Cuéntanos sobre tu proyecto"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all font-bold text-lg shadow-lg"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg p-2">
                  <Image 
                    src="/logo.jpg" 
                    alt="MOGROUP" 
                    width={48} 
                    height={48} 
                    className="rounded object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">MOGROUP</h3>
                  <p className="text-sm text-gray-400">Soluciones Empresariales</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Líder en soluciones empresariales B2B en Panamá. Transporte, Logística, Trámites Aduanales, Desarrollo de Software y Venta de Insumos.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicios" className="hover:text-white transition-colors">Transporte</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Logística</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Aduanas</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Software</a></li>
                <li><a href="#productos" className="hover:text-white transition-colors">Insumos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#productos" className="hover:text-white transition-colors">Productos</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Portal Clientes</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="text-sm">© 2025 MOGROUP S.A. - Todos los derechos reservados | RUC: 123456-1-123456 | Ciudad de Panamá, Panamá</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
