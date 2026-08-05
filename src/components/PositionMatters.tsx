"use client";

import { motion } from "framer-motion";
import { Search, MapPin, MousePointerClick, PhoneCall, ShieldCheck, Target, Eye, TrendingUp } from "lucide-react";

interface PositionMattersProps {
  onOpenBooking: () => void;
}

export function PositionMatters({ onOpenBooking }: PositionMattersProps) {
  const drivers = [
    {
      icon: Target,
      title: "Target the Right People",
      description: "Reach individuals & family members actively searching for immediate addiction treatment.",
    },
    {
      icon: Eye,
      title: "Increase Visibility",
      description: "Secure the top #1 ad & map pack placements on Google when patients search locally.",
    },
    {
      icon: PhoneCall,
      title: "Generate More Calls & Leads",
      description: "Drive direct inbound phone inquiries from pre-vetted, insured prospective patients.",
    },
    {
      icon: TrendingUp,
      title: "Grow Admissions. Grow Revenue.",
      description: "Convert incoming calls into verified bed intakes to maximize center bed occupancy.",
    },
  ];

  return (
    <section id="positioning" className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Text & 4 Key Drivers (Matching Image 3 Poster) */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-extrabold text-blue-800 uppercase tracking-widest mb-3">
              Search Positioning Engine
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              Be Their First Choice, <br />
              <span className="text-blue-600">Every Time.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-6">
              We help treatment centers <strong className="text-slate-900 font-extrabold">outrank competitors</strong> and <strong className="text-blue-600 font-extrabold">attract more qualified inquiries</strong> that turn into admissions.
            </p>

            {/* 4 Feature Drivers List */}
            <div className="space-y-3.5 mb-6">
              {drivers.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-900">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Google Search Ranking Mockup & Patient Journey Flow */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Outer Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
              {/* Search Header Bar */}
              <div className="flex items-center gap-3 bg-slate-100 rounded-2xl px-4 py-2.5 mb-5 border border-slate-200">
                <span className="text-blue-600 font-black text-lg tracking-tight">Google</span>
                <div className="flex-1 bg-white rounded-xl px-3 py-1.5 border border-slate-200 text-slate-700 text-xs sm:text-sm flex items-center justify-between shadow-inner">
                  <span className="font-bold text-slate-900">drug rehab near me</span>
                  <Search className="w-4 h-4 text-blue-600" />
                </div>
              </div>

              {/* HIGHLIGHTED YOUR TREATMENT CENTER (POSITION #1 SPOT) */}
              <div className="relative p-4 sm:p-5 bg-gradient-to-br from-blue-50/90 via-cyan-50/60 to-white border-2 border-blue-600 rounded-2xl shadow-lg mb-5">
                {/* Arrow & Badge Callout */}
                <div className="absolute -top-3 right-4 bg-blue-600 text-white font-extrabold text-[11px] px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                  <MousePointerClick className="w-3 h-3" /> YOUR CENTER (#1 RANK)
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="font-black text-[10px] text-white bg-blue-700 px-2 py-0.5 rounded">Ad</span>
                  <span className="text-xs font-bold text-emerald-700 truncate">www.yourtreatmentcenter.com</span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-blue-900 mb-1">
                  Your Treatment Center - 24/7 Admissions & Care
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed mb-3">
                  Compassionate detox & inpatient rehab care. Commercial insurance accepted. Speak directly with an intake coordinator.
                </p>

                {/* Call Extension Button in Ad */}
                <a
                  href="tel:2164088962"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-md transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now – (216) 408-8962</span>
                </a>
              </div>

              {/* Patient Journey Flow Path Visual (Image 3 inspired) */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-extrabold text-slate-600">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <Search className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span className="text-[11px]">1. Patient Searches</span>
                </div>
                <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-200 text-blue-900">
                  <MapPin className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span className="text-[11px]">2. Finds You #1</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <PhoneCall className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span className="text-[11px]">3. Reaches Out</span>
                </div>
                <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span className="text-[11px]">4. Gets Help</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
