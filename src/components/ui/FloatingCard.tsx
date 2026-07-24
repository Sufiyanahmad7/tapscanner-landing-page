'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    title: 'Support Ticket',
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

  if (type === 'approval') {
    return (
      <motion.div
        className={`absolute hidden xl:block pointer-events-auto ${className}`}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          layout
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          style={{
            width: '260px',
            borderRadius: '20px',
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.04)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            cursor: 'default',
          }}
          transition={{ layout: { duration: 0.25, ease: 'easeOut' } }}
        >
          {/* Header — always visible, same size as other cards */}
          <motion.div layout="position" className="flex items-center gap-3 px-4 py-3.5">
            <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
              <Icon className={`h-4 w-4 ${iconColor}`} />
            </div>
            <span className="text-[13px] font-semibold text-slate-800 leading-tight">{title}</span>
          </motion.div>

          {/* Hidden content — conditionally rendered on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                key="approval-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div
                  style={{
                    height: '1px',
                    background: 'rgba(0,0,0,0.07)',
                    margin: '0 16px 10px',
                  }}
                />
                <div style={{ padding: '0 16px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 animate-ping opacity-70"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                      Requested for Approval
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                    <span style={{ fontSize: '12px', color: '#334155', fontWeight: 500 }}>
                      Approved
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    );
  }

  /* ── All other card types — original hover pattern ── */
  return (
    <motion.div
      className={`absolute hidden xl:block pointer-events-auto ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
    >
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
        }}
      >
        {/* Collapsed header — always visible */}
        <div className="flex items-center gap-3 px-4 py-3.5">
          <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
            <Icon className={`h-4 w-4 ${iconColor}`} />
          </div>
          <span className="text-[13px] font-semibold text-slate-800 leading-tight">{title}</span>
        </div>

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