'use client'

import Link from 'next/link'
import { LayoutDashboard, Users, Package, Truck, FileText, DollarSign, BarChart3, Settings } from 'lucide-react'

export default function AdminDashboard() {
  const modulos = [
    {
      titulo: 'Proveedores',
      descripcion: '22 proveedores certificados',
      icono: <Package className="w-12 h-12" />,
      ruta: '/admin/proveedores',
      color: 'from-blue-500 to-blue-600',
      stats: '22 activos'
    },
    {
      titulo: 'Clientes',
      descripcion: 'Gestión de clientes B2B',
      icono: <Users className="w-12 h-12" />,
      ruta: '/admin/clientes',
      color: 'from-green-500 to-green-600',
      stats: '3 clientes'
    },
    {
      titulo: 'Inventario',
      descripcion: 'Control de productos',
      icono: <BarChart3 className="w-12 h-12" />,
      ruta: '/admin/inventario',
      color: 'from-purple-500 to-purple-600',
      stats: 'Próximamente'
    },
    {
      titulo: 'Cotizaciones',
      descripcion: 'Solicitudes de clientes',
      icono: <FileText className="w-12 h-12" />,
      ruta: '/admin/cotizaciones',
      color: 'from-yellow-500 to-yellow-600',
      stats: 'Próximamente'
    },
    {
      titulo: 'Transporte',
      descripcion: 'Logística y rutas',
      icono: <Truck className="w-12 h-12" />,
      ruta: '/admin/transporte',
      color: 'from-red-500 to-red-600',
      stats: 'Próximamente'
    },
    {
      titulo: 'Contabilidad',
      descripcion: 'Facturación y pagos',
      icono: <DollarSign className="w-12 h-12" />,
      ruta: '/admin/contabilidad',
      color: 'from-indigo-500 to-indigo-600',
      stats: 'Próximamente'
    },
    {
      titulo: 'Pedidos',
      descripcion: 'Gestión de órdenes',
      icono: <FileText className="w-12 h-12" />,
      ruta: '/admin/pedidos',
      color: 'from-pink-500 to-pink-600',
      stats: 'Próximamente'
    },
    {
      titulo: 'Configuración',
      descripcion: 'Ajustes del sistema',
      icono: <Settings className="w-12 h-12" />,
      ruta: '/admin/configuracion',
      color: 'from-gray-500 to-gray-600',
      stats: 'Sistema'
    }
  ]

  
  // Sistema de autenticación
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const isAuth = localStorage.getItem('authenticated')
    if (isAuth !== 'true') {
      router.push('/login')
    } else {
      setAuthenticated(true)
    }
  }, [router])

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando acceso...</p>
        </div>
      </div>
    )
  }
return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <LayoutDashboard className="w-12 h-12" />
            <div>
              <h1 className="text-5xl font-bold">MOGROUP-ENTERPRISE OS</h1>
              <p className="text-blue-100 text-xl">Sistema de Gestión Integral | CRM/ERP Avanzado</p>
            </div>
          </div>
          <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
            <p className="text-lg">
              <span className="font-bold">Sesión Activa:</span> BKSYSTEM (Administrador) | 
              <span className="ml-4 font-bold">Hora:</span> {new Date().toLocaleString('es-PA')}
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Métricas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-gray-600 text-sm font-medium">Proveedores</p>
                <p className="text-4xl font-bold text-blue-600">22</p>
              </div>
              <Package className="w-12 h-12 text-blue-500" />
            </div>
            <p className="text-green-600 text-sm">✓ Todos activos</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-gray-600 text-sm font-medium">Clientes</p>
                <p className="text-4xl font-bold text-green-600">3</p>
              </div>
              <Users className="w-12 h-12 text-green-500" />
            </div>
            <p className="text-green-600 text-sm">✓ Henry activo</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-gray-600 text-sm font-medium">Productos</p>
                <p className="text-4xl font-bold text-purple-600">559</p>
              </div>
              <BarChart3 className="w-12 h-12 text-purple-500" />
            </div>
            <p className="text-purple-600 text-sm">En catálogo</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-gray-600 text-sm font-medium">Sistema</p>
                <p className="text-4xl font-bold text-green-600">100%</p>
              </div>
              <LayoutDashboard className="w-12 h-12 text-green-500" />
            </div>
            <p className="text-green-600 text-sm">Operativo</p>
          </div>
        </div>

        {/* Módulos del Sistema */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Módulos del Sistema</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modulos.map((modulo, idx) => (
              <Link
                key={idx}
                href={modulo.ruta}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${modulo.color} p-6 text-white`}>
                  <div className="flex justify-center mb-3">
                    {modulo.icono}
                  </div>
                  <h3 className="text-xl font-bold text-center">{modulo.titulo}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-center mb-3">{modulo.descripcion}</p>
                  <div className="bg-gray-100 rounded-lg p-2 text-center">
                    <span className="text-sm font-semibold text-gray-700">{modulo.stats}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Accesos Rápidos */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Accesos Rápidos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/admin/proveedores"
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-bold text-gray-800">Ver Proveedores</p>
                  <p className="text-sm text-gray-600">22 proveedores disponibles</p>
                </div>
              </div>
            </Link>

            <Link
              href="/admin/clientes"
              className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl hover:from-green-100 hover:to-green-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-bold text-gray-800">Ver Clientes</p>
                  <p className="text-sm text-gray-600">Gestionar clientes B2B</p>
                </div>
              </div>
            </Link>

            <Link
              href="/catalogo"
              className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="font-bold text-gray-800">Catálogo Henry</p>
                  <p className="text-sm text-gray-600">559 productos organizados</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


