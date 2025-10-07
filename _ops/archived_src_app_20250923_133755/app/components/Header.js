import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-mogroup-blue shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-2xl font-bold text-white lg:text-3xl">
              MOGROUP
              <span className="text-mogroup-gold">.</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/servicios" className="text-gray-300 hover:text-white transition">
              Servicios
            </Link>
            <Link href="/catalogo" className="text-gray-300 hover:text-white transition">
              Catálogo
            </Link>
            <Link href="/nosotros" className="text-gray-300 hover:text-white transition">
              Nosotros
            </Link>
            <Link href="/admin" className="bg-mogroup-gold text-mogroup-blue font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300">
              Acceso Empresa
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-mogroup-gold"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/servicios" className="block text-gray-300 hover:text-white py-2">
              Servicios
            </Link>
            <Link href="/catalogo" className="block text-gray-300 hover:text-white py-2">
              Catálogo
            </Link>
            <Link href="/nosotros" className="block text-gray-300 hover:text-white py-2">
              Nosotros
            </Link>
            <Link href="/admin" className="block bg-mogroup-gold text-mogroup-blue font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 text-center">
              Acceso Empresa
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
