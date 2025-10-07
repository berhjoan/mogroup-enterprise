import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Datos mock - se conectará a PostgreSQL posteriormente
    const proveedores = [
      { id: 1, nombre: "Proveedor Demo 1", email: "demo1@ejemplo.com" },
      { id: 2, nombre: "Proveedor Demo 2", email: "demo2@ejemplo.com" }
    ]
    
    return NextResponse.json({ proveedores })
  } catch (error) {
    console.error('Error en API proveedores:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    return NextResponse.json({ message: 'Proveedor creado', id: Date.now() })
  } catch (error) {
    console.error('Error creando proveedor:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
