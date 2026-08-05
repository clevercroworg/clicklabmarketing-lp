"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Heart, TrendingUp, Users, PhoneCall, CheckCircle2, ShieldCheck, Search, Activity, Zap } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const keywords = [
    { text: "drug rehab near me", position: "#1 Rank", ctr: "11.4% CTR" },
    { text: "inpatient detox facility", position: "#1 Rank", ctr: "9.8% CTR" },
    { text: "addiction treatment center", position: "#1 Rank", ctr: "12.1% CTR" },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#0b192c] via-[#0f172a] to-[#1e3a8a] text-white">
      {/* Background Decor Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
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
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-5 text-[11px] sm:text-sm font-bold text-cyan-300 tracking-wide shadow-xs">
              <span>Digital Marketing Exclusively for US Addiction Rehabs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] sm:leading-[1.1] mb-4">
              More Calls. <br />
              More Admissions. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-white">
                More Lives Changed.
              </span>
            </h1>

            {/* Subtitle / Supporting Text */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
              We engineer LegitScript-compliant Google Ads, SEO & high-converting intake campaigns designed exclusively for US addiction rehab centers to fill beds, increase qualified calls, and maximize ROI.
            </p>

            {/* Feature Highlight Box */}
            <div className="w-full max-w-lg bg-slate-900/90 backdrop-blur-md border border-blue-500/30 rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 shadow-2xl flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
              </div>
              <div className="border-l border-slate-800 pl-4 sm:pl-5">
                <h4 className="text-white font-extrabold text-base sm:text-xl tracking-tight leading-snug">
                  Your Mission.
                </h4>
                <p className="text-slate-300 font-medium text-xs sm:text-sm">
                  Our Expertise. <span className="text-cyan-400 font-bold">Real Results.</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="tel:2164088962"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-400 text-white font-black text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl shadow-xl shadow-blue-600/40 active:scale-98 transition-all text-center group border border-blue-400/30"
              >
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <span>Call (216) 408-8962</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-black text-sm sm:text-base px-6 py-3.5 sm:py-4 rounded-2xl border border-white/20 shadow-xs transition-all text-center"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Book Free Strategy Call</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Professional US Rehab Campaign Console (Realistic Enterprise Interface) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent rounded-[32px] blur-2xl pointer-events-none" />

            <div className="relative bg-slate-900/95 border border-slate-800 rounded-2xl sm:rounded-[28px] p-5 sm:p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                    <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-xs sm:text-sm tracking-tight flex items-center gap-2">
                      US Rehab Growth Console
                      <span className="text-[9px] font-black uppercase tracking-wider bg-blue-500/20 text-cyan-300 border border-blue-400/30 px-2 py-0.5 rounded-md">
                        LIVE ENGINE
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium">Google Ads & Call Desk Integration</p>
                  </div>
                </div>

                <span className="text-[11px] font-black bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 px-2.5 py-1 rounded-lg">
                  LegitScript Verified
                </span>
              </div>

              {/* 2x2 Metric Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 mb-1 text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                    <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Inbound Calls</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">142 <span className="text-xs font-extrabold text-emerald-400">▲ 34%</span></div>
                  <span className="text-[10px] text-slate-400">Exclusive patient calls</span>
                </div>

                <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 mb-1 text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Insurance Qual</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">64.8%</div>
                  <span className="text-[10px] text-slate-400">Commercial PPO / HMO</span>
                </div>

                <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 mb-1 text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                    <Search className="w-3.5 h-3.5 text-blue-400" />
                    <span>Ad Rank</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-cyan-300">#1 Spot</div>
                  <span className="text-[10px] text-slate-400">94.2% Impression Share</span>
                </div>

                <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 mb-1 text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cost Per Intake</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">$1,240</div>
                  <span className="text-[10px] text-emerald-400">-48% vs Industry Avg</span>
                </div>
              </div>

              {/* Live Keyword Search Stream */}
              <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    Live Ad Keyword Rankings
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">100% Active</span>
                </div>

                <div className="space-y-2">
                  {keywords.map((kw) => (
                    <div
                      key={kw.text}
                      className="bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center justify-between text-xs"
                    >
                      <span className="text-slate-200 font-medium text-[11px] truncate mr-2">&ldquo;{kw.text}&rdquo;</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-black bg-blue-500/20 text-cyan-300 px-2 py-0.5 rounded border border-blue-400/30">
                          {kw.position}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">{kw.ctr}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Activity Routing Badge */}
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 flex items-center justify-between text-xs text-emerald-300 font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px]">Latest Inbound Call Routed to Intake Desk</span>
                </div>
                <span className="text-[10px] font-black text-cyan-300 bg-emerald-900/60 px-2 py-0.5 rounded">
                  2m ago
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
