'use client';
import StatCard from '@/components/admin/StatCard';

export default function DashboardPage() {
  const stats = [
    { title: 'Pedidos Activos', value: '47', icon: '📋', trend: { value: 12, isPositive: true }, color: 'bg-blue-100 text-blue-600' },
    { title: 'Cotizaciones Pendientes', value: '23', icon: '💼', trend: { value: 5, isPositive: false }, color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Ingresos del Mes', value: ',500', icon: '💰', trend: { value: 18, isPositive: true }, color: 'bg-green-100 text-green-600' },
    { title: 'Proveedores Activos', value: '38', icon: '🏭', color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold text-mogroup-blue mb-2'>Dashboard</h2>
        <p className='text-gray-600'>Resumen general de operaciones MOGROUP</p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='bg-white rounded-xl shadow-lg p-6'>
          <h3 className='text-lg font-semibold text-mogroup-blue mb-4'>Ventas Últimos 30 Días</h3>
          <div className='h-64 bg-gradient-to-br from-mogroup-blue/10 to-mogroup-accent/10 rounded-lg flex items-center justify-center'>
            <p className='text-gray-500'>Gráfico de ventas (en desarrollo)</p>
          </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-6'>
          <h3 className='text-lg font-semibold text-mogroup-blue mb-4'>Actividad Reciente</h3>
          <div className='space-y-4'>
            {[
              { text: 'Nueva cotización de Empresa ABC', time: 'Hace 5 min', icon: '💼' },
              { text: 'Pedido #1234 marcado como entregado', time: 'Hace 15 min', icon: '✅' },
              { text: 'Nuevo proveedor registrado', time: 'Hace 1 hora', icon: '🏭' },
            ].map((activity, idx) => (
              <div key={idx} className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50'>
                <span className='text-2xl'>{activity.icon}</span>
                <div className='flex-1'>
                  <p className='text-sm text-gray-900'>{activity.text}</p>
                  <p className='text-xs text-gray-500'>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
