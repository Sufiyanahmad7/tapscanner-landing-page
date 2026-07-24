'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

const navLinks = [
  { label: 'Why TapScanner', href: '#why-tapscanner' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-7 left-1/2 -translate-x-1/2 z-[100] w-fit"
        aria-label="Main Navigation"
      >
        <div
          className="flex items-center gap-3 px-4 py-2 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
            height: '55px',
          }}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-1.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform duration-200">
              <Building2 className="w-4.5 h-4.5" />
            </div>
            <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
              TapScanner</span>

          </a>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-slate-200 shrink-0" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Site navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3.5 py-2 rounded-full transition-all duration-200 hover:bg-black/5 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-slate-200 shrink-0" />

          {/* Desktop CTA */}
          {/* <button
            onClick={onOpenDemoModal}
            className="hidden lg:flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 cursor-pointer shrink-0 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #f59e0b 100%)',
              boxShadow: '0 8px 24px rgba(249,115,22,0.35)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 32px rgba(249,115,22,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(249,115,22,0.35)';
            }}
          >
            Book Demo
          </button> */}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header >

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {
          mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-[108px] left-1/2 -translate-x-1/2 z-[99] w-72 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDemoModal();
                    }}
                    className="w-full px-4 py-3 rounded-xl font-semibold text-sm text-white cursor-pointer transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #f59e0b 100%)',
                    }}
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  );
};
