'use client';
import React from 'react';

export default function GuardianAuditoria(){
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const load = async ()=>{
    setLoading(true);
    const res = await fetch('/api/v1/guardian/events', { cache:'no-store' });
    const data = await res.json();
    setRows(data.items || []);
    setLoading(false);
  };
  React.useEffect(()=>{ load(); }, []);

  return (
    <main style={{ padding:24 }}>
      <h1>Guardián — Auditoría</h1>
      {loading ? <p style={{ color:'#555' }}>Cargando…</p> : (
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>Evento</th>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>Módulo</th>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>Acción</th>
              <th style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((e,i)=>(
              <tr key={i}>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{e.event_id}</td>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{e.modulo}</td>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{e.accion}</td>
                <td style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{e.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
