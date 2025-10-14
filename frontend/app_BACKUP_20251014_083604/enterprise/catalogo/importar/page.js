"use client";
import React from "react";
export default function ImportarCatalogo(){
  const [text,setText]=React.useState(""); const [res,setRes]=React.useState(null); const [loading,setLoading]=React.useState(false);
  const sample = "sku,nombre,categoria,marca,descripcion,imagen_url,atributos_json,activo\nSKU-A,Caja 12in,Empaques,MOGroup,Desc,,{\"material\":\"kraft\"},true\n";
  const send = async ()=>{
    setLoading(true); setRes(null);
    const r = await fetch("/api/v1/catalog/import", { method:"POST", headers:{ "Content-Type":"text/plain" }, body: text || sample });
    const j = await r.json(); setRes(j); setLoading(false);
  };
  return (<main style={{padding:24}}>
    <h1>Importar catálogo — CSV</h1>
    <p>Pegue CSV con columnas mínimas: sku,nombre,categoria,marca[,descripcion,imagen_url,atributos_json,activo]</p>
    <textarea value={text} onChange={e=>setText(e.target.value)} rows={10} style={{width:"100%",border:"1px solid #ddd",borderRadius:6,padding:8}}/>
    <div style={{marginTop:8,display:"flex",gap:8}}><button onClick={send} style={{padding:"8px 12px"}} disabled={loading}>{loading?"Procesando…":"Importar"}</button><button onClick={()=>setText(sample)} style={{padding:"8px 12px"}}>Cargar ejemplo</button><a href="/api/v1/guardian/events/export?modulo=catalogo">Exportar eventos CSV</a></div>
    {res && (<pre style={{marginTop:12,background:"#f7f7f7",padding:12,borderRadius:8}}>{JSON.stringify(res.summary,null,2)}</pre>)}
  </main>);
}
