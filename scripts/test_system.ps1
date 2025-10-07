# SCRIPT DE PRUEBA Y VERIFICACIÓN - MOGROUP-ENTERPRISE OS
Write-Host "🧪 Iniciando pruebas del sistema..." -ForegroundColor Cyan

# Verificar estructura de directorios
 = @(
    "C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\backend",
    "C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\frontend", 
    "C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\database",
    "C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\docs",
    "C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\config"
)

foreach ($dir in $requiredDirs) {
    if (Test-Path $dir) {
        Write-Host "✅ Directorio $dir existe" -ForegroundColor Green
    } else {
        Write-Host "❌ Directorio $dir falta" -ForegroundColor Red
    }
}

# Verificar archivos de configuración
$configFiles = @(
    "C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\docker-compose.yml",
    "C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\.env",
    "C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\config\kat_config.json",
    "C:\MOGROUP_ROOT\MOGROUP_ENTERPRISE\database\init\01_init_schema.sql"
)

foreach ($file in $configFiles) {
    if (Test-Path $file) {
        Write-Host "✅ Archivo $file existe" -ForegroundColor Green
    } else {
        Write-Host "❌ Archivo $file falta" -ForegroundColor Red
    }
}

# Verificar Docker
try {
    docker --version | Out-Null
    Write-Host "✅ Docker está instalado" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker no está instalado" -ForegroundColor Red
}

# Verificar Node.js
try {
    node --version | Out-Null
    Write-Host "✅ Node.js está instalado" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js no está instalado" -ForegroundColor Red
}

# Verificar Python
try {
    python --version | Out-Null
    Write-Host "✅ Python está instalado" -ForegroundColor Green
} catch {
    Write-Host "❌ Python no está instalado" -ForegroundColor Red
}

Write-Host "🏁 Pruebas completadas" -ForegroundColor Cyan
