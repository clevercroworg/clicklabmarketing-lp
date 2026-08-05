"use client";

import { Phone } from "lucide-react";

interface MobileStickyBarProps {
  onOpenBooking?: () => void;
}

export function MobileStickyBar({}: MobileStickyBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 p-2.5 sm:p-3 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)]">
      <a
        href="tel:2164088962"
        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 active:from-blue-800 active:to-blue-700 text-white font-black text-base sm:text-lg py-3.5 px-4 rounded-2xl shadow-lg shadow-blue-600/30 border border-blue-500/30 text-center animate-call-pulse transition-all"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4 fill-current text-white" />
        </div>
        <span className="tracking-tight text-white font-black">Call (216) 408-8962</span>
      </a>
    </div>
  );
}
