import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0f1f2d] px-6 py-20 text-center lg:px-12">
      <h2 className="mb-4 text-4xl font-bold text-white">Ready to start the conversation?</h2>
      <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-[#8a9ba8]">No pressure, no pitch deck on the first call. Just an honest conversation about where you are and whether we are the right fit to help.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/contact" className="rounded-full bg-[#52d48a] px-6 py-3.5 text-sm font-semibold text-[#0a1a0f] no-underline transition hover:bg-[#6de09a]">Request a consultation</Link>
        <Link href="/services" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-[#e8edf2] no-underline transition hover:border-white/40 hover:text-white">See all services</Link>
      </div>
    </section>
  );
}
