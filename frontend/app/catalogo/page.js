"use client";
import React from "react";

export default function Catalogo(){
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const load = async ()=>{
    setLoading(true);
    const res = await fetch("/api/v1/catalog/products", { cache:"no-store" });
    const data = await res.json();
    setRows(data.items || []);
    setLoading(false);
  };
  React.useEffect(()=>{ load(); }, []);

  return (
    <main style={{ padding:24 }}>
      <h1>Catálogo MOGroup</h1>
      {loading ? <p style={{ color:"#555" }}>Cargando…</p> : (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:16 }}>
          {rows.map(p=>(
            <div key={p.id} style={{ border:"1px solid #ddd", borderRadius:8, padding:12 }}>
              <img src={p.imagen_url || "https://placehold.co/400x240?text=MOGroup"} alt={p.nombre} style={{ width:"100%", height:160, objectFit:"cover", borderRadius:6 }} />
              <h3 style={{ margin:"8px 0 4px" }}>{p.nombre}</h3>
              <p style={{ color:"#666", margin:"0 0 8px" }}>{p.marca} · {p.categoria}</p>
              <p style={{ fontSize:13, color:"#555", minHeight:36 }}>{p.descripcion || "Producto industrial"}</p>
              <p style={{ marginTop:8 }}>
                <a href={`/catalogo/${p.id}`}>Ver detalle</a> · <a href={`/cotizar?item=${encodeURIComponent(p.sku)}`}>Solicitar cotización</a>
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
