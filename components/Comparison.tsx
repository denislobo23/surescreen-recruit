import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    label: "Reviews every applicant in depth",
    sureScreen: true,
    agency: false,
    ats: false,
    manual: "partial",
  },
  {
    label: "Cross-checks spoken answers against the resume",
    sureScreen: true,
    agency: false,
    ats: false,
    manual: false,
  },
  {
    label: "Consistent — no fatigue, no recency bias",
    sureScreen: true,
    agency: "partial",
    ats: true,
    manual: false,
  },
  {
    label: "Understands equivalent skills (e.g. SAP vs Salesforce)",
    sureScreen: true,
    agency: "partial",
    ats: false,
    manual: "partial",
  },
  {
    label: "Available to candidates 24/7, no scheduling",
    sureScreen: true,
    agency: false,
    ats: true,
    manual: false,
  },
  {
    label: "Gives every candidate feedback",
    sureScreen: true,
    agency: false,
    ats: false,
    manual: "partial",
  },
  {
    label: "Scales to hundreds of applicants per role",
    sureScreen: true,
    agency: "partial",
    ats: true,
    manual: false,
  },
  {
    label: "Typical cost per hire",
    sureScreen: "Flat monthly fee",
    agency: "15–20% of salary",
    ats: "Software licence",
    manual: "Internal staff time",
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check size={18} className="text-sage-500" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X size={18} className="text-warm-300" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex justify-center">
        <Minus size={18} className="text-warm-400" />
      </div>
    );
  }
  return (
    <p className="text-xs text-warm-600 text-center leading-snug">{value}</p>
  );
}

export default function Comparison() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
            How SureScreen™ compares
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-sage-900 mb-4 text-balance">
            A better way to screen than agents, ATS filters, or manual review
          </h2>
          <p className="text-warm-600 leading-relaxed">
            Every screening method has trade-offs. Here is how SureScreen™
            stacks up against the alternatives most companies rely on today.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-warm-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-warm-50 border-b border-warm-200">
                <th className="text-left p-4 font-semibold text-sage-900 min-w-[220px]">
                  Capability
                </th>
                <th className="p-4 font-semibold text-white bg-sage-500 min-w-[120px]">
                  SureScreen™
                </th>
                <th className="p-4 font-semibold text-warm-700 min-w-[120px]">
                  Recruitment agency
                </th>
                <th className="p-4 font-semibold text-warm-700 min-w-[120px]">
                  ATS keyword filter
                </th>
                <th className="p-4 font-semibold text-warm-700 min-w-[120px]">
                  Manual HR review
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-warm-50/50"}
                >
                  <td className="p-4 text-warm-800 border-t border-warm-100">
                    {row.label}
                  </td>
                  <td className="p-4 border-t border-warm-100 bg-sage-50">
                    <Cell value={row.sureScreen} />
                  </td>
                  <td className="p-4 border-t border-warm-100">
                    <Cell value={row.agency} />
                  </td>
                  <td className="p-4 border-t border-warm-100">
                    <Cell value={row.ats} />
                  </td>
                  <td className="p-4 border-t border-warm-100">
                    <Cell value={row.manual} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-warm-400 mt-4">
          Comparison reflects typical capability of each approach based on industry-reported practices. Individual agencies, tools, and internal teams vary.
        </p>
      </div>
    </section>
  );
}
