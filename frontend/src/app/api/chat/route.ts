import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json({ 
        error: 'Mensaje no proporcionado' 
      }, { status: 400 });
    }

    // Respuestas inteligentes de KAT para MOGROUP
    const respuestasKAT = [
      "¡Hola! Soy KAT, tu asistente virtual de MOGROUP. Somos líderes en logística, transporte y suministros B2B en Panamá. ¿En qué puedo ayudarte hoy?",
      
      "MOGROUP se especializa en tres áreas principales: 🚚 Transporte y Logística, 📦 Venta de Insumos B2B, y 🏨 Productos para Hotelería. ¿Te interesa algún servicio específico?",
      
      "Contamos con más de 850 productos en nuestro catálogo para empresas. Desde suministros de oficina hasta productos especializados para hoteles. ¿Necesitas una cotización?",
      
      "Como empresa panameña, conocemos las necesidades del mercado local. Ofrecemos soluciones completas de logística y suministros. ¿Tu empresa necesita algún producto en particular?",
      
      "MOGROUP tiene +7 años de experiencia, atención 24/7 y somos 100% confiables. Trabajamos con las mejores marcas para ofrecerte productos de calidad. ¿Qué tipo de insumos necesitas?",
      
      "¡Perfecto! Me pondré en contacto con nuestro equipo comercial para ayudarte con una cotización personalizada. ¿Podrías compartirme tu información de contacto?"
    ];
    
    // Seleccionar respuesta basada en palabras clave
    let respuesta = respuestasKAT[0]; // Respuesta por defecto
    
    const mensajeLower = message.toLowerCase();
    
    if (mensajeLower.includes('cotiz') || mensajeLower.includes('precio') || mensajeLower.includes('costo')) {
      respuesta = respuestasKAT[3];
    } else if (mensajeLower.includes('productos') || mensajeLower.includes('catalogo') || mensajeLower.includes('insumos')) {
      respuesta = respuestasKAT[2];
    } else if (mensajeLower.includes('servicios') || mensajeLower.includes('logistica') || mensajeLower.includes('transporte')) {
      respuesta = respuestasKAT[1];
    } else if (mensajeLower.includes('empresa') || mensajeLower.includes('mogroup') || mensajeLower.includes('experiencia')) {
      respuesta = respuestasKAT[4];
    } else if (mensajeLower.includes('contacto') || mensajeLower.includes('telefono') || mensajeLower.includes('email')) {
      respuesta = respuestasKAT[5];
    }
    
    return NextResponse.json({ 
      response: respuesta,
      status: 'success'
    });
    
  } catch (error) {
    console.error('Error en API de chat:', error);
    return NextResponse.json({ 
      error: 'Error interno del servidor',
      response: 'Lo siento, hubo un problema técnico. Por favor, intenta de nuevo en un momento.'
    }, { status: 500 });
  }
}

// Método GET para health check
export async function GET() {
  return NextResponse.json({ 
    message: 'KAT API está funcionando correctamente',
    timestamp: new Date().toISOString()
  });
}
