@echo off
echo ================================================================
echo   ?? BUILD Y DEPLOY A DOCKER HUB - MOGROUP WEB
echo ================================================================
echo.

echo ?? Verificando Docker...
docker --version
if errorlevel 1 (
    echo ? Docker no est? instalado
    pause
    exit /b 1
)
echo ? Docker OK
echo.

echo ?? Limpiando cache y archivos temporales...
if exist .next rmdir /s /q .next
if exist node_modules rmdir /s /q node_modules
if exist out rmdir /s /q out
echo ? Limpieza completada
echo.

echo ?? Construyendo imagen Docker...
echo    IMPORTANTE: Esto toma 10-15 minutos
echo    No cierres esta ventana!
echo.

docker build --no-cache --platform linux/amd64 -t mogroup_web-web:latest .
if errorlevel 1 (
    echo.
    echo ? ERROR AL CONSTRUIR IMAGEN
    echo.
    echo ?? POSIBLES SOLUCIONES:
    echo    1. Verifica que Docker Desktop est? corriendo
    echo    2. Cierra otros programas pesados
    echo    3. Reinicia Docker Desktop
    echo    4. Ejecuta como Administrador
    echo.
    pause
    exit /b 1
)
echo.
echo ? Imagen construida exitosamente!
echo.

echo ???  Etiquetando imagen...
docker tag mogroup_web-web:latest benjoan/mogroup_web-web:latest
echo ? Etiquetada
echo.

echo ?? Iniciando sesi?n en Docker Hub...
docker login
if errorlevel 1 (
    echo ? Error al iniciar sesi?n
    pause
    exit /b 1
)
echo ? Sesi?n iniciada
echo.

echo ?? Subiendo imagen a Docker Hub...
echo    Esto toma 5-10 minutos...
echo.
docker push benjoan/mogroup_web-web:latest
if errorlevel 1 (
    echo ? Error al subir imagen
    pause
    exit /b 1
)
echo.
echo ================================================================
echo   ??? PROCESO COMPLETADO EXITOSAMENTE ???
echo ================================================================
echo.
echo ?? Imagen disponible en:
echo    https://hub.docker.com/r/benjoan/mogroup_web-web
echo.
echo ?? Railway se actualizar? autom?ticamente
echo    Monitorea en: https://railway.com/project/742ce4f1-4c29-43ae-ada0-4e802235f6fd
echo.
echo ??  El deploy en Railway tomar? ~3-5 minutos
echo.
pause
