const mem = globalThis.__guardian_events ?? { events: [], last_hash: null };
globalThis.__guardian_events = mem;

export async function GET(){
  return new Response(JSON.stringify({ last_hash: mem.last_hash, count: (mem.events||[]).length, stub:true }), { status:200, headers:{ "Content-Type":"application/json","X-Stub":"true" } });
}
