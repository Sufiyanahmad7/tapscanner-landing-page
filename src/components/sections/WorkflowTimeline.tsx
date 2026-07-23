'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, BellRing, Printer, CheckCircle2, Sparkles } from 'lucide-react';
import { WORKFLOW_STEPS } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const stepIconMap: Record<string, React.ReactNode> = {
  QrCode: <QrCode className="w-6 h-6 text-orange-500" />,
  BellRing: <BellRing className="w-6 h-6 text-amber-500" />,
  Printer: <Printer className="w-6 h-6 text-blue-500" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
};

export const WorkflowTimeline: React.FC = () => {
  return (
    <section className="py-14 bg-white relative overflow-hidden" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <Badge variant="orange" size="md">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Seamless Operational Flow
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            How Touchless Check-In Works in 4 Steps.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-slate-600 font-medium"
          >
            From single-click digital invites to real-time gate pass clearance, TapScanner automates the entire end-to-end journey.
          </motion.p>
        </motion.div>

        {/* Horizontal & Vertical 4-Step Timeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connector Line (Desktop Horizontal) */}
          <div className="hidden md:block absolute top-1/4 left-12 right-12 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 -z-0 rounded-full opacity-30" />

          {WORKFLOW_STEPS.map((stepItem) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: parseInt(stepItem.step) * 0.1 }}
              className="relative z-10 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-orange-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shadow-md">
                    {stepIconMap[stepItem.icon]}
                  </div>
                  <span className="text-2xl font-black font-mono text-orange-500/40">
                    {stepItem.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{stepItem.title}</h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">{stepItem.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-500 bg-slate-50 p-3 rounded-xl">
                <span className="font-semibold text-slate-800">Operational Detail:</span>{' '}
                {stepItem.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
