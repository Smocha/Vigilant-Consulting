import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vigilant AI Knowledge Engine",
  description: "AI knowledge platform for semantic retrieval, structured analysis, APIs, and workflow automation.",
  openGraph: {
    title: "Vigilant AI Knowledge Engine",
    description: "AI knowledge platform for controlled retrieval and structured workflow automation.",
    type: "website",
    url: "https://www.vigilantechusa.com/engineering-portfolio/vigilant-ai",
    images: [
      {
        url: "https://www.vigilantechusa.com/vigilant-ai-preview.png",
        width: 1200,
        height: 630,
        alt: "Vigilant AI Knowledge Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vigilant AI Knowledge Engine",
    description: "AI knowledge platform for semantic retrieval, structured analysis, APIs, and workflow automation.",
    images: ["https://www.vigilantechusa.com/vigilant-ai-preview.png"],
  },
};

const technologies = [
  "Python",
  "FastAPI",
  "Linux",
  "Docker",
  "Qdrant",
  "Ollama",
  "n8n",
  "REST APIs",
  "Vector Embeddings",
  "Semantic Search",
];

const capabilities = [
  "Natural-language document search",
  "Semantic vector retrieval",
  "Multi-source knowledge retrieval",
  "Custom AI inference",
  "Source-backed analysis",
  "Structured response generation",
  "Retrieval validation",
  "REST API integration",
  "Workflow automation",
];

export default function VigilantAIPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm text-slate-400 transition 
hover:text-white"
        >
          ← Back to Vigilant Consulting
        </Link>

        <div className="max-w-4xl">
          <span className="mb-5 inline-block rounded-full border 
border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] 
text-slate-300">
            Applied AI Engineering
          </span>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Vigilant AI Knowledge Engine
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 
md:text-xl">
            An AI knowledge platform for document retrieval, semantic 
search,
            structured analysis, and workflow automation.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 
lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase 
tracking-[0.2em] text-slate-400">
              The Challenge
            </p>

            <h2 className="text-3xl font-bold">
              AI needs context, control, and repeatability.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              General-purpose AI systems are powerful, but organizations 
often
              need answers grounded in defined knowledge sources rather 
than
              relying entirely on a model&apos;s internal training. They 
may
              also need those results delivered through applications,
              structured APIs, and repeatable workflows.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase 
tracking-[0.2em] text-slate-400">
              The Approach
            </p>

            <h2 className="text-3xl font-bold">
              Treat the model as one component of the system.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Vigilant AI combines AI inference with controlled 
knowledge
              retrieval, source validation, APIs, and workflow automation.
              Instead of relying only on a model&apos;s internal 
knowledge, the
              platform retrieves current information from defined data 
sources
              and produces structured, traceable outputs.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase 
tracking-[0.2em] text-slate-400">
          Architecture
        </p>

        <h2 className="text-3xl font-bold">How the system works</h2>

        <div className="mt-10 overflow-x-auto rounded-2xl border 
border-white/10 bg-black/20 p-8">
          <pre className="min-w-[520px] text-sm leading-7 text-slate-300 
md:text-base">
{`User / Workflow
       │
       ▼
      n8n
       │
       ▼
    FastAPI
       │
       ▼
Retrieval Engine
    /       \\
   ▼         ▼
Ollama     Qdrant
Local AI   Vector DB
              │
              ▼
       Knowledge Sources`}
          </pre>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-sm font-semibold uppercase 
tracking-[0.2em] text-slate-400">
            Capabilities
          </p>

          <h2 className="text-3xl font-bold">
            From retrieval to automated action
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-xl border border-white/10 
bg-white/[0.03] p-5 text-slate-200"
              >
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase 
tracking-[0.2em] text-slate-400">
          Technology
        </p>

        <h2 className="text-3xl font-bold">Engineering stack</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 
bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase 
tracking-[0.2em] text-slate-400">
              Engineering Work
            </p>

            <h2 className="text-3xl font-bold">
              Built as an operating technical environment.
            </h2>

            <p className="mt-6 leading-7 text-slate-300">
              Development includes Linux service deployment, containerized
              infrastructure, vector database integration, local language 
and
              embedding models, Python retrieval services, FastAPI 
endpoints,
              multi-collection search, document ingestion, metadata 
processing,
              workflow orchestration, and retrieval validation.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Status: Active engineering and technical portfolio project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
