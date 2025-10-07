import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold text-mogroup-blue mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 bg-mogroup-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-mogroup-dark mb-12">
          Una Plataforma, Control Total
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Gestión de Proveedores"
            description="Centralice la comunicación, evaluación y gestión de todos sus proveedores en un único portal."
          />
          <FeatureCard
            title="Logística Inteligente"
            description="Optimice rutas, monitoree envíos en tiempo real y automatice la documentación aduanera."
          />
          <FeatureCard
            title="Análisis Predictivo"
            description="Utilice IA para prever la demanda, identificar cuellos de botella y tomar decisiones basadas en datos."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;





