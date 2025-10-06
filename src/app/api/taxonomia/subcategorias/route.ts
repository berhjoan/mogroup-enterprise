import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/postgres';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    const categoriaId = req.nextUrl.searchParams.get('categoria_id');
    let sql = 'SELECT * FROM subcategorias';
    const params: any[] = [];
    
    if (categoriaId) {
      sql += ' WHERE categoria_id = $1';
      params.push(categoriaId);
    }
    
    sql += ' ORDER BY nombre';
    const result = await query(sql, params);
    return NextResponse.json({ subcategorias: result.rows }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}