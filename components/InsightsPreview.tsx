type Insight = { category: string; title: string; summary: string };

type Props = { items: Insight[] };

export default function InsightsPreview({ items }: Props) {
  return (
    <section className="bg-[#0a1520] px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[300px_1fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#52d48a]">Insights</p>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white">Teach before you sell.</h2>
          <p className="text-sm leading-7 text-[#8a9ba8]">Security decisions are better when buyers understand the landscape. We share practical perspectives so you can evaluate your situation clearly.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/[0.07] bg-[#132030] p-6">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52d48a]">{item.category}</p>
              <h3 className="mb-3 text-base font-semibold leading-snug text-white">{item.title}</h3>
              <p className="mb-5 text-sm leading-6 text-[#8a9ba8]">{item.summary}</p>
              <span className="text-xs font-medium text-[#6a7f8c]">Coming soon →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
