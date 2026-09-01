'use client';

import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0d1b2a]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo.png"
            alt="Vigilant Consulting Logo"
            width={48}
            height={48}
            priority
            className="h-10 w-auto"
          />

          <div className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-[#e8edf2]">
              Vigilant
            </span>

            <small className="block text-[10px] uppercase tracking-[0.18em] text-[#8a9ba8]">
              Consulting
            </small>
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