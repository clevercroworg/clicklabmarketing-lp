"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Phone, ArrowLeft, ShieldCheck, Clock, PhoneCall } from "lucide-react";

export function ThankYouContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b192c] via-[#0f172a] to-[#1e3a8a] text-white flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Top Header Navigation */}
      <header className="border-b border-slate-800/80 bg-[#0b192c]/90 backdrop-blur-md py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/clicklab-logo-white.svg"
              alt="ClickLab Marketing"
              width={160}
              height={38}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          <a
            href="tel:2164088962"
            className="flex items-center gap-2 bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-cyan-300 transition-all"
          >
            <Phone className="w-3.5 h-3.5 fill-current text-cyan-400" />
            <span>(216) 408-8962</span>
          </a>
        </div>
      </header>

      {/* Main Thank You Hero Body */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 sm:py-20 text-center flex flex-col items-center justify-center">
        {/* Animated Badge */}
        <div className="relative mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
            <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2.2]" />
          </div>
          <div className="absolute -bottom-2 right-0 bg-blue-600 text-white p-1.5 rounded-full shadow-lg border border-blue-400/30">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        {/* Headlines */}
        <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-cyan-400 mb-2">
          Strategy Call Request Received
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-4 max-w-2xl">
          Thank You! Your Request Has Been Submitted.
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          Our senior healthcare growth strategist is reviewing your market radius and will contact your admissions line within <strong className="text-cyan-300 font-bold">2 business hours</strong>.
        </p>

        {/* 3 Step Expectations Box */}
        <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl mb-10 text-left backdrop-blur-xl">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" /> What Happens Next:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-cyan-400 font-black text-xs flex items-center justify-center mb-3">
                01
              </div>
              <h4 className="text-white font-black text-sm mb-1">Competitive Audit</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We analyze Google search impression share &amp; competitor ad density in your state radius.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 font-black text-xs flex items-center justify-center mb-3">
                02
              </div>
              <h4 className="text-white font-black text-sm mb-1">Direct Outreach</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our strategist will call your direct line or email you to confirm your strategy consultation.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-black text-xs flex items-center justify-center mb-3">
                03
              </div>
              <h4 className="text-white font-black text-sm mb-1">Growth Roadmap</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We deliver a custom month-over-month patient admissions &amp; ROI projection for your bed count.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href="tel:2164088962"
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-400 text-white font-black text-sm sm:text-base px-6 py-4 rounded-2xl shadow-xl shadow-blue-600/40 border border-blue-400/30 transition-all text-center group"
          >
            <PhoneCall className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span>Need Immediate Help? Call (216) 408-8962</span>
          </a>

          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-sm px-6 py-4 rounded-2xl border border-slate-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </main>

      {/* Footer Strip */}
      <footer className="border-t border-slate-800/80 py-6 px-4 text-center text-xs text-slate-400 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} ClickLab Marketing. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">LegitScript Compliant</span>
            <span>•</span>
            <a href="mailto:contact@clicklabmarketing.com" className="hover:text-cyan-300 transition-colors">
              contact@clicklabmarketing.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
