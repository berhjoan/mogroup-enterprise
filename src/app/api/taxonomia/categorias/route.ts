import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const categorias = [
      { id: 1, nombre: "Categoría Demo 1" },
      { id: 2, nombre: "Categoría Demo 2" }
    ]
    return NextResponse.json({ categorias })
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
