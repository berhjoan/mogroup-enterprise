import { parseCSV } from "../../../_lib/csv";
import { validateProducto } from "../../../_lib/validate";

const cat = globalThis.__catalog_store ?? { items: [] };
globalThis.__catalog_store = cat;

function upsert(rec){
  const i = (cat.items||[]).findIndex(p => (p.marca||"").toLowerCase() === (rec.marca||"").toLowerCase() && (p.sku||"").toLowerCase() === (rec.sku||"").toLowerCase());
  if (i >= 0) { cat.items[i] = { ...cat.items[i], ...rec }; return { action:"update", id: cat.items[i].id }; }
  const id = rec.id || `P-${Date.now()}-${Math.floor(Math.random()*1000)}`;
  cat.items.push({ ...rec, id });
  return { action:"insert", id };
}

export async function POST(request){
  try{
    const ct = request.headers.get("content-type") || "";
    let text = "";
    if (ct.includes("multipart/form-data")){
      const form = await request.formData();
      const file = form.get("file");
      if (!file) return new Response(JSON.stringify({ error:"file_required" }), { status:400, headers:{ "Content-Type":"application/json" } });
      text = await file.text();
    } else {
      text = await request.text();
    }
    const { header, rows } = parseCSV(text);
    const required = ["sku","nombre","categoria","marca"];
    const missing = required.filter(h => !header.includes(h));
    if (missing.length) return new Response(JSON.stringify({ error:"missing_columns", details:missing }), { status:400, headers:{ "Content-Type":"application/json" } });

    const mem = globalThis.__guardian_events ?? { events: [], last_hash: null }; globalThis.__guardian_events = mem;
    const results = { inserted:0, updated:0, errors:0, items:[] };
    for (const r of rows){
      const p = {
        id: r.id || null,
        sku: r.sku?.trim(),
        nombre: r.nombre?.trim(),
        categoria: r.categoria?.trim(),
        marca: r.marca?.trim(),
        descripcion: r.descripcion || "",
        imagen_url: r.imagen_url || "",
        atributos: (()=>{ try{ return r.atributos_json ? JSON.parse(r.atributos_json) : {}; } catch { return {}; }})(),
        activo: r.activo?.toLowerCase?.() === "false" ? false : true
      };
      const errs = validateProducto(p);
      if (errs.length){ results.errors++; results.items.push({ sku:p.sku, error:errs }); mem.events.push({ event_id: crypto.randomUUID(), timestamp:new Date().toISOString(), origen:"frontend", modulo:"catalogo", accion:"import_error", referencias:{ cotizacion_id:null, cliente_id:null, proveedor_id:null, producto_id:null }, decision:{ reglas_aplicadas:["validate_csv"], explicacion:`Error ${p.sku}: ${errs.join(",")}` } }); continue; }
      const rUp = upsert(p);
      results.items.push({ sku:p.sku, action:rUp.action, id:rUp.id });
      if (rUp.action === "insert") results.inserted++; else results.updated++;
      mem.events.push({ event_id: crypto.randomUUID(), timestamp:new Date().toISOString(), origen:"frontend", modulo:"catalogo", accion:`import_${rUp.action}`, referencias:{ cotizacion_id:null, cliente_id:null, proveedor_id:null, producto_id:rUp.id }, decision:{ reglas_aplicadas:["dedupe_marca_sku"], explicacion:`${rUp.action} ${p.marca}/${p.sku}` } });
    }
    return new Response(JSON.stringify({ summary: results, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
  }catch{
    return new Response(JSON.stringify({ error:"csv_parse_error" }), { status:400, headers:{ "Content-Type":"application/json" } });
  }
}



