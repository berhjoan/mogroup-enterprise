'use client';
export default function Section({ title, description, children }){
  return (
    <section style={{ margin:'24px 0' }}>
      <h2 style={{ margin:'0 0 8px' }}>{title}</h2>
      {description ? <p style={{ color:'#555', margin:'0 0 12px' }}>{description}</p> : null}
      {children}
    </section>
  );
}
