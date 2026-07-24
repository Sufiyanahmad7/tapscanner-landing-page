'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientProps {
  theme?: 'orange' | 'blue';
}

export const Gradient: React.FC<GradientProps> = ({ theme = 'orange' }) => {
  const isOrange = theme === 'orange';

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base theme background transition */}
      <motion.div
        className="absolute -inset-[20%] opacity-70 blur-[80px]"
        animate={{
          background: isOrange
            ? 'radial-gradient(circle at 40% 30%, #ea580c 0%, #f97316 35%, #fdba74 75%, transparent 100%)'
            : 'radial-gradient(circle at 60% 40%, #3b82f6 0%, #60a5fa 35%, #93c5fd 75%, transparent 100%)',
        }}
        transition={{
          duration: 2.5,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Blob 1 */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-[450px] h-[450px] rounded-full blur-[90px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.2, 0.95, 1],
          backgroundColor: isOrange ? 'rgba(234, 88, 12, 0.35)' : 'rgba(59, 130, 246, 0.35)',
        }}
        transition={{
          x: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          backgroundColor: { duration: 2.5, ease: 'easeInOut' },
        }}
      />

      {/* Floating Blob 2 */}
      <motion.div
        className="absolute top-[25%] right-[10%] w-[500px] h-[500px] rounded-full blur-[100px]"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.9, 1.15, 1],
          backgroundColor: isOrange ? 'rgba(250, 204, 21, 0.25)' : 'rgba(147, 197, 253, 0.35)',
        }}
        transition={{
          x: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
          backgroundColor: { duration: 2.5, ease: 'easeInOut' },
        }}
      />

      {/* Floating Blob 3 */}
      <motion.div
        className="absolute top-[35%] left-[35%] w-[600px] h-[600px] rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.4, 0.65, 0.45, 0.4],
          backgroundColor: isOrange ? 'rgba(249, 115, 22, 0.25)' : 'rgba(96, 165, 250, 0.3)',
        }}
        transition={{
          scale: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
          backgroundColor: { duration: 2.5, ease: 'easeInOut' },
        }}
      />
    </div>
  );
};
