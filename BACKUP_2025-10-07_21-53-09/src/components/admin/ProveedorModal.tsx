'use client';
import { useState, useEffect } from 'react';
import { Proveedor } from '@/types';

interface ProveedorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (proveedor: Proveedor) => void;
  proveedor?: Proveedor | null;
}

const categorias = ['Químicos', 'Equipos de Protección', 'Herramientas', 'Materiales', 'Servicios', 'Otros'];
const paises = ['Panamá', 'Estados Unidos', 'México', 'Colombia', 'Otro'];

export default function ProveedorModal({ isOpen, onClose, onSave, proveedor }: ProveedorModalProps) {
  const [formData, setFormData] = useState<Proveedor>({
    nombre: '',
    categoria: 'Químicos',
    contacto: '',
    email: '',
    telefono: '',
    direccion: '',
    pais: 'Panamá',
    estado: 'activo',
    notas: ''
  });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (proveedor) {
      setFormData(proveedor);
    } else {
      setFormData({
        nombre: '',
        categoria: 'Químicos',
        contacto: '',
        email: '',
        telefono: '',
        direccion: '',
        pais: 'Panamá',
        estado: 'activo',
        notas: ''
      });
    }
    setErrors({});
  }, [proveedor, isOpen]);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre requerido';
    if (!formData.contacto.trim()) newErrors.contacto = 'Contacto requerido';
    if (!formData.email.trim()) newErrors.email = 'Email requerido';
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.telefono.trim()) newErrors.telefono = 'Teléfono requerido';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden'>
        <div className='bg-gradient-to-r from-mogroup-blue to-mogroup-accent text-white px-6 py-4 flex items-center justify-between'>
          <h2 className='text-xl font-bold'>{proveedor ? 'Editar Proveedor' : 'Nuevo Proveedor'}</h2>
          <button onClick={onClose} className='text-white/80 hover:text-white transition-colors'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className='p-6 overflow-y-auto max-h-[calc(90vh-120px)]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Nombre *</label>
              <input
                type='text'
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                className={'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ' + (errors.nombre ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-mogroup-accent')}
              />
              {errors.nombre && <p className='text-red-500 text-xs mt-1'>{errors.nombre}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Categoría *</label>
              <select
                value={formData.categoria}
                onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent'
              >
                {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Contacto *</label>
              <input
                type='text'
                value={formData.contacto}
                onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                className={'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ' + (errors.contacto ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-mogroup-accent')}
              />
              {errors.contacto && <p className='text-red-500 text-xs mt-1'>{errors.contacto}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Email *</label>
              <input
                type='email'
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ' + (errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-mogroup-accent')}
              />
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Teléfono *</label>
              <input
                type='tel'
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                className={'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ' + (errors.telefono ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-mogroup-accent')}
              />
              {errors.telefono && <p className='text-red-500 text-xs mt-1'>{errors.telefono}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>País *</label>
              <select
                value={formData.pais}
                onChange={(e) => setFormData({...formData, pais: e.target.value})}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent'
              >
                {paises.map(pais => <option key={pais} value={pais}>{pais}</option>)}
              </select>
            </div>

            <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Dirección</label>
              <input
                type='text'
                value={formData.direccion}
                onChange={(e) => setFormData({...formData, direccion: e.target.value})}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Estado *</label>
              <select
                value={formData.estado}
                onChange={(e) => setFormData({...formData, estado: e.target.value as any})}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent'
              >
                <option value='activo'>Activo</option>
                <option value='inactivo'>Inactivo</option>
                <option value='pendiente'>Pendiente</option>
              </select>
            </div>

            <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Notas</label>
              <textarea
                value={formData.notas}
                onChange={(e) => setFormData({...formData, notas: e.target.value})}
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mogroup-accent'
              />
            </div>
          </div>

          <div className='flex gap-3 mt-6'>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors'
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='flex-1 px-6 py-3 bg-gradient-to-r from-mogroup-blue to-mogroup-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform'
            >
              {proveedor ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
