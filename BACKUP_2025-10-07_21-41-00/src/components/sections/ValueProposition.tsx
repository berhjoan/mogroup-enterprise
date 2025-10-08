export default function ValueProposition() {
  return (
    <section className='py-20 px-4 bg-gradient-to-br from-mogroup-blue to-blue-900 text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h2 className='text-4xl font-bold'>Tecnología que Trabaja para Usted</h2>
            <p className='text-lg opacity-90'>
              Nuestra plataforma MOGROUP-ENTERPRISE OS no es solo un sistema interno, es la ventaja competitiva que nos permite ofrecerle:
            </p>
            <ul className='space-y-4'>
              {[
                'Cotizaciones instantáneas con IA',
                'Tracking en tiempo real de todos sus pedidos',
                'Optimización automática de rutas y costos',
                'Análisis predictivo de demanda',
                'Gestión unificada de múltiples proveedores'
              ].map((item, idx) => (
                <li key={idx} className='flex items-start'>
                  <svg className='w-6 h-6 text-mogroup-accent mr-3 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href='/catalogo' className='inline-block px-8 py-4 bg-mogroup-accent text-white font-semibold rounded-lg shadow-xl transition-all duration-300 hover:scale-105'>
              Ver cómo funciona
            </a>
          </div>
          <div className='relative'>
            <div className='aspect-video bg-gradient-to-br from-mogroup-accent to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center'>
              <div className='text-center p-8'>
                <svg className='w-24 h-24 mx-auto mb-4 opacity-80' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                <p className='text-sm opacity-80'>Dashboard MOGROUP-ENTERPRISE OS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
