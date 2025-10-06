import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/postgres';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    const clasificacionId = req.nextUrl.searchParams.get('clasificacion_id');
    let sql = 'SELECT * FROM categorias';
    const params: any[] = [];
    
    if (clasificacionId) {
      sql += ' WHERE clasificacion_id = $1';
      params.push(clasificacionId);
    }
    
    sql += ' ORDER BY nombre';
    const result = await query(sql, params);
    return NextResponse.json({ categorias: result.rows }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}