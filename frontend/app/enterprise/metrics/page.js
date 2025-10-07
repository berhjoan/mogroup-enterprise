"use client";
import React from "react";

async function fetchJson(u){ const res = await fetch(u, { cache:"no-store" }); return res.json(); }

export default function Metrics(){
  const [m, setM] = React.useState(null);
  const [s, setS] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const load = async ()=>{
    setLoading(true);
    const [m1, s1] = await Promise.all([
      fetchJson("/api/v1/metrics"),
      fetchJson("/api/v1/status")
    ]);
    setM(m1); setS(s1); setLoading(false);
  };
  React.useEffect(()=>{ load(); }, []);

  if (loading) return <main style={{ padding:24 }}><p style={{ color:"#555" }}>Cargando…</p></main>;

  return (
    <main style={{ padding:24 }}>
      <h1>Métricas — Operación</h1>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:16 }}>
        <div style={{ border:"1px solid #ddd", borderRadius:8, padding:12 }}>
          <h3>Cotizaciones</h3>
          <p style={{ fontSize:24, margin:0 }}>{m?.quotes_count ?? 0}</p>
        </div>
        <div style={{ border:"1px solid #ddd", borderRadius:8, padding:12 }}>
          <h3>Eventos Guardián</h3>
          <p style={{ fontSize:24, margin:0 }}>{m?.guardian_events_count ?? 0}</p>
        </div>
        <div style={{ border:"1px solid #ddd", borderRadius:8, padding:12 }}>
          <h3>Backend</h3>
          <p style={{ fontSize:24, margin:0 }}>{s?.backend_up ? "UP" : "DOWN"}</p>
        </div>
      </div>
      <p style={{ marginTop:12, color:"#666" }}>Actualizado: {m?.ts || s?.ts}</p>
      <p style={{ marginTop:12 }}>
        <a href="/enterprise/cotizaciones">Ir a Cotizaciones</a> · <a href="/enterprise/guardian">Auditoría Guardián</a>
      </p>
    </main>
  );
}
