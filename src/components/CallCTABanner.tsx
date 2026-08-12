"use client";

import { Phone, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

interface CallCTABannerProps {
  headline?: string;
  subtext?: string;
  onOpenBooking: () => void;
}

export function CallCTABanner({
  headline = "Let's Grow Your Center's Admissions",
  subtext = "Increase inquiries. Improve admissions. Change more lives.",
  onOpenBooking,
}: CallCTABannerProps) {
  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl border border-blue-800/40">
          {/* Subtle Background Accent Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Box: Call CTA */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-4 sm:gap-5">
              <a
                href="tel:2164088962"
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-600/40 shrink-0 transition-transform active:scale-95 group mx-auto sm:mx-0"
              >
                <Phone className="w-7 h-7 sm:w-10 sm:h-10 fill-current group-hover:rotate-12 transition-transform" />
              </a>

              <div>
                <span className="text-[11px] sm:text-sm font-black uppercase tracking-widest text-cyan-400 block mb-0.5">
                  Direct Intake Line
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  {headline}
                </h3>
                <a
                  href="tel:2164088962"
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-400 hover:text-cyan-300 transition-colors tracking-tight block mt-0.5"
                >
                  (216) 408-8962
                </a>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  {subtext}
                </p>
              </div>
            </div>

            {/* Middle Divider (Desktop) */}
            <div className="hidden lg:block lg:col-span-1 border-l border-slate-700/80 h-24 mx-auto" />

            {/* Right Box: Free Strategy Call Button */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full">
                <button
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs sm:text-base uppercase tracking-wider px-5 py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-cyan-500/20 active:scale-98 transition-all group"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
                <p className="text-[11px] sm:text-xs text-slate-400 text-center lg:text-right mt-2 font-medium">
                  Free 20-min consultation • No obligation
                </p>
              </div>
            </div>
          </div>

          {/* Sub-footer contact details strip */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400 font-semibold text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Guaranteed Response Within 2 Hours</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 justify-center">
              <a
                href="https://clicklabmarketing.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                clicklabmarketing.com
              </a>
              <span>|</span>
              <a
                href="mailto:contact@clicklabmarketing.com"
                className="hover:text-cyan-400 transition-colors truncate"
              >
                contact@clicklabmarketing.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
