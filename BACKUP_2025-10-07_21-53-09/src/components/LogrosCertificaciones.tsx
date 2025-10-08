'use client'

export default function LogrosCertificaciones() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Logros y Certificaciones</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-2">7 Años</h3>
            <p>De experiencia sirviendo empresas panameñas</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-2xl font-bold mb-2">Empresa Constituida</h3>
            <p>Legalmente registrada en Panamá</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold mb-2">Tecnología Propia</h3>
            <p>MOGROUP-ENTERPRISE OS</p>
          </div>
        </div>
      </div>
    </section>
  )
}
