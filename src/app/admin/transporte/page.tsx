'use client';
import DataTable from '@/components/admin/DataTable';

export default function TransportePage() {
  const columns = [
'Ruta','Vehículo','Chofer','Estado'
];
  const data: any[] = []; // Datos mock - conectar a API

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-mogroup-blue mb-2'>
🚚
 
Transporte
</h2>
          <p className='text-gray-600'>Gestión de 
transporte
</p>
        </div>
        <button className='px-6 py-3 bg-mogroup-accent text-white rounded-lg font-semibold hover:scale-105 transition-transform'>
          + Nuevo
        </button>
      </div>
      <DataTable columns={columns} data={data} actions={(row) => (
        <div className='flex gap-2'>
          <button className='text-mogroup-blue hover:underline'>Ver</button>
          <button className='text-gray-600 hover:underline'>Editar</button>
        </div>
      )} />
    </div>
  );
}
