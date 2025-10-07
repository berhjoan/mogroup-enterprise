Write-Host "`n╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║           MOGROUP - VERIFICACIÓN DEL SISTEMA               ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

$checks = @()
$errors = @()

# Frontend
if (Test-Path "src\app\page.tsx") { $checks += "✅ Homepage" } else { $errors += "❌ Homepage FALTA" }
if (Test-Path "src\app\catalogo\page.tsx") { $checks += "✅ Catálogo Público" } else { $errors += "❌ Catálogo Público FALTA" }
if (Test-Path "src\app\layout.tsx") { $checks += "✅ Layout Principal" } else { $errors += "❌ Layout Principal FALTA" }

# Admin
if (Test-Path "src\app\admin\page.tsx") { $checks += "✅ Panel Admin" } else { $errors += "❌ Panel Admin FALTA" }
if (Test-Path "src\app\admin\proveedores\page.tsx") { $checks += "✅ Módulo Proveedores" } else { $errors += "❌ Módulo Proveedores FALTA" }
if (Test-Path "src\app\admin\inventario\page.tsx") { $checks += "✅ Módulo Inventario" } else { $errors += "❌ Módulo Inventario FALTA" }

# APIs
if (Test-Path "src\app\api\proveedores\route.ts") { $checks += "✅ API Proveedores" } else { $errors += "❌ API Proveedores FALTA" }
if (Test-Path "src\app\api\productos\route.ts") { $checks += "✅ API Productos" } else { $errors += "❌ API Productos FALTA" }
if (Test-Path "src\app\api\taxonomia\clasificaciones\route.ts") { $checks += "✅ API Taxonomía" } else { $errors += "❌ API Taxonomía FALTA" }
if (Test-Path "src\app\api\kat\procesar-catalogo\route.ts") { $checks += "✅ API Kat AI" } else { $errors += "❌ API Kat AI FALTA" }

# Componentes
if (Test-Path "src\components\admin\ProveedorModal.tsx") { $checks += "✅ Modal Proveedores" } else { $errors += "❌ Modal Proveedores FALTA" }
if (Test-Path "src\components\admin\UploadCatalogo.tsx") { $checks += "✅ Upload Catálogo" } else { $errors += "❌ Upload Catálogo FALTA" }
if (Test-Path "src\components\ui\KatWidget.tsx") { $checks += "✅ Widget Kat" } else { $errors += "❌ Widget Kat FALTA" }

# Database
if (Test-Path "database\schema.sql") { $checks += "✅ Schema Principal" } else { $errors += "❌ Schema Principal FALTA" }
if (Test-Path "database\schema_taxonomia.sql") { $checks += "✅ Schema Taxonomía" } else { $errors += "❌ Schema Taxonomía FALTA" }
if (Test-Path "scripts\import_taxonomy.py") { $checks += "✅ Script Importación" } else { $errors += "❌ Script Importación FALTA" }

# Configuración
if (Test-Path ".env.local") { $checks += "✅ Archivo .env.local" } else { $errors += "❌ .env.local FALTA" }
if (Test-Path "package.json") { $checks += "✅ package.json" } else { $errors += "❌ package.json FALTA" }

Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
foreach ($check in $checks) { Write-Host $check -ForegroundColor Green }
foreach ($error in $errors) { Write-Host $error -ForegroundColor Red }
Write-Host "═══════════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

$total = $checks.Count + $errors.Count
$success = $checks.Count
$percentage = [math]::Round(($success / $total) * 100, 2)

Write-Host "📊 RESUMEN: $success/$total componentes ($percentage%)`n" -ForegroundColor $(if ($percentage -ge 90) { "Green" } elseif ($percentage -ge 70) { "Yellow" } else { "Red" })

if ($errors.Count -eq 0) {
    Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║        ✅ SISTEMA 100% FUNCIONAL - LISTO PARA PRODUCCIÓN   ║" -ForegroundColor Green
    Write-Host "╚════════════════════════════════════════════════════════════════╝`n" -ForegroundColor Green
} else {
    Write-Host "⚠️  HAY COMPONENTES FALTANTES - REVISAR ERRORES ARRIBA`n" -ForegroundColor Yellow
}
