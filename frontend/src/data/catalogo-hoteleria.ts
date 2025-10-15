// ═══════════════════════════════════════════════════════════════
// ARCHIVO GENERADO AUTOMÁTICAMENTE POR MOGROUP ENTERPRISE SYSTEM
// Fecha: 2025-10-14 11:46:27
// ═══════════════════════════════════════════════════════════════

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  palabrasClave: string[];
}

export interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  slug: string;
  productos: Producto[];
  productoCount: number;
  imagen?: string;
}
export const CATEGORIAS_HOTELERIA: Categoria[] = [
];

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return CATEGORIAS_HOTELERIA.find(cat => cat.slug === slug);
}

export function getAllCategorias(): Categoria[] {
  return CATEGORIAS_HOTELERIA;
}
