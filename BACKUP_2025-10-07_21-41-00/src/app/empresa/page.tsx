import Link from 'next/link'

export default function EmpresaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">MOGROUP S.A.</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
              <Link href="/servicios" className="text-gray-700 hover:text-blue-600">Servicios</Link>
              <Link href="/catalogo" className="text-gray-700 hover:text-blue-600">Catálogo</Link>
              <Link href="/empresa" className="text-blue-600 font-semibold">Empresa</Link>
              <Link href="/contacto" className="text-gray-700 hover:text-blue-600">Contacto</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
              🇵🇦 EMPRESA PANAMEÑA CONSTITUIDA DESDE 2018
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Conoce MOGROUP S.A.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresa líder en logística, transporte y suministros B2B en Panamá, 
            comprometida con la excelencia operativa y la innovación tecnológica.
          </p>
        </div>

        {/* Información Legal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Información Corporativa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Razón Social</h3>
                <p className="text-gray-600">MOGROUP S.A.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">RUC</h3>
                <p className="text-gray-600 font-mono">155672612-2-2018</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fecha de Constitución</h3>
                <p className="text-gray-600">19 de noviembre de 2018</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Representante Legal</h3>
                <p className="text-gray-600">Kathia Lineth Araúz Rivera</p>
                <p className="text-gray-500 text-sm">C.I.P. 4-741-2113</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Capital Invertido</h3>
                <p className="text-gray-600">B/.1,000.00</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ubicación</h3>
                <p className="text-gray-600">Panamá, República de Panamá</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actividades Empresariales */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nuestras Actividades Empresariales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                codigo: "46900",
                titulo: "Venta al por mayor de efectos personales y productos diversos",
                descripcion: "Distribución mayorista de productos especializados para empresas"
              },
              {
                codigo: "47723", 
                titulo: "Venta al por menor de útiles de oficina",
                descripcion: "Suministro de papelería y materiales de oficina"
              },
              {
                codigo: "47726",
                titulo: "Venta al por menor de artículos de belleza y uso personal", 
                descripcion: "Productos de higiene y cuidado personal institucional"
              },
              {
                codigo: "47193",
                titulo: "Venta de plaguicidas de uso doméstico y de salud pública",
                descripcion: "Productos de limpieza y desinfección profesional"
              },
              {
                codigo: "5212",
                titulo: "Depósitos y almacenaje en Zonas Francas",
                descripcion: "Servicios logísticos especializados"
              },
              {
                codigo: "4923",
                titulo: "Transporte de carga por carretera en Zonas Francas",
                descripcion: "Logística y transporte empresarial"
              }
            ].map((actividad, idx) => (
              <div key={idx} className="bg-blue-500 rounded-lg p-6">
                <div className="text-sm font-semibold text-blue-200 mb-2">
                  Código {actividad.codigo}
                </div>
                <h3 className="text-lg font-bold mb-3">{actividad.titulo}</h3>
                <p className="text-blue-100 text-sm">{actividad.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4 text-center">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Misión</h3>
            <p className="text-gray-600 text-center">
              Ser el socio logístico estratégico de las empresas panameñas, 
              proporcionando soluciones integrales de suministros y transporte 
              con tecnología de vanguardia.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Visión</h3>
            <p className="text-gray-600 text-center">
              Convertirnos en la empresa líder de logística empresarial en 
              Centroamérica, reconocida por nuestra innovación tecnológica 
              y excelencia operativa.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4 text-center">⭐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Valores</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Excelencia en el servicio</li>
              <li>• Innovación tecnológica</li>
              <li>• Compromiso empresarial</li>
              <li>• Transparencia comercial</li>
              <li>• Responsabilidad social</li>
            </ul>
          </div>
        </div>

        {/* Clientes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nuestros Clientes Empresariales
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Empresas líderes en Panamá confían en MOGROUP para sus operaciones
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              'SPIGOLO', 'TERPEL', 'BAHÍA MOTOR', 'PIZZERÍA LEONARDO', 'PANADERÍA ÁVILA'
            ].map((cliente, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-lg font-bold text-gray-800">{cliente}</div>
                <div className="text-sm text-gray-500 mt-2">Cliente Empresarial</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones y Logros */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Certificaciones y Logros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">7 Años de Experiencia</h3>
              <p className="text-green-100">Sirviendo al sector empresarial panameño desde 2018</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Empresa Constituida</h3>
              <p className="text-green-100">Legalmente registrada y operando bajo las leyes panameñas</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">Tecnología Propia</h3>
              <p className="text-green-100">MOGROUP-ENTERPRISE OS desarrollado internamente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
