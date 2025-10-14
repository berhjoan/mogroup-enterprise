"use client";
import React from "react";

function fmtDate(d){ return d ? new Date(d).toISOString() : ""; }

export default function GuardianSearch(){
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [modulo, setModulo] = React.useState("");
  const [accion, setAccion] = React.useState("");
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const q = ()=> {
    const usp = new URLSearchParams();
    if (from) usp.set("from", from);
    if (to) usp.set("to", to);
    if (modulo) usp.set("modulo", modulo);
    if (accion) usp.set("accion", accion);
    return usp.toString();
  };

  const load = async ()=>{
    setLoading(true);
    const res = await fetch(`/api/v1/guardian/events/search?${q()}`, { cache:"no-store" });
    const data = await res.json();
    setRows(data.items || []);
    setLoading(false);
  };

  const exportCsv = ()=>{
    window.location.href = `/api/v1/guardian/events/export?${q()}`;
  };

  return (
    <main style={{ padding:24 }}>
      <h1>Guardián — Búsqueda y Exportación</h1>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:8, margin:"8px 0 12px" }}>
        <input placeholder="from ISO-8601" value={from} onChange={e=>setFrom(e.target.value)} style={{ padding:8, border:"1px solid #ddd", borderRadius:6 }} />
        <input placeholder="to ISO-8601" value={to} onChange={e=>setTo(e.target.value)} style={{ padding:8, border:"1px solid #ddd", borderRadius:6 }} />
        <input placeholder="módulo" value={modulo} onChange={e=>setModulo(e.target.value)} style={{ padding:8, border:"1px solid #ddd", borderRadius:6 }} />
        <input placeholder="acción" value={accion} onChange={e=>setAccion(e.target.value)} style={{ padding:8, border:"1px solid #ddd", borderRadius:6 }} />
      </div>
      <div style={{ display:"flex", gap:8, marginBottom:12 }}>
        <button onClick={load} style={{ padding:"8px 12px" }}>Buscar</button>
        <button onClick={exportCsv} style={{ padding:"8px 12px" }}>Exportar CSV</button>
        <a href="/enterprise/guardian">Auditoría</a>
      </div>
      {loading ? <p style={{ color:"#555" }}>Cargando…</p> : (
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Evento</th>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Módulo</th>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Acción</th>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((e,i)=>(
              <tr key={i}>
                <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{e.event_id}</td>
                <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{e.modulo}</td>
                <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{e.accion}</td>
                <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{e.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
