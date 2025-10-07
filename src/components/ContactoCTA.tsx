'use client'

export default function ContactoCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">¿Necesita más información sobre nuestros servicios?</h2>
        <p className="text-xl mb-8">Contáctenos para una consulta personalizada y descubra cómo podemos potenciar su empresa</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/50760215897" 
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold transition-all text-lg"
          >
            📱 WhatsApp: 507-6421-5897
          </a>
          <a 
            href="mailto:admin@mogrupo.com"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all text-lg"
          >
            📧 admin@mogrupo.com
          </a>
        </div>
        
        <p className="mt-6 text-sm">
          Email de ventas: <a href="mailto:sales@mogrupo.com" className="underline">sales@mogrupo.com</a>
        </p>
      </div>
    </section>
  )
}
