# ═══════════════════════════════════════════════════════════════════════════
# DOCKERFILE - MOGROUP WEB (Next.js 15 + Standalone)
# ═══════════════════════════════════════════════════════════════════════════

FROM node:20-alpine AS base

# ═════════════════════════════════════════════════════════════════════════
# STAGE 1: DEPENDENCIES
# ═════════════════════════════════════════════════════════════════════════
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

# ═════════════════════════════════════════════════════════════════════════
# STAGE 2: BUILD
# ═════════════════════════════════════════════════════════════════════════
FROM base AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Variables de entorno para el build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN npm run build

# ═════════════════════════════════════════════════════════════════════════
# STAGE 3: RUNNER (PRODUCTION)
# ═════════════════════════════════════════════════════════════════════════
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos públicos
COPY --from=builder /app/public ./public

# Copiar standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
