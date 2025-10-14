const store = globalThis.__providers_store ?? { list: [] };
globalThis.__providers_store = store;

export async function GET(_req, { params }){
  const { id } = params || {};
  const it = (store.list||[]).find(p=> p.id === id);
  if (!it) return new Response(JSON.stringify({ error:"not_found" }), { status:404, headers:{ "Content-Type":"application/json" } });
  return new Response(JSON.stringify({ item: it, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}

export async function PUT(request, { params }){
  try{
    const { id } = params || {};
    const idx = (store.list||[]).findIndex(p=> p.id === id);
    if (idx < 0) return new Response(JSON.stringify({ error:"not_found" }), { status:404, headers:{ "Content-Type":"application/json" } });
    const body = await request.json();
    const prev = store.list[idx];
    const next = { ...prev, alias: body.alias ?? prev.alias, contacto: { ...(prev.contacto||{}), ...(body.contacto||{}) }, activo: typeof body.activo === "boolean" ? body.activo : prev.activo };
    store.list[idx] = next;
    return new Response(JSON.stringify({ item: next, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
  }catch{ return new Response(JSON.stringify({ error:"JSON_invalido" }), { status:400, headers:{ "Content-Type":"application/json" } }); }
}
