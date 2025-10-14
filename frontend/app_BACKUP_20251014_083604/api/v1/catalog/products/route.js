import { toPublic } from "../_lib/mem";

const cat = globalThis.__catalog_store ?? { items: [] };
globalThis.__catalog_store = cat;

export async function GET() {
  const list = (cat.items || []).filter(p => p.activo !== false).map(toPublic);
  return new Response(JSON.stringify({ items: list, count: list.length, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}

export async function POST(request) {
  try{
    const p = await request.json();
    if (!p || !p.sku || !p.nombre || !p.categoria || !p.marca) {
      return new Response(JSON.stringify({ error:"schema_invalid" }), { status:400, headers:{ "Content-Type":"application/json" } });
    }
    const id = p.id || `P-${Date.now()}`;
    const rec = { id, sku:String(p.sku), nombre:p.nombre, categoria:p.categoria, marca:p.marca, descripcion:p.descripcion||"", imagen_url:p.imagen_url||"", atributos:p.atributos||{}, activo: p.activo!==false, proveedor_interno_id: p.proveedor_interno_id || null };
    // No se guardan precios ni se exponen proveedores en API pública
    cat.items.unshift(rec);
    return new Response(JSON.stringify({ id, item: { ...toPublic(rec) }, stub:true }), { status:201, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
  }catch{
    return new Response(JSON.stringify({ error:"JSON_invalido" }), { status:400, headers:{ "Content-Type":"application/json" } });
  }
}
