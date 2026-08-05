"use client";

import { Terminal, Database, LineChart, Globe, Zap, Megaphone, Inbox, LayoutTemplate, Smartphone, Search, Target } from "lucide-react";

function Cloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  );
}

const toolsTop = [
  { name: "Google Analytics 4", icon: LineChart, color: "text-amber-500" },
  { name: "HubSpot", icon: Database, color: "text-orange-500" },
  { name: "Salesforce", icon: Cloud, color: "text-blue-400" },
  { name: "Semrush", icon: Search, color: "text-orange-600" },
  { name: "Klaviyo", icon: Inbox, color: "text-emerald-500" },
  { name: "Unbounce", icon: LayoutTemplate, color: "text-indigo-600" },
];

const toolsBottom = [
  { name: "LinkedIn Ads", icon: Target, color: "text-blue-600" },
  { name: "Google Tag Manager", icon: Terminal, color: "text-blue-500" },
  { name: "Meta Business", icon: Globe, color: "text-blue-700" },
  { name: "Shopify Plus", icon: Smartphone, color: "text-green-500" },
  { name: "ActiveCampaign", icon: Zap, color: "text-blue-400" },
  { name: "Hotjar", icon: Megaphone, color: "text-red-500" },
];

export function ToolsCarousel() {
  return (
    <section id="tech-mastery" className="py-12 sm:py-16 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center mb-8">
        <span className="bg-blue-100/80 text-blue-700 border border-blue-200 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-3">
          INFRASTRUCTURE
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          The Tech We Master
        </h2>
      </div>

      <div className="relative flex flex-col gap-4 overflow-hidden py-2">
        {/* Left & Right Gradient Blur Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Row 1: Forward Marquee */}
        <div className="animate-marquee flex whitespace-nowrap items-center w-[200%]">
          {[...toolsTop, ...toolsTop, ...toolsTop].map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div key={idx} className="flex-none px-2.5 sm:px-3">
                <div className="h-12 sm:h-14 px-5 sm:px-7 bg-white rounded-full flex items-center gap-3 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${tool.color}`} />
                  <span className="font-bold text-slate-800 text-xs sm:text-sm tracking-tight">{tool.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Reverse Marquee */}
        <div className="animate-marquee-reverse flex whitespace-nowrap items-center w-[200%] mt-1 sm:mt-2">
          {[...toolsBottom, ...toolsBottom, ...toolsBottom].map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div key={idx} className="flex-none px-2.5 sm:px-3">
                <div className="h-12 sm:h-14 px-5 sm:px-7 bg-white rounded-full flex items-center gap-3 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${tool.color}`} />
                  <span className="font-bold text-slate-800 text-xs sm:text-sm tracking-tight">{tool.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
