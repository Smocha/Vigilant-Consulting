"use client";

import Link from "next/link";
import {
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type WheelEvent,
  useMemo,
  useRef,
  useState,
} from "react";

type Category =
  | "All"
  | "Networking"
  | "Systems"
  | "Cloud"
  | "Security"
  | "Compliance"
  | "Automation";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  tags: string[];
  href: string;
  actionLabel?: string;
  image?: string;
};

const categories: Category[] = [
  "All",
  "Networking",
  "Systems",
  "Cloud",
  "Security",
  "Compliance",
  "Automation",
];

const projects: Project[] = [
  {
    title: "Enterprise Network Segmentation Lab",
    category: "Networking",
    description:
      "Designed a segmented network architecture separating users, servers, management systems, and public-facing services with controlled traffic paths.",
    tags: ["VLANs", "Routing", "ACLs", "Segmentation"],
    href: "/engineering-portfolio/secure-network",
    actionLabel: "View diagram",
  },
  {
    title: "Windows Server & Active Directory Build",
    category: "Systems",
    description:
      "Configured Active Directory Domain Services, DNS, DHCP, Group Policy, user administration, and centralized access controls.",
    tags: ["Active Directory", "GPO", "DNS", "DHCP"],
    href: "/engineering-portfolio/windows-server-domain",
    actionLabel: "View architecture",
  },
  {
    title: "NIST 800-171 Readiness Assessment",
    category: "Compliance",
    description:
      "Reviewed security requirements, identified implementation gaps, and translated findings into prioritized technical and documentation actions.",
    tags: ["NIST 800-171", "CMMC", "POA&M"],
    href: "/engineering-portfolio/nist-assessment",
    actionLabel: "View report",
  },
  {
    title: "Vulnerability & Configuration Remediation",
    category: "Security",
    description:
      "Applied secure configuration controls, reviewed technical findings, and documented remediation actions to reduce system exposure.",
    tags: ["STIG", "Hardening", "Remediation"],
    href: "/engineering-portfolio/windows-hardening",
    actionLabel: "View workflow",
  },
  {
    title: "Microsoft Sentinel Security Monitoring Lab",
    category: "Security",
    description:
      "Built a cloud security monitoring environment for centralized log collection, investigation, querying, and detection development.",
    tags: ["Microsoft Sentinel", "KQL", "SIEM"],
    href: "/engineering-portfolio/azure-sentinel",
    actionLabel: "View project",
  },
  {
    title: "Secure Azure Landing Zone",
    category: "Cloud",
    description:
      "Designed an Azure foundation using identity controls, policy enforcement, network segmentation, role-based access, and centralized monitoring.",
    tags: ["Azure Policy", "RBAC", "Networking"],
    href: "/engineering-portfolio/azure-landing-zone",
    actionLabel: "View architecture",
  },
  {
    title: "Enterprise VLAN Design",
    category: "Networking",
    description:
      "Designed a logical VLAN architecture to separate business functions, reduce unnecessary exposure, and control inter-network communication.",
    tags: ["Cisco", "VLANs", "Routing"],
    href: "/engineering-portfolio/vlan-design",
    actionLabel: "View diagram",
  },
  {
    title: "Ubuntu Application Infrastructure",
    category: "Systems",
    description:
      "Configured an Ubuntu virtual server for containerized applications, infrastructure management, and secure remote administration.",
    tags: ["Ubuntu", "VMware", "Linux"],
    href: "/engineering-portfolio/ubuntu-server",
    actionLabel: "View project",
  },
  {
    title: "Containerized Automation Server",
    category: "Automation",
    description:
      "Built a containerized Linux environment using Docker and Portainer to host internal applications and support automation workflows.",
    tags: ["Docker", "Portainer", "Ubuntu"],
    href: "/engineering-portfolio/docker-ai-server",
    actionLabel: "View project",
  },
  {
    title: "Vigilant AI Knowledge Engine",
    category: "Automation",
    description:
      "Built a knowledge platform combining semantic retrieval, local inference, source validation, APIs, and automated security workflows.",
    tags: ["FastAPI", "Qdrant", "Ollama"],
    href: "/engineering-portfolio/vigilant-ai",
    actionLabel: "View architecture",
  },
  {
    title: "Identity & Zero Trust Access Review",
    category: "Security",
    description:
      "Evaluated multifactor authentication, privileged access, role assignments, and identity controls against least-privilege principles.",
    tags: ["MFA", "RBAC", "Zero Trust"],
    href: "/engineering-portfolio/zero-trust-review",
    actionLabel: "View assessment",
  },
  {
    title: "Vigilant Web Platform",
    category: "Cloud",
    description:
      "Designed and deployed a responsive Next.js application with cloud hosting, secure form handling, and production deployment workflows.",
    tags: ["Next.js", "Vercel", "Web Security"],
    href: "/engineering-portfolio/vigilant-consulting-website",
    actionLabel: "View project",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="engineering-card">
      <Link href={project.href} draggable={false}>
        <div
          className={`engineering-visual engineering-visual-${(index % 4) + 1}`}
          style={
            project.image
              ? {
                  backgroundImage: `
                    linear-gradient(
                      to top,
                      rgba(8, 24, 40, 0.9),
                      rgba(8, 24, 40, 0.12)
                    ),
                    url("${project.image}")
                  `,
                }
              : undefined
          }
        >
          <div className="engineering-grid">
            <div className="engineering-bars" />
          </div>

          <span className="engineering-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="engineering-card-body">
          <span className="engineering-pill">{project.category}</span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="engineering-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <span className="engineering-link">
            {project.actionLabel ?? "View project"}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function EngineeringPortfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const trackRef = useRef<HTMLDivElement>(null);

  const dragState = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  const scrollTrack = (direction: "left" | "right") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const amount = Math.max(track.clientWidth * 0.75, 320);

    track.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const selectCategory = (category: Category) => {
    setActiveCategory(category);

    requestAnimationFrame(() => {
      trackRef.current?.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    });
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
      return;
    }

    const maximumScroll = track.scrollWidth - track.clientWidth;

    const canScrollRight =
      event.deltaY > 0 && track.scrollLeft < maximumScroll - 1;

    const canScrollLeft =
      event.deltaY < 0 && track.scrollLeft > 1;

    if (canScrollRight || canScrollLeft) {
      event.preventDefault();
      track.scrollLeft += event.deltaY;
    }
  };

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    dragState.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
      moved: false,
    };

    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    const track = trackRef.current;
    const state = dragState.current;

    if (!track || !state.active) {
      return;
    }

    const movement = event.clientX - state.startX;

    if (Math.abs(movement) > 5) {
      state.moved = true;
    }

    track.scrollLeft = state.startScrollLeft - movement;
  };

  const stopDragging = () => {
    dragState.current.active = false;
  };

  const handleClickCapture = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    if (!dragState.current.moved) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    dragState.current.moved = false;
  };

  const handleKeyboard = (
    event: KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollTrack("right");
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollTrack("left");
    }
  };

  return (
    <section
      id="engineering-portfolio"
      className="engineering-portfolio"
    >
      <div className="engineering-background" aria-hidden="true" />

      <div className="engineering-content">
        <header className="engineering-header">
          <p className="engineering-eyebrow">
            Technical Capabilities
          </p>

          <div className="engineering-heading-layout">
            <div>
              <h2>Engineering Portfolio</h2>
            </div>

            <p>
              Practical implementations across networking, systems,
              cloud infrastructure, security, compliance, and automation.
            </p>
          </div>
        </header>

        <div
          className="engineering-categories"
          role="tablist"
          aria-label="Engineering project categories"
        >
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={
                  isActive
                    ? "engineering-category active"
                    : "engineering-category"
                }
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="engineering-divider" />

        <div className="engineering-track-header">
          <div className="engineering-controls">
            <button
              type="button"
              onClick={() => scrollTrack("left")}
              aria-label="Scroll projects left"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollTrack("right")}
              aria-label="Scroll projects right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="engineering-track"
          tabIndex={0}
          aria-label={`${activeCategory} engineering projects`}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
          onClickCapture={handleClickCapture}
          onKeyDown={handleKeyboard}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .engineering-portfolio {
          --engineering-background-color: #0c1b2a;
          --engineering-panel: #172b3e;
          --engineering-panel-light: #1c3347;
          --engineering-text: #f8fafc;
          --engineering-muted: #94a6b8;
          --engineering-accent: #4edb91;
          --engineering-accent-soft: rgba(78, 219, 145, 0.12);
          --engineering-border: rgba(148, 166, 184, 0.18);
          --engineering-border-strong: rgba(148, 166, 184, 0.28);
          --engineering-page: clamp(1rem, 5vw, 5rem);
          --engineering-card-width: clamp(17rem, 27vw, 23rem);

          position: relative;
          overflow: hidden;
          padding: clamp(5rem, 8vw, 8rem) 0;
          color: var(--engineering-text);
          background: var(--engineering-background-color);
          isolation: isolate;
        }

        .engineering-background {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 88% 8%,
              rgba(78, 219, 145, 0.055),
              transparent 30%
            ),
            linear-gradient(
              180deg,
              #0c1b2a 0%,
              #0f2031 52%,
              #0c1b2a 100%
            );
        }

        .engineering-background::after {
          position: absolute;
          inset: 0;
          content: "";
          opacity: 0.08;
          background-image:
            linear-gradient(
              rgba(148, 166, 184, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 166, 184, 0.08) 1px,
              transparent 1px
            );
          background-size: 72px 72px;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 18%,
            black 82%,
            transparent
          );
        }

        .engineering-content {
          position: relative;
          z-index: 1;
        }

        .engineering-header {
          padding: 0 var(--engineering-page);
          margin-bottom: 2.25rem;
        }

        .engineering-eyebrow {
          margin: 0 0 0.9rem;
          color: var(--engineering-accent);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .engineering-heading-layout {
          display: grid;
          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(18rem, 0.85fr);
          gap: clamp(2rem, 6vw, 7rem);
          align-items: end;
          max-width: 1400px;
        }

        .engineering-heading-layout h2 {
          margin: 0;
          color: var(--engineering-text);
          font-size: clamp(2.7rem, 6vw, 5.7rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
        }

        .engineering-heading-layout > p {
          max-width: 650px;
          margin: 0;
          color: var(--engineering-muted);
          font-size: clamp(1rem, 1.5vw, 1.16rem);
          line-height: 1.75;
        }

        .engineering-categories {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          padding: 0.25rem var(--engineering-page) 1rem;
          scrollbar-width: none;
        }

        .engineering-categories::-webkit-scrollbar {
          display: none;
        }

        .engineering-category {
          flex: 0 0 auto;
          padding: 0.7rem 1rem;
          color: #b8c4cf;
          font: inherit;
          font-size: 0.86rem;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid var(--engineering-border);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.015);
          transition:
            color 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            transform 180ms ease;
        }

        .engineering-category:hover {
          color: #ffffff;
          border-color: rgba(78, 219, 145, 0.42);
          background: rgba(78, 219, 145, 0.055);
          transform: translateY(-1px);
        }

        .engineering-category.active {
          color: #07150f;
          border-color: var(--engineering-accent);
          background: var(--engineering-accent);
        }

        .engineering-category:focus-visible {
          outline: 2px solid var(--engineering-accent);
          outline-offset: 3px;
        }

        .engineering-divider {
          height: 1px;
          margin: 0 var(--engineering-page);
          background: rgba(148, 166, 184, 0.18);
        }

        .engineering-track-header {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 1rem var(--engineering-page) 0.25rem;
        }

        .engineering-track-header > p {
          margin: 0;
          color: #7f92a4;
          font-size: 0.84rem;
        }

        .engineering-controls {
          display: flex;
          gap: 0.55rem;
        }

        .engineering-controls button {
          display: grid;
          width: 2.7rem;
          height: 2.7rem;
          color: #dce5ec;
          font: inherit;
          font-size: 1.05rem;
          cursor: pointer;
          border: 1px solid var(--engineering-border-strong);
          border-radius: 999px;
          background: var(--engineering-panel);
          place-items: center;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            color 180ms ease;
        }

        .engineering-controls button:hover {
          color: var(--engineering-accent);
          border-color: rgba(78, 219, 145, 0.42);
          background: var(--engineering-panel-light);
          transform: translateY(-2px);
        }

        .engineering-track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: var(--engineering-card-width);
          gap: 1rem;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 1rem var(--engineering-page) 1.35rem;
          cursor: grab;
          outline: none;
          overscroll-behavior-x: contain;
          scroll-behavior: smooth;
          scroll-padding-inline: var(--engineering-page);
          scroll-snap-type: x proximity;
          -webkit-overflow-scrolling: touch;
          scrollbar-color:
            var(--engineering-accent)
            rgba(255, 255, 255, 0.05);
          scrollbar-width: thin;
          touch-action: pan-x pan-y;
        }

        .engineering-track:active {
          cursor: grabbing;
        }

        .engineering-track:focus-visible {
          box-shadow: inset 0 0 0 2px rgba(78, 219, 145, 0.28);
        }

        .engineering-track::-webkit-scrollbar {
          height: 8px;
        }

        .engineering-track::-webkit-scrollbar-track {
          margin-inline: var(--engineering-page);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.045);
        }

        .engineering-track::-webkit-scrollbar-thumb {
          border: 2px solid #0f2031;
          border-radius: 999px;
          background: var(--engineering-accent);
        }

        .engineering-card {
          min-height: 430px;
          overflow: hidden;
          position: relative;
          border: 1px solid var(--engineering-border);
          border-radius: 22px;
          background: var(--engineering-panel);
          box-shadow:
            0 16px 40px rgba(3, 10, 18, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.025);
          scroll-snap-align: start;
          transition:
            transform 250ms ease,
            border-color 250ms ease,
            box-shadow 250ms ease;
        }

        .engineering-card:hover,
        .engineering-card:focus-within {
          z-index: 2;
          border-color: rgba(78, 219, 145, 0.42);
          box-shadow:
            0 28px 58px rgba(3, 10, 18, 0.4),
            0 0 0 1px rgba(78, 219, 145, 0.08);
          transform: translateY(-7px);
        }

        .engineering-card > a {
          display: flex;
          height: 100%;
          color: inherit;
          text-decoration: none;
          flex-direction: column;
          -webkit-user-drag: none;
        }

        .engineering-card > a:focus-visible {
          outline: 2px solid var(--engineering-accent);
          outline-offset: -4px;
        }

        .engineering-visual {
          min-height: 185px;
          overflow: hidden;
          position: relative;
          border-bottom: 1px solid var(--engineering-border);
          background-position: center;
          background-size: cover;
        }

        .engineering-visual-1 {
          background:
            radial-gradient(
              circle at 78% 22%,
              rgba(78, 219, 145, 0.14),
              transparent 28%
            ),
            linear-gradient(135deg, #1a3348, #13283a 64%);
        }

        .engineering-visual-2 {
          background:
            linear-gradient(
              125deg,
              transparent 44%,
              rgba(148, 166, 184, 0.08)
            ),
            linear-gradient(135deg, #152b3e, #1b354a);
        }

        .engineering-visual-3 {
          background:
            radial-gradient(
              circle at 24% 72%,
              rgba(78, 219, 145, 0.1),
              transparent 30%
            ),
            linear-gradient(145deg, #1a3247, #112437);
        }

        .engineering-visual-4 {
          background:
            linear-gradient(
              45deg,
              rgba(148, 166, 184, 0.035) 25%,
              transparent 25%,
              transparent 75%,
              rgba(148, 166, 184, 0.035) 75%
            ),
            linear-gradient(135deg, #142a3d, #1a3348);
          background-size:
            24px 24px,
            auto;
        }

        .engineering-grid {
          position: absolute;
          inset: 18px;
          overflow: hidden;
          border: 1px solid rgba(148, 166, 184, 0.18);
          border-radius: 15px;
          background:
            linear-gradient(
              rgba(148, 166, 184, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 166, 184, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.025),
              transparent 65%
            );
          background-size:
            26px 26px,
            26px 26px,
            auto;
          transition: transform 450ms ease;
        }

        .engineering-card:hover .engineering-grid,
        .engineering-card:focus-within .engineering-grid {
          transform: scale(1.035);
        }

        .engineering-bars {
          position: absolute;
          right: 17%;
          bottom: 22%;
          width: 46%;
          height: 7px;
          border-radius: 999px;
          background: var(--engineering-accent);
          box-shadow:
            0 -24px 0 rgba(78, 219, 145, 0.28),
            0 -48px 0 rgba(78, 219, 145, 0.12);
        }

        .engineering-number {
          position: absolute;
          top: 30px;
          right: 30px;
          color: rgba(248, 250, 252, 0.68);
          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;
          font-size: 0.73rem;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .engineering-card-body {
          display: flex;
          flex: 1;
          gap: 0.75rem;
          padding: 1.25rem;
          flex-direction: column;
        }

        .engineering-pill {
          align-self: flex-start;
          padding: 0.3rem 0.62rem;
          color: var(--engineering-accent);
          font-size: 0.74rem;
          font-weight: 750;
          border: 1px solid rgba(78, 219, 145, 0.24);
          border-radius: 999px;
          background: rgba(78, 219, 145, 0.055);
        }

        .engineering-card-body h3 {
          margin: 0.15rem 0 0;
          color: #ffffff;
          font-size: 1.22rem;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .engineering-card-body > p {
          margin: 0;
          color: var(--engineering-muted);
          font-size: 0.92rem;
          line-height: 1.62;
        }

        .engineering-tags {
          display: flex;
          gap: 0.42rem;
          flex-wrap: wrap;
        }

        .engineering-tags span {
          padding: 0.27rem 0.5rem;
          color: #aebdca;
          font-size: 0.74rem;
          border: 1px solid rgba(148, 166, 184, 0.12);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.02);
        }

        .engineering-link {
          display: inline-flex;
          gap: 0.45rem;
          align-items: center;
          margin-top: auto;
          padding-top: 0.45rem;
          color: var(--engineering-accent);
          font-size: 0.88rem;
          font-weight: 750;
        }

        .engineering-link span {
          transition: transform 180ms ease;
        }

        .engineering-card:hover .engineering-link span,
        .engineering-card:focus-within .engineering-link span {
          transform: translateX(4px);
        }

        @media (max-width: 850px) {
          .engineering-heading-layout {
            grid-template-columns: 1fr;
            gap: 1.3rem;
          }
        }

        @media (max-width: 700px) {
          .engineering-portfolio {
            --engineering-page: 1rem;
            --engineering-card-width: min(82vw, 20.325rem);
          }

          .engineering-heading-layout h2 {
            font-size: clamp(2.5rem, 13vw, 4rem);
          }

          .engineering-track {
            scroll-snap-type: x mandatory;
            scroll-behavior: auto;
            scroll-padding-inline: 1rem;
            padding-inline: 1rem;
          }

          .engineering-card {
            scroll-snap-align: start;
            scroll-snap-stop: normal;
            min-height: 410px;
          }

          .engineering-visual {
            min-height: 165px;
          }

          .engineering-controls {
            display: none;
          }

          .engineering-track-header {
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .engineering-track {
            scroll-behavior: auto;
          }

          .engineering-card,
          .engineering-grid,
          .engineering-link span,
          .engineering-category,
          .engineering-controls button {
            transition: none;
          }

          .engineering-card:hover,
          .engineering-card:focus-within,
          .engineering-card:hover .engineering-grid,
          .engineering-card:focus-within .engineering-grid {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}