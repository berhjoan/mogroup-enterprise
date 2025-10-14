'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Users, Package, Truck, FileText, DollarSign, BarChart3, Settings } from 'lucide-react'

export default function AdminDashboard() {
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

  const modulos = [
    { titulo: 'Proveedores', descripcion: '22 proveedores certificados', icono: <Package className="w-12 h-12" />, ruta: '/admin/proveedores', color: 'from-blue-500 to-blue-600', stats: '22 activos' },
    { titulo: 'Clientes', descripcion: 'Gestión de clientes B2B', icono: <Users className="w-12 h-12" />, ruta: '/admin/clientes', color: 'from-green-500 to-green-600', stats: '3 clientes' },
    { titulo: 'Inventario', descripcion: 'Control de productos', icono: <BarChart3 className="w-12 h-12" />, ruta: '/admin/inventario', color: 'from-purple-500 to-purple-600', stats: 'Próximamente' },
    { titulo: 'Cotizaciones', descripcion: 'Solicitudes de clientes', icono: <FileText className="w-12 h-12" />, ruta: '/admin/cotizaciones', color: 'from-yellow-500 to-yellow-600', stats: 'Próximamente' },
    { titulo: 'Transporte', descripcion: 'Logística y rutas', icono: <Truck className="w-12 h-12" />, ruta: '/admin/transporte', color: 'from-red-500 to-red-600', stats: 'Próximamente' },
    { titulo: 'Contabilidad', descripcion: 'Facturación y pagos', icono: <DollarSign className="w-12 h-12" />, ruta: '/admin/contabilidad', color: 'from-indigo-500 to-indigo-600', stats: 'Próximamente' },
    { titulo: 'Pedidos', descripcion: 'Gestión de órdenes', icono: <FileText className="w-12 h-12" />, ruta: '/admin/pedidos', color: 'from-pink-500 to-pink-600', stats: 'Próximamente' },
    { titulo: 'Configuración', descripcion: 'Ajustes del sistema', icono: <Settings className="w-12 h-12" />, ruta: '/admin/configuracion', color: 'from-gray-500 to-gray-600', stats: 'Sistema' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LayoutDashboard className="w-12 h-12" />
            <div>
              <h1 className="text-5xl font-bold">MOGROUP-ENTERPRISE OS</h1>
              <p className="text-blue-100 text-xl">Sistema de Gestión Integral</p>
            </div>
          </div>
          <button onClick={() => { localStorage.removeItem('authenticated'); router.push('/login') }}
                  className="bg-red-600 px-4 py-2 rounded text-white font-bold">Cerrar Sesión</button>
        </div>
      </div>

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Módulos del Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modulos.map((m, i) => (
            <Link key={i} href={m.ruta}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
              <div className={g-gradient-to-r  p-4 text-white rounded-lg mb-4}>
                {m.icono}
              </div>
              <h3 className="font-bold text-lg mb-2">{m.titulo}</h3>
              <p className="text-gray-600">{m.descripcion}</p>
              <span className="text-sm font-semibold block mt-2">{m.stats}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
