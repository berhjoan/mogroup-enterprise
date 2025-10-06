-- PRODUCTOS DE EJEMPLO PARA TESTING
-- Nota: Primero debes importar la taxonomía desde el Excel

-- Asegúrate de que existe la taxonomía
SELECT COUNT(*) FROM clasificaciones;
SELECT COUNT(*) FROM categorias;
SELECT COUNT(*) FROM subcategorias;

-- Productos de EPP (asumiendo que ya existen las subcategorías)
INSERT INTO productos (proveedor_id, codigo_unico, nombre, descripcion, marca, estado, metadata)
SELECT 
  p.id as proveedor_id,
  'EPP-MASK-N95-001' as codigo_unico,
  'Mascarilla N95 Certificada' as nombre,
  'Mascarilla de protección respiratoria N95, certificación NIOSH. Caja de 20 unidades.' as descripcion,
  '3M' as marca,
  'activo' as estado,
  '{"origen": "USA", "certificacion": "NIOSH N95", "unidades_caja": 20}'::jsonb as metadata
FROM proveedores p
WHERE p.nombre LIKE '%Mayor Safety%'
LIMIT 1
ON CONFLICT (codigo_unico) DO NOTHING;

INSERT INTO productos (proveedor_id, codigo_unico, nombre, descripcion, marca, estado, metadata)
SELECT 
  p.id as proveedor_id,
  'EPP-GLOVE-LAT-001' as codigo_unico,
  'Guantes de Látex Industrial' as nombre,
  'Guantes desechables de látex, resistentes a químicos. Caja de 100 unidades.' as descripcion,
  'Maxguantes' as marca,
  'activo' as estado,
  '{"talla": "M/L", "unidades_caja": 100, "material": "latex"}'::jsonb as metadata
FROM proveedores p
WHERE p.nombre LIKE '%Maxguantes%'
LIMIT 1
ON CONFLICT (codigo_unico) DO NOTHING;

-- Productos de Limpieza
INSERT INTO productos (proveedor_id, codigo_unico, nombre, descripcion, marca, estado, metadata)
SELECT 
  p.id as proveedor_id,
  'LIM-DES-IND-001' as codigo_unico,
  'Desinfectante Industrial Multiusos' as nombre,
  'Desinfectante de grado industrial, elimina 99.9% de bacterias. Botella de 1 galón.' as descripcion,
  'Kimberly Clark' as marca,
  'activo' as estado,
  '{"presentacion": "1 galon", "activo": "quaternario de amonio"}'::jsonb as metadata
FROM proveedores p
WHERE p.nombre LIKE '%Higiene Vital%'
LIMIT 1
ON CONFLICT (codigo_unico) DO NOTHING;

-- Verificar inserción
SELECT 
  p.nombre as producto,
  pr.nombre as proveedor,
  p.codigo_unico,
  p.estado
FROM productos p
JOIN proveedores pr ON p.proveedor_id = pr.id
ORDER BY p.created_at DESC
LIMIT 10;
