// ═══════════════════════════════════════════════════════════════════════════
// ♻️ DATOS: Bolsas y Manejo de Residuos
// Generado: 2025-10-08
// ═══════════════════════════════════════════════════════════════════════════

export interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  slug: string;
  productoCount: number;
  palabrasClave: string[];
}

export const CATEGORIAS_BOLSAS_RESIDUOS: Categoria[] = [
  {
    id: "BOLSAS_BASURA",
    nombre: "Bolsas de Basura",
    descripcion: "Bolsas de baja y alta densidad en diferentes tamaños, desde 15 hasta 60 galones",
    imagen: "/images/categorias/bolsas-residuos/Bolsas_de_Basura.png",
    slug: "bolsas-basura",
    productoCount: 25,
    palabrasClave: [
      "bolsa basura negra",
      "45 galones",
      "55 galones",
      "60 galones",
      "alta densidad",
      "baja densidad",
      "transparente",
      "blanca"
    ]
  },
  {
    id: "BOLSAS_PELIGROSOS",
    nombre: "Bolsas para Residuos Peligrosos",
    descripcion: "Bolsas rojas RPBI, amarillas punzocortantes y especiales para desechos biológicos",
    imagen: "/images/categorias/bolsas-residuos/Bolsas_Peligrosos.png",
    slug: "bolsas-peligrosos",
    productoCount: 12,
    palabrasClave: [
      "bolsa roja",
      "desechos peligrosos",
      "biológico",
      "RPBI",
      "bolsa amarilla",
      "punzocortantes",
      "patológicos"
    ]
  },
  {
    id: "BOLSAS_BIODEGRADABLES",
    nombre: "Bolsas Biodegradables",
    descripcion: "Bolsas oxo-biodegradables, compostables y ecológicas para gestión ambiental",
    imagen: "/images/categorias/bolsas-residuos/Bolsas_Biodegradables.png",
    slug: "bolsas-biodegradables",
    productoCount: 15,
    palabrasClave: [
      "biodegradable",
      "oxo",
      "verde",
      "ecológica",
      "compostable",
      "maíz",
      "biodegradable"
    ]
  },
  {
    id: "BOLSAS_PLASTICAS",
    nombre: "Bolsas Plásticas Comerciales",
    descripcion: "Bolsas tipo camiseta, rollo, ziploc y multiusos en diferentes tamaños",
    imagen: "/images/categorias/bolsas-residuos/Bolsas_Plasticas.png",
    slug: "bolsas-plasticas",
    productoCount: 20,
    palabrasClave: [
      "bolsa camiseta",
      "t-shirt",
      "blanca",
      "negra",
      "rollo",
      "frutas",
      "verduras",
      "ziploc",
      "sandwich"
    ]
  },
  {
    id: "CONTENEDORES",
    nombre: "Contenedores y Accesorios",
    descripcion: "Botes de basura, contenedores de reciclaje y accesorios complementarios",
    imagen: "/images/categorias/bolsas-residuos/Contenedores.png",
    slug: "contenedores",
    productoCount: 17,
    palabrasClave: [
      "bote basura",
      "contenedor",
      "reciclaje",
      "basurero",
      "tapa",
      "pedal",
      "ruedas"
    ]
  }
];

export const TOTAL_PRODUCTOS_RESIDUOS = CATEGORIAS_BOLSAS_RESIDUOS.reduce((sum, cat) => sum + cat.productoCount, 0);

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return CATEGORIAS_BOLSAS_RESIDUOS.find(cat => cat.slug === slug);
}

