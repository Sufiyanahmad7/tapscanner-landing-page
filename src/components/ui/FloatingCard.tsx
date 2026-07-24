'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, UserCheck, Car, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

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

const CARD_CONFIG = {
  /* ── ORANGE THEME CARDS (Interactive Demo Set - 4 Cards) ── */
  visitor: {
    title: 'QR Visitor Check-in',
    description: 'Visitor scanned & verified at Main Gate.',
    icon: QrCode,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    cardBg: '#fff7ed',
    cardBorder: '#fed7aa',
    floatDuration: 5,
  },
  approval: {
    title: 'Employee Approval',
    description: 'Host approved the visit in 5 seconds.',
    icon: UserCheck,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    cardBg: '#ecfdf5',
    cardBorder: '#a7f3d0',
    floatDuration: 6.5,
  },
  vehicle: {
    title: 'Vehicle Entry',
    description: 'ANPR pass validated at Gate 2.',
    icon: Car,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    cardBg: '#eff6ff',
    cardBorder: '#bfdbfe',
    floatDuration: 8,
  },
  emergency: {
    title: 'Support Ticket',
    description: '284 / 284 occupants safe in zone.',
    icon: ShieldCheck,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    cardBg: '#f5f3ff',
    cardBorder: '#ddd6fe',
    floatDuration: 7,
  },

  /* ── BLUE THEME CARDS (Clean Showcase - 3 Cards) ── */
  invitation: {
    title: 'Invitation Sent',
    description: 'john.doe@company.com • Product Demo',
    icon: Mail,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    cardBg: 'rgba(240, 249, 255, 0.88)',
    cardBorder: 'rgba(186, 230, 253, 0.9)',
    floatDuration: 5,
  },
  visitor_approved: {
    title: 'Visitor Approved',
    description: 'Emily Johnson • Host: Sarah Wilson',
    icon: CheckCircle2,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    cardBg: 'rgba(240, 253, 244, 0.88)',
    cardBorder: 'rgba(187, 247, 208, 0.9)',
    floatDuration: 6.5,
  },
  digital_pass: {
    title: 'Digital Visitor Pass',
    description: 'INV-20341 • Main Gate Pass',
    icon: QrCode,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
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
  const { title, description, icon: Icon, floatDuration } = CARD_CONFIG[type];

  // Combine manual hover or programmatic sequential expansion (for Orange theme)
  const expanded = hovered || isExpanded;

  // Parallax offset calculation
  const offsetX = mouseX * parallaxFactor;
  const offsetY = mouseY * parallaxFactor;

  /* ── ORANGE THEME CARDS (Expandable Cards for Sequential Demo) ── */
  if (type === 'visitor' || type === 'approval' || type === 'vehicle' || type === 'emergency') {
    const { iconBg, iconColor, cardBg, cardBorder } = CARD_CONFIG[type];

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
            width: '260px',
            borderRadius: '20px',
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: expanded
              ? '0 20px 48px rgba(249, 115, 22, 0.22)'
              : '0 8px 32px rgba(0,0,0,0.10)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            cursor: 'pointer',
          }}
          transition={{ layout: { duration: 0.35, ease: 'easeOut' } }}
        >
          <motion.div layout="position" className="flex items-center gap-3 px-4 py-3.5">
            <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
              <Icon className={`h-4 w-4 ${iconColor}`} />
            </div>
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
    const { cardBg, cardBorder, iconBg, iconColor } = CARD_CONFIG['invitation'];
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
            width: '260px',
            borderRadius: '20px',
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
          <div className="flex items-start gap-3">
            <div className={`h-9 w-9 rounded-full ${iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
              <Mail className={`h-4.5 w-4.5 ${iconColor}`} />
            </div>
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
    const { cardBg, cardBorder, iconBg, iconColor } = CARD_CONFIG['visitor_approved'];
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
            width: '260px',
            borderRadius: '20px',
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
          <div className="flex items-center gap-3">
            <div className={`h-9 w-9 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
              <CheckCircle2 className={`h-4.5 w-4.5 ${iconColor}`} />
            </div>
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
    const { cardBg, cardBorder, iconBg, iconColor } = CARD_CONFIG['digital_pass'];
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
            width: '260px',
            borderRadius: '20px',
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
            <div className="h-11 w-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
              <QrCode className="h-6.5 w-6.5 text-indigo-600" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return null;
};