'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Users, ShoppingCart, Star, ChevronRight, Search, Package } from 'lucide-react'

export default function ClientesPage() {
  const [busqueda, setBusqueda] = useState('')

  const clientes = [
    {
      id: 'CLI-001',
      nombre: 'Henry',
      empresa: 'Empresa Henry Corp',
      email: 'henry@empresahenry.com',
      telefono: '507-6123-4567',
      fechaRegistro: '2025-01-15',
      productosInteres: ['Suministros de Oficina', 'Papelería', 'Desechables', 'EPP'],
      totalCompras: 15,
      rating: 4.8,
      catalogoAsignado: true,
      totalProductos: 559
    }
  ]

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
              <Users className="w-10 h-10 text-blue-600" />
              Gestión de Clientes
            </h1>
            <p className="text-gray-600 text-lg mt-2">
              Red de {clientes.length} clientes registrados en MOGROUP
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-lg">
            + Nuevo Cliente
          </button>
        </div>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm font-medium">Total Clientes</p>
            <Users className="w-12 h-12 text-blue-500" />
          </div>
          <p className="text-4xl font-bold text-blue-600">{clientes.length}</p>
          <p className="text-green-600 text-sm mt-1">✓ Todos activos</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm font-medium">Total Compras</p>
            <ShoppingCart className="w-12 h-12 text-green-500" />
          </div>
          <p className="text-4xl font-bold text-green-600">
            {clientes.reduce((sum, c) => sum + c.totalCompras, 0)}
          </p>
          <p className="text-green-500 text-sm mt-1">Órdenes procesadas</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm font-medium">Rating Promedio</p>
            <Star className="w-12 h-12 text-yellow-500" />
          </div>
          <p className="text-4xl font-bold text-yellow-600">
            {(clientes.reduce((sum, c) => sum + c.rating, 0) / clientes.length).toFixed(1)}
          </p>
          <p className="text-yellow-500 text-sm mt-1">Excelencia</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm font-medium">Productos</p>
            <Package className="w-12 h-12 text-purple-500" />
          </div>
          <p className="text-4xl font-bold text-purple-600">559</p>
          <p className="text-purple-500 text-sm mt-1">En catálogo</p>
        </div>
      </div>

      {/* Búsqueda */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar clientes..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Lista de Clientes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientes.map(cliente => (
          <div
            key={cliente.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{cliente.nombre}</h3>
                <p className="text-blue-600 font-medium">{cliente.empresa}</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                Activo
              </span>
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center text-gray-600">
                <span className="text-gray-400 mr-2">✉</span>
                <span className="truncate">{cliente.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-gray-400 mr-2">📱</span>
                <span>{cliente.telefono}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-gray-400 mr-2">📅</span>
                <span>Registrado: {cliente.fechaRegistro}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-600 mb-2">Productos de Interés:</p>
              <div className="flex flex-wrap gap-1">
                {cliente.productosInteres.slice(0, 3).map((prod, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                    {prod}
                  </span>
                ))}
                {cliente.productosInteres.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    +{cliente.productosInteres.length - 3}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <div className="text-yellow-500">{'⭐'.repeat(Math.floor(cliente.rating))}</div>
                <span className="font-bold text-gray-900">{cliente.rating}</span>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="font-semibold">{cliente.totalCompras}</span>
                </div>
                <Link
                  href="/catalogo"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                >
                  <Package className="w-4 h-4" />
                  Catálogo
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {cliente.catalogoAsignado && (
              <div className="mt-4 bg-green-50 rounded-lg p-3 text-center">
                <p className="text-green-700 text-xs font-semibold">
                  ✓ Catálogo Asignado: {cliente.totalProductos} productos
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

