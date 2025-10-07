'use client';
import Link from 'next/link';

export default function Navbar(){
  return (
    <nav>
      <Link href="/">Inicio</Link>
      <Link href="/catalogo">Catálogo</Link>
      <Link href="/servicios">Servicios</Link>
      <Link href="/enterprise">Enterprise</Link>
      <Link href="/cotizar">Cotizar</Link>
    </nav>
  );
}
