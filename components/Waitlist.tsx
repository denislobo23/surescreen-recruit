"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [type, setType] = useState<"company" | "candidate">("company");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch("https://formspree.io/f/xaqzvogq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type }),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error("Form error:", err);
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
          Early access
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-sage-900 mb-4 text-balance">
          Be first to transform how you hire
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-md mb-8 max-w-sm mx-auto">
          <Image
            src="/images/feedback-notification.jpg"
            alt="Candidate receiving interview feedback"
            width={400}
            height={250}
            className="w-full h-44 object-cover"
          />
        </div>

        <p className="text-warm-600 leading-relaxed mb-8">
          We are building SureScreen Recruit with a small group of early
          adopters. Join the waitlist and help shape the product — plus lock in
          launch pricing.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-8">
            <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center">
              <CheckCircle2 size={28} className="text-sage-500" />
            </div>
            <p className="font-semibold text-sage-900">You are on the list!</p>
            <p className="text-sm text-warm-600">
              We will be in touch as soon as we are ready for you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="inline-flex rounded-xl border border-warm-200 p-1 bg-warm-50">
              <button
                type="button"
                onClick={() => setType("company")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  type === "company"
                    ? "bg-sage-500 text-white"
                    : "text-warm-600 hover:text-sage-700"
                }`}
              >
                I am hiring
              </button>
              <button
                type="button"
                onClick={() => setType("candidate")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  type === "candidate"
                    ? "bg-blush-500 text-white"
                    : "text-warm-600 hover:text-blush-700"
                }`}
              >
                I am job seeking
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  type === "company"
                    ? "your@company.com.au"
                    : "your@email.com"
                }
                className="flex-1 px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-sage-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-sage-300 text-sm"
              />
              <button
                type="submit"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-medium transition-colors ${
                  type === "company"
                    ? "bg-sage-500 hover:bg-sage-600"
                    : "bg-blush-500 hover:bg-blush-600"
                }`}
              >
                Join waitlist
                <ArrowRight size={15} />
              </button>
            </div>
            <p className="text-xs text-warm-400">
              No spam. No selling your data. Just launch updates.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
