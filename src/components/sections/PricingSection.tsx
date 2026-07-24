'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const PricingSection: React.FC<{ onBookDemo: () => void }> = ({ onBookDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      bestFor: 'Best for Small Offices & Startups',
      priceINR: isAnnual ? '4,249' : '4,999',
      priceUSD: isAnnual ? '50' : '59',
      features: [
        'Visitor Management',
        'Visitor Approval Workflow',
        'QR Check-In & Check-Out',
        'Digital Visitor Passes',
        'Reports & Dashboard',
      ],
      ctaText: 'Book Demo',
      isBusiness: false,
    },
    {
      id: 'business',
      name: 'Business',
      bestFor: 'Best for Growing Businesses',
      priceINR: isAnnual ? '11,049' : '12,999',
      priceUSD: isAnnual ? '126' : '149',
      features: [
        'Everything in Starter',
        'Touchless Pre-Registration',
        'Smart Visitor Registration',
        'Watchlist & ID Verification',
        'Digital NDA & Policy Signing',
        'Advanced Visitor Analytics',
        'Priority Support',
      ],
      ctaText: 'Book Demo',
      isBusiness: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      bestFor: 'Best for Large Enterprises',
      priceINR: null,
      priceUSD: null,
      features: [
        'Everything in Business',
        'Unlimited Visitor Records',
        'Multi-Location Management',
        'Custom Approval Workflows',
        'Enterprise Security & Compliance',
        'Dedicated Customer Success',
      ],
      ctaText: 'Talk to Sales',
      isBusiness: false,
    },
  ];

  return (
    <section className="py-8 bg-slate-50/60 relative overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 sm:whitespace-nowrap">
            Choose the Perfect Plan for Every Organization
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re managing a single office or a global enterprise, TapScanner offers scalable visitor management plans that grow with your business.
          </p>
        </div>

        {/* Toggles Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 md:mb-16">
          
          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1.5 bg-slate-200/70 backdrop-blur-sm rounded-full border border-slate-300/50">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                !isAnnual
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isAnnual
                  ? 'bg-[#FF6B00] text-white shadow-md shadow-orange-500/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                isAnnual ? 'bg-white/20 text-white' : 'bg-slate-300/80 text-slate-700'
              }`}>
                Save 15%
              </span>
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1.5 bg-slate-200/70 backdrop-blur-sm rounded-full border border-slate-300/50">
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                currency === 'INR'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              INR (₹)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                currency === 'USD'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const hasPrice = plan.priceINR !== null;
            const displayPrice = currency === 'INR' ? plan.priceINR : plan.priceUSD;
            const currencySymbol = currency === 'INR' ? '₹' : '$';

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`bg-white rounded-[24px] p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.isBusiness
                    ? 'border-2 border-orange-500/40 shadow-xl shadow-orange-500/5 ring-1 ring-orange-500/20'
                    : 'border border-slate-200/80 shadow-lg shadow-slate-200/40 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="mb-6 border-b border-slate-100 pb-6">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mb-5">
                      {plan.bestFor}
                    </p>

                    {hasPrice ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                          {currencySymbol}{displayPrice}
                        </span>
                        <span className="text-sm font-medium text-slate-500">
                          /month
                        </span>
                      </div>
                    ) : (
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Contact Sales
                      </div>
                    )}
                    
                    <span className="text-xs font-medium text-slate-400 block mt-1.5">
                      per organization
                    </span>
                  </div>

                  {/* Features Header & List */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Features
                    </p>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200/70 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 mt-auto">
                  <button
                    type="button"
                    onClick={onBookDemo}
                    className={`w-full py-3.5 px-6 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer flex items-center justify-center shadow-sm hover:shadow ${
                      plan.isBusiness
                        ? 'bg-[#FF6B00] hover:bg-[#e56000] text-white shadow-orange-500/25'
                        : 'bg-[#FF6B00] hover:bg-[#e56000] text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

