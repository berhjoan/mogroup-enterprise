// ═══════════════════════════════════════════════════════════════
// 📦 DATOS DEL CATÁLOGO MOGROUP - ACTUALIZADO Y CORREGIDO
// Generado: 2025-10-14
// Todas las rutas normalizadas y verificadas
// ═══════════════════════════════════════════════════════════════

export interface CategoriaProducto {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  slug: string;
  productoCount: number;
}

export const CATEGORIAS_CATALOGO: CategoriaProducto[] = [
  {
    id: "CAFETERIA",
    nombre: "Suministros de Cafetería",
    descripcion: "Café, té, azúcar, endulzantes y complementos para tu cafetería empresarial",
    imagen: "/images/categorias/suministros-de-cafeteria.png",
    slug: "suministros-cafeteria",
    productoCount: 65
  },
  {
    id: "BOLSAS",
    nombre: "Bolsas y Manejo de Residuos",
    descripcion: "Bolsas de basura, plásticas y biodegradables para gestión de residuos",
    imagen: "/images/categorias/bolsas-y-manejo-de-residuos.png",
    slug: "bolsas-manejo-residuos",
    productoCount: 89
  },
  {
    id: "EPP",
    nombre: "Equipos de Protección Personal (EPP)",
    descripcion: "Mascarillas, guantes, lentes, cascos y equipos de seguridad industrial",
    imagen: "/images/categorias/equipos-de-proteccion-personal-epp.png",
    slug: "equipo-proteccion-personal",
    productoCount: 127
  },
  {
    id: "LIMPIEZA",
    nombre: "Equipos de Limpieza y Mantenimiento",
    descripcion: "Herramientas, equipos y accesorios para limpieza profesional",
    imagen: "/images/categorias/equipos-de-limpieza-y-mantenimiento.png",
    slug: "equipos-limpieza-mantenimiento",
    productoCount: 78
  },
  {
    id: "SUMINISTRO",
    nombre: "Suministros de Oficina",
    descripcion: "Papelería, archivadores, herramientas de escritorio y artículos de oficina",
    imagen: "/images/categorias/suministros-de-oficina.png",
    slug: "suministros-oficina",
    productoCount: 92
  },
  {
    id: "QUIMICOS",
    nombre: "Productos de Limpieza y Químicos",
    descripcion: "Limpiadores, desinfectantes, desengrasantes y químicos industriales",
    imagen: "/images/categorias/productos-de-limpieza-y-quimicos.png",
    slug: "productos-limpieza-quimicos",
    productoCount: 54
  },
  {
    id: "PAPELERIA",
    nombre: "Papelería e Higiene Institucional",
    descripcion: "Papel higiénico, toallas, servilletas y productos de higiene",
    imagen: "/images/categorias/papeleria-e-higiene-institucional.png",
    slug: "papeleria-higiene-institucional",
    productoCount: 68
  },
  {
    id: "BIO",
    nombre: "Productos Biodegradables y Ecológicos",
    descripcion: "Alternativas ecológicas y biodegradables para tu empresa",
    imagen: "/images/categorias/productos-biodegradables-y-ecologicos.png",
    slug: "productos-biodegradables-ecologicos",
    productoCount: 43
  },
  {
    id: "HOTEL",
    nombre: "Hotelería y Hospitalidad",
    descripcion: "Amenidades, textiles y productos para hoteles y servicios de hospitalidad",
    imagen: "/images/categorias/hoteleria-y-hospitalidad.jpg",
    slug: "hoteleria-hospitalidad",
    productoCount: 89
  },
  {
    id: "DESECHABLES",
    nombre: "Desechables y Food Service",
    descripcion: "Vasos, platos, cubiertos, contenedores y empaques desechables",
    imagen: "/images/categorias/desechables-y-food-service.png",
    slug: "desechables-empaques-food-service",
    productoCount: 154
  }
];

export const TOTAL_PRODUCTOS = CATEGORIAS_CATALOGO.reduce((sum, cat) => sum + cat.productoCount, 0);

export function getCategoriaBySlug(slug: string): CategoriaProducto | undefined {
  return CATEGORIAS_CATALOGO.find(cat => cat.slug === slug);
}

export function getCategoriaById(id: string): CategoriaProducto | undefined {
  return CATEGORIAS_CATALOGO.find(cat => cat.id === id);
}
