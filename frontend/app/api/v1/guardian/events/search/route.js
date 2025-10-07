const mem = globalThis.__guardian_events ?? { events: [] };
globalThis.__guardian_events = mem;

export async function GET(request) {
  const url = new URL(request.url);
  const from = url.searchParams.get("from");
  const to = url.searchParams.get("to");
  const modulo = url.searchParams.get("modulo");
  const accion = url.searchParams.get("accion");

  let items = [...(mem.events || [])];
  if (from) items = items.filter(e => e.timestamp >= from);
  if (to) items = items.filter(e => e.timestamp <= to);
  if (modulo) items = items.filter(e => e.modulo === modulo);
  if (accion) items = items.filter(e => e.accion === accion);

  return new Response(JSON.stringify({ items, count: items.length, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}
