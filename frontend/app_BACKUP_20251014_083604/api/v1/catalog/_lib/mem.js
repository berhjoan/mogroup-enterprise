const cat = globalThis.__catalog_store ?? { items: [] };
globalThis.__catalog_store = cat;

export function toPublic(p) {
  const { id, sku, nombre, categoria, marca, descripcion, imagen_url, atributos, activo } = p || {};
  return { id, sku, nombre, categoria, marca, descripcion, imagen_url, atributos, activo };
}
