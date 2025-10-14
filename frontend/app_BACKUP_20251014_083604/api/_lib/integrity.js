export async function hashEvent(prevHash, evt){
  const payload = (prevHash || "") + JSON.stringify(evt);
  if (globalThis.crypto && globalThis.crypto.subtle) {
    const enc = new TextEncoder();
    const digest = await crypto.subtle.digest("SHA-256", enc.encode(payload));
    return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,"0")).join("");
  } else {
    const { createHash } = await import("node:crypto");
    return createHash("sha256").update(payload).digest("hex");
  }
}
