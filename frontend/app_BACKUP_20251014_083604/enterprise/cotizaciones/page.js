'use client';
import React from 'react';

export default function EnterpriseCotizaciones(){
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const load = async ()=>{
    setLoading(true);
    const res = await fetch('/api/v1/quotes', { cache:'no-store' });
    const data = await res.json();
    setRows(data.items || []);
    setLoading(false);
  };
  React.useEffect(()=>{ load(); }, []);

  return (
    <main style={{ padding:24 }}>
      <h1>Cotizaciones (Enterprise)</h1>
      {loading ? <p style={{ color:'#555' }}>Cargando…</p> : (
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>ID</th>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>Contacto</th>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>Ítem</th>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>Cantidad</th>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>Estado</th>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r.id}>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{r.id}</td>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{r.contacto}</td>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{r.item}</td>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{r.cantidad}</td>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{r.estado}</td>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}><a href={`/enterprise/cotizaciones/${r.id}`}>Ver</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p style={{ marginTop:12 }}><a href="/cotizar">Crear nueva cotización</a></p>
    </main>
  );
}
