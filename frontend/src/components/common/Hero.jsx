export default function Hero(){
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Líder en Logística, Transporte e Insumos B2B</h1>
        <p className="mt-4 text-lg text-gray-600">Operado por MOGROUP-ENTERPRISE OS: IA + CRM/ERP con cotización automática y SLA 48h.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <a href="/catalogo" className="btn">Explorar Catálogo</a>
          <a href="/enterprise" className="btn" style={{background:"#198754"}}>Entrar a MOGROUP-ENTERPRISE</a>
        </div>
      </div>
    </section>
  )
}
