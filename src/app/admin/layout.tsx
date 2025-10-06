'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: '📊', label: 'Dashboard', href: '/admin/dashboard' },
  { icon: '🏭', label: 'Proveedores', href: '/admin/proveedores' },
  { icon: '📦', label: 'Inventario', href: '/admin/inventario' },
  { icon: '💼', label: 'Cotizaciones', href: '/admin/cotizaciones' },
  { icon: '📋', label: 'Pedidos', href: '/admin/pedidos' },
  { icon: '👥', label: 'Clientes', href: '/admin/clientes' },
  { icon: '🚚', label: 'Transporte', href: '/admin/transporte' },
  { icon: '💰', label: 'Contabilidad', href: '/admin/contabilidad' },
  { icon: '📈', label: 'Reportes', href: '/admin/reportes' },
  { icon: '⚙️', label: 'Configuración', href: '/admin/configuracion' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className='min-h-screen bg-gray-100 flex'>
      {/* Sidebar */}
      <aside className={'transition-all duration-300 bg-mogroup-blue text-white ' + (sidebarOpen ? 'w-64' : 'w-20')}>
        <div className='h-16 flex items-center justify-between px-4 border-b border-white/10'>
          {sidebarOpen && <span className='font-bold text-lg'>MOGROUP OS</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className='text-white/80 hover:text-white'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
        <nav className='p-4 space-y-2'>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={'flex items-center gap-3 px-4 py-3 rounded-lg transition-all ' + (isActive ? 'bg-mogroup-accent text-white' : 'text-white/70 hover:bg-white/10 hover:text-white')}
              >
                <span className='text-2xl'>{item.icon}</span>
                {sidebarOpen && <span className='font-medium'>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className='flex-1 flex flex-col'>
        {/* Topbar */}
        <header className='h-16 bg-white border-b flex items-center justify-between px-6'>
          <h1 className='text-xl font-semibold text-mogroup-blue'>Sistema de Gestión MOGROUP</h1>
          <div className='flex items-center gap-4'>
            <button className='text-gray-600 hover:text-mogroup-blue'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
              </svg>
            </button>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 rounded-full bg-mogroup-blue text-white flex items-center justify-center font-semibold'>A</div>
              <span className='text-sm text-gray-700'>Admin</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className='flex-1 p-6 overflow-auto'>
          {children}
        </main>
      </div>
    </div>
  );
}
