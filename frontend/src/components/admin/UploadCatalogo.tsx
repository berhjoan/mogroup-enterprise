'use client';
import { useState } from 'react';

interface UploadCatalogoProps {
  proveedorId: number;
  onComplete: () => void;
}

export default function UploadCatalogo({ proveedorId, onComplete }: UploadCatalogoProps) {
  const [archivo, setArchivo] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<any>(null);

  const handleUpload = async () => {
    if (!archivo) return;
    
    setLoading(true);
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('proveedor_id', proveedorId.toString());
    
    try {
      const res = await fetch('/api/kat/procesar-catalogo', {
        method: 'POST',
        body: formData
      });
      
      const data = await res.json();
      setResultado(data);
      
      if (data.success) {
        onComplete();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-lg p-6'>
      <div className='flex items-center gap-3 mb-4'>
        <div className='w-12 h-12 bg-gradient-to-br from-mogroup-blue to-mogroup-accent rounded-lg flex items-center justify-center'>
          <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
          </svg>
        </div>
        <div>
          <h3 className='text-lg font-bold text-mogroup-blue'>Procesar Catálogo con Kat AI</h3>
          <p className='text-sm text-gray-600'>Sube el PDF del catálogo para extracción automática</p>
        </div>
      </div>

      <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4'>
        <input
          type='file'
          accept='.pdf'
          onChange={(e) => setArchivo(e.target.files?.[0] || null)}
          className='hidden'
          id='file-upload'
        />
        <label htmlFor='file-upload' className='cursor-pointer'>
          {archivo ? (
            <div>
              <p className='text-mogroup-blue font-semibold'>{archivo.name}</p>
              <p className='text-sm text-gray-500'>{(archivo.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          ) : (
            <div>
              <svg className='w-12 h-12 mx-auto text-gray-400 mb-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
              </svg>
              <p className='text-gray-600'>Haz clic o arrastra un archivo PDF</p>
            </div>
          )}
        </label>
      </div>

      <button
        onClick={handleUpload}
        disabled={!archivo || loading}
        className={'w-full py-3 rounded-lg font-semibold transition-all ' + (!archivo || loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-mogroup-blue to-mogroup-accent text-white hover:scale-105')}
      >
        {loading ? 'Procesando con Kat AI...' : 'Procesar Catálogo'}
      </button>

      {resultado && (
        <div className='mt-4 p-4 bg-green-50 border border-green-200 rounded-lg'>
          <p className='text-green-800 font-semibold'>✅ Procesamiento completado</p>
          <p className='text-sm text-gray-700'>Productos detectados: {resultado.productos_detectados}</p>
          <p className='text-sm text-gray-700'>Productos categorizados: {resultado.productos_categorizados}</p>
        </div>
      )}
    </div>
  );
}
