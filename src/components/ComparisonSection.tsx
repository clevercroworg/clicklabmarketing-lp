"use client";

import { Check, X, ShieldAlert, Zap } from "lucide-react";

export function ComparisonSection() {
  const comparisons = [
    {
      feature: "Ad Targeting & Keywords",
      traditional: "Generic healthcare terms, broad match keywords causing 60%+ wasted ad spend",
      clicklab: "Strict negative-keyword filtering + high-intent US rehab search queries",
    },
    {
      feature: "Lead Exclusivity",
      traditional: "Shared or recycled leads resold to multiple treatment facilities",
      clicklab: "100% Exclusive direct inbound phone calls routed live to your desk",
    },
    {
      feature: "Caller Qualification",
      traditional: "Unscreened callers with low insurance rates & high drop-offs",
      clicklab: "Pre-screened commercial insurance (PPO/HMO) & private-pay qualification",
    },
    {
      feature: "Compliance & Safety",
      traditional: "Risk of Google ad account suspension due to compliance oversights",
      clicklab: "100% LegitScript & HIPAA compliant campaign architecture",
    },
    {
      feature: "Conversion Landing Pages",
      traditional: "Slow, generic website homepages with poor mobile call placement",
      clicklab: "High-speed, conversion-optimized intake landing pages with instant tap-to-call",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-black text-blue-800 uppercase tracking-widest mb-3">
            Why Rehabs Choose Us
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Why Treatment Centers Choose ClickLab
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-normal">
            See how ClickLab specialized healthcare marketing compares to generic agencies.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-wider items-center border-b border-slate-800">
            <div className="col-span-4 sm:col-span-4 text-slate-300">Feature / Metric</div>
            <div className="col-span-4 sm:col-span-4 text-rose-400 flex items-center gap-1.5 justify-center sm:justify-start">
              <ShieldAlert className="w-4 h-4 hidden sm:block" />
              <span>Generic Agencies</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-cyan-400 flex items-center gap-1.5 justify-center sm:justify-start">
              <Zap className="w-4 h-4 hidden sm:block" />
              <span>ClickLab Engine</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisons.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                }`}
              >
                <div className="col-span-12 sm:col-span-4 font-black text-slate-900 mb-2 sm:mb-0">
                  {row.feature}
                </div>

                <div className="col-span-6 sm:col-span-4 text-slate-500 font-medium pr-2 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{row.traditional}</span>
                </div>

                <div className="col-span-6 sm:col-span-4 text-slate-900 font-extrabold pl-2 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-blue-900">{row.clicklab}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
