import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-mogroup-blue via-mogroup-dark to-mogroup-blue py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Líder en Logística,
          <br />
          <span className="text-mogroup-gold">Transporte e Insumos</span>
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
          MOGROUP es tu socio estratégico en Panamá. Ofrecemos soluciones integrales 
          en logística, transporte de carga, venta de insumos empresariales y desarrollo 
          de software con tecnología de vanguardia.
        </p>
        <div className="mt-10 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link href="/catalogo" className="inline-block bg-mogroup-gold text-mogroup-blue font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300 shadow-lg">
            Ver Catálogo de Insumos
          </Link>
          <Link href="/servicios" className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-mogroup-blue transition duration-300">
            Conocer Servicios
          </Link>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-mogroup-gold">15+</div>
            <div className="text-gray-300">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mogroup-gold">500+</div>
            <div className="text-gray-300">Empresas Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mogroup-gold">24/7</div>
            <div className="text-gray-300">Soporte Disponible</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mogroup-gold">48h</div>
            <div className="text-gray-300">Entrega Garantizada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
