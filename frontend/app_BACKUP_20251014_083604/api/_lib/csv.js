export function parseCSV(text){
  const lines = text.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split("\n").filter(Boolean);
  if (!lines.length) return { header:[], rows:[] };
  const parseLine = (ln)=>{
    const out=[]; let cur=""; let q=false;
    for (let i=0;i<ln.length;i++){
      const ch = ln[i];
      if (q){ if (ch === '"'){ if (ln[i+1] === '"'){ cur+='"'; i++; } else { q=false; } } else { cur += ch; } }
      else { if (ch === '"'){ q=true; } else if (ch === ","){ out.push(cur); cur=""; } else { cur += ch; } }
    }
    out.push(cur);
    return out;
  };
  const header = parseLine(lines[0]).map(h=>h.trim());
  const rows = lines.slice(1).map(ln => {
    const cols = parseLine(ln);
    const obj = {}; header.forEach((h,idx)=> obj[h] = cols[idx] ?? "");
    return obj;
  });
  return { header, rows };
}
