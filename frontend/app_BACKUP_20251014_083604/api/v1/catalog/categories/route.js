const cat = globalThis.__catalog_store ?? { items: [] };
globalThis.__catalog_store = cat;

export async function GET() {
  const set = new Set((cat.items||[]).filter(p => p.activo !== false).map(p => p.categoria));
  const list = Array.from(set).sort();
  return new Response(JSON.stringify({ categories: list, count: list.length, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}
