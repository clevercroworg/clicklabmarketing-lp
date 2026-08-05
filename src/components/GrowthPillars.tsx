"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, TrendingUp, Target, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface GrowthPillarsProps {
  onOpenBooking: () => void;
}

export function GrowthPillars({ onOpenBooking }: GrowthPillarsProps) {
  const pillars = [
    {
      icon: Users,
      title: "More Leads",
      subtitle: "Reach the Right Patients",
      description:
        "Laser-targeted advertising campaigns on Google & Bing designed specifically to reach families & individuals in active search of care.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Higher Admissions",
      subtitle: "Convert Inquiries into Intake",
      description:
        "Transform raw calls and website visits into scheduled admissions with high-converting intake landing pages.",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconColor: "text-cyan-600",
    },
    {
      icon: Target,
      title: "Sustainable Growth",
      subtitle: "Predictable Month-over-Month ROI",
      description:
        "Data-driven marketing architecture that delivers consistent patient admissions and lower acquisition costs.",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section id="growth" className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Section (Matching Image 2 Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column: Headlines & 3 Value Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-4">
              Custom Strategies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Healthcare Marketing <br />
              <span className="text-gradient-blue bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                That Drives Real Growth.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Custom strategies to generate more leads, increase admissions and grow sustainably for US treatment centers.
            </p>

            {/* 3 Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-5 hover:border-blue-300 hover:shadow-lg transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-0.5">{pillar.title}</h3>
                    <span className="text-xs font-bold text-blue-600 block mb-2">{pillar.subtitle}</span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Prominent High-Res Doctor Photo Feature (Matching Image 2 Poster) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src="/images/doctor_specialist.png"
                alt="Healthcare Marketing Specialist & Medical Director"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-xl flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">LegitScript & HIPAA Aligned</h4>
                  <p className="text-xs text-slate-600 font-medium">Protecting your center&apos;s brand authority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-900/50 text-center sm:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Built Exclusively for US Treatment Facilities</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Ethical healthcare marketing strategies that fill beds and deliver transparent month-over-month ROI.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shrink-0 transition-all shadow-md text-center active:scale-98"
          >
            Get Free Marketing Audit
          </button>
        </div>
      </div>
    </section>
  );
}
