const RL = globalThis.__rate_limit ?? { buckets:new Map() };
globalThis.__rate_limit = RL;

function keyFor(ip, route){ return `${ip}::${route}`; }

export function getClientIp(request){
  const xf = request.headers.get("x-forwarded-for");
  const xr = request.headers.get("x-real-ip");
  return (xf?.split(",")[0]?.trim()) || xr || "local";
}

export function rateLimit(route, ip, limit = 10, windowMs = 60_000){
  const k = keyFor(ip, route);
  const now = Date.now();
  let rec = RL.buckets.get(k);
  if (!rec) { rec = { count:0, reset: now + windowMs }; RL.buckets.set(k, rec); }
  if (now > rec.reset) { rec.count = 0; rec.reset = now + windowMs; }
  rec.count++;
  if (rec.count > limit) {
    const retry = Math.max(0, rec.reset - now);
    return { limited:true, retryAfterMs: retry };
  }
  return { limited:false, retryAfterMs:0 };
}
