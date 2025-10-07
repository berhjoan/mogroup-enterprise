'use client';
export default function Filter({ options=[], value, onChange }){
  return (
    <select value={value} onChange={(e)=>onChange(e.target.value)} style={{ padding:8, borderRadius:6 }}>
      <option value="">Todas las categorías</option>
      {options.map((o,i)=>(<option key={i} value={o}>{o}</option>))}
    </select>
  );
}
