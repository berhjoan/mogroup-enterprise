# Usar imagen oficial de Node.js 20
FROM node:20-alpine AS base

# Instalar dependencias necesarias
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# ═══════════════════════════════════════════════════════════════════════════
# STAGE 1: Instalar dependencias
# ═══════════════════════════════════════════════════════════════════════════
FROM base AS deps

RUN npm ci

# ═══════════════════════════════════════════════════════════════════════════
# STAGE 2: Build de la aplicación
# ═══════════════════════════════════════════════════════════════════════════
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build de Next.js
RUN npm run build

# ═══════════════════════════════════════════════════════════════════════════
# STAGE 3: Imagen de producción
# ═══════════════════════════════════════════════════════════════════════════
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cambiar permisos
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
