'use client'
import { useState } from "react";
const CLASIFICACIONES = ["Insumos_Suministros_Oficina", "Equipo_Protección_Personal", "Hotelería_Hospitalidad"];
const CATEGORIAS = ["ARTICULOS_DE_OFICINA","MASCARILLAS","PRODUCTOS_HOTELERÍA"];
const PRODUCTOS = [
  {nombre:'Engrapadora Estándar',clave:'engrapadora, estándar, oficina',categoria:'ARTICULOS_DE_OFICINA',clasificacion:'Insumos_Suministros_Oficina'},
  {nombre:'Mascarilla 3 pliegues azul',clave:'mascarilla, azul, desechable',categoria:'MASCARILLAS',clasificacion:'Equipo_Protección_Personal'},
  {nombre:'Jabón espuma hotel',clave:'jabón, hotel, amenidad',categoria:'PRODUCTOS_HOTELERÍA',clasificacion:'Hotelería_Hospitalidad'}
];
export default function ClienteHenryCatalogo(){
  const [filtroClasificacion,setFiltroClasificacion]=useState('Todas')
  const [filtroCategoria,setFiltroCategoria]=useState('Todas')
  const [busqueda,setBusqueda]=useState('')
  const [seleccionados,setSeleccionados]=useState([])
  const productosFiltrados = PRODUCTOS.filter(producto=>{
    const clasif = filtroClasificacion==="Todas"||producto.clasificacion===filtroClasificacion
    const cat = filtroCategoria==="Todas"||producto.categoria===filtroCategoria
    const busc = producto.nombre.toLowerCase().includes(busqueda.toLowerCase())||producto.clave.toLowerCase().includes(busqueda.toLowerCase())
    return clasif&&cat&&busc
  });
  const toggleProducto = prod => seleccionados.includes(prod) ? setSeleccionados(seleccionados.filter(p=>p!==prod)) : setSeleccionados([...seleccionados,prod]);
  return (
    <div className="min-h-screen p-6 bg-blue-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Catálogo General Henry</h1>
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          <select className="rounded border px-3 py-2" value={filtroClasificacion} onChange={e=>setFiltroClasificacion(e.target.value)}>
            <option value="Todas">Clasificaciones</option>{CLASIFICACIONES.map(cl=>(<option key={cl} value={cl}>{cl.replace(/_/g," ")}</option>))}
          </select>
          <select className="rounded border px-3 py-2" value={filtroCategoria} onChange={e=>setFiltroCategoria(e.target.value)}>
            <option value="Todas">Categorías</option>{CATEGORIAS.map(cat=>(<option key={cat} value={cat}>{cat.replace(/_/g," ")}</option>))}
          </select>
          <input className="rounded border px-3 py-2" placeholder="Buscar..." value={busqueda} onChange={e=>setBusqueda(e.target.value)}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {productosFiltrados.map((producto,idx)=>(
            <div key={idx} className={`p-4 rounded-2xl shadow flex flex-col gap-1 bg-white border-2 ${seleccionados.includes(producto)?"border-blue-500":"border-gray-200"}`}>
              <div className="font-bold text-lg">{producto.nombre}</div>
              <div className="text-xs text-gray-600">{producto.clave}</div>
              <div className="flex gap-1 text-xs mb-2">
                <span className="bg-gray-100 py-1 px-2 rounded">{producto.categoria.replace(/_/g," ")}</span>
                <span className="bg-gray-100 py-1 px-2 rounded">{producto.clasificacion.replace(/_/g," ")}</span>
              </div>
              <button onClick={()=>toggleProducto(producto)} className={`mt-2 px-4 py-2 rounded-xl font-medium ${seleccionados.includes(producto)?"bg-blue-600 text-white":"bg-blue-100 text-blue-800 hover:bg-blue-200"}`}>{seleccionados.includes(producto)?"Seleccionado ✓":"Seleccionar"}</button>
            </div>
          ))}
        </div>
        <div className="my-8">
          <h2 className="font-bold mb-1">Productos Seleccionados ({seleccionados.length})</h2>
          <div className="flex flex-wrap gap-2">{seleccionados.map((p,idx)=>(<div key={idx} className="bg-green-100 px-3 py-1 rounded text-green-800 flex gap-1 items-center"><span>{p.nombre}</span><button onClick={()=>toggleProducto(p)} className="text-red-500">x</button></div>))}</div>
          <button className="mt-5 bg-green-700 text-white px-8 py-2 rounded-xl hover:bg-green-800" disabled={seleccionados.length===0} onClick={()=>alert("Catálogo enviado al admin.")}>Enviar Selección al Administrador</button>
        </div>
      </div>
    </div>
  );
}
