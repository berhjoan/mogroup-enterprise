const mem = globalThis.__guardian_events ?? { events: [], last_hash: null };
globalThis.__guardian_events = mem;

function toCSVRow(arr){ return arr.map(v => {
  const s = (v===null||v===undefined) ? "" : String(v);
  if (/[",\r\n]/.test(s)) return `"${s.replace(/"/g,'""')}"`;
  return s;
}).join(","); }

export async function GET(request){
  const url = new URL(request.url);
  const from = url.searchParams.get("from");
  const to = url.searchParams.get("to");
  const modulo = url.searchParams.get("modulo");
  const accion = url.searchParams.get("accion");

  let items = [...(mem.events || [])];
  if (from) items = items.filter(e => e.timestamp >= from);
  if (to) items = items.filter(e => e.timestamp <= to);
  if (modulo) items = items.filter(e => e.modulo === modulo);
  if (accion) items = items.filter(e => e.accion === accion);

  const header = ["event_id","timestamp","modulo","accion","cotizacion_id","costo","margen_estimado","sla_horas","explicacion","hash_prev","hash_actual"];
  const rows = items.map(e => [
    e.event_id, e.timestamp, e.modulo, e.accion,
    e?.referencias?.cotizacion_id ?? "",
    e?.decision?.costo ?? "",
    e?.decision?.margen_estimado ?? "",
    e?.decision?.sla_horas ?? "",
    e?.decision?.explicacion ?? "",
    e?.integridad?.hash_prev ?? "",
    e?.integridad?.hash_actual ?? ""
  ]);
  const csv = [toCSVRow(header)].concat(rows.map(toCSVRow)).join("\r\n");
  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=guardian_events.csv",
      "Cache-Control": "no-store"
    }
  });
}
