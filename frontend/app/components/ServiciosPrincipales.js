import React from 'react';
import Link from 'next/link';

const ServiciosCard = ({ title, description, icon, link, highlight = false }) => (
  <div className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
    highlight 
      ? 'bg-gradient-to-br from-mogroup-gold to-yellow-400 text-mogroup-dark' 
      : 'bg-white hover:bg-gray-50'
  }`}>
    <div className={`text-4xl mb-4 ${highlight ? 'text-mogroup-dark' : 'text-mogroup-blue'}`}>
      {icon}
    </div>
    <h3 className={`text-2xl font-bold mb-4 ${highlight ? 'text-mogroup-dark' : 'text-mogroup-blue'}`}>
      {title}
    </h3>
    <p className={`mb-6 ${highlight ? 'text-mogroup-dark' : 'text-gray-600'}`}>
      {description}
    </p>
    <Link 
      href={link} 
      className={`inline-flex items-center font-semibold hover:underline ${
        highlight ? 'text-mogroup-dark' : 'text-mogroup-blue'
      }`}
    >
      Saber más 
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
);

const ServiciosPrincipales = () => {
  return (
    <section className="py-20 bg-mogroup-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mogroup-dark mb-4">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales para empresas que buscan eficiencia, calidad y resultados garantizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiciosCard
            title="Logística Integral"
            description="Gestión completa de su cadena de suministro con tecnología de vanguardia y seguimiento en tiempo real."
            icon="🚛"
            link="/servicios/logistica"
          />
          
          <ServiciosCard
            title="Transporte de Carga"
            description="Transporte seguro y eficiente con cobertura nacional e internacional, incluyendo gestión aduanera."
            icon="📦"
            link="/servicios/transporte"
          />
          
          <ServiciosCard
            title="Venta de Insumos"
            description="Amplio catálogo de insumos empresariales con cotización automática y entrega en 48 horas."
            icon="🏪"
            link="/catalogo"
            highlight={true}
          />
          
          <ServiciosCard
            title="MOGROUP-ENTERPRISE OS"
            description="Sistema IA + CRM/ERP desarrollado internamente. La plataforma más avanzada para gestión empresarial."
            icon="🤖"
            link="/servicios/software"
          />
        </div>

        {/* Servicios Adicionales */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-mogroup-dark mb-8">
            Servicios Adicionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl mb-3">🌿</div>
              <h4 className="font-semibold text-mogroup-blue mb-2">Servicios de Jardinería</h4>
              <p className="text-gray-600 text-sm">Mantenimiento y diseño de espacios verdes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl mb-3">🔧</div>
              <h4 className="font-semibold text-mogroup-blue mb-2">Modificaciones Estructurales</h4>
              <p className="text-gray-600 text-sm">Trabajos livianos y soldaduras especializadas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl mb-3">💻</div>
              <h4 className="font-semibold text-mogroup-blue mb-2">Desarrollo Web</h4>
              <p className="text-gray-600 text-sm">Páginas web y aplicaciones empresariales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosPrincipales;





