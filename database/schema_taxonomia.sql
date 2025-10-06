-- TAXONOMÍA DE PRODUCTOS MOGROUP

-- Tabla de Clasificaciones (Nivel 1)
CREATE TABLE IF NOT EXISTS clasificaciones (
  id SERIAL PRIMARY KEY,
  codigo VARCHAR(50) UNIQUE NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de Categorías (Nivel 2)
CREATE TABLE IF NOT EXISTS categorias (
  id SERIAL PRIMARY KEY,
  clasificacion_id INTEGER REFERENCES clasificaciones(id) ON DELETE CASCADE,
  codigo VARCHAR(50) UNIQUE NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de Subcategorías (Nivel 3)
CREATE TABLE IF NOT EXISTS subcategorias (
  id SERIAL PRIMARY KEY,
  categoria_id INTEGER REFERENCES categorias(id) ON DELETE CASCADE,
  codigo VARCHAR(50) UNIQUE NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de Palabras Clave (para búsqueda)
CREATE TABLE IF NOT EXISTS palabras_clave (
  id SERIAL PRIMARY KEY,
  subcategoria_id INTEGER REFERENCES subcategorias(id) ON DELETE CASCADE,
  palabra VARCHAR(100) NOT NULL,
  relevancia INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de Productos (conectada con proveedores y subcategorías)
CREATE TABLE IF NOT EXISTS productos (
  id SERIAL PRIMARY KEY,
  proveedor_id INTEGER REFERENCES proveedores(id) ON DELETE CASCADE,
  subcategoria_id INTEGER REFERENCES subcategorias(id),
  codigo_unico VARCHAR(100) UNIQUE NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  sku VARCHAR(100),
  marca VARCHAR(100),
  precio_compra DECIMAL(10, 2),
  precio_venta DECIMAL(10, 2),
  precio_sugerido DECIMAL(10, 2),
  stock INTEGER DEFAULT 0,
  unidad_medida VARCHAR(50),
  imagen_url TEXT,
  estado VARCHAR(20) NOT NULL DEFAULT 'activo',
  es_destacado BOOLEAN DEFAULT false,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabla para seguimiento de procesamiento OCR
CREATE TABLE IF NOT EXISTS procesamiento_catalogos (
  id SERIAL PRIMARY KEY,
  proveedor_id INTEGER REFERENCES proveedores(id),
  archivo_pdf VARCHAR(500),
  estado VARCHAR(50) DEFAULT 'pendiente',
  productos_detectados INTEGER DEFAULT 0,
  productos_categorizados INTEGER DEFAULT 0,
  confianza_promedio DECIMAL(5, 2),
  log_procesamiento TEXT,
  procesado_por VARCHAR(100) DEFAULT 'KAT-AI',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Índices para búsqueda rápida
CREATE INDEX idx_productos_proveedor ON productos(proveedor_id);
CREATE INDEX idx_productos_subcategoria ON productos(subcategoria_id);
CREATE INDEX idx_productos_codigo ON productos(codigo_unico);
CREATE INDEX idx_productos_sku ON productos(sku);
CREATE INDEX idx_productos_estado ON productos(estado);
CREATE INDEX idx_palabras_clave_palabra ON palabras_clave(palabra);
CREATE INDEX idx_palabras_clave_subcategoria ON palabras_clave(subcategoria_id);
