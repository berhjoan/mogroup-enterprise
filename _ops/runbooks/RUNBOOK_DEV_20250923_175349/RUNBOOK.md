# RUNBOOK_DEV_20250923_175349 — 20250923_175349

Propósito: reconstrucción rápida del entorno dev con Compose validado y artefactos reproducibles (sin .next/node_modules), mitigando errores ENOENT tras upgrades. [web:308][web:286]

Pasos:
- Validar: docker compose -f docker-compose.yml -f docker-compose.override.yml config -q. [web:308]
- Levantar solo frontend: docker compose -f docker-compose.yml -f docker-compose.override.yml up -d frontend. [web:59]
- Verificar: docker compose ps y logs; probar /, /enterprise, /enterprise/catalogo. [web:128][web:139]
- Si hay ENOENT de manifiestos, prebuild: docker compose run --rm frontend sh -lc "rm -rf .next && npm run build" y reiniciar frontend. [web:286]

Evidencias: compose_merged.yml, compose_ps.txt, frontend_logs_tail.txt, npm_inventory.txt, app_tree.csv. [web:308]
