"use client";
import React, { useState } from "react";

export default function ChatbotKAT(){
  const [q,setQ] = useState("");
  const [a,setA] = useState("");
  const [loading,setLoading] = useState(false);

  const ask = async ()=>{
    if(!q.trim()) return;
    setLoading(true); setA("");
    try{
      const res = await fetch("http://127.0.0.1:5001/api/v1/ai/chat",{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ prompt: q })
      });
      const data = await res.json();
      setA(data?.answer ?? JSON.stringify(data));
    }catch(e){
      setA("Error consultando el backend");
    }finally{
      setLoading(false);
    }
  };

  return (
    <section style={{border:"1px solid #eee",borderRadius:8,padding:12}}>
      <h3>Chat Gemini</h3>
      <textarea value={q} onChange={e=>setQ(e.target.value)} rows={4} style={{width:"100%",padding:10}} placeholder="Escribe tu consulta..."/>
      <div style={{marginTop:8}}>
        <button onClick={ask} disabled={loading} style={{padding:"8px 14px",background:"#0D6EFD",color:"#fff",border:"none",borderRadius:6}}>
          {loading ? "Consultando..." : "Enviar"}
        </button>
      </div>
      <pre style={{whiteSpace:"pre-wrap",background:"#f6f6f6",padding:10,marginTop:10,borderRadius:6}}>{a}</pre>
    </section>
  );
}
