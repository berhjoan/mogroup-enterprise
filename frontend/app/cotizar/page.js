'use client';
import React from 'react';

export default function Cotizar(){
  const [form, setForm] = React.useState({ contacto:'', item:'', cantidad:1, comentario:'' });
  const [resp, setResp] = React.useState(null);
  const onChange = (k)=>(e)=> setForm({ ...form, [k]: e.target.value });

  const submit = async (e)=>{
    e.preventDefault();
    setResp(null);
    const res = await fetch('/api/v1/quotes', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) });
    const data = await res.json();
    setResp({ ok: res.ok, data });
    if (res.ok) setForm({ contacto:'', item:'', cantidad:1, comentario:'' });
  };

  return (
    <main style={{ padding:24 }}>
      <h1>Solicitar cotización</h1>
      <form onSubmit={submit} style={{ maxWidth:520 }}>
        <label>Contacto</label>
        <input value={form.contacto} onChange={onChange('contacto')} style={{ width:'100%', padding:8, margin:'6px 0 12px' }} />
        <label>Ítem</label>
        <input value={form.item} onChange={onChange('item')} style={{ width:'100%', padding:8, margin:'6px 0 12px' }} />
        <label>Cantidad</label>
        <input type="number" value={form.cantidad} onChange={onChange('cantidad')} style={{ width:'100%', padding:8, margin:'6px 0 12px' }} />
        <label>Comentario</label>
        <textarea value={form.comentario} onChange={onChange('comentario')} style={{ width:'100%', padding:8, margin:'6px 0 12px' }} />
        <button type="submit" style={{ padding:'10px 14px' }}>Enviar</button>
      </form>
      {resp && <pre style={{ background:'#f7f7f7', padding:12, marginTop:12, overflowX:'auto' }}>{JSON.stringify(resp.data, null, 2)}</pre>}
    </main>
  );
}
