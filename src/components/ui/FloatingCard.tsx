'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type CardType =
  | 'visitor'
  | 'approval'
  | 'vehicle'
  | 'emergency'
  | 'invitation'
  | 'visitor_approved'
  | 'digital_pass';

interface FloatingCardProps {
  className?: string;
  type: CardType;
  mouseX?: number;
  mouseY?: number;
  parallaxFactor?: number;
  isExpanded?: boolean;
}

/* ── CARD CONFIGURATIONS (Using Local SVG Illustration Icons) ── */

const CARD_CONFIG = {
  /* ── ORANGE THEME CARDS (Interactive Demo Set - 4 Cards) ── */
  visitor: {
    title: 'QR Visitor Check-in',
    description: 'Visitor scanned & verified at Main Gate.',
    iconSrc: '/icons/hero/qr.svg',
    cardBg: 'rgba(255, 255, 255, 0.88)',
    cardBorder: 'rgba(254, 215, 170, 0.9)',
    floatDuration: 5,
  },
  approval: {
    title: 'Employee Approval',
    description: 'Host approved the visit in 5 seconds.',
    iconSrc: '/icons/hero/approval.svg',
    cardBg: 'rgba(255, 255, 255, 0.88)',
    cardBorder: 'rgba(167, 243, 208, 0.9)',
    floatDuration: 6.5,
  },
  vehicle: {
    title: 'Vehicle Entry',
    description: 'ANPR pass validated at Gate 2.',
    iconSrc: '/icons/hero/vehicle.svg',
    cardBg: 'rgba(255, 255, 255, 0.88)',
    cardBorder: 'rgba(191, 219, 254, 0.9)',
    floatDuration: 8,
  },
  emergency: {
    title: 'Support Ticket',
    description: 'Fast assistance for platform issues',
    iconSrc: '/icons/hero/emergency.svg',
    cardBg: 'rgba(255, 255, 255, 0.88)',
    cardBorder: 'rgba(221, 214, 254, 0.9)',
    floatDuration: 7,
  },

  /* ── BLUE THEME CARDS (Clean Showcase - 3 Cards) ── */
  invitation: {
    title: 'Invitation Sent',
    description: 'john.doe@company.com • Product Demo',
    iconSrc: '/icons/hero/email.svg',
    cardBg: 'rgba(240, 249, 255, 0.88)',
    cardBorder: 'rgba(186, 230, 253, 0.9)',
    floatDuration: 5,
  },
  visitor_approved: {
    title: 'Visitor Approved',
    description: 'Emily Johnson • Host: Sarah Wilson',
    iconSrc: '/icons/hero/visitor.svg',
    cardBg: 'rgba(240, 253, 244, 0.88)',
    cardBorder: 'rgba(187, 247, 208, 0.9)',
    floatDuration: 6.5,
  },
  digital_pass: {
    title: 'Digital Visitor Pass',
    description: 'INV-20341 • Main Gate Pass',
    iconSrc: '/icons/hero/shield.svg',
    cardBg: 'rgba(238, 242, 255, 0.88)',
    cardBorder: 'rgba(199, 210, 254, 0.9)',
    floatDuration: 8,
  },
} satisfies Record<CardType, object>;

export const FloatingCard: React.FC<FloatingCardProps> = ({
  className = '',
  type,
  mouseX = 0,
  mouseY = 0,
  parallaxFactor = 12,
  isExpanded = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const { title, description, iconSrc, floatDuration } = CARD_CONFIG[type];

  // Combine manual hover or programmatic sequential expansion (for Orange theme)
  const expanded = hovered || isExpanded;

  // Parallax offset calculation
  const offsetX = mouseX * parallaxFactor;
  const offsetY = mouseY * parallaxFactor;

  /* ── Icon Container with Floating Micro-animation & Hover Scale/Rotation ── */
  const renderIcon = () => (
    <motion.div
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.08,
        rotate: 3,
      }}
      className="w-[50px] h-[50px] rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 p-1.5 flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
    >
      <img
        src={iconSrc}
        alt={title}
        className="w-10 h-10 object-contain filter drop-shadow-sm"
        loading="eager"
      />
    </motion.div>
  );

  /* ── ORANGE THEME CARDS (Expandable Cards for Sequential Demo) ── */
  if (type === 'visitor' || type === 'approval' || type === 'vehicle' || type === 'emergency') {
    const { cardBg, cardBorder } = CARD_CONFIG[type];

    return (
      <motion.div
        className={`absolute hidden xl:block pointer-events-auto ${className}`}
        animate={{
          x: [offsetX, offsetX + 10, offsetX - 8, offsetX],
          y: [offsetY, offsetY - 10, offsetY + 6, offsetY],
          rotate: [0, 1.2, -1, 0],
          scale: expanded ? 1.05 : [1, 1.015, 0.985, 1],
        }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          layout
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          style={{
            width: '270px',
            borderRadius: '22px',
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: expanded
              ? '0 20px 48px rgba(249, 115, 22, 0.22)'
              : '0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            cursor: 'pointer',
          }}
          transition={{ layout: { duration: 0.35, ease: 'easeOut' } }}
        >
          <motion.div layout="position" className="flex items-center gap-3.5 px-4 py-3.5">
            {renderIcon()}
            <span className="text-[13px] font-semibold text-slate-800 leading-tight">{title}</span>
          </motion.div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                key={`${type}-details`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ height: '1px', background: 'rgba(0,0,0,0.07)', margin: '0 16px 10px' }} />
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.65', padding: '0 16px 14px', margin: 0 }}>
                  {description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    );
  }

  /* ── BLUE THEME CARDS (3 Cards: Invitation Sent, Visitor Approved, Digital Visitor Pass) ── */
  if (type === 'invitation') {
    const { cardBg, cardBorder } = CARD_CONFIG['invitation'];
    return (
      <motion.div
        className={`absolute hidden xl:block pointer-events-auto ${className}`}
        animate={{
          x: [offsetX, offsetX - 12, offsetX + 10, offsetX],
          y: [offsetY, offsetY - 8, offsetY + 10, offsetY],
          rotate: [0, -1.5, 1, 0],
          scale: [1, 1.015, 0.985, 1],
        }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.05, y: -6 }}
          style={{
            width: '270px',
            borderRadius: '22px',
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: hovered
              ? '0 20px 48px rgba(14, 165, 233, 0.22)'
              : '0 8px 32px rgba(14, 165, 233, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '14px 16px',
            cursor: 'pointer',
          }}
        >
          <div className="flex items-start gap-3.5">
            {renderIcon()}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1 mb-0.5">
                <span className="text-[13px] font-semibold text-slate-800 truncate">{title}</span>
                <span className="text-[10px] font-mono text-slate-400 shrink-0">10:30 AM</span>
              </div>
              <p className="text-[11px] font-medium text-sky-700 truncate">john.doe@company.com</p>
              <p className="text-[11px] text-slate-500 truncate mt-0.5">Product Demo</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (type === 'visitor_approved') {
    const { cardBg, cardBorder } = CARD_CONFIG['visitor_approved'];
    return (
      <motion.div
        className={`absolute hidden xl:block pointer-events-auto ${className}`}
        animate={{
          x: [offsetX, offsetX + 8, offsetX - 12, offsetX],
          y: [offsetY, offsetY + 10, offsetY - 8, offsetY],
          rotate: [0, 1, -1.8, 0],
          scale: [1, 1.015, 0.985, 1],
        }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.05, y: -6 }}
          style={{
            width: '270px',
            borderRadius: '22px',
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: hovered
              ? '0 20px 48px rgba(34, 197, 94, 0.22)'
              : '0 8px 32px rgba(34, 197, 94, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '14px 16px',
            cursor: 'pointer',
          }}
        >
          <div className="flex items-center gap-3.5">
            {renderIcon()}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[13px] font-semibold text-slate-800 truncate">{title}</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-100 text-emerald-700">
                  Approved
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-700 truncate mt-0.5">Emily Johnson</p>
              <p className="text-[10px] text-slate-400 truncate">Host: Sarah Wilson</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (type === 'digital_pass') {
    const { cardBg, cardBorder } = CARD_CONFIG['digital_pass'];
    return (
      <motion.div
        className={`absolute hidden xl:block pointer-events-auto ${className}`}
        animate={{
          x: [offsetX, offsetX - 10, offsetX + 12, offsetX],
          y: [offsetY, offsetY - 12, offsetY + 6, offsetY],
          rotate: [0, -1, 1.5, 0],
          scale: [1, 1.015, 0.985, 1],
        }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.05, y: -6 }}
          style={{
            width: '270px',
            borderRadius: '22px',
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: hovered
              ? '0 20px 48px rgba(99, 102, 241, 0.22)'
              : '0 8px 32px rgba(99, 102, 241, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '14px 16px',
            cursor: 'pointer',
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-indigo-100 text-indigo-700 mb-1">
                Valid Today
              </span>
              <h4 className="text-[13px] font-semibold text-slate-800 truncate leading-tight">{title}</h4>
              <p className="text-[10px] font-mono text-indigo-600 mt-0.5">INV-20341</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Main Gate Pass</p>
            </div>
            {renderIcon()}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return null;
};