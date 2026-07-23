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
    shortDesc: 'Send instant QR passes via WhatsApp/Email for 5-second lobby entry.',
    fullDesc: 'Hosts pre-register guests in seconds. Visitors receive a personalized digital QR pass with facility directions, host details, and parking info directly on their smartphone for instant scan-and-go entry.',
    iconName: 'UserCheck',
    badge: 'Pre-Registration',
    highlights: [
      'Single-use QR Pass Generation',
      'WhatsApp & Email Invite Dispatch',
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
    title: 'Self-Service Kiosk & Digital NDA Signing',
    shortDesc: 'On-site check-in kiosks with photo capture & safety agreements.',
    fullDesc: 'Empower walk-in visitors to check in via sleek iPad or web kiosks. Capture visitor photo IDs, collect digital signatures for safety policies or NDAs, and store compliance documents automatically.',
    iconName: 'Sparkles',
    badge: 'Lobby Automation',
    highlights: [
      'Self-Service Tablet & Web Kiosks',
      'Digital NDA & Safety Policy Signatures',
      'Live Visitor Photo ID Capture',
      'Multilingual Kiosk Interface Support',
      'Custom Visitor Questionnaire Forms',
    ],
    metrics: [
      { label: 'Paperless NDAs', value: '100%' },
      { label: 'Compliance Audit Ready', value: 'Instant' },
    ],
  },
  {
    id: 'host-alerts',
    title: 'Instant Multi-Channel Host Arrival Pings',
    shortDesc: 'Real-time WhatsApp, Teams, SMS, & Email notifications upon guest arrival.',
    fullDesc: 'Never leave guests waiting in the lobby. As soon as a visitor checks in, TapScanner automatically notifies the host with guest photo, company name, and one-tap approval response actions.',
    iconName: 'Bell',
    badge: 'Real-Time Alerts',
    highlights: [
      'WhatsApp & SMS Instant Arrival Alerts',
      'Microsoft Teams & Slack Bot Pings',
      'One-Tap Accept / Reschedule Response',
      'Delegate Host & Escort Assignment',
      'Automatic Receptionist Escalation',
    ],
    metrics: [
      { label: 'Notification Speed', value: '< 1 Sec' },
      { label: 'Host Response Rate', value: '98%' },
    ],
  },
  {
    id: 'badge-print',
    title: 'Instant Visitor Badge Printing',
    shortDesc: 'Wireless thermal printing with color-coded visitor badges.',
    fullDesc: 'Automatically trigger wireless thermal badge printers upon check-in. Print crisp, professional visitor badges complete with guest name, host details, photo, expiration timestamp, and access QR code.',
    iconName: 'Printer',
    badge: 'Visual Security',
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
    <section className="py-14 bg-slate-50 relative overflow-hidden" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange" size="md" className="mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            Enterprise Visitor Management System
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything You Need to Manage Visitors
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-medium">
            Streamline lobby check-ins, digitize NDAs, automate host arrival pings, print badges instantly, and maintain 100% audit-ready security logs.
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
                  className={`w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 cursor-pointer border ${
                    isActive
                      ? 'bg-white border-orange-500/40 shadow-xl shadow-orange-500/10 scale-[1.01]'
                      : 'bg-white/60 border-slate-200/80 hover:bg-white text-slate-700'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {iconComponents[feature.iconName]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4
                        className={`text-base font-bold truncate ${
                          isActive ? 'text-slate-900' : 'text-slate-700'
                        }`}
                      >
                        {feature.title}
                      </h4>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">{feature.shortDesc}</p>
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
                <GlassCard variant="light" className="p-6 md:p-8 border-orange-500/30">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20">
                        {iconComponents[activeFeature.iconName]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{activeFeature.title}</h3>
                        <span className="text-xs font-mono text-orange-600 font-semibold">
                          TapScanner Visitor Management
                        </span>
                      </div>
                    </div>
                    <Badge variant="orange" size="md">
                      {activeFeature.badge}
                    </Badge>
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
                          className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-100/80 px-3 py-2 rounded-xl"
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

                    <Button
                      variant="primary"
                      size="md"
                      onClick={onBookDemo}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Demo Visitor Management
                    </Button>
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
