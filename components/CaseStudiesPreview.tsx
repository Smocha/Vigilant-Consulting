type Study = {
  sector: string;
  title: string;
  challenge: string;
  approach: string;
};

type Props = {
  studies: Study[];
};

type StudyMeta = {
  type: string;
  tags: string[];
};

function getStudyMeta(study: Study): StudyMeta {
  const sector = study.sector.toLowerCase();
  const title = study.title.toLowerCase();

  if (sector.includes("health") || title.includes("readiness")) {
    return {
      type: "Compliance Readiness",
      tags: [
        "Gap Assessment",
        "Remediation Roadmap",
        "Incident Planning",
      ],
    };
  }

  if (
    sector.includes("financial") ||
    title.includes("cloud") ||
    title.includes("access")
  ) {
    return {
      type: "Cloud Security",
      tags: [
        "Cloud Review",
        "Identity & Access",
        "Exposure Analysis",
      ],
    };
  }

  if (
    sector.includes("business") ||
    title.includes("incident") ||
    title.includes("response")
  ) {
    return {
      type: "Incident Readiness",
      tags: [
        "Tabletop Exercise",
        "Response Playbook",
        "Escalation Mapping",
      ],
    };
  }

  return {
    type: "Security Assessment",
    tags: [
      "Assessment",
      "Remediation",
      "Validation",
    ],
  };
}

export default function CaseStudiesPreview({ studies }: Props) {
  return (
    <section className="bg-[#0d1b2a] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#52d48a]">
            Representative Scenarios
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built for the problems that actually show up.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8a9ba8] md:text-base">
            Different environments create different risks. These examples show
            how Vigilant turns common security problems into defined actions and
            usable deliverables.
          </p>
        </div>

        {/* Scenario cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {studies.map((study) => {
            const meta = getStudyMeta(study);

            return (
              <article
                key={study.title}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.09] bg-[#132536] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#52d48a]/30 hover:bg-[#152a3c]"
              >
                {/* Card identity */}
                <div className="mb-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#52d48a]">
                    {study.sector}
                  </p>

                  <p className="mt-2 text-xs font-medium text-[#8fa2b2]">
                    {meta.type}
                  </p>

                  <h3 className="mt-4 text-lg font-semibold leading-6 text-white">
                    {study.title}
                  </h3>
                </div>

                {/* Problem */}
                <div className="border-t border-white/[0.07] pt-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#718596]">
                    The Problem
                  </p>

                  <p className="text-sm leading-6 text-[#9aabb9]">
                    {study.challenge}
                  </p>
                </div>

                {/* Work performed */}
                <div className="mt-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#718596]">
                    What We Did
                  </p>

                  <p className="text-sm leading-6 text-[#9aabb9]">
                    {study.approach}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="mt-auto pt-8">
                  <div className="border-t border-white/[0.07] pt-5">
                    <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#647888]">
                      Representative Deliverables
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex min-h-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] px-2 py-2 text-center text-[9px] leading-4 text-[#8fa2b2]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}