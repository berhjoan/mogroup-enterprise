"use client";
import React from "react";

async function j(u, init){ const r = await fetch(u, init); const d = await r.json(); if (!r.ok) throw new Error(d?.error||"error"); return d; }

export default function QuoteDetail({ params }){
  const { id } = params || {};
  const [q, setQ] = React.useState(null);
  const [events, setEvents] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [msg, setMsg] = React.useState("");

  const load = async ()=>{
    setLoading(true); setMsg("");
    try{
      const d = await j(`/api/v1/quotes/${id}`, { method:"GET", cache:"no-store" });
      setQ(d.item || d.quote || null);
      const ev = await j(`/api/v1/guardian/events/by-quote/${id}`, { method:"GET", cache:"no-store" });
      setEvents(ev.items || []);
    }catch(e){ setMsg(e.message||"error"); }
    setLoading(false);
  };
  React.useEffect(()=>{ load(); }, [id]);

  const evaluate = async ()=>{
    setMsg("Evaluando...");
    try{
      const r = await j("/api/v1/quotes/evaluate", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ id }) });
      setMsg("Evaluación lista (ver tabla abajo).");
      await load();
    }catch(e){ setMsg("Error evaluación"); }
  };

  const sendEmail = async ()=>{
    setMsg("Enviando verificación...");
    try{
      const r = await j("/api/v1/verify/email/request", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ quote_id:id, email }) });
      setMsg(`Token generado (stub): ${r.token}`);
      await load();
    }catch(e){ setMsg("Error enviando verificación"); }
  };

  return (
    <main style={{ padding:24 }}>
      <h1>Cotización {id}</h1>
      {loading ? <p style={{ color:"#555" }}>Cargando…</p> : q ? (
        <>
          <p>Contacto: {q.contacto} · Ítem: {q.item} · Cantidad: {q.cantidad} · Estado: {q.estado}</p>
          <div style={{ display:"flex", gap:8, margin:"8px 0 16px" }}>
            <button onClick={evaluate} style={{ padding:"8px 12px" }}>Evaluar opciones</button>
            <input placeholder="correo@dominio" value={email} onChange={e=>setEmail(e.target.value)} style={{ padding:8, border:"1px solid #ddd", borderRadius:6 }} />
            <button onClick={sendEmail} style={{ padding:"8px 12px" }}>Enviar verificación</button>
            <a href={`/enterprise/cotizaciones/${id}/evaluar`}>Ver evaluación</a>
            <a href="/enterprise/cotizaciones">Volver</a>
          </div>
          {msg && <p style={{ color:"#555" }}>{msg}</p>}
          <h3>Eventos Guardián (cotización)</h3>
          <table style={{ width:"100%", borderCollapse:"collapse" }}>
            <thead><tr>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Timestamp</th>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Acción</th>
              <th style={{ textAlign:"left", borderBottom:"1px solid #ddd", padding:"8px" }}>Explicación</th>
            </tr></thead>
            <tbody>
              {events.map((e,i)=>(
                <tr key={i}>
                  <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{e.timestamp}</td>
                  <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{e.accion}</td>
                  <td style={{ borderBottom:"1px solid #eee", padding:"8px" }}>{e?.decision?.explicacion || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : <p>No encontrada</p>}
    </main>
  );
}
