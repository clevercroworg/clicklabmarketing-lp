"use client";

import { TrendingUp, ArrowUpRight, Building2, MapPin } from "lucide-react";

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
      quote: "The Google Ads positioning ClickLab achieved put our facility at #1 in Texas. Our intake phone line rang constantly with qualified families.",
      stats: [
        { label: "Inbound Calls", value: "+210%" },
        { label: "LegitScript Status", value: "Verified" },
        { label: "ROAS", value: "5.4x" },
      ],
    },
  ];

  return (
    <section id="results" className="py-12 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-black text-cyan-300 uppercase tracking-widest mb-3 sm:mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3 sm:mb-4">
            Real Results for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-white">
              US Treatment Centers
            </span>
          </h2>
          <p className="text-xs sm:text-base text-slate-300 font-normal max-w-xl mx-auto">
            See how our specialized healthcare digital marketing engine fills beds for rehab centers across the United States.
          </p>
        </div>

        {/* Case Study Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {cases.map((item) => (
            <div
              key={item.center}
              className="bg-slate-800/90 border border-slate-700/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl flex flex-col justify-between hover:border-blue-500/50 transition-all overflow-hidden"
            >
              <div>
                {/* Header: Stacked on Mobile, Row on Desktop to prevent any overflow */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-4 mb-5">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <h3 className="text-lg sm:text-xl font-black text-white truncate">{item.center}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-medium">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                      <span>{item.location}</span>
                      <span>•</span>
                      <span>{item.capacity}</span>
                    </div>
                  </div>

                  <div className="self-start sm:self-auto shrink-0">
                    <span className="text-[11px] sm:text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-xl inline-flex items-center gap-1 max-w-full">
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{item.result}</span>
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-5">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* 3 Mini Stat Pills */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-slate-900/90 rounded-2xl p-3 border border-slate-700/50 text-center mb-6">
                  {item.stats.map((st) => (
                    <div key={st.label} className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">
                        {st.label}
                      </span>
                      <span className="text-base sm:text-lg font-black text-cyan-300 truncate block">{st.value}</span>
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
