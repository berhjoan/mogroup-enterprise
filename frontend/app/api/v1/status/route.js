import { proxyToBackend } from "../../_lib/proxy";

const store = globalThis.__quotes_store ?? { list: [] };
globalThis.__quotes_store = store;
const mem = globalThis.__guardian_events ?? { events: [] };
globalThis.__guardian_events = mem;

export async function GET() {
  let backend_up = false;
  try {
    const res = await proxyToBackend("/health", { method: "GET" }, 2000);
    backend_up = !!(res && res.ok);
  } catch { backend_up = false; }

  const out = {
    backend_up,
    quotes_count: store.list.length,
    guardian_events_count: mem.events.length,
    ts: new Date().toISOString()
  };
  return new Response(JSON.stringify(out), { status: 200, headers: { "Content-Type":"application/json" } });
}
