'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustedCompanies } from '@/components/sections/TrustedCompanies';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { WhyTapScanner } from '@/components/sections/WhyTapScanner';
import { PlatformModules } from '@/components/sections/PlatformModules';
import { WorkflowTimeline } from '@/components/sections/WorkflowTimeline';
import { DashboardShowcase } from '@/components/sections/DashboardShowcase';
import { IndustrySolutions } from '@/components/sections/IndustrySolutions';
import { SecurityCompliance } from '@/components/sections/SecurityCompliance';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { ROIStats } from '@/components/sections/ROIStats';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { InquiryForm } from '@/components/sections/InquiryForm';
import { BottomCTA } from '@/components/sections/BottomCTA';
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

      {/* 5. Problem Statement vs TapScanner Solution */}
      <ProblemSolution />

      {/* 6. Why TapScanner Value Pillars */}
      <WhyTapScanner />

      {/* 8. 6 Platform Modules Vertical Tab Switcher */}
      <PlatformModules onBookDemo={handleOpenDemo} />

      {/* 9. 4-Step Touchless Check-in Workflow Timeline */}
      <WorkflowTimeline />

      {/* 10. Interactive Role-Based Dashboard Showcase */}
      <DashboardShowcase onBookDemo={handleOpenDemo} />

      {/* 11. Industry-Specific Solutions */}
      <IndustrySolutions onBookDemo={handleOpenDemo} />

      {/* 12. Security, RBAC & Compliance Hub */}
      <SecurityCompliance />

      {/* 13. Integrations Ecosystem Grid */}
      <IntegrationsSection />

      {/* 14. Customer Testimonials & Verified Social Proof */}
      <Testimonials />

      {/* 15. Animated ROI Impact Stats */}
      <ROIStats />

      {/* 16. Transparent Tiered Enterprise Pricing Matrix */}
      <PricingSection onBookDemo={handleOpenDemo} />

      {/* 17. Searchable Interactive FAQ Accordion */}
      <FAQSection />

      {/* 18. Complete 11-Field Enterprise Demo Inquiry Form */}
      <InquiryForm />

      {/* 19. High-Intent Bottom CTA Banner */}
      <BottomCTA onBookDemo={handleOpenDemo} />

      {/* 20. Global Enterprise Footer */}
      <Footer onBookDemo={handleOpenDemo} />

      {/* Interactive Quick Modal Container */}
      <InquiryFormModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
