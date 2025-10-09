'use client'

export default function ClientesConfianza() {
  const clientes = [
    { nombre: 'SPIGOLO', tipo: 'Cliente Empresarial' },
    { nombre: 'BDP', tipo: 'Cliente Empresarial' },
    { nombre: 'GSP', tipo: 'Cliente Empresarial' }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Clientes de Confianza</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {clientes.map((cliente, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-2">{cliente.nombre}</h3>
              <p className="text-gray-600">{cliente.tipo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

