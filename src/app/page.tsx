'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustedCompanies } from '@/components/sections/TrustedCompanies';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { PlatformModules } from '@/components/sections/PlatformModules';
import { WorkflowTimeline } from '@/components/sections/WorkflowTimeline';
import { DashboardShowcase } from '@/components/sections/DashboardShowcase';
import { IndustrySolutions } from '@/components/sections/IndustrySolutions';
import { Testimonials } from '@/components/sections/Testimonials';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { InquiryForm } from '@/components/sections/InquiryForm';
import { Footer } from '@/components/sections/Footer';
import { InquiryFormModal } from '@/components/sections/InquiryFormModal';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenDemoModal={handleOpenDemo} />

      {/* 3. Hero Section with Live Interactive Kiosk/Dashboard Simulator */}
      <HeroSection onOpenDemoModal={handleOpenDemo} />

      {/* 4. Trusted Companies Logo Marquee & Compliance Standards */}
      <TrustedCompanies />

      {/* 5. 4-Step Touchless Check-in Workflow Timeline */}
      <WorkflowTimeline />

      {/* 6. Problem Statement vs TapScanner Solution */}
      <ProblemSolution />

      {/* 7. 6 Platform Modules Vertical Tab Switcher */}
      <PlatformModules onBookDemo={handleOpenDemo} />

      {/* 10. Interactive Role-Based Dashboard Showcase */}
      <DashboardShowcase onBookDemo={handleOpenDemo} />

      {/* 11. Industry-Specific Solutions */}
      <IndustrySolutions onBookDemo={handleOpenDemo} />

      {/* 13. Customer Testimonials & Verified Social Proof */}
      <Testimonials />

      {/* 16. Transparent Tiered Enterprise Pricing Matrix */}
      <PricingSection onBookDemo={handleOpenDemo} />

      {/* 17. Searchable Interactive FAQ Accordion */}
      <FAQSection />

      {/* 18. Complete 11-Field Enterprise Demo Inquiry Form */}
      <InquiryForm />

      {/* 20. Global Enterprise Footer */}
      <Footer onBookDemo={handleOpenDemo} />

      {/* Interactive Quick Modal Container */}
      <InquiryFormModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
