import { NextRequest } from 'next/server';
import { writeFile, appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const dir = path.join(process.cwd(), 'storage');
    const file = path.join(dir, 'quotes.csv');
    await mkdir(dir, { recursive: true });
    const header = 'fecha,producto,empresa,contacto,email,telefono,detalle\n';
    try { await writeFile(file, header, { flag: 'wx' }); } catch {}
    const row = [
      new Date().toISOString(),
      body.producto || '',
      body.empresa || '',
      body.contacto || '',
      body.email || '',
      body.telefono || '',
      String(body.detalle || '').replace(/\n/g,' ')
    ].map(v => '"' + String(v).replace(/"/g,'""') + '"').join(',') + '\n';
    await appendFile(file, row);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e:any) {
    return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500 });
  }
}
