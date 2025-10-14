const TOK = globalThis.__email_tokens ?? { tokens:new Map() };
globalThis.__email_tokens = TOK;
const QUOTES = globalThis.__quotes_store ?? { list: [] };
globalThis.__quotes_store = QUOTES;

export async function GET(request){
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  if (!token) return new Response(JSON.stringify({ error:"token_required" }), { status:400, headers:{ "Content-Type":"application/json" } });
  const rec = TOK.tokens.get(token);
  if (!rec) return new Response(JSON.stringify({ error:"token_invalid" }), { status:400, headers:{ "Content-Type":"application/json" } });
  if (Date.now() > rec.exp) { TOK.tokens.delete(token); return new Response(JSON.stringify({ error:"token_expired" }), { status:400, headers:{ "Content-Type":"application/json" } }); }
  const q = (QUOTES.list || []).find(x => x.id === rec.quote_id);
  if (q) q.estado = "Verificada";
  TOK.tokens.delete(token);
  // Evento del guardián
  const mem = globalThis.__guardian_events ?? { events: [], last_hash: null };
  globalThis.__guardian_events = mem;
  const evt = {
    event_id: crypto.randomUUID(), timestamp: new Date().toISOString(),
    origen:"frontend", modulo:"cotizaciones", accion:"verificacion_email_confirmada",
    referencias:{ cotizacion_id: rec.quote_id, cliente_id: null, proveedor_id: null, producto_id: null },
    decision:{ reglas_aplicadas:["email_verification"], costo:null, margen_estimado:null, sla_horas:null, explicacion:"Email verificado" },
    consentimiento:{ requerido:false, consent_id:null },
    integridad:{ hash_prev: mem.last_hash ?? null, hash_actual:"" }
  };
  mem.events.push(evt);
  return new Response(JSON.stringify({ ok:true, quote_id: rec.quote_id, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}
