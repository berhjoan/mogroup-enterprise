import { NextRequest, NextResponse } from 'next/server';

// ARCHIVO TEMPORALMENTE DESHABILITADO - TIENE ERRORES DE SINTAXIS
// TODO: Corregir template strings y lógica de procesamiento

export async function POST(req: NextRequest) {
  return NextResponse.json({ 
    error: 'Funcionalidad en desarrollo' 
  }, { status: 501 });
}