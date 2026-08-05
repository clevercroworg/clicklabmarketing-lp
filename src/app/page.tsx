"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsBar } from "@/components/MetricsBar";
import { ToolsCarousel } from "@/components/ToolsCarousel";
import { GrowthPillars } from "@/components/GrowthPillars";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { CallAdmissions } from "@/components/CallAdmissions";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { LeadFormModal } from "@/components/LeadFormModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  return (
    <main className="min-h-screen bg-slate-50 relative selection:bg-blue-600 selection:text-white">
      {/* Navigation Header (Logo + Direct Call CTA only) */}
      <Navbar onOpenBooking={openBookingModal} />

      {/* Hero Section with Premium Dark Navy Theme */}
      <Hero onOpenBooking={openBookingModal} />

      {/* Verified Agency Metrics & Track Record Counter Bar */}
      <MetricsBar />

      {/* Infrastructure: The Tech We Master Marquee Section */}
      <ToolsCarousel />

      {/* 3 Healthcare Marketing Growth Pillars + Executive Agency Team Photo Feature */}
      <GrowthPillars onOpenBooking={openBookingModal} />

      {/* 5-Star Client Executive Reviews & Testimonials */}
      <ReviewsSection />

      {/* Before vs After Comparison Table */}
      <ComparisonSection />

      {/* Turn Calls into New Admissions Grid + Intake Desk Reception Photo Feature */}
      <CallAdmissions onOpenBooking={openBookingModal} />

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Main Footer with White Logo */}
      <Footer />

      {/* Mobile Persistent Call Bar */}
      <MobileStickyBar onOpenBooking={openBookingModal} />

      {/* Lead Form Booking Modal */}
      <LeadFormModal isOpen={isBookingOpen} onClose={closeBookingModal} />
    </main>
  );
}
