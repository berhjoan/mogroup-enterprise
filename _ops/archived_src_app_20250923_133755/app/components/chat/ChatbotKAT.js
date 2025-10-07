import React, { useState, useRef, useEffect } from 'react';

const ChatbotKAT = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy KAT, tu asistente virtual de MOGROUP. ¿En qué puedo ayudarte hoy?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Ver catálogo de insumos",
    "Solicitar cotización",
    "Información de servicios",
    "Contactar con ventas",
    "Horarios de atención"
  ];

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular respuesta de KAT (aquí se integrará con Dialogflow)
    setTimeout(() => {
      const botResponse = generateKATResponse(message);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateKATResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('catálogo') || msg.includes('catalogo') || msg.includes('productos')) {
      return "¡Perfecto! Nuestro catálogo incluye productos biodegradables, desinfectantes, artículos de oficina, herramientas y mucho más. ¿Te gustaría que te lleve directamente al catálogo para explorar nuestros productos?";
    }
    
    if (msg.includes('cotización') || msg.includes('cotizacion') || msg.includes('precio')) {
      return "Con gusto te ayudo con una cotización. Para brindarte el mejor servicio, necesitarás registrarte con tu email. Esto nos permite enviarte la cotización detallada y darle seguimiento personalizado. ¿Deseas continuar?";
    }
    
    if (msg.includes('servicios')) {
      return "MOGROUP ofrece servicios especializados en:\n• Logística integral\n• Transporte de carga\n• Venta de insumos empresariales\n• Desarrollo de software (MOGROUP-ENTERPRISE OS)\n\n¿Sobre cuál servicio necesitas más información?";
    }
    
    if (msg.includes('contacto') || msg.includes('ventas')) {
      return "Nuestro equipo de ventas está disponible 24/7. Puedes contactarnos por:\n• WhatsApp Business\n• Email corporativo\n• A través de esta plataforma\n\n¿Prefieres que un asesor se comunique contigo directamente?";
    }
    
    if (msg.includes('horario')) {
      return "¡Estamos disponibles 24/7! Nuestro sistema automatizado y equipo de soporte trabajan las 24 horas para brindarte el mejor servicio. Para entregas, nuestro horario es de 8:00 AM a 6:00 PM, de lunes a sábado.";
    }
    
    return "Entiendo tu consulta. Te puedo ayudar con información sobre nuestro catálogo, cotizaciones, servicios o contacto con ventas. ¿Cuál de estos temas te interesa más?";
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-mogroup-gold hover:bg-yellow-400 text-mogroup-dark rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-mogroup-blue rounded-full flex items-center justify-center text-white font-bold">
              KAT
            </div>
            {!isOpen && (
              <span className="hidden md:block font-semibold">
                ¡Hola! Soy KAT 👋
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-mogroup-blue text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-mogroup-gold rounded-full flex items-center justify-center text-mogroup-dark font-bold text-sm">
                KAT
              </div>
              <div>
                <h3 className="font-bold">KAT - Asistente MOGROUP</h3>
                <p className="text-xs text-gray-200">En línea • Respuesta inmediata</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-mogroup-blue text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 max-w-xs p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="p-2 border-t">
              <p className="text-xs text-gray-500 mb-2">Consultas frecuentes:</p>
              <div className="flex flex-wrap gap-1">
                {quickReplies.slice(0, 3).map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe tu mensaje..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-mogroup-blue"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-mogroup-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotKAT;
