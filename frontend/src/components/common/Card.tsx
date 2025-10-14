import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Card({ title, description, icon, href, className = '' }: CardProps) {
  const CardWrapper = href ? 'a' : 'div';
  const cardProps = href ? { href } : {};
  
  return (
    <CardWrapper
      {...cardProps}
      className={'group relative bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer ' + className}
    >
      {icon && (
        <div className='mb-4 text-mogroup-accent transition-transform duration-300 group-hover:scale-110'>
          {icon}
        </div>
      )}
      <h3 className='text-xl font-semibold mb-2 text-mogroup-blue'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
      {href && (
        <div className='absolute bottom-6 right-6 text-mogroup-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </div>
      )}
    </CardWrapper>
  );
}
