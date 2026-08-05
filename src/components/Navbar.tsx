"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Always visible on left */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-36 sm:w-44 h-10 flex items-center">
              <Image
                src="/logos/clicklab-logo.svg"
                alt="ClickLab Marketing"
                width={180}
                height={42}
                priority
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#growth"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              Growth Strategy
            </a>
            <a
              href="#positioning"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              Positioning
            </a>
            <a
              href="#admissions"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              Call Conversions
            </a>
            <a
              href="#results"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              Real Results
            </a>
          </nav>

          {/* RIGHT ACTION BUTTONS */}

          {/* Mobile Right Action: Prominent Call Button ONLY */}
          <div className="flex md:hidden items-center">
            <a
              href="tel:2164088962"
              className="flex items-center gap-1.5 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-black text-xs sm:text-sm px-3.5 py-2 rounded-full shadow-md shadow-blue-600/30 active:scale-95 transition-all border border-blue-500/30 shrink-0"
            >
              <div className="bg-white/20 p-1 rounded-full shrink-0">
                <Phone className="w-3.5 h-3.5 fill-current text-white" />
              </div>
              <span className="font-black tracking-tight text-white">(216) 408-8962</span>
            </a>
          </div>

          {/* Desktop Right Action: Phone + Book Strategy Call CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:2164088962"
              className="flex items-center gap-2 text-slate-800 hover:text-blue-600 font-bold text-sm transition-colors group px-3 py-1.5 rounded-lg hover:bg-blue-50/50"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <span className="tracking-tight">(216) 408-8962</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
