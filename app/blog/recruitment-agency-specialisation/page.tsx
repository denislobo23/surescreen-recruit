import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "The Generalist Consultant Problem: Why Recruitment Agencies Struggle With Specialised Roles | SureScreen Recruit",
  description: "A recruitment consultant managing Business Analyst, Project Manager, and Developer roles simultaneously cannot be a deep expert across all three. This structural flaw costs companies great hires every day.",
};

export default function AgencyArticle() {
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
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-sage-100 text-sage-700">Industry Analysis</span>
              <span className="text-xs text-warm-400">9 min read · June 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-sage-900 leading-tight mb-4">
              The Generalist Consultant Problem: Why Recruitment Agencies Struggle With Specialised Roles
            </h1>
            <p className="text-lg text-warm-600 leading-relaxed">
              A recruitment consultant managing Business Analyst, Project Manager, and Developer roles simultaneously cannot be a deep expert across all three. This is not a criticism of individuals — it is a structural flaw in how recruitment agencies operate, and it has real consequences for the quality of hires that companies receive.
            </p>
          </div>

          <div className="prose prose-warm max-w-none space-y-6 text-warm-800 leading-relaxed">

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">How Recruitment Agencies Are Structured</h2>
            <p>
              Most mid-size recruitment agencies organise their consultants by broad vertical — technology, finance, legal, healthcare — rather than by specific role type. Within the technology vertical, a consultant might be responsible for placing software developers, business analysts, project managers, data scientists, and UX designers. These are all "technology" roles in the sense that they appear in technology departments. They are otherwise remarkably different disciplines with different skill sets, different career paths, different interview processes, and different criteria for what constitutes outstanding performance.
            </p>
            <p>
              The structure exists for commercial reasons. Clients want a single point of contact at an agency. They do not want to manage relationships with five different specialist consultants for five different role types. The agency, in turn, wants to maximise the revenue-generating capacity of each consultant by giving them as broad a portfolio as possible. A consultant who can only place one type of role is a commercial liability; one who can handle an entire department is an asset.
            </p>
            <p>
              This commercial logic is sound. The consequence for hiring quality is less positive.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">What Expertise Actually Requires</h2>
            <p>
              Consider what it takes to properly assess a senior Business Analyst candidate. You need to understand what the BA role involves at a senior level — which is not obvious from the job title. Senior BAs at mature organisations operate almost as internal consultants: they scope complex problems, facilitate alignment between stakeholders who have competing agendas, build business cases that can survive financial scrutiny, and manage the human dimensions of change. They are not simply requirements gatherers or process documenters.
            </p>
            <p>
              To assess whether a candidate is genuinely operating at this level, you need to ask questions that probe depth rather than surface. You need to know what good looks like — what the difference is between a BA who says the right things about stakeholder management and one who has actually navigated a politically complex programme. You need to recognise when an answer is rehearsed versus when it reflects genuine experience. You need to know which follow-up questions will reveal the substance behind a polished response.
            </p>
            <p>
              This knowledge is not acquired by reading a job description or reviewing a few resumes. It is accumulated through years of specialised focus — speaking to dozens of BAs, placing candidates into roles and tracking their performance, building a mental model of what distinguishes the top decile from the solid average. It is, in short, domain expertise — and domain expertise takes time to build.
            </p>
            <p>
              A consultant managing fifteen different role types across a technology vertical does not have that expertise for any individual role type. They may be highly capable, well-organised, and professionally diligent. But they are operating as a generalist in a context that rewards specialisation.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">The Screening Consequences</h2>
            <p>
              When a generalist consultant screens candidates for a specialised role, they rely on the signals that are visible without domain expertise: resume credentials, company names, stated years of experience, and whether the candidate presents well in a brief phone screen. These are not worthless signals — a candidate with a strong employment history at respected organisations is a reasonable bet. But they are insufficient signals for making confident hiring recommendations at the senior level.
            </p>
            <p>
              The phone screen conducted by a generalist consultant is typically 20 to 30 minutes long and covers career history, motivation, and availability. It does not typically include the kind of structured, probing questions that distinguish genuine capability from polished presentation. A candidate who has interviewed for many roles and is skilled at presenting themselves well will perform better in this format than a candidate who is a stronger practitioner but less experienced at packaging their experience for recruiters.
            </p>
            <p>
              The shortlist that reaches the hiring manager is therefore filtered primarily on presentation rather than substance. The hiring manager, who does have domain expertise, may interview three or four candidates and feel that none of them is quite right — without understanding that several stronger candidates were filtered out earlier in the process by a consultant who did not have the expertise to recognise their quality.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">The Incentive Misalignment</h2>
            <p>
              Recruitment agencies are paid on placement. A consultant's commercial incentive is to make a placement — ideally quickly, and ideally with a candidate who will stick in the role long enough that the fee is not subject to a rebate. This incentive is not perfectly aligned with the client's interest in finding the best possible candidate.
            </p>
            <p>
              A consultant who has two candidates who are both placeable — one strong, one adequate — has a commercial incentive to present both and let the client choose, rather than to spend additional time sourcing a stronger candidate. The additional sourcing time has a cost (the consultant's time) and an uncertain benefit (the stronger candidate may not accept the offer, or the client may choose the adequate candidate anyway). The rational commercial choice is to present what is available and move toward closure.
            </p>
            <p>
              This is not unique to recruitment — it is a standard principal-agent problem that arises whenever an intermediary is paid on transaction completion rather than outcome quality. But it is worth making explicit because it explains why good agencies still routinely fail to deliver the best possible candidates: their incentives encourage speed and volume over thoroughness.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">When Agencies Work Well</h2>
            <p>
              It would be unfair and inaccurate to suggest that recruitment agencies do not add value. The best specialist agencies — those that genuinely focus on a narrow niche — build deep networks and genuine expertise that is difficult to replicate in-house. A technology recruitment firm that has placed senior developers for fifteen years has accumulated a network of passive candidates, a nuanced understanding of the talent market, and genuine expertise in assessing technical capability that most internal HR teams cannot match.
            </p>
            <p>
              The problem is not agencies per se — it is generalism. A specialist developer recruiter with deep technical networks and genuine assessment capability is genuinely valuable. The same consultant, asked to also handle BA, PM, and data science roles, becomes less valuable for each of those role types because their expertise and attention is diluted.
            </p>
            <p>
              The commercial pressures that push agencies toward generalism are real and unlikely to change. The question for hiring organisations is how to get the depth of assessment they need without depending entirely on an intermediary whose structural incentives and expertise limitations may not serve their interests.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">Embedding Domain Expertise in the Interview</h2>
            <p>
              The fundamental advantage of an AI hiring manager clone over a generalist recruiter is that the domain expertise is not borrowed — it is embedded. When a hiring manager who has spent fifteen years working with Business Analysts configures an interview clone, they are encoding their knowledge of what great looks like into every question the clone asks. The clone does not have to learn about Business Analysis from a job description; it inherits the hiring manager's accumulated understanding of the role.
            </p>
            <p>
              This means the interview can do what a generalist recruiter's phone screen cannot: probe genuinely, recognise depth, identify the gap between a candidate who uses the right vocabulary and one who has the underlying capability, and ask the follow-up question that reveals whether the initial answer was substantive or rehearsed.
            </p>
            <p>
              The result is a shortlist that is filtered on what the hiring manager actually cares about — not on what is visible in a 20-minute phone screen conducted by someone who is also placing developers and project managers this week.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">Key Takeaways</h2>
            <ul className="list-disc pl-5 space-y-2 text-warm-700">
              <li>Recruitment agencies are structured for commercial efficiency, not specialisation depth</li>
              <li>Generalist consultants cannot possess deep expertise across all the role types they manage</li>
              <li>Phone screens without domain expertise filter on presentation, not capability</li>
              <li>Agency incentive structures favour speed and volume over thorough candidate quality assessment</li>
              <li>Embedding hiring manager expertise in the interview process removes dependence on generalist intermediaries</li>
            </ul>

            <div className="mt-12 p-6 rounded-2xl bg-sage-50 border border-sage-200">
              <p className="font-semibold text-sage-900 mb-2">Your expertise. Embedded in every interview.</p>
              <p className="text-sm text-sage-700 mb-4">
                SureScreen Recruit clones your hiring manager's domain expertise into an AI that interviews every candidate with the depth and specificity that a generalist recruiter cannot provide.
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
