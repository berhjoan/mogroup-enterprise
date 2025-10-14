const mem = globalThis.__guardian_events ?? { events: [], last_hash: null };
globalThis.__guardian_events = mem;

export async function GET(_req, { params }){
  const { id } = params || {};
  const items = (mem.events || []).filter(e => e?.referencias?.cotizacion_id === id);
  return new Response(JSON.stringify({ items, count: items.length, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}
