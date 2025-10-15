"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Minimize2, Maximize2, Volume2, VolumeX, Play, Pause } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function KatWidget() {
  // Estados principales
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Empieza muted para cumplir políticas de navegadores
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Estados del chat
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "¡Hola! Soy KAT, tu asistente virtual de MOGROUP. ¿En qué puedo ayudarte hoy?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Referencias
  const videoRef = useRef<HTMLVideoElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll en mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🎬 PRESENTACIÓN AUTOMÁTICA INMEDIATA - 2 segundos después de cargar
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasPlayedIntro) {
        console.log("🎬 Iniciando presentación automática de KAT");
        setIsOpen(true);
        setShowVideo(true);
        setHasPlayedIntro(true);
      }
    }, 2000); // Reducido a 2 segundos para que sea más rápido

    return () => clearTimeout(timer);
  }, [hasPlayedIntro]);

  // 🎬 AUTO-REPRODUCIR VIDEO AUTOMÁTICAMENTE
  useEffect(() => {
    if (showVideo && videoRef.current) {
      const playVideo = async () => {
        try {
          videoRef.current!.muted = true; // Asegurar que esté muted para autoplay
          await videoRef.current!.play();
          setIsVideoPlaying(true);
          console.log("🎬 Video reproduciéndose automáticamente");
          
          // Después de 1 segundo, ofrecer unmute si el usuario quiere
          setTimeout(() => {
            if (videoRef.current && !videoRef.current.ended) {
              console.log("🔊 Usuario puede activar audio si desea");
            }
          }, 1000);
          
        } catch (error) {
          console.log("⚠️ Autoplay bloqueado por el navegador:", error);
          // Fallback: mostrar botón de play
          setIsVideoPlaying(false);
        }
      };
      
      playVideo();
    }
  }, [showVideo]);

  // Manejo del video
  const handleVideoEnd = () => {
    console.log("🎬 Video terminado, transicionando a chat");
    setIsVideoPlaying(false);
    setTimeout(() => {
      setShowVideo(false);
      // No minimizar, ir directo al chat
    }, 500); // Transición más rápida
  };

  const handleVideoError = () => {
    console.log("❌ Error cargando video, usando fallback");
    setTimeout(() => {
      setShowVideo(false);
    }, 1000);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const skipVideo = () => {
    console.log("⏭️ Usuario saltó el video");
    setShowVideo(false);
    setIsVideoPlaying(false);
  };

  // Manejo del chat
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputMessage })
      });

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || "Lo siento, no pude procesar tu mensaje.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error en chat:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Disculpa, hay un problema técnico. Por favor, intenta de nuevo.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 🎯 BOTÓN FLOTANTE RESPONSIVE */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-600 text-white p-4 sm:p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
          
          {/* Avatar de KAT personalizado */}
          <div className="absolute -top-1 -left-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white">
            <img
              src="/kat-avatar.jpg"
              alt="KAT Avatar"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.outerHTML = '<div class="w-full h-full flex items-center justify-center text-2xl">👩‍💼</div>';
              }}
            />
          </div>
          
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
            KAT
          </span>
        </button>
      )}

      {/* 📱 WIDGET PRINCIPAL RESPONSIVE */}
      {isOpen && (
        <div className={`fixed z-50 transition-all duration-500 ease-in-out ${
          isMinimized 
            ? "bottom-4 right-4 sm:bottom-6 sm:right-6 w-72 sm:w-80 h-12 sm:h-16" 
            : "bottom-4 right-4 sm:bottom-6 sm:right-6 w-[90vw] sm:w-80 lg:w-96 h-[75vh] sm:h-[650px] max-h-[650px]"
        }`}>
          
          {/* CONTENEDOR DEL CHATBOT */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col h-full overflow-hidden border-2 border-blue-100">
            
            {/* 🎨 Header personalizado con imagen de KAT */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Avatar personalizado de KAT */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-blue-200">
                  <img
                    src="/kat-avatar.jpg"
                    alt="KAT"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.outerHTML = '<span class="text-2xl sm:text-3xl">👩‍💼</span>';
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">KAT</h3>
                  <p className="text-xs text-blue-100">
                    {showVideo ? "Presentándome..." : "Asistente Virtual MOGROUP"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 sm:gap-2">
                {showVideo && (
                  <button
                    onClick={skipVideo}
                    className="hover:bg-white/20 px-3 py-1 rounded-lg transition-all duration-200 text-xs sm:text-sm"
                  >
                    Saltar
                  </button>
                )}
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* 🎬 ÁREA DE VIDEO HORIZONTAL CON REPRODUCCIÓN AUTOMÁTICA */}
            {showVideo && !isMinimized && (
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 h-48 sm:h-72 flex-shrink-0 border-b border-gray-700">
                {/* Video horizontal responsivo */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-none"
                  onEnded={handleVideoEnd}
                  onError={handleVideoError}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  poster="/kat-avatar.jpg"
                >
                  <source src="/KAT.mp4" type="video/mp4" />
                  <source src="/public/KAT.mp4" type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>

                {/* Overlay con controles mejorados */}
                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all duration-300">
                  {/* Controles de video */}
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex gap-1 sm:gap-2">
                    <button
                      onClick={toggleMute}
                      className="bg-black/70 backdrop-blur-sm p-1.5 sm:p-2 rounded-full hover:bg-black/90 transition-all duration-200 text-white hover:scale-110"
                    >
                      {isMuted ? (
                        <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </button>
                    
                    <button
                      onClick={togglePlayPause}
                      className="bg-black/70 backdrop-blur-sm p-1.5 sm:p-2 rounded-full hover:bg-black/90 transition-all duration-200 text-white hover:scale-110"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </button>
                  </div>

                  {/* Indicador de presentación */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-blue-600/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                    <span className="text-white text-xs font-semibold">🎬 ¡Hola! Soy KAT</span>
                  </div>

                  {/* Indicador de autoplay */}
                  {!isVideoPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={togglePlayPause}
                        className="bg-blue-600/90 hover:bg-blue-700/90 text-white p-4 sm:p-6 rounded-full transition-all duration-200 hover:scale-110 shadow-xl"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 💬 ÁREA DE MENSAJES RESPONSIVE */}
            {!isMinimized && (
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50 to-white">
                {!showVideo && messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-md ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                      <p className={`text-xs mt-1.5 sm:mt-2 ${
                        msg.role === "user" ? "text-blue-100" : "text-gray-400"
                      }`}>
                        {msg.timestamp.toLocaleTimeString("es-ES", { 
                          hour: "2-digit", 
                          minute: "2-digit" 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Mensaje de bienvenida durante video */}
                {showVideo && (
                  <div className="flex justify-center items-center h-full">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-blue-200 bg-blue-50">
                        <img
                          src="/kat-avatar.jpg"
                          alt="KAT"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.outerHTML = '<div class="w-full h-full flex items-center justify-center text-3xl">👩‍💼</div>';
                          }}
                        />
                      </div>
                      <p className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">¡Hola! Soy KAT</p>
                      <p className="text-sm text-gray-600 mb-4">
                        Tu asistente virtual de MOGROUP<br />
                        <span className="text-blue-600 font-medium">Reproduciendo presentación...</span>
                      </p>
                      <div className="flex gap-1 justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Indicador de escritura */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-md border border-gray-200">
                      <div className="flex gap-2 items-center">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                        </div>
                        <span className="text-xs text-gray-500">KAT está escribiendo...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* 📝 INPUT DE MENSAJE RESPONSIVE */}
            {!isMinimized && !showVideo && (
              <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2 sm:gap-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
                    placeholder="Escribe tu mensaje aquí..."
                    className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none text-gray-800 transition-all duration-200 text-sm sm:text-base"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-105"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
