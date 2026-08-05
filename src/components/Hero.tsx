"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Heart, TrendingUp, Users, PhoneCall, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
      {/* Background Decor Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1d4ed8 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Callouts */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200/80 rounded-full px-3.5 py-1.5 mb-5 text-[11px] sm:text-sm font-bold text-blue-800 tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
              <span>Digital Marketing Exclusively for US Addiction Rehabs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.1] mb-5">
              More Calls. <br />
              More Admissions. <br />
              <span className="text-gradient-blue bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                More Lives Changed.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal">
              We engineer LegitScript-compliant Google Ads, SEO & high-converting intake campaigns designed exclusively for US addiction rehab centers to fill beds, increase qualified calls, and maximize ROI.
            </p>

            {/* Feature Highlight Box (Replicating Image 1 left box) */}
            <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm border border-blue-100/90 rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 shadow-lg shadow-blue-900/5 flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
              </div>
              <div className="border-l border-slate-200 pl-4 sm:pl-5">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-xl tracking-tight leading-snug">
                  Your Mission.
                </h4>
                <p className="text-slate-600 font-medium text-xs sm:text-sm">
                  Our Expertise. <span className="text-blue-600 font-bold">Real Results.</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="tel:2164088962"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:from-blue-800 hover:to-blue-700 text-white font-black text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-blue-600/25 active:scale-98 transition-all text-center group"
              >
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <span>Call (216) 408-8962</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-black text-sm sm:text-base px-6 py-3.5 sm:py-4 rounded-2xl border-2 border-slate-200 hover:border-blue-300 shadow-xs transition-all text-center"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Book Free Strategy Call</span>
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>US LegitScript & HIPAA Aligned</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Verified US Bed Occupancy Growth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>24/7 Strategy Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Live Admissions Dashboard Visual */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Subtle Professional Ambient Shadow Accent (No loud neon overflow) */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-[32px] blur-2xl pointer-events-none" />

            <div className="relative bg-white border border-slate-200/90 rounded-[28px] p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.1),0_10px_25px_-10px_rgba(29,78,216,0.08)] overflow-hidden">
              {/* Card Top Gradient Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-600" />

              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5 pt-1">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-slate-900 text-base tracking-tight">Live Growth Dashboard</h3>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 px-2 py-0.5 rounded-md">
                        US REHAB
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Real-time Intake & Admission Analytics</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +21% Growth
                </span>
              </div>

              {/* Metric Card 1: New Enquiries */}
              <div className="bg-slate-50/90 hover:bg-blue-50/40 border border-slate-200/70 hover:border-blue-300 rounded-2xl p-4 mb-4 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <PhoneCall className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">New Enquiries</span>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">128</h4>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-400">This Week</span>
                  <div className="text-xs font-black text-emerald-600 flex items-center justify-end gap-1 mt-0.5">
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md font-extrabold">▲ 18%</span>
                  </div>
                </div>
              </div>

              {/* Metric Card 2: Admissions */}
              <div className="bg-slate-50/90 hover:bg-blue-50/40 border border-slate-200/70 hover:border-blue-300 rounded-2xl p-4 mb-5 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100/80 text-cyan-700 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Users className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">Confirmed Admissions</span>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">43</h4>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-400">This Week</span>
                  <div className="text-xs font-black text-emerald-600 flex items-center justify-end gap-1 mt-0.5">
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md font-extrabold">▲ 21%</span>
                  </div>
                </div>
              </div>

              {/* Impact Chart Card (Clean, vector bounds, zero overflow) */}
              <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-extrabold tracking-wider text-slate-200 uppercase">Impact Trend</span>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
                    Last 30 Days
                  </span>
                </div>

                {/* SVG Line Graph with exact padded coordinates */}
                <div className="h-24 w-full relative overflow-hidden rounded-xl bg-slate-900/60 p-2 border border-slate-800/50">
                  <svg className="w-full h-full" viewBox="0 0 320 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="dashboardChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Subtle Horizontal Grid Lines */}
                    <line x1="0" y1="20" x2="320" y2="20" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                    <line x1="0" y1="50" x2="320" y2="50" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

                    {/* Gradient Area Fill */}
                    <path
                      d="M 10 65 Q 80 58 150 42 T 260 25 T 310 18 L 310 75 L 10 75 Z"
                      fill="url(#dashboardChartGrad)"
                    />

                    {/* Main Line Stroke */}
                    <path
                      d="M 10 65 Q 80 58 150 42 T 260 25 T 310 18"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Peak Marker Dot (Safely padded at X=310, Y=18) */}
                    <circle cx="310" cy="18" r="6" fill="#38bdf8" opacity="0.3" className="animate-ping" />
                    <circle cx="310" cy="18" r="4" fill="#38bdf8" />
                    <circle cx="310" cy="18" r="2" fill="#ffffff" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
