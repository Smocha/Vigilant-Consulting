import TrustedBy from "../components/TrustedBy";
import WhyVigilant from "../components/WhyVigilant";
import Services from "../components/Services";
import InsightsPreview from "../components/InsightsPreview";
import CTASection from "../components/CTASection";
import ContactForm from "../components/ContactForm";
import EngineeringPortfolio from "../components/EngineeringPortfolio";
import CaseStudiesPreview from "../components/CaseStudiesPreview";
import Hero from "../components/Hero";

const representativeStudies = [
  {
    sector: "Healthcare",
    title: "Readiness review for a regulated care environment",
    challenge:
      "Leadership understood they had compliance obligations but needed help translating requirements into operational priorities.",
    approach:
      "We conducted a plain-language risk assessment, mapped exposed areas to business impact, and produced a prioritized remediation roadmap.",
    outcome:
      "The organization left with a documented posture, a working response plan, and a clear 90-day action list.",
  },
  {
    sector: "Financial services",
    title: "Cloud security and access review for a growing firm",
    challenge:
      "A scaling firm had accumulated cloud services and user permissions with no structured review process.",
    approach:
      "We reviewed cloud architecture, permissions, and external exposure, then delivered governance recommendations by effort and impact.",
    outcome:
      "Leadership gained a clear picture of data exposure and a recurring review cadence to prevent future drift.",
  },
  {
    sector: "Growing business",
    title: "Incident response preparation for a lean team",
    challenge:
      "A fast-growing company had no documented response plan, escalation clarity, or leadership decision map.",
    approach:
      "We ran a tabletop exercise, mapped communication flows, identified vendor contacts, and built a simplified playbook.",
    outcome:
      "The team gained a working response document, defined roles, and confidence to act quickly if an event occurred.",
  },
];

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

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0d1b2a]">
      <Hero />

      <TrustedBy />

      <WhyVigilant />

      <Services />

      <CaseStudiesPreview studies={representativeStudies} />

      <EngineeringPortfolio />

      <InsightsPreview items={insightCards} />

      <CTASection />

      <ContactForm />
    </main>
  );
}