import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { query } from '@/lib/db/postgres';

export const runtime = 'nodejs';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || '');

async function obtenerSubcategorias() {
  try {
    const result = await query(`
      SELECT s.codigo, s.nombre, array_agg(p.palabra) as palabras_clave
      FROM subcategorias s
      LEFT JOIN palabras_clave p ON s.id = p.subcategoria_id
      GROUP BY s.id, s.codigo, s.nombre
      LIMIT 100
    `);
    return result.rows;
  } catch {
    return [];
  }
}

async function categorizarProducto(nombreProducto: string, contexto: string): Promise<any> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const subcategorias = await obtenerSubcategorias();
    
    const prompt = `
Eres Kat, el asistente de categorización de MOGROUP. Analiza este producto y devuelve SOLO un objeto JSON válido:

{
  \"nombre\": \"nombre del producto limpio\",
  \"subcategoria_sugerida\": \"codigo_de_subcategoria\",
  \"confianza\": 0.95,
  \"palabras_clave\": [\"palabra1\", \"palabra2\"],
  \"precio_estimado\": 0.0,
  \"unidad_medida\": \"unidad\"
}

Producto: `
Contexto: `

Subcategorías disponibles: `
    `;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (error) {
    console.error('Error categorizando:', error);
  }
  
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const archivo = formData.get('archivo') as File;
    const proveedorId = formData.get('proveedor_id') as string;
    
    if (!archivo || !proveedorId) {
      return NextResponse.json({ error: 'Archivo y proveedor requeridos' }, { status: 400 });
    }
    
    // Registrar inicio de procesamiento
    const logResult = await query(
      'INSERT INTO procesamiento_catalogos (proveedor_id, archivo_pdf, estado) VALUES ($1, $2, $3) RETURNING id',
      [proveedorId, archivo.name, 'procesando']
    );
    const procesamientoId = logResult.rows[0].id;
    
    // Simular extracción de texto (en producción usar OCR real)
    const textoSimulado = `Producto 1: Mascarilla N95
Producto 2: Guantes de látex
Producto 3: Desinfectante industrial
Producto 4: Papel higiénico
Producto 5: Toallas de papel`;
    
    const lineas = textoSimulado.split('\\n').filter(l => l.trim().length > 3);
    const productosCategorizados = [];
    
    for (const linea of lineas) {
      const categorizacion = await categorizarProducto(linea, `Proveedor: ``);
      
      if (categorizacion) {
        productosCategorizados.push({
          linea_original: linea,
          ...categorizacion
        });
      }
    }
    
    // Actualizar log
    await query(
      'UPDATE procesamiento_catalogos SET estado = $1, productos_detectados = $2, productos_categorizados = $3 WHERE id = $4',
      ['completado', lineas.length, productosCategorizados.length, procesamientoId]
    );
    
    return NextResponse.json({ 
      success: true,
      procesamiento_id: procesamientoId,
      productos_detectados: lineas.length,
      productos_categorizados: productosCategorizados.length,
      muestra: productosCategorizados
    }, { status: 200 });
    
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
