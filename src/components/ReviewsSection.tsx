"use client";

import { Star, Quote, ShieldCheck } from "lucide-react";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Dr. Marcus Vance",
      title: "Executive Director, Pacific Recovery Center",
      location: "California",
      rating: 5,
      text: "ClickLab completely transformed our patient acquisition. Within 60 days of launching our Google Ads search campaigns, our inbound calls increased by 180% with a 65% commercial insurance qualification rate. Truly best-in-class healthcare marketing.",
      highlight: "180% Increase in Inbound Calls",
    },
    {
      name: "Sarah Jenkins",
      title: "Head of Admissions, Harmony Wellness Group",
      location: "Texas",
      rating: 5,
      text: "Before ClickLab, we struggled with shared lead providers who resold the same caller to 5 different centers. ClickLab delivers 100% exclusive inbound phone calls directly to our intake desk. Our bed occupancy hit 96% in record time.",
      highlight: "96% Bed Occupancy Achieved",
    },
    {
      name: "David Sterling",
      title: "VP of Growth, Horizon Health Network",
      location: "Florida",
      rating: 5,
      text: "Their understanding of LegitScript compliance and Google Ads policy for US rehab facilities is unmatched. We never have to worry about ad account suspensions or wasted budget. Highly recommend ClickLab for any serious treatment facility.",
      highlight: "100% LegitScript Compliant",
    },
  ];

  return (
    <section id="reviews" className="py-12 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-black text-cyan-300 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Client Testimonials
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3">
            Trusted by Leading <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-white">
              US Treatment Directors
            </span>
          </h2>
          <p className="text-xs sm:text-base text-slate-300 font-normal max-w-xl mx-auto">
            See what healthcare executives and intake directors say about scaling bed occupancy with ClickLab Marketing.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between hover:border-blue-500/50 transition-all overflow-hidden relative group"
            >
              <Quote className="absolute top-5 right-5 w-10 h-10 text-slate-700/40 pointer-events-none group-hover:text-blue-500/20 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-bold text-xs px-3 py-1 rounded-lg mb-4">
                  {rev.highlight}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                  {rev.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-black text-white truncate">{rev.name}</h4>
                  <p className="text-[11px] text-slate-400 font-medium truncate">{rev.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
