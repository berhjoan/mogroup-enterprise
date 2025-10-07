Write-Host "`n╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Magenta
Write-Host "║             MOGROUP - INICIO RÁPIDO DEL SISTEMA            ║" -ForegroundColor Magenta
Write-Host "╚════════════════════════════════════════════════════════════════╝`n" -ForegroundColor Magenta

Write-Host "[1/5] 🧹 Limpiando caché de Next.js..." -ForegroundColor Yellow
Remove-Item ".next" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "✅ Caché limpiado`n" -ForegroundColor Green

Write-Host "[2/5] 📦 Instalando dependencias..." -ForegroundColor Yellow
npm install --legacy-peer-deps 2>&1 | Out-Null
Write-Host "✅ Dependencias instaladas`n" -ForegroundColor Green

Write-Host "[3/5] 🔍 Verificando sistema..." -ForegroundColor Yellow
& "scripts\verify_complete_system.ps1"

Write-Host "[4/5] 🌐 Iniciando servidor de desarrollo..." -ForegroundColor Yellow
Write-Host "`n╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  MOGROUP WEB: http://localhost:3000                        ║" -ForegroundColor Cyan
Write-Host "║  ADMIN PANEL: http://localhost:3000/admin                  ║" -ForegroundColor Cyan
Write-Host "║  CATÁLOGO:    http://localhost:3000/catalogo               ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

Write-Host "[5/5] 🎯 Arrancando aplicación...`n" -ForegroundColor Green
npm run dev
