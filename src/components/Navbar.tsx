"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ArrowRight, ShieldCheck, Flame } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar - Collapses smoothly with AnimatePresence */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-white border-b border-slate-200 text-slate-800 text-[11px] sm:text-xs font-bold"
          >
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 truncate">
                <span className="bg-blue-50 border border-blue-200 text-blue-700 px-2 py-0.5 rounded text-[10px] uppercase font-black shrink-0 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-blue-600" /> US Healthcare Agency
                </span>
                <span className="text-slate-600 truncate">100% LegitScript & HIPAA Aligned Ad Campaigns</span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a href="tel:2164088962" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-blue-600" />
                  <span className="hidden sm:inline">Direct Intake Desk:</span>
                  <strong className="text-slate-900 font-extrabold">(216) 408-8962</strong>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Sticky Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b192c]/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800"
            : "bg-[#0b192c]/90 backdrop-blur-sm py-3.5 border-b border-slate-800/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-36 sm:w-44 h-10 flex items-center">
                <Image
                  src="/logos/clicklab-logo-white.svg"
                  alt="ClickLab Marketing"
                  width={180}
                  height={42}
                  priority
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Middle Badge - Trust indicator */}
            <div className="hidden lg:flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>US Rehab Admissions Marketing</span>
            </div>

            {/* Mobile Call Button */}
            <div className="flex md:hidden items-center">
              <a
                href="tel:2164088962"
                className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black text-xs px-3.5 py-2 rounded-full shadow-md shadow-blue-600/30 active:scale-95 transition-all border border-blue-400/30 shrink-0"
              >
                <div className="bg-white/20 p-1 rounded-full shrink-0">
                  <Phone className="w-3.5 h-3.5 fill-current text-white" />
                </div>
                <span className="font-black tracking-tight text-white">(216) 408-8962</span>
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:2164088962"
                className="flex items-center gap-2 text-slate-200 hover:text-cyan-400 font-black text-sm transition-colors group px-3 py-1.5 rounded-xl hover:bg-white/5"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="tracking-tight">(216) 408-8962</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-400 text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all border border-blue-400/30"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
