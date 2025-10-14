// ══════════════════════════════════════════════════════════════════════
// 🏨 CATÁLOGO COMPLETO: HOTELERÍA Y HOSPITALIDAD - MOGROUP
// Total de productos: 71 productos organizados en 6 categorías
// Última actualización: 08 de Octubre 2025
// ══════════════════════════════════════════════════════════════════════

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  palabrasClave: string[];
  imagen: string;
  categoriaId: string;
  especificaciones?: {
    tamaño?: string;
    material?: string;
    peso?: string;
    dimensiones?: string;
    contenido?: string;
  };
}

export interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  slug: string;
  productoCount: number;
  colorPrimario: string;
  colorSecundario: string;
  productos: Producto[];
}

// ══════════════════════════════════════════════════════════════════════
// CATEGORÍA 1: AMENIDADES DE BAÑO (9 productos)
// ══════════════════════════════════════════════════════════════════════

const AMENIDADES_BAÑO: Categoria = {
  id: "AMENIDADES_BAÑO",
  nombre: "Amenidades de Baño",
  descripcion: "Productos de higiene personal de alta calidad para habitaciones de hotel",
  imagen: "/images/categorias/hoteleria/Amenidades_de_Baño.png",
  slug: "amenidades-bano",
  productoCount: 9,
  colorPrimario: "blue",
  colorSecundario: "cyan",
  productos: [
    {
      id: "JABON_BARRA_15G",
      nombre: "Jabón en Barra Hotel 15g",
      descripcion: "Jabón en barra premium para amenidad hotelera, presentación individual de 15 gramos con envoltura elegante",
      palabrasClave: ["jabón", "barra", "hotel", "amenidad", "15g"],
      imagen: "/images/categorias/hoteleria/productos/jabon-barra-15g.jpg",
      categoriaId: "AMENIDADES_BAÑO",
      especificaciones: { tamaño: "15g", material: "Jabón de tocador premium" }
    },
    {
      id: "JABON_BARRA_20G",
      nombre: "Jabón en Barra Hotel 20g",
      descripcion: "Jabón en barra premium para amenidad hotelera, presentación individual de 20 gramos con mayor duración",
      palabrasClave: ["jabón", "barra", "hotel", "amenidad", "20g"],
      imagen: "/images/categorias/hoteleria/productos/jabon-barra-20g.jpg",
      categoriaId: "AMENIDADES_BAÑO",
      especificaciones: { tamaño: "20g", material: "Jabón de tocador premium" }
    },
    {
      id: "SHAMPOO_SOBRE_10ML",
      nombre: "Shampoo Sobre Hotel 10ml",
      descripcion: "Shampoo en sobre monodosis para amenidades hoteleras, presentación práctica de 10ml",
      palabrasClave: ["shampoo", "sobre", "hotel", "amenidad", "10ml"],
      imagen: "/images/categorias/hoteleria/productos/shampoo-sobre-10ml.jpg",
      categoriaId: "AMENIDADES_BAÑO",
      especificaciones: { tamaño: "10ml", contenido: "Shampoo monodosis" }
    },
    {
      id: "SHAMPOO_BOTELLA_30ML",
      nombre: "Shampoo Botella Hotel 30ml",
      descripcion: "Shampoo en botella para amenidades hoteleras, presentación elegante de 30ml",
      palabrasClave: ["shampoo", "botella", "hotel", "amenidad", "30ml"],
      imagen: "/images/categorias/hoteleria/productos/shampoo-botella-30ml.jpg",
      categoriaId: "AMENIDADES_BAÑO",
      especificaciones: { tamaño: "30ml", material: "Botella PET" }
    },
    {
      id: "ACONDICIONADOR_SOBRE_10ML",
      nombre: "Acondicionador Sobre Hotel 10ml",
      descripcion: "Acondicionador en sobre monodosis para amenidades hoteleras, 10ml de suavidad",
      palabrasClave: ["acondicionador", "sobre", "hotel", "10ml"],
      imagen: "/images/categorias/hoteleria/productos/acondicionador-sobre-10ml.jpg",
      categoriaId: "AMENIDADES_BAÑO",
      especificaciones: { tamaño: "10ml", contenido: "Acondicionador monodosis" }
    },
    {
      id: "ACONDICIONADOR_BOTELLA_30ML",
      nombre: "Acondicionador Botella Hotel 30ml",
      descripcion: "Acondicionador en botella para amenidades hoteleras, 30ml en presentación premium",
      palabrasClave: ["acondicionador", "botella", "hotel", "30ml"],
      imagen: "/images/categorias/hoteleria/productos/acondicionador-botella-30ml.jpg",
      categoriaId: "AMENIDADES_BAÑO",
      especificaciones: { tamaño: "30ml", material: "Botella PET" }
    },
    {
      id: "GEL_BAÑO_SOBRE_10ML",
      nombre: "Gel de Baño Sobre Hotel 10ml",
      descripcion: "Gel de baño en sobre monodosis para amenidades hoteleras, 10ml refrescante",
      palabrasClave: ["gel baño", "sobre", "hotel", "amenidad", "10ml"],
      imagen: "/images/categorias/hoteleria/productos/gel-baño-sobre-10ml.jpg",
      categoriaId: "AMENIDADES_BAÑO",
      especificaciones: { tamaño: "10ml", contenido: "Gel de baño monodosis" }
    },
    {
      id: "KIT_BAÑO_3EN1",
      nombre: "Kit de Baño 3 en 1 Hotel",
      descripcion: "Kit completo 3 en 1 con shampoo, acondicionador y gel de baño para amenidades hoteleras",
      palabrasClave: ["kit baño", "3 en 1", "hotel", "amenidades"],
      imagen: "/images/categorias/hoteleria/productos/kit-baño-3en1.jpg",
      categoriaId: "AMENIDADES_BAÑO",
      especificaciones: { contenido: "Shampoo + Acondicionador + Gel de baño" }
    },
    {
      id: "CREMA_CORPORAL_10ML",
      nombre: "Crema Corporal Loción Hotel 10ml",
      descripcion: "Loción corporal hidratante para amenidades hoteleras, 10ml de suavidad para la piel",
      palabrasClave: ["crema corporal", "loción", "hotel", "10ml"],
      imagen: "/images/categorias/hoteleria/productos/crema-corporal-10ml.jpg",
      categoriaId: "AMENIDADES_BAÑO",
      especificaciones: { tamaño: "10ml", contenido: "Loción hidratante" }
    }
  ]
};

// ══════════════════════════════════════════════════════════════════════
// CATEGORÍA 2: KITS DE HIGIENE PERSONAL (8 productos)
// ══════════════════════════════════════════════════════════════════════

const KITS_HIGIENE: Categoria = {
  id: "KITS_HIGIENE",
  nombre: "Kits de Higiene Personal",
  descripcion: "Kits completos y accesorios de higiene personal para huéspedes",
  imagen: "/images/categorias/hoteleria/Kits_de_Higiene_Personal.png",
  slug: "kits-higiene",
  productoCount: 8,
  colorPrimario: "emerald",
  colorSecundario: "teal",
  productos: [
    {
      id: "KIT_DENTAL",
      nombre: "Kit Dental Completo Hotel",
      descripcion: "Kit dental completo con cepillo de dientes y pasta dental para hotel, higiene bucal garantizada",
      palabrasClave: ["kit dental", "cepillo", "pasta", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/kit-dental.jpg",
      categoriaId: "KITS_HIGIENE",
      especificaciones: { contenido: "Cepillo de dientes + Pasta dental" }
    },
    {
      id: "KIT_AFEITAR",
      nombre: "Kit de Afeitar Hotel",
      descripcion: "Kit de afeitar con rastrillo desechable y crema para hotel, afeitado suave profesional",
      palabrasClave: ["kit afeitar", "rastrillo", "crema", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/kit-afeitar.jpg",
      categoriaId: "KITS_HIGIENE",
      especificaciones: { contenido: "Rastrillo desechable + Crema de afeitar" }
    },
    {
      id: "PEINE_INDIVIDUAL",
      nombre: "Peine Individual Hotel",
      descripcion: "Peine individual desechable para amenidades hoteleras, diseño ergonómico y práctico",
      palabrasClave: ["peine", "individual", "hotel", "amenidad"],
      imagen: "/images/categorias/hoteleria/productos/peine-individual.jpg",
      categoriaId: "KITS_HIGIENE",
      especificaciones: { material: "Plástico de alta calidad" }
    },
    {
      id: "UNGUENTO_MENTOLADO",
      nombre: "Ungüento Mentolado",
      descripcion: "Bálsamo mentolado individual para alivio y confort de huéspedes, refrescante",
      palabrasClave: ["UNGÜENTO MENTOLADO"],
      imagen: "/images/categorias/hoteleria/productos/unguento-mentolado.jpg",
      categoriaId: "KITS_HIGIENE",
      especificaciones: { contenido: "Bálsamo mentolado individual" }
    },
    {
      id: "GORRO_BAÑO",
      nombre: "Gorro de Baño Desechable",
      descripcion: "Gorro de baño desechable impermeable para ducha en hotel, protección total del cabello",
      palabrasClave: ["gorro baño", "ducha", "hotel", "desechable"],
      imagen: "/images/categorias/hoteleria/productos/gorro-baño.jpg",
      categoriaId: "KITS_HIGIENE",
      especificaciones: { material: "Plástico impermeable" }
    },
    {
      id: "COTONETES_HISOPOS",
      nombre: "Cotonetes Hisopos Hotel",
      descripcion: "Cotonetes e hisopos de algodón en empaque individual para hotel",
      palabrasClave: ["cotonetes", "hisopos", "hotel", "algodón"],
      imagen: "/images/categorias/hoteleria/productos/cotonetes-hisopos.jpg",
      categoriaId: "KITS_HIGIENE",
      especificaciones: { material: "Algodón 100%" }
    },
    {
      id: "LIMA_UÑAS",
      nombre: "Lima de Uñas Individual",
      descripcion: "Lima de uñas de cartón individual para amenidades hoteleras, práctica y efectiva",
      palabrasClave: ["lima uñas", "individual", "hotel", "cartón"],
      imagen: "/images/categorias/hoteleria/productos/lima-uñas.jpg",
      categoriaId: "KITS_HIGIENE",
      especificaciones: { material: "Cartón emery" }
    },
    {
      id: "KIT_COSTURA",
      nombre: "Kit de Costura Hotel",
      descripcion: "Kit de costura completo con agujas, hilos y botones para hotel, solución a emergencias",
      palabrasClave: ["kit costura", "agujas", "hilos", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/kit-costura.jpg",
      categoriaId: "KITS_HIGIENE",
      especificaciones: { contenido: "Agujas + Hilos + Botones + Alfiler" }
    }
  ]
};

// ══════════════════════════════════════════════════════════════════════
// CATEGORÍA 3: TEXTILES PARA HABITACIÓN (8 productos)
// ══════════════════════════════════════════════════════════════════════

const TEXTILES_HABITACION: Categoria = {
  id: "TEXTILES_HABITACION",
  nombre: "Textiles para Habitación",
  descripcion: "Ropa de cama y textiles de alta calidad hotelera, sábanas y complementos",
  imagen: "/images/categorias/hoteleria/Textiles_para_Habitación.png",
  slug: "textiles-habitacion",
  productoCount: 8,
  colorPrimario: "purple",
  colorSecundario: "violet",
  productos: [
    {
      id: "SABANAS_INDIVIDUAL",
      nombre: "Sábanas Individual Blancas",
      descripcion: "Juego de sábanas blancas de microfibra para cama individual hotel",
      palabrasClave: ["sábanas", "individual", "hotel", "blancas"],
      imagen: "/images/categorias/hoteleria/productos/sabanas-individual.jpg",
      categoriaId: "TEXTILES_HABITACION",
      especificaciones: { tamaño: "Twin/Full", material: "Microfibra blanca" }
    },
    {
      id: "SABANAS_MATRIMONIAL",
      nombre: "Sábanas Matrimonial Blancas",
      descripcion: "Juego de sábanas blancas de microfibra para cama matrimonial hotel",
      palabrasClave: ["sábanas", "matrimonial", "hotel", "blancas"],
      imagen: "/images/categorias/hoteleria/productos/sabanas-matrimonial.jpg",
      categoriaId: "TEXTILES_HABITACION",
      especificaciones: { tamaño: "Queen", material: "Microfibra blanca" }
    },
    {
      id: "SABANAS_QUEEN",
      nombre: "Sábanas Queen Blancas Premium",
      descripcion: "Juego de sábanas blancas premium de microfibra para cama Queen hotel",
      palabrasClave: ["sábanas", "queen", "hotel", "blancas"],
      imagen: "/images/categorias/hoteleria/productos/sabanas-queen.jpg",
      categoriaId: "TEXTILES_HABITACION",
      especificaciones: { tamaño: "Queen", material: "Microfibra premium" }
    },
    {
      id: "SABANAS_KING",
      nombre: "Sábanas King Blancas Premium",
      descripcion: "Juego de sábanas blancas premium de microfibra para cama King hotel",
      palabrasClave: ["sábanas", "king", "hotel", "blancas"],
      imagen: "/images/categorias/hoteleria/productos/sabanas-king.jpg",
      categoriaId: "TEXTILES_HABITACION",
      especificaciones: { tamaño: "King", material: "Microfibra premium" }
    },
    {
      id: "FUNDAS_ALMOHADA",
      nombre: "Fundas de Almohada Estándar",
      descripcion: "Fundas de almohada de microfibra blancas en tamaños estándar hotel",
      palabrasClave: ["fundas", "almohada", "hotel", "estándar"],
      imagen: "/images/categorias/hoteleria/productos/fundas-almohada.jpg",
      categoriaId: "TEXTILES_HABITACION",
      especificaciones: { tamaño: "Estándar/Queen/King", material: "Microfibra" }
    },
    {
      id: "PANTUFLAS_DESECHABLES",
      nombre: "Pantuflas Desechables Hotel",
      descripcion: "Pantuflas o zapatillas desechables para comodidad de huéspedes en hotel",
      palabrasClave: ["pantuflas", "zapatillas", "hotel", "desechables"],
      imagen: "/images/categorias/hoteleria/productos/pantuflas-desechables.jpg",
      categoriaId: "TEXTILES_HABITACION",
      especificaciones: { material: "Material suave desechable" }
    },
    {
      id: "PANTUFLAS_TERRY",
      nombre: "Pantuflas Terry Hotel",
      descripcion: "Pantuflas de tela toalla terry, suaves y absorbentes para hotel",
      palabrasClave: ["pantuflas", "toalla", "hotel", "terry"],
      imagen: "/images/categorias/hoteleria/productos/pantuflas-terry.jpg",
      categoriaId: "TEXTILES_HABITACION",
      especificaciones: { material: "Tela toalla terry" }
    },
    {
      id: "CUBRE_ZAPATOS",
      nombre: "Cubre Zapatos Polietileno",
      descripcion: "Cubre zapatos desechables de polietileno para higiene en hotel",
      palabrasClave: ["cubre zapatos", "polietileno", "desechable"],
      imagen: "/images/categorias/hoteleria/productos/cubre-zapatos.jpg",
      categoriaId: "TEXTILES_HABITACION",
      especificaciones: { material: "Polietileno" }
    }
  ]
};

// ══════════════════════════════════════════════════════════════════════
// CATEGORÍA 4: TOALLAS Y BATAS (7 productos)
// ══════════════════════════════════════════════════════════════════════

const TOALLAS_BATAS: Categoria = {
  id: "TOALLAS_BATAS",
  nombre: "Toallas y Batas",
  descripcion: "Toallas 100% algodón y batas de baño hoteleras de máxima calidad y suavidad",
  imagen: "/images/categorias/hoteleria/Toallas_y_Batas.png",
  slug: "toallas-batas",
  productoCount: 7,
  colorPrimario: "rose",
  colorSecundario: "pink",
  productos: [
    {
      id: "TOALLAS_500G",
      nombre: "Toallas de Baño 500g Algodón",
      descripcion: "Toallas de baño 100% algodón de 500g, suaves y absorbentes, 27x50 pulgadas",
      palabrasClave: ["toallas", "baño", "hotel", "500g", "algodón"],
      imagen: "/images/categorias/hoteleria/productos/toallas-500g.jpg",
      categoriaId: "TOALLAS_BATAS",
      especificaciones: { peso: "500g", dimensiones: "27x50 pulgadas", material: "100% Algodón" }
    },
    {
      id: "TOALLAS_600G",
      nombre: "Toallas de Baño 600g Premium",
      descripcion: "Toallas de baño premium 100% algodón de 600g, máxima suavidad, 27x54 pulgadas",
      palabrasClave: ["toallas", "baño", "hotel", "600g", "premium"],
      imagen: "/images/categorias/hoteleria/productos/toallas-600g.jpg",
      categoriaId: "TOALLAS_BATAS",
      especificaciones: { peso: "600g", dimensiones: "27x54 pulgadas", material: "100% Algodón Premium" }
    },
    {
      id: "TOALLAS_MANOS",
      nombre: "Toallas de Manos 350g",
      descripcion: "Toallas de manos 100% algodón de 350g, tamaño 16x30 pulgadas para hotel",
      palabrasClave: ["toallas", "manos", "hotel", "350g"],
      imagen: "/images/categorias/hoteleria/productos/toallas-manos.jpg",
      categoriaId: "TOALLAS_BATAS",
      especificaciones: { peso: "350g", dimensiones: "16x30 pulgadas", material: "100% Algodón" }
    },
    {
      id: "TOALLAS_FACIAL",
      nombre: "Toallas Facial 250g",
      descripcion: "Toallas faciales 100% algodón de 250g, tamaño 13x13 pulgadas para hotel",
      palabrasClave: ["toallas", "facial", "hotel", "250g"],
      imagen: "/images/categorias/hoteleria/productos/toallas-facial.jpg",
      categoriaId: "TOALLAS_BATAS",
      especificaciones: { peso: "250g", dimensiones: "13x13 pulgadas", material: "100% Algodón" }
    },
    {
      id: "BATA_ALGODÓN",
      nombre: "Bata de Baño Algodón Terry",
      descripcion: "Bata de baño 100% algodón tipo Terry para hotel, tallas S/M y L/XL",
      palabrasClave: ["bata", "baño", "hotel", "algodón"],
      imagen: "/images/categorias/hoteleria/productos/bata-algodón.jpg",
      categoriaId: "TOALLAS_BATAS",
      especificaciones: { material: "100% Algodón Terry", tamaño: "S/M, L/XL" }
    },
    {
      id: "TAPETE_BAÑO",
      nombre: "Tapete de Baño Antideslizante",
      descripcion: "Tapete de baño antideslizante de algodón para seguridad en hotel",
      palabrasClave: ["tapete", "baño", "hotel", "antideslizante"],
      imagen: "/images/categorias/hoteleria/productos/tapete-baño.jpg",
      categoriaId: "TOALLAS_BATAS",
      especificaciones: { material: "Algodón con base antideslizante" }
    },
    {
      id: "CORTINA_BAÑO",
      nombre: "Cortina de Baño Impermeable",
      descripcion: "Cortina de baño impermeable de poliéster de alta calidad para hotel",
      palabrasClave: ["cortina", "baño", "impermeable", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/cortina-baño.jpg",
      categoriaId: "TOALLAS_BATAS",
      especificaciones: { material: "Poliéster impermeable" }
    }
  ]
};

// ══════════════════════════════════════════════════════════════════════
// CATEGORÍA 5: ALMOHADAS Y ROPA DE CAMA PREMIUM (28 productos Pandora)
// ══════════════════════════════════════════════════════════════════════

const ALMOHADAS_ROPA_CAMA: Categoria = {
  id: "ALMOHADAS_ROPA_CAMA",
  nombre: "Almohadas y Ropa de Cama Premium",
  descripcion: "Colección completa de almohadas hoteleras de lujo, protectores, toppers y ropa de cama de alta calidad",
  imagen: "/images/categorias/hoteleria/Almohadas_y_Ropa_de_cama_Premium.png",
  slug: "almohadas-ropa-cama",
  productoCount: 28,
  colorPrimario: "indigo",
  colorSecundario: "blue",
  productos: [
    // ALMOHADAS LÍNEA EXCLUSIVA
    {
      id: "ALMOHADA_MICROGEL_CUBICA",
      nombre: "Almohada Micro Gel Cúbica",
      descripcion: "Almohada de micro gel con diseño cuadrado único, soporte excelente y sensación suave",
      palabrasClave: ["almohada", "micro gel", "cúbica", "premium", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-microgel-cubica.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Queen, King", material: "Micro Gel" }
    },
    {
      id: "ALMOHADA_MICROGEL_CLASICA",
      nombre: "Almohada Micro Gel Clásica",
      descripcion: "Almohada clásica de micro gel con textura esponjosa extra suave, lujo hotelero",
      palabrasClave: ["almohada", "micro gel", "clásica", "lujo", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-microgel-clasica.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Queen, King", material: "Micro Gel Clásico" }
    },
    // ALMOHADAS LÍNEA HOTELERA
    {
      id: "ALMOHADA_LUXURY_EXTRA_SUAVE",
      nombre: "Almohada Luxury Extra Suave",
      descripcion: "Sensación extra suave ideal para un sueño hotelero de cinco estrellas",
      palabrasClave: ["almohada", "luxury", "extra suave", "cinco estrellas", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-luxury-extra-suave.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Estándar (45x65cm), Queen (50x70cm), King (50x90cm)" }
    },
    {
      id: "ALMOHADA_LUXURY_MIXTA_PLUMAS",
      nombre: "Almohada Luxury Mixta Plumas",
      descripcion: "Mezcla perfecta de fibra firme y plumas de ganso suaves, equilibrio perfecto",
      palabrasClave: ["almohada", "luxury", "plumas", "ganso", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-luxury-plumas.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Estándar, Queen, King", material: "Fibra + Plumas de ganso" }
    },
    {
      id: "ALMOHADA_LUXURY_SEMI_FIRME",
      nombre: "Almohada Luxury Semi Firme",
      descripcion: "Fibra sensación de pluma con soporte medio, calidad hotelera profesional",
      palabrasClave: ["almohada", "luxury", "semi firme", "soporte medio", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-luxury-semifirme.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Estándar, Queen, King" }
    },
    // ALMOHADAS LÍNEA ESPECIAL
    {
      id: "ALMOHADA_COOL",
      nombre: "Almohada Cool Enfriadora",
      descripcion: "Tela enfriadora que disipa calor y humedad, regula temperatura corporal",
      palabrasClave: ["almohada", "cool", "enfriadora", "fresca", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-cool.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Queen, King", material: "Tela cooling" }
    },
    {
      id: "ALMOHADA_NATURAL_MEMORY",
      nombre: "Almohada Natural Memory Foam",
      descripcion: "Tecnología Memory Foam, resistente a ácaros, sensación extra suave",
      palabrasClave: ["almohada", "natural", "memory foam", "ácaros", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-memory-foam.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Queen, King", material: "Memory Foam" }
    },
    {
      id: "ALMOHADA_FULL_BODY",
      nombre: "Almohada Full Body",
      descripcion: "Forma alargada para abrazar, apoyo a espalda, caderas y rodillas",
      palabrasClave: ["almohada", "full body", "embarazo", "apoyo", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-fullbody.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Alargada especial", material: "Fibra con funda 300 hilos" }
    },
    {
      id: "ALMOHADA_ORTOPEDICA",
      nombre: "Almohada Ortopédica Cervical",
      descripcion: "Diseño ergonómico para descanso reparador, reduce tensión en cuello",
      palabrasClave: ["almohada", "ortopédica", "cervical", "ergonómica", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-ortopedica.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Estándar", material: "Memory Foam ergonómico" }
    },
    // ALMOHADAS LÍNEA HOGAR
    {
      id: "ALMOHADA_CLASICA_HOGAR",
      nombre: "Almohada Clásica Fibra",
      descripcion: "Fibra siliconada con nivel óptimo de esponjosidad, apoyo semi firme",
      palabrasClave: ["almohada", "clásica", "fibra", "siliconada", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-clasica.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Estándar, Queen, King" }
    },
    {
      id: "ALMOHADA_PREMIUM_HOGAR",
      nombre: "Almohada Premium Fibra",
      descripcion: "Tela polycoton con soporte óptimo para cabeza y cuello",
      palabrasClave: ["almohada", "premium", "fibra", "polycoton", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-premium.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Estándar, Queen, King", material: "Polycoton" }
    },
    // ALMOHADAS DECORATIVAS
    {
      id: "ALMOHADA_EURO",
      nombre: "Almohada Euro Decorativa",
      descripcion: "Tamaño grande cuadrado ideal para decorar camas con toque elegante",
      palabrasClave: ["almohada", "euro", "decorativa", "cuadrada", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/almohada-euro.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "66x66 cm" }
    },
    {
      id: "RELLENO_COJIN",
      nombre: "Relleno de Cojín Decorativo",
      descripcion: "Relleno de cojín con fibras suaves, funcional y duradero",
      palabrasClave: ["cojín", "relleno", "decorativo", "fibra", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/relleno-cojin.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "45x45 cm" }
    },
    // PROTECTORES
    {
      id: "PROTECTOR_COLCHON_ACOLCHADO",
      nombre: "Protector de Colchón Acolchado",
      descripcion: "Capa de fibra para comodidad, tela microfibra suave, impermeable",
      palabrasClave: ["protector", "colchón", "acolchado", "impermeable", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/protector-acolchado.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin, Full, Queen, King" }
    },
    {
      id: "PROTECTOR_COLCHON_DELUXE",
      nombre: "Protector de Colchón Deluxe",
      descripcion: "Tela microfibra suave, para cualquier tipo de colchón",
      palabrasClave: ["protector", "colchón", "deluxe", "impermeable", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/protector-deluxe.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin, Full, Queen, King" }
    },
    {
      id: "PROTECTOR_ALMOHADA_VELCRO",
      nombre: "Protector de Almohada con Velcro",
      descripcion: "Protección impermeable con cierre de velcro, tela microfibra anti-ácaros",
      palabrasClave: ["protector", "almohada", "velcro", "impermeable", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/protector-almohada-velcro.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Estándar/Queen (51x74cm), King (51x94cm)" }
    },
    {
      id: "PROTECTOR_ALMOHADA_ZIPPER",
      nombre: "Protector de Almohada con Zipper",
      descripcion: "Protección impermeable con cierre escondido, descanso tranquilo",
      palabrasClave: ["protector", "almohada", "zipper", "impermeable", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/protector-almohada-zipper.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Estándar/Queen, King" }
    },
    // TOPPER
    {
      id: "TOPPER_HOTELERO",
      nombre: "Topper Hotelero 2 pulgadas",
      descripcion: "Topper de 2 pulgadas con 4 bandas de anclaje, costura acolchado elegante",
      palabrasClave: ["topper", "acolchado", "hotel", "confort", "suavidad"],
      imagen: "/images/categorias/hoteleria/productos/topper-hotelero.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin, Full, Queen, King", dimensiones: "2 pulgadas" }
    },
    // EDREDONES
    {
      id: "DUVET_ALGODÓN",
      nombre: "Duvet Edredón de Algodón",
      descripcion: "Edredón 100% algodón con costura capitonada, distribución uniforme",
      palabrasClave: ["duvet", "edredón", "algodón", "capitonado", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/duvet-algodón.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Full (208x229cm), Queen (229x229cm), King (267x229cm)" }
    },
    {
      id: "DUVET_MICROFIBRA",
      nombre: "Duvet Edredón de Microfibra",
      descripcion: "Edredón de microfibra con relleno de fibra virgen siliconada, suave",
      palabrasClave: ["duvet", "edredón", "microfibra", "liviano", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/duvet-microfibra.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin (173x224cm), Full/Queen (224x224cm), King (270x224cm)" }
    },
    // SOBRECAMAS (4 colores)
    {
      id: "SOBRECAMA_BLANCO",
      nombre: "Sobrecama Capitoné Blanco",
      descripcion: "Diseño cocido capitoné elegante, tela microfibra con relleno durable",
      palabrasClave: ["sobrecama", "capitoné", "blanco", "elegante", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/sobrecama-blanco.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin/Full/Queen, King" }
    },
    {
      id: "SOBRECAMA_AZUL",
      nombre: "Sobrecama Capitoné Azul",
      descripcion: "Diseño cocido capitoné en azul, tela microfibra con relleno durable",
      palabrasClave: ["sobrecama", "capitoné", "azul", "elegante", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/sobrecama-azul.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin/Full/Queen, King" }
    },
    {
      id: "SOBRECAMA_CAMEL",
      nombre: "Sobrecama Capitoné Camel",
      descripcion: "Diseño cocido capitoné en camel, tela microfibra con relleno durable",
      palabrasClave: ["sobrecama", "capitoné", "camel", "elegante", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/sobrecama-camel.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin/Full/Queen, King" }
    },
    {
      id: "SOBRECAMA_GRIS",
      nombre: "Sobrecama Capitoné Gris",
      descripcion: "Diseño cocido capitoné en gris, tela microfibra con relleno durable",
      palabrasClave: ["sobrecama", "capitoné", "gris", "elegante", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/sobrecama-gris.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin/Full/Queen, King" }
    },
    // FRAZADAS (4 colores)
    {
      id: "FRAZADA_BLANCO",
      nombre: "Frazada Hotelera Blanco",
      descripcion: "Frazada con tejido aterciopelado suave, máximo confort y calidez",
      palabrasClave: ["frazada", "manta", "blanco", "aterciopelada", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/frazada-blanco.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin/Full/Queen, King" }
    },
    {
      id: "FRAZADA_GRIS",
      nombre: "Frazada Hotelera Gris",
      descripcion: "Frazada con tejido aterciopelado suave en gris, calidez y elegancia",
      palabrasClave: ["frazada", "manta", "gris", "aterciopelada", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/frazada-gris.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin/Full/Queen, King" }
    },
    {
      id: "FRAZADA_AZUL",
      nombre: "Frazada Hotelera Azul",
      descripcion: "Frazada con tejido aterciopelado suave en azul, calidez y elegancia",
      palabrasClave: ["frazada", "manta", "azul", "aterciopelada", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/frazada-azul.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin/Full/Queen, King" }
    },
    {
      id: "FRAZADA_CAMEL",
      nombre: "Frazada Hotelera Camel",
      descripcion: "Frazada con tejido aterciopelado suave en camel, calidez y elegancia",
      palabrasClave: ["frazada", "manta", "camel", "aterciopelada", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/frazada-camel.jpg",
      categoriaId: "ALMOHADAS_ROPA_CAMA",
      especificaciones: { tamaño: "Twin/Full/Queen, King" }
    }
  ]
};

// ══════════════════════════════════════════════════════════════════════
// CATEGORÍA 6: ACCESORIOS Y COMPLEMENTOS (11 productos)
// ══════════════════════════════════════════════════════════════════════

const ACCESORIOS_VARIOS: Categoria = {
  id: "ACCESORIOS_VARIOS",
  nombre: "Accesorios y Complementos",
  descripcion: "Accesorios diversos y complementos para habitaciones de hotel, papelería y más",
  imagen: "/images/categorias/hoteleria/Accesorios_y_Complementos.png",
  slug: "accesorios-complementos",
  productoCount: 11,
  colorPrimario: "amber",
  colorSecundario: "yellow",
  productos: [
    {
      id: "BOLSA_LAVANDERIA_PLASTICA",
      nombre: "Bolsa de Lavandería Plástica",
      descripcion: "Bolsa de lavandería de plástico resistente para servicio hotelero",
      palabrasClave: ["bolsa", "lavandería", "hotel", "plástica"],
      imagen: "/images/categorias/hoteleria/productos/bolsa-lavanderia-plastica.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { material: "Plástico resistente" }
    },
    {
      id: "BOLSA_LAVANDERIA_TELA",
      nombre: "Bolsa de Lavandería Tela",
      descripcion: "Bolsa de lavandería de tela durable y reutilizable para hotel",
      palabrasClave: ["bolsa", "lavandería", "tela", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/bolsa-lavanderia-tela.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { material: "Tela durable" }
    },
    {
      id: "GANCHO_PERCHA_ROPA",
      nombre: "Gancho Percha de Ropa",
      descripcion: "Gancho percha de plástico resistente para ropa en closets de hotel",
      palabrasClave: ["gancho", "percha", "ropa", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/gancho-percha-ropa.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { material: "Plástico resistente" }
    },
    {
      id: "GANCHO_PERCHA_MADERA",
      nombre: "Gancho Percha de Madera",
      descripcion: "Gancho percha de madera premium con acabado elegante para hotel",
      palabrasClave: ["gancho", "percha", "madera", "hotel"],
      imagen: "/images/categorias/hoteleria/productos/gancho-percha-madera.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { material: "Madera premium" }
    },
    {
      id: "POSAVASOS_CARTON",
      nombre: "Posavasos Cartón Redondos",
      descripcion: "Posavasos de cartón redondos para bebidas en habitaciones de hotel",
      palabrasClave: ["posavasos", "cartón", "hotel", "redondos"],
      imagen: "/images/categorias/hoteleria/productos/posavasos-carton.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { material: "Cartón" }
    },
    {
      id: "PORTA_VASOS_PLASTICO",
      nombre: "Porta Vasos Plástico Desechable",
      descripcion: "Porta vasos de plástico desechable para vasos en habitaciones de hotel",
      palabrasClave: ["porta vasos", "plástico", "hotel", "desechable"],
      imagen: "/images/categorias/hoteleria/productos/porta-vasos-plastico.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { material: "Plástico desechable" }
    },
    {
      id: "BOLSAS_HIELO",
      nombre: "Bolsas de Hielo Plásticas",
      descripcion: "Bolsas de hielo plásticas resistentes para servicio de hielo hotelero",
      palabrasClave: ["bolsas", "hielo", "hotel", "plásticas"],
      imagen: "/images/categorias/hoteleria/productos/bolsas-hielo.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { material: "Plástico resistente" }
    },
    {
      id: "BLOCK_NOTAS_MEMBRETE",
      nombre: "Block de Notas con Membrete",
      descripcion: "Block de notas personalizado con membrete de hotel para escritorios",
      palabrasClave: ["block", "notas", "hotel", "membrete"],
      imagen: "/images/categorias/hoteleria/productos/block-notas.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { contenido: "Papelería personalizada" }
    },
    {
      id: "SOBRES_MEMBRETE",
      nombre: "Sobres con Membrete Carta",
      descripcion: "Sobres tamaño carta con membrete personalizado de hotel",
      palabrasClave: ["sobres", "membrete", "hotel", "carta"],
      imagen: "/images/categorias/hoteleria/productos/sobres-membrete.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { tamaño: "Carta" }
    },
    {
      id: "BOLIGRAFOS_LOGO",
      nombre: "Bolígrafos Logo Promocional",
      descripcion: "Bolígrafos con logo del hotel para promoción y uso de huéspedes",
      palabrasClave: ["bolígrafos", "logo", "hotel", "promocional"],
      imagen: "/images/categorias/hoteleria/productos/boligrafos-logo.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { contenido: "Bolígrafos personalizados" }
    },
    {
      id: "LAPICES_LOGO",
      nombre: "Lápices Logo Promocional",
      descripcion: "Lápices con logo del hotel para promoción y uso de huéspedes",
      palabrasClave: ["lápices", "logo", "hotel", "promocional"],
      imagen: "/images/categorias/hoteleria/productos/lapices-logo.jpg",
      categoriaId: "ACCESORIOS_VARIOS",
      especificaciones: { contenido: "Lápices personalizados" }
    }
  ]
};

// ══════════════════════════════════════════════════════════════════════
// EXPORTACIONES Y UTILIDADES
// ══════════════════════════════════════════════════════════════════════

export const CATEGORIAS_HOTELERIA: Categoria[] = [
  AMENIDADES_BAÑO,
  KITS_HIGIENE,
  TEXTILES_HABITACION,
  TOALLAS_BATAS,
  ALMOHADAS_ROPA_CAMA,
  ACCESORIOS_VARIOS
];

export const TOTAL_PRODUCTOS = CATEGORIAS_HOTELERIA.reduce(
  (sum, cat) => sum + cat.productoCount,
  0
);

export const TOTAL_CATEGORIAS = CATEGORIAS_HOTELERIA.length;

export function getCategoriaById(id: string): Categoria | undefined {
  return CATEGORIAS_HOTELERIA.find(cat => cat.id === id);
}

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return CATEGORIAS_HOTELERIA.find(cat => cat.slug === slug);
}

export function getProductoById(productoId: string): Producto | undefined {
  for (const categoria of CATEGORIAS_HOTELERIA) {
    const producto = categoria.productos.find(p => p.id === productoId);
    if (producto) return producto;
  }
  return undefined;
}

export function buscarProductos(query: string): Producto[] {
  const queryLower = query.toLowerCase();
  const resultados: Producto[] = [];
  
  for (const categoria of CATEGORIAS_HOTELERIA) {
    for (const producto of categoria.productos) {
      const matchNombre = producto.nombre.toLowerCase().includes(queryLower);
      const matchKeywords = producto.palabrasClave.some(k => 
        k.toLowerCase().includes(queryLower)
      );
      const matchDescripcion = producto.descripcion.toLowerCase().includes(queryLower);
      
      if (matchNombre || matchKeywords || matchDescripcion) {
        resultados.push(producto);
      }
    }
  }
  
  return resultados;
}

export function getProductosPorCategoria(categoriaId: string): Producto[] {
  const categoria = getCategoriaById(categoriaId);
  return categoria ? categoria.productos : [];
}


