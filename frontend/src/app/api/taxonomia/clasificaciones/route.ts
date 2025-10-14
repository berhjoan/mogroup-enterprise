import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const clasificaciones = [
      { id: 1, nombre: "Clasificación Demo 1" },
      { id: 2, nombre: "Clasificación Demo 2" }
    ]
    return NextResponse.json({ clasificaciones })
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
