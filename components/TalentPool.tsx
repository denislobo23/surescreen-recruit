import { Users, Building2, Zap, Shield } from "lucide-react";
import Image from "next/image";

export default function TalentPool() {
  return (
    <section id="talent-pool" className="py-20 px-4 sm:px-6 lg:px-8 bg-sage-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-300 mb-3">
              Talent pool
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 text-balance">
              Don't wait for candidates to find you
            </h2>
            <p className="text-sage-300 leading-relaxed">
              Great candidates who've completed a SureScreen clone interview
              don't disappear — they join our verified talent pool. Companies can
              browse pre-interviewed candidates and reach out directly. Candidates
              get more exposure without sending another application.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/talent-pool-candidates.jpg"
              alt="Diverse pool of pre-interviewed candidates"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: Users,
              title: "Pre-interviewed candidates",
              body: "Every person in the pool has already passed a structured AI interview. No cold resumes.",
            },
            {
              icon: Building2,
              title: "Cross-company exposure",
              body: "One interview, multiple opportunities. Candidates stay visible to all hiring companies on the platform.",
            },
            {
              icon: Zap,
              title: "Instant shortlisting",
              body: "Filter the pool by role, skills, score, and availability. Build a shortlist in minutes.",
            },
            {
              icon: Shield,
              title: "Candidate-controlled",
              body: "Candidates choose whether to join the pool and can withdraw any time. Their data, their choice.",
            },
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-2xl bg-sage-800 border border-sage-700">
              <div className="w-9 h-9 rounded-lg bg-sage-700 flex items-center justify-center mb-4">
                <f.icon size={18} className="text-sage-300" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm">{f.title}</h3>
              <p className="text-xs text-sage-400 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-sage-800 border border-sage-700">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-400 mb-2">For companies</p>
            <h3 className="font-semibold text-white mb-2">Browse verified candidates</h3>
            <p className="text-sm text-sage-300 mb-4">
              Access a pool of candidates who've already been interviewed. Reach out to exactly who you need.
            </p>
            <a href="#waitlist" className="inline-block px-4 py-2 rounded-lg bg-sage-500 text-white text-sm font-medium hover:bg-sage-400 transition-colors">
              Get notified at launch
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-blush-900 border border-blush-800">
            <p className="text-xs font-semibold uppercase tracking-widest text-blush-400 mb-2">For candidates</p>
            <h3 className="font-semibold text-white mb-2">One interview, many doors</h3>
            <p className="text-sm text-blush-200 mb-4">
              Complete your SureScreen interview once and let companies come to you. You stay in control of your profile.
            </p>
            <a href="/candidates" className="inline-block px-4 py-2 rounded-lg bg-blush-500 text-white text-sm font-medium hover:bg-blush-400 transition-colors">
              Join as a candidate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
