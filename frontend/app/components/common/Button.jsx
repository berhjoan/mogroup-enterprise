'use client';
export default function Button({ children, onClick, type='button', style={} }){
  const base = { padding: '10px 14px', background: '#0b5fff', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' };
  return <button type={type} onClick={onClick} style={{ ...base, ...style }}>{children}</button>;
}
