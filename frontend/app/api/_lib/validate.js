export function validateProducto(p){
  const errs = [];
  if (!p) errs.push("payload_required");
  if (!p?.sku) errs.push("sku_required");
  if (!p?.nombre) errs.push("nombre_required");
  if (!p?.categoria) errs.push("categoria_required");
  if (!p?.marca) errs.push("marca_required");
  if (p?.activo !== undefined && typeof p.activo !== "boolean") errs.push("activo_boolean");
  return errs;
}
export function validateCotizacion(q){
  const errs = [];
  if (!q) errs.push("payload_required");
  if (!q?.contacto) errs.push("contacto_required");
  if (!q?.item) errs.push("item_required");
  if (q?.cantidad === undefined) errs.push("cantidad_required");
  const n = Number(q?.cantidad);
  if (!(n > 0)) errs.push("cantidad_positive");
  return errs;
}
export function validateGuardianEvent(e){
  const errs = [];
  if (!e) errs.push("payload_required");
  if (!e?.event_id) errs.push("event_id_required");
  if (!e?.timestamp) errs.push("timestamp_required");
  if (!e?.modulo) errs.push("modulo_required");
  if (!e?.accion) errs.push("accion_required");
  return errs;
}
