'use client';

import React from 'react';
import { Building2 } from 'lucide-react';

export const Footer: React.FC<{ onBookDemo: () => void }> = ({ onBookDemo }) => {
  return (
    <footer className="bg-slate-50 text-slate-700 pt-20 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-250">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/25">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                Tap<span className="text-orange-500">Scanner</span>
              </span>
            </a>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              TapScanner is a cloud-based visitor management platform that helps organizations streamline visitor registration, approvals, secure check-ins, and facility access through one centralized system.
            </p>

            {/* <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEM STATUS: 99.99% ONLINE
              </span>
            </div> */}
          </div>

          {/* Col 2: Platform */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#features" className="hover:text-orange-600 transition-colors">Visitor Management</a></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#solutions" className="hover:text-orange-600 transition-colors">Corporate Offices</a></li>
              <li><a href="#solutions" className="hover:text-orange-600 transition-colors">Manufacturing Plants</a></li>
              <li><a href="#solutions" className="hover:text-orange-600 transition-colors">Logistics & Warehouses</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Compliance */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Compliance
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#security" className="hover:text-orange-600 transition-colors">ISO 27001 Certified</a></li>
              <li><a href="#security" className="hover:text-orange-600 transition-colors">SOC 2 Type II Audited</a></li>
              <li><a href="#security" className="hover:text-orange-600 transition-colors">GDPR & DPDP Ready</a></li>
              <li><a href="#security" className="hover:text-orange-600 transition-colors">SAML 2.0 & SSO</a></li>
              <li><a href="#security" className="hover:text-orange-600 transition-colors">Role-Based Access Control</a></li>
              <li><a href="#security" className="hover:text-orange-600 transition-colors">Audit Trail Logs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 TapScanner Inc. All rights reserved. Cloud-Based Multi-Tenant Platform.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
            <a href="#" className="hover:text-slate-600">Security Statement</a>
            <a href="#" className="hover:text-slate-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
