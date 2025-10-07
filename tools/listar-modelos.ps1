# tools/listar-modelos.ps1
$env:KEY = (Get-Content .env.local) -match 'GOOGLE_GENERATIVE_AI_API_KEY' | % { $_.Split('=')[1] }
Invoke-WebRequest -UseBasicParsing "https://generativelanguage.googleapis.com/v1/models?key=$($env:KEY)" |
  Select-Object -ExpandProperty Content |
  Out-File -FilePath ".\MODELOS_GEMINI.json" -Encoding utf8
Write-Host "Listado guardado en MODELOS_GEMINI.json (buscar 'generateContent' y 'name')" -ForegroundColor Green
