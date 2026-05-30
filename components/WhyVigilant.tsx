const pillars = [
  { label: 'Security clarity', title: 'Turn technical risk into business decisions.', body: 'We use plain language and executive-friendly framing so your team understands what matters, why it matters, and what to do next.' },
  { label: 'Operational discipline', title: 'Bring structure to assessments, preparedness, and response.', body: 'We help teams move from reactive chaos to repeatable, defensible security practices scaled to your organization.' },
  { label: 'AI-aware advisory', title: 'Adopt new technology with guardrails, not hype.', body: 'We help you get ahead of data exposure, governance gaps, and access control before they become incidents.' },
];

export default function WhyVigilant() {
  return (
    <section className="bg-[#0d1b2a] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#52d48a]">Why Vigilant Consulting</p>
        <h2 className="mb-4 max-w-4xl text-4xl font-bold leading-tight text-white">You deserve an advisor who speaks plainly, not one who sells fear.</h2>
        <p className="mb-12 max-w-3xl text-base leading-8 text-[#8a9ba8]">Most organizations do not have a security problem — they have a clarity problem. We translate technical complexity into practical decisions your leadership team can act on.</p>
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.label} className="rounded-2xl border border-white/[0.07] bg-[#132030] p-7">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52d48a]">{pillar.label}</p>
              <h3 className="mb-3 text-lg font-semibold leading-snug text-white">{pillar.title}</h3>
              <p className="text-sm leading-7 text-[#8a9ba8]">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
