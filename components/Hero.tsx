import Link from 'next/link';
import GovernmentVulnerabilityIntel from './GovernmentVulnerabilityIntel';

export default function Hero() {
  return (
    <section className="bg-[#0d1b2a] px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#52d48a]">
            Cybersecurity Engineering & Compliance
          </p>

          <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-tight text-white md:text-6xl">
            Turn security requirements into working systems.
          </h1>

          <p className="mb-9 max-w-xl text-base leading-8 text-[#8a9ba8]">
            We assess your environment, close the technical gaps, and build the
            evidence customers and assessors expect to see.
            
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#52d48a] px-6 py-3.5 text-sm font-semibold text-[#0a1a0f] no-underline transition hover:bg-[#6de09a]"
            >
              Assess readiness
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-[#e8edf2] no-underline transition hover:border-white/40 hover:text-white"
            >
              Explore services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
          
            {[
             'CMMC Readiness — assessment through POA&M',
             'NIST 800-171 — controls & SPRS preparation',
             'Vulnerability Management — remediate & validate',
             'Secure Infrastructure — hardened by design',
           ].map((tag) => (
             <span
               key={tag}
               className="rounded-full border border-white/10 px-4 py-2 text-xs text-[#8a9ba8]"
             >
               {tag}
             </span>
            ))}
          </div>
        </div>

        <GovernmentVulnerabilityIntel />
      </div>
    </section>
  );
}