"use client";
import React from "react";

export default function EnterpriseCatalogo(){
  const [text, setText] = React.useState("");
  const [catg, setCatg] = React.useState("");
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const load = async ()=>{
    setLoading(true);
    const usp = new URLSearchParams(); if (text) usp.set("q", text); if (catg) usp.set("category", catg);
    const res = await fetch(`/api/v1/catalog/search?${usp.toString()}`, { cache:"no-store" });
    const data = await res.json();
    setRows(data.items || []);
    setLoading(false);
  };

  React.useEffect(()=>{ load(); }, []);

  return (
    <main style={{ padding:24 }}>
      <h1>Catálogo — Enterprise</h1>
      <div style={{ display:"flex", gap:8, margin:"8px 0 16px" }}>
        <input placeholder="Buscar..." value={text} onChange={e=>setText(e.target.value)} style={{ padding:8, flex:1, border:"1px solid #ddd", borderRadius:6 }} />
        <input placeholder="Categoría" value={catg} onChange={e=>setCatg(e.target.value)} style={{ padding:8, width:180, border:"1px solid #ddd", borderRadius:6 }} />
        <button onClick={load} style={{ padding:"8px 12px" }}>Buscar</button>
        <a href="/catalogo">Vista pública</a>
      </div>
      {loading ? <p style={{ color:"#555" }}>Cargando…</p> : (
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>SKU</th>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Nombre</th>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Marca</th>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Categoría</th>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p=>(
              <tr key={p.id}>
                <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{p.sku}</td>
                <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{p.nombre}</td>
                <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{p.marca}</td>
                <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{p.categoria}</td>
                <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>
                  <a href={`/catalogo/${p.id}`}>Ver</a> · <a href={`/cotizar?item=${encodeURIComponent(p.sku)}`}>Cotizar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

