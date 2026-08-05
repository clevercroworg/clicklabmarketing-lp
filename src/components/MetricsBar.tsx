"use client";

import { TrendingUp, Users, ShieldCheck, Award } from "lucide-react";

export function MetricsBar() {
  const stats = [
    {
      icon: TrendingUp,
      value: "15,000+",
      label: "Qualified Patient Calls",
      subtext: "Pre-screened for commercial insurance",
    },
    {
      icon: Users,
      value: "$14.2M+",
      label: "Admissions Revenue Added",
      subtext: "Generated for US treatment centers",
    },
    {
      icon: ShieldCheck,
      value: "98.4%",
      label: "LegitScript & HIPAA Compliant",
      subtext: "100% ad account safety record",
    },
    {
      icon: Award,
      value: "4.9 / 5.0",
      label: "Rehab Client Satisfaction",
      subtext: "Based on bed occupancy ROI",
    },
  ];

  return (
    <section className="py-10 bg-slate-900 text-white border-y border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 bg-slate-800/40 rounded-2xl border border-slate-800"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-0.5">
                  {stat.value}
                </h3>
                <span className="text-xs sm:text-sm font-bold text-slate-200 block mb-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">{stat.subtext}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
