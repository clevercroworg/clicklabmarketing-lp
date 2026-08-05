"use client";

import { useState } from "react";
import { X, Phone, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    centerName: "",
    phone: "",
    email: "",
    bedCount: "10-25 beds",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
            Free Consultation
          </span>
          <h3 className="text-2xl font-black text-white mt-1">Book Your Strategy Call</h3>
          <p className="text-xs text-slate-300 font-medium mt-1">
            Let&apos;s analyze your center&apos;s digital marketing & admissions growth potential.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">Strategy Call Requested!</h4>
              <p className="text-sm text-slate-600 mb-6">
                Thank you, <strong>{formData.name || "there"}</strong>. Our senior growth strategist will contact you at <strong>{formData.phone || "your phone number"}</strong> shortly.
              </p>
              <button
                onClick={handleReset}
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm px-6 py-3 rounded-2xl w-full"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Treatment Center / Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Recovery Center"
                  value={formData.centerName}
                  onChange={(e) => setFormData({ ...formData, centerName: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(216) 408-8962"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@apexrecovery.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Facility Capacity / Bed Count
                </label>
                <select
                  value={formData.bedCount}
                  onChange={(e) => setFormData({ ...formData, bedCount: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                >
                  <option value="Under 10 beds">Under 10 beds</option>
                  <option value="10-25 beds">10-25 beds</option>
                  <option value="25-50 beds">25-50 beds</option>
                  <option value="50+ beds">50+ beds (Multi-location)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-black text-sm uppercase tracking-wider py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Confirm Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center font-medium mt-2">
                🔒 100% Confidential • HIPAA Compliant • No hard sales push
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
