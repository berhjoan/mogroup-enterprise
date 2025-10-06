import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/postgres';

export async function GET() {
  try {
    const result = await query('SELECT * FROM clasificaciones ORDER BY nombre');
    return NextResponse.json({ clasificaciones: result.rows }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
