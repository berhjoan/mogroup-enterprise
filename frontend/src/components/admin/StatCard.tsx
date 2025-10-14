interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: { value: number; isPositive: boolean };
  color?: string;
}

export default function StatCard({ title, value, icon, trend, color = 'bg-mogroup-blue' }: StatCardProps) {
  return (
    <div className='bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl'>
      <div className='flex items-center justify-between mb-4'>
        <div className={'w-12 h-12 rounded-lg flex items-center justify-center text-2xl ' + color}>
          {icon}
        </div>
        {trend && (
          <span className={'text-sm font-semibold ' + (trend.isPositive ? 'text-green-600' : 'text-red-600')}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
        )}
      </div>
      <h3 className='text-gray-600 text-sm font-medium mb-1'>{title}</h3>
      <p className='text-3xl font-bold text-mogroup-blue'>{value}</p>
    </div>
  );
}
