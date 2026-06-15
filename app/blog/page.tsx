import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    slug: "amazon-ai-recruiting-bias",
    title: "Why Amazon Scrapped Its AI Hiring Tool — And What It Reveals About Volume Recruiting",
    excerpt: "In 2018, Amazon quietly shut down an internal AI recruiting system that had been systematically disadvantaging women. The story is not just about bias — it is about what happens when hiring volume becomes unmanageable.",
    category: "Case Study",
    readTime: "8 min read",
    date: "June 2026",
    categoryColor: "bg-blush-100 text-blush-700",
  },
  {
    slug: "linkedin-easy-apply-problem",
    title: "The Easy Apply Effect: How One-Click Applications Are Drowning Hiring Teams",
    excerpt: "LinkedIn's Easy Apply feature was designed to help candidates. But for recruiters, it created a flood of applications that made quality assessment nearly impossible. Here is the data.",
    category: "Industry Analysis",
    readTime: "9 min read",
    date: "June 2026",
    categoryColor: "bg-sage-100 text-sage-700",
  },
  {
    slug: "business-analyst-tool-filtering",
    title: "The Salesforce vs SAP Problem: How Narrow Job Briefs Are Eliminating Your Best Candidates",
    excerpt: "Across Business Analyst communities, the same story repeats: outstanding professionals with decade-long careers are being filtered out because they use SAP instead of Salesforce. The tool is different. The skill is identical.",
    category: "Hiring Practice",
    readTime: "10 min read",
    date: "June 2026",
    categoryColor: "bg-warm-200 text-warm-800",
  },
  {
    slug: "recruitment-agency-specialisation",
    title: "The Generalist Consultant Problem: Why Recruitment Agencies Struggle With Specialised Roles",
    excerpt: "A recruitment consultant managing Business Analyst, Project Manager, and Developer roles simultaneously cannot be a deep expert across all three. This structural flaw is costing companies great hires every day.",
    category: "Industry Analysis",
    readTime: "9 min read",
    date: "June 2026",
    categoryColor: "bg-sage-100 text-sage-700",
  },
  {
    slug: "recency-bias-hiring",
    title: "The Last Resume Wins: How Recency Bias Is Quietly Sabotaging Your Hiring Decisions",
    excerpt: "Academic research confirms what many HR professionals suspect — candidates reviewed later in a sequence are rated more favourably, not because they are stronger, but simply because of when they were seen.",
    category: "Research",
    readTime: "10 min read",
    date: "June 2026",
    categoryColor: "bg-blush-100 text-blush-700",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-warm-50 min-h-screen">
        <div className="max-w-4xl mx-auto">

          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
              Insights
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-sage-900 mb-4">
              The SureScreen Blog
            </h1>
            <p className="text-warm-600 leading-relaxed max-w-2xl">
              Research, case studies, and analysis on why modern hiring is broken — and how AI-powered screening is fixing it.
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block p-6 rounded-2xl bg-white border border-warm-200 hover:border-sage-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${article.categoryColor}`}>
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-warm-400">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                      <span className="text-xs text-warm-400">{article.date}</span>
                    </div>
                    <h2 className="font-semibold text-sage-900 text-lg leading-snug mb-2 group-hover:text-sage-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-warm-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowRight size={18} className="shrink-0 text-warm-300 group-hover:text-sage-500 transition-colors mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
