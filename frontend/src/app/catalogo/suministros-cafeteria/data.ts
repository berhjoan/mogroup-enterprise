// ═══════════════════════════════════════════════════════════════════════════
// ☕ DATOS: SUMINISTROS DE CAFETERÍA
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

export const CATEGORIAS_CAFETERIA: Categoria[] = [
  {
    id: "CAFE_PREMIUM",
    nombre: "Café Premium",
    descripcion: "Café de alta calidad, grano entero y molido para máquinas empresariales",
    imagen: "/images/categorias/cafeteria/Café_Premium.png",
    slug: "cafe-premium",
    productoCount: 15,
    palabrasClave: [
      "café gourmet",
      "café premium",
      "café colombiano",
      "café orgánico",
      "café en grano",
      "café molido",
      "espresso"
    ]
  },
  {
    id: "TE_INFUSIONES",
    nombre: "Té e Infusiones",
    descripcion: "Amplia variedad de tés, infusiones y bebidas calientes para oficina",
    imagen: "/images/categorias/cafeteria/Té_e_infusiones.png",
    slug: "te-infusiones",
    productoCount: 12,
    palabrasClave: [
      "té negro",
      "té verde",
      "té herbal",
      "infusiones naturales",
      "manzanilla",
      "menta",
      "chai",
      "bolsitas de té"
    ]
  },
  {
    id: "AZUCAR_ENDULZANTES",
    nombre: "Azúcar y Endulzantes",
    descripcion: "Azúcar, edulcorantes naturales y artificiales en sobres y dispensadores",
    imagen: "/images/categorias/cafeteria/Azúcar_y_Endulzantes.png",
    slug: "azucar-endulzantes",
    productoCount: 8,
    palabrasClave: [
      "azúcar blanca",
      "azúcar morena",
      "stevia",
      "splenda",
      "edulcorante",
      "sobres de azúcar",
      "azúcar orgánica"
    ]
  },
  {
    id: "CREMAS_LECHE",
    nombre: "Cremas y Leche",
    descripcion: "Cremas para café, leche en polvo y alternativas vegetales",
    imagen: "/images/categorias/cafeteria/Cremas_y_Leche.png",
    slug: "cremas-leche",
    productoCount: 10,
    palabrasClave: [
      "creamer",
      "crema para café",
      "leche en polvo",
      "leche de almendras",
      "leche de soya",
      "leche deslactosada",
      "crema líquida"
    ]
  },
  {
    id: "COMPLEMENTOS_SNACKS",
    nombre: "Complementos y Snacks",
    descripcion: "Galletas, cookies, brownies y snacks para acompañar el café",
    imagen: "/images/categorias/cafeteria/Complementos_y_Snacks.png",
    slug: "complementos-snacks",
    productoCount: 20,
    palabrasClave: [
      "galletas",
      "cookies",
      "brownies",
      "muffins",
      "snacks dulces",
      "snacks salados",
      "barras de cereal"
    ]
  }
];

export const TOTAL_PRODUCTOS_CAFETERIA = CATEGORIAS_CAFETERIA.reduce((sum, cat) => sum + cat.productoCount, 0);

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return CATEGORIAS_CAFETERIA.find(cat => cat.slug === slug);
}

