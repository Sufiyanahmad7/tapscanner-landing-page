'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, ArrowUpRight } from 'lucide-react';
import { DASHBOARD_TABS } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const DashboardShowcase: React.FC<{ onBookDemo?: () => void }> = ({ onBookDemo }) => {
  const [activeTabId, setActiveTabId] = useState<string>('reception');

  const activeTab = DASHBOARD_TABS.find((t) => t.id === activeTabId) || DASHBOARD_TABS[0];

  return (
    <section className="py-14 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="orange" size="md" className="mb-4">
            <LayoutDashboard className="w-4 h-4 text-orange-500" />
            Role-Based Admin Console
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            One Platform for Every Team
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-medium">
            From front desk receptionists to CISO security leads, TapScanner delivers real-time visibility tailored to each role.
          </p>
        </div>

        {/* Tab Buttons Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {DASHBOARD_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/25'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200/60 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Animated Dashboard Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden"
          >
            {/* Top Bar Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
              <div>
                <span className="text-xs font-mono text-orange-600 font-bold uppercase tracking-wider">
                  ROLE: {activeTab.role}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{activeTab.label} View</h3>
                <p className="text-xs text-slate-500 mt-1">{activeTab.description}</p>
              </div>

              <Button variant="primary" size="sm" onClick={onBookDemo}>
                Launch Interactive Demo
              </Button>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {activeTab.metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
                >
                  <div className="text-xs text-slate-500 font-medium mb-1">{metric.title}</div>
                  <div className="text-3xl font-extrabold text-slate-950 font-mono">{metric.value}</div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold mt-2 text-emerald-600">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>{metric.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Activity Table */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                  LIVE DASHBOARD LOG STREAM
                </span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">
                  Status: Connected
                </span>
              </div>

              <div className="space-y-3">
                {activeTab.recentActivity.map((activity, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-slate-400 shrink-0">{activity.time}</span>
                      <span className="font-semibold text-slate-700">{activity.event}</span>
                    </div>

                    <span
                      className={`font-mono text-[10px] px-2.5 py-1 rounded font-bold shrink-0 ${
                        activity.status === 'Approved'
                          ? 'bg-emerald-500/20 text-emerald-600 border border-emerald-500/30'
                          : activity.status === 'Flagged'
                          ? 'bg-red-500/20 text-red-600 border border-red-500/30'
                          : 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
