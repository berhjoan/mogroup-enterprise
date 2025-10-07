"use client";
import React from "react";

export default function ChatWidget(){
  const [open,setOpen]=React.useState(false);
  const [text,setText]=React.useState("");
  const [msgs,setMsgs]=React.useState([{role:"bot",text:"Hola, soy kat. ¿En qué puedo ayudar?"}]);
  const sending = React.useRef(false);

  const send = async ()=>{
    if (!text.trim() || sending.current) return;
    const q = text.trim(); setText(""); sending.current = true;
    setMsgs(m=>[...m,{role:"user",text:q}]);
    try{
      const r = await fetch("/api/v1/kat/message",{ method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ text:q }) });
      const j = await r.json();
      setMsgs(m=>[...m,{role:"bot", text: j.reply || "..." }]);
    }catch{
      setMsgs(m=>[...m,{role:"bot", text:"Hubo un problema temporal. Intenta de nuevo."}]);
    }
    sending.current = false;
  };

  return (
    <>
      {open && (
        <div className="kat-panel card">
          <div className="kat-header">
            <span>kat — Asistente MOGroup</span>
            <button className="btn" onClick={()=>setOpen(false)}>Cerrar</button>
          </div>
          <div className="kat-body">
            {msgs.map((m,i)=>(
              <div key={i} className={`kat-msg ${m.role==="user"?"kat-user":"kat-bot"}`}>{m.text}</div>
            ))}
          </div>
          <div className="kat-input">
            <input className="input" placeholder="Escribe un mensaje..." value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>{ if(e.key==="Enter") send(); }} style={{ flex:1 }} />
            <button className="btn btn-primary" onClick={send}>Enviar</button>
          </div>
        </div>
      )}
      <button className="kat-fab" onClick={()=>setOpen(o=>!o)}>{open?"▲ Cerrar chat":"kat · Chat"}</button>
    </>
  );
}
