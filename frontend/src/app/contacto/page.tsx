"use client";
import { useState } from "react";
import Link from "next/link";
import { Send, Phone, Mail, MapPin, Clock, ArrowLeft } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      {/* Botón de regreso */}
      <div className="container mx-auto px-6 mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Inicio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Contáctenos</h1>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarle con sus necesidades empresariales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Envíenos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Mi Empresa S.A."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="email@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="+507 6421-5897"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="Cuéntenos cómo podemos ayudarle..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>

              {enviado && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  ¡Mensaje enviado exitosamente! Nos comunicaremos pronto.
                </div>
              )}
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Teléfono</h3>
                    <p>+507 6421-5897</p>
                    <p className="text-sm text-blue-100 mt-1">
                      Lun-Vie 8AM-6PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p>admin@mogrupo.com</p>
                    <p>sales@mogrupo.com</p>
                    <p className="text-sm text-blue-100 mt-1">
                      Respuesta en 24hrs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Ubicación</h3>
                    <p>Panamá, República de Panamá</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horario de Atención */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Horario de Atención</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Lunes a Viernes:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Sábados:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold">Domingos:</span>
                  <span className="text-red-600 font-semibold">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
