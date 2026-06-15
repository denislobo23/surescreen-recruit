"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, User, Briefcase, MapPin, FileText } from "lucide-react";
import Image from "next/image";

const roles = [
  "Business Analyst", "Project Manager", "Software Developer", "Data Analyst",
  "UX/UI Designer", "Product Manager", "DevOps Engineer", "Scrum Master",
  "Marketing Manager", "Sales Executive", "Finance Analyst", "HR Manager",
  "Operations Manager", "Customer Success", "Content Strategist", "Other",
];

const experience = ["0–2 years", "3–5 years", "6–10 years", "10+ years"];

const availability = ["Immediately", "Within 2 weeks", "Within 1 month", "Just exploring"];

export default function CandidatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    location: "", role: "", experience: "", availability: "",
    linkedIn: "", summary: "", poolConsent: true,
  });

  const set = (key: string, val: string | boolean) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to Supabase/backend
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 min-h-screen">
        <div className="max-w-2xl mx-auto">

          <div className="rounded-2xl overflow-hidden shadow-md mb-8">
            <Image src="/images/candidate-register-hero.jpg" alt="Candidate completing interview" width={800} height={350} className="w-full h-48 object-cover object-top" />
          </div>

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blush-100 text-blush-700 text-xs font-medium mb-4">
              <User size={12} />
              For job seekers
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-sage-900 mb-3 text-balance">
              Register as a candidate
            </h1>
            <p className="text-warm-600 leading-relaxed">
              Complete your profile once. Get discovered by companies hiring for roles that suit you — without sending another application.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: "One interview", sub: "works for many roles" },
                { label: "24/7 access", sub: "interview on your schedule" },
                { label: "Real feedback", sub: "after every interview" },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded-xl bg-blush-50 border border-blush-100">
                  <p className="font-semibold text-blush-800 text-sm">{s.label}</p>
                  <p className="text-xs text-blush-600 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-sage-500" />
              </div>
              <h2 className="text-xl font-semibold text-sage-900">You're registered!</h2>
              <p className="text-warm-600 max-w-sm">
                We'll reach out when your AI interview is ready to schedule. Keep an eye on your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Personal details */}
              <div className="p-6 rounded-2xl bg-white border border-warm-200 space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <User size={15} className="text-sage-500" />
                  <p className="font-semibold text-sage-900 text-sm">Personal details</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">First name *</label>
                    <input required value={form.firstName} onChange={e => set("firstName", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                  </div>
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">Last name *</label>
                    <input required value={form.lastName} onChange={e => set("lastName", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-1">Email address *</label>
                  <input required type="email" value={form.email} onChange={e => set("email", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">Phone</label>
                    <input value={form.phone} onChange={e => set("phone", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                  </div>
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">Location *</label>
                    <input required placeholder="e.g. Melbourne, VIC" value={form.location} onChange={e => set("location", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                  </div>
                </div>
              </div>

              {/* Role & experience */}
              <div className="p-6 rounded-2xl bg-white border border-warm-200 space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={15} className="text-sage-500" />
                  <p className="font-semibold text-sage-900 text-sm">Role & experience</p>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-1">Primary role *</label>
                  <select required value={form.role} onChange={e => set("role", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300">
                    <option value="">Select a role</option>
                    {roles.map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">Years of experience *</label>
                    <select required value={form.experience} onChange={e => set("experience", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300">
                      <option value="">Select</option>
                      {experience.map(x => <option key={x}>{x}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">Availability *</label>
                    <select required value={form.availability} onChange={e => set("availability", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300">
                      <option value="">Select</option>
                      {availability.map(a => <option key={a}>{a}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-1">LinkedIn profile URL</label>
                  <input placeholder="https://linkedin.com/in/yourname" value={form.linkedIn} onChange={e => set("linkedIn", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                </div>
              </div>

              {/* Summary */}
              <div className="p-6 rounded-2xl bg-white border border-warm-200 space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <FileText size={15} className="text-sage-500" />
                  <p className="font-semibold text-sage-900 text-sm">About you</p>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-1">Brief professional summary</label>
                  <textarea rows={4} placeholder="2–3 sentences about your background and what you're looking for..." value={form.summary} onChange={e => set("summary", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300 resize-none" />
                </div>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sage-50 border border-sage-200">
                <input type="checkbox" id="pool" checked={form.poolConsent}
                  onChange={e => set("poolConsent", e.target.checked)}
                  className="mt-0.5 accent-sage-500" />
                <label htmlFor="pool" className="text-sm text-sage-800 leading-relaxed">
                  I'd like to be included in the SureScreen talent pool so companies can discover my profile. I can opt out at any time.
                </label>
              </div>

              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blush-500 text-white font-medium hover:bg-blush-600 transition-colors">
                Register as a candidate
                <ArrowRight size={16} />
              </button>

              <p className="text-xs text-center text-warm-400">
                Your data is never sold. You control your profile visibility at all times.
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
