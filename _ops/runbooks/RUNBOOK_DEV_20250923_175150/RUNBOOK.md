# RUNBOOK_DEV — 20250923_175150

## Propósito
Respaldo reproducible y memoria de recorrido del estado dev (Next 14.2.33) para reconstrucción rápida sin errores de artefactos ni dependencias. [docker compose config valida], [bind mount + node_modules aislado]. [web:308][web:294]

## Requisitos
- Docker/Compose operativo y Git con credenciales; carpeta del proyecto en C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE. [web:308]
- Para dev: override con bind mount ./frontend → /app y volumen /app/node_modules. [web:294]

## Pasos de reconstrucción (dev)
1) Validar configuración:
   docker compose -f docker-compose.yml -f docker-compose.override.yml config -q  # debe no emitir errores. [web:308]

2) Levantar sólo frontend y verificar:
   docker compose -f docker-compose.yml -f docker-compose.override.yml up -d frontend
   docker compose -f docker-compose.yml -f docker-compose.override.yml ps            # STATUS Up y puerto 3000. [web:59][web:128]

3) Probar rutas y revisar logs:
   http://127.0.0.1:3000, /enterprise, /enterprise/catalogo, /servicios/insumos
   docker compose -f docker-compose.yml -f docker-compose.override.yml logs --tail=200 frontend  # sin ENOENT de .next. [web:139][web:286]

4) Si hubo upgrade de Next y aparecen ENOENT:
   docker compose stop frontend
   docker compose run --rm frontend sh -lc "rm -rf .next && npm run build"           # prebuild de artefactos. [web:286]
   docker compose up -d frontend                                                     # reinicio dev. [web:59]

## Evidencias incluidas
- compose_merged.yml, compose_ps.txt, frontend_logs_tail.txt, npm_inventory.txt, app_tree.csv, git_head.txt, git_status.txt, git_last_commit.txt. [web:308]

## Snapshot
- C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\_ops\backups\snapshot_dev_20250923_175150.zip (excluye node_modules y .next). [web:294]

