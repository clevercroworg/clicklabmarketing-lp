"use client";

import { motion } from "framer-motion";
import { Search, MapPin, MousePointerClick, PhoneCall, ShieldCheck, Target, Eye, TrendingUp, DollarSign } from "lucide-react";

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
      icon: ShieldCheck,
      title: "Grow Admissions & Revenue",
      description: "Convert incoming calls into verified bed intakes to maximize center bed occupancy.",
    },
  ];

  return (
    <section id="positioning" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Text & 4 Key Drivers */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-extrabold text-blue-800 uppercase tracking-widest mb-4">
              Google Ads & SEO Placement
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Position Matters. <br />
              <span className="text-gradient-blue bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Show Up First. Get Chosen First.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              When someone searches for help, seconds count. We help treatment centers outrank competitors on Google Search and attract qualified inquiries that turn directly into bed admissions.
            </p>

            {/* 4 Feature Drivers List */}
            <div className="space-y-4 mb-8">
              {drivers.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Interactive Google Search Ranking Mockup (Based on Image 5) */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Outer Decorative Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              {/* Search Header Bar */}
              <div className="flex items-center gap-3 bg-slate-100 rounded-2xl px-4 py-3 mb-6 border border-slate-200">
                <span className="text-blue-600 font-black text-xl tracking-tight">Google</span>
                <div className="flex-1 bg-white rounded-xl px-3 py-1.5 border border-slate-200 text-slate-700 text-xs sm:text-sm flex items-center justify-between shadow-inner">
                  <span className="font-semibold text-slate-900">drug rehab near me</span>
                  <Search className="w-4 h-4 text-blue-600" />
                </div>
              </div>

              {/* Competitor Ads list (Lower positioning) */}
              <div className="space-y-3 mb-4 opacity-50">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-500">Ad</span>
                    <span className="text-slate-500">www.competitorcenter.com</span>
                  </div>
                  <h5 className="font-bold text-slate-700">Competitor Treatment Center</h5>
                  <p className="text-slate-500">Private rehab facility. Call now for availability.</p>
                </div>
              </div>

              {/* HIGHLIGHTED YOUR TREATMENT CENTER (POSITION #1 SPOT) */}
              <div className="relative p-5 bg-gradient-to-br from-blue-50/90 via-cyan-50/60 to-white border-2 border-blue-600 rounded-2xl shadow-xl shadow-blue-600/15">
                {/* Arrow & Badge Callout */}
                <div className="absolute -top-3 right-6 bg-blue-600 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <MousePointerClick className="w-3.5 h-3.5" /> YOUR CENTER (#1 RANK)
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="font-black text-xs text-white bg-blue-700 px-2 py-0.5 rounded">Ad</span>
                  <span className="text-xs font-bold text-emerald-700">www.yourtreatmentcenter.com</span>
                </div>

                <h4 className="text-lg font-black text-blue-900 mb-1">
                  Your Treatment Center - 24/7 Admissions & Care
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-3">
                  Compassionate detox & inpatient rehab care. Insurance accepted. Speak directly with an admissions coordinator today.
                </p>

                {/* Call Extension Button in Ad */}
                <a
                  href="tel:2164088962"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs px-4 py-2 rounded-xl shadow-md transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now – We&apos;re Here to Help</span>
                </a>
              </div>

              {/* Patient Journey Flow Path Visual (Image 3 inspired) */}
              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-4 gap-2 text-center text-xs font-extrabold text-slate-600">
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
                  <Search className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span>1. Patient Searches</span>
                </div>
                <div className="bg-blue-50 p-2 rounded-xl border border-blue-200 text-blue-900">
                  <MapPin className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span>2. Finds You #1</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
                  <PhoneCall className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span>3. Reaches Out</span>
                </div>
                <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-200 text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span>4. Gets Admitted</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
