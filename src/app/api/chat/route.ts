import { NextRequest, NextResponse } from 'next/server'

interface ProductoEncontrado {
  categoria: string
  producto: string
  coincidencia: number
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { messages, productos_encontrados, user_query } = body

    const lastMessage = messages[messages.length - 1]?.content || ''
    
    // Respuestas inteligentes de Kat sin necesidad de Google AI (temporalmente)
    let katResponse = generarRespuestaKat(lastMessage, productos_encontrados)

    return NextResponse.json({ message: katResponse })
  } catch (error) {
    console.error('Error en API chat:', error)
    return NextResponse.json(
      { message: 'Hola, soy Kat de MOGROUP S.A. 🚀 Estoy aquí para ayudarte con nuestros productos y servicios empresariales. ¿En qué puedo asistirte hoy?' },
      { status: 200 }
    )
  }
}

function generarRespuestaKat(consulta: string, productos: ProductoEncontrado[] = []) {
  const consulta_lower = consulta.toLowerCase()
  
  // Respuestas específicas basadas en palabras clave
  if (consulta_lower.includes('café') || consulta_lower.includes('frappé')) {
    return `☕ ¡Excelente elección! En MOGROUP tenemos una amplia gama de productos para cafetería:\n\n• Frappés premium (Café, Caramelo, Chocolate)\n• Café Durán tradicional panameño\n• Nescafé Capuccino profesional\n• Vasos y accesorios para café\n\n${productos.length > 0 ? `He encontrado ${productos.length} productos relacionados en nuestro catálogo. ` : ''}¿Te interesa una cotización empresarial? 💼`
  }
  
  if (consulta_lower.includes('limpieza') || consulta_lower.includes('desinfectante') || consulta_lower.includes('cloro')) {
    return `🧽 ¡Perfecto! MOGROUP es especialista en productos de limpieza profesional:\n\n• Desinfectantes con fragancia de lavanda\n• Cloro SIP al 3.6% para uso industrial\n• Gel alcoholado para manos\n• Productos químicos certificados\n\n${productos.length > 0 ? `Encontré ${productos.length} productos que coinciden con tu búsqueda. ` : ''}Todos nuestros productos cumplen con estándares panameños. 🇵🇦`
  }
  
  if (consulta_lower.includes('papel') || consulta_lower.includes('higiene') || consulta_lower.includes('toalla')) {
    return `📄 Tenemos excelentes opciones en papelería e higiene institucional:\n\n• Papel higiénico Kleenex profesional\n• Papel toalla Serviclass de 305m\n• Dispensadores automáticos\n• Jabón antibacterial en espuma\n\n${productos.length > 0 ? `He localizado ${productos.length} productos perfectos para tu empresa. ` : ''}Ideales para hoteles, oficinas y restaurantes. ✨`
  }
  
  if (consulta_lower.includes('precio') || consulta_lower.includes('cotización') || consulta_lower.includes('cotizar')) {
    return `💼 ¡Con gusto te ayudo con una cotización empresarial!\n\nComo empresa constituida (RUC: 155672612-2-2018), MOGROUP ofrece:\n• Precios empresariales competitivos\n• Descuentos por volumen\n• Términos de pago flexibles\n• Entrega en toda Panamá 🚚\n\n${productos.length > 0 ? `Para los ${productos.length} productos que encontré, ` : ''}¿Te envío una cotización personalizada por WhatsApp? 📱`
  }
  
  if (consulta_lower.includes('empresa') || consulta_lower.includes('mogroup') || consulta_lower.includes('quienes')) {
    return `🏢 ¡Gracias por tu interés en MOGROUP S.A.!\n\nSomos una empresa panameña constituida desde 2018:\n• RUC: 155672612-2-2018\n• Representante Legal: Kathia Lineth Araúz Rivera\n• Especialistas en logística y suministros B2B\n• +379 productos de proveedores certificados\n\nNuestros clientes incluyen: Spigolo, Terpel, Bahía Motor, Pizzería Leonardo y muchas más empresas exitosas. 🌟`
  }
  
  // Respuesta general
  return `¡Hola! Soy Kat, tu asistente empresarial de MOGROUP S.A. 🚀\n\n${productos.length > 0 ? `He encontrado ${productos.length} productos relacionados con "${consulta}" en nuestro catálogo de 379+ productos certificados.\n\n` : ''}Como empresa panameña líder en logística y suministros B2B, puedo ayudarte con:\n\n✅ Productos de cafetería y bebidas\n✅ Limpieza y químicos industriales  \n✅ Papelería e higiene institucional\n✅ Food service y desechables\n✅ Herramientas y equipos\n\n¿En qué categoría te puedo asistir hoy? 💼`
}
