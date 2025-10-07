'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function NavegacionPremium() {
  const [menuServicios, setMenuServicios] = useState(false)
  const [menuMobile, setMenuMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/contacto', label: 'Contacto' }
  ]

  const serviciosSubmenu = [
    { href: '/servicios/logistica', label: '🚛 Logística Integrada', desc: 'Transporte y distribución' },
    { href: '/servicios/tecnologia', label: '💻 Tecnología Innovadora', desc: 'Soluciones IT avanzadas' },
    { href: '/servicios/insumos', label: '🏪 Venta de Insumos', desc: 'Productos B2B certificados' },
    { href: '/servicios/inventarios', label: '📋 Gestión de Inventarios', desc: 'Control y optimización' },
    { href: '/servicios/ti', label: '🔧 Servicios TI', desc: 'Soporte técnico integral' },
    { href: '/servicios/web', label: '🌐 Desarrollo Web', desc: 'Páginas profesionales' }
  ]

  return (
    <>
      {/* Navegación Principal */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo MOGROUP Prominente */}
            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.jpg" 
                alt="MOGROUP Logo" 
                width={60} 
                height={60} 
                className="rounded-lg shadow-md"
              />
              <div>
                <div className="text-3xl font-bold text-blue-600">MOGROUP</div>
                <div className="text-sm text-gray-500 font-medium">Logística • Tecnología • Insumos</div>
              </div>
            </Link>
            
            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.href} className="relative">
                  {item.label === 'Servicios' ? (
                    <div className="relative">
                      <button 
                        onClick={() => setMenuServicios(!menuServicios)}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all ${
                          pathname.startsWith('/servicios') 
                            ? 'text-blue-600 bg-blue-50' 
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <span>Servicios</span>
                        <svg className={`w-4 h-4 transition-transform ${menuServicios ? 'rotate-180' : ''}`} 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mega Menu Servicios */}
                      {menuServicios && (
                        <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-2xl rounded-xl border border-gray-100 py-4 z-50">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <h3 className="font-bold text-gray-900">Servicios MOGROUP</h3>
                            <p className="text-sm text-gray-500">Soluciones empresariales integrales</p>
                          </div>
                          <div className="py-2">
                            {serviciosSubmenu.map((servicio) => (
                              <Link 
                                key={servicio.href}
                                href={servicio.href}
                                className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                                onClick={() => setMenuServicios(false)}
                              >
                                <div className="font-semibold text-gray-900">{servicio.label}</div>
                                <div className="text-sm text-gray-500">{servicio.desc}</div>
                              </Link>
                            ))}
                          </div>
                          <div className="px-4 py-2 border-t border-gray-100">
                            <Link 
                              href="/servicios"
                              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                            >
                              Ver todos los servicios →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        pathname === item.href 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Botones CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:+50764215897" 
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>507-6421-5897</span>
              </a>
              <Link 
                href="/admin" 
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>MOGROUP Enterprise</span>
              </Link>
            </div>

            {/* Menu Mobile Toggle */}
            <button 
              onClick={() => setMenuMobile(!menuMobile)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={menuMobile ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuMobile && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    pathname === item.href 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setMenuMobile(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a 
                  href="tel:+50764215897"
                  className="block bg-green-600 text-white px-4 py-3 rounded-lg text-center font-medium"
                >
                  📞 507-6421-5897
                </a>
                <Link 
                  href="/admin"
                  className="block bg-purple-600 text-white px-4 py-3 rounded-lg text-center font-medium"
                >
                  🏢 MOGROUP Enterprise
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer para navegación fija */}
      <div className="h-20"></div>
    </>
  )
}
