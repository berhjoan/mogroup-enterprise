import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Por ahora retornamos datos mock - se conectará a PostgreSQL posteriormente
    const productos = [
      { id: 1, nombre: "Producto Demo", categoria: "categoria1" },
      { id: 2, nombre: "Producto Demo 2", categoria: "categoria2" }
    ]
    
    return NextResponse.json({ productos })
  } catch (error) {
    console.error('Error en API productos:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Mock response - implementar lógica real posteriormente
    return NextResponse.json({ message: 'Producto creado', id: Date.now() })
  } catch (error) {
    console.error('Error creando producto:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
