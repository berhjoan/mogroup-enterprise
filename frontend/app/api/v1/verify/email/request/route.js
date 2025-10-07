const TOK = globalThis.__email_tokens ?? { tokens:new Map() };
globalThis.__email_tokens = TOK;
const QUOTES = globalThis.__quotes_store ?? { list: [] };
globalThis.__quotes_store = QUOTES;

export async function POST(request){
  try{
    const body = await request.json();
    const { quote_id, email } = body || {};
    if (!quote_id || !email) return new Response(JSON.stringify({ error:"schema_invalid" }), { status:400, headers:{ "Content-Type":"application/json" } });
    const q = (QUOTES.list || []).find(x => x.id === quote_id);
    if (!q) return new Response(JSON.stringify({ error:"quote_not_found" }), { status:404, headers:{ "Content-Type":"application/json" } });

    const token = crypto.randomUUID();
    const exp = Date.now() + 15*60*1000;
    TOK.tokens.set(token, { quote_id, email, exp });
    q.estado = "Verificación pendiente";
    // Evento del guardián
    const mem = globalThis.__guardian_events ?? { events: [], last_hash: null };
    globalThis.__guardian_events = mem;
    const evt = {
      event_id: crypto.randomUUID(), timestamp: new Date().toISOString(),
      origen:"frontend", modulo:"cotizaciones", accion:"verificacion_email_enviada",
      referencias:{ cotizacion_id: quote_id, cliente_id: null, proveedor_id: null, producto_id: null },
      decision:{ reglas_aplicadas:["email_verification"], costo:null, margen_estimado:null, sla_horas:null, explicacion:`Token enviado a ${email}` },
      consentimiento:{ requerido:false, consent_id:null },
      integridad:{ hash_prev: mem.last_hash ?? null, hash_actual:"" }
    };
    mem.events.push(evt);
    return new Response(JSON.stringify({ ok:true, token, exp, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
  }catch{
    return new Response(JSON.stringify({ error:"JSON_invalido" }), { status:400, headers:{ "Content-Type":"application/json" } });
  }
}
