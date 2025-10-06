import './globals.css';
import KatWidget from '@/components/ui/KatWidget';

export const metadata = {
  title: 'MOGROUP - Logística, Transporte e Insumos B2B',
  description: 'MOGROUP Panamá - Líderes en soluciones integrales B2B',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className='min-h-screen flex flex-col'>
        <header className='bg-mogroup-blue text-white shadow-lg sticky top-0 z-40'>
          <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-mogroup-accent rounded-lg flex items-center justify-center font-bold text-xl'>
                M
              </div>
              <span className='text-xl font-bold'>MOGROUP</span>
            </div>

            <nav className='hidden md:flex space-x-6 text-sm font-medium'>
              <a href='/' className='hover:text-mogroup-accent transition-colors'>Inicio</a>
              <a href='/catalogo' className='hover:text-mogroup-accent transition-colors'>Catálogo</a>
              <a href='/cotizar' className='hover:text-mogroup-accent transition-colors'>Cotizar</a>
              <a href='/servicios' className='hover:text-mogroup-accent transition-colors'>Servicios</a>
              <a href='/contacto' className='hover:text-mogroup-accent transition-colors'>Contacto</a>
            </nav>

            <a
              href='/admin'
              className='flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 group'
              title='Acceso al panel administrativo'
            >
              <svg className='w-4 h-4 text-white/80 group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
              </svg>
              <span className='text-xs font-semibold text-white/80 group-hover:text-white transition-colors'>ENTERPRISE</span>
            </a>
          </div>
        </header>

        <main className='flex-1'>
          {children}
        </main>

        <footer className='bg-gray-900 text-white'>
          <div className='max-w-7xl mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div>
                <h3 className='text-lg font-bold mb-3 text-mogroup-accent'>MOGROUP</h3>
                <p className='text-sm text-gray-400'>
                  Soluciones integrales de logística, transporte e insumos B2B en Panamá.
                </p>
              </div>

              <div>
                <h4 className='text-sm font-semibold mb-3'>Enlaces Rápidos</h4>
                <ul className='space-y-2 text-sm text-gray-400'>
                  <li><a href='/catalogo' className='hover:text-mogroup-accent transition-colors'>Catálogo</a></li>
                  <li><a href='/cotizar' className='hover:text-mogroup-accent transition-colors'>Solicitar Cotización</a></li>
                  <li><a href='/servicios' className='hover:text-mogroup-accent transition-colors'>Nuestros Servicios</a></li>
                  <li><a href='/contacto' className='hover:text-mogroup-accent transition-colors'>Contacto</a></li>
                </ul>
              </div>

              <div>
                <h4 className='text-sm font-semibold mb-3'>Contacto</h4>
                <ul className='space-y-2 text-sm text-gray-400'>
                  <li>Email: info@mogroup.com</li>
                  <li>Tel: +507 XXXX-XXXX</li>
                  <li>Panamá, Panamá</li>
                </ul>
              </div>
            </div>

            <div className='border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500'>
              <p>© 2025 MOGROUP. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        <KatWidget />
      </body>
    </html>
  );
}
