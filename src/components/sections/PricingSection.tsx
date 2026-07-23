'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, X, ShieldCheck, Landmark, Layers, HelpCircle, Calculator, BadgePercent, ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const PricingSection: React.FC<{ onBookDemo: () => void }> = ({ onBookDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // ROI Calculator inputs
  const [employees, setEmployees] = useState<number>(50);
  const [visitors, setVisitors] = useState<number>(200);
  const [locations, setLocations] = useState<number>(1);

  // Pricing plans data mapping
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      bestFor: 'Small Offices & Startups',
      priceINR: isAnnual ? 4249 : 4999,
      priceUSD: isAnnual ? 50 : 59,
      features: [
        'Visitor Management',
        'Visitor Approval Workflow',
        'QR Check-In & Check-Out',
        'Digital Visitor Passes',
        'Reports & Dashboard',
        'Up to 25 Employees',
      ],
      ctaText: 'Start Free Trial',
      popular: false,
    },
    {
      id: 'business',
      name: 'Business',
      bestFor: 'Growing Businesses',
      priceINR: isAnnual ? 11049 : 12999,
      priceUSD: isAnnual ? 126 : 149,
      features: [
        'Everything in Starter',
        'Employee Movement',
        'Material Gate Pass',
        'Contractor Management',
        'Multi-Branch Support',
        'Advanced Analytics',
        'Priority Support',
      ],
      ctaText: 'Book Demo',
      popular: true,
      badge: 'Most Popular',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      bestFor: 'Large Enterprises',
      priceINR: null,
      priceUSD: null,
      features: [
        'Everything in Business',
        'Unlimited Employees',
        'Unlimited Branches',
        'API Integration',
        'Single Sign-On (SSO)',
        'On-Premise or Cloud Deployment',
        'Dedicated Support',
      ],
      ctaText: 'Talk to Sales',
      popular: false,
    },
  ];

  // Comparison Matrix Rows
  const comparisonRows = [
    { name: 'Visitor Management', starter: true, business: true, enterprise: true },
    { name: 'QR Check-In', starter: true, business: true, enterprise: true },
    { name: 'Visitor Approval Workflow', starter: true, business: true, enterprise: true },
    { name: 'Employee Movement', starter: false, business: true, enterprise: true },
    { name: 'Material Gate Pass', starter: false, business: true, enterprise: true },
    { name: 'Contractor Management', starter: false, business: true, enterprise: true },
    { name: 'Vendor Management', starter: false, business: true, enterprise: true },
    { name: 'Delivery Management', starter: false, business: true, enterprise: true },
    { name: 'Emergency Roll Call', starter: false, business: true, enterprise: true },
    { name: 'Reports', starter: true, business: true, enterprise: true },
    { name: 'Analytics', starter: false, business: true, enterprise: true },
    { name: 'Role-Based Access', starter: false, business: true, enterprise: true },
    { name: 'Multi-Location', starter: false, business: true, enterprise: true },
    { name: 'API Access', starter: false, business: false, enterprise: true },
    { name: 'SSO', starter: false, business: false, enterprise: true },
    { name: 'On-Premise', starter: false, business: false, enterprise: true },
    { name: 'Dedicated Success Manager', starter: false, business: false, enterprise: true },
    { name: 'Priority Support', starter: false, business: true, enterprise: true },
    { name: 'Custom Branding', starter: false, business: true, enterprise: true },
    { name: 'Audit Logs', starter: false, business: true, enterprise: true },
    { name: 'Enterprise SLA', starter: false, business: false, enterprise: true },
  ];

  // Dynamic ROI Calculations
  const roiCalculations = useMemo(() => {
    const receptionHrsSaved = Math.round((visitors * 10) / 60);
    let paperSavings = 0;
    let laborSavings = 0;
    let recommended = 'Starter';

    if (currency === 'INR') {
      paperSavings = Math.round(visitors * 5);
      laborSavings = receptionHrsSaved * 300;
    } else {
      paperSavings = Math.round(visitors * 0.08);
      laborSavings = receptionHrsSaved * 12;
    }

    const totalSavings = paperSavings + laborSavings + (locations * (currency === 'INR' ? 1500 : 20));

    if (employees > 250 || locations > 5) {
      recommended = 'Enterprise';
    } else if (employees > 25 || locations > 1 || visitors > 100) {
      recommended = 'Business';
    } else {
      recommended = 'Starter';
    }

    return {
      monthlySavings: totalSavings,
      timeSaved: receptionHrsSaved,
      paperSaved: paperSavings,
      incidentsAvoided: locations > 0 ? `${locations * 3}% higher security accuracy` : '100% Secure',
      recommended,
    };
  }, [employees, visitors, locations, currency]);

  // Pricing FAQs
  const pricingFaqs = [
    {
      q: 'Can I upgrade anytime?',
      a: 'Yes, you can upgrade, downgrade, or change your billing terms at any time directly from your administration billing console.',
    },
    {
      q: 'Is there a free trial?',
      a: 'Absolutely! Our Starter plan comes with a 14-day free trial, allowing you to test QR badge scanning and approval workflows with zero risk.',
    },
    {
      q: 'Do you offer discounts?',
      a: 'Yes. Selecting an annual subscription gives you a 15% discount compared to monthly cycles. We also provide customized volume discounts for multi-location offices.',
    },
    {
      q: 'Can I host on-premise?',
      a: 'Yes, our Enterprise plan supports local on-premise container deployment or secure virtual private cloud (VPC) deployments.',
    },
    {
      q: 'How is pricing calculated?',
      a: 'Starter and Business plans are billed at flat rates per organization according to the location and employee capacity limits. Enterprise quotes are calculated based on your specific requirements.',
    },
    {
      q: 'Can I customize modules?',
      a: 'Yes, our Business and Enterprise plans allow you to activate specific modules separately to suit your workflows.',
    },
  ];

  return (
    <section className="pt-16 pb-12 bg-white relative overflow-visible" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <Badge variant="orange" size="md" className="mb-2">
            <BadgePercent className="w-4 h-4 text-orange-500" />
            Flexible Pricing
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Choose the Right Plan for Your Organization
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mb-4">
            Whether you're managing a single office or a global enterprise, TapScanner offers scalable plans that grow with your business.
          </p>

          {/* Pricing Controls: Currency + Cycle */}
          <div className="flex flex-row items-center justify-center gap-3">
            {/* Billing Cycle Toggle */}
            <div className="inline-flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${!isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${isAnnual ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                <span>Annual</span>
                <span className="bg-white/20 text-white text-[8px] px-1 py-0.2 rounded uppercase">
                  Save 15%
                </span>
              </button>
            </div>

            {/* Currency Toggle */}
            <div className="inline-flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${currency === 'INR' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                INR (₹)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${currency === 'USD' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid - Desktop Viewport Friendly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12 max-w-6xl mx-auto overflow-visible pt-6">
          {plans.map((plan) => {
            const hasPrice = plan.priceINR !== null;
            const displayPrice = currency === 'INR' ? plan.priceINR : plan.priceUSD;
            const currencySymbol = currency === 'INR' ? '₹' : '$';

            return (
              <GlassCard
                key={plan.id}
                variant={plan.popular ? 'orangeGlow' : 'light'}
                className={`p-5 flex flex-col justify-between relative border border-slate-200 rounded-2xl hover:-translate-y-1 transition-all duration-200 ${plan.popular ? 'border-2 border-orange-500 shadow-xl scale-[1.01] z-10' : 'shadow-md shadow-slate-50'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4 border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-black text-slate-900 mb-0.5">{plan.name}</h3>
                    <p className="text-[10px] text-slate-400 font-semibold mb-2">{plan.bestFor}</p>

                    {hasPrice ? (
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-3xl font-mono font-black text-slate-900 tracking-tight">
                          {currencySymbol}
                          {displayPrice?.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">/ month</span>
                      </div>
                    ) : (
                      <div className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                        Contact Sales
                      </div>
                    )}
                    <span className="text-[9px] text-slate-400 block mt-0.5 font-semibold">
                      per organization
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-[12px] text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 mt-auto">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="sm"
                    onClick={onBookDemo}
                    className="w-full justify-center text-xs py-2"
                  >
                    {plan.ctaText}
                  </Button>
                  {plan.id === 'starter' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onBookDemo}
                      className="w-full justify-center text-slate-400 hover:text-slate-700 text-[10px] py-1"
                    >
                      View Features
                    </Button>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-6">
            <h3 className="text-lg font-extrabold text-slate-950 flex items-center justify-center gap-2">
              <Layers className="w-4 h-4 text-orange-500" />
              Detailed Feature Matrix
            </h3>
            <p className="text-[11px] text-slate-500">Compare options side-by-side</p>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-md">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-3 text-[10px] font-mono font-bold text-slate-950 uppercase tracking-wider">Features</th>
                  <th className="p-3 text-[10px] font-mono font-bold text-slate-950 uppercase tracking-wider text-center">Starter</th>
                  <th className="p-3 text-[10px] font-mono font-bold text-slate-950 uppercase tracking-wider text-center">Business</th>
                  <th className="p-3 text-[10px] font-mono font-bold text-slate-950 uppercase tracking-wider text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.name} className="border-b border-slate-100 hover:bg-slate-50/30">
                    <td className="p-3 text-xs font-semibold text-slate-700">{row.name}</td>
                    <td className="p-3 text-center">
                      {row.starter ? (
                        <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300 font-mono text-[10px]">-</span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {row.business ? (
                        <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300 font-mono text-[10px]">-</span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {row.enterprise ? (
                        <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300 font-mono text-[10px]">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <GlassCard variant="light" className="p-6 border border-slate-200 bg-slate-50/50 shadow-md rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-4.5 h-4.5 text-orange-500" />
              <h3 className="text-base font-black text-slate-900">Calculate Your Savings</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex justify-between">
                    <span>Number of Employees</span>
                    <span className="text-orange-500">{employees}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer h-1 bg-slate-200 rounded-lg appearance-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex justify-between">
                    <span>Visitors per Month</span>
                    <span className="text-orange-500">{visitors}</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={visitors}
                    onChange={(e) => setVisitors(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer h-1 bg-slate-200 rounded-lg appearance-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex justify-between">
                    <span>Active Locations</span>
                    <span className="text-orange-500">{locations}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={locations}
                    onChange={(e) => setLocations(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer h-1 bg-slate-200 rounded-lg appearance-none"
                  />
                </div>
              </div>

              {/* Outputs */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Estimated Monthly Savings
                    </span>
                    <span className="text-2xl font-mono font-black text-slate-900">
                      {currency === 'INR' ? '₹' : '$'}
                      {roiCalculations.monthlySavings.toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <div>
                      <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase block">
                        Time Saved
                      </span>
                      <span className="text-xs font-extrabold text-slate-800">
                        {roiCalculations.timeSaved} hrs/mo
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase block">
                        Logbooks Saved
                      </span>
                      <span className="text-xs font-extrabold text-slate-800">
                        {currency === 'INR' ? '₹' : '$'}
                        {roiCalculations.paperSaved.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-150 flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">Recommended Tier:</span>
                  <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/50">
                    {roiCalculations.recommended}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Included with Every Plan Trust Section */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <h3 className="text-sm font-extrabold text-slate-900">Included with Every Plan</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              'Secure Cloud Hosting',
              'Automatic Updates',
              'Audit Logs',
              'Mobile Access',
              'Data Encryption',
              'Role-Based Access',
              'Regular Backups',
            ].map((trust) => (
              <div key={trust} className="bg-slate-50 border border-slate-150 rounded-xl p-2.5 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{trust}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-6">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-4.5 h-4.5 text-orange-500" />
              Pricing Questions & Answers
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pricingFaqs.map((faq) => (
              <GlassCard key={faq.q} variant="light" className="p-4 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 mb-1">{faq.q}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="max-w-4xl mx-auto text-center border-t border-slate-200 pt-10">
          <h3 className="text-lg font-black text-slate-900 mb-1">
            Still not sure which plan fits your organization?
          </h3>
          <p className="text-xs text-slate-500 mb-4 max-w-xl mx-auto">
            Schedule a session with our solutions architects to map out custom deployment limits.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="sm" onClick={onBookDemo} rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
              Schedule Live Demo
            </Button>
            <Button variant="outline" size="sm" onClick={onBookDemo}>
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
