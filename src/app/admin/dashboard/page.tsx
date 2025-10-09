'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Datos simulados pero realistas
  const metrics = {
    proveedores: 22,
    productos: 2847,
    clientes: 156,
    ventas_mes: 284750,
    pedidos_pendientes: 23,
    inventario_valor: 445680,
    cotizaciones_activas: 34,
    transportes_activos: 12
  }

  const topProveedores = [
    { nombre: 'GRUPO J&C IMPORT', productos: 234, ventas: 45200, rating: 4.9 },
    { nombre: 'GRUPO BARSASH', productos: 198, ventas: 38900, rating: 4.5 },
    { nombre: 'PAPELERA COMERCIAL', productos: 201, ventas: 42100, rating: 4.8 },
    { nombre: 'PLASTICO GENERALES', productos: 167, ventas: 31500, rating: 4.3 },
    { nombre: 'BUSINESS SUPLIERS', productos: 167, ventas: 33200, rating: 4.8 }
  ]

  const topClientes = [
    { nombre: 'TERPEL', ventas: 8900, pedidos: 15, sector: 'Estaciones de Servicio' },
    { nombre: 'SPIGOLO', ventas: 3500, pedidos: 8, sector: 'Restaurantes' },
    { nombre: 'BAHÍA MOTOR', ventas: 2100, pedidos: 5, sector: 'Automotriz' },
    { nombre: 'PIZZERÍA LEONARDO', ventas: 1250, pedidos: 3, sector: 'Restaurantes' }
  ]

  return (
    <div className="space-y-8">
      {/* Header del Dashboard */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Image 
                src="/logo.jpg" 
                alt="MOGROUP Logo" 
                width={60} 
                height={60} 
                className="rounded-xl shadow-lg"
              />
              <div>
                <h1 className="text-4xl font-bold">Dashboard Ejecutivo</h1>
                <p className="text-blue-200 text-lg">MOGROUP S.A. - Sistema de Gestión Integral</p>
              </div>
            </div>
            <div className="text-blue-100">
              <p>🇵🇦 Empresa Panameña • RUC: 155672612-2-2018</p>
              <p>📍 Panama City, Panama • 📞 507-6421-5897</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{currentTime.toLocaleTimeString('es-PA')}</div>
            <div className="text-blue-200">{currentTime.toLocaleDateString('es-PA', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</div>
            <div className="mt-2 px-4 py-2 bg-green-500 rounded-full text-white font-semibold">
              🟢 Sistema Operativo
            </div>
          </div>
        </div>
      </div>

      {/* Métricas Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Proveedores Activos</p>
              <p className="text-4xl font-bold text-gray-900">{metrics.proveedores}</p>
              <p className="text-green-600 text-sm mt-1">✅ Todos operativos</p>
            </div>
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
              🏭
            </div>
          </div>
          <Link href="/admin/proveedores" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-4 block">
            Ver proveedores →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Productos en Catálogo</p>
              <p className="text-4xl font-bold text-gray-900">{metrics.productos.toLocaleString()}</p>
              <p className="text-green-600 text-sm mt-1">📈 +12% este mes</p>
            </div>
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
              📦
            </div>
          </div>
          <Link href="/admin/productos" className="text-green-600 hover:text-green-800 text-sm font-medium mt-4 block">
            Ver productos →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Clientes Activos</p>
              <p className="text-4xl font-bold text-gray-900">{metrics.clientes}</p>
              <p className="text-purple-600 text-sm mt-1">🎯 85% recompra</p>
            </div>
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
              👥
            </div>
          </div>
          <Link href="/admin/clientes" className="text-purple-600 hover:text-purple-800 text-sm font-medium mt-4 block">
            Ver clientes →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Ventas del Mes</p>
              <p className="text-4xl font-bold text-gray-900">B/.{Math.round(metrics.ventas_mes/1000)}K</p>
              <p className="text-orange-600 text-sm mt-1">💰 +18% vs mes anterior</p>
            </div>
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
              💰
            </div>
          </div>
          <Link href="/admin/reportes" className="text-orange-600 hover:text-orange-800 text-sm font-medium mt-4 block">
            Ver reportes →
          </Link>
        </div>
      </div>

      {/* Métricas Operativas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🛍️</div>
            <div className="text-2xl font-bold text-gray-900">{metrics.pedidos_pendientes}</div>
            <div className="text-gray-600 text-sm">Pedidos Pendientes</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">📋</div>
            <div className="text-2xl font-bold text-gray-900">B/.{Math.round(metrics.inventario_valor/1000)}K</div>
            <div className="text-gray-600 text-sm">Valor Inventario</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-2xl font-bold text-gray-900">{metrics.cotizaciones_activas}</div>
            <div className="text-gray-600 text-sm">Cotizaciones Activas</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🚛</div>
            <div className="text-2xl font-bold text-gray-900">{metrics.transportes_activos}</div>
            <div className="text-gray-600 text-sm">Transportes Activos</div>
          </div>
        </div>
      </div>

      {/* Top Proveedores y Clientes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Proveedores */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">🏭 Top Proveedores</h3>
            <Link href="/admin/proveedores" className="text-blue-600 hover:text-blue-800 font-medium">
              Ver todos →
            </Link>
          </div>
          <div className="space-y-4">
            {topProveedores.map((proveedor, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    idx === 0 ? 'bg-yellow-500' : idx === 1 ? 'bg-gray-400' : idx === 2 ? 'bg-orange-500' : 'bg-blue-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{proveedor.nombre}</div>
                    <div className="text-sm text-gray-600">{proveedor.productos} productos • {'⭐'.repeat(Math.floor(proveedor.rating))}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">B/.{proveedor.ventas.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">este mes</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Clientes */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">👥 Top Clientes</h3>
            <Link href="/admin/clientes" className="text-blue-600 hover:text-blue-800 font-medium">
              Ver todos →
            </Link>
          </div>
          <div className="space-y-4">
            {topClientes.map((cliente, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    idx === 0 ? 'bg-purple-600' : idx === 1 ? 'bg-purple-500' : idx === 2 ? 'bg-purple-400' : 'bg-purple-300'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{cliente.nombre}</div>
                    <div className="text-sm text-gray-600">{cliente.sector} • {cliente.pedidos} pedidos</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-purple-600">B/.{cliente.ventas.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">este mes</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accesos Rápidos */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Accesos Rápidos</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: 'Nuevo Proveedor', icon: '🏭', href: '/admin/proveedores', color: 'bg-blue-500' },
            { name: 'Crear Cotización', icon: '💰', href: '/admin/cotizaciones', color: 'bg-green-500' },
            { name: 'Nuevo Pedido', icon: '🛍️', href: '/admin/pedidos', color: 'bg-purple-500' },
            { name: 'Ver Inventario', icon: '📋', href: '/admin/inventario', color: 'bg-orange-500' },
            { name: 'Programar Envío', icon: '🚛', href: '/admin/transporte', color: 'bg-red-500' },
            { name: 'Reportes', icon: '📊', href: '/admin/reportes', color: 'bg-indigo-500' }
          ].map((item, idx) => (
            <Link 
              key={idx}
              href={item.href}
              className={`${item.color} text-white p-4 rounded-xl hover:scale-105 transition-all shadow-lg text-center block`}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-sm">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Estado del Sistema */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">🟢 Estado del Sistema</h3>
            <p className="text-green-100">Todos los módulos operando correctamente</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold">MOGROUP-ENTERPRISE OS v2.1</div>
            <div className="text-green-200">Última actualización: {new Date().toLocaleDateString('es-PA')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

