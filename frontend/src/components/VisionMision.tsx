'use client'

export default function VisionMision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-3xl font-bold mb-4">Nuestra Visión</h3>
            <p className="text-gray-600 text-lg">
              Ser el socio logístico estratégico de las empresas panameñas, 
              proporcionando soluciones integrales de suministros y transporte 
              con tecnología de vanguardia.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-3xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-gray-600 text-lg">
              Facilitar la gestión de suministros empresariales mediante un 
              ecosistema digital que conecta proveedores certificados con 
              empresas en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
