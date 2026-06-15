import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Star, MapPin, Clock } from "lucide-react";

const categories = [
  {
    sector: "Technology",
    color: "bg-sage-50 border-sage-200",
    badge: "bg-sage-100 text-sage-700",
    roles: [
      { title: "Software Developer", count: 48, levels: "Mid–Senior", locations: "Melbourne, Sydney, Remote" },
      { title: "DevOps / Cloud Engineer", count: 21, levels: "Senior", locations: "Sydney, Remote" },
      { title: "Data Analyst", count: 34, levels: "Junior–Senior", locations: "All AU cities" },
      { title: "UX/UI Designer", count: 19, levels: "Mid–Senior", locations: "Melbourne, Brisbane" },
      { title: "Product Manager", count: 15, levels: "Senior", locations: "Sydney, Melbourne" },
    ],
  },
  {
    sector: "Business & Consulting",
    color: "bg-blush-50 border-blush-200",
    badge: "bg-blush-100 text-blush-700",
    roles: [
      { title: "Business Analyst", count: 61, levels: "Mid–Senior", locations: "Melbourne, Sydney, Canberra" },
      { title: "Project Manager", count: 44, levels: "Mid–Senior", locations: "All AU cities" },
      { title: "Scrum Master / Agile Coach", count: 17, levels: "Senior", locations: "Melbourne, Remote" },
      { title: "Change Manager", count: 12, levels: "Senior", locations: "Sydney, Melbourne" },
      { title: "Management Consultant", count: 9, levels: "Senior", locations: "Sydney" },
    ],
  },
  {
    sector: "Finance & Operations",
    color: "bg-warm-100 border-warm-300",
    badge: "bg-warm-200 text-warm-800",
    roles: [
      { title: "Finance Analyst", count: 28, levels: "Mid–Senior", locations: "Sydney, Melbourne" },
      { title: "Operations Manager", count: 22, levels: "Senior", locations: "All AU cities" },
      { title: "Risk & Compliance", count: 11, levels: "Senior", locations: "Sydney" },
      { title: "Procurement Specialist", count: 8, levels: "Mid", locations: "Melbourne, Perth" },
    ],
  },
  {
    sector: "Sales & Marketing",
    color: "bg-sage-50 border-sage-200",
    badge: "bg-sage-100 text-sage-700",
    roles: [
      { title: "Sales Executive / BDM", count: 39, levels: "Mid–Senior", locations: "All AU cities" },
      { title: "Marketing Manager", count: 26, levels: "Mid–Senior", locations: "Melbourne, Sydney" },
      { title: "Customer Success Manager", count: 18, levels: "Mid", locations: "Remote, Melbourne" },
      { title: "Content Strategist", count: 14, levels: "Mid", locations: "Remote" },
      { title: "Digital Marketing Specialist", count: 23, levels: "Junior–Mid", locations: "All AU cities" },
    ],
  },
  {
    sector: "HR & People",
    color: "bg-blush-50 border-blush-200",
    badge: "bg-blush-100 text-blush-700",
    roles: [
      { title: "HR Manager / HRBP", count: 16, levels: "Senior", locations: "Melbourne, Sydney" },
      { title: "Talent Acquisition Specialist", count: 12, levels: "Mid", locations: "All AU cities" },
      { title: "Learning & Development", count: 7, levels: "Mid–Senior", locations: "Melbourne" },
    ],
  },
  {
    sector: "Legal & Compliance",
    color: "bg-warm-100 border-warm-300",
    badge: "bg-warm-200 text-warm-800",
    roles: [
      { title: "In-house Counsel", count: 8, levels: "Senior", locations: "Sydney, Melbourne" },
      { title: "Compliance Officer", count: 11, levels: "Mid–Senior", locations: "Sydney" },
      { title: "Paralegal", count: 14, levels: "Junior–Mid", locations: "Melbourne, Sydney" },
    ],
  },
];

const stats = [
  { value: "380+", label: "Pre-interviewed candidates" },
  { value: "15", label: "Role categories" },
  { value: "6", label: "Australian cities" },
  { value: "48h", label: "Avg. time to shortlist" },
];

export default function TalentPoolPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8 bg-sage-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-700 text-sage-300 text-xs font-medium mb-5">
              <Users size={12} />
              Talent pool — coming soon
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4 text-balance">
              Browse pre-interviewed candidates across every major role
            </h1>
            <p className="text-sage-300 leading-relaxed mb-6">
              Every candidate in our pool has completed a structured AI interview. No cold resumes — just verified, ranked professionals ready to be discovered.
            </p>
            <a href="/companies"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sage-500 text-white text-sm font-medium hover:bg-sage-400 transition-colors">
              Register to access the pool
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.label}>
                <p className="text-3xl font-semibold text-sage-300">{s.value}</p>
                <p className="text-sm text-sage-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-2">
              Available roles
            </p>
            <h2 className="text-2xl font-semibold text-sage-900">
              What's in the pool right now
            </h2>
            <p className="text-warm-600 text-sm mt-2">
              Candidate counts are indicative. Register your company to view full profiles, scores, and interview transcripts.
            </p>
          </div>

          <div className="space-y-8">
            {categories.map(cat => (
              <div key={cat.sector}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cat.badge} ${cat.color}`}>
                    {cat.sector}
                  </span>
                  <div className="flex-1 h-px bg-warm-200" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.roles.map(role => (
                    <div key={role.title}
                      className={`p-4 rounded-xl border ${cat.color} bg-white hover:shadow-sm transition-shadow`}>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="font-semibold text-sage-900 text-sm leading-snug">{role.title}</h3>
                        <span className="shrink-0 text-xs font-semibold text-sage-500 bg-sage-50 border border-sage-200 px-2 py-0.5 rounded-full">
                          {role.count}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs text-warm-600">
                          <Star size={11} className="text-warm-400" />
                          {role.levels}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-warm-600">
                          <MapPin size={11} className="text-warm-400" />
                          {role.locations}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA block */}
          <div className="mt-14 p-8 rounded-2xl bg-sage-900 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-700 text-sage-300 text-xs mb-4">
              <Clock size={11} />
              Full access opens at launch
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Want to see full profiles and interview scores?
            </h3>
            <p className="text-sage-300 text-sm mb-6 max-w-md mx-auto">
              Register your company now. You'll be first to access the pool when we launch — with candidate transcripts, rankings, and direct contact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/companies"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sage-500 text-white text-sm font-medium hover:bg-sage-400 transition-colors">
                Register as a company
                <ArrowRight size={15} />
              </a>
              <a href="/candidates"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-sage-600 text-sage-300 text-sm font-medium hover:bg-sage-800 transition-colors">
                Join as a candidate
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
