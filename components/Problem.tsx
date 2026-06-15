import { MousePointerClick, Layers, UserX, TrendingDown, FileSearch } from "lucide-react";
import Image from "next/image";

const problems = [
  {
    icon: MousePointerClick,
    title: "Friction-free applications flood the pipeline",
    body: "Modern job platforms have reduced applying to a single click. For candidates, that is a convenience. For hiring teams, it means receiving hundreds of applications for every role — the majority from people who are underqualified, uninterested, or simply casting a wide net.",
  },
  {
    icon: Layers,
    title: "Assessment at volume is not humanly scalable",
    body: "Thoroughly reviewing every application requires substantial time and dedicated staff. Many organisations quietly hire additional HR resources just to manage inbound volume — a recurring cost that compounds with every role posted and delivers no competitive advantage.",
  },
  {
    icon: TrendingDown,
    title: "Volume creates fatigue, bias and inconsistent outcomes",
    body: "As review volume increases, assessment quality degrades. Recency bias causes reviewers to unconsciously favour the most recently seen candidates. Fatigue shortens attention per application. The result is a process that is neither fair to candidates nor reliable for the business.",
  },
  {
    icon: UserX,
    title: "Recruitment agencies introduce their own trade-offs",
    body: "Agency consultants frequently manage Business Analyst, Project Manager and Developer roles simultaneously — disciplines that require entirely different assessment expertise. Keyword matching fills the gap, which is how an outstanding analyst with SAP experience gets eliminated from a role that listed Salesforce — a different tool for the same skill.",
  },
  {
    icon: FileSearch,
    title: "Nobody verifies what candidates actually claim",
    body: "In practice, cross-referencing what a candidate says in an interview against what they have written in their application is rarely done. At scale, it is virtually impossible. Inconsistencies go undetected, inflated experience goes unchallenged, and hiring decisions are made on unverified information.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blush-500 mb-3">
              The problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-sage-900 mb-4 text-balance">
              Applying takes one click. Hiring well takes considerably more.
            </h2>
            <p className="text-warm-600 leading-relaxed">
              Job platforms have made applying effortless — which is good for candidates and overwhelming for everyone else. The volume problem sits at the root of almost every failure in modern recruitment: fatigue, bias, inconsistency, unverified claims, and the slow erosion of hiring quality that nobody quite admits is happening.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/problem-application-overload.jpg"
              alt="Overwhelmed recruiter with too many applications"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl border border-warm-200 bg-warm-50 hover:border-sage-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blush-100 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-blush-600" />
              </div>
              <h3 className="font-semibold text-sage-900 mb-2">{p.title}</h3>
              <p className="text-sm text-warm-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-sage-50 border border-sage-200">
            <p className="font-semibold text-sage-900 mb-2">How SureScreen addresses volume</p>
            <p className="text-sm text-sage-700 leading-relaxed">
              Every applicant completes a short clone interview as a mandatory step. Those who apply but skip the interview are automatically self-eliminated — no staff time spent. Those who complete it are assessed consistently, cross-referenced against their application, and ranked. Your team sees only the best five.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-blush-50 border border-blush-200">
            <p className="font-semibold text-blush-900 mb-2">The candidates who missed out are still valuable</p>
            <p className="text-sm text-blush-800 leading-relaxed">
              When you hire one person, there are typically four or five strong candidates who were not selected. SureScreen retains all of those clone interviews. The next time you need to hire — before you write a single job ad or wait for applications — you can browse deeply interviewed candidates from previous rounds and find your next hire today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}