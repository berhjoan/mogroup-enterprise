interface TableProps {
  columns: string[];
  data: any[];
  actions?: (row: any) => React.ReactNode;
}

export default function DataTable({ columns, data, actions }: TableProps) {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b'>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className='px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                  {col}
                </th>
              ))}
              {actions && <th className='px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase'>Acciones</th>}
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (actions ? 1 : 0)} className='px-6 py-12 text-center text-gray-500'>
                  No hay datos disponibles
                </td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr key={idx} className='hover:bg-gray-50 transition-colors'>
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} className='px-6 py-4 text-sm text-gray-900'>
                      {row[col.toLowerCase()] || '—'}
                    </td>
                  ))}
                  {actions && (
                    <td className='px-6 py-4 text-right text-sm'>
                      {actions(row)}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
