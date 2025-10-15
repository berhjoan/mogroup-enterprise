'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Package, Users, BarChart3, FileText, Truck, DollarSign, Settings, LogOut } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    { nombre: 'Dashboard', icono: <LayoutDashboard className="w-5 h-5" />, ruta: '/admin', exactMatch: true },
    { nombre: 'Proveedores', icono: <Package className="w-5 h-5" />, ruta: '/enterprise/proveedores' },
    { nombre: 'Clientes', icono: <Users className="w-5 h-5" />, ruta: '/enterprise/clientes' },
    { nombre: 'Inventario', icono: <BarChart3 className="w-5 h-5" />, ruta: '/enterprise/inventario' },
    { nombre: 'Cotizaciones', icono: <FileText className="w-5 h-5" />, ruta: '/enterprise/cotizaciones' },
    { nombre: 'Pedidos', icono: <FileText className="w-5 h-5" />, ruta: '/enterprise/pedidos' },
    { nombre: 'Transporte', icono: <Truck className="w-5 h-5" />, ruta: '/enterprise/transporte' },
    { nombre: 'Contabilidad', icono: <DollarSign className="w-5 h-5" />, ruta: '/enterprise/contabilidad' },
    { nombre: 'Configuración', icono: <Settings className="w-5 h-5" />, ruta: '/enterprise/configuracion' }
  ]

  const isActive = (ruta: string, exactMatch?: boolean) => {
    if (exactMatch) {
      return pathname === ruta
    }
    return pathname?.startsWith(ruta)
  }

  const handleLogout = () => {
    localStorage.clear()
    router.push('/')
  }

  return (
    <div className="w-64 bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 text-white h-screen fixed left-0 top-0 shadow-2xl flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-blue-700">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-lg">
            <Image 
              src="/logo.jpg" 
              alt="MOGROUP" 
              width={48} 
              height={48} 
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">MOGROUP</h1>
            <p className="text-xs text-blue-200">Enterprise OS</p>
          </div>
        </Link>
      </div>

      {/* Menú */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.ruta}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive(item.ruta, item.exactMatch)
                  ? 'bg-white text-blue-900 font-bold shadow-lg'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.icono}
              <span>{item.nombre}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Usuario y Logout */}
      <div className="p-4 border-t border-blue-700">
        <div className="bg-white/10 rounded-xl p-3 mb-3">
          <p className="text-sm font-semibold">BKSYSTEM</p>
          <p className="text-xs text-blue-200">Administrador</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-semibold">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  )
}


