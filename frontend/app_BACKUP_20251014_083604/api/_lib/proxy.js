export const BACKEND_BASE = process.env.BACKEND_BASE || process.env.NEXT_PUBLIC_BACKEND_BASE || "http://backend:5001";

export async function proxyToBackend(path, init = {}, timeoutMs = 3000) {
  const url = `${BACKEND_BASE}${path}`;
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: ac.signal });
    const text = await res.text();
    clearTimeout(t);
    // Reenvolver la respuesta del backend como Response del handler
    return new Response(text, {
      status: res.status,
      headers: { "Content-Type": res.headers.get("content-type") || "application/json" },
    });
  } catch (e) {
    clearTimeout(t);
    return null; // Señal de fallback
  }
}
