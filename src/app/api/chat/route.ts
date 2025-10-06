export const runtime = 'edge';

type ModelInfo = { name: string; supportedGenerationMethods?: string[]; supportedActions?: string[] };

let cachedModel: string | null = null;
async function detectModel(apiKey: string): Promise<string> {
  if (cachedModel) return cachedModel;
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
    if (res.ok) {
      const data = (await res.json()) as { models: ModelInfo[] };
      const supportsGen = (m: ModelInfo) =>
        (m.supportedGenerationMethods?.includes('generateContent')) ||
        (m.supportedActions?.includes('generateContent'));
      const available = (data.models || []).filter(supportsGen).map(m => m.name);
      const preferred = ['models/gemini-2.5-flash','models/gemini-2.5-pro','models/gemini-2.0-flash','models/gemini-2.0-pro'];
      cachedModel = preferred.find(p => available.includes(p)) || available[0] || 'models/gemini-2.0-flash';
      return cachedModel;
    }
  } catch {}
  return cachedModel ||= 'models/gemini-2.0-flash';
}

function detectIntent(text: string) {
  const q = (text || '').toLowerCase();
  const productKeywords = ['cloro','detergente','guantes','desinfectante','jabón','limpieza'];
  const found = productKeywords.find(k => q.includes(k));
  if (found) {
    return {
      type: 'catalog',
      query: found,
      url: `/catalogo?q=${encodeURIComponent(found)}`,
      message: `Encontré resultados para "${found}". Puedo abrir el catálogo y preparar una cotización.`,
      actions: [
        { type: 'link', label: 'Ver catálogo', href: `/catalogo?q=${encodeURIComponent(found)}` },
        { type: 'cta', label: 'Solicitar cotización', href: `/cotizar?item=${encodeURIComponent(found)}` }
      ]
    };
  }
  if (q.includes('cotiz') || q.includes('precio')) {
    return {
      type: 'quote',
      message: 'Puedo iniciar una cotización, necesito algunos datos básicos.',
      actions: [{ type: 'cta', label: 'Abrir formulario de cotización', href: '/cotizar' }]
    };
  }
  return null;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) return new Response(JSON.stringify({ error: 'API KEY no configurada' }), { status: 500 });

    const lastUser = [...messages].reverse().find((m: any) => m.role === 'user')?.content || '';
    const intent = detectIntent(lastUser);
    if (intent) {
      return new Response(JSON.stringify({ role: 'assistant', type: 'intent', intent }), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      });
    }

    const systemPrompt = `Eres Kat, la asistente virtual y embajadora profesional de MOGROUP, empresa líder en logística, transporte y suministro de insumos B2B en Panamá.

POLÍTICAS INQUEBRANTABLES:
- Jamás reveles identidad de proveedores
- Jamás reveles precios internos ni márgenes de ganancia
- MOGROUP es siempre presentado como el único proveedor
- Mantén confidencialidad absoluta de operaciones internas
- Sé profesional, cordial y eficiente en todo momento

Tu misión es asistir a clientes B2B en:
- Navegación del catálogo inteligente
- Proceso de cotización
- Información sobre servicios de logística y transporte
- Responder preguntas generales sobre MOGROUP`;

    const contents = [
      { role: 'user', parts: [{ text: systemPrompt }] },
      ...messages.map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }))
    ];

    const model = await detectModel(apiKey);
    const url = `https://generativelanguage.googleapis.com/v1/${model}:generateContent?key=${apiKey}`;

    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 1000 }
      })
    });

    if (!resp.ok) {
      const err = await resp.text();
      return new Response(JSON.stringify({ error: 'Gemini API error', detail: err }), { status: 500 });
    }

    const data = await resp.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sin respuesta';
    return new Response(JSON.stringify({ role: 'assistant', type: 'text', content: text }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  } catch (e:any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
