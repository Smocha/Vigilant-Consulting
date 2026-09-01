import Link from "next/link";

const companyLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Engineering Portfolio",
    href: "/#engineering-portfolio",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Insights",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const resourceLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms and Conditions",
    href: "/terms",
  },
];

const trustItems = [
  "Cybersecurity Focused",
  "Compliance Ready",
  "Security Engineering",
  "Remote Consulting",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company overview */}
          <section aria-labelledby="footer-company-heading">
            <Link
              href="/"
              className="inline-flex items-start"
              aria-label="Vigilant Consulting home"
            >
              <span>
                <span
                  id="footer-company-heading"
                  className="block text-lg font-semibold tracking-tight text-white"
                >
                  Vigilant Consulting
                </span>

                <span className="block text-xs uppercase tracking-[0.2em] text-emerald-400">
                  Cybersecurity Engineering & Compliance
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              We help organizations close the gap between what compliance
              requires and what their systems actually do.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
              <p className="text-sm font-semibold text-white">
                Practical Security Guidance
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Straight-talk security guidance grounded in implementation, not
                theory.
              </p>
            </div>
          </section>

          {/* Company navigation */}
          <nav aria-labelledby="footer-company-links-heading">
            <h2
              id="footer-company-links-heading"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
            >
              Company
            </h2>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-labelledby="footer-resource-links-heading">
            <h2
              id="footer-resource-links-heading"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
            >
              Resources
            </h2>

            <ul className="mt-6 space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/vigilant-llc-0bb993415"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Visit Vigilant Consulting on LinkedIn"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </nav>

          {/* Contact */}
          <section aria-labelledby="footer-contact-heading">
            <h2
              id="footer-contact-heading"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
            >
              Contact
            </h2>

            <div className="mt-6 space-y-6 text-sm">
              <div>
                <h3 className="font-medium text-white">Location</h3>

                <p className="mt-2 leading-6 text-slate-400">
                  San Diego, California
                  <br />
                  Remote consulting nationwide
                </p>
              </div>

              <div>
                <h3 className="font-medium text-white">Email</h3>

                <a
                  href="mailto:info@vigilantechusa.com"
                  className="mt-2 inline-block break-all text-slate-400 transition-colors duration-200 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  info@vigilantechusa.com
                </a>
              </div>

              <div>
                <h3 className="font-medium text-white">Business Hours</h3>

                <p className="mt-2 leading-6 text-slate-400">
                  Monday–Friday
                  <br />
                  8:00 AM–5:00 PM Pacific
                  <br />
                  Appointments available upon request
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <ul
            className="flex flex-wrap gap-x-7 gap-y-4"
            aria-label="Vigilant Consulting business attributes"
          >
            {trustItems.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-400"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />

                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4">
          <p className="text-xs leading-6 text-slate-500">
            Information presented on this website is provided for general
            informational purposes only. It does not constitute legal advice,
            regulatory certification, or a guarantee of cybersecurity
            compliance. Engagement scope, deliverables, and conclusions are
            established through a written agreement.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {currentYear} Vigilant Consulting LLC. All rights reserved.
          </p>

          <p>Cybersecurity • Compliance • Engineering</p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}