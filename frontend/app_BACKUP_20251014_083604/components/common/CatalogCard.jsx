'use client';
export default function CatalogCard({ title, desc }){
  return (
    <div style={{ border:'1px solid #eee', borderRadius:8, padding:12, marginBottom:12 }}>
      <h3 style={{ margin:'0 0 6px' }}>{title}</h3>
      <p style={{ margin:0, color:'#555' }}>{desc}</p>
    </div>
  );
}
