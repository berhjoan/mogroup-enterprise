import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const subcategorias = [
      { id: 1, nombre: "Subcategoría Demo 1", categoria_id: 1 },
      { id: 2, nombre: "Subcategoría Demo 2", categoria_id: 1 }
    ]
    return NextResponse.json({ subcategorias })
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
