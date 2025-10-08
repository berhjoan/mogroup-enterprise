'use client'

import Link from 'next/link'

const productos = [
  { codigo: 'MC-CAFE', nombre: 'Frappé Café 3lb', descripcion: 'Mezcla premium de café para frappé', precio: '$45.00' },
  { codigo: 'MC-CHOC', nombre: 'Frappé Chocolate 3lb', descripcion: 'Mezcla premium de chocolate', precio: '$42.00' },
  { codigo: 'MC-VAN', nombre: 'Frappé Vainilla 3lb', descripcion: 'Mezcla premium de vainilla', precio: '$43.00' },
  { codigo: 'MC-CAR', nombre: 'Frappé Caramelo 3lb', descripcion: 'Mezcla premium de caramelo', precio: '$44.00' },
  { codigo: 'SB-001', nombre: 'Sirope Chocolate 750ml', descripcion: 'Sirope para bebidas calientes', precio: '$12.50' },
  { codigo: 'SB-002', nombre: 'Sirope Vainilla 750ml', descripcion: 'Sirope para bebidas calientes', precio: '$12.50' },
  { codigo: 'SB-003', nombre: 'Sirope Caramelo 750ml', descripcion: 'Sirope para bebidas calientes', precio: '$12.50' }
]

export default function CatalogoAgenciaLopezPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-green-700 mb-2">
                Catálogo Digital AGENCIA LOPEZ
              </h1>
              <p className="text-gray-600">
                Proveedor: PROV-001 | Productos de cafetería y bebidas premium
              </p>
            </div>
            <Link href="/admin/proveedores">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                ← Volver a Proveedores
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                    Código
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                    Producto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                    Descripción
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                    Precio
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productos.map((prod, idx) => (
                  <tr key={idx} className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {prod.codigo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                      {prod.nombre}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {prod.descripcion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                      {prod.precio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Total de productos:</strong> {productos.length} | 
              <strong className="ml-4">Estado:</strong> Activo | 
              <strong className="ml-4">Última actualización:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
