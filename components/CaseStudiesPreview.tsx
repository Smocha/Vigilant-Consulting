type Study = { sector: string; title: string; challenge: string; approach: string; outcome: string };

type Props = { studies: Study[] };

export default function CaseStudiesPreview({ studies }: Props) {
  return (
    <section className="bg-[#0d1b2a] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#52d48a]">Representative engagements</p>
        <h2 className="mb-4 text-4xl font-bold text-white">The types of challenges we are built for.</h2>
        <p className="mb-12 max-w-3xl text-base leading-8 text-[#8a9ba8]">Every organization is different in size, sector, and risk tolerance. Here is how we approach common situations we are brought in to address.</p>
        <div className="grid gap-5 lg:grid-cols-3">
          {studies.map((study) => (
            <article key={study.title} className="rounded-2xl border border-white/[0.07] bg-[#132030] p-7">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52d48a]">{study.sector}</p>
              <h3 className="mb-5 text-lg font-semibold leading-snug text-white">{study.title}</h3>
              {(['challenge', 'approach', 'outcome'] as const).map((key) => (
                <div key={key} className="mb-4">
                  <strong className="mb-1 block text-sm capitalize text-[#c8d5de]">{key}</strong>
                  <p className="text-sm leading-6 text-[#8a9ba8]">{study[key]}</p>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
