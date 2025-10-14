const store = globalThis.__providers_store ?? { list: [] };
globalThis.__providers_store = store;

export async function GET(){
  const items = (store.list||[]).map(p=>({ id:p.id, alias:p.alias, contacto:p.contacto, activo:p.activo }));
  return new Response(JSON.stringify({ items, count: items.length, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}

export async function POST(request){
  try{
    const body = await request.json();
    const { alias, contacto, activo } = body || {};
    if (!alias || !contacto?.nombre) return new Response(JSON.stringify({ error:"schema_invalid" }), { status:400, headers:{ "Content-Type":"application/json" } });
    const id = body.id || `S-${Date.now()}`;
    const rec = { id, alias: String(alias), contacto: { nombre: contacto.nombre || "", email: contacto.email || "", telefono: contacto.telefono || "" }, activo: activo !== false };
    store.list.unshift(rec);
    // Auditoría
    const mem = globalThis.__guardian_events ?? { events: [], last_hash: null }; globalThis.__guardian_events = mem;
    mem.events.push({ event_id: crypto.randomUUID(), timestamp: new Date().toISOString(), origen:"frontend", modulo:"proveedores", accion:"alta_proveedor", referencias:{ cotizacion_id:null, cliente_id:null, proveedor_id:id, producto_id:null }, decision:{ reglas_aplicadas:["onboarding"], explicacion:`Alta proveedor ${alias}` } });
    return new Response(JSON.stringify({ id, item: rec, stub:true }), { status:201, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
  }catch{ return new Response(JSON.stringify({ error:"JSON_invalido" }), { status:400, headers:{ "Content-Type":"application/json" } }); }
}
