import { proxyToBackend } from "../../../_lib/proxy";

const store = globalThis.__quotes_store ?? { list: [] };
globalThis.__quotes_store = store;

export async function GET(_request, { params }) {
  const { id } = params || {};
  // Intentar backend
  const backendRes = await proxyToBackend(`/apiv1/quotes/${id}`, { method: "GET" });
  if (backendRes && backendRes.ok) return backendRes;
  // Fallback en memoria
  const found = store.list.find(q => q.id === id);
  if (!found) return new Response(JSON.stringify({ error:"not_found" }), { status:404, headers:{ "Content-Type":"application/json" } });
  return new Response(JSON.stringify({ item: found, stub:true }), { status:200, headers:{ "Content-Type":"application/json", "X-Stub":"true" } });
}
