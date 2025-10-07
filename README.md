# MOGROUP-ENTERPRISE OS
## Sistema IA + CRM/ERP B2B para Insumos, Transporte y Logística

### 🏢 Sobre MOGROUP
MOGROUP es una empresa panameña líder en logística, transporte y venta de insumos B2B.
- **Website:** https://www.mogrouppty.com/
- **Servicios:** Logística integrada, tecnología innovadora, venta de insumos
- **Contacto:** 507-6421-5897 | info@mogroup.com

### 🎯 Objetivo del Sistema
Desarrollar una plataforma integral que combine:
- **Catálogo Inteligente** sin mostrar proveedores
- **Sistema de Cotizaciones** automatizado
- **KAT - Asistente IA** integrado con Google AI
- **Pasarelas de Pago** panameñas (Yappy, PaguéloFácil)
- **Facturación Electrónica** DGI conforme
- **Logística 48h** con tracking GPS

### 🏗️ Arquitectura
- **Frontend:** Next.js 14+ con TypeScript
- **Backend:** Flask (Python) con SQLAlchemy
- **Base de Datos:** PostgreSQL 16 + pgvector
- **IA:** Google AI APIs + Ollama local
- **Contenedores:** Docker + Docker Compose

### 🚀 Inicio Rápido
1. **Clonar y configurar:**
   \\\ash
   cd C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE
   cp .env.example .env
   # Editar .env con tus credenciales
   \\\

2. **Levantar con Docker:**
   \\\ash
   docker-compose up -d
   \\\

3. **Inicializar base de datos:**
   \\\ash
   docker-compose exec backend flask db upgrade
   \\\

4. **Acceder al sistema:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin: admin@mogroup.com / admin20462108

### 📋 Módulos Principales
1. **Catálogo Público** - Productos sin precios visibles
2. **Portal Proveedores** - Gestión privada de inventarios  
3. **CRM/ERP** - Control empresarial completo
4. **KAT IA** - Asistente virtual 24/7
5. **Logística** - Tracking y entrega 48h

### 🔧 Configuración
- Editar .env con credenciales reales
- Configurar Google AI API key
- Establecer WhatsApp Business token
- Configurar pasarelas de pago panameñas
- Obtener certificado DGI para facturación

### 📞 Soporte Técnico
- **Email:** admin@mogroup.com
- **Desarrollador:** Administrador Sistema
- **Documentación:** ./docs/INFORME_TECNICO_COMPLETO.md

### 📄 Licencia
Propiedad de MOGROUP - Todos los derechos reservados
