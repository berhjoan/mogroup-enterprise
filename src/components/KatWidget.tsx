'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  productos?: ProductoEncontrado[]
  timestamp: Date
}

interface ProductoEncontrado {
  categoria: string
  producto: string
  coincidencia: number
}

export default function KatWidget() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // Base de conocimiento MOGROUP con servicios reales
  const serviciosMOGROUP = [
    // Servicios principales de mogrouppty.com
    { categoria: "Logística Integrada", productos: ["transporte", "almacenamiento", "distribución", "cadena suministro", "optimización"] },
    { categoria: "Tecnología Innovadora", productos: ["sistemas gestión", "plataformas comercio electrónico", "transformación digital", "software", "automatización"] },
    { categoria: "Venta de Insumos", productos: ["productos calidad", "aprovisionamiento", "inventarios", "suministros", "materiales"] },
    { categoria: "Gestión de Inventarios", productos: ["control stock", "disponibilidad productos", "reducción costos", "optimización"] },
    { categoria: "Tecnología de la Información", productos: ["servicios TI", "seguridad", "eficiencia operacional", "sistemas"] },
    { categoria: "Asesoramiento Profesional", productos: ["consultoría", "crecimiento empresarial", "estrategia", "desarrollo"] },
    { categoria: "Diseño de Páginas Web", productos: ["desarrollo web", "páginas profesionales", "clientes potenciales", "marketing digital"] }
  ]

  // Mensaje de bienvenida profesional
  useEffect(() => {
    const bienvenida: Message = {
      id: 'welcome-mogroup',
      role: 'assistant',
      content: '¡Hola! Soy Kat, tu asistente personal de MOGROUP 🚀\n\n**MOGROUP** es tu aliado comercial especializado en:\n\n✅ **Logística Integrada** - Transporte y distribución\n✅ **Tecnología Innovadora** - Soluciones IT avanzadas\n✅ **Venta de Insumos** - Productos de alta calidad\n✅ **Gestión de Inventarios** - Optimización de costos\n✅ **Tecnología de la Información** - Servicios TI\n✅ **Asesoramiento Profesional** - Consultoría experta\n\n🎯 **Empresa panameña constituida** con más de 7 años potenciando empresas.\n\n¿En qué puedo ayudarte para hacer crecer tu negocio?',
      timestamp: new Date()
    }
    setMessages([bienvenida])
  }, [])

  const buscarServicios = (query: string): ProductoEncontrado[] => {
    const palabrasBusqueda = query.toLowerCase().split(' ').filter(p => p.length > 2)
    const serviciosEncontrados: ProductoEncontrado[] = []

    serviciosMOGROUP.forEach(servicio => {
      servicio.productos.forEach(producto => {
        let coincidencias = 0
        palabrasBusqueda.forEach(palabra => {
          if (producto.includes(palabra) || producto.includes(palabra.substring(0, -1))) {
            coincidencias++
          }
        })
        
        if (coincidencias > 0) {
          serviciosEncontrados.push({
            categoria: servicio.categoria,
            producto: producto,
            coincidencia: coincidencias
          })
        }
      })
    })

    return serviciosEncontrados.sort((a, b) => b.coincidencia - a.coincidencia).slice(0, 5)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = input
    setInput('')
    setIsLoading(true)

    try {
      // Buscar servicios relacionados
      const serviciosEncontrados = buscarServicios(currentInput)
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })),
          productos_encontrados: serviciosEncontrados,
          user_query: currentInput
        }),
      })

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.message || 'Como asistente de MOGROUP, estoy aquí para ayudarte con información sobre nuestros servicios de logística, tecnología y venta de insumos. ¿En qué más puedo asistirte?',
        productos: serviciosEncontrados.length > 0 ? serviciosEncontrados : undefined,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Disculpa, hubo un problema temporal. Soy Kat de MOGROUP y estoy aquí para ayudarte. Puedes contactarnos directamente al 507-6421-5897 📞',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const solicitarInformacion = (serviciosSeleccionados?: ProductoEncontrado[]) => {
    let mensaje = `¡Hola MOGROUP! Me interesa obtener más información sobre sus servicios.\n\n`
    
    if (serviciosSeleccionados && serviciosSeleccionados.length > 0) {
      mensaje += `Servicios de interés:\n`
      serviciosSeleccionados.forEach((s, idx) => {
        mensaje += `${idx + 1}. ${s.categoria}: ${s.producto}\n`
      })
    } else {
      mensaje += `Solicito información sobre servicios de logística, tecnología y venta de insumos.`
    }
    
    mensaje += `\n💼 Empresa: \n📞 Contacto: \n📧 Email: \n\nGracias por su atención profesional.`
    
    const whatsappURL = `https://wa.me/50764215897?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappURL, '_blank')
  }

  if (!isVisible) return null

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <div className="w-12 h-12 flex items-center justify-center relative">
            <Image 
              src="/kat-avatar.jpg" 
              alt="Kat" 
              width={48} 
              height={48} 
              className="rounded-full"
            />
            <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full animate-ping"></div>
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden">
      {/* Header Profesional con Imagen de Kat */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image 
              src="/kat-avatar.jpg" 
              alt="Kat - Asistente MOGROUP" 
              width={48} 
              height={48} 
              className="rounded-full border-2 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-400 w-4 h-4 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Kat</h3>
            <p className="text-blue-100 text-sm">Asistente MOGROUP S.A.</p>
            <div className="flex items-center text-xs text-blue-200">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
              En línea • Panamá
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="text-blue-100 hover:text-white transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-blue-100 hover:text-white transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
        {messages.map((message) => (
          <div key={message.id}>
            <div
              className={`p-4 rounded-lg text-sm ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white ml-8 rounded-br-none shadow-md'
                  : 'bg-white text-gray-800 mr-8 rounded-bl-none border border-gray-200 shadow-sm'
              }`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
              <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                {message.timestamp.toLocaleTimeString('es-PA', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            
            {/* Servicios encontrados */}
            {message.productos && message.productos.length > 0 && (
              <div className="mt-3 mr-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-blue-800 text-sm mb-3 flex items-center">
                    🎯 Servicios MOGROUP relacionados:
                  </h4>
                  {message.productos.map((servicio, idx) => (
                    <div key={idx} className="mb-2 p-2 bg-white rounded border-l-4 border-blue-400">
                      <div className="text-xs">
                        <span className="font-semibold text-blue-700">{servicio.categoria}:</span>
                        <span className="text-gray-700 ml-2">{servicio.producto}</span>
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-2 mt-3">
                    <button 
                      onClick={() => solicitarInformacion(message.productos)}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all"
                    >
                      💬 Consultar por WhatsApp
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-2 rounded text-xs hover:bg-blue-700 transition-colors">
                      📋 + Info
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="bg-white text-gray-800 mr-8 rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <Image 
                src="/kat-avatar.jpg" 
                alt="Kat" 
                width={24} 
                height={24} 
                className="rounded-full"
              />
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-sm text-gray-600">Kat está consultando información MOGROUP...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input área profesional */}
      <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
        <div className="flex space-x-2 mb-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pregúntame sobre logística, tecnología o insumos..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Enviar
          </button>
        </div>
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Powered by MOGROUP-ENTERPRISE OS</span>
          <button 
            onClick={() => solicitarInformacion()}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            📞 507-6421-5897
          </button>
        </div>
      </form>
    </div>
  )
}

