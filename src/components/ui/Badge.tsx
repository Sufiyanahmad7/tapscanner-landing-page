import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'orange' | 'dark' | 'outline' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'orange',
  size = 'md',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors duration-200';
  
  const variants = {
    orange: 'bg-orange-500/10 text-orange-600 border border-orange-500/20 shadow-xs',
    dark: 'bg-slate-900 text-white border border-slate-700/60 shadow-xs',
    outline: 'bg-white/80 text-slate-700 border border-slate-300/80 backdrop-blur-md',
    ghost: 'bg-slate-100 text-slate-600 border border-transparent',
    success: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs md:text-sm px-3.5 py-1 gap-1.5',
    lg: 'text-sm px-4 py-1.5 gap-2',
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};
