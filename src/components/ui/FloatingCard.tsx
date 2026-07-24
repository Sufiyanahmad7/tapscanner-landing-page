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

/* ── PREMIUM COLORFUL SVG ICONS ── */

const QrScannerIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="QR Code Icon">
    <rect x="4" y="4" width="9" height="9" rx="2.5" fill="url(#qr_grad1)" stroke="#F97316" strokeWidth="1.5" />
    <rect x="6.5" y="6.5" width="4" height="4" rx="1" fill="#EA580C" />
    <rect x="19" y="4" width="9" height="9" rx="2.5" fill="url(#qr_grad1)" stroke="#F97316" strokeWidth="1.5" />
    <rect x="21.5" y="6.5" width="4" height="4" rx="1" fill="#EA580C" />
    <rect x="4" y="19" width="9" height="9" rx="2.5" fill="url(#qr_grad1)" stroke="#F97316" strokeWidth="1.5" />
    <rect x="6.5" y="21.5" width="4" height="4" rx="1" fill="#EA580C" />
    <path d="M19 19H22V22H19V19Z" fill="#F97316" />
    <path d="M25 19H28V22H25V19Z" fill="#EA580C" />
    <path d="M19 25H22V28H19V25Z" fill="#EA580C" />
    <path d="M23 23H28V28H23V23Z" fill="url(#qr_grad2)" rx="1" />
    <defs>
      <linearGradient id="qr_grad1" x1="4" y1="4" x2="13" y2="13" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFEDD5" />
        <stop offset="1" stopColor="#FED7AA" />
      </linearGradient>
      <linearGradient id="qr_grad2" x1="23" y1="23" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F97316" />
        <stop offset="1" stopColor="#C2410C" />
      </linearGradient>
    </defs>
  </svg>
);

const UserApprovalIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="User Approval Icon">
    <circle cx="14" cy="11" r="5" fill="url(#usr_grad1)" stroke="#10B981" strokeWidth="1.5" />
    <path d="M5 26C5 21.0294 9.02944 17 14 17C16.1425 17 18.1066 17.749 19.6543 19" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="23" cy="23" r="6.5" fill="url(#usr_grad2)" />
    <path d="M20.5 23L22.2 24.7L25.5 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="usr_grad1" x1="9" y1="6" x2="19" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D1FAE5" />
        <stop offset="1" stopColor="#A7F3D0" />
      </linearGradient>
      <linearGradient id="usr_grad2" x1="16.5" y1="16.5" x2="29.5" y2="29.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
    </defs>
  </svg>
);

const VehicleEntryIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vehicle Entry Icon">
    <path d="M6 18L8.2 11.4C8.5 10.5 9.4 10 10.3 10H21.7C22.6 10 23.5 10.5 23.8 11.4L26 18" stroke="#2563EB" strokeWidth="1.8" />
    <rect x="4" y="17" width="24" height="8" rx="3" fill="url(#veh_grad1)" stroke="#3B82F6" strokeWidth="1.5" />
    <circle cx="8.5" cy="21" r="1.8" fill="#1D4ED8" />
    <circle cx="23.5" cy="21" r="1.8" fill="#1D4ED8" />
    <path d="M12 21H20" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 4V8M16 4L13 6M16 4L19 6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="veh_grad1" x1="4" y1="17" x2="28" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DBEAFE" />
        <stop offset="1" stopColor="#BFDBFE" />
      </linearGradient>
    </defs>
  </svg>
);

const SupportDeskIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Support Desk Icon">
    <path d="M6 17C6 11.4772 10.4772 7 16 7C21.5228 7 26 11.4772 26 17" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    <rect x="4" y="16" width="4.5" height="9" rx="2" fill="url(#sup_grad1)" stroke="#6D28D9" strokeWidth="1.2" />
    <rect x="23.5" y="16" width="4.5" height="9" rx="2" fill="url(#sup_grad1)" stroke="#6D28D9" strokeWidth="1.2" />
    <path d="M26 23.5C26 26 23.5 27.5 20 27.5H18" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16.5" cy="27.5" r="1.8" fill="#6D28D9" />
    <defs>
      <linearGradient id="sup_grad1" x1="4" y1="16" x2="8.5" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DDD6FE" />
        <stop offset="1" stopColor="#C4B5FD" />
      </linearGradient>
    </defs>
  </svg>
);

const MailSentIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mail Sent Icon">
    <rect x="4" y="8" width="24" height="16" rx="3.5" fill="url(#mail_grad)" stroke="#0284C7" strokeWidth="1.5" />
    <path d="M5 9.5L16 17L27 9.5" stroke="#0369A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="20" r="4.5" fill="#0EA5E9" />
    <path d="M22 20L23.5 21.5L26 19" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="mail_grad" x1="4" y1="8" x2="28" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="1" stopColor="#BAE6FD" />
      </linearGradient>
    </defs>
  </svg>
);

const VerifiedBadgeIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Verified Badge Icon">
    <path d="M16 3L19.5 5.5L23.8 5.2L25.6 9.1L29.6 11L29.1 15.3L31.5 19L29.1 22.7L29.6 27L25.6 28.9L23.8 32.8L19.5 32.5L16 35" fill="none" />
    <circle cx="16" cy="16" r="12" fill="url(#ver_grad)" stroke="#059669" strokeWidth="1.5" />
    <path d="M11 16L14.5 19.5L21 12.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="ver_grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34D399" />
        <stop offset="1" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
);

const PassBadgeIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Pass Badge Icon">
    <rect x="5" y="4" width="22" height="24" rx="4" fill="url(#pass_grad)" stroke="#4F46E5" strokeWidth="1.5" />
    <rect x="9" y="8" width="14" height="8" rx="1.5" fill="#EEF2FF" stroke="#818CF8" strokeWidth="1" />
    <path d="M11 11H21" stroke="#4F46E5" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M11 13.5H17" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round" />
    <rect x="9" y="19" width="4" height="4" fill="#4338CA" rx="0.5" />
    <rect x="15" y="19" width="8" height="1.8" fill="#6366F1" rx="0.5" />
    <rect x="15" y="21.5" width="5" height="1.5" fill="#818CF8" rx="0.5" />
    <defs>
      <linearGradient id="pass_grad" x1="5" y1="4" x2="27" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C7D2FE" />
        <stop offset="1" stopColor="#A5B4FC" />
      </linearGradient>
    </defs>
  </svg>
);

/* ── CARD CONFIGURATIONS ── */

const CARD_CONFIG = {
  /* ── ORANGE THEME CARDS (Interactive Demo Set - 4 Cards) ── */
  visitor: {
    title: 'QR Visitor Check-in',
    description: 'Visitor scanned & verified at Main Gate.',
    IconComponent: QrScannerIcon,
    iconBg: 'bg-orange-100/90 border border-orange-200',
    cardBg: '#fff7ed',
    cardBorder: '#fed7aa',
    floatDuration: 5,
  },
  approval: {
    title: 'Employee Approval',
    description: 'Host approved the visit in 5 seconds.',
    IconComponent: UserApprovalIcon,
    iconBg: 'bg-emerald-100/90 border border-emerald-200',
    cardBg: '#ecfdf5',
    cardBorder: '#a7f3d0',
    floatDuration: 6.5,
  },
  vehicle: {
    title: 'Vehicle Entry',
    description: 'ANPR pass validated at Gate 2.',
    IconComponent: VehicleEntryIcon,
    iconBg: 'bg-blue-100/90 border border-blue-200',
    cardBg: '#eff6ff',
    cardBorder: '#bfdbfe',
    floatDuration: 8,
  },
  emergency: {
    title: 'Support Ticket',
    description: 'Fast assistance for platform issues',
    IconComponent: SupportDeskIcon,
    iconBg: 'bg-violet-100/90 border border-violet-200',
    cardBg: '#f5f3ff',
    cardBorder: '#ddd6fe',
    floatDuration: 7,
  },

  /* ── BLUE THEME CARDS (Clean Showcase - 3 Cards) ── */
  invitation: {
    title: 'Invitation Sent',
    description: 'john.doe@company.com • Product Demo',
    IconComponent: MailSentIcon,
    iconBg: 'bg-sky-100/90 border border-sky-200',
    cardBg: 'rgba(240, 249, 255, 0.88)',
    cardBorder: 'rgba(186, 230, 253, 0.9)',
    floatDuration: 5,
  },
  visitor_approved: {
    title: 'Visitor Approved',
    description: 'Emily Johnson • Host: Sarah Wilson',
    IconComponent: VerifiedBadgeIcon,
    iconBg: 'bg-emerald-100/90 border border-emerald-200',
    cardBg: 'rgba(240, 253, 244, 0.88)',
    cardBorder: 'rgba(187, 247, 208, 0.9)',
    floatDuration: 6.5,
  },
  digital_pass: {
    title: 'Digital Visitor Pass',
    description: 'INV-20341 • Main Gate Pass',
    IconComponent: PassBadgeIcon,
    iconBg: 'bg-indigo-100/90 border border-indigo-200',
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
  const { title, description, IconComponent, floatDuration } = CARD_CONFIG[type];

  // Combine manual hover or programmatic sequential expansion (for Orange theme)
  const expanded = hovered || isExpanded;

  // Parallax offset calculation
  const offsetX = mouseX * parallaxFactor;
  const offsetY = mouseY * parallaxFactor;

  /* ── ORANGE THEME CARDS (Expandable Cards for Sequential Demo) ── */
  if (type === 'visitor' || type === 'approval' || type === 'vehicle' || type === 'emergency') {
    const { iconBg, cardBg, cardBorder } = CARD_CONFIG[type];

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
            <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
              <IconComponent className="w-6.5 h-6.5" />
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
    const { cardBg, cardBorder, iconBg } = CARD_CONFIG['invitation'];
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
            <div className={`h-10 w-10 rounded-full ${iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
              <MailSentIcon className="w-6.5 h-6.5" />
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
    const { cardBg, cardBorder, iconBg } = CARD_CONFIG['visitor_approved'];
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
            <div className={`h-10 w-10 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
              <VerifiedBadgeIcon className="w-6.5 h-6.5" />
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
    const { cardBg, cardBorder, iconBg } = CARD_CONFIG['digital_pass'];
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
            <div className={`h-10 w-10 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
              <PassBadgeIcon className="w-6.5 h-6.5" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return null;
};