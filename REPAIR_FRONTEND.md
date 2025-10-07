## REPAIR_FRONTEND 20250922_174441
### docker ps
CONTAINER ID   IMAGE                         COMMAND                  CREATED         STATUS                          PORTS                                         NAMES
bf39aea5ec94   mogroup_enterprise-frontend   "docker-entrypoint.sÔÇª"   6 minutes ago   Up 5 minutes                    0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp   mogroup_frontend
98891363f847   mogroup_enterprise-backend    "gunicorn --bind 0.0ÔÇª"   6 minutes ago   Restarting (1) 24 seconds ago                                                 mogroup_backend
03dbcba117b8   redis:7-alpine                "docker-entrypoint.sÔÇª"   6 minutes ago   Up 6 minutes (healthy)          0.0.0.0:6379->6379/tcp, [::]:6379->6379/tcp   mogroup_redis
6b425f6da412   pgvector/pgvector:pg16        "docker-entrypoint.sÔÇª"   6 minutes ago   Up 6 minutes (healthy)          0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp   mogroup_postgres

### docker logs (backend 50 líneas)

### docker logs (frontend 50 líneas)

> frontend@0.1.0 dev
> next dev

  Ôû▓ Next.js 14.2.4
  - Local:        http://localhost:3000

 Ô£ô Starting...
 Ô£ô Ready in 3s

### Frontend NO responde en 3000 tras 15s
### Backend health: ERROR No se puede establecer una conexión ya que el equipo de destino denegó expresamente dicha conexión. (127.0.0.1:5001)
### docker logs mogroup_frontend (100 líneas)

> frontend@0.1.0 dev
> next dev -p 3000

  Ôû▓ Next.js 14.2.4
  - Local:        http://localhost:3000

 Ô£ô Starting...
 Ô£ô Ready in 2.7s
 Ôùï Compiling /_not-found ...
 Ô£ô Compiled /_not-found in 7.5s (451 modules)
 GET / 404 in 7071ms
 GET / 404 in 4162ms
 GET / 404 in 84ms
 GET / 404 in 117ms
 GET / 404 in 94ms
 GET / 404 in 81ms
 GET / 404 in 82ms
 GET / 404 in 90ms
 GET / 404 in 90ms
 GET / 404 in 82ms
 GET / 404 in 77ms
 GET / 404 in 78ms
 GET / 404 in 87ms
 GET / 404 in 76ms
 GET / 404 in 84ms
 GET / 404 in 98ms
 GET / 404 in 82ms
 GET / 404 in 109ms
 GET / 404 in 87ms
 GET / 404 in 84ms
 GET / 404 in 103ms
 GET / 404 in 122ms
 GET / 404 in 91ms
 GET / 404 in 88ms
 GET / 404 in 80ms
 GET / 404 in 84ms
 GET / 404 in 80ms
 GET / 404 in 84ms
 GET / 404 in 84ms
 GET / 404 in 85ms

