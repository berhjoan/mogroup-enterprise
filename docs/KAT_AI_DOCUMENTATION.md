# MOGROUP - SISTEMA DE CATEGORIZACIÓN INTELIGENTE CON KAT AI

## ARQUITECTURA DEL SISTEMA

### 1. TAXONOMÍA DE PRODUCTOS (4 Niveles)

**Clasificación → Categoría → Subcategoría → Producto**

Estructura basada en el archivo MOGROUP-JUEVES-02-OCTUBRE.xlsx:
- **Clasificación**: Nivel superior (ej. EPP, Químicos, Herramientas)
- **Categoría**: Agrupación media (ej. Protección Respiratoria, Limpieza)
- **Subcategoría**: Nivel detallado (ej. Mascarillas N95, Desinfectantes)
- **Palabras Clave**: Tags para búsqueda semántica

### 2. FLUJO DE PROCESAMIENTO CON KAT AI

#### Paso 1: Carga de Catálogo PDF
1. Administrador accede a /admin/proveedores
2. Hace clic en "🤖 Kat" del proveedor deseado
3. Sube el PDF del catálogo del proveedor

#### Paso 2: Extracción OCR
1. Archivo se guarda temporalmente en servidor
2. Google Cloud Vision API extrae texto del PDF
3. Texto se divide en líneas (productos individuales)
4. Se registra el inicio del procesamiento en BD

#### Paso 3: Categorización Inteligente
1. Kat AI (Gemini) analiza cada producto detectado
2. Compara con taxonomía existente usando palabras clave
3. Asigna subcategoría con nivel de confianza
4. Extrae datos: nombre, precio, unidad de medida

#### Paso 4: Validación y Almacenamiento
1. Administrador revisa productos categorizados
2. Puede ajustar categorizaciones manualmente
3. Productos se guardan en tabla 'productos'
4. Quedan vinculados al proveedor y subcategoría

### 3. INTEGRACIÓN CON CATÁLOGO PÚBLICO

Los productos categorizados alimentan automáticamente el catálogo web:
- Filtros por Clasificación/Categoría/Subcategoría
- Búsqueda inteligente usando palabras clave
- Sugerencias de Kat basadas en consultas de clientes

### 4. TABLAS DE BASE DE DATOS

#### clasificaciones
- id, codigo, nombre, descripcion

#### categorias
- id, clasificacion_id, codigo, nombre, descripcion

#### subcategorias
- id, categoria_id, codigo, nombre, descripcion

#### palabras_clave
- id, subcategoria_id, palabra, relevancia

#### productos
- id, proveedor_id, subcategoria_id, codigo_unico
- nombre, descripcion, sku, marca
- precio_compra, precio_venta, precio_sugerido
- stock, unidad_medida, imagen_url
- estado, es_destacado, metadata (JSONB)

#### procesamiento_catalogos
- id, proveedor_id, archivo_pdf, estado
- productos_detectados, productos_categorizados
- confianza_promedio, log_procesamiento

### 5. APIs IMPLEMENTADAS

#### /api/proveedores
- GET: Listar proveedores
- POST: Crear proveedor
- PUT: Actualizar proveedor
- DELETE: Eliminar proveedor

#### /api/productos
- GET: Búsqueda inteligente con filtros
  - ?busqueda=texto
  - ?proveedor=id
  - ?categoria=id

#### /api/kat/procesar-catalogo
- POST: Procesar PDF con OCR + IA
  - FormData: archivo (PDF) + proveedor_id
  - Retorna: productos detectados, categorizados, muestra

### 6. PRÓXIMOS PASOS

#### Fase 1: Completar OCR Real
- Integrar Google Cloud Vision API completa
- Mejorar extracción de tablas en PDFs
- Detectar precios y códigos automáticamente

#### Fase 2: Refinamiento de IA
- Entrenar modelo personalizado con productos reales
- Mejorar precisión de categorización (>95%)
- Detectar variantes y presentaciones

#### Fase 3: Catálogo Público Inteligente
- Filtros dinámicos por taxonomía
- Búsqueda con autocompletado
- Recomendaciones de productos relacionados

#### Fase 4: Sincronización Automática
- Detección de actualizaciones en catálogos
- Alertas de cambios de precio
- Gestión de productos descontinuados

### 7. COMANDOS DE CONFIGURACIÓN

#### Instalar PostgreSQL (si no está)
# Windows con Chocolatey
choco install postgresql

# O descargar desde https://www.postgresql.org/download/

#### Crear base de datos
createdb mogroup_db

#### Ejecutar schemas
psql mogroup_db < database/schema.sql
psql mogroup_db < database/schema_taxonomia.sql

#### Importar taxonomía desde Excel
# Instalar Python y dependencias
pip install pandas openpyxl psycopg2-binary python-dotenv

# Copiar Excel a la raíz del proyecto
copy "MOGROUP-JUEVES-02-OCTUBRE.xlsx" .

# Ejecutar script
python scripts/import_taxonomy.py

#### Configurar variables de entorno (.env.local)
GOOGLE_GENERATIVE_AI_API_KEY=tu_api_key_gemini
DATABASE_URL=postgresql://usuario:password@localhost:5432/mogroup_db
GOOGLE_CLOUD_PROJECT_ID=tu_proyecto_id
GOOGLE_APPLICATION_CREDENTIALS=./google-credentials.json

### 8. SEGURIDAD Y MEJORES PRÁCTICAS

- ✅ Variables sensibles en .env (nunca en código)
- ✅ Validación de entrada en todas las APIs
- ✅ Sanitización de datos antes de insertar en BD
- ✅ Connection pooling para PostgreSQL
- ✅ Índices en columnas de búsqueda frecuente
- ✅ Logs de auditoría en procesamiento_catalogos
- 🔄 TODO: Autenticación JWT para APIs admin
- 🔄 TODO: Rate limiting en endpoints públicos
- 🔄 TODO: Encriptación de datos sensibles

### 9. MÉTRICAS Y MONITOREO

Implementar dashboards para rastrear:
- Productos por proveedor
- Tasa de categorización exitosa
- Confianza promedio de IA
- Productos sin categorizar (requieren revisión manual)
- Tiempo promedio de procesamiento por catálogo

---
Documentación generada: 10/05/2025 19:35:50
MOGROUP ENTERPRISE OS - Sistema de Categorización con IA
