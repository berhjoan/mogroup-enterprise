export default function Footer(){
  return (
    <footer className="w-full border-t mt-12">
      <div className="max-w-6xl mx-auto p-6 text-sm text-gray-600">
        © {new Date().getFullYear()} MOGROUP — Logística, Transporte e Insumos. Todos los derechos reservados.
      </div>
    </footer>
  )
}
