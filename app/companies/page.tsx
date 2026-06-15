"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Building2, Users, Layers } from "lucide-react";
import Image from "next/image";

const companySizes = ["1–10", "11–50", "51–200", "201–500", "500+"];

const industries = [
  "Technology", "Finance & Banking", "Healthcare", "Legal", "Consulting",
  "Retail & eCommerce", "Construction & Engineering", "Education",
  "Government", "Manufacturing", "Media & Marketing", "Other",
];

const rolesHiring = [
  "Business Analyst", "Project Manager", "Software Developer", "Data Analyst",
  "UX/UI Designer", "Product Manager", "DevOps Engineer", "Scrum Master",
  "Marketing Manager", "Sales Executive", "Finance Analyst", "HR Manager",
  "Operations Manager", "Customer Success", "Other",
];

const volumeOptions = ["1–5 roles/year", "6–20 roles/year", "21–50 roles/year", "50+ roles/year"];

export default function CompanyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [form, setForm] = useState({
    companyName: "", contactName: "", email: "", phone: "",
    website: "", size: "", industry: "", volume: "", painPoint: "",
  });

  const set = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  const toggleRole = (role: string) =>
    setSelectedRoles(r => r.includes(role) ? r.filter(x => x !== role) : [...r, role]);

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
            <Image src="/images/company-register-hero.jpg" alt="HR manager reviewing candidates" width={800} height={350} className="w-full h-48 object-cover object-top" />
          </div>

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-100 text-sage-700 text-xs font-medium mb-4">
              <Building2 size={12} />
              For companies
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-sage-900 mb-3 text-balance">
              Register your company
            </h1>
            <p className="text-warm-600 leading-relaxed">
              Get early access to SureScreen Recruit and help shape the product. Lock in launch pricing and be first to deploy AI hiring manager clones for your roles.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: "Top 5 only", sub: "pre-interviewed candidates" },
                { label: "Zero fatigue", sub: "AI handles the screening" },
                { label: "Launch price", sub: "locked in for early members" },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded-xl bg-sage-50 border border-sage-100">
                  <p className="font-semibold text-sage-800 text-sm">{s.label}</p>
                  <p className="text-xs text-sage-600 mt-0.5">{s.sub}</p>
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
                Our team will be in touch within 2 business days to walk you through the platform and set up your first role.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Company details */}
              <div className="p-6 rounded-2xl bg-white border border-warm-200 space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 size={15} className="text-sage-500" />
                  <p className="font-semibold text-sage-900 text-sm">Company details</p>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-1">Company name *</label>
                  <input required value={form.companyName} onChange={e => set("companyName", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">Industry *</label>
                    <select required value={form.industry} onChange={e => set("industry", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300">
                      <option value="">Select</option>
                      {industries.map(i => <option key={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">Company size *</label>
                    <select required value={form.size} onChange={e => set("size", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300">
                      <option value="">Select</option>
                      {companySizes.map(s => <option key={s}>{s} employees</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-1">Website</label>
                  <input placeholder="https://yourcompany.com.au" value={form.website} onChange={e => set("website", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                </div>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-2xl bg-white border border-warm-200 space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users size={15} className="text-sage-500" />
                  <p className="font-semibold text-sage-900 text-sm">Your contact details</p>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-1">Your name *</label>
                  <input required value={form.contactName} onChange={e => set("contactName", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">Work email *</label>
                    <input required type="email" value={form.email} onChange={e => set("email", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                  </div>
                  <div>
                    <label className="block text-xs text-warm-600 mb-1">Phone</label>
                    <input value={form.phone} onChange={e => set("phone", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300" />
                  </div>
                </div>
              </div>

              {/* Hiring details */}
              <div className="p-6 rounded-2xl bg-white border border-warm-200 space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <Layers size={15} className="text-sage-500" />
                  <p className="font-semibold text-sage-900 text-sm">Hiring needs</p>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-2">Roles you typically hire for *</label>
                  <div className="flex flex-wrap gap-2">
                    {rolesHiring.map(role => (
                      <button key={role} type="button" onClick={() => toggleRole(role)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          selectedRoles.includes(role)
                            ? "bg-sage-500 text-white border-sage-500"
                            : "bg-warm-50 text-warm-700 border-warm-200 hover:border-sage-300"
                        }`}>
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-1">Annual hiring volume *</label>
                  <select required value={form.volume} onChange={e => set("volume", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300">
                    <option value="">Select</option>
                    {volumeOptions.map(v => <option key={v}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-warm-600 mb-1">Biggest hiring pain point</label>
                  <textarea rows={3} placeholder="e.g. We receive 400+ applications per role and our HR team is overwhelmed..." value={form.painPoint} onChange={e => set("painPoint", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-warm-50 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-300 resize-none" />
                </div>
              </div>

              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sage-500 text-white font-medium hover:bg-sage-600 transition-colors">
                Register your company
                <ArrowRight size={16} />
              </button>

              <p className="text-xs text-center text-warm-400">
                No credit card required. Our team will contact you within 2 business days.
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
