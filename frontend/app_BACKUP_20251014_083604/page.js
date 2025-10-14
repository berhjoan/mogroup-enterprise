'use client';
import Section from '@components/common/Section';
import Button from '@components/common/Button';
export default function Home(){
  return (
    <main style={{ padding: '24px' }}>
      <h1>MOGroup — Insumos, Transporte y Logística B2B</h1>
      <Section title="Operación 48h" description="Catálogo público sin precios y cotización automática por WhatsApp/API.">
        <Button onClick={()=>location.href='/catalogo'}>Ver Catálogo</Button>
        <span style={{ marginLeft: 12 }} />
        <Button onClick={()=>location.href='/enterprise'} style={{ background:'#111' }}>Acceso Enterprise</Button>
      </Section>
    </main>
  );
}
