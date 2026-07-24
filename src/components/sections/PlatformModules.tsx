'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Sparkles, Bell, Printer, ShieldAlert, BarChart3, Check, ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const iconComponents: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Bell: <Bell className="w-5 h-5" />,
  Printer: <Printer className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
};

const VISITOR_MANAGEMENT_FEATURES = [
  {
    id: 'qr-invite',
    title: 'Touchless QR Invites & Pre-Registration',
    shortDesc: 'Send instant QR passes via Email for 5-second lobby entry.',
    fullDesc: 'Hosts pre-register guests in seconds. Visitors receive a personalized digital QR pass with facility directions, host details, and parking info directly on their smartphone for instant scan-and-go entry.',
    iconName: 'UserCheck',
    badge: 'Pre-Registration',
    bgColor: 'bg-orange-50/70 hover:bg-orange-50/90',
    activeBgColor: 'bg-gradient-to-br from-orange-50 to-amber-50/60 border-orange-500/40',
    iconBgActive: 'bg-orange-500 text-white shadow-orange-500/30',
    accentColor: 'text-orange-600',
    badgeBg: 'bg-orange-100/80 text-orange-800',
    previewBorder: 'border-orange-500/30',
    buttonBg: 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/20 text-white',
    highlights: [
      'Single-use QR Pass Generation',
      'Email Invite Dispatch',
      'Automated Calendar Integration',
      'VIP & Group Guest Invites',
      'Custom Entry Time Window Restrictions',
    ],
    metrics: [
      { label: 'Check-in Speed', value: '< 5 Sec' },
      { label: 'Lobby Queue Speedup', value: '92%' },
    ],
  },
  {
    id: 'kiosk-nda',
    title: 'Smart Visitor Registration',
    shortDesc: 'On-site check-in QR code with photo capture & safety agreements.',
    fullDesc: 'At the entry gate, the security guard guides visitors to scan a QR code and complete their registration on their mobile device. The visit request is instantly sent to the host for approval, enabling a fast, paperless, and secure check-in experience.',
    iconName: 'Sparkles',
    badge: 'Lobby Automation',
    bgColor: 'bg-blue-50/70 hover:bg-blue-50/90',
    activeBgColor: 'bg-gradient-to-br from-blue-50 to-sky-50/60 border-blue-500/40',
    iconBgActive: 'bg-blue-600 text-white shadow-blue-500/30',
    accentColor: 'text-blue-600',
    badgeBg: 'bg-blue-100/80 text-blue-800',
    previewBorder: 'border-blue-500/30',
    buttonBg: 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20 text-white',
    highlights: [
      'Self-Service Tablet & Web Kiosks',
      'Digital NDA & Safety Policy Signatures',
      'Live Visitor Photo ID Capture',
      'Multilingual Registration Support',
      'Custom Visitor Questionnaire Forms',
    ],
    metrics: [
      { label: 'Paperless NDAs', value: '100%' },
      { label: 'Compliance Audit Ready', value: 'Instant' },
    ],
  },
  {
    id: 'badge-print',
    title: 'Instant Visitor Badge Printing',
    shortDesc: 'Wireless thermal printing with color-coded visitor badges.',
    fullDesc: 'Automatically trigger wireless thermal badge printers upon check-in. Print crisp, professional visitor badges complete with guest name, host details, photo, expiration timestamp, and access QR code.',
    iconName: 'Printer',
    badge: 'Visual Security',
    bgColor: 'bg-purple-50/70 hover:bg-purple-50/90',
    activeBgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50/60 border-purple-500/40',
    iconBgActive: 'bg-purple-600 text-white shadow-purple-500/30',
    accentColor: 'text-purple-600',
    badgeBg: 'bg-purple-100/80 text-purple-800',
    previewBorder: 'border-purple-500/30',
    buttonBg: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/20 text-white',
    highlights: [
      'Automatic Wireless Thermal Badge Printing',
      'Color-Coded Visitor Category Badges',
      'Expiration Date & Time Watermarking',
      'Custom Corporate Logo & Branding',
      'Turnstile & Speed Gate Integration',
    ],
    metrics: [
      { label: 'Print Duration', value: '1.2 Sec' },
      { label: 'Zero-Ink Thermal Efficiency', value: '100%' },
    ],
  },
  {
    id: 'watchlist',
    title: 'Watchlist & Security Screening',
    shortDesc: 'Instant screening against internal blacklists & denied party watchlists.',
    fullDesc: 'Protect your premises before unauthorized entry happens. Automatically screen incoming visitors against internal blocklists, security watchlists, and VIP priority registers in real time.',
    iconName: 'ShieldAlert',
    badge: 'Perimeter Defense',
    bgColor: 'bg-emerald-50/70 hover:bg-emerald-50/90',
    activeBgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50/60 border-emerald-500/40',
    iconBgActive: 'bg-emerald-600 text-white shadow-emerald-500/30',
    accentColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-100/80 text-emerald-800',
    previewBorder: 'border-emerald-500/30',
    buttonBg: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20 text-white',
    highlights: [
      'Instant Internal Blacklist Screening',
      'VIP Red-Carpet Reception Alerts',
      'Restricted Area Access Blocking',
      'Security Guard Handheld Alerts',
      'Tamper-Proof Audit Logging',
    ],
    metrics: [
      { label: 'Unwanted Entry Block', value: '100%' },
      { label: 'Security Flag Response', value: 'Instant' },
    ],
  },
  {
    id: 'analytics',
    title: 'Live Visitor Analytics & Audit Reports',
    shortDesc: 'Real-time lobby occupant headcount, logs, & 1-click audit exports.',
    fullDesc: 'Maintain total visibility over everyone inside your facilities. Monitor live visitor occupancy metrics, analyze peak lobby traffic trends, and export audit-ready CSV/PDF reports anytime.',
    iconName: 'BarChart3',
    badge: 'Analytics & Audit',
    bgColor: 'bg-amber-50/70 hover:bg-amber-50/90',
    activeBgColor: 'bg-gradient-to-br from-amber-50 to-yellow-50/60 border-amber-500/40',
    iconBgActive: 'bg-amber-600 text-white shadow-amber-500/30',
    accentColor: 'text-amber-600',
    badgeBg: 'bg-amber-100/80 text-amber-800',
    previewBorder: 'border-amber-500/30',
    buttonBg: 'bg-amber-600 hover:bg-amber-700 shadow-amber-500/20 text-white',
    highlights: [
      'Live On-Premise Visitor Headcount',
      'Peak Lobby Traffic Trend Analysis',
      'Historical Visitor Log Archive',
      'Automated PDF/CSV Audit Report Export',
      'GDPR Compliant Data Masking & Retention',
    ],
    metrics: [
      { label: 'Audit Compliance', value: '100%' },
      { label: 'Real-Time Visibility', value: '24/7' },
    ],
  },
];

export const PlatformModules: React.FC<{ onBookDemo?: () => void }> = ({ onBookDemo }) => {
  const [activeTabId, setActiveTabId] = useState<string>('qr-invite');

  const activeFeature =
    VISITOR_MANAGEMENT_FEATURES.find((f) => f.id === activeTabId) || VISITOR_MANAGEMENT_FEATURES[0];

  return (
    <section className="py-10 bg-slate-50 relative overflow-hidden" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">
            Everything You Need to Manage Visitors
          </h2>

          <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base leading-7 text-slate-600">
            Manage visitor registrations, host approvals, badge printing, and
            audit-ready security from one intelligent platform.
          </p>
        </div>

        {/* Feature Tab Switcher & Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Col: Feature List Tabs (Span 5) */}
          <div className="lg:col-span-5 space-y-3">
            {VISITOR_MANAGEMENT_FEATURES.map((feature) => {
              const isActive = feature.id === activeTabId;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTabId(feature.id)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 cursor-pointer border ${isActive
                    ? `${feature.activeBgColor} shadow-xl shadow-slate-200/50 scale-[1.01]`
                    : `${feature.bgColor} border-slate-200/60 text-slate-700`
                    }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isActive
                      ? feature.iconBgActive
                      : 'bg-white/80 text-slate-600 shadow-sm'
                      }`}
                  >
                    {iconComponents[feature.iconName]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4
                        className={`text-base font-bold truncate ${isActive ? 'text-slate-900' : 'text-slate-800'
                          }`}
                      >
                        {feature.title}
                      </h4>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded shrink-0 ${feature.badgeBg}`}>
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2">{feature.shortDesc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Col: Active Feature Deep-Dive Preview Card (Span 7) */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard variant="light" className={`p-6 md:p-8 ${activeFeature.previewBorder} bg-gradient-to-br from-white via-white to-slate-50`}>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${activeFeature.iconBgActive} flex items-center justify-center shadow-lg`}>
                        {iconComponents[activeFeature.iconName]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{activeFeature.title}</h3>
                        <span className={`text-xs font-mono font-semibold ${activeFeature.accentColor}`}>
                          TapScanner Visitor Management
                        </span>
                      </div>
                    </div>
                    <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full ${activeFeature.badgeBg}`}>
                      {activeFeature.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed mb-6">
                    {activeFeature.fullDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6">
                    <h5 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold mb-3">
                      KEY CAPABILITIES
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeFeature.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white border border-slate-200/80 px-3 py-2 rounded-xl shadow-xs"
                        >
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics & CTA Row */}
                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex gap-6">
                      {activeFeature.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="text-2xl font-black text-slate-900 font-mono">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-slate-500 font-semibold">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={onBookDemo}
                      className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md ${activeFeature.buttonBg}`}
                    >
                      <span>Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
