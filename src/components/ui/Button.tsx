import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none',
        {
          'bg-primary text-white hover:bg-primary/90': variant === 'primary',
          'bg-white/10 text-white hover:bg-white/20': variant === 'secondary',
          'border border-white/20 hover:bg-white/10 text-white': variant === 'outline',
          'hover:bg-white/10 text-white/80 hover:text-white': variant === 'ghost',
          'h-9 px-4 text-sm': size === 'sm',
          'h-11 px-8 text-base': size === 'md',
          'h-14 px-10 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
