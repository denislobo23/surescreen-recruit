import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "per role",
    description: "Perfect for SMEs hiring 1–5 roles a year.",
    features: [
      "1 AI hiring manager clone",
      "Up to 200 candidate interviews",
      "Ranked shortlist of top 5",
      "Candidate feedback reports",
      "Interview transcripts",
    ],
    cta: "Join waitlist",
    href: "#waitlist",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$799",
    period: "per month",
    description: "For growing teams hiring continuously.",
    features: [
      "Up to 5 concurrent clones",
      "Unlimited candidate interviews",
      "Talent pool access",
      "ATS integration (coming soon)",
      "Priority support",
      "Monthly hiring insights report",
    ],
    cta: "Join waitlist",
    href: "#waitlist",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Large organisations with volume hiring needs.",
    features: [
      "Unlimited clones & roles",
      "Dedicated success manager",
      "Custom clone training",
      "Private talent pool",
      "API access",
      "SLA & compliance support",
    ],
    cta: "Contact us",
    href: "mailto:hello@surescreen.com.au",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-sage-900 mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-warm-600 leading-relaxed">
            No per-candidate fees. No surprise costs. Pay per role or per month
            — whichever fits how you hire.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-2xl flex flex-col ${
                plan.highlight
                  ? "bg-sage-900 border-2 border-sage-500"
                  : "bg-white border border-warm-200"
              }`}
            >
              {plan.highlight && (
                <span className="self-start mb-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-sage-500 text-white">
                  Most popular
                </span>
              )}
              <p
                className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                  plan.highlight ? "text-sage-400" : "text-warm-500"
                }`}
              >
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className={`text-3xl font-semibold ${
                    plan.highlight ? "text-white" : "text-sage-900"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-sage-400" : "text-warm-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <p
                className={`text-sm mb-6 ${
                  plan.highlight ? "text-sage-300" : "text-warm-600"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlight ? "text-sage-400" : "text-sage-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-sage-200" : "text-warm-700"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`text-center px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-sage-500 text-white hover:bg-sage-400"
                    : "border border-sage-300 text-sage-700 hover:bg-sage-50"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-warm-500 mt-6">
          All pricing in AUD. Launch pricing — locked in for early adopters.
        </p>
      </div>
    </section>
  );
}
