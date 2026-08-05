"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsBar } from "@/components/MetricsBar";
import { WorldwideClients } from "@/components/WorldwideClients";
import { GrowthPillars } from "@/components/GrowthPillars";
import { PositionMatters } from "@/components/PositionMatters";
import { ToolsCarousel } from "@/components/ToolsCarousel";
import { ComparisonSection } from "@/components/ComparisonSection";
import { CallAdmissions } from "@/components/CallAdmissions";
import { ReviewsSection } from "@/components/ReviewsSection";
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
      {/* Navigation Header */}
      <Navbar onOpenBooking={openBookingModal} />

      {/* Hero Section with Premium Dark Navy Theme */}
      <Hero onOpenBooking={openBookingModal} />

      {/* Verified Agency Metrics & Track Record Counter Bar */}
      <MetricsBar />

      {/* Worldwide Clients Marquee Carousel */}
      <WorldwideClients />

      {/* 3 Healthcare Marketing Growth Pillars + Executive Agency Team Photo Feature */}
      <GrowthPillars onOpenBooking={openBookingModal} />

      {/* Be Their First Choice, Every Time Section (Matching Image 3 Poster) */}
      <PositionMatters onOpenBooking={openBookingModal} />

      {/* Infrastructure: The Tech We Master Marquee Section */}
      <ToolsCarousel />

      {/* Before vs After Comparison Table */}
      <ComparisonSection />

      {/* Turn Calls into New Admissions Grid + Intake Desk Reception Photo Feature */}
      <CallAdmissions onOpenBooking={openBookingModal} />

      {/* Client Success Stories Reviews */}
      <ReviewsSection />

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
