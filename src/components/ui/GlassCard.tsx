'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  variant?: 'light' | 'dark' | 'orangeGlow' | 'minimal';
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = 'light',
  hoverEffect = true,
  ...props
}) => {
  const baseStyles =
    'relative overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-500 border';

  const variants = {
    light:
      'bg-white/80 backdrop-blur-xl border-slate-200/80 shadow-xl shadow-slate-200/40 text-slate-900',
    dark:
      'bg-slate-950/90 backdrop-blur-2xl border-slate-800/80 shadow-2xl shadow-slate-950/50 text-white',
    orangeGlow:
      'bg-gradient-to-b from-white/90 to-orange-50/50 backdrop-blur-xl border-orange-500/30 shadow-xl shadow-orange-500/10 text-slate-900',
    minimal:
      'bg-slate-50/70 border-slate-200/60 shadow-xs text-slate-900 hover:bg-white',
  };

  const hoverStyles = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-2xl hover:border-orange-500/40'
    : '';

  return (
    <motion.div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
