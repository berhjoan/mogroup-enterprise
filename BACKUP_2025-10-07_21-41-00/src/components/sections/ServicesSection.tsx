import Card from '@/components/common/Card';

const services = [
  {
    title: 'Logística Integrada',
    description: 'Gestión end-to-end de su cadena de suministro con tecnología de vanguardia y tracking en tiempo real.',
    icon: (
      <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
      </svg>
    ),
  },
  {
    title: 'Transporte y Aduanas',
    description: 'Flota moderna y gestión aduanera experta para movimientos locales e internacionales sin complicaciones.',
    icon: (
      <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' />
      </svg>
    ),
  },
  {
    title: 'Suministros B2B',
    description: 'Catálogo inteligente con miles de insumos industriales, entrega ágil y precios competitivos garantizados.',
    icon: (
      <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
      </svg>
    ),
  },
  {
    title: 'Tecnología Innovadora',
    description: 'Plataforma propietaria MOGROUP-ENTERPRISE OS para optimización, análisis predictivo y automatización total.',
    icon: (
      <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-mogroup-blue mb-4'>Nuestros Servicios</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Soluciones integrales diseñadas para empresas que buscan eficiencia, tecnología y resultados medibles.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, idx) => (
            <Card key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
