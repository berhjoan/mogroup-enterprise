'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implementar autenticación real
    setTimeout(() => {
      if (credentials.email && credentials.password) {
        router.push('/admin/dashboard');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-mogroup-blue via-blue-900 to-mogroup-accent flex items-center justify-center px-4 relative overflow-hidden'>
      {/* Patrón de fondo decorativo */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl' />
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-mogroup-accent rounded-full blur-3xl' />
      </div>

      {/* Card de Login */}
      <div className='relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='flex justify-center mb-4'>
            <div className='w-16 h-16 bg-gradient-to-br from-mogroup-blue to-mogroup-accent rounded-2xl flex items-center justify-center shadow-lg'>
              <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
              </svg>
            </div>
          </div>
          <h1 className='text-3xl font-bold text-mogroup-blue mb-2'>MOGROUP-ENTERPRISE OS</h1>
          <p className='text-gray-600'>Sistema de Gestión Administrativa</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Email Corporativo</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
              </div>
              <input
                type='email'
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent focus:border-transparent transition-all'
                placeholder='admin@mogroup.com'
                required
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Contraseña</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                </svg>
              </div>
              <input
                type='password'
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent focus:border-transparent transition-all'
                placeholder='••••••••'
                required
              />
            </div>
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className={'w-full py-3 font-semibold rounded-lg transition-all duration-300 ' + (isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-mogroup-blue to-mogroup-accent text-white hover:shadow-xl hover:scale-105')}
          >
            {isLoading ? (
              <span className='flex items-center justify-center gap-2'>
                <svg className='animate-spin h-5 w-5' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                </svg>
                Verificando...
              </span>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        {/* Footer del Card */}
        <div className='mt-6 pt-6 border-t border-gray-200'>
          <p className='text-center text-sm text-gray-500 mb-3'>
            Sistema protegido - Acceso solo para personal autorizado
          </p>
          <Link href='/' className='flex items-center justify-center gap-2 text-sm text-mogroup-blue hover:text-mogroup-accent transition-colors'>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg>
            Volver al sitio público
          </Link>
        </div>
      </div>
    </div>
  );
}
