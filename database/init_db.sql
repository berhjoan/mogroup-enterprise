-- Crear tablas
CREATE TABLE IF NOT EXISTS proveedores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE NOT NULL,
    categoria VARCHAR(100),
    contacto VARCHAR(255),
    email VARCHAR(255),
    telefono VARCHAR(50),
    direccion TEXT,
    pais VARCHAR(100) DEFAULT 'Panamá',
    estado VARCHAR(50) DEFAULT 'activo',
    notas TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS clasificaciones (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    clasificacion_id INTEGER REFERENCES clasificaciones(id) ON DELETE CASCADE,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS subcategorias (
    id SERIAL PRIMARY KEY,
    categoria_id INTEGER REFERENCES categorias(id) ON DELETE CASCADE,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    proveedor_id INTEGER REFERENCES proveedores(id) ON DELETE CASCADE,
    subcategoria_id INTEGER REFERENCES subcategorias(id) ON DELETE SET NULL,
    codigo_unico VARCHAR(100) UNIQUE NOT NULL,
    nombre VARCHAR(500) NOT NULL,
    marca VARCHAR(100),
    estado VARCHAR(50) DEFAULT 'activo',
    metadata JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS procesamiento_catalogos (
    id SERIAL PRIMARY KEY,
    proveedor_id INTEGER REFERENCES proveedores(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Insertar datos iniciales
INSERT INTO proveedores (nombre, categoria, contacto, email, telefono, pais) VALUES 
('PROINSA', 'Empaques', 'Ventas', 'info@proinsa.com.pa', '+507 392-2180', 'Panamá'),
('Mayor Safety', 'EPP', 'Ventas', 'contacto@mayorsafety.com', '+507 389-5220', 'Panamá'),
('Central Químicos', 'Químicos', 'Ventas', 'info@centraldequimicos.com', '+507 6576-3542', 'Panamá'),
('U-Supply', 'EPP', 'Ventas', 'ventas@usupplypanama.com', '+507 6000-0000', 'Panamá'),
('DISAGRO', 'Químicos', 'Ventas', 'info@disagro.com.pa', '+507 279-0000', 'Panamá'),
('Higiene Vital', 'Limpieza', 'Ventas', 'ventas@higienevital.com', '+507 6000-0001', 'Panamá'),
('Maxguantes', 'EPP', 'Ventas', 'ventas@maxguantes.com', '+507 6000-0002', 'Panamá'),
('Sondel', 'EPP', 'Ventas', 'ventas@sondelpanama.com', '+507 6000-0003', 'Panamá'),
('Pro Safe', 'Seguridad', 'Ventas', 'ventas@prosafepanama.com', '+507 6000-0004', 'Panamá'),
('Centro Industrial', 'Ferretería', 'Ventas', 'ventas@centro-industrial.com', '+507 6000-0005', 'Panamá'),
('Quibario', 'Químicos', 'Ventas', 'info@quibario.com', '+507 6000-0006', 'Panamá'),
('VS Mundiales', 'Seguridad', 'Ventas', 'ventas@vsmundiales.com', '+507 6000-0007', 'Panamá')
ON CONFLICT (nombre) DO NOTHING;

INSERT INTO clasificaciones (codigo, nombre) VALUES 
('EPP', 'Equipos de Protección Personal'),
('QUIMICOS', 'Productos Químicos'),
('HERRAMIENTAS', 'Herramientas'),
('OFICINA', 'Suministros de Oficina')
ON CONFLICT (codigo) DO NOTHING;

INSERT INTO categorias (clasificacion_id, codigo, nombre) VALUES 
(1, 'EPP-RESP', 'Protección Respiratoria'),
(1, 'EPP-MANOS', 'Protección de Manos'),
(2, 'QUIM-LIMP', 'Productos de Limpieza')
ON CONFLICT (codigo) DO NOTHING;

INSERT INTO subcategorias (categoria_id, codigo, nombre) VALUES 
(1, 'MASK-N95', 'Mascarillas N95'),
(2, 'GUANTE-LAT', 'Guantes de Látex'),
(3, 'DESINFECTANTE', 'Desinfectantes')
ON CONFLICT (codigo) DO NOTHING;

INSERT INTO productos (proveedor_id, subcategoria_id, codigo_unico, nombre, marca) VALUES 
(2, 1, 'MSS-N95-001', 'Mascarilla N95 3M', '3M'),
(7, 2, 'MAX-GLV-001', 'Guantes Látex M', 'Maxguantes'),
(6, 3, 'HV-DESINF-001', 'Desinfectante 1 Gal', 'Kimberly')
ON CONFLICT (codigo_unico) DO NOTHING;