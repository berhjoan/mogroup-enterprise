export default function Page(){
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Logística y Transporte</h1>
      <p className="mt-3 text-gray-600">Operación nacional con SLA 48h, rutas optimizadas y tracking.</p>
      <div className="mt-6 flex gap-3">
        <a href="/catalogo" className="btn">Ver Catálogo</a>
        <a href="/enterprise" className="btn" style={{background:"#198754"}}>Entrar a Enterprise</a>
      </div>
    </main>
  )
}
