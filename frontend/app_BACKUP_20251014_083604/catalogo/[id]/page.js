"use client";
import React from "react";

export default function CatalogoDetalle({ params }){
  const { id } = params || {};
  const [item, setItem] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const load = async ()=>{
    setLoading(true);
    const res = await fetch(`/api/v1/catalog/products/${id}`, { cache:"no-store" });
    const data = await res.json();
    setItem(data.item || null);
    setLoading(false);
  };
  React.useEffect(()=>{ load(); }, [id]);

  if (loading) return <main style={{ padding:24 }}><p style={{ color:"#555" }}>Cargando…</p></main>;
  if (!item) return <main style={{ padding:24 }}><h1>No encontrado</h1></main>;

  return (
    <main style={{ padding:24 }}>
      <h1>{item.nombre}</h1>
      <img src={item.imagen_url || "https://placehold.co/800x360?text=MOGroup"} alt={item.nombre} style={{ width:"100%", maxWidth:860, height:320, objectFit:"cover", borderRadius:8 }} />
      <p style={{ color:"#666" }}>{item.marca} · {item.categoria}</p>
      <p style={{ marginTop:8 }}>{item.descripcion || "Producto industrial"}</p>
      <h4 style={{ marginTop:12 }}>Atributos</h4>
      <ul>
        {Object.entries(item.atributos || {}).map(([k,v]) => <li key={k}>{k}: {String(v)}</li>)}
      </ul>
      <p style={{ marginTop:12 }}>
        <a href={`/cotizar?item=${encodeURIComponent(item.sku)}`}>Solicitar cotización</a> · <a href="/catalogo">Volver</a>
      </p>
    </main>
  );
}
