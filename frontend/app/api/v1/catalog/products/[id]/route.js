import { toPublic } from "../../_lib/mem";

const cat = globalThis.__catalog_store ?? { items: [] };
globalThis.__catalog_store = cat;

export async function GET(_req, { params }) {
  const { id } = params || {};
  const found = (cat.items || []).find(p => p.id === id || p.sku === id);
  if (!found || found.activo === false) return new Response(JSON.stringify({ error:"not_found" }), { status:404, headers:{ "Content-Type":"application/json" } });
  return new Response(JSON.stringify({ item: toPublic(found), stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}
