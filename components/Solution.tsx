import { Bot, CheckCircle2, MessageSquare, Star } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Bot,
    title: "Your hiring manager, cloned",
    body: "We create an AI clone trained on your hiring manager's expertise, tone, and the specific role requirements. It knows what great looks like — because it learned from someone who does.",
  },
  {
    icon: MessageSquare,
    title: "Deep, probing interviews",
    body: "The clone doesn't just ask surface questions. It cross-examines, challenges answers, and verifies resume claims in real time — something an overwhelmed recruiter rarely has time to do.",
  },
  {
    icon: CheckCircle2,
    title: "Interview at any hour",
    body: "Candidates choose their own time — 6am, 10pm, whenever. No scheduling back-and-forth. No time zones. The clone is always ready, always consistent, never having a bad day.",
  },
  {
    icon: Star,
    title: "Ranked shortlist + feedback loop",
    body: "Every candidate gets ranked by response quality. Your hiring manager reviews the top five — already pre-interviewed — and meets only the best. Every other candidate gets feedback to grow from.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
            <Image
              src="/images/solution-ai-interview.jpg"
              alt="Candidate completing AI interview"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
              Our solution
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-sage-900 mb-4 text-balance">
              An AI clone that interviews every candidate for you
            </h2>
            <p className="text-warm-600 leading-relaxed">
              SureScreen Recruit sits between your job ad and your calendar. Every
              applicant gets a real interview — just not with a human yet. Only the
              best five make it to your desk.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-white border border-warm-200 hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-sage-600" />
              </div>
              <h3 className="font-semibold text-sage-900 mb-2">{f.title}</h3>
              <p className="text-sm text-warm-600 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-blush-50 border border-blush-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-blush-800 mb-1">
              AI screening tool — in development
            </p>
            <p className="text-sm text-blush-700">
              Our AI hiring manager clone is currently being built. Join the
              waitlist to be first in line when we launch — and help shape the product.
            </p>
          </div>
          <a
            href="#waitlist"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-blush-500 text-white text-sm font-medium hover:bg-blush-600 transition-colors"
          >
            Get early access
          </a>
        </div>
      </div>
    </section>
  );
}
