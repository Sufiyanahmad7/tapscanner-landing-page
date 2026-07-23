'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, CheckCircle2, ShieldCheck, Printer, ArrowRight, Smartphone, Sparkles, Building, Clock, FileCheck, Shield, User } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const LiveKioskSimulator: React.FC<{ onBookDemo?: () => void }> = ({ onBookDemo }) => {
  const [scanStep, setScanStep] = useState<'idle' | 'scanning' | 'approved' | 'badge_printed'>('idle');
  const [visitorName] = useState('Sarah Jenkins');
  const [visitorCompany] = useState('Acme Enterprise Solutions');
  const [hostName] = useState('Marcus Wright');

  const handleSimulateScan = () => {
    setScanStep('scanning');
    setTimeout(() => {
      setScanStep('approved');
      setTimeout(() => {
        setScanStep('badge_printed');
      }, 1400);
    }, 1200);
  };

  const handleReset = () => {
    setScanStep('idle');
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden text-slate-800">
      {/* Top Window Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-250">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-300" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <div className="w-3 h-3 rounded-full bg-slate-100" />
          <span className="ml-3 text-xs font-mono text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            tapscanner-cloud.live (Active Gate 1)
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <Badge variant="orange" size="sm">
            <ShieldCheck className="w-3.5 h-3.5" /> SOC 2 Certified
          </Badge>
          <span className="text-xs font-mono text-slate-500">Terminal #4 - Corporate HQ</span>
        </div>
      </div>

      {/* Main Grid View: Left Tablet Kiosk | Right Live Operations Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Col: Touchless Kiosk Simulator (Span 5) */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-white border-r border-slate-200 flex flex-col justify-between relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono tracking-widest text-orange-600 uppercase font-semibold flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> Kiosk Simulator
              </span>
              <span className="text-xs text-slate-400 font-mono">Touchless Scan Mode</span>
            </div>

            {/* Kiosk Display Frame */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-xs relative min-h-[340px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                {scanStep === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 text-orange-500 shadow-md">
                      <QrCode className="w-10 h-10 animate-pulse" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Touchless Check-In</h4>
                    <p className="text-xs text-slate-500 mb-6 max-w-xs">
                      Scan your pre-registered QR code or press below to test check-in flow.
                    </p>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleSimulateScan}
                      rightIcon={<Sparkles className="w-4 h-4" />}
                    >
                      Simulate Visitor Check-In
                    </Button>
                  </motion.div>
                )}

                {scanStep === 'scanning' && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-28 h-28 mb-4 border-2 border-orange-500/30 rounded-2xl flex items-center justify-center bg-orange-500/5">
                      <motion.div
                        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-lg shadow-orange-500"
                        animate={{ y: [-40, 40, -40] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <QrCode className="w-14 h-14 text-orange-500 opacity-60" />
                    </div>
                    <p className="text-sm font-medium text-orange-600 font-mono animate-pulse">
                      Verifying Security watchlist & credentials...
                    </p>
                  </motion.div>
                )}

                {scanStep === 'approved' && (
                  <motion.div
                    key="approved"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 border border-emerald-250">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">Check-In Approved!</h4>
                    <p className="text-xs text-slate-500 mt-1">Host Marcus Wright notified via dashboard</p>
                  </motion.div>
                )}

                {scanStep === 'badge_printed' && (
                  <motion.div
                    key="badge_printed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center w-full"
                  >
                    {/* Simulated Printed Visitor Badge Card */}
                    <div className="w-full bg-white text-slate-900 rounded-xl p-4 shadow-xl border-t-4 border-orange-500 text-left relative overflow-hidden mb-4 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5 font-bold text-xs text-orange-600">
                          <Building className="w-3.5 h-3.5" /> VISITOR PASS
                        </div>
                        <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">
                          #TS-8912
                        </span>
                      </div>
                      <div className="flex gap-3 items-center mt-2">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-slate-900">{visitorName}</div>
                          <div className="text-xs text-slate-500">{visitorCompany}</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-150 flex items-center justify-between text-[11px]">
                        <div>
                          <span className="text-slate-400">Host:</span> <span className="font-semibold text-slate-700">{hostName}</span>
                        </div>
                        <div className="font-mono text-emerald-600 font-bold">ZONE A ACCESS</div>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" onClick={handleReset} className="text-slate-500 hover:text-slate-800">
                      Scan Another Guest
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Kiosk Status Cards */}
          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[10px] font-mono text-slate-500 justify-between">
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Badge Printer Ready
            </span>
            <span>Last Sync: 35 ms</span>
            <span>Gate 1 Online</span>
          </div>
        </div>

        {/* Right Col: Live Cloud Security Dashboard View (Span 7) */}
        <div className="lg:col-span-7 p-6 md:p-8 bg-slate-50 flex flex-col justify-between border-l border-slate-200">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base md:text-lg font-black text-slate-900 flex items-center gap-2">
                  TapScanner Operations Dashboard
                </h3>
                <p className="text-xs text-slate-500">Real-time visitor, employee movement, gate operations and facility insights.</p>
              </div>
              <Badge variant="orange" size="sm" className="hidden sm:inline-flex bg-white shadow-xs">
                Cloud Connected
              </Badge>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                <div className="text-[10px] md:text-xs text-slate-500 mb-1">Visitors On-Site</div>
                <div className="text-xl font-extrabold text-orange-500 font-mono">
                  {scanStep === 'badge_printed' ? 143 : 142}
                </div>
                <div className="text-[9px] text-emerald-600 mt-0.5 font-semibold">+12 vs yesterday</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                <div className="text-[10px] md:text-xs text-slate-500 mb-1">Active Gate Passes</div>
                <div className="text-xl font-extrabold text-slate-800 font-mono">38</div>
                <div className="text-[9px] text-slate-500 mt-0.5">4 Overdue Returnables</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                <div className="text-[10px] md:text-xs text-slate-500 mb-1">Emergency Status</div>
                <div className="text-sm font-bold text-emerald-600 font-mono flex items-center gap-1 mt-1">
                  <Shield className="w-3.5 h-3.5 shrink-0" /> Ready
                </div>
                <div className="text-[9px] text-emerald-600 mt-0.5 font-semibold">All Zones Clear</div>
              </div>
            </div>

            {/* Live Activity Timeline */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="text-xs font-bold text-slate-800 mb-3 flex items-center justify-between">
                <span>REAL-TIME ACTIVITY TIMELINE</span>
                <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  Auto-Updating
                </span>
              </div>

              <div className="space-y-2">
                <AnimatePresence>
                  {scanStep === 'badge_printed' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-orange-50/70 border border-orange-200 rounded-lg p-2.5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-orange-500" />
                        <div>
                          <div className="font-bold text-slate-900">Visitor Checked-In</div>
                          <div className="text-[10px] text-slate-500">Sarah Jenkins • Reception Gate</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-600 font-bold px-2 py-0.5 bg-emerald-50 rounded border border-emerald-100">
                        Just Now
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">09:45 AM</span>
                    <div>
                      <div className="font-semibold text-slate-800">Employee Checked-Out</div>
                      <div className="text-[10px] text-slate-500">Official Break Pass • Building B</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">Verified</span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">09:31 AM</span>
                    <div>
                      <div className="font-semibold text-slate-800">Gate Pass Approved</div>
                      <div className="text-[10px] text-slate-500">Laptop Asset GP-402 • Asset Movement</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">Approved</span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">09:24 AM</span>
                    <div>
                      <div className="font-semibold text-slate-800">Delivery Received</div>
                      <div className="text-[10px] text-slate-500">DHL Package #8921 • Dock Entrance</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">Logged</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Dashboard Status Row */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
            <span className="text-slate-500">Want a custom demo for your facility perimeters?</span>
            <Button variant="primary" size="sm" onClick={onBookDemo} rightIcon={<ArrowRight className="w-4 h-4" />}>
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
