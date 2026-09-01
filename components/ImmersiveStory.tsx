const phases = [
  {
    number: "01",
    label: "Observe",
    title: "Make the invisible visible.",
    copy: "Map the systems, identities, and dependencies that shape your real exposure—not just the items that happen to appear on a checklist.",
    metric: "Continuous context",
  },
  {
    number: "02",
    label: "Prioritize",
    title: "Find the path that matters.",
    copy: "Connect technical findings to business impact, so your team can focus on the few decisions that reduce the most risk.",
    metric: "Action over noise",
  },
  {
    number: "03",
    label: "Strengthen",
    title: "Turn insight into resilience.",
    copy: "Build a practical roadmap around your people, budget, compliance obligations, and operational reality.",
    metric: "Defensible progress",
  },
];

export default function ImmersiveStory() {
  return (
    <section className="vc-story" aria-labelledby="story-heading">
      <div className="vc-story-intro">
        <p className="vc-eyebrow">From signal to decision</p>
        <h2 id="story-heading">
          Security is not a list of alerts.
          <span>It is a connected story.</span>
        </h2>
        <p>
          Vigilant gives leaders the context to understand what is exposed, why
          it matters, and what to do next.
        </p>
      </div>

      <div
        className="vc-path-stage"
        aria-label="Illustration of a risk path becoming a protected outcome"
      >
        <div className="vc-path-grid" aria-hidden="true" />
        <svg
          className="vc-path-line"
          viewBox="0 0 1000 360"
          role="presentation"
          aria-hidden="true"
        >
          <path
            className="vc-path-line-muted"
            d="M55 245 C190 245 195 90 340 90 S520 290 650 245 S795 80 945 122"
          />
          <path
            className="vc-path-line-live"
            d="M55 245 C190 245 195 90 340 90 S520 290 650 245 S795 80 945 122"
          />
        </svg>
        <div className="vc-path-node vc-path-node-1">
          <i />
          External signal<small>Observed</small>
        </div>
        <div className="vc-path-node vc-path-node-2">
          <i />
          Identity<small>Context added</small>
        </div>
        <div className="vc-path-node vc-path-node-3">
          <i />
          Critical system<small>Path validated</small>
        </div>
        <div className="vc-path-node vc-path-node-4 vc-path-node-safe">
          <i />
          Protected outcome<small>Risk reduced</small>
        </div>
        <div className="vc-path-caption">
          <span>Exposure path</span>
          <strong>Context changes the decision.</strong>
        </div>
      </div>

      <div className="vc-phase-list">
        {phases.map((phase) => (
          <article className="vc-phase" key={phase.number}>
            <div className="vc-phase-index">
              <span>{phase.number}</span>
              {phase.label}
            </div>
            <div>
              <h3>{phase.title}</h3>
              <p>{phase.copy}</p>
            </div>
            <strong>
              {phase.metric}
              <span aria-hidden="true">↗</span>
            </strong>
          </article>
        ))}
      </div>

      <div className="vc-proof-band">
        <p>Built for organizations that need clarity before complexity.</p>
        <div>
          <span>
            <b>NIST</b> aligned guidance
          </span>
          <span>
            <b>Mission</b> driven priorities
          </span>
          <span>
            <b>Human</b> accountable decisions
          </span>
        </div>
      </div>
    </section>
  );
}
