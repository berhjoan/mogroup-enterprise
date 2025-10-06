'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function CotizarPage() {
  const sp = useSearchParams();
  const item = sp.get('item') || '';
  const [state, setState] = useState<'idle'|'sending'|'ok'|'err'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState('sending');
    const res = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(fd as any))
    });
    setState(res.ok ? 'ok' : 'err');
  }

  return (
    <main>
      <h1 className='text-2xl font-semibold mb-4'>Solicitar cotización</h1>
      <form onSubmit={onSubmit} className='space-y-3 max-w-xl'>
        <input name='producto' defaultValue={item} placeholder='Producto o categoría' className='border p-2 w-full' />
        <input name='empresa' placeholder='Empresa' className='border p-2 w-full' required />
        <input name='contacto' placeholder='Nombre de contacto' className='border p-2 w-full' required />
        <input name='email' type='email' placeholder='Email' className='border p-2 w-full' required />
        <input name='telefono' placeholder='Teléfono' className='border p-2 w-full' />
        <textarea name='detalle' placeholder='Detalle de requerimiento' className='border p-2 w-full' rows={4} />
        <button className='px-4 py-2 bg-mogroup-blue text-white rounded' disabled={state==='sending'}>
          {state==='sending' ? 'Enviando...' : 'Enviar solicitud'}
        </button>
        {state==='ok' && <p className='text-green-700'>Solicitud enviada. Nuestro equipo te contactará.</p>}
        {state==='err' && <p className='text-red-700'>Error al enviar. Intenta nuevamente.</p>}
      </form>
    </main>
  );
}
