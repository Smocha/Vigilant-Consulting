const services = [
  { outcome: 'Find the gaps before attackers or auditors do.', title: 'Cybersecurity assessments', description: 'We evaluate your environment against real-world threat patterns, then deliver a prioritized action plan your team can execute.' },
  { outcome: 'Prepare the team before a crisis forces decisions.', title: 'Incident readiness', description: 'Build escalation paths, communication protocols, and tabletop exercises so your team responds with confidence.' },
  { outcome: 'Adopt AI with stronger guardrails and accountability.', title: 'AI security and governance', description: 'Establish data-handling boundaries, access controls, and governance structures before AI creates blind spots.' },
  { outcome: 'Build better habits, policies, and ownership.', title: 'Security training and advisory', description: 'Develop training programs and security culture initiatives that stick, from staff awareness to executive decision-making.' },
];

export default function Services() {
  return (
    <section className="bg-[#0a1520] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#52d48a]">Featured solutions</p>
        <h2 className="mb-4 text-4xl font-bold text-white">What gets better when you work with us.</h2>
        <p className="mb-12 max-w-3xl text-base leading-8 text-[#8a9ba8]">We lead with the outcome your organization actually needs, then build the path to get there.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-white/[0.07] bg-[#132030] p-7">
              <p className="mb-3 text-sm font-medium text-[#52d48a]">{service.outcome}</p>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mb-5 text-sm leading-7 text-[#8a9ba8]">{service.description}</p>
              <a href="/contact" className="text-sm font-semibold text-[#e8edf2] no-underline hover:text-[#52d48a]">Talk through this service →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
