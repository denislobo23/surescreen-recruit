import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-100 text-sage-700 text-xs font-medium mb-6">
              <Sparkles size={12} />
              SureScreen™ AI candidate screening — coming soon
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-sage-900 leading-tight mb-6 text-balance">
              Your hiring manager,{" "}
              <span className="text-sage-500">cloned.</span>
              <br />
              Screening 24/7.
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed mb-8">
              Candidates today can apply to hundreds of jobs with a single click.
              Your team drowns in applications, suffers recency fatigue, and still
              misses outstanding people. SureScreen™ accurately screens every
              applicant through a real interview, ranks them by substance, and
              hands you the top five ready for a real conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sage-500 text-white font-medium hover:bg-sage-600 transition-colors"
              >
                Join the waitlist
                <ArrowRight size={16} />
              </a>
              
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-warm-300 text-warm-800 font-medium hover:bg-warm-100 transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/hero-hiring-manager.jpg"
              alt="Hiring manager reviewing candidates"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "94%", label: "Reduction in time-to-shortlist" },
            { value: "24/7", label: "Screening, no scheduling needed" },
            { value: "Top 5", label: "Ranked candidates delivered" },
            { value: "100%", label: "Candidates receive feedback" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-3xl font-semibold text-sage-500">{stat.value}</p>
              <p className="text-sm text-warm-600 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

