import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/postgres';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const busqueda = searchParams.get('busqueda');
    const proveedor = searchParams.get('proveedor');
    const subcategoria = searchParams.get('subcategoria');
    
    let sql = `
      SELECT p.*, 
        pr.nombre as proveedor_nombre,
        s.nombre as subcategoria_nombre,
        c.nombre as categoria_nombre,
        cl.nombre as clasificacion_nombre
      FROM productos p
      LEFT JOIN proveedores pr ON p.proveedor_id = pr.id
      LEFT JOIN subcategorias s ON p.subcategoria_id = s.id
      LEFT JOIN categorias c ON s.categoria_id = c.id
      LEFT JOIN clasificaciones cl ON c.clasificacion_id = cl.id
      WHERE p.estado = 'activo'
    `;
    const params: any[] = [];
    let paramCount = 1;
    
    if (busqueda) {
      sql += ` AND (
        p.nombre ILIKE $${paramCount} OR 
        p.sku ILIKE $${paramCount} OR
        p.codigo_unico ILIKE $${paramCount}
      )`;
      params.push(`%${busqueda}%`);
      paramCount++;
    }
    
    if (proveedor) {
      sql += ` AND p.proveedor_id = $${paramCount}`;
      params.push(proveedor);
      paramCount++;
    }
    
    if (subcategoria) {
      sql += ` AND p.subcategoria_id = $${paramCount}`;
      params.push(subcategoria);
      paramCount++;
    }
    
    sql += ' ORDER BY p.created_at DESC LIMIT 100';
    
    const result = await query(sql, params);
    return NextResponse.json({ productos: result.rows }, { status: 200 });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}