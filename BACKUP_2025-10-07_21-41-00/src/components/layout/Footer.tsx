const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-4 mt-auto'>
      <div className='container mx-auto text-center'>
        <p>© {new Date().getFullYear()} MOGROUP. Todos los derechos reservados.</p>
        <p>Su aliado estratégico en Panamá.</p>
      </div>
    </footer>
  );
};

export default Footer;
