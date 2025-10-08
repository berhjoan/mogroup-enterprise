'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type Msg = { role: 'user'|'assistant'; content: string };

export default function KatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'assistant', content: 'Hola, soy Kat de MOGROUP. ¿En qué puedo ayudar?' }
  ]);
  const [input, setInput] = useState('');
  const [showProactive, setShowProactive] = useState(false);
  const pathname = usePathname();

  // Comportamiento proactivo en catálogo
  useEffect(() => {
    if (pathname === '/catalogo') {
      const timer = setTimeout(() => {
        if (!open) setShowProactive(true);
      }, 60000); // 60 segundos
      return () => clearTimeout(timer);
    }
  }, [pathname, open]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { role: 'user', content: text }]);
    setInput('');
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, { role: 'user', content: text }] })
    });
    const data = await res.json();
    if (data?.type === 'intent') {
      const actions = (data.intent?.actions || []) as Array<{label:string; href:string}>;
      const lines = [String(data.intent.message || ''), ...actions.map(a => '- ' + a.label + ': ' + a.href)].join('\n');
      setMessages(m => [...m, { role: 'assistant', content: lines }]);
      return;
    }
    if (data?.content) {
      setMessages(m => [...m, { role: 'assistant', content: data.content }]);
    } else {
      setMessages(m => [...m, { role: 'assistant', content: 'No pude responder en este momento.' }]);
    }
  }

  if (!open) {
    return (
      <>
        <button
          onClick={()=>{setOpen(true); setShowProactive(false);}}
          className='fixed bottom-6 right-6 rounded-full bg-mogroup-blue text-white px-5 py-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl z-50'
        >
          <span className='text-2xl font-bold'>K</span>
        </button>
        {showProactive && (
          <div className='fixed bottom-24 right-6 bg-white rounded-lg shadow-xl p-4 max-w-xs z-50 animate-fadeInUp'>
            <button onClick={() => setShowProactive(false)} className='absolute top-2 right-2 text-gray-400 hover:text-gray-600'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <p className='text-sm text-gray-700'>¿Necesitas ayuda para encontrar un producto?</p>
          </div>
        )}
      </>
    );
  }

  return (
    <div className='fixed bottom-6 right-6 w-[380px] max-w-[90vw] bg-white border shadow-2xl rounded-2xl overflow-hidden z-50'>
      <div className='bg-mogroup-blue text-white px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full bg-mogroup-accent flex items-center justify-center font-bold text-lg'>K</div>
          <span className='font-semibold'>Kat, Asistente MOGROUP</span>
        </div>
        <button onClick={()=>setOpen(false)} className='text-white/80 hover:text-white transition-colors'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>
      <div className='h-80 overflow-auto p-4 space-y-3 bg-gray-50'>
        {messages.map((m, i) => (
          <div key={i} className={m.role==='user' ? 'text-right' : 'text-left'}>
            <div className={'inline-block px-4 py-2 rounded-2xl max-w-[80%] ' + (m.role==='user' ? 'bg-mogroup-accent text-white' : 'bg-white shadow-md text-gray-800')}>
              {m.content.split('\n').map((ln, k) => <div key={k} className='text-sm'>{ln}</div>)}
            </div>
          </div>
        ))}
      </div>
      <div className='p-4 bg-white border-t flex gap-2'>
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>{ if(e.key==='Enter') send(); }}
          placeholder='Escribe tu consulta...'
          className='border rounded-full p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-mogroup-accent'
        />
        <button onClick={send} className='px-5 py-3 bg-mogroup-accent text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg'>
          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
          </svg>
        </button>
      </div>
    </div>
  );
}
