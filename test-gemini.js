const { GoogleGenerativeAI } = require("@google/generative-ai");

const run = async () => {
  const apiKey = process.env.GOOGLE_API_KEY || "TU_API_KEY";
  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const models = await genAI.listModels();
    console.log("Modelos disponibles y métodos:");
    models.models.forEach((m) => {
      console.log(`${m.name} -- ${m.supportedGenerationMethods}`);
    });
  } catch (e) {
    console.error("Error API KEY / Permisos:", e.message);
  }
};

run();
