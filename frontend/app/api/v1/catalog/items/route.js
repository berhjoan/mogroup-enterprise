export async function GET(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  const cat = url.searchParams.get('cat') || '';

  const all = [
    { id:'SKU-001', nombre:'Bolsa Papel Kraft', categoria:'Empaque', desc:'Bolsa reciclable para alimentos.' },
    { id:'SKU-002', nombre:'Caja Pizza 12\"', categoria:'Alimentos', desc:'Cartón alimentario.' },
    { id:'SKU-003', nombre:'Servicio de courier', categoria:'Logística', desc:'Entrega 24–48h.' }
  ];
  const items = all.filter(x =>
    (cat ? x.categoria === cat : true) &&
    (query ? (x.nombre.toLowerCase().includes(query.toLowerCase()) || x.id.toLowerCase().includes(query.toLowerCase())) : true)
  );
  return new Response(JSON.stringify({ items, stub:true, updatedAt: new Date().toISOString() }), {
    status: 200,
    headers: { 'Content-Type':'application/json', 'X-Stub':'true' }
  });
}
