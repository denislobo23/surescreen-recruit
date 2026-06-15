import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Why Amazon Scrapped Its AI Hiring Tool | SureScreen Recruit Blog",
  description: "In 2018, Amazon quietly shut down an internal AI recruiting system that had been systematically disadvantaging women. The story reveals the dangers of volume recruiting done wrong.",
};

export default function AmazonArticle() {
  return (
    <main>
      <Navbar />
      <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 min-h-screen">
        <div className="max-w-2xl mx-auto">

          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-warm-500 hover:text-sage-600 transition-colors mb-8">
            <ArrowLeft size={14} />
            Back to blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blush-100 text-blush-700">Case Study</span>
              <span className="text-xs text-warm-400">8 min read · June 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-sage-900 leading-tight mb-4">
              Why Amazon Scrapped Its AI Hiring Tool — And What It Reveals About Volume Recruiting
            </h1>
            <p className="text-lg text-warm-600 leading-relaxed">
              In 2018, Amazon quietly shut down an internal AI recruiting system that had been systematically disadvantaging women. The story is not just about bias — it is about what happens when hiring volume becomes unmanageable and organisations reach for automation before they have solved the underlying problem.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-warm max-w-none space-y-6 text-warm-800 leading-relaxed">

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">The Background</h2>
            <p>
              Between 2014 and 2017, Amazon's machine learning team built what they hoped would be a revolutionary hiring tool — a system that could review resumes and score candidates on a scale of one to five stars, much like the company's product review system. The idea was straightforward: train the AI on ten years of historical hiring data and let it identify patterns that predicted successful Amazon employees.
            </p>
            <p>
              The scale of Amazon's hiring at the time made this ambition understandable. The company was processing tens of thousands of applications across hundreds of roles simultaneously. Their recruiting team was overwhelmed. The volume problem was real, urgent, and growing faster than their headcount could accommodate.
            </p>
            <p>
              By 2015, the team realised something was wrong. The model was not neutral. It had learned to penalise resumes that included the word "women's" — as in "women's chess club" or "women's university." It downgraded graduates of all-women's colleges. It had, in effect, learned that Amazon historically hired mostly men for technical roles and concluded that being male was a predictor of success.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">Why This Happened</h2>
            <p>
              The bias was not accidental in the sense of being a coding error. It was a direct product of what the system was trained on. Amazon's historical hiring data reflected a decade of decisions made by humans who had their own biases — conscious and unconscious. The AI did not introduce bias; it industrialised it and applied it at scale.
            </p>
            <p>
              But the deeper issue is why the system existed in the first place. Amazon needed to automate because volume had made human review unsustainable. They were not trying to cut corners on quality — they were drowning in applications and needed a way to surface candidates faster. The automation was a symptom of a volume problem that had no good solution at the time.
            </p>
            <p>
              When you receive 50,000 applications for 500 roles, you have two choices with traditional methods: hire enough reviewers to properly assess each one (expensive, slow, and still subject to human fatigue and bias), or automate the first filter (fast, scalable, but dangerously dependent on the quality of your training data and the assumptions baked into your model).
            </p>
            <p>
              Amazon chose automation. The result was a system that made confident, fast, systematic errors — at scale.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">The Attempts to Fix It</h2>
            <p>
              Amazon's engineers were not oblivious. Once the gender bias was identified, they attempted to correct the model — removing explicitly gendered terms from its consideration, retraining on adjusted data sets, adding manual override mechanisms. But as each fix was applied, new problems emerged. The system found proxy variables: certain university names, certain extracurricular activities, certain phrasing patterns that correlated with gender without explicitly mentioning it.
            </p>
            <p>
              By 2017, internal confidence in the system had deteriorated to the point where recruiters were advised not to use its recommendations in isolation. By 2018, the project was quietly shelved. Amazon confirmed the tool's existence to Reuters, noting that it was never actually used to evaluate candidates — a claim that was met with some scepticism given the multi-year investment and the timeline of events.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">What This Means for Every Hiring Organisation</h2>
            <p>
              The Amazon story is often discussed as a cautionary tale about AI bias. That framing is correct but incomplete. The more important lesson is about the conditions that made the flawed automation seem necessary in the first place.
            </p>
            <p>
              When application volume becomes unmanageable, organisations make compromises. They automate keyword filtering, which eliminates candidates based on the presence or absence of specific terms regardless of equivalent experience. They rely on resume screening software that scores candidates on criteria that were never designed to predict job performance. They hire junior recruiters to triage volume at the cost of domain expertise. Or — as Amazon did — they build sophisticated AI systems that inherit all of the flaws of the historical decisions they were trained on.
            </p>
            <p>
              None of these compromises are made by bad people trying to do bad things. They are made by good people trying to solve an impossible problem with inadequate tools.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">The Problem With Resume Screening as a First Filter</h2>
            <p>
              At its core, Amazon's failed tool was trying to do something that resume screening — human or automated — is fundamentally ill-suited to do: assess whether a person can do a job based on a document that describes what they have done before.
            </p>
            <p>
              Resumes are marketing documents. They are curated, structured, and optimised by people who know that a human or machine will make a judgement within seconds. The information they contain is self-reported, unverified, and presented in whatever format the candidate believes will be most persuasive to their audience. They tell you almost nothing about how a person thinks under pressure, how they communicate in complex situations, or whether their stated experience is deep or superficial.
            </p>
            <p>
              The right first filter is not a document review — it is a conversation. Specifically, a structured conversation with someone who understands the role deeply enough to ask the questions that reveal genuine capability. The problem has always been that such conversations take time, and time is exactly what high-volume hiring does not have.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">A Different Approach</h2>
            <p>
              The solution to Amazon's problem — and to the broader volume problem in hiring — is not better resume screening. It is replacing resume screening with something more revealing: a structured interview conducted by an intelligence that actually understands the role.
            </p>
            <p>
              When a hiring manager's expertise and interview approach is embedded into an AI system, that system can do something Amazon's tool could never do: ask follow-up questions, probe inconsistencies, test whether a candidate's stated Salesforce experience is surface-level or substantive, and assess the quality of their thinking rather than the keywords on their resume.
            </p>
            <p>
              This is the approach that SureScreen Recruit is built on. Not automated resume scoring — which is where Amazon went wrong — but automated interviewing, conducted by a clone of the hiring manager, available to every candidate at any time, without the bias that comes from historical hiring patterns or the fatigue that comes from reviewing hundreds of documents in sequence.
            </p>
            <p>
              Amazon's story is a reminder that solving the volume problem badly is worse than not solving it at all. The goal is not to automate faster — it is to interview better.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-10 mb-3">Key Takeaways</h2>
            <ul className="list-disc pl-5 space-y-2 text-warm-700">
              <li>Volume overload drove Amazon to automate in a way that industrialised existing bias rather than eliminating it</li>
              <li>Resume screening — human or AI — is the wrong first filter because resumes are marketing documents, not capability assessments</li>
              <li>The fix is not better screening software — it is replacing screening with structured, expert-led interviews that can scale</li>
              <li>AI interviewing trained on role expertise, not historical hiring outcomes, avoids the bias trap entirely</li>
            </ul>

            {/* CTA */}
            <div className="mt-12 p-6 rounded-2xl bg-sage-50 border border-sage-200">
              <p className="font-semibold text-sage-900 mb-2">SureScreen Recruit takes a different approach</p>
              <p className="text-sm text-sage-700 mb-4">
                Our AI hiring manager clone interviews every candidate based on role expertise — not historical hiring patterns. No resume scoring. No keyword filtering. Just structured conversations that reveal genuine capability.
              </p>
              <div className="flex gap-3">
                <a href="/companies" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sage-500 text-white text-sm font-medium hover:bg-sage-600 transition-colors">
                  Register your company
                  <ArrowRight size={14} />
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
