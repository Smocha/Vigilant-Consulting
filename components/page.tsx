import TrustedBy from "./TrustedBy";
import WhyVigilant from "./WhyVigilant";
import Services from "./Services";
import InsightsPreview from "./InsightsPreview";
import CTASection from "./CTASection";
import ContactForm from "./ContactForm";
import EngineeringPortfolio from "./EngineeringPortfolio";
import CaseStudiesPreview from "./CaseStudiesPreview";
import Hero from "./Hero";

const representativeStudies = [
  {
    sector: "Healthcare",
    title: "Readiness review for a regulated care environment",
    challenge:
      "Leadership understood their compliance obligations but needed help translating requirements into operational priorities.",
    approach:
      "A plain-language risk assessment, mapped to business impact, with a prioritized remediation roadmap.",
    outcome:
      "A documented security posture, a working incident response plan, and a 90-day action list ready to execute.",
  },
  {
    sector: "Financial services",
    title: "Cloud security and access review for a growing firm",
    challenge:
      "Cloud services and user permissions had accumulated with no structured review process.",
    approach:
      "Reviewed cloud architecture, permissions, and external exposure, then ranked fixes by effort and impact.",
    outcome:
      "A clear picture of data exposure, plus a recurring review cadence to catch drift before it becomes risk.",
  },
  {
    sector: "Growing business",
    title: "Incident response preparation for a lean team",
    challenge:
      "No documented response plan, escalation path, or decision-maker for a security event.",
    approach:
      "A tabletop exercise mapped who talks to whom, when, and with what authority — then built it into a simplified playbook.",
    outcome:
      "A working response document, clear ownership, and the confidence to act fast if something happens.",
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