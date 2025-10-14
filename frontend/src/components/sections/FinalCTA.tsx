export default function FinalCTA() {
  return (
    <section className='py-20 px-4 bg-mogroup-blue text-white text-center'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6'>
          ¿Listo para optimizar sus operaciones?
        </h2>
        <p className='text-xl mb-8 opacity-90'>
          Miles de empresas en Panamá confían en MOGROUP. Únase a ellos y experimente la diferencia.
        </p>
        <div className='flex gap-4 justify-center'>
          <a
            href='/cotizar'
            className='px-8 py-4 bg-mogroup-accent text-white font-semibold rounded-lg shadow-xl transition-all duration-300 hover:scale-105'
          >
            Solicitar Cotización Ahora
          </a>
          <a
            href='/contacto'
            className='px-8 py-4 bg-white text-mogroup-blue font-semibold rounded-lg shadow-xl transition-all duration-300 hover:scale-105'
          >
            Hablar con un Experto
          </a>
        </div>
      </div>
    </section>
  );
}
