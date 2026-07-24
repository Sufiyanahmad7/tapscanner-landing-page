'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingCard, CardType } from '@/components/ui/FloatingCard';

interface FloatingItemsProps {
  mouseX?: number;
  mouseY?: number;
  theme?: 'orange' | 'blue';
  activeExpandedType?: CardType | null;
}

interface CardPos {
  type: CardType;
  positionClass: string;
  parallaxFactor: number;
}

/* ── Theme 1: TapScanner Orange (Interactive Demo - 4 Cards) ── */
const THEME_ORANGE_CARDS: CardPos[] = [
  { type: 'visitor', positionClass: 'top-[28%] left-[6%]', parallaxFactor: 14 },
  { type: 'approval', positionClass: 'top-[28%] right-[6%]', parallaxFactor: 16 },
  { type: 'vehicle', positionClass: 'top-[72%] left-[4%]', parallaxFactor: 10 },
  { type: 'emergency', positionClass: 'top-[72%] right-[4%]', parallaxFactor: 12 },
];

/* ── Theme 2: Enterprise Blue (Clean Showcase - 3 Cards, Meeting Card Removed) ── */
const THEME_BLUE_CARDS: CardPos[] = [
  { type: 'invitation', positionClass: 'top-[28%] left-[6%]', parallaxFactor: 14 },
  { type: 'visitor_approved', positionClass: 'top-[28%] right-[6%]', parallaxFactor: 16 },
  { type: 'digital_pass', positionClass: 'top-[72%] left-[4%]', parallaxFactor: 10 },
];

export const FloatingItems: React.FC<FloatingItemsProps> = ({
  mouseX = 0,
  mouseY = 0,
  theme = 'orange',
  activeExpandedType = null,
}) => {
  const currentCards = theme === 'orange' ? THEME_ORANGE_CARDS : THEME_BLUE_CARDS;

  return (
    <div className="absolute inset-0 z-30 pointer-events-none overflow-visible">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 pointer-events-none"
        >
          {currentCards.map((card) => (
            <FloatingCard
              key={card.type}
              className={card.positionClass}
              type={card.type}
              mouseX={mouseX}
              mouseY={mouseY}
              parallaxFactor={card.parallaxFactor}
              isExpanded={theme === 'orange' && card.type === activeExpandedType}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
