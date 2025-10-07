import Link from 'next/link'
import Image from 'next/image'

export default function FooterPremium() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Footer Principal */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Empresa */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image 
                src="/logo.jpg" 
                alt="MOGROUP Logo" 
                width={50} 
                height={50} 
                className="rounded-lg"
              />
              <div>
                <div className="text-2xl font-bold text-white">MOGROUP</div>
                <div className="text-sm text-gray-400">S.A.</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empresa panameña líder en logística, tecnología y venta de insumos B2B. 
              Potenciando empresas desde 2018 con soluciones innovadoras.
            </p>
            <div className="space-y-2 text-sm">
              <div><strong className="text-white">RUC:</strong> 155672612-2-2018</div>
              <div><strong className="text-white">Rep. Legal:</strong> Kathia Lineth Araúz Rivera</div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Empresa Constituida • 7 años</span>
              </div>
            </div>
          </div>
          
          {/* Servicios */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Servicios</h3>
            <ul className="space-y-3">
              <li><Link href="/servicios/logistica" className="hover:text-blue-400 transition-colors">🚛 Logística Integrada</Link></li>
              <li><Link href="/servicios/tecnologia" className="hover:text-blue-400 transition-colors">💻 Tecnología Innovadora</Link></li>
              <li><Link href="/servicios/insumos" className="hover:text-blue-400 transition-colors">🏪 Venta de Insumos</Link></li>
              <li><Link href="/servicios/inventarios" className="hover:text-blue-400 transition-colors">📋 Gestión de Inventarios</Link></li>
              <li><Link href="/servicios/ti" className="hover:text-blue-400 transition-colors">🔧 Servicios TI</Link></li>
              <li><Link href="/servicios/web" className="hover:text-blue-400 transition-colors">🌐 Desarrollo Web</Link></li>
            </ul>
          </div>
          
          {/* Empresa */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Empresa</h3>
            <ul className="space-y-3">
              <li><Link href="/empresa" className="hover:text-blue-400 transition-colors">Acerca de MOGROUP</Link></li>
              <li><Link href="/catalogo" className="hover:text-blue-400 transition-colors">Catálogo de Productos</Link></li>
              <li><Link href="/admin" className="hover:text-blue-400 transition-colors">MOGROUP Enterprise</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
            </ul>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Clientes</h4>
              <div className="text-sm text-gray-400">
                <div>• Spigolo</div>
                <div>• Terpel</div>
                <div>• Bahía Motor</div>
                <div>• Pizzería Leonardo</div>
                <div>• Panadería Ávila</div>
                <div className="text-blue-400">+50 empresas más</div>
              </div>
            </div>
          </div>
          
          {/* Contacto */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">507-6421-5897</div>
                  <div className="text-sm text-gray-400">Lun-Vie 8AM-6PM</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">grupomopty@gmail.com</div>
                  <div className="text-sm text-gray-400">Respuesta en 24hrs</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Panama City</div>
                  <div className="text-sm text-gray-400">República de Panamá</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-3">
              <a 
                href="https://wa.me/50764215897"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
              <Link 
                href="/admin"
                className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <span>🏢</span>
                <span>MOGROUP Enterprise</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} MOGROUP S.A. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Desarrollado con MOGROUP-ENTERPRISE OS</span>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Sistema Operativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
