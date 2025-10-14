'use client';

export default function HeroSection() {
  return (
    <section className='hero-video-container'>
      {/* Placeholder para video - reemplazar con video real */}
      <div className='absolute inset-0 bg-gradient-to-br from-mogroup-blue via-blue-900 to-mogroup-accent' />
      
      <div className='hero-overlay' />
      
      <div className='hero-content flex items-center justify-center h-full'>
        <div className='max-w-4xl mx-auto px-4 text-center text-white'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp text-balance'>
            Su Aliado Estratégico en Logística y Suministros
          </h1>
          <p className='text-xl md:text-2xl mb-8 animate-fadeInUp opacity-90' style={{animationDelay: '0.2s'}}>
            Optimizamos su cadena de suministro con tecnología, eficiencia y un servicio de confianza en todo Panamá.
          </p>
          <div className='flex gap-4 justify-center animate-fadeInUp' style={{animationDelay: '0.4s'}}>
            <a
              href='/catalogo'
              className='px-8 py-4 bg-mogroup-accent text-white font-semibold rounded-lg shadow-xl transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:shadow-2xl'
            >
              Explorar Catálogo Inteligente
            </a>
            <a
              href='/cotizar'
              className='px-8 py-4 bg-white text-mogroup-blue font-semibold rounded-lg shadow-xl transition-all duration-300 hover:bg-opacity-90 hover:scale-105'
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
