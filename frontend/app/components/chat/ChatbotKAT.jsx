'use client';
import React, { useState } from 'react';

export default function ChatbotKAT(){
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([{ role: 'bot', text: 'Hola, ¿en qué se puede ayudar hoy?' }]);

  const reply = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('catálogo') || msg.includes('catalogo') || msg.includes('productos')) {
      return 'Perfecto. El catálogo incluye empaques, desinfectantes, oficina, herramientas y más. ¿Desea ir al catálogo para explorar?';
    }
    if (msg.includes('cotización') || msg.includes('cotizacion') || msg.includes('precio')) {
      return 'Con gusto. Para enviar una cotización detallada se requiere registrarse con email para seguimiento.';
    }
    if (msg.includes('servicios')) {
      return 'Servicios: logística integral, transporte de carga, insumos B2B y desarrollo de software (Enterprise OS). ¿Cuál le interesa?';
    }
    if (msg.includes('contacto') || msg.includes('ventas')) {
      return 'Contacto de ventas 24/7: WhatsApp Business, email corporativo o desde esta plataforma. ¿Desea que un asesor lo contacte?';
    }
    if (msg.includes('horario')) {
      return 'Disponibles 24/7. Entregas: 8:00–18:00, lunes a sábado.';
    }
    return 'Se puede ayudar con catálogo, cotizaciones, servicios o contacto de ventas. ¿Qué tema desea?';
  };

  const onSend = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const text = String(form.get('message') || '').trim();
    if (!text) return;
    const bot = reply(text);
    setHistory(prev => [...prev, { role: 'user', text }, { role: 'bot', text: bot }]);
    e.currentTarget.reset();
  };

  if (!open) {
    return (
      <button
        aria-label="Abrir chat"
        onClick={() => setOpen(true)}
        style={{ position: 'fixed', right: 16, bottom: 16, padding: 12, borderRadius: 24, background: '#0b5fff', color: '#fff', border: 'none' }}
      >
        Chat
      </button>
    );
  }

  return (
    <aside style={{ position: 'fixed', right: 16, bottom: 16, width: 320, background: '#fff', border: '1px solid #ccc', borderRadius: 8 }}>
      <header style={{ padding: 8, background: '#0b5fff', color: '#fff' }}>Asistente</header>
      <div style={{ maxHeight: 260, overflow: 'auto', padding: 8 }}>
        {history.map((m, i) => (
          <div key={i} style={{ margin: '6px 0', color: m.role === 'bot' ? '#111' : '#333' }}>
            <strong>{m.role === 'bot' ? 'KAT' : 'U'}:</strong> {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={onSend} style={{ display: 'flex', gap: 6, padding: 8 }}>
        <input name="message" placeholder="Escriba un mensaje…" style={{ flex: 1, padding: 8, border: '1px solid #ccc', borderRadius: 4 }} />
        <button type="submit" style={{ padding: '8px 12px' }}>Enviar</button>
        <button type="button" onClick={() => setOpen(false)} style={{ padding: '8px 12px' }}>Cerrar</button>
      </form>
    </aside>
  );
}

