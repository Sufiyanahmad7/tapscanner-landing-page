'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, BellRing, Printer, CheckCircle2, ChevronRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const stepStyles: Record<
  string,
  {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    iconColor: string;
    iconBg: string;
    glowHover: string;
  }
> = {
  '01': {
    bg: 'bg-[#fffaf6]',
    border: 'border-slate-200/80 border-l-4 border-l-orange-500',
    badgeBg: 'bg-orange-100/80',
    badgeText: 'text-orange-700',
    iconColor: 'text-orange-500',
    iconBg: 'bg-white shadow-sm border border-orange-100/80',
    glowHover: 'hover:border-l-orange-600 hover:shadow-orange-500/10',
  },
  '02': {
    bg: 'bg-[#fcf8ff]',
    border: 'border-slate-200/80 border-l-4 border-l-purple-500',
    badgeBg: 'bg-purple-100/80',
    badgeText: 'text-purple-700',
    iconColor: 'text-purple-500',
    iconBg: 'bg-white shadow-sm border border-purple-100/80',
    glowHover: 'hover:border-l-purple-600 hover:shadow-purple-500/10',
  },
  '03': {
    bg: 'bg-[#f5f9ff]',
    border: 'border-slate-200/80 border-l-4 border-l-blue-500',
    badgeBg: 'bg-blue-100/80',
    badgeText: 'text-blue-700',
    iconColor: 'text-blue-500',
    iconBg: 'bg-white shadow-sm border border-blue-100/80',
    glowHover: 'hover:border-l-blue-600 hover:shadow-blue-500/10',
  },
  '04': {
    bg: 'bg-[#f4fbf7]',
    border: 'border-slate-200/80 border-l-4 border-l-emerald-500',
    badgeBg: 'bg-emerald-100/80',
    badgeText: 'text-emerald-700',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-white shadow-sm border border-emerald-100/80',
    glowHover: 'hover:border-l-emerald-600 hover:shadow-emerald-500/10',
  },
};

const renderStepIcon = (iconName: string, iconColorClass: string) => {
  const props = { className: `w-5 h-5 ${iconColorClass}` };
  switch (iconName) {
    case 'QrCode':
      return <QrCode {...props} />;
    case 'BellRing':
      return <BellRing {...props} />;
    case 'Printer':
      return <Printer {...props} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...props} />;
    default:
      return <CheckCircle2 {...props} />;
  }
};

export const WorkflowTimeline: React.FC = () => {
  return (
    <section className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-white relative overflow-hidden" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header with Exact Hierarchy and Spacing */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4"
          >
            How Touchless Check-In Works in 4 Steps
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            From visitor registration to secure QR-based check-in, TapScanner automates the complete visitor journey through one intelligent workflow.
          </motion.p>
        </motion.div>

        {/* 4-Step Horizontal Cards Grid Container */}
        <div className="relative">
          {/* Subtle Workflow Line Connector (Desktop Only) */}
          <div className="hidden lg:block absolute top-[50%] left-[8%] right-[8%] -translate-y-1/2 h-[2px] bg-gradient-to-r from-orange-200 via-purple-200 via-blue-200 to-emerald-200 opacity-70 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10">
            {WORKFLOW_STEPS.map((stepItem, index) => {
              const style = stepStyles[stepItem.step] || stepStyles['01'];
              const isLast = index === WORKFLOW_STEPS.length - 1;

              return (
                <div key={stepItem.step} className="relative group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className={`h-[285px] sm:h-[295px] rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${style.bg} ${style.border} ${style.glowHover}`}
                  >
                    {/* Floating Step Number Badge */}
                    <span
                      className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono tracking-wider shadow-2xs ${style.badgeBg} ${style.badgeText}`}
                    >
                      {stepItem.step}
                    </span>

                    <div>
                      {/* Large Circular Icon Container with Soft Shadow */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110 ${style.iconBg}`}
                      >
                        {renderStepIcon(stepItem.icon, style.iconColor)}
                      </div>

                      {/* Step Title */}
                      <h3 className="text-base font-bold text-slate-900 mb-1.5 tracking-tight">
                        {stepItem.title}
                      </h3>

                      {/* Step Short Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {stepItem.desc}
                      </p>
                    </div>

                    {/* Compact "Operational Highlight" Callout Pill */}
                    <div className="pt-3 border-t border-slate-200/60 flex flex-col gap-1">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${style.badgeText.replace('text-', 'bg-')}`} />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Operational Highlight
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium leading-tight">
                        {stepItem.detail}
                      </p>
                    </div>
                  </motion.div>

                  {/* Flow Arrow Connector between cards (Desktop Only) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200/90 shadow-xs items-center justify-center text-slate-400 group-hover:text-slate-600 group-hover:border-slate-300 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

