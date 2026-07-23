'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, UserCheck, Car, ShieldCheck } from 'lucide-react';

type CardType = 'visitor' | 'approval' | 'vehicle' | 'emergency';

interface FloatingCardProps {
  className?: string;
  type: CardType;
}

const CARD_CONFIG = {
  visitor: {
    title: 'QR Visitor Check-in',
    description: 'Visitor scanned and verified.',
    icon: QrCode,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    cardBg: '#fff7ed',
    cardBorder: '#fed7aa',
    floatDuration: 5,
  },
  approval: {
    title: 'Employee Approval',
    description: 'Host approved the visit.',
    icon: UserCheck,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    cardBg: '#ecfdf5',
    cardBorder: '#a7f3d0',
    floatDuration: 6,
  },
  vehicle: {
    title: 'Vehicle Entry',
    description: 'Vehicle pass validated at the gate.',
    icon: Car,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    cardBg: '#eff6ff',
    cardBorder: '#bfdbfe',
    floatDuration: 7,
  },
  emergency: {
    title: 'Emergency Dashboard',
    description: '284 / 284 occupants safe.',
    icon: ShieldCheck,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    cardBg: '#f5f3ff',
    cardBorder: '#ddd6fe',
    floatDuration: 5.5,
  },
} satisfies Record<CardType, object>;

export const FloatingCard: React.FC<FloatingCardProps> = ({ className = '', type }) => {
  const [hovered, setHovered] = useState(false);
  const { title, description, icon: Icon, iconBg, iconColor, cardBg, cardBorder, floatDuration } =
    CARD_CONFIG[type];

  return (
    /* ── Outer float wrapper — continuous y oscillation ── */
    <motion.div
      className={`absolute hidden xl:block pointer-events-auto ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/*
        ── Card shell ──
        • Plain <div> so onMouseEnter/Leave fire 100% reliably
        • NO overflow:hidden here — card must grow freely downward
      */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '260px',
          borderRadius: '20px',
          background: cardBg,
          border: `1px solid ${cardBorder}`,
          boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.04)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          cursor: 'default',
          /* intentionally no overflow:hidden */
        }}
      >
        {/* Collapsed header — always visible */}
        <div className="flex items-center gap-3 px-4 py-3.5">
          <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
            <Icon className={`h-4 w-4 ${iconColor}`} />
          </div>
          <span className="text-[13px] font-semibold text-slate-800 leading-tight">{title}</span>
        </div>

        {/*
          ── Expanding description ──
          • Always mounted (no AnimatePresence) — avoids unmount race with layout
          • overflow:hidden only on THIS div so clipping happens during animation
          • height 0 → auto is handled by Framer Motion's animate prop
          • opacity animates in parallel
        */}
        <motion.div
          animate={
            hovered
              ? { height: 'auto', opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          initial={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <div
            style={{
              height: '1px',
              background: 'rgba(0,0,0,0.07)',
              margin: '0 16px 10px',
            }}
          />
          <p
            style={{
              fontSize: '12px',
              color: '#64748b',
              lineHeight: '1.65',
              padding: '0 16px 14px',
              margin: 0,
            }}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};