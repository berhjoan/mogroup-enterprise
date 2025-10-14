"use client";
import React from "react";
export default function Proveedores(){
  const [rows,setRows]=React.useState([]); const [alias,setAlias]=React.useState(""); const [nombre,setNombre]=React.useState("");
  const load=async()=>{ const r=await fetch("/api/v1/providers",{cache:"no-store"}); const j=await r.json(); setRows(j.items||[]); };
  const add=async()=>{ const r=await fetch("/api/v1/providers",{method:"POST",headers:{ "Content-Type":"application/json" },body:JSON.stringify({ alias, contacto:{ nombre } })}); if(r.ok){ setAlias(""); setNombre(""); await load(); } };
  React.useEffect(()=>{ load(); },[]);
  return (<main style={{padding:24}}><h1>Proveedores — Onboarding</h1>
    <div style={{display:"flex",gap:8,margin:"8px 0 12px"}}><input placeholder="Alias" value={alias} onChange={e=>setAlias(e.target.value)} style={{padding:8,border:"1px solid #ddd",borderRadius:6}}/><input placeholder="Nombre contacto" value={nombre} onChange={e=>setNombre(e.target.value)} style={{padding:8,border:"1px solid #ddd",borderRadius:6}}/><button onClick={add} style={{padding:"8px 12px"}}>Agregar</button></div>
    <table style={{width:"100%",borderCollapse:"collapse"}}><thead><tr><th style={{textAlign:"left",borderBottom:"1px solid #ddd",padding:"8px"}}>Proveedor</th><th style={{textAlign:"left",borderBottom:"1px solid #ddd",padding:"8px"}}>Contacto</th><th style={{textAlign:"left",borderBottom:"1px solid #ddd",padding:"8px"}}>Estado</th></tr></thead><tbody>
    {rows.map((p,i)=>(<tr key={i}><td style={{borderBottom:"1px solid #eee",padding:"8px"}}>{p.alias}</td><td style={{borderBottom:"1px solid #eee",padding:"8px"}}>{p?.contacto?.nombre||""}</td><td style={{borderBottom:"1px solid #eee",padding:"8px"}}>{p.activo?"Activo":"Inactivo"}</td></tr>))}
    </tbody></table>
  </main>);
}
