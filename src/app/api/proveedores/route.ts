import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/postgres';
import { Proveedor } from '@/types';

export const runtime = 'nodejs';

// GET - Obtener todos los proveedores
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const estado = searchParams.get('estado');
    
    let sql = 'SELECT * FROM proveedores';
    const params: any[] = [];
    
    if (estado) {
      sql += ' WHERE estado = $1';
      params.push(estado);
    }
    
    sql += ' ORDER BY created_at DESC';
    
    const result = await query(sql, params);
    return NextResponse.json({ proveedores: result.rows }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching proveedores:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Crear nuevo proveedor
export async function POST(req: NextRequest) {
  try {
    const body: Proveedor = await req.json();
    
    const sql = `
      INSERT INTO proveedores (nombre, categoria, contacto, email, telefono, direccion, pais, estado, notas)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `;
    
    const params = [
      body.nombre,
      body.categoria,
      body.contacto,
      body.email,
      body.telefono,
      body.direccion || null,
      body.pais,
      body.estado || 'pendiente',
      body.notas || null
    ];
    
    const result = await query(sql, params);
    return NextResponse.json({ proveedor: result.rows[0] }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating proveedor:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Actualizar proveedor
export async function PUT(req: NextRequest) {
  try {
    const body: Proveedor = await req.json();
    
    if (!body.id) {
      return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
    }
    
    const sql = `
      UPDATE proveedores
      SET nombre = $1, categoria = $2, contacto = $3, email = $4, telefono = $5,
          direccion = $6, pais = $7, estado = $8, notas = $9, updated_at = NOW()
      WHERE id = $10
      RETURNING *
    `;
    
    const params = [
      body.nombre,
      body.categoria,
      body.contacto,
      body.email,
      body.telefono,
      body.direccion || null,
      body.pais,
      body.estado,
      body.notas || null,
      body.id
    ];
    
    const result = await query(sql, params);
    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Proveedor no encontrado' }, { status: 404 });
    }
    return NextResponse.json({ proveedor: result.rows[0] }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating proveedor:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Eliminar proveedor
export async function DELETE(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
    }
    
    const sql = 'DELETE FROM proveedores WHERE id = $1';
    const result = await query(sql, [id]);
    
    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Proveedor no encontrado' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Proveedor eliminado' }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting proveedor:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
