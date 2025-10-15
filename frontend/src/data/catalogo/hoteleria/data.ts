// ═══════════════════════════════════════════════════════════════
// 📦 CATÁLOGO COMPLETO: HOTELERÍA Y HOSPITALIDAD - MOGROUP
// Total de productos: 52
// Última actualización: 14 14e octubre, 2025 12:17:41
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
  colorPrimario: string;
  colorSecundario: string;
  imagen?: string;
}

// ═══════════════════════════════════════════════════════════════
// CATEGORÍA: AMENIDADES DE BAÑO (10 productos)
// ═══════════════════════════════════════════════════════════════

const amenidades_de_ba_o_productos: Producto[] = [
  {
    id: "acondicionador-botella-30ml",
    nombre: "Acondicionador Botella 30Ml",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/amenidades_de_baño/acondicionador-botella-30ml.png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  },
  {
    id: "acondicionador-sobre",
    nombre: "Acondicionador Sobre",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/amenidades_de_baño/acondicionador-sobre.png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  },
  {
    id: "gel-de-baño-sobre hotel-10ml",
    nombre: "Gel De Baño Sobre Hotel 10Ml",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/amenidades_de_baño/Gel-de-Baño-Sobre Hotel-10ml.png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  },
  {
    id: "gemini_generated_image_50463r50463r5046 (4)",
    nombre: "Gemini Generated Image 50463R50463r5046 (4)",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/amenidades_de_baño/Gemini_Generated_Image_50463r50463r5046 (4).png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  },
  {
    id: "jabon-de-barras-15gramos",
    nombre: "Jabon De Barras 15Gramos",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/amenidades_de_baño/jabon-de-barras-15gramos.png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  },
  {
    id: "jabon-de-barras-20gramos",
    nombre: "Jabon De Barras 20Gramos",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/amenidades_de_baño/jabon-de-barras-20gramos.png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  },
  {
    id: "kits-de-baño",
    nombre: "Kits De Baño",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/amenidades_de_baño/kits-de-baño.png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  },
  {
    id: "shampoo-botella-hotel-30ml",
    nombre: "Shampoo Botella Hotel 30Ml",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/amenidades_de_baño/Shampoo-Botella-Hotel-30ml.png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  },
  {
    id: "acondicionador-botella-30ml",
    nombre: "Acondicionador Botella 30Ml",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/hoteleria/productos/amenidades_de_baño/acondicionador-botella-30ml.png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  },
  {
    id: "acondicionador-sobre",
    nombre: "Acondicionador Sobre",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/hoteleria/productos/amenidades_de_baño/acondicionador-sobre.png",
    palabrasClave: ["hotel", "hospitalidad", "amenidades de baño"]
  }
];

// ═══════════════════════════════════════════════════════════════
// CATEGORÍA: CAFETERIA (10 productos)
// ═══════════════════════════════════════════════════════════════

const cafeteria_productos: Producto[] = [
  {
    id: "azúcar_y_endulzantes",
    nombre: "Azúcar Y Endulzantes",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/cafeteria/azucar-y-endulzantes.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  },
  {
    id: "café_premium",
    nombre: "Café Premium",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/cafeteria/cafe-premium.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  },
  {
    id: "complementos_y_snacks",
    nombre: "Complementos Y Snacks",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/cafeteria/complementos-y-snacks.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  },
  {
    id: "cremas_y_leche",
    nombre: "Cremas Y Leche",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/cafeteria/cremas-y-leche.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  },
  {
    id: "té_e_infusiones",
    nombre: "Té E Infusiones",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/cafeteria/te-e-infusiones.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  },
  {
    id: "azúcar_y_endulzantes",
    nombre: "Azúcar Y Endulzantes",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/cafeteria/azucar-y-endulzantes.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  },
  {
    id: "café_premium",
    nombre: "Café Premium",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/cafeteria/cafe-premium.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  },
  {
    id: "complementos_y_snacks",
    nombre: "Complementos Y Snacks",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/cafeteria/complementos-y-snacks.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  },
  {
    id: "cremas_y_leche",
    nombre: "Cremas Y Leche",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/cafeteria/cremas-y-leche.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  },
  {
    id: "té_e_infusiones",
    nombre: "Té E Infusiones",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/cafeteria/te-e-infusiones.png",
    palabrasClave: ["hotel", "hospitalidad", "cafeteria"]
  }
];

// ═══════════════════════════════════════════════════════════════
// CATEGORÍA: CATEGORIAS (10 productos)
// ═══════════════════════════════════════════════════════════════

const categorias_productos: Producto[] = [
  {
    id: "bolsas_y_manejo_de_residuos",
    nombre: "Bolsas Y Manejo De Residuos",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/bolsas-y-manejo-de-residuos.png",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  },
  {
    id: "desechables_y_food_service",
    nombre: "Desechables Y Food Service",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/desechables-y-food-service.png",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  },
  {
    id: "equipos_de_limpieza_y_mantenimiento",
    nombre: "Equipos De Limpieza Y Mantenimiento",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/equipos-de-limpieza-y-mantenimiento.png",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  },
  {
    id: "equipos_de_protección_personal_(epp)",
    nombre: "Equipos De Protección Personal (Epp)",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/equipos-de-proteccion-personal-epp.png",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  },
  {
    id: "hotelería_y_hospitalidad",
    nombre: "Hotelería Y Hospitalidad",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria-y-hospitalidad.jpg",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  },
  {
    id: "papeleria_e_higiene_institucional",
    nombre: "Papeleria E Higiene Institucional",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/papeleria-e-higiene-institucional.png",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  },
  {
    id: "productos_biodegradables_y_ecológicos",
    nombre: "Productos Biodegradables Y Ecológicos",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/productos-biodegradables-y-ecologicos.png",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  },
  {
    id: "productos_de_limpieza_y_quimicos",
    nombre: "Productos De Limpieza Y Quimicos",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/productos-de-limpieza-y-quimicos.png",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  },
  {
    id: "suministros_de_cafetería",
    nombre: "Suministros De Cafetería",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/suministros-de-cafeteria.png",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  },
  {
    id: "suministros_de_oficina",
    nombre: "Suministros De Oficina",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/suministros-de-oficina.png",
    palabrasClave: ["hotel", "hospitalidad", "categorias"]
  }
];

// ═══════════════════════════════════════════════════════════════
// CATEGORÍA: HOTELERIA (10 productos)
// ═══════════════════════════════════════════════════════════════

const hoteleria_productos: Producto[] = [
  {
    id: "accesorios_y_complementos",
    nombre: "Accesorios Y Complementos",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/accesorios-y-complementos.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  },
  {
    id: "almohadas_y_ropa_de_cama_premium",
    nombre: "Almohadas Y Ropa De Cama Premium",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/almohadas-y-ropa-de-cama-premium.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  },
  {
    id: "amenidades_de_baño",
    nombre: "Amenidades De Baño",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/amenidades-de-bano.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  },
  {
    id: "kits_de_higiene_personal",
    nombre: "Kits De Higiene Personal",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/kits-de-higiene-personal.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  },
  {
    id: "textiles_para_habitación",
    nombre: "Textiles Para Habitación",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/textiles-para-habitacion.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  },
  {
    id: "toallas_y_batas",
    nombre: "Toallas Y Batas",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/toallas-y-batas.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  },
  {
    id: "accesorios_y_complementos",
    nombre: "Accesorios Y Complementos",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/hoteleria/accesorios-y-complementos.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  },
  {
    id: "almohadas_y_ropa_de_cama_premium",
    nombre: "Almohadas Y Ropa De Cama Premium",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/hoteleria/almohadas-y-ropa-de-cama-premium.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  },
  {
    id: "amenidades_de_baño",
    nombre: "Amenidades De Baño",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/hoteleria/amenidades-de-bano.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  },
  {
    id: "kits_de_higiene_personal",
    nombre: "Kits De Higiene Personal",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/hoteleria/kits-de-higiene-personal.png",
    palabrasClave: ["hotel", "hospitalidad", "hoteleria"]
  }
];

// ═══════════════════════════════════════════════════════════════
// CATEGORÍA: IMAGES (2 productos)
// ═══════════════════════════════════════════════════════════════

const images_productos: Producto[] = [
  {
    id: "imagen1",
    nombre: "Imagen1",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/imagen1.jpg",
    palabrasClave: ["hotel", "hospitalidad", "images"]
  },
  {
    id: "imagen1",
    nombre: "Imagen1",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/imagen1.png",
    palabrasClave: ["hotel", "hospitalidad", "images"]
  }
];

// ═══════════════════════════════════════════════════════════════
// CATEGORÍA: KITS DE HIGIENE PERSONAL (10 productos)
// ═══════════════════════════════════════════════════════════════

const kits_de_higiene_personal_productos: Producto[] = [
  {
    id: "cotones",
    nombre: "Cotones",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/Kits de Higiene Personal/cotones.png",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  },
  {
    id: "gorro",
    nombre: "Gorro",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/Kits de Higiene Personal/gorro.png",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  },
  {
    id: "kits_afeitar_hotel",
    nombre: "Kits Afeitar Hotel",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/Kits de Higiene Personal/kits_afeitar_hotel.png",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  },
  {
    id: "kits_costura",
    nombre: "Kits Costura",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/Kits de Higiene Personal/kits_costura.jpg",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  },
  {
    id: "kits_dental_completo",
    nombre: "Kits Dental Completo",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/Kits de Higiene Personal/kits_dental_completo.png",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  },
  {
    id: "lima_para_uñas",
    nombre: "Lima Para Uñas",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/Kits de Higiene Personal/lima_para_uñas.png",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  },
  {
    id: "peine_individual_hotel",
    nombre: "Peine Individual Hotel",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/Kits de Higiene Personal/peine_individual_hotel.png",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  },
  {
    id: "ungeto_mentolado",
    nombre: "Ungeto Mentolado",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/categorias/hoteleria/productos/Kits de Higiene Personal/ungeto_mentolado.png",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  },
  {
    id: "cotones",
    nombre: "Cotones",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/hoteleria/productos/Kits de Higiene Personal/cotones.png",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  },
  {
    id: "gorro",
    nombre: "Gorro",
    descripcion: "Producto premium para hoteles y establecimientos de hospitalidad de alta calidad",
    imagen: "/images/categorias/hoteleria/productos/Kits de Higiene Personal/gorro.png",
    palabrasClave: ["hotel", "hospitalidad", "kits de higiene personal"]
  }
];

// ═══════════════════════════════════════════════════════════════
// EXPORTAR TODAS LAS CATEGORÍAS
// ═══════════════════════════════════════════════════════════════

export const CATEGORIAS_HOTELERIA: Categoria[] = [
  {
    id: "amenidades-de-ba-o",
    nombre: "Amenidades De Baño",
    descripcion: "Productos premium de amenidades de baño para hoteles de alta calidad",
    slug: "amenidades-de-ba-o",
    productos: amenidades_de_ba_o_productos,
    productoCount: 10,
    colorPrimario: "blue",
    colorSecundario: "cyan"
  },
  {
    id: "cafeteria",
    nombre: "Cafeteria",
    descripcion: "Productos premium de cafeteria para hoteles de alta calidad",
    slug: "cafeteria",
    productos: cafeteria_productos,
    productoCount: 10,
    colorPrimario: "blue",
    colorSecundario: "cyan"
  },
  {
    id: "categorias",
    nombre: "Categorias",
    descripcion: "Productos premium de categorias para hoteles de alta calidad",
    slug: "categorias",
    productos: categorias_productos,
    productoCount: 10,
    colorPrimario: "blue",
    colorSecundario: "cyan"
  },
  {
    id: "hoteleria",
    nombre: "Hoteleria",
    descripcion: "Productos premium de hoteleria para hoteles de alta calidad",
    slug: "hoteleria",
    productos: hoteleria_productos,
    productoCount: 10,
    colorPrimario: "blue",
    colorSecundario: "cyan"
  },
  {
    id: "images",
    nombre: "Images",
    descripcion: "Productos premium de images para hoteles de alta calidad",
    slug: "images",
    productos: images_productos,
    productoCount: 2,
    colorPrimario: "blue",
    colorSecundario: "cyan"
  },
  {
    id: "kits-de-higiene-personal",
    nombre: "Kits De Higiene Personal",
    descripcion: "Productos premium de kits de higiene personal para hoteles de alta calidad",
    slug: "kits-de-higiene-personal",
    productos: kits_de_higiene_personal_productos,
    productoCount: 10,
    colorPrimario: "blue",
    colorSecundario: "cyan"
  }
];

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return CATEGORIAS_HOTELERIA.find(cat => cat.slug === slug);
}

export function getAllCategorias(): Categoria[] {
  return CATEGORIAS_HOTELERIA;
}

export function getTotalProductos(): number {
  return CATEGORIAS_HOTELERIA.reduce((total, cat) => total + cat.productoCount, 0);
}


