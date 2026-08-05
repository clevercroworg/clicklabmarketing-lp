"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GrowthPillars } from "@/components/GrowthPillars";
import { PositionMatters } from "@/components/PositionMatters";
import { CallAdmissions } from "@/components/CallAdmissions";
import { CallCTABanner } from "@/components/CallCTABanner";
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

      {/* Hero Section with Live Enquiries & Admissions Dashboard */}
      <Hero onOpenBooking={openBookingModal} />

      {/* Inter-Section Call-to-Action Banner #1 */}
      <CallCTABanner
        headline="Let's Grow Your Center's Admissions"
        subtext="Increase inquiries. Improve admissions. Change more lives."
        onOpenBooking={openBookingModal}
      />

      {/* 3 Healthcare Marketing Growth Pillars */}
      <GrowthPillars onOpenBooking={openBookingModal} />

      {/* Position Matters & Google Search Rank #1 Placement */}
      <PositionMatters onOpenBooking={openBookingModal} />

      {/* Inter-Section Call-to-Action Banner #2 */}
      <CallCTABanner
        headline="Be Their First Choice, Every Time."
        subtext="Outrank competitors and attract qualified inquiries that turn into admissions."
        onOpenBooking={openBookingModal}
      />

      {/* Turn Calls into New Admissions Grid Section */}
      <CallAdmissions onOpenBooking={openBookingModal} />

      {/* Main Footer */}
      <Footer />

      {/* Mobile Persistent Call & Booking Bar */}
      <MobileStickyBar onOpenBooking={openBookingModal} />

      {/* Lead Form Booking Modal */}
      <LeadFormModal isOpen={isBookingOpen} onClose={closeBookingModal} />
    </main>
  );
}
