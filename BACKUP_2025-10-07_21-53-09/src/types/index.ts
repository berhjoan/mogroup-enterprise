export interface Proveedor {
  id?: number;
  nombre: string;
  categoria: string;
  contacto: string;
  email: string;
  telefono: string;
  direccion?: string;
  pais: string;
  estado: 'activo' | 'inactivo' | 'pendiente';
  notas?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Producto {
  id?: number;
  proveedor_id: number;
  nombre: string;
  descripcion?: string;
  sku: string;
  categoria: string;
  marca?: string;
  precio_compra?: number;
  precio_venta?: number;
  stock?: number;
  imagen_url?: string;
  estado: 'activo' | 'inactivo';
  created_at?: Date;
  updated_at?: Date;
}
