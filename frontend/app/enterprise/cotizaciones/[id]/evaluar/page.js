"use client";
import React from "react";

export default function Evaluar({ params }){
  const { id } = params || {};
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState(null);

  const run = async ()=>{
    setLoading(true); setErr(null);
    try{
      const res = await fetch("/api/v1/quotes/evaluate", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ id }) });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "error");
      setData(json);
    }catch(e){ setErr(e?.message || "error"); }
    setLoading(false);
  };
  React.useEffect(()=>{ run(); }, [id]);

  return (
    <main style={{ padding:24 }}>
      <h1>Evaluación — Cotización {id}</h1>
      {loading && <p style={{ color:"#555" }}>Procesando…</p>}
      {err && <p style={{ color:"#c00" }}>Error: {err}</p>}
      {data && (
        <>
          <h3>Top 3 opciones</h3>
          <table style={{ width:"100%", borderCollapse:"collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Proveedor</th>
                <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>SLA (h)</th>
                <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Costo</th>
                <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Precio</th>
                <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Margen</th>
              </tr>
            </thead>
            <tbody>
              {(data.opciones || []).map((o,i)=>(
                <tr key={i}>
                  <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{o.proveedor_alias}</td>
                  <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{o.sla_horas}</td>
                  <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>${o.costo_total}</td>
                  <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>${o.precio_total}</td>
                  <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>${o.margen}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 style={{ marginTop:16 }}>Criterios aplicados</h4>
          <ul>
            {data.decision?.reglas_aplicadas?.map((r,idx)=> <li key={idx}>{r}</li>)}
          </ul>
          <p style={{ marginTop:12 }}><a href={`/enterprise/cotizaciones/${id}`}>Volver</a></p>
        </>
      )}
    </main>
  );
}
