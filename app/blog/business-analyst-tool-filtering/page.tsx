import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "The Salesforce vs SAP Problem: How Narrow Job Briefs Eliminate Your Best Candidates | SureScreen Recruit",
  description: "Outstanding Business Analysts with decade-long careers are being filtered out because they use SAP instead of Salesforce. The tool is different. The skill is identical.",
};

export default function BriefArticle() {
  return (
    <main>
      <Navbar />
      <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 min-h-screen">
        <div className="max-w-2xl mx-auto">

          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-warm-500 hover:text-sage-600 transition-colors mb-8">
            <ArrowLeft size={14} />
            Back to blog
          </Link>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-warm-200 text-warm-800">Hiring Practice</span>
              <span className="text-xs text-warm-400">10 min read · June 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-sage-900 leading-tight mb-4">
              The Salesforce vs SAP Problem: How Narrow Job Briefs Are Eliminating Your Best Candidates
            </h1>
            <p className="text-lg text-warm-600 leading-relaxed">
              Across Business Analyst communities and professional forums, the same story repeats with striking consistency: outstanding professionals with ten or more years of relevant experience are being automatically filtered out of roles because their resume names SAP where the job ad asks for Salesforce. The tool is different. The underlying skill — requirements gathering, stakeholder management, process mapping, business case development — is essentially identical.
            </p>
          </div>

          <div className="prose prose-warm max-w-none space-y-6 text-warm-800 leading-relaxed">

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">How Job Briefs Become Narrow</h2>
            <p>
              Understanding why job briefs become so specific requires understanding how they are typically written. In most organisations, a job brief begins with a hiring manager who has a genuine need — they need a Business Analyst who can work on their CRM implementation, understand their technical environment, and communicate effectively with both the business and the development team.
            </p>
            <p>
              That hiring manager communicates this need to HR or an internal recruiter, who translates it into a job description. The recruiter, under time pressure and without deep domain knowledge, often uses a previous job description as a template — either from the same organisation or from a competitor's publicly posted role. They update the title, the department, and the compensation range. The technology requirements — Salesforce, SAP, ServiceNow, Workday, whatever was in the original — often carry over unchanged.
            </p>
            <p>
              Sometimes the hiring manager reviews the final job description carefully and corrects the technology requirements. More often, they do not. They are busy. The job description looks reasonable. They trust that the recruiter has handled it. The result is a job ad that specifies Salesforce experience as a requirement for a role where Salesforce experience is, at most, a preference — and where SAP or Dynamics or any other enterprise CRM platform would serve equally well.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">The Automated Filter Problem</h2>
            <p>
              This would be a manageable problem if every application were reviewed by a human who could exercise judgement about equivalent experience. But as we have established, high-volume hiring makes thorough human review impossible. The first filter is automated — an applicant tracking system (ATS) that scores or eliminates candidates based on keyword matching.
            </p>
            <p>
              An ATS scanning for "Salesforce" will not flag a resume that says "SAP CRM" unless it has been specifically configured to recognise equivalences — which most are not, because configuring those equivalences requires domain knowledge that the people configuring the ATS typically do not have. The result is that the keyword filter eliminates candidates before any human makes a judgement call.
            </p>
            <p>
              By the time the remaining applications reach a human reviewer, the population has already been filtered for tool-specific experience. The reviewer sees a set of candidates that all have Salesforce experience, and they make their selection from that set. They never know what was filtered out upstream. The outstanding SAP Business Analyst never gets a second look.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">What Business Analysts Actually Do</h2>
            <p>
              To understand why this filtering is so wasteful, it helps to understand what Business Analysis actually involves at a high level of competence. A senior Business Analyst is skilled at eliciting requirements from stakeholders who may not know exactly what they want. They can translate between business language and technical language. They can map existing processes, identify inefficiencies, and design improved future states. They can build a compelling business case, manage competing stakeholder interests, and maintain momentum on a project through ambiguity and change.
            </p>
            <p>
              These skills are developed over years of practice and are largely tool-agnostic. A BA who has spent five years working with SAP has a deep understanding of enterprise systems, data flows, integration challenges, and change management. Moving to a Salesforce environment requires learning a new interface and a new data model — typically a matter of weeks for an experienced practitioner — but does not require relearning how to be a Business Analyst.
            </p>
            <p>
              The same logic applies across the technology landscape. An experienced project manager who has used MS Project for ten years can learn Jira in a week. A data analyst who has worked in SQL Server can learn BigQuery in a month. A developer who has worked in Java can learn Python in a few months. Tool experience is learnable. The underlying capability — the judgement, the communication skill, the domain knowledge, the pattern recognition that comes from years of practice — is not learnable in weeks. It is the scarce resource. And it is the one that keyword filtering is most likely to eliminate.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">The Community Evidence</h2>
            <p>
              Professional communities for Business Analysts — including the BA Times forum, the International Institute of Business Analysis community, and the r/businessanalyst subreddit — contain hundreds of threads from practitioners describing exactly this experience. The pattern is remarkably consistent regardless of geography or industry.
            </p>
            <p>
              A typical thread: a BA with twelve years of experience, strong delivery record, and excellent references applies for a role that is clearly within their capability. They are rejected at the application stage. They later learn — through a recruiter connection or a LinkedIn message — that the ATS filtered them because they did not have Salesforce experience. The hiring manager, when they eventually speak to someone who knows the candidate, is frustrated — Salesforce was in the job ad as a requirement but the role really just needs someone who understands CRM systems. That person absolutely would have been considered.
            </p>
            <p>
              The frustration runs in both directions. Hiring managers are not getting the candidates they want. Experienced BAs are not getting the opportunities they deserve. The keyword filter is failing both sides of the table simultaneously.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">Why Organisations Do Not Fix This</h2>
            <p>
              The obvious question is: if this problem is so well understood, why does it persist? The answer lies in the volume problem described in our previous articles. When you are receiving 400 applications for a role, keyword filtering is not an optional extra — it is a survival mechanism. Without it, the hiring team cannot function.
            </p>
            <p>
              The alternative — having a domain expert manually review every application to assess whether equivalent experience qualifies — requires time that does not exist in a high-volume environment. It also requires that the reviewer have enough domain knowledge to recognise equivalences, which is not guaranteed in an HR function that handles roles across many disciplines.
            </p>
            <p>
              So the keyword filter stays, because removing it creates a worse problem than keeping it. The organisation accepts the loss of some good candidates as a necessary cost of managing volume. It is a rational decision given the constraints — but it is a decision that has a real cost that rarely gets measured.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">The Measurement Problem</h2>
            <p>
              Organisations do not typically measure the cost of candidates they did not hire. They measure time-to-hire, cost-per-hire, offer acceptance rate, and first-year retention. They do not have a metric for "outstanding candidate eliminated by keyword filter." That candidate is invisible — they never made it into the system, so they never appear in any report.
            </p>
            <p>
              This invisibility makes the problem self-perpetuating. If you cannot see the candidates you are missing, you cannot quantify the cost of missing them. If you cannot quantify the cost, you cannot make a business case for fixing the filter. The keyword filter continues because no one can prove it is failing — only that it is fast and cheap to operate.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">An Interview-First Approach</h2>
            <p>
              The solution to the narrow brief problem is to move the point of assessment earlier and make it richer. Instead of filtering on resume keywords and then interviewing a small subset of survivors, the goal should be to conduct a meaningful assessment of every applicant — one that can distinguish between a candidate with the stated tool experience and no underlying capability, and a candidate with equivalent tool experience and ten years of demonstrated performance.
            </p>
            <p>
              A structured interview conducted by an AI that understands the role — that knows what good Business Analysis looks like, what questions reveal depth versus superficiality, what follow-up to ask when an answer is vague — can make that distinction. It does not rely on the presence or absence of "Salesforce" in a resume. It asks the candidate about their CRM experience, probes the complexity of the implementations they have worked on, tests their understanding of data migration challenges, and assesses whether their stakeholder management approach is genuine or rehearsed.
            </p>
            <p>
              That is the assessment that hiring managers actually want. The keyword filter exists only because there has been no way to conduct that assessment at scale — until now.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">Key Takeaways</h2>
            <ul className="list-disc pl-5 space-y-2 text-warm-700">
              <li>Job briefs become unnecessarily narrow through a process of template copying and insufficient review</li>
              <li>Automated keyword filtering eliminates candidates before human judgement is ever applied</li>
              <li>Tool experience is learnable; underlying analytical capability is the scarce resource worth identifying</li>
              <li>Organisations cannot measure what they are missing because filtered candidates are invisible</li>
              <li>Interview-first assessment replaces keyword filtering with capability assessment at scale</li>
            </ul>

            <div className="mt-12 p-6 rounded-2xl bg-sage-50 border border-sage-200">
              <p className="font-semibold text-sage-900 mb-2">Stop filtering on keywords. Start assessing capability.</p>
              <p className="text-sm text-sage-700 mb-4">
                SureScreen Recruit's AI hiring manager clone interviews every candidate on the substance of their experience — not the keywords on their resume. The outstanding SAP Business Analyst gets the same shot as the Salesforce specialist.
              </p>
              <div className="flex gap-3">
                <a href="/companies" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sage-500 text-white text-sm font-medium hover:bg-sage-600 transition-colors">
                  Register your company <ArrowRight size={14} />
                </a>
                <a href="/blog" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-sage-300 text-sage-700 text-sm font-medium hover:bg-sage-50 transition-colors">
                  More articles
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
