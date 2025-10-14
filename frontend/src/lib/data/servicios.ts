// ═══════════════════════════════════════════════════════════════════════════
// 🚛 DATOS DE SERVICIOS MOGROUP
// Actualizado: 2025-10-08
// ═══════════════════════════════════════════════════════════════════════════

export interface Servicio {
  id: string;
  nombre: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  icono: string;
  imagen: string;
  slug: string;
  caracteristicas: string[];
  beneficios: string[];
  tipoCliente: string[];
}

export const SERVICIOS_PRINCIPALES: Servicio[] = [
  {
    id: "TRANSPORTE",
    nombre: "Transporte",
    titulo: "Transporte de Carga Especializado",
    descripcionCorta: "Soluciones de transporte terrestre confiables y eficientes para empresas en todo Panamá",
    descripcionLarga: "En MOGROUP ofrecemos servicios de transporte de carga con trazabilidad completa, flota moderna y conductores certificados. Garantizamos entregas puntuales y seguras para tu operación.",
    icono: "🚛",
    imagen: "/images/servicios/transporte.jpg",
    slug: "transporte",
    caracteristicas: [
      "Flota moderna y diversificada",
      "Conductores certificados y con experiencia",
      "Trazabilidad GPS en tiempo real",
      "Seguro de carga incluido",
      "Entregas 24/7",
      "Cobertura nacional"
    ],
    beneficios: [
      "Reducción de costos operativos",
      "Mayor eficiencia en tiempos de entrega",
      "Trazabilidad completa de tus envíos",
      "Atención personalizada"
    ],
    tipoCliente: ["Empresas B2B", "Distribuidores", "Mayoristas", "Industrias"]
  },
  {
    id: "LOGISTICA",
    nombre: "Logística",
    titulo: "Logística Integral para Empresas",
    descripcionCorta: "Gestión completa de tu cadena de suministro con tecnología de punta",
    descripcionLarga: "Optimizamos tu cadena de suministro con soluciones logísticas integrales: almacenamiento, distribución, control de inventarios y gestión de rutas para maximizar tu eficiencia operativa.",
    icono: "📦",
    imagen: "/images/servicios/logistica.jpg",
    slug: "logistica",
    caracteristicas: [
      "Almacenamiento seguro",
      "Control de inventarios en tiempo real",
      "Gestión de rutas optimizada",
      "Cross-docking especializado",
      "Fulfillment completo",
      "Reportes y analítica avanzada"
    ],
    beneficios: [
      "Mayor control sobre tu inventario",
      "Reducción de costos de almacenaje",
      "Optimización de rutas de distribución",
      "Escalabilidad según tu demanda"
    ],
    tipoCliente: ["E-commerce", "Distribuidores", "Importadores", "Retail"]
  },
  {
    id: "INSUMOS",
    nombre: "Insumos B2B",
    titulo: "Suministro de Insumos Empresariales",
    descripcionCorta: "Más de 500 productos para tu empresa: limpieza, oficina, EPP, cafetería y más",
    descripcionLarga: "Proveemos insumos de calidad para empresas con un catálogo de más de 500 productos. Sistema de cotización inteligente que te conecta con los mejores proveedores sin que tengas que buscarlos uno por uno.",
    icono: "🛒",
    imagen: "/images/servicios/insumos.jpg",
    slug: "insumos",
    caracteristicas: [
      "Catálogo de 500+ productos",
      "Sistema de cotización automatizado",
      "Comparación de precios transparente",
      "Entregas programadas",
      "Facturación consolidada",
      "Gestión de múltiples proveedores"
    ],
    beneficios: [
      "Ahorro de tiempo en compras",
      "Mejores precios por volumen",
      "Un solo proveedor para múltiples categorías",
      "Trazabilidad total de pedidos"
    ],
    tipoCliente: ["Hoteles", "Oficinas", "Hospitales", "Restaurantes", "Industrias"]
  }
];

export const SERVICIOS_SECUNDARIOS: Servicio[] = [
  {
    id: "JARDINERIA",
    nombre: "Jardinería",
    titulo: "Servicios de Jardinería Profesional",
    descripcionCorta: "Mantenimiento de áreas verdes para empresas y condominios",
    descripcionLarga: "Mantenemos tus espacios verdes en perfecto estado con un equipo profesional y equipos especializados.",
    icono: "🌿",
    imagen: "/images/servicios/jardineria.jpg",
    slug: "jardineria",
    caracteristicas: [
      "Mantenimiento preventivo",
      "Poda y limpieza",
      "Control de plagas",
      "Diseño paisajístico"
    ],
    beneficios: [
      "Espacios verdes siempre impecables",
      "Equipo profesional certificado",
      "Contratos flexibles"
    ],
    tipoCliente: ["Condominios", "Empresas", "Hoteles"]
  },
  {
    id: "MODIFICACIONES",
    nombre: "Modificaciones y Estructura",
    titulo: "Servicios de Soldadura y Modificaciones",
    descripcionCorta: "Trabajos de soldadura, estructuras metálicas y modificaciones industriales",
    descripcionLarga: "Realizamos trabajos de soldadura, instalación de estructuras metálicas y modificaciones a medida para tu empresa.",
    icono: "🔧",
    imagen: "/images/servicios/modificaciones.jpg",
    slug: "modificaciones",
    caracteristicas: [
      "Soldadura certificada",
      "Estructuras metálicas a medida",
      "Instalaciones industriales",
      "Mantenimiento de equipos"
    ],
    beneficios: [
      "Trabajos certificados",
      "Cumplimiento de normativas",
      "Personal especializado"
    ],
    tipoCliente: ["Industrias", "Construcción", "Empresas"]
  },
  {
    id: "SOFTWARE",
    nombre: "Diseño de Software",
    titulo: "Desarrollo de Software Empresarial",
    descripcionCorta: "Creamos sistemas a medida para digitalizar tu empresa",
    descripcionLarga: "Desarrollamos MOGROUP-ENTERPRISE OS, nuestro sistema CRM/ERP con IA. Ahora lo ponemos a tu disposición para digitalizar tu negocio con tecnología de punta.",
    icono: "💻",
    imagen: "/images/servicios/software.jpg",
    slug: "software",
    caracteristicas: [
      "CRM/ERP con IA integrada",
      "Sistemas a medida",
      "Aplicaciones web y móviles",
      "Automatización de procesos",
      "Integración con APIs",
      "Soporte técnico 24/7"
    ],
    beneficios: [
      "Digitalización completa",
      "Reducción de costos operativos",
      "Mayor productividad",
      "Escalabilidad garantizada"
    ],
    tipoCliente: ["Empresas B2B", "Startups", "Pymes", "Corporaciones"]
  }
];

export const TODOS_LOS_SERVICIOS = [...SERVICIOS_PRINCIPALES, ...SERVICIOS_SECUNDARIOS];

export function getServicioBySlug(slug: string): Servicio | undefined {
  return TODOS_LOS_SERVICIOS.find(s => s.slug === slug);
}
