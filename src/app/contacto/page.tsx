'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('¡Mensaje enviado! Nos pondremos en contacto pronto.')
    // Aquí se integraría con el backend para enviar el correo
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Contáctenos</h1>
          <p className="text-xl text-gray-600">Estamos aquí para ayudarle con sus necesidades empresariales</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Envíenos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Empresa</label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Teléfono *</label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Teléfono</h3>
                    <p className="text-gray-600">+507 6421-5897</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">admin@mogrupo.com</p>
                    <p className="text-gray-600">sales@mogrupo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Ubicación</h3>
                    <p className="text-gray-600">Panamá, República de Panamá</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Horario de Atención</h3>
              <p className="mb-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p className="mb-2">Sábados: 9:00 AM - 1:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
