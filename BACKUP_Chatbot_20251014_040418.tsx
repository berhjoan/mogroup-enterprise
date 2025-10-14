'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Minimize2, Send, Volume2, VolumeX } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState('')
  const [showVideo, setShowVideo] = useState(false)
  const [hasWatchedVideo, setHasWatchedVideo] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([])
  const videoRef = useRef<HTMLVideoElement>(null)

  // ABRIR AUTOMÁTICAMENTE AL CARGAR LA PÁGINA
  useEffect(() => {
    if (!hasWatchedVideo) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setShowVideo(true)
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [hasWatchedVideo])

  // REPRODUCIR VIDEO AUTOMÁTICAMENTE CON SONIDO
  useEffect(() => {
    if (showVideo && videoRef.current && !hasWatchedVideo) {
      // FORZAR REPRODUCCIÓN CON SONIDO
      videoRef.current.muted = false
      videoRef.current.volume = 0.8 // 80% de volumen
      
      // Intentar reproducir con sonido
      const playPromise = videoRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('✅ Video reproduciendo con sonido')
            setIsMuted(false)
          })
          .catch((error) => {
            console.warn('⚠️ Autoplay bloqueado, intentando sin sonido:', error)
            // Si falla, silenciar y reintentar
            if (videoRef.current) {
              videoRef.current.muted = true
              videoRef.current.play()
              setIsMuted(true)
            }
          })
      }
    }
  }, [showVideo, hasWatchedVideo])

  const handleVideoEnd = () => {
    setShowVideo(false)
    setHasWatchedVideo(true)
    setIsMinimized(true)
    setMessages([{ text: '¡Hola! Soy Kat de MOGROUP 🚀\n\n¿En qué puedo ayudarte hoy?', sender: 'bot' }])
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleSend = () => {
    if (!message.trim()) return
    setMessages([...messages, { text: message, sender: 'user' }])
    setMessage('')
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'Gracias por tu mensaje. Un asesor te contactará pronto.',
        sender: 'bot'
      }])
    }, 1000)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true)
          if (hasWatchedVideo) {
            setMessages([{ text: '¡Hola de nuevo! ¿En qué puedo ayudarte?', sender: 'bot' }])
          }
        }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
      </button>
    )
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-2xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3"
        >
          <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl">👩‍💼</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="text-left">
            <p className="font-bold text-sm">Kat</p>
            <p className="text-xs text-blue-100 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              En línea • Panamá
            </p>
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px]">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl">👩‍💼</span>
          </div>
          <div>
            <h3 className="font-bold">Kat</h3>
            <p className="text-xs text-blue-100">🟢 En línea • Panamá</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIsMinimized(true)} className="hover:bg-white/20 p-2 rounded-lg transition">
            <Minimize2 className="w-5 h-5" />
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {showVideo && !hasWatchedVideo && (
        <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl relative">
            <video 
              ref={videoRef}
              playsInline
              className="w-full rounded-xl"
              onEnded={handleVideoEnd}
              onError={() => handleVideoEnd()}
            >
              <source src="/KAT.mp4" type="video/mp4" />
              <source src="/KAT 2.mp4" type="video/mp4" />
            </video>
            
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-700 font-semibold">✨ Presentación de Kat ✨</p>
            <button
              onClick={handleVideoEnd}
              className="mt-3 text-xs text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              Saltar introducción →
            </button>
          </div>
        </div>
      )}

      {!showVideo && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">👩‍💼</div>
                <p className="text-sm text-gray-500">¡Bienvenido! ¿En qué puedo ayudarte?</p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregúntame sobre logística, tecnología..."
                className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-center text-gray-400 mt-2">
              Powered by MOGROUP-ENTERPRISE OS • 📞 507-6421-5897
            </p>
          </div>
        </>
      )}
    </div>
  )
}
