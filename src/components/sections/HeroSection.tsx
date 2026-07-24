'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Gradient } from '@/components/ui/Gradient';
import { Arc } from '@/components/ui/Arc';
import { AnimatedWord } from '@/components/ui/AnimatedWord';
import { FloatingItems } from '@/components/ui/FloatingItems';
import { CardType } from '@/components/ui/FloatingCard';

interface HeroSectionProps {
  onOpenDemoModal: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ORANGE_EXPAND_SEQUENCE: (CardType | null)[] = ['visitor', 'approval', 'vehicle', 'emergency'];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoModal }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState<'orange' | 'blue'>('orange');
  const [activeExpandedType, setActiveExpandedType] = useState<CardType | null>(null);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const isOrange = theme === 'orange';

  // Sequential Orange Card expansion & Theme Loop controller
  useEffect(() => {
    let sequenceIndex = 0;
    let themeTimer: NodeJS.Timeout;

    if (theme === 'orange') {
      // Step 1: Immediately expand the first card ('visitor')
      setActiveExpandedType(ORANGE_EXPAND_SEQUENCE[0]);

      // Step 2: Cycle through the remaining 3 cards every 2 seconds (2s, 4s, 6s)
      const expandInterval = setInterval(() => {
        sequenceIndex++;
        if (sequenceIndex < ORANGE_EXPAND_SEQUENCE.length) {
          setActiveExpandedType(ORANGE_EXPAND_SEQUENCE[sequenceIndex]);
        } else {
          // After all 4 cards have expanded, collapse them and trigger theme switch after 2s
          setActiveExpandedType(null);
          clearInterval(expandInterval);
        }
      }, 2000);

      // Step 3: Switch to Blue theme after 8.5s (4 cards * 2s + 0.5s pause)
      themeTimer = setTimeout(() => {
        setTheme('blue');
      }, 8500);

      return () => {
        clearInterval(expandInterval);
        clearTimeout(themeTimer);
      };
    } else {
      // Blue Theme: Clean showcase — no dropdown expansion
      setActiveExpandedType(null);

      // Remain in Blue theme for 7.5s before transitioning back to Orange
      themeTimer = setTimeout(() => {
        setTheme('orange');
      }, 7500);

      return () => clearTimeout(themeTimer);
    }
  }, [theme]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      className="relative min-h-screen bg-white flex flex-col items-center justify-start overflow-visible"
      onMouseMove={handleMouseMove}
      id="hero"
    >
      {/* Layer 1 — Animated Gradient Mesh (Interpolates smoothly between Orange & Blue) */}
      <Gradient theme={theme} />

      {/* Layer 2 — White Arc dome over gradient with backdrop glow */}
      <Arc />

      {/* Layer 3 — Floating glassmorphism cards (Sequential expand for Orange, Clean floating for Blue) */}
      <FloatingItems
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        theme={theme}
        activeExpandedType={activeExpandedType}
      />

      {/* Layer 4 — Hero content, above arc */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4 sm:px-6 lg:px-8 pt-64 pb-0 pointer-events-none">
        {/* Content constrained to 900px */}
        <div className="max-w-[900px] mx-auto pointer-events-auto">

          {/* Premium Refined Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
            className="text-[#1F2937] mb-8"
            style={{
              fontSize: 'clamp(38px, 5.2vw, 62px)',
              lineHeight: '0.98',
            }}
          >
            {/* Supporting Top Line */}
            <motion.span
              variants={fadeInUp}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="block font-normal tracking-[-0.02em] opacity-90"
            >
              Smarter Way To Manage
            </motion.span>

            {/* Focal Animated Word Line */}
            <motion.span
              variants={fadeInUp}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="block font-semibold tracking-[-0.03em] my-1"
            >
              <AnimatedWord word="Visitor" />
            </motion.span>

            {/* Supporting Bottom Line */}
            <motion.span
              variants={fadeInUp}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="block font-normal tracking-[-0.02em] opacity-90"
            >
              Movement &amp; Security
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.6 }}
            className="text-slate-600 mx-auto mb-10 font-normal"
            style={{
              maxWidth: '680px',
              fontSize: '15px',
              lineHeight: '1.8',
              letterSpacing: '-0.01em',
            }}
          >
            Manage visitors, employees, vehicles and gate operations from one intelligent platform
            with touchless check-ins, digital approvals and real-time visibility.
          </motion.p>

          {/* Theme-Synchronized CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.85 }}
          >
            <motion.button
              onClick={onOpenDemoModal}
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
              animate={{
                background: isOrange
                  ? isBtnHovered
                    ? 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)'
                    : 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
                  : isBtnHovered
                  ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                  : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: isOrange
                  ? isBtnHovered
                    ? '0 20px 48px rgba(234, 88, 12, 0.55)'
                    : '0 12px 36px rgba(249, 115, 22, 0.35)'
                  : isBtnHovered
                  ? '0 20px 48px rgba(37, 99, 235, 0.55)'
                  : '0 12px 36px rgba(59, 130, 246, 0.35)',
                y: isBtnHovered ? -2 : 0,
              }}
              transition={{
                duration: 2.0,
                ease: 'easeInOut',
              }}
              className="inline-flex items-center gap-2 font-semibold text-white rounded-full cursor-pointer"
              style={{
                padding: '16px 36px',
                fontSize: '15px',
              }}
            >
              Book Demo
            </motion.button>
          </motion.div>

          {/* 120px spacer before next section */}
          <div className="h-[120px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
