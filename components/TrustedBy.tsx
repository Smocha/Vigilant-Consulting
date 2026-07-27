const trustItems = ['Risk-focused', 'Cybersecurity assessments', 'Incident readiness', 'Cloud security', 'AI security guidance', 'Security training'];

export default function TrustedBy() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0f1f2d] px-6 py-8 lg:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#52d48a]">Trusted security guidance</p>
        <div className="flex flex-wrap justify-center gap-3">
          {trustItems.map((item) => (
            <span key={item} className="rounded-xl border border-white/[0.07] bg-[#132030] px-5 py-3 text-sm text-[#b0bec8]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
