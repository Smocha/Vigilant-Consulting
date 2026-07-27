import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-[#0d1b2a] px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52d48a]">
            Cybersecurity, AI, and risk advisory
          </p>
          <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-tight text-white md:text-6xl">
            Secure your future with clear, accountable guidance.
          </h1>
          <p className="mb-9 max-w-xl text-base leading-8 text-[#8a9ba8]">
            Vigilant Consulting helps organizations reduce risk, strengthen resilience, and navigate cybersecurity and AI decisions without adding unnecessary complexity or cost.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-[#52d48a] px-6 py-3.5 text-sm font-semibold text-[#0a1a0f] no-underline transition hover:bg-[#6de09a]">
              Book a consultation
            </Link>
            <Link href="/services" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-[#e8edf2] no-underline transition hover:border-white/40 hover:text-white">
              Explore services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Risk assessments', 'Incident readiness', 'AI security guidance'].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-xs text-[#8a9ba8]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#132030] p-8">
          <div className="mb-5 rounded-xl border border-white/[0.06] bg-[#1a2c3d] p-7">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52d48a]">
              Where we start every engagement
            </p>
            <h2 className="mb-3 text-xl font-semibold text-white">Understand first. Recommend second.</h2>
            <p className="text-sm leading-7 text-[#8a9ba8]">
              No cookie-cutter checklists. We learn your environment, your team, and your actual risk tolerance before any advice is given.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['Assess', 'Prepare', 'Respond'].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-[#1a2c3d] px-4 py-3 text-center text-sm text-[#e8edf2]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
