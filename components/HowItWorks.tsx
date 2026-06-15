const steps = [
  {
    step: "01",
    who: "You",
    title: "Set up your role & clone",
    body: "Tell us about the role, the must-haves, the nice-to-haves, and what great really looks like. We configure your AI clone with that expertise and your hiring manager's interview style.",
  },
  {
    step: "02",
    who: "Candidate",
    title: "Candidate applies & gets invited",
    body: "When someone applies via your job ad, they receive an invitation to complete a SureScreen clone interview — at any time of their choosing, from any device.",
  },
  {
    step: "03",
    who: "AI",
    title: "Clone conducts the interview",
    body: "The AI clone runs a structured, in-depth interview. It asks role-specific questions, cross-references their resume, probes for depth, and flags inconsistencies automatically.",
  },
  {
    step: "04",
    who: "AI",
    title: "Candidates are scored & ranked",
    body: "Every interview is scored on relevant dimensions — skills depth, clarity, honesty signals, cultural fit markers. Candidates are ranked from strongest to weakest.",
  },
  {
    step: "05",
    who: "You",
    title: "You meet your top five",
    body: "You receive a ranked shortlist with interview transcripts and scores. The face-to-face interview with your actual hiring manager now starts from a place of knowledge, not guesswork.",
  },
  {
    step: "06",
    who: "Candidate",
    title: "Everyone gets feedback",
    body: "Every candidate who completed the clone interview receives personalised feedback — what they did well, what to improve. A world first in volume hiring.",
  },
];

const whoColor: Record<string, string> = {
  You: "bg-sage-100 text-sage-700",
  Candidate: "bg-blush-100 text-blush-700",
  AI: "bg-warm-200 text-warm-800",
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-sage-900 mb-4 text-balance">
            From job ad to shortlist — without lifting a finger
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Six steps. Two of them are yours. The rest is us.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-warm-200 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6">
                {/* Step number */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-warm-100 border-2 border-warm-200 flex items-center justify-center z-10">
                  <span className="text-xs font-semibold text-warm-600">
                    {s.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${whoColor[s.who]}`}
                    >
                      {s.who}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sage-900 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-warm-600 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
