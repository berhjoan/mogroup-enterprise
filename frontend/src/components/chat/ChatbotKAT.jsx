"use client";
import { useState } from "react";

export default function ChatbotKAT(){
  const [open,setOpen] = useState(true);
  const [q,setQ] = useState("");
  const [a,setA] = useState("");
  const [loading,setLoading] = useState(false);
  const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5001";

  const ask = async ()=>{
    if(!q.trim()) return;
    setLoading(true); setA("");
    try{
      const res = await fetch(`${API}/api/v1/ai/chat`,{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ prompt: q })
      });
      const data = await res.json();
      setA(data?.answer ?? JSON.stringify(data));
    }catch(e){ setA("Error consultando a KAT"); }
    finally{ setLoading(false); }
  };

  return (
    <>
      <button onClick={()=>setOpen(!open)} style={{position:"fixed",right:24,bottom:24,padding:"12px 16px",background:"#0D6EFD",color:"#fff",border:"none",borderRadius:999,zIndex:50}}>
        {open ? "Cerrar KAT" : "KAT"}
      </button>
      {open && (
        <div style={{position:"fixed",right:24,bottom:84,width:360,maxWidth:"90vw",background:"#fff",border:"1px solid #eee",borderRadius:12,boxShadow:"0 8px 28px rgba(0,0,0,.08)",zIndex:40}}>
          <div style={{padding:12,borderBottom:"1px solid #eee",fontWeight:700}}>KAT — Asistencia</div>
          <div style={{padding:12}}>
            <textarea rows={4} value={q} onChange={e=>setQ(e.target.value)} placeholder="Escribe tu consulta..." style={{width:"100%",padding:10}} />
            <div style={{marginTop:8}}>
              <button onClick={ask} disabled={loading} className="btn">{loading?"Consultando...":"Enviar"}</button>
            </div>
            <pre style={{whiteSpace:"pre-wrap",background:"#f9fafb",padding:10,marginTop:10,borderRadius:6,maxHeight:200,overflow:"auto"}}>{a}</pre>
          </div>
        </div>
      )}
    </>
  );
}
