import { proxyToBackend } from "../../_lib/proxy";

const store = globalThis.__quotes_store ?? { list: [] };
globalThis.__quotes_store = store;

function bad(msg){ return new Response(JSON.stringify({ error: msg }), { status:400, headers:{ "Content-Type":"application/json" } }); }

export async function GET() {
  // Intentar backend: /apiv1/quotes
  const backendRes = await proxyToBackend("/apiv1/quotes", { method: "GET" });
  if (backendRes && backendRes.ok) return backendRes;
  // Fallback en memoria
  return new Response(JSON.stringify({ items: store.list, count: store.list.length, stub:true }), {
    status: 200,
    headers: { "Content-Type":"application/json", "X-Stub":"true" }
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { contacto, item, cantidad, comentario } = body || {};
    if (!contacto || !item || !cantidad) return bad("contacto, item y cantidad son obligatorios");

    // Intentar backend: /apiv1/quotes
    const backendRes = await proxyToBackend("/apiv1/quotes", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(body)
    });
    if (backendRes && backendRes.ok) return backendRes;

    // Fallback en memoria + evento guardián básico
    const id = `Q-${Date.now()}`;
    const quote = {
      id, contacto, item, cantidad: Number(cantidad), comentario: comentario || "",
      estado: "Borrador", creada_en: new Date().toISOString()
    };
    store.list.unshift(quote);
    const guardianEvent = {
      event_id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      origen: "frontend",
      modulo: "cotizaciones",
      accion: "solicitud_cotizacion_recibida",
      referencias: { cotizacion_id: id, cliente_id: null, proveedor_id: null, producto_id: null },
      decision: { reglas_aplicadas: [], costo: 0.0, margen_estimado: 0.0, sla_horas: 48, explicacion: "Fallback: recepción local, sin selección." },
      consentimiento: { requerido: true, consent_id: null },
      integridad: { hash_prev: null, hash_actual: "" }
    };
    // Intentar propagar evento al backend
    await proxyToBackend("/apiv1/guardian/events", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(guardianEvent)
    });
    return new Response(JSON.stringify({ id, quote, guardianEvent, stub:true }), {
      status: 201,
      headers: { "Content-Type":"application/json", "X-Stub":"true" }
    });
  } catch {
    return new Response(JSON.stringify({ error: "JSON inválido" }), { status: 400, headers:{ "Content-Type":"application/json" } });
  }
}
