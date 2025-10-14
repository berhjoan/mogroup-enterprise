const store = globalThis.__quotes_store ?? { list: [] };
globalThis.__quotes_store = store;
const mem = globalThis.__guardian_events ?? { events: [] };
globalThis.__guardian_events = mem;

// Reglas simples: costo base por cantidad, SLA penaliza margen, y margen = precio - costo - fee
function buildOptions(input){
  const qty = Number(input?.cantidad ?? 1);
  const base = Math.max(1, qty);
  const candidates = [
    { proveedor_alias: "OPTA", costo_unit: 4.2, sla_horas: 24, fee: 1.0 },
    { proveedor_alias: "OPTB", costo_unit: 3.8, sla_horas: 36, fee: 0.8 },
    { proveedor_alias: "OPTC", costo_unit: 3.5, sla_horas: 48, fee: 0.5 },
    { proveedor_alias: "OPTD", costo_unit: 3.9, sla_horas: 30, fee: 0.9 }
  ];
  const precio_unit_sugerido = (c) => +(c.costo_unit * 1.22 + c.fee).toFixed(2); // markup 22% + fee
  const opts = candidates.map(c => {
    const costo_total = +(c.costo_unit * base).toFixed(2);
    const precio_total = +(precio_unit_sugerido(c) * base).toFixed(2);
    const margen = +(precio_total - costo_total - c.fee).toFixed(2);
    return {
      proveedor_alias: c.proveedor_alias,
      sla_horas: c.sla_horas,
      costo_total,
      precio_total,
      margen
    };
  });
  // Orden: menor costo_total, luego menor SLA, luego mayor margen
  opts.sort((a,b)=>{
    if (a.costo_total !== b.costo_total) return a.costo_total - b.costo_total;
    if (a.sla_horas !== b.sla_horas) return a.sla_horas - b.sla_horas;
    return b.margen - a.margen;
  });
  return opts.slice(0,3);
}

export async function POST(request){
  try{
    const body = await request.json();
    let quote = null;
    if (body?.id){
      quote = (store.list || []).find(q => q.id === body.id) || null;
    }
    const q = quote || body || {};
    if (!q || (!q.id && (!q.contacto || !q.item || !q.cantidad))) {
      return new Response(JSON.stringify({ error:"payload_incompleto" }), { status:400, headers:{ "Content-Type":"application/json" } });
    }
    const opciones = buildOptions(q);
    const decision = {
      reglas_aplicadas: ["orden_por_costo","desempate_por_sla","margen_como_tercer_criterio"],
      costo_mejor: opciones[0]?.costo_total ?? 0,
      margen_mejor: opciones[0]?.margen ?? 0,
      sla_mejor: opciones[0]?.sla_horas ?? 48,
      explicacion: "Se generaron 3 opciones y se ordenaron por costo asc, SLA asc, margen desc."
    };
    const evt = {
      event_id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      origen: "frontend",
      modulo: "cotizaciones",
      accion: "evaluacion_reglas_generada",
      referencias: { cotizacion_id: q.id || null, cliente_id: null, proveedor_id: null, producto_id: null },
      decision,
      consentimiento: { requerido: false, consent_id: null },
      integridad: { hash_prev: null, hash_actual: "" }
    };
    mem.events.push(evt);
    return new Response(JSON.stringify({ opciones, decision, guardianEvent: evt, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
  }catch{
    return new Response(JSON.stringify({ error:"JSON_invalido" }), { status:400, headers:{ "Content-Type":"application/json" } });
  }
}
