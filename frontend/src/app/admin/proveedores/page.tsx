'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Proveedor {
  id: string
  nombre: string
  categoria: string
  contacto: string
  telefono: string
  email: string
  productos_count: number
  ultima_actualizacion: Date
  status: 'Activo' | 'Inactivo' | 'Pendiente'
  rating: number
  descripcion: string
  especialidad: string[]
  catalogoCargado: boolean
}

export default function ProveedoresPage() {
  const [filtroStatus, setFiltroStatus] = useState<string>('Todos')
  const [busqueda, setBusqueda] = useState('')
  const [vistaGrid, setVistaGrid] = useState(true)
  
  const [proveedores] = useState<Proveedor[]>([
    {
      id: 'PROV-001',
      nombre: 'AGENCIA LOPEZ',
      categoria: 'Distribuidor General',
      contacto: 'María López',
      telefono: '+507 6789-1234',
      email: 'ventas@agencialopez.com',
      productos_count: 258,
      ultima_actualizacion: new Date('2025-10-06'),
      status: 'Activo',
      rating: 4.8,
      descripcion: 'Distribuidor líder en productos de oficina, cafetería y bebidas premium',
      especialidad: ['Bebidas', 'Cafetería', 'Desechables'],
      catalogoCargado: true
    },
    {
      id: 'PROV-002',
      nombre: 'BARRAZA & CIA',
      categoria: 'Químicos y Limpieza',
      contacto: 'Carlos Barraza',
      telefono: '+507 6555-7890',
      email: 'carlos@barrazacia.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-10-04'),
      status: 'Activo',
      rating: 4.6,
      descripcion: 'Especialista en productos químicos y de limpieza industrial',
      especialidad: ['Químicos', 'Limpieza', 'Industrial'],
      catalogoCargado: false
    },
    {
      id: 'PROV-003',
      nombre: 'FEDURO',
      categoria: 'Ferretería y Construcción',
      contacto: 'Ana Durán',
      telefono: '+507 6333-4567',
      email: 'info@feduro.com.pa',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-10-03'),
      status: 'Activo',
      rating: 4.5,
      descripcion: 'Ferretería especializada en construcción y herramientas',
      especialidad: ['Ferretería', 'Construcción', 'Herramientas'],
      catalogoCargado: false
    },
    {
      id: 'PROV-004',
      nombre: 'NEVADA',
      categoria: 'Tecnología',
      contacto: 'Roberto Nevada',
      telefono: '+507 6111-2345',
      email: 'roberto@nevada.com.pa',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-10-02'),
      status: 'Activo',
      rating: 4.9,
      descripcion: 'Proveedor de equipos tecnológicos y electrónicos',
      especialidad: ['Tecnología', 'Electrónicos', 'Equipos'],
      catalogoCargado: false
    },
    {
      id: 'PROV-005',
      nombre: 'GSG PANAMA',
      categoria: 'Suministros Generales',
      contacto: 'Patricia García',
      telefono: '+507 6777-8901',
      email: 'pgarcia@gsgpanama.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-10-01'),
      status: 'Activo',
      rating: 4.7,
      descripcion: 'Distribuidor de suministros generales para empresas',
      especialidad: ['Suministros', 'Oficina', 'Generales'],
      catalogoCargado: false
    },
    {
      id: 'PROV-006',
      nombre: 'DISTRAL',
      categoria: 'Distribución Alimentaria',
      contacto: 'Miguel Distral',
      telefono: '+507 6444-5678',
      email: 'miguel@distral.com.pa',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-30'),
      status: 'Activo',
      rating: 4.4,
      descripcion: 'Distribuidor especializado en productos alimentarios',
      especialidad: ['Alimentos', 'Bebidas', 'Food Service'],
      catalogoCargado: false
    },
    {
      id: 'PROV-007',
      nombre: 'DISTRI PLASTICK PTY',
      categoria: 'Plásticos y Empaques',
      contacto: 'Carmen Plástico',
      telefono: '+507 6222-3456',
      email: 'carmen@distriplastick.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-29'),
      status: 'Activo',
      rating: 4.6,
      descripcion: 'Especialista en productos plásticos y empaques',
      especialidad: ['Plásticos', 'Empaques', 'Desechables'],
      catalogoCargado: false
    },
    {
      id: 'PROV-008',
      nombre: 'PAPELERA COMERCIAL',
      categoria: 'Papelería y Oficina',
      contacto: 'Luis Papel',
      telefono: '+507 6888-9012',
      email: 'luis@papeleracomercial.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-28'),
      status: 'Activo',
      rating: 4.8,
      descripcion: 'Distribuidor líder en papelería y suministros de oficina',
      especialidad: ['Papelería', 'Oficina', 'Escritorio'],
      catalogoCargado: false
    },
    {
      id: 'PROV-009',
      nombre: 'PBS PANAMA',
      categoria: 'Suministros Profesionales',
      contacto: 'Sandra PBS',
      telefono: '+507 6666-7890',
      email: 'sandra@pbspanama.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-27'),
      status: 'Activo',
      rating: 4.5,
      descripcion: 'Proveedor de suministros profesionales especializados',
      especialidad: ['Profesional', 'Especializado', 'B2B'],
      catalogoCargado: false
    },
    {
      id: 'PROV-010',
      nombre: 'PLASTICO GENERALES',
      categoria: 'Productos Plásticos',
      contacto: 'Fernando General',
      telefono: '+507 6999-0123',
      email: 'fernando@plasticogenerales.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-26'),
      status: 'Activo',
      rating: 4.3,
      descripcion: 'Manufacturero de productos plásticos diversos',
      especialidad: ['Manufactura', 'Plásticos', 'Diversos'],
      catalogoCargado: false
    },
    {
      id: 'PROV-011',
      nombre: 'OLIMPUS COMERCIAL CORP',
      categoria: 'Comercial Corporativo',
      contacto: 'Diana Olimpo',
      telefono: '+507 6123-4567',
      email: 'diana@olimpuscommercial.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-25'),
      status: 'Activo',
      rating: 4.7,
      descripcion: 'Corporación comercial con enfoque empresarial',
      especialidad: ['Corporativo', 'Empresarial', 'Comercial'],
      catalogoCargado: false
    },
    {
      id: 'PROV-012',
      nombre: 'CENTRAL DE ENVASE ACME',
      categoria: 'Envases y Embalajes',
      contacto: 'Jorge Envase',
      telefono: '+507 6456-7890',
      email: 'jorge@centralenvase.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-24'),
      status: 'Activo',
      rating: 4.4,
      descripcion: 'Especialista en envases y soluciones de embalaje',
      especialidad: ['Envases', 'Embalajes', 'Packaging'],
      catalogoCargado: false
    },
    {
      id: 'PROV-013',
      nombre: 'GRUPO 3S',
      categoria: 'Grupo Empresarial',
      contacto: 'María 3S',
      telefono: '+507 6789-0123',
      email: 'maria@grupo3s.com.pa',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-23'),
      status: 'Activo',
      rating: 4.6,
      descripcion: 'Grupo empresarial con diversas líneas de productos',
      especialidad: ['Diversificado', 'Empresarial', 'Múltiples'],
      catalogoCargado: false
    },
    {
      id: 'PROV-014',
      nombre: 'GRUPO KOSUPA',
      categoria: 'Suministros Especializados',
      contacto: 'Carlos Kosupa',
      telefono: '+507 6012-3456',
      email: 'carlos@grupokosupa.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-22'),
      status: 'Activo',
      rating: 4.8,
      descripcion: 'Grupo especializado en suministros técnicos',
      especialidad: ['Técnico', 'Especializado', 'Industrial'],
      catalogoCargado: false
    },
    {
      id: 'PROV-015',
      nombre: 'GRUPO BARSASH',
      categoria: 'Distribuidor Múltiple',
      contacto: 'Ana Barsash',
      telefono: '+507 6345-6789',
      email: 'ana@grupobarsash.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-21'),
      status: 'Activo',
      rating: 4.5,
      descripcion: 'Grupo distribuidor con múltiples categorías',
      especialidad: ['Distribución', 'Múltiple', 'Variado'],
      catalogoCargado: false
    },
    {
      id: 'PROV-016',
      nombre: 'GRUPO J&C IMPORT',
      categoria: 'Importaciones',
      contacto: 'José Import',
      telefono: '+507 6678-9012',
      email: 'jose@grupojcimport.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-20'),
      status: 'Activo',
      rating: 4.9,
      descripcion: 'Importador especializado en productos internacionales',
      especialidad: ['Importación', 'Internacional', 'Premium'],
      catalogoCargado: false
    },
    {
      id: 'PROV-017',
      nombre: 'EL CISNE',
      categoria: 'Productos Premium',
      contacto: 'Elena Cisne',
      telefono: '+507 6901-2345',
      email: 'elena@elcisne.com.pa',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-19'),
      status: 'Activo',
      rating: 4.7,
      descripcion: 'Proveedor de productos premium y selectos',
      especialidad: ['Premium', 'Selectos', 'Alta Calidad'],
      catalogoCargado: false
    },
    {
      id: 'PROV-018',
      nombre: 'GRAN PACIFICO',
      categoria: 'Distribuidor Regional',
      contacto: 'Roberto Pacífico',
      telefono: '+507 6234-5678',
      email: 'roberto@granpacifico.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-18'),
      status: 'Activo',
      rating: 4.6,
      descripcion: 'Distribuidor regional con amplia cobertura',
      especialidad: ['Regional', 'Cobertura', 'Logística'],
      catalogoCargado: false
    },
    {
      id: 'PROV-019',
      nombre: 'BUSINESS SUPLIERS',
      categoria: 'Suministros Empresariales',
      contacto: 'Patricia Business',
      telefono: '+507 6567-8901',
      email: 'patricia@businesssuppliers.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-17'),
      status: 'Activo',
      rating: 4.8,
      descripcion: 'Especialista en suministros para empresas',
      especialidad: ['B2B', 'Empresarial', 'Corporativo'],
      catalogoCargado: false
    },
    {
      id: 'PROV-020',
      nombre: 'DISTRIBUIDORA MATE',
      categoria: 'Distribución Especializada',
      contacto: 'Miguel Mate',
      telefono: '+507 6890-1234',
      email: 'miguel@distribuidoramate.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-16'),
      status: 'Activo',
      rating: 4.4,
      descripcion: 'Distribuidora especializada en productos específicos',
      especialidad: ['Especializada', 'Distribución', 'Específicos'],
      catalogoCargado: false
    },
    {
      id: 'PROV-021',
      nombre: 'JELLINI',
      categoria: 'Productos Selectos',
      contacto: 'Carmen Jellini',
      telefono: '+507 6123-4567',
      email: 'carmen@jellini.com.pa',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-15'),
      status: 'Activo',
      rating: 4.9,
      descripcion: 'Proveedor de productos selectos y de calidad',
      especialidad: ['Selectos', 'Calidad', 'Exclusivos'],
      catalogoCargado: false
    },
    {
      id: 'PROV-022',
      nombre: 'DURLO CAR WASH',
      categoria: 'Productos Automotriz',
      contacto: 'David Durlo',
      telefono: '+507 6456-7890',
      email: 'david@durlocarwash.com',
      productos_count: 0,
      ultima_actualizacion: new Date('2025-09-14'),
      status: 'Activo',
      rating: 4.5,
      descripcion: 'Especialista en productos para lavado de vehículos',
      especialidad: ['Automotriz', 'Lavado', 'Vehículos'],
      catalogoCargado: false
    }
  ])

  const proveedoresFiltrados = proveedores.filter(proveedor => {
    const coincideBusqueda = busqueda === '' || 
      proveedor.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      proveedor.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
      proveedor.especialidad.some(esp => esp.toLowerCase().includes(busqueda.toLowerCase()))
    
    const coincideStatus = filtroStatus === 'Todos' || proveedor.status === filtroStatus
    
    return coincideBusqueda && coincideStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo': return 'bg-green-100 text-green-800'
      case 'Inactivo': return 'bg-red-100 text-red-800'
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRatingStars = (rating: number) => {
    return '⭐'.repeat(Math.floor(rating))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-4xl">🏭</span>
              Gestión de Proveedores
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-2">
              Red de {proveedores.length} proveedores certificados de MOGROUP
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 w-full md:w-auto">
            ➕ Nuevo Proveedor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-xs md:text-sm font-medium">Total Proveedores</p>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg md:text-2xl">
                🏭
              </div>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">{proveedores.length}</p>
            <p className="text-green-600 text-xs md:text-sm mt-1">✅ Todos operativos</p>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-xs md:text-sm font-medium">Proveedores Activos</p>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-lg md:text-2xl">
                ✅
              </div>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-green-600">
              {proveedores.filter(p => p.status === 'Activo').length}
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">100% disponibles</p>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-xs md:text-sm font-medium">Catálogos Cargados</p>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-lg md:text-2xl">
                📦
              </div>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-purple-600">
              {proveedores.filter(p => p.catalogoCargado).length}
            </p>
            <p className="text-purple-500 text-xs md:text-sm mt-1">
              {proveedores.filter(p => !p.catalogoCargado).length} pendientes
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-xs md:text-sm font-medium">Rating Promedio</p>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white text-lg md:text-2xl">
                ⭐
              </div>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-yellow-600">
              {(proveedores.reduce((sum, p) => sum + p.rating, 0) / proveedores.length).toFixed(1)}
            </p>
            <p className="text-yellow-500 text-xs md:text-sm mt-1">Excelencia</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar proveedores..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
            />
          </div>
          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 text-base"
          >
            <option value="Todos">Todos los estados</option>
            <option value="Activo">Activos</option>
            <option value="Inactivo">Inactivos</option>
            <option value="Pendiente">Pendientes</option>
          </select>
          <button 
            onClick={() => {setBusqueda(''); setFiltroStatus('Todos')}}
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg md:rounded-xl hover:bg-gray-200 transition-colors font-medium"
          >
            🔄 Limpiar
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Mostrando <strong>{proveedoresFiltrados.length}</strong> de <strong>{proveedores.length}</strong> proveedores
          </div>
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setVistaGrid(true)}
              className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                vistaGrid ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-600'
              }`}
            >
              ⊞ Grid
            </button>
            <button
              onClick={() => setVistaGrid(false)}
              className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                !vistaGrid ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-600'
              }`}
            >
              ☰ Lista
            </button>
          </div>
        </div>
      </div>

      {vistaGrid ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {proveedoresFiltrados.map((proveedor) => (
            <Link 
              key={proveedor.id} 
              href={`/admin/proveedores/${proveedor.id}`}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 truncate">{proveedor.nombre}</h3>
                  <p className="text-blue-600 font-medium text-sm">{proveedor.categoria}</p>
                </div>
                <div className="ml-2 flex-shrink-0">
                  <span className={`inline-flex px-2 md:px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(proveedor.status)}`}>
                    {proveedor.status}
                  </span>
                </div>
              </div>

              {proveedor.catalogoCargado ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">✅</span>
                      <div>
                        <div className="font-semibold text-green-800 text-sm">Catálogo Cargado</div>
                        <div className="text-green-600 text-xs">{proveedor.productos_count} productos</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">📋</span>
                      <div>
                        <div className="font-semibold text-yellow-800 text-sm">Pendiente de Carga</div>
                        <div className="text-yellow-600 text-xs">Haz clic para cargar catálogo</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="text-gray-400 mr-2">👤</span>
                  <span className="truncate">{proveedor.contacto}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-gray-400 mr-2">📞</span>
                  <span className="truncate">{proveedor.telefono}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-gray-400 mr-2">📧</span>
                  <span className="truncate">{proveedor.email}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{proveedor.descripcion}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {proveedor.especialidad.slice(0, 3).map((esp, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {esp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-500 text-sm">{getRatingStars(proveedor.rating)}</div>
                  <div className="text-gray-900 font-bold text-sm">{proveedor.rating}</div>
                </div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Ver Detalles →
                </div>
              </div>

              <div className="text-xs text-gray-400 text-center mt-3">
                Actualizado: {proveedor.ultima_actualizacion.toLocaleDateString('es-PA')}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {proveedoresFiltrados.map((proveedor) => (
            <Link 
              key={proveedor.id}
              href={`/admin/proveedores/${proveedor.id}`}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all p-4 md:p-6 border border-gray-100 hover:border-blue-200 block"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4 flex-1 min-w-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${
                    proveedor.catalogoCargado ? 'bg-green-500' : 'bg-yellow-500'
                  }`}>
                    {proveedor.nombre.split(' ').map(word => word[0]).join('').substring(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-1">
                      <h3 className="font-bold text-lg md:text-xl text-gray-900">{proveedor.nombre}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(proveedor.status)}`}>
                        {proveedor.status}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium text-sm mb-2">{proveedor.categoria}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <span className="mr-1">📞</span> {proveedor.telefono}
                      </span>
                      <span className="flex items-center">
                        {proveedor.catalogoCargado ? (
                          <><span className="mr-1">✅</span> {proveedor.productos_count} productos</>
                        ) : (
                          <><span className="mr-1">📋</span> Pendiente de carga</>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:flex-shrink-0">
                  <div className="text-center">
                    <div className="text-yellow-500 text-sm md:text-base">{getRatingStars(proveedor.rating)}</div>
                    <div className="text-gray-900 font-bold text-sm md:text-base">{proveedor.rating}</div>
                  </div>
                  <div className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Ver Catálogo →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
