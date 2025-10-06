'use client';
import { useState, useEffect } from 'react';
import DataTable from '@/components/admin/DataTable';
import ProveedorModal from '@/components/admin/ProveedorModal';
import { Proveedor } from '@/types';

export default function ProveedoresPage() {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProveedor, setSelectedProveedor] = useState<Proveedor | null>(null);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    fetchProveedores();
  }, []);

  const fetchProveedores = async () => {
    try {
      const res = await fetch('/api/proveedores');
      const data = await res.json();
      setProveedores(data.proveedores || []);
    } catch (error) {
      console.error('Error fetching proveedores:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (proveedor: Proveedor) => {
    try {
      const method = proveedor.id ? 'PUT' : 'POST';
      const res = await fetch('/api/proveedores', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proveedor)
      });
      if (res.ok) {
        await fetchProveedores();
        setIsModalOpen(false);
        setSelectedProveedor(null);
      }
    } catch (error) {
      console.error('Error saving proveedor:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Está seguro de eliminar este proveedor?')) return;
    try {
      const res = await fetch('/api/proveedores?id=' + id, { method: 'DELETE' });
      if (res.ok) await fetchProveedores();
    } catch (error) {
      console.error('Error deleting proveedor:', error);
    }
  };

  const handleEdit = (proveedor: Proveedor) => {
    setSelectedProveedor(proveedor);
    setIsModalOpen(true);
  };

  const filteredProveedores = proveedores.filter(p =>
    p.nombre.toLowerCase().includes(filter.toLowerCase()) ||
    p.categoria.toLowerCase().includes(filter.toLowerCase())
  );

  const columns = ['Nombre', 'Categoría', 'Contacto', 'Email', 'Teléfono', 'Estado'];

  const tableData = filteredProveedores.map(p => ({
    nombre: p.nombre,
    categoría: p.categoria,
    contacto: p.contacto,
    email: p.email,
    teléfono: p.telefono,
    estado: (
      <span className={'px-3 py-1 rounded-full text-xs font-semibold ' + (p.estado === 'activo' ? 'bg-green-100 text-green-700' : p.estado === 'inactivo' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700')}>
        {p.estado}
      </span>
    ),
    _original: p
  }));

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-mogroup-blue mb-2'>🏭 Proveedores</h2>
          <p className='text-gray-600'>Gestión de proveedores - Base del catálogo</p>
        </div>
        <button
          onClick={() => {setSelectedProveedor(null); setIsModalOpen(true);}}
          className='px-6 py-3 bg-gradient-to-r from-mogroup-blue to-mogroup-accent text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg'
        >
          + Nuevo Proveedor
        </button>
      </div>

      <div className='bg-white rounded-xl shadow-lg p-4'>
        <input
          type='text'
          placeholder='Buscar por nombre o categoría...'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent'
        />
      </div>

      {loading ? (
        <div className='text-center py-12'>
          <div className='inline-block animate-spin rounded-full h-12 w-12 border-4 border-mogroup-blue border-t-transparent' />
          <p className='text-gray-600 mt-4'>Cargando proveedores...</p>
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={tableData}
          actions={(row: any) => (
            <div className='flex gap-2 justify-end'>
              <button
                onClick={() => handleEdit(row._original)}
                className='px-3 py-1 text-mogroup-blue hover:bg-blue-50 rounded transition-colors'
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(row._original.id)}
                className='px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors'
              >
                Eliminar
              </button>
            </div>
          )}
        />
      )}

      <ProveedorModal
        isOpen={isModalOpen}
        onClose={() => {setIsModalOpen(false); setSelectedProveedor(null);}}
        onSave={handleSave}
        proveedor={selectedProveedor}
      />
    </div>
  );
}
