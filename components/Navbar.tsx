'use client';

import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0d1b2a]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2d6a4f] bg-gradient-to-br from-[#1a3a2a] to-[#2d6a4f] text-sm font-bold text-[#52d48a]">
            V
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-[#e8edf2]">Vigilant</span>
            <small className="block text-[10px] uppercase tracking-[0.18em] text-[#8a9ba8]">Consulting</small>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-[#8a9ba8] no-underline transition hover:text-[#e8edf2]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full bg-[#52d48a] px-5 py-2.5 text-sm font-semibold text-[#0a1a0f] no-underline transition hover:bg-[#6de09a] md:inline-flex"
        >
          Request a consultation
        </Link>
      </nav>
    </header>
  );
}
