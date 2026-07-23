'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedWordProps {
  word: string;
  className?: string;
}

export const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, className = '' }) => {
  const chars = [...word];

  return (
    <span className={`inline-flex ${className}`} aria-label={word}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          initial={{ fontWeight: 400 }}
          animate={{ fontWeight: [400, 800, 400] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            delay: index * 0.18,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};
