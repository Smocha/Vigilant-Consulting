"use client";

import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import WhyVigilant from '../components/WhyVigilant';
import Services from '../components/Services';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import InsightsPreview from '../components/InsightsPreview';
import FounderCard from '../components/FounderCard';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

const representativeStudies = [
  {
    sector: 'Healthcare',
    title: 'Representative readiness review for a regulated care environment',
    challenge:
      'Show how you help leadership understand exposed risk, operational dependencies, and remediation priorities.',
    approach:
      'Describe the assessment scope, risk triage, and advisory work in plain language that a buyer can scan quickly.',
    outcome:
      'Use an approved, factual business result once available. Until then, keep this framed as a representative engagement.',
  },
  {
    sector: 'Financial services',
    title: 'Representative cloud-security and access-review engagement',
    challenge:
      'Frame the client problem as a business concern: visibility gaps, escalation risk, or weak control ownership.',
    approach:
      'Summarize the architecture review, permission analysis, and governance recommendations delivered.',
    outcome:
      'Replace with a permissioned result or customer quote when you are ready to publish named proof.',
  },
  {
    sector: 'Growing business',
    title: 'Representative incident-response preparation sprint',
    challenge:
      'Explain how smaller teams often need clearer playbooks, communication flows, and response readiness.',
    approach:
      'Outline the tabletop, escalation mapping, and prioritized hardening recommendations you provided.',
    outcome:
      'Keep the outcome honest and non-specific until you have approved case-study details to publish.',
  },
];

const insightCards = [
  {
    category: 'Guide',
    title: 'How to scope a security assessment before buying more tools',
    summary:
      'A short article concept focused on inventory, exposure, privileges, and operational ownership.',
  },
  {
    category: 'Incident readiness',
    title: 'What organizations should have documented before an incident happens',
    summary:
      'A practical post that explains contacts, escalation paths, logs, backups, and outside counsel readiness.',
  },
  {
    category: 'AI security',
    title: 'A plain-English starting point for AI governance and data protection',
    summary:
      'A concise explainer that helps buyers understand guardrails, visibility, and accountability before rollout.',
  },
];

export default function Page() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <TrustedBy />
      <WhyVigilant />
      <Services />
      <CaseStudiesPreview studies={representativeStudies} />
      <InsightsPreview items={insightCards} />
      <FounderCard
        name="Founder Name"
        title="Founder, Vigilant Consulting"
        bio="Replace this with your approved public-facing founder bio. The best version should connect leadership, operational discipline, cybersecurity expertise, and a practical advisory style."
        credentials={[
          'Veteran-led perspective',
          'Cybersecurity and network security focus',
          'AI-aware advisory approach',
          'Clear, accountable client communication',
        ]}
      />
      <CTASection />
      <ContactForm />
    </main>
  );
}
