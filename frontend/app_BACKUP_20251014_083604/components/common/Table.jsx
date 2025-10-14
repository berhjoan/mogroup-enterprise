'use client';
export default function Table({ columns = [], rows = [] }){
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>{columns.map((c,i)=>(<th key={i} style={{ textAlign:'left', borderBottom:'1px solid #ddd', padding:'8px' }}>{c}</th>))}</tr>
      </thead>
      <tbody>
        {rows.map((r,ri)=>(
          <tr key={ri}>
            {columns.map((c,ci)=>(<td key={ci} style={{ borderBottom:'1px solid #eee', padding:'8px' }}>{r[c]}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
