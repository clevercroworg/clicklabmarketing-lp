"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneCall, UserCheck, TrendingUp, DollarSign, CheckCircle2, Phone, Calendar } from "lucide-react";

interface CallAdmissionsProps {
  onOpenBooking: () => void;
}

export function CallAdmissions({ onOpenBooking }: CallAdmissionsProps) {
  const cards = [
    {
      icon: PhoneCall,
      title: "More Calls",
      subtitle: "From the Right People",
      description: "Pre-screened inbound callers actively seeking immediate treatment and recovery services.",
    },
    {
      icon: UserCheck,
      title: "Higher Quality",
      subtitle: "Insured & Verified Inquiries",
      description: "Higher commercial insurance & private-pay qualification rates for seamless bed placements.",
    },
    {
      icon: TrendingUp,
      title: "Better Admissions",
      subtitle: "Higher Bed Occupancy",
      description: "Optimized intake phone scripts and fast call response times to maximize conversion.",
    },
    {
      icon: DollarSign,
      title: "Lower Costs",
      subtitle: "Maximum Campaign ROI",
      description: "Eliminate wasted ad spend with constant keyword negative lists & geo-targeting.",
    },
  ];

  return (
    <section id="admissions" className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title (Matching Image 4 styling) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-black tracking-widest text-blue-600 uppercase block mb-2">
            WE TURN CALLS INTO
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none mb-4">
            NEW ADMISSIONS.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto">
            Specialized call handling & digital marketing strategies for treatment centers that deliver real, measurable results.
          </p>
        </div>

        {/* 4 Cards Grid (Matching Image 4 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-slate-50/90 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 hover:bg-blue-50/40 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{card.title}</h3>
                  <span className="text-xs font-bold text-blue-600 block mb-3">{card.subtitle}</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-bold">
                  <span>0{idx + 1}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Section Card with Prominent Intake Coordinator Photography (Matching Image 4 Poster) */}
        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-blue-800/60 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* High-Res Intake Specialist Photo Feature */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="/images/rehab_admissions_desk.png"
                  alt="Professional US Treatment Center Admissions & Reception Desk Handling Calls"
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-xs text-slate-200 font-bold flex items-center justify-between">
                  <span>24/7 Intake Desk Optimization</span>
                  <span className="text-emerald-400">HIPAA Compliant</span>
                </div>
              </div>
            </div>

            {/* Direct Call & Intake Conversion Details */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start">
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-2">
                LET&apos;S GROW YOUR ADMISSIONS
              </span>

              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-3">
                Turn Every Inbound Call Into an Active Bed Admission.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
                Our high-intent search campaigns bring pre-screened patients directly to your intake desk line with verified commercial insurance.
              </p>

              <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="tel:2164088962"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-base px-6 py-4 rounded-2xl shadow-xl shadow-blue-600/40 transition-all text-center group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 fill-current" />
                  </div>
                  <span>Call (216) 408-8962</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-4 rounded-2xl border border-white/20 transition-all text-center"
                >
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Book Free Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
