"use client";
import { useState } from "react";
const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5001";

export default function Cotizar(){
  const [form,setForm] = useState({ customer_name:"", customer_email:"", customer_phone:"" });
  const [rows,setRows] = useState([{ sku:"BIO-001", quantity:10 }]);
  const [msg,setMsg] = useState("");

  const addRow = ()=> setRows([...rows,{sku:"",quantity:1}]);
  const setRow = (i,k,v)=>{ const c=[...rows]; c[i][k]=v; setRows(c); };

  const send = async ()=>{
    setMsg("Enviando...");
    const res = await fetch(`${API}/api/v1/quotes`, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ ...form, items: rows })
    });
    const j = await res.json();
    setMsg(JSON.stringify(j,null,2));
  };

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Solicitar Cotización</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <input className="border p-2 rounded" placeholder="Nombre" value={form.customer_name} onChange={e=>setForm({...form,customer_name:e.target.value})}/>
        <input className="border p-2 rounded" placeholder="Correo" value={form.customer_email} onChange={e=>setForm({...form,customer_email:e.target.value})}/>
        <input className="border p-2 rounded" placeholder="WhatsApp (+507...)" value={form.customer_phone} onChange={e=>setForm({...form,customer_phone:e.target.value})}/>
      </div>
      <h3 className="mt-6 font-semibold">Artículos</h3>
      {rows.map((r,i)=>(
        <div key={i} className="grid grid-cols-2 gap-4 mt-2">
          <input className="border p-2 rounded" placeholder="SKU" value={r.sku} onChange={e=>setRow(i,"sku",e.target.value)}/>
          <input className="border p-2 rounded" placeholder="Cantidad" type="number" value={r.quantity} onChange={e=>setRow(i,"quantity",e.target.value)}/>
        </div>
      ))}
      <button onClick={addRow} className="btn" style={{marginTop:12}}>Agregar Ítem</button>
      <div className="mt-6 flex gap-3">
        <button onClick={send} className="btn">Enviar</button>
        <a href="/catalogo" className="btn" style={{background:"#6c757d"}}>Volver al catálogo</a>
      </div>
      <pre className="mt-4 bg-gray-50 p-3 rounded">{msg}</pre>
    </main>
  )
}
