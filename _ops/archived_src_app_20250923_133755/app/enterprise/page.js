const mods = [
  { href:"/enterprise/proveedores", label:"Proveedores" },
  { href:"/enterprise/catalogo", label:"Catálogo" },
  { href:"/enterprise/cotizaciones", label:"Cotizaciones" },
  { href:"/enterprise/compras", label:"Compras" },
  { href:"/enterprise/almacen", label:"Almacén" },
  { href:"/enterprise/transporte", label:"Transporte" },
  { href:"/enterprise/facturacion", label:"Facturación" },
  { href:"/enterprise/crm", label:"CRM" },
  { href:"/enterprise/soporte", label:"Soporte" },
  { href:"/enterprise/configuracion", label:"Configuración" }
];
export default function Enterprise(){
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold">MOGROUP-ENTERPRISE OS</h1>
      <p className="text-gray-600">Panel administrativo — módulos en desarrollo con KAT asistiendo 24/7.</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {mods.map(m=>(<a key={m.href} className="border p-4 rounded hover:shadow" href={m.href}>{m.label}</a>))}
      </div>
    </main>
  )
}
