export async function POST(request){
  try{
    const body = await request.json();
    const text = (body?.text || "").toString().trim();
    const reply = text ? `kat: recibido “${text}”. Puedo ayudarte a buscar productos o gestionar cotizaciones.` : "kat: ¿Podrías repetir?";
    return new Response(JSON.stringify({ reply, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
  }catch{
    return new Response(JSON.stringify({ error:"json_invalid" }), { status:400, headers:{ "Content-Type":"application/json" } });
  }
}
