import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-brand-dark text-gray-100 sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-xl font-bold">
          Vigilant Tech
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/case-studies" className="hover:underline">Case&nbsp;Studies</Link>
          <Link href="/blog" className="hover:underline">Insights</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
        </nav>
      </div>
    </header>
  );
}