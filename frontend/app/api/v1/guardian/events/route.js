import { proxyToBackend } from "../../../_lib/proxy";
import { validateGuardianEvent } from "../../../_lib/validate";
import { hashEvent } from "../../../_lib/integrity";

const mem = globalThis.__guardian_events ?? { events: [], last_hash: null };
globalThis.__guardian_events = mem;

export async function GET() {
  const backendRes = await proxyToBackend("/apiv1/guardian/events", { method:"GET" });
  if (backendRes && backendRes.ok) return backendRes;
  return new Response(JSON.stringify({ items: mem.events, count: mem.events.length, last_hash: mem.last_hash, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}

export async function POST(request) {
  try{
    const evt = await request.json();
    const errs = validateGuardianEvent(evt);
    if (errs.length) return new Response(JSON.stringify({ error:"schema_invalid", details:errs }), { status:400, headers:{ "Content-Type":"application/json" } });

    // Intentar backend primero
    const backendRes = await proxyToBackend("/apiv1/guardian/events", {
      method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(evt)
    });
    if (backendRes && backendRes.ok) return backendRes;

    // Fallback: encadenar hash e insertar
    const prev = mem.last_hash;
    const h = await hashEvent(prev, evt);
    const stored = { ...evt, integridad: { hash_prev: prev, hash_actual: h, ...(evt.integridad||{}) } };
    mem.events.push(stored);
    mem.last_hash = h;
    return new Response(JSON.stringify({ accepted:true, size: mem.events.length, last_hash: mem.last_hash, stub:true }), { status:202, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
  }catch{
    return new Response(JSON.stringify({ error:"JSON_invalido" }), { status:400, headers:{ "Content-Type":"application/json" } });
  }
}
