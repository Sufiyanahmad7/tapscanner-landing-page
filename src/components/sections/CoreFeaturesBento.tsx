'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, QrCode, BellRing, PackageCheck, Flame } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { GatePassToggle } from '@/components/interactive/GatePassToggle';
import { RollCallSimulator } from '@/components/interactive/RollCallSimulator';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const CoreFeaturesBento: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden" id="features">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <Badge variant="orange" size="md">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Core System Architecture
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Smarter Visitor & Facility Operations
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-slate-600 font-medium"
          >
            Every feature engineered to eliminate manual bottlenecks, prevent unauthorized entry, and maintain 100% audit readiness.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Card 1: Interactive Gate Pass Management (Span 8) */}
          <div className="col-span-12 lg:col-span-8">
            <GlassCard variant="light" className="p-6 md:p-8 h-full flex flex-col justify-between border-slate-200">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="orange" size="sm">
                    <PackageCheck className="w-3.5 h-3.5" /> Material & Asset Control
                  </Badge>
                  <span className="text-xs font-mono text-slate-500">Barcode / QR Verification</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  Interactive Material Gate Pass Management
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Digitize returnable and non-returnable asset movement with multi-level manager approval chains and auto-ping overdue alerts.
                </p>

                {/* Embedded Gate Pass Interactive Component */}
                <GatePassToggle />
              </div>
            </GlassCard>
          </div>

          {/* Card 2: Touchless QR Check-in (Span 4) */}
          <div className="col-span-12 lg:col-span-4">
            <GlassCard variant="light" className="p-6 md:p-8 h-full flex flex-col justify-between border-slate-200">
              <div>
                <Badge variant="orange" size="sm" className="mb-4">
                  <QrCode className="w-3.5 h-3.5" /> Pre-Registration
                </Badge>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Touchless QR Kiosk Entry
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Send single-use QR invites directly to guest mobile phones for 5-second touchless entry.
                </p>

                <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-center relative overflow-hidden">
                  <div className="w-24 h-24 mx-auto bg-white rounded-xl p-2 flex items-center justify-center shadow-md mb-3 border border-slate-200">
                    <QrCode className="w-20 h-20 text-slate-900" />
                  </div>
                  <div className="text-xs font-mono font-semibold text-orange-600">
                    SCAN FOR RECEPTION ACCESS
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Valid Gate 1 • Single Use Pass</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Card 3: Instant Multi-Channel Alerts (Span 4) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <GlassCard variant="light" className="p-6 h-full flex flex-col justify-between border-slate-200">
              <div>
                <Badge variant="outline" size="sm" className="mb-4">
                  <BellRing className="w-3.5 h-3.5 text-amber-500" /> Real-Time Pings
                </Badge>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Instant Multi-Channel Host Pings
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Hosts get notified via WhatsApp, Teams, Slack, or SMS with one-tap guest approval actions.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="bg-slate-100 border border-slate-200 p-3 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-slate-800 font-medium">WhatsApp Ping: Guest Arrived</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-mono font-bold">10:42 AM</span>
                  </div>
                  <div className="bg-slate-100 border border-slate-200 p-3 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-slate-800 font-medium">MS Teams: VIP Guest Checked In</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">10:35 AM</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Card 4: Parcel & Delivery Hub (Span 4) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <GlassCard variant="light" className="p-6 h-full flex flex-col justify-between border-slate-200">
              <div>
                <Badge variant="outline" size="sm" className="mb-4">
                  <PackageCheck className="w-3.5 h-3.5 text-blue-500" /> Logistics Control
                </Badge>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Delivery & Parcel OCR Scanner
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Guards snap courier labels; AI auto-notifies recipients with secure pickup locker PINs.
                </p>

                <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl text-xs space-y-2">
                  <div className="flex justify-between font-mono text-slate-500">
                    <span>COURIER: DHL EXPRESS</span>
                    <span className="text-emerald-600 font-semibold">OCR READ: 100%</span>
                  </div>
                  <div className="font-bold text-slate-800">Recipient: Dr. Aris (R&D Dept)</div>
                  <div className="text-[11px] text-orange-600 font-medium">Pickup PIN sent to WhatsApp</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Card 5: Emergency Roll Call Live (Span 4) */}
          <div className="col-span-12 lg:col-span-4">
            <GlassCard variant="light" className="p-6 h-full flex flex-col justify-between border-slate-200">
              <div>
                <Badge variant="outline" size="sm" className="mb-4">
                  <Flame className="w-3.5 h-3.5 text-red-500" /> Life Safety
                </Badge>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  AI Emergency Evac-Roll-Call
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  One-tap mobile siren and live missing personnel roster for safety marshals.
                </p>

                {/* Embedded Live Roll Call Component */}
                <RollCallSimulator />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
