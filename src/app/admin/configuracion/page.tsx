export default function ConfiguracionPage() {
  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold text-mogroup-blue mb-2'>⚙️ Configuración</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {['Empresa', 'Usuarios', 'Integraciones', 'Seguridad'].map((section) => (
          <div key={section} className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer'>
            <h3 className='text-lg font-semibold text-mogroup-blue mb-2'>{section}</h3>
            <p className='text-gray-600 text-sm'>Configuración de {section.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
