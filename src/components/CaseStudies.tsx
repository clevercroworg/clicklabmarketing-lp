"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, ArrowUpRight, Building2, MapPin } from "lucide-react";

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export function CaseStudies({ onOpenBooking }: CaseStudiesProps) {
  const cases = [
    {
      center: "Apex Recovery Center",
      location: "California",
      capacity: "35 Beds • Inpatient & Detox",
      result: "+184% Monthly Admissions",
      metric: "From 14 to 40 Monthly Intakes in 90 Days",
      quote: "ClickLab transformed our lead flow. We went from struggling with shared leads to receiving 100% exclusive, pre-vetted commercial insurance calls.",
      stats: [
        { label: "Cost Per Intake", value: "-42%" },
        { label: "Insurance Qual. Rate", value: "68%" },
        { label: "Bed Occupancy", value: "96%" },
      ],
    },
    {
      center: "Harmony Wellness Institute",
      location: "Texas",
      capacity: "24 Beds • IOP & PHP Program",
      result: "Filled to 100% Capacity in 60 Days",
      metric: "Added $420,000+ Monthly Revenue",
      quote: "The Google Ads positioning ClickLab achieved put our facility at #1 in Texas. Our intake phone line rang constantly with qualified families.",
      stats: [
        { label: "Inbound Calls", value: "+210%" },
        { label: "LegitScript Status", value: "Verified" },
        { label: "ROAS", value: "5.4x" },
      ],
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-black text-cyan-300 uppercase tracking-widest mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
            Real Results for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-white">
              US Treatment Centers
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal max-w-xl mx-auto">
            See how our specialized healthcare digital marketing engine fills beds for rehab centers across the United States.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cases.map((item) => (
            <div
              key={item.center}
              className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-blue-500/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-xl font-black text-white">{item.center}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                      <span>•</span>
                      <span>{item.capacity}</span>
                    </div>
                  </div>

                  <span className="text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-xl flex items-center gap-1 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" /> {item.result}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* 3 Mini Stat Pills */}
                <div className="grid grid-cols-3 gap-3 bg-slate-900/90 rounded-2xl p-3 border border-slate-700/50 text-center mb-6">
                  {item.stats.map((st) => (
                    <div key={st.label}>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {st.label}
                      </span>
                      <span className="text-lg font-black text-cyan-300">{st.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md active:scale-98"
              >
                <span>Scale Your Center Like This</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
