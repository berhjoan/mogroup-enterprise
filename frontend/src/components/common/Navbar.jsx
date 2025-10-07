export default function Navbar(){
  return (
    <header className="w-full border-b">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">MOGROUP</a>
        <nav className="flex gap-4">
          <a href="/servicios/logistica">Logística</a>
          <a href="/servicios/insumos">Insumos</a>
          <a href="/servicios/jardineria">Jardinería</a>
          <a href="/servicios/soldadura">Soldadura</a>
          <a href="/servicios/construccion-liviana">Construcción</a>
          <a href="/servicios/software">Software</a>
          <a href="/catalogo" className="btn">Catálogo</a>
          <a href="/enterprise" className="btn" style={{background:"#198754"}}>MOGROUP-ENTERPRISE</a>
        </nav>
      </div>
    </header>
  )
}
