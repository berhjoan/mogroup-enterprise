import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-mogroup-blue text-white shadow-md'>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <Link href="/" className='text-2xl font-bold'>
          MOGROUP
        </Link>
        <div className='hidden md:flex items-center space-x-6'>
          <Link href="/catalogo" className='hover:text-mogroup-accent'>Catálogo</Link>
          <Link href="/servicios" className='hover:text-mogroup-accent'>Servicios</Link>
          <Link href="/nosotros" className='hover:text-mogroup-accent'>Nosotros</Link>
          <Link href="/contacto" className='hover:text-mogroup-accent'>Contacto</Link>
        </div>
        <Link href="/enterprise-login" className='bg-mogroup-accent hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded'>
          MOGROUP-ENTERPRISE
        </Link>
      </nav>
    </header>
  );
};

export default Header;
