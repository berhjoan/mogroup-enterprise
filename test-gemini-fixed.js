require('dotenv').config({ path: '.env.local' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

const run = async () => {
  const apiKey = process.env.GOOGLE_API_KEY;
  
  console.log("\n════════════════════════════════════════");
  console.log("DIAGNÓSTICO DE CONFIGURACIÓN");
  console.log("════════════════════════════════════════");
  
  if (!apiKey || apiKey === "TU_API_KEY_AQUI" || apiKey === "TU_API_KEY_REAL") {
    console.error("❌ ERROR: API KEY no configurada correctamente");
    console.error("\n📝 PASOS PARA CORREGIR:");
    console.error("1. Abre .env.local en VSCode");
    console.error("2. Reemplaza 'TU_API_KEY_AQUI' por tu API KEY real de Google AI Studio");
    console.error("3. Guarda el archivo");
    console.error("4. Vuelve a ejecutar: node test-gemini-fixed.js");
    console.error("\n🔗 Obtén tu API KEY en: https://aistudio.google.com/app/apikey");
    return;
  }
  
  console.log("✅ API KEY detectada (primeros 10 caracteres):", apiKey.substring(0, 10) + "...");
  
  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    console.log("\n🔍 Consultando modelos disponibles...\n");
    const models = await genAI.listModels();
    
    console.log("════════════════════════════════════════");
    console.log("MODELOS DISPONIBLES CON TU API KEY:");
    console.log("════════════════════════════════════════\n");
    
    models.models.forEach((m) => {
      console.log(`✓ Modelo: ${m.name}`);
      console.log(`  Métodos soportados: ${m.supportedGenerationMethods.join(', ')}`);
      console.log(`  Descripción: ${m.description || 'N/A'}`);
      console.log("");
    });
    
    console.log("════════════════════════════════════════");
    console.log("\n👉 PRÓXIMO PASO:");
    console.log("Copia el nombre EXACTO del modelo (ej: 'models/gemini-pro')");
    console.log("y úsalo en src/app/api/chat/route.ts\n");
    
  } catch (e) {
    console.error("════════════════════════════════════════");
    console.error("❌ ERROR AL CONECTAR CON GOOGLE AI");
    console.error("════════════════════════════════════════");
    console.error("\nMensaje:", e.message);
    console.error("\n⚠️  POSIBLES CAUSAS:");
    console.error("1. API KEY inválida o revocada");
    console.error("2. API KEY sin permisos para Generative AI");
    console.error("3. Problema de conexión a internet");
    console.error("\n🔧 SOLUCIÓN:");
    console.error("1. Ve a: https://aistudio.google.com/app/apikey");
    console.error("2. Genera una nueva API KEY");
    console.error("3. Actualiza .env.local con la nueva key");
    console.error("4. Asegúrate de habilitar 'Generative Language API'\n");
  }
};

run();
