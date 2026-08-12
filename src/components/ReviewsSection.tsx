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
    <section id="success" className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple & Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-black text-blue-700 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Client Success
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Client Success Stories
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto">
            See how leading treatment centers scale bed occupancy and increase patient admissions with the professionals at ClickLab Marketing.
          </p>
        </div>

        {/* 3 White Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-5 right-5 w-10 h-10 text-slate-200 pointer-events-none group-hover:text-blue-100 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-blue-50 border border-blue-200 text-blue-700 font-extrabold text-xs px-3 py-1 rounded-lg mb-4">
                  {rev.highlight}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-700 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                  {rev.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-black text-slate-900 truncate">{rev.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium truncate">{rev.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
