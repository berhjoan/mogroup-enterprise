// ═══════════════════════════════════════════════════════════════
// 🚚 DATOS DE SERVICIOS MOGROUP
// ═══════════════════════════════════════════════════════════════

export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  slug: string;
}

export const SERVICIOS_MOGROUP: Servicio[] = [
  {
    id: "INSUMOS",
    nombre: "Venta de Insumos B2B",
    descripcion: "Suministros empresariales para tu negocio",
    imagen: "/servicios/insumos.png",
    slug: "venta-insumos"
  },
  {
    id: "TRANSPORTE",
    nombre: "Transporte y Logística",
    descripcion: "Soluciones de transporte confiables",
    imagen: "/servicios/transporte.png",
    slug: "transporte-logistica"
  },
  {
    id: "LOGISTICA",
    nombre: "Logística Integral",
    descripcion: "Gestión completa de tu cadena de suministro",
    imagen: "/servicios/logistica.png",
    slug: "logistica-integral"
  }
];

export function getServicioBySlug(slug: string): Servicio | undefined {
  return SERVICIOS_MOGROUP.find(s => s.slug === slug);
}
