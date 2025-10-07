const store = globalThis.__quotes_store ?? { list: [] };
globalThis.__quotes_store = store;
const mem = globalThis.__guardian_events ?? { events: [] };
globalThis.__guardian_events = mem;

export async function GET() {
  const data = {
    quotes_count: store.list.length,
    guardian_events_count: mem.events.length,
    ts: new Date().toISOString()
  };
  return new Response(JSON.stringify(data), { status:200, headers:{ "Content-Type":"application/json" } });
}
