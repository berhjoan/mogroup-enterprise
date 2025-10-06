-- MOGROUP-ENTERPRISE DATABASE SCHEMA
-- Ejecutar en PostgreSQL

-- Tabla de Proveedores
CREATE TABLE IF NOT EXISTS proveedores (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  contacto VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  direccion TEXT,
  pais VARCHAR(100) NOT NULL,
  estado VARCHAR(20) NOT NULL DEFAULT 'activo',
  notas TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de Productos (alimenta el catálogo público)
CREATE TABLE IF NOT EXISTS productos (
  id SERIAL PRIMARY KEY,
  proveedor_id INTEGER REFERENCES proveedores(id) ON DELETE CASCADE,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  sku VARCHAR(100) UNIQUE NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  marca VARCHAR(100),
  precio_compra DECIMAL(10, 2),
  precio_venta DECIMAL(10, 2),
  stock INTEGER DEFAULT 0,
  imagen_url TEXT,
  estado VARCHAR(20) NOT NULL DEFAULT 'activo',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices para optimizar consultas
CREATE INDEX idx_proveedores_estado ON proveedores(estado);
CREATE INDEX idx_proveedores_categoria ON proveedores(categoria);
CREATE INDEX idx_productos_proveedor ON productos(proveedor_id);
CREATE INDEX idx_productos_categoria ON productos(categoria);
CREATE INDEX idx_productos_estado ON productos(estado);
CREATE INDEX idx_productos_sku ON productos(sku);

-- Datos de ejemplo (opcional)
INSERT INTO proveedores (nombre, categoria, contacto, email, telefono, pais, estado)
VALUES 
  ('Proveedor Demo 1', 'Químicos', 'Juan Pérez', 'juan@proveedor1.com', '+507 1234-5678', 'Panamá', 'activo'),
  ('Proveedor Demo 2', 'Equipos de Protección', 'María García', 'maria@proveedor2.com', '+507 8765-4321', 'México', 'activo');
