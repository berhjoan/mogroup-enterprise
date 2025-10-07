export default function Home(){
  return(
    <main>
      <h1>MOGROUP-ENTERPRISE OS</h1>
      <p>Frontend operativo.</p>
      <div style={{display:"flex",gap:12,marginTop:12}}>
        <a href="/catalogo" style={{padding:"10px 16px",background:"#0D6EFD",color:"#fff",borderRadius:6,textDecoration:"none"}}>Abrir Catálogo</a>
        <a href="/chat" style={{padding:"10px 16px",background:"#6f42c1",color:"#fff",borderRadius:6,textDecoration:"none"}}>Chat Gemini</a>
      </div>
    </main>
  );
}
