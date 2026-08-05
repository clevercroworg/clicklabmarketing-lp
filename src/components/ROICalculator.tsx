"use client";

import { useState } from "react";
import { Calculator, TrendingUp, Users, DollarSign, ArrowRight, ShieldCheck } from "lucide-react";

interface ROICalculatorProps {
  onOpenBooking: () => void;
}

export function ROICalculator({ onOpenBooking }: ROICalculatorProps) {
  const [bedCount, setBedCount] = useState<number>(25);

  // Projected metrics calculation based on bed count
  const estimatedCalls = Math.round(bedCount * 6.5);
  const estimatedAdmissions = Math.round(bedCount * 1.8);
  const estimatedRevenue = (estimatedAdmissions * 12500).toLocaleString("en-US");

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-black text-cyan-300 uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" /> Interactive Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
            Calculate Your Center&apos;s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200">
              Admissions Growth Potential
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal max-w-xl mx-auto">
            Select your rehab facility capacity to see projected monthly patient inquiries and revenue addition with ClickLab.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Slider & Bed Count Selector */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm sm:text-base font-extrabold text-slate-200">
                Facility Capacity (Licensed Beds):
              </label>
              <span className="text-2xl sm:text-3xl font-black text-cyan-400 bg-blue-950/80 px-4 py-1 rounded-xl border border-cyan-500/30">
                {bedCount} Beds
              </span>
            </div>

            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={bedCount}
              onChange={(e) => setBedCount(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-xs text-slate-400 font-bold mt-2">
              <span>10 Beds (Boutique)</span>
              <span>50 Beds (Regional)</span>
              <span>100+ Beds (Enterprise)</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Est. Monthly Calls
              </span>
              <h4 className="text-3xl sm:text-4xl font-black text-white">{estimatedCalls}+</h4>
              <span className="text-[11px] text-cyan-300 font-semibold block mt-1">Pre-vetted inquiries</span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Est. Monthly Admissions
              </span>
              <h4 className="text-3xl sm:text-4xl font-black text-emerald-400">{estimatedAdmissions}</h4>
              <span className="text-[11px] text-emerald-300 font-semibold block mt-1">Confirmed intakes</span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Est. Revenue Addition
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-cyan-300">${estimatedRevenue}</h4>
              <span className="text-[11px] text-slate-400 font-semibold block mt-1">Monthly value created</span>
            </div>
          </div>

          {/* CTA Box */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                Guaranteed exclusive leads in your geographic market radius.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider px-7 py-4 rounded-2xl shadow-xl hover:shadow-cyan-400/40 transition-all text-center active:scale-98 shrink-0"
            >
              <span>Claim Your Market Territory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
