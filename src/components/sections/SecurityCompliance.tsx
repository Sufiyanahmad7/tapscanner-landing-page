'use client';

import React from 'react';
import { ShieldCheck, Lock, Key, FileCheck, Server, Database, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';

export const SecurityCompliance: React.FC = () => {
  const securityPillars = [
    {
      title: 'Role-Based Access Control (RBAC)',
      desc: 'Enforce granular permissions for Guards, Receptionists, Department Managers, and CISO Auditors.',
      icon: <Key className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'Enterprise Single Sign-On (SSO)',
      desc: 'Seamlessly authenticate users via SAML 2.0, Okta, Azure AD, and Google Workspace.',
      icon: <Lock className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: 'Immutable Audit Logs',
      desc: 'Every gate pass approval, visitor check-in, and security override is permanently logged with digital signatures.',
      icon: <FileCheck className="w-5 h-5 text-blue-500" />,
    },
    {
      title: 'GDPR & DPDP Visitor PII Masking',
      desc: 'Automate data retention policies. Mask or purge guest phone numbers and photos after 30 to 90 days.',
      icon: <Eye className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'AES-256 Cloud Encryption',
      desc: 'Bank-grade encryption at rest (AES-256) and in transit (TLS 1.3) with multi-region backup redundancy.',
      icon: <Database className="w-5 h-5 text-purple-500" />,
    },
    {
      title: '99.99% Uptime SLA',
      desc: 'High-availability multi-tenant cluster with offline local sync mode for gate Android handhelds.',
      icon: <Server className="w-5 h-5 text-teal-500" />,
    },
  ];

  return (
    <section className="py-14 bg-slate-50 text-slate-900 relative overflow-hidden border-y border-slate-100" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange" size="md" className="mb-4">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            CISO-Grade Infrastructure
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Bank-Grade Security. Zero Compromise.
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-medium">
            Designed to meet the stringent security and compliance requirements of Fortune 500 enterprises, healthcare networks, and defense facilities.
          </p>
        </div>

        {/* 6 Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((item) => (
            <GlassCard
              key={item.title}
              variant="light"
              className="p-6 border-slate-200 hover:border-orange-500/40"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
