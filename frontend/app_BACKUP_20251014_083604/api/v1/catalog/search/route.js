const cat = globalThis.__catalog_store ?? { items: [] };
globalThis.__catalog_store = cat;

export async function GET(request){
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").toLowerCase();
  const catFilter = (url.searchParams.get("category") || "").toLowerCase();
  let list = (cat.items || []).filter(p => p.activo !== false);
  if (q) list = list.filter(p => 
    (p.nombre||"").toLowerCase().includes(q) ||
    (p.descripcion||"").toLowerCase().includes(q) ||
    (p.marca||"").toLowerCase().includes(q) ||
    (p.categoria||"").toLowerCase().includes(q) ||
    Object.entries(p.atributos||{}).some(([k,v]) => (String(k)+' '+String(v)).toLowerCase().includes(q))
  );
  if (catFilter) list = list.filter(p => (p.categoria||"").toLowerCase() === catFilter);
  return new Response(JSON.stringify({ items: list.map(p=>({ id:p.id, sku:p.sku, nombre:p.nombre, categoria:p.categoria, marca:p.marca, descripcion:p.descripcion, imagen_url:p.imagen_url })), count:list.length, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}
