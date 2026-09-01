import WhyVigilant from "../../components/WhyVigilant";
import Services from "../../components/Services";
import InsightsPreview from "../../components/InsightsPreview";
import CTASection from "../../components/CTASection";

const insightCards = [
  {
    category: "Guide",
    title: "How to scope a security assessment before buying more tools",
    summary:
      "A practical starting point covering asset inventory, privilege exposure, and the questions every assessment should answer.",
  },
  {
    category: "Incident readiness",
    title: "What every organization should document before an incident happens",
    summary:
      "Covers escalation contacts, communication paths, backup verification, log access, and outside counsel readiness.",
  },
  {
    category: "AI security",
    title: "A plain-English starting point for AI governance and data protection",
    summary:
      "Helps leadership understand guardrails, visibility, and accountability before deploying AI tools.",
  },
];

export const metadata = {
  title: "About | Vigilant Consulting",
  description:
    "Learn how Vigilant Consulting approaches cybersecurity engineering, compliance readiness, vulnerability management, and secure infrastructure.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a]">
      <section className="border-b border-white/[0.06] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52d48a]">
            About Vigilant
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Security expertise built around implementation.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#8a9ba8]">
            We help organizations translate cybersecurity requirements,
            technical findings, and security objectives into practical
            remediation, implemented controls, and repeatable processes.
          </p>
        </div>
      </section>

      <WhyVigilant />
      <Services />
      <InsightsPreview items={insightCards} />
      <CTASection />
    </main>
  );
}
